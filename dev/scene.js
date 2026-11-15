// The scene: the 3D pharmacy the story plays in. This is the source; build.mjs bundles it
// with three.js into one classic script (scene.<hash>.js), which the page loads only in the
// story form (see the boot script in index.html). The script may arrive before the page
// knows the machine can draw it: it waits for that verdict before touching WebGL.
import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { mergeGeometries, mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

(() => {
  "use strict";
  // The scene starts only in the story form, once the first screen has painted, and takes
  // over from the night still with its own frame of that same picture; the one thing that
  // changes is the green cross coming on.
  const root = document.documentElement;
  const story = window.rebotica;
  const boot = window.orkavaBoot;
  const params = new URLSearchParams(location.search);
  // ?poster=desktop|phone&dpr=1|2|1.5&t=0|9 renders the hero frame as a still (window.__poster)
  const POSTER = params.get("poster");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrowMQ = matchMedia("(max-width: 760px)");

  const sst = (x, a, b) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  // hand the main thread back to the browser between steps of the build
  const pause = () => new Promise((r) => (globalThis.scheduler?.yield ? scheduler.yield().then(r) : setTimeout(r, 0)));
  const SOFTWARE = /swiftshader|llvmpipe|softpipe|software|basic render|lavapipe/i;
  const isStory = () => root.classList.contains("story");

  let renderer, gpu = "";
  start();

  async function start() {
    if (!isStory() || !(await boot.verdict) || !isStory()) return;
    await story.released;
    if (!isStory()) return;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("scene"), antialias: true, powerPreference: "high-performance",
        alpha: false, failIfMajorPerformanceCaveat: !POSTER,
      });
      const gl = renderer.getContext();
      if (!gl) throw new Error("no gl");
      const info = gl.getExtension("WEBGL_debug_renderer_info");
      gpu = String(gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
      if (!POSTER && SOFTWARE.test(gpu)) throw new Error("software");
      // a lost context is a fault worth seeing in any console that is watching
      renderer.domElement.addEventListener("webglcontextlost", () => console.warn("webglcontextlost"));
    } catch {
      renderer?.dispose();
      story.goPlain(true);
      return;
    }
    // the plain page took over (from here on, at any point of the build): the scene stops
    // and lets its context go
    addEventListener("orkava:plain", () => {
      renderer.setAnimationLoop(null);
      renderer.dispose();
      renderer.forceContextLoss();
    }, { once: true });
    await main();
  }

  async function main() {
    // ───────────────────────── renderer, scene, camera
    renderer.setPixelRatio(story.pixelRatio());
    // the shaders are known good; asking the driver for each one's logs stalls the main thread
    renderer.debug.checkShaderErrors = false;
    renderer.toneMapping = THREE.NoToneMapping;
    // The night: the canvas is opaque ink, the poster too (glow does not survive alpha).
    renderer.setClearColor(0x0e0f12, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(27, 1, 0.1, 200);
    const rng = mulberry32(7);

    const INK = new THREE.Color(0x0e0f12);
    const GREEN = new THREE.Color(0x1fa35c);
    // Night palette. Edges are pale hairlines while the shop is dark and turn to ink as the
    // lights come up. The three message channels each have one soft hue.
    const LINE_NIGHT = new THREE.Color(0x7d8494);
    const HUES = [0x8fd9b4, 0x9db7ea, 0xe8a9bd].map((c) => new THREE.Color(c));
    const PARCEL_HUE = new THREE.Color(0xffd7a8);
    const TONES = {
      card: new THREE.Color(0xffffff),
      alt: new THREE.Color(0xededea),
      grey: new THREE.Color(0xd2d2ce),
      mid: new THREE.Color(0xb4b4af),
      poche: new THREE.Color(0x45474d),
    };
    let dayNow = 0;
    // The loose things are lit card by day and light by night: a Lambert material whose
    // per-instance colour is also emitted, by uGlow (1 at night for the messages and the
    // post images, 0 once the sun is up).
    function glowing(mat) {
      mat.userData.glow = { value: 0 };
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.uGlow = mat.userData.glow;
        sh.fragmentShader = "uniform float uGlow;\n" + sh.fragmentShader.replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
          totalEmissiveRadiance += diffuseColor.rgb * uGlow;
          diffuseColor.rgb *= 1.0 - uGlow;`);
      };
      return mat;
    }
    const FY = 0.06; // floor slab top
    const DESK_Y = FY + 0.76;

    // Line materials: every ink edge in the model is drawn with one of these. Widths are
    // in CSS pixels at the reference hero scale; the frame scales them (see lineK).
    const lineMats = [];
    const mkLine = (w, opts = {}) => {
      const m = new LineMaterial({ color: opts.color ?? 0x0e0f12, linewidth: w, transparent: !!opts.opacity, opacity: opts.opacity ?? 1, vertexColors: !!opts.vertexColors });
      m.userData.base = w;
      lineMats.push(m);
      return m;
    };
    const lineCoarse = mkLine(1.3);
    const lineFine = mkLine(0.8, { opacity: 0.75 });
    const lineDyn = mkLine(1.1, { color: 0xffffff, vertexColors: true });
    const lineCable = mkLine(2.2, { color: 0xffffff, vertexColors: true });
    const lineOrky = mkLine(1.5, { color: 0xe8e8e5 });
    const lineStatic = [lineCoarse, lineFine];

    // ───────────────────────── static model builder
    const solids = [];
    const hullGeos = [];
    const segA = []; // coarse edges
    const segB = []; // fine edges
    const v3 = (x, y, z) => new THREE.Vector3(x, y, z);

    function pushGeo(geo, m, tone) {
      geo.applyMatrix4(m);
      const n = geo.attributes.position.count;
      const c = new Float32Array(n * 3);
      const col = TONES[tone] ?? TONES.card;
      for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
      geo.setAttribute("color", new THREE.BufferAttribute(c, 3));
      solids.push(geo);
    }
    function boxEdges(m, w, h, d, arr) {
      const c = [];
      for (let i = 0; i < 8; i++) c.push(v3(i & 4 ? w / 2 : -w / 2, i & 2 ? h / 2 : -h / 2, i & 1 ? d / 2 : -d / 2).applyMatrix4(m));
      for (let i = 0; i < 8; i++) for (const b of [1, 2, 4]) if (!(i & b)) arr.push(c[i], c[i | b]);
    }
    // Box with its bottom at y.
    function box(x, y, z, w, h, d, o = {}) {
      const m = new THREE.Matrix4().makeRotationY(o.ry ?? 0).setPosition(x, y + h / 2, z);
      boxM(m, w, h, d, o);
    }
    function boxM(m, w, h, d, o = {}) {
      pushGeo(new THREE.BoxGeometry(w, h, d), m, o.tone ?? "card");
      if (o.edges !== false) boxEdges(m, w, h, d, o.fine ? segB : segA);
    }
    function addHull(geo, m) {
      const g = geo.clone();
      g.deleteAttribute("normal");
      g.deleteAttribute("uv");
      const mg = mergeVertices(g, 1e-4);
      mg.computeVertexNormals();
      mg.applyMatrix4(m);
      hullGeos.push(mg);
    }
    function cyl(x, y, z, r, h, o = {}) {
      const m = new THREE.Matrix4().makeTranslation(x, y + h / 2, z);
      const g = new THREE.CylinderGeometry(r, r, h, 28);
      addHull(g, m);
      pushGeo(g, m, o.tone ?? "card");
      const arr = o.fine ? segB : segA;
      for (const yy of [y, y + h]) {
        for (let i = 0; i < 28; i++) {
          const a0 = (i / 28) * Math.PI * 2, a1 = ((i + 1) / 28) * Math.PI * 2;
          arr.push(v3(x + Math.cos(a0) * r, yy, z + Math.sin(a0) * r), v3(x + Math.cos(a1) * r, yy, z + Math.sin(a1) * r));
        }
      }
    }
    function sphere(x, y, z, r, o = {}) {
      const m = new THREE.Matrix4().makeTranslation(x, y, z);
      const g = new THREE.SphereGeometry(r, 28, 18);
      addHull(g, m);
      pushGeo(g, m, o.tone ?? "card");
    }
    // A cut wall: white card with a dark section fill on its cut top.
    function wall(x, z, w, h, d) {
      box(x, FY, z, w, h, d);
      box(x, FY + h, z, w, 0.004, d, { tone: "poche", edges: false });
    }

    // Base plate and floor slab
    box(-0.2, -0.3, 0.15, 9.8, 0.3, 7.1);
    box(-0.2, 0, 0, 8.14, FY, 5.14);

    // Walls. Building spans x -4.2..3.8, z -2.5..2.5; dividing wall at x 0.6.
    const T = 0.14, HW = 2.4, LOW = 0.42;
    wall(-0.2, -2.5, 8.0 + T, HW, T); // back
    wall(3.8, 0.07, T, HW, 5.0 + T); // right (far side, full height)
    wall(-4.2, 0.0, T, LOW, 5.0 - T); // left (camera side, cut low)
    wall(-3.85, 2.5, 0.7, LOW, T); // front, left of the door
    wall(0.6, 2.5, 6.4, LOW, T); // front, right of the door (x -2.6..3.8)
    wall(0.6, -2.29, T, 1.25, 0.42 - T); // dividing wall, behind the doorway
    wall(0.6, 0.73, T, 1.25, 3.54); // dividing wall, in front of the doorway (z -1.04..2.5)
    // Corner pier on the street corner, carrying the cross.
    box(-4.2, FY, 2.5, 0.3, 2.62, 0.3);
    box(-4.2, FY + 2.62, 2.5, 0.3, 0.004, 0.3, { tone: "poche", edges: false });

    await pause();
    // ── Shop: shelving along the back wall
    const SH_Z = -2.43 + 0.2;
    box(-1.85, FY, SH_Z, 4.3, 0.46, 0.4); // closed base
    for (const y of [0.86, 1.26, 1.66, 2.04]) box(-1.85, FY + y - 0.025, SH_Z, 4.3, 0.025, 0.4);
    for (const x of [-4.0, -2.925, -1.85, -0.775, 0.3]) box(x, FY + 0.46, SH_Z, 0.03, 1.6, 0.4);
    for (const y of [0.46, 0.86, 1.26, 1.66]) {
      for (let k = 0; k < 4; k++) {
        const x0 = -4.0 + k * 1.075 + 0.03, x1 = x0 + 1.045;
        fillRow(x0, x1, (x, w, h, d, tone) => box(x, FY + y, SH_Z + 0.2 - d / 2 - 0.02, w, h, d, { tone, fine: true }), 0.36, y > 1.5 ? 0.2 : 0.28);
      }
    }
    // Counter (mostrador) with till
    box(-2.0, FY, -0.65, 2.6, 0.92, 0.56);
    box(-2.0, FY + 0.92, -0.62, 2.72, 0.035, 0.66);
    box(-2.0, FY + 0.2, -0.36, 2.6, 0.005, 0.005, { fine: true, edges: false });
    {
      const ty = FY + 0.955;
      box(-1.25, ty, -0.7, 0.24, 0.07, 0.2);
      const m = new THREE.Matrix4().makeRotationX(-0.38).setPosition(-1.25, ty + 0.17, -0.74);
      boxM(m, 0.26, 0.17, 0.02);
      const ms = new THREE.Matrix4().makeRotationX(-0.38).setPosition(-1.25, ty + 0.17, -0.729);
      boxM(ms, 0.22, 0.13, 0.002, { tone: "grey", edges: false });
      box(-1.25, ty, -0.76, 0.04, 0.1, 0.04, { fine: true });
      // small basket of products on the counter
      box(-2.75, ty, -0.6, 0.3, 0.08, 0.2, { tone: "alt" });
    }
    // Low display gondola near the window
    box(-0.55, FY, 1.55, 1.3, 0.55, 0.5);
    box(-0.55, FY + 0.55, 1.55, 1.36, 0.025, 0.56);
    fillRow(-1.18, 0.08, (x, w, h, d, tone) => box(x, FY + 0.575, 1.55, w, h, d, { tone, fine: true }), 0.3, 0.22);
    await pause();
    // ── Rebotica: desk, ERP computer, phone, tray, shelving, boxes, sheets
    box(1.02, FY, -2.08, 0.035, 0.72, 0.6);
    box(2.78, FY, -2.08, 0.035, 0.72, 0.6);
    box(1.9, FY + 0.72, -2.08, 1.84, 0.04, 0.64);
    box(1.32, FY + 0.12, -2.08, 0.5, 0.6, 0.58); // drawer pedestal
    box(1.32, FY + 0.42, -1.787, 0.44, 0.002, 0.002, { fine: true, edges: false });
    // CRT computer, the ERP
    const CRT = v3(2.38, DESK_Y, -2.12);
    box(CRT.x, DESK_Y, CRT.z - 0.03, 0.32, 0.3, 0.3);
    box(CRT.x, DESK_Y, CRT.z + 0.07, 0.44, 0.38, 0.22);
    box(CRT.x, DESK_Y + 0.075, CRT.z + 0.181, 0.33, 0.25, 0.004, { tone: "grey" });
    box(CRT.x - 0.02, DESK_Y, -1.86, 0.38, 0.022, 0.12, { fine: false });
    // desk phone
    box(1.88, DESK_Y, -2.2, 0.17, 0.055, 0.14);
    box(1.88, DESK_Y + 0.055, -2.22, 0.19, 0.035, 0.05);
    // letter tray
    const TRAY = v3(1.36, DESK_Y, -2.0);
    box(TRAY.x, DESK_Y, TRAY.z, 0.42, 0.012, 0.32);
    box(TRAY.x, DESK_Y + 0.012, TRAY.z - 0.155, 0.42, 0.05, 0.01);
    box(TRAY.x, DESK_Y + 0.012, TRAY.z + 0.155, 0.42, 0.05, 0.01);
    box(TRAY.x - 0.205, DESK_Y + 0.012, TRAY.z, 0.01, 0.05, 0.3);
    box(TRAY.x + 0.205, DESK_Y + 0.012, TRAY.z, 0.01, 0.05, 0.3);
    // smartphone on a little stand, the one that receives the notices
    const PHONE_M = new THREE.Matrix4().makeRotationX(-0.28).setPosition(1.72, DESK_Y + 0.085, -1.93);
    boxM(PHONE_M, 0.085, 0.16, 0.012);
    boxM(PHONE_M.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0, 0.0065)), 0.07, 0.135, 0.002, { tone: "grey", edges: false });
    box(1.72, DESK_Y, -1.955, 0.07, 0.02, 0.06, { fine: true });
    // chair
    cyl(2.05, FY, -1.4, 0.03, 0.42, { fine: true });
    box(2.05, FY + 0.42, -1.4, 0.4, 0.04, 0.38);
    box(2.05, FY + 0.46, -1.21, 0.4, 0.36, 0.035);
    // storage shelving along the right wall (x 3.28..3.73, z -2.2..1.2)
    const RS_X = 3.505, RS_Z0 = -2.2, RS_Z1 = 1.2;
    const RS_LEVELS = [0.08, 0.55, 1.02, 1.49, 1.96];
    for (const y of RS_LEVELS) box(RS_X, FY + y - 0.025, (RS_Z0 + RS_Z1) / 2, 0.45, 0.025, RS_Z1 - RS_Z0);
    for (const z of [RS_Z0, -1.067, 0.067, RS_Z1]) box(RS_X, FY, z, 0.45, 1.96, 0.03);
    for (const lvl of [0, 3]) {
      const y = FY + RS_LEVELS[lvl];
      fillRowZ(RS_Z0 + 0.03, RS_Z1 - 0.03, (z, w, h, d, tone) => box(RS_X + 0.04, y, z, d, h, w, { tone }), lvl === 3 ? 0.4 : 0.42);
    }
    // stacks of cartons on the floor
    box(1.18, FY, 1.95, 0.46, 0.34, 0.4, { ry: 0.08 });
    box(1.2, FY + 0.34, 1.93, 0.38, 0.28, 0.34, { ry: -0.12 });
    box(1.74, FY, 2.08, 0.36, 0.3, 0.3, { ry: 0.3, tone: "alt" });
    box(3.25, FY, 2.0, 0.44, 0.4, 0.44, { ry: -0.05 });
    box(3.27, FY + 0.4, 2.02, 0.34, 0.26, 0.32, { ry: 0.2, tone: "alt" });
    // loose sheets
    const sheet = (x, y, z, ry) => box(x, y, z, 0.21, 0.003, 0.29, { ry, fine: true });
    sheet(2.0, DESK_Y, -1.98, 0.3);
    sheet(1.9, DESK_Y + 0.003, -2.02, -0.2);
    sheet(1.55, FY, 0.6, 0.7);
    sheet(2.55, FY, -0.2, -0.4);
    sheet(1.25, FY, -0.85, 1.2);

    // ── Street: one lollipop tree on the pavement
    cyl(4.25, 0, 3.1, 0.035, 0.85, { fine: true });
    sphere(4.25, 1.22, 3.1, 0.4);

    await pause();
    // Merge the static model into one mesh, one hull, two line sets.
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    const cardMat = new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const staticMesh = new THREE.Mesh(mergeGeometries(solids), cardMat);
    staticMesh.castShadow = staticMesh.receiveShadow = true;
    modelGroup.add(staticMesh);

    await pause();
    const hullMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: { res: { value: new THREE.Vector2(1, 1) }, width: { value: 1.25 }, color: { value: INK.clone() } },
      vertexShader: `
        uniform vec2 res; uniform float width;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec4 clip = projectionMatrix * mv;
          vec3 nv = normalize(normalMatrix * normal);
          vec4 clip2 = projectionMatrix * (mv + vec4(nv * 0.01, 0.0));
          vec2 dir = normalize(clip2.xy / clip2.w - clip.xy / clip.w + 1e-7);
          clip.xy += dir * width * 2.0 / res * clip.w;
          gl_Position = clip;
        }`,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          gl_FragColor = vec4(color, 1.0);
          #include <colorspace_fragment>
        }`,
    });
    modelGroup.add(new THREE.Mesh(mergeGeometries(hullGeos), hullMat));

    await pause();
    const toFlat = (segs) => {
      const a = new Float32Array(segs.length * 3);
      segs.forEach((p, i) => { a[i * 3] = p.x; a[i * 3 + 1] = p.y; a[i * 3 + 2] = p.z; });
      return a;
    };
    const linesA = new LineSegments2(new LineSegmentsGeometry().setPositions(toFlat(segA)), lineCoarse);
    const linesB = new LineSegments2(new LineSegmentsGeometry().setPositions(toFlat(segB)), lineFine);
    modelGroup.add(linesA, linesB);
    await pause();
    // ── People: the pharmacist comes out to the counter, the first customer walks in.
    // A rounded card body with small arms and legs and a round head. The pharmacist wears a
    // white coat with a skirt, a V at the collar and a small green cross; a customer is grey
    // and leaves with a paper bag. The body is one mesh and one outline; each limb swings on
    // its own pivot. Built in figure units (about 1.19 tall) and scaled up to stand by the
    // counter.
    const PS = 1.4;
    const PR = 0.15; // body radius
    const tinted = (geo, col) => {
      geo.deleteAttribute("uv");
      const n = geo.attributes.position.count, c = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
      geo.setAttribute("color", new THREE.BufferAttribute(c, 3));
      return geo;
    };
    const hullOf = (geos) => mergeGeometries(geos.map((g) => {
      const h = new THREE.BufferGeometry().setAttribute("position", g.attributes.position.clone());
      h.setIndex(g.index.clone());
      const m = mergeVertices(h, 1e-4);
      m.computeVertexNormals();
      return m;
    }));
    const ringSegs = (y, r, out, n = 24) => {
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
        out.push(v3(Math.sin(a0) * r, y, Math.cos(a0) * r), v3(Math.sin(a1) * r, y, Math.cos(a1) * r));
      }
    };
    // card solid + ink silhouette, and optional ink creases, as one little group (in the
    // figure's own materials, mats, when it has them)
    function figurePart(geos, segs, mats) {
      const g = new THREE.Group();
      const m = new THREE.Mesh(mergeGeometries(geos), mats?.solid ?? cardMat);
      m.castShadow = m.receiveShadow = true;
      g.add(m, new THREE.Mesh(hullOf(geos), mats?.hull ?? hullMat));
      if (segs?.length) g.add(new LineSegments2(new LineSegmentsGeometry().setPositions(toFlat(segs)), mats?.line ?? lineCoarse));
      return g;
    }
    // A customer has materials of its own: the tone is the material's colour (the vertices
    // are white), so each one can be a different grey, and all of it can fade on the street.
    // The outline and the edges share the model's uniforms and colour, with an opacity.
    function figureMats() {
      const solid = (c) => new THREE.MeshLambertMaterial({ color: c, vertexColors: true, transparent: true, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
      const U = hullMat.uniforms;
      const hull = new THREE.ShaderMaterial({
        side: THREE.BackSide, transparent: true,
        uniforms: { res: U.res, width: U.width, color: U.color, opacity: { value: 1 } },
        vertexShader: hullMat.vertexShader,
        fragmentShader: hullMat.fragmentShader.replace("uniform vec3 color;", "uniform vec3 color; uniform float opacity;").replace("vec4(color, 1.0)", "vec4(color, opacity)"),
      });
      const line = mkLine(1.3);
      line.transparent = true;
      lineStatic.push(line);
      return { body: solid(TONES.grey), limb: solid(TONES.mid), bag: solid(TONES.card), hull, line };
    }
    function person(role, home) {
      const ph = role === "ph";
      const fm = ph ? null : figureMats();
      const as = (solid) => fm && { solid, hull: fm.hull, line: fm.line };
      const bodyC = TONES.card, legC = TONES.card;
      const outer = new THREE.Group(), pivot = new THREE.Group();
      pivot.scale.setScalar(PS);
      outer.add(pivot);
      const geos = [
        tinted(new THREE.CapsuleGeometry(PR, 0.36, 8, 20).translate(0, 0.3 + PR + 0.18, 0), bodyC),
        tinted(new THREE.SphereGeometry(0.105, 24, 16).translate(0, 1.08, 0), bodyC),
      ];
      const segs = [];
      if (ph) {
        // the coat's skirt, closed so it shades like card; the legs come out under it
        geos.push(tinted(new THREE.CylinderGeometry(PR + 0.008, 0.2, 0.42, 32).translate(0, 0.46, 0), bodyC));
        ringSegs(0.67, PR + 0.008, segs);
        ringSegs(0.25, 0.2, segs);
        // the V at the collar, drawn on the body's surface (the capsule's top is a dome)
        const rAt = (y) => (y > 0.81 ? Math.sqrt(Math.max(0, PR * PR - (y - 0.81) ** 2)) : PR);
        let prev = null;
        for (let i = 0; i <= 12; i++) {
          const u = i / 12, x = (u * 2 - 1) * 0.07, y = 0.78 + (0.925 - 0.78) * Math.abs(u * 2 - 1);
          const r = rAt(y), p = v3(x, y, Math.sqrt(Math.max(0, r * r - x * x)) + 0.004);
          if (prev) segs.push(prev, p);
          prev = p;
        }
        // the small green cross on the chest, the one colour on either figure, on the side
        // that faces the camera once she stands at the counter
        const s = 0.055, cm = new THREE.Matrix4().makeRotationY(-0.52).setPosition(-0.075, 0.7, 0.132);
        for (const [w, h] of [[s, s * 0.34], [s * 0.34, s]]) geos.push(tinted(new THREE.BoxGeometry(w, h, 0.008).applyMatrix4(cm), GREEN));
      }
      pivot.add(figurePart(geos, segs, as(fm?.body)));
      // limbs: a pivot at the hip or shoulder that swings, splayed a little at rest
      const limb = (x, y, r, len, col, rz, solid) => {
        const p = new THREE.Group(), q = new THREE.Group();
        p.position.set(x, y, 0);
        q.rotation.z = rz;
        p.add(q);
        q.add(figurePart([tinted(new THREE.CapsuleGeometry(r, len, 6, 14).translate(0, -(r + len / 2), 0), col)], null, as(solid)));
        pivot.add(p);
        return p;
      };
      const legs = [limb(-0.07, 0.36, 0.055, 0.25, legC, 0, fm?.limb), limb(0.07, 0.36, 0.055, 0.25, legC, 0, fm?.limb)];
      const arms = [limb(-0.17, 0.86, 0.042, 0.24, bodyC, -0.14, fm?.body), limb(0.17, 0.86, 0.042, 0.24, bodyC, 0.14, fm?.body)];
      // a paper bag in either hand, with its two handles, hidden until it is handed over; it
      // grows from the hand
      const bags = ph ? null : arms.map((a) => {
        const g = new THREE.Group();
        g.position.set(0, -0.33, 0.02);
        const ls = [];
        for (const dz of [0.012, -0.012]) ls.push(v3(-0.035, -0.06, dz), v3(0, 0, 0), v3(0, 0, 0), v3(0.035, -0.06, dz));
        g.add(figurePart([tinted(new THREE.BoxGeometry(0.13, 0.15, 0.07).translate(0, -0.135, 0), TONES.card)], ls, as(fm.bag)));
        g.visible = false;
        a.children[0].add(g);
        return g;
      });
      modelGroup.add(outer);
      outer.position.copy(home);
      outer.visible = false;
      return { outer, pivot, legs, arms, home, mats: fm, bags };
    }
    const people = [person("ph", v3(-2.3, FY, -1.24)), person("cu", v3(-1.72, FY, 0.12))];
    // the day's customers: the first one, and three more built now and kept hidden
    const crowd = [people[1]];
    for (let i = 0; i < 3; i++) crowd.push(person("cu", people[1].home));
    // where each walks: the pharmacist out of the back room through the doorway to the till
    // side of the counter, the customer in through the street door to its front
    people[0].path = new THREE.CatmullRomCurve3([v3(1.3, FY, -1.55), v3(0.2, FY, -1.5), v3(-1.2, FY, -1.32), people[0].home], false, "centripetal");
    people[1].path = new THREE.CatmullRomCurve3([v3(-3.05, FY, 3.5), v3(-3.05, FY, 2.4), v3(-2.55, FY, 1.3), people[1].home], false, "centripetal");
    for (const [i, p] of people.entries()) {
      p.len = p.path.getLength();
      // a whole number of steps, so the legs come together where the walk ends
      p.stride = p.len / Math.max(1, Math.round(p.len / (0.34 * PS)));
      const o = people[1 - i].home;
      p.rest = Math.atan2(o.x - p.home.x, o.z - p.home.z);
    }
    // Pose a person u of the way along their path (0 before setting out, 1 arrived). The
    // walk cycle runs on the distance travelled, so scrolling back and forth moves the limbs
    // the same way, and a figure that does not move stands still.
    const walkTan = new THREE.Vector3();
    function walkPerson(p, u) {
      p.outer.visible = u > 0.001;
      if (!p.outer.visible) return;
      p.path.getPointAt(u, p.outer.position);
      const s = u * p.len;
      // swing comes in over the first step and out over the last
      const m = REDUCED ? 0 : sst(s, 0, 0.3) * sst(p.len - s, 0, 0.3);
      const ph = (Math.PI * s) / p.stride, sw = Math.sin(ph) * 0.55 * m;
      p.legs[0].rotation.x = sw; p.legs[1].rotation.x = -sw;
      p.arms[0].rotation.x = -sw * 0.8; p.arms[1].rotation.x = sw * 0.8;
      p.pivot.position.y = Math.abs(Math.cos(ph)) * 0.025 * PS * m;
      p.pivot.rotation.x = 0.07 * m;
      // face the way of the walk, and turn to face the other across the counter on arrival
      p.path.getTangentAt(Math.min(u, 0.999), walkTan);
      const go = Math.atan2(walkTan.x, walkTan.z);
      let d = p.rest - go;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      p.outer.rotation.y = go + d * sst(u, 0.8, 1);
    }

    await pause();
    // ── The green cross on its bracket
    const crossCaps = new THREE.MeshBasicMaterial({ color: GREEN.clone() });
    const crossSide = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const CROSS_C = v3(-4.86, FY + 2.12, 2.5);
    {
      const a = 0.29, b = 0.095, dep = 0.075;
      const pts = [[b, a], [b, b], [a, b], [a, -b], [b, -b], [b, -a], [-b, -a], [-b, -b], [-a, -b], [-a, b], [-b, b], [-b, a]];
      const shape = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
      const g = new THREE.ExtrudeGeometry(shape, { depth: dep, bevelEnabled: false });
      g.translate(0, 0, -dep / 2);
      const cross = new THREE.Mesh(g, [crossCaps, crossSide]);
      cross.position.copy(CROSS_C);
      cross.castShadow = true;
      modelGroup.add(cross);
      const segs = [];
      for (let i = 0; i < pts.length; i++) {
        const [x0, y0] = pts[i], [x1, y1] = pts[(i + 1) % pts.length];
        for (const z of [-dep / 2, dep / 2]) segs.push(v3(x0, y0, z).add(CROSS_C), v3(x1, y1, z).add(CROSS_C));
        segs.push(v3(x0, y0, -dep / 2).add(CROSS_C), v3(x0, y0, dep / 2).add(CROSS_C));
      }
      modelGroup.add(new LineSegments2(new LineSegmentsGeometry().setPositions(toFlat(segs)), lineCoarse));
      // bracket
      const bs = [];
      const bm = new THREE.Matrix4().makeTranslation(-4.5, FY + 2.12, 2.5);
      const bg = new THREE.BoxGeometry(0.3, 0.035, 0.035);
      boxEdges(bm, 0.3, 0.035, 0.035, bs);
      const bracket = new THREE.Mesh(bg, crossSide);
      bracket.applyMatrix4(bm);
      modelGroup.add(bracket);
      modelGroup.add(new LineSegments2(new LineSegmentsGeometry().setPositions(toFlat(bs)), lineCoarse));
    }

    await pause();
    // ── Lights, shadow, ground
    // Night: a faint blue sky and moon, a warm night light in the shop, the cross, the
    // back room lit by whatever is piling up in it, and one roaming light for the payoffs.
    const HEMI_NIGHT = [new THREE.Color(0x4a5a7a), new THREE.Color(0x0a0b0f)];
    const hemi = new THREE.HemisphereLight(0x4a5a7a, 0x0a0b0f, 0.5);
    scene.add(hemi);
    const crossLight = new THREE.PointLight(0x2fd47c, 0, 2.6, 2);
    crossLight.position.set(-4.8, FY + 2.0, 2.85);
    const roomLight = new THREE.PointLight(0x9db8ff, 0, 5, 2);
    roomLight.position.set(2.0, 1.75, -0.3);
    const fxLight = new THREE.PointLight(0xffffff, 0, 2.2, 2);
    scene.add(crossLight, roomLight, fxLight);
    // The key light is whichever body is up: the moon through the night, the sun from
    // sunrise (see sky()). One directional light, one shadow map.
    const sun = new THREE.DirectionalLight(0x9fb2d6, 0.5);
    sun.position.set(-5.5, 10, -3.2);
    sun.target.position.set(0.2, 0, 0);
    sun.castShadow = true;
    const S = sun.shadow;
    S.mapSize.set(2048, 2048); // set per quality level (see setLevel)
    S.camera.left = S.camera.bottom = -11; S.camera.right = S.camera.top = 11; S.camera.near = 1; S.camera.far = 60;
    S.bias = -0.0004; S.normalBias = 0.02; S.radius = 2.2;
    // the old computer's screen: through the night it is the one light in the back room
    const crtScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.31, 0.23), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    crtScreen.position.set(2.38, FY + 0.76 + 0.075 + 0.125, -2.12 + 0.07 + 0.111 + 0.0035);
    const crtLight = new THREE.PointLight(0xf2f5f3, 0, 3.2, 1.6);
    crtLight.position.set(2.3, FY + 0.76 + 0.34, -1.4);
    scene.add(crtScreen, crtLight);
    scene.add(sun, sun.target);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.35 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.3;
    ground.receiveShadow = true;
    modelGroup.add(ground);

    // ── Light, faked: floor pools and wall washes (additive quads), halos (sprites)
    const fxGroup = new THREE.Group();
    scene.add(fxGroup);
    const fxVS = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
    // shape 0: round pool; shape 1: soft vertical band (a sweep); shape 2: soft rectangle (a wash)
    function glowQuad(w, h, color, shape = 0) {
      const mat = new THREE.ShaderMaterial({
        uniforms: { color: { value: new THREE.Color(color) }, amt: { value: 0 }, shape: { value: shape } },
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        vertexShader: fxVS,
        fragmentShader: `
          uniform vec3 color; uniform float amt, shape; varying vec2 vUv;
          void main() {
            vec2 q = vUv * 2.0 - 1.0;
            float a;
            if (shape < 0.5) a = pow(max(1.0 - length(q), 1e-4), 1.7);
            else if (shape < 1.5) a = exp(-q.x * q.x * 9.0) * (1.0 - smoothstep(0.55, 1.0, abs(q.y)));
            else if (shape < 2.5) a = (1.0 - smoothstep(0.35, 1.0, abs(q.x))) * (1.0 - smoothstep(0.3, 1.0, abs(q.y)));
            else { float r = length(q); float k = (r - 0.86) / 0.07; a = exp(-k * k) * (1.0 - smoothstep(0.95, 1.0, r)) + 0.18 * (1.0 - smoothstep(0.0, 0.86, r)); }
            gl_FragColor = vec4(color * amt * a, 1.0);
            #include <colorspace_fragment>
          }`,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      m.renderOrder = 2;
      fxGroup.add(m);
      return m;
    }
    const flat = (m, x, y, z) => { m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); return m; };
    const crossPool = flat(glowQuad(1.0, 1.2, 0x2fd47c), -4.6, 0.006, 3.0);
    const roomPool = flat(glowQuad(3.2, 4.4, 0x9db8ff), 2.15, FY + 0.003, -0.2);
    const sweepBand = glowQuad(0.9, 1.5, 0x9dffc8, 1);
    sweepBand.rotation.y = -Math.PI / 2;
    const wallWash = glowQuad(2.3, 1.6, 0xffffff, 2);
    wallWash.position.set(1.9, FY + 1.73, -2.425);
    const haloTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const x = c.getContext("2d");
      const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.25, "rgba(255,255,255,0.45)");
      g.addColorStop(0.6, "rgba(255,255,255,0.1)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      x.fillStyle = g;
      x.fillRect(0, 0, 128, 128);
      const t = new THREE.CanvasTexture(c);
      return t;
    })();
    const halo = (color, size) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      s.scale.setScalar(size);
      s.userData.size = size;
      s.renderOrder = 3;
      fxGroup.add(s);
      return s;
    };
    const crossHalo = halo(0x2fd47c, 1.5);
    crossHalo.position.copy(CROSS_C);
    const tillHalo = halo(0x63e0a4, 0.45);
    tillHalo.position.set(-1.25, FY + 1.13, -0.72);
    const pulseHalo = halo(0xd8ffe8, 0.32);
    // Orky's arrival: a ring of light runs out across the back room floor
    const shell = flat(glowQuad(1, 1, 0xeef3ff, 3), 2.2, FY + 0.004, 0.0);
    shell.visible = false;

    // ── The sky, drawn behind everything: the page's tone (the field the story script
    // describes, the same numbers) and a few stars where it is still dark.
    const skyMat = new THREE.ShaderMaterial({
      depthTest: false, depthWrite: false,
      uniforms: {
        A: { value: -0.3 }, G: { value: 0.5 }, warm: { value: 0 }, sunX: { value: 0.04 }, stars: { value: 1 },
        px: { value: 1 }, view: { value: new THREE.Vector2(1, 1) },
        rampC: { value: story.RAMP.map(([, c]) => new THREE.Vector3(c[0] / 255, c[1] / 255, c[2] / 255)) },
        tint: { value: new THREE.Vector3(...story.TINT.map((v) => v / 255)) },
      },
      vertexShader: `void main() { gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }`,
      fragmentShader: `
        uniform float A, G, warm, sunX, stars, px;
        uniform vec2 view;
        uniform vec3 rampC[5];
        uniform vec3 tint;
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        // the stars' hash: integer, so the page can draw the same stars before the scene
        // (the story script's starHash is the same function)
        float sh(uvec2 c, uint s) {
          uint k = c.x * 0x8da6b343u + c.y * 0xd8163841u + s * 0xcb1ab31fu;
          k ^= k >> 16u; k *= 0x7feb352du; k ^= k >> 15u; k *= 0x846ca68bu; k ^= k >> 16u;
          return float(k >> 8u) / 16777216.0;
        }
        vec3 ramp(float s) {
          if (s < 0.3) return mix(rampC[0], rampC[1], s / 0.3);
          if (s < 0.55) return mix(rampC[1], rampC[2], (s - 0.3) / 0.25);
          if (s < 0.8) return mix(rampC[2], rampC[3], (s - 0.55) / 0.25);
          return mix(rampC[3], rampC[4], (s - 0.8) / 0.2);
        }
        vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
        void main() {
          vec2 q = gl_FragCoord.xy / px;
          float d = length(vec2(q.x - sunX * view.x, q.y + 0.1 * view.y)) / view.y;
          float s = clamp(A - G * d, 0.0, 1.0);
          vec3 c = ramp(s) + tint * warm * 4.0 * s * (1.0 - s);
          // stars: still points, only where the sky is dark
          vec2 cell = floor(q / 58.0);
          uvec2 uc = uvec2(cell);
          if (sh(uc, 0u) > 0.955) {
            vec2 sc = (cell + 0.15 + 0.7 * vec2(sh(uc, 1u), sh(uc, 2u))) * 58.0;
            float r = 0.55 + 0.75 * sh(uc, 3u);
            float b = (1.0 - smoothstep(0.0, r, length(q - sc))) * (0.35 + 0.5 * sh(uc, 4u));
            c += vec3(0.82, 0.86, 0.95) * b * stars * (1.0 - smoothstep(0.0, 0.16, s));
          }
          c += (h(q + 0.37) - 0.5) / 255.0;
          gl_FragColor = vec4(toLinear(clamp(c, 0.0, 1.0)), 1.0);
          #include <colorspace_fragment>
        }`,
    });
    const skyMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), skyMat);
    skyMesh.frustumCulled = false;
    skyMesh.renderOrder = -10;
    scene.add(skyMesh);

    await pause();
    // ───────────────────────── the mess: bubbles, parcels, cards
    // one material per loose group, so a beat can push the other groups back
    // Messages and post images are light (unlit, per-instance colour, above 1 so they bloom);
    // parcels and post cards are card lit by the room, with a faint glow of their own.
    const GLOW = () => glowing(new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x000000 }));
    const groupMats = [GLOW(), GLOW(), GLOW(), GLOW()];

    // Chat bubble: rounded rectangle with a tail, extruded thin. The outline runs one way
    // along the bottom edge (out of the tail at its left foot, back in at its right), so it
    // never doubles back over itself: an outline that does gives collinear cap triangles
    // with no normal, whose slivers shade NaN, and bloom spreads one NaN over the frame.
    const BW = 0.32, BH = 0.19, BR = 0.05, BD = 0.016;
    const bubbleShape = (() => {
      const s = new THREE.Shape();
      const x0 = -BW / 2, x1 = BW / 2, y0 = -BH / 2, y1 = BH / 2;
      s.moveTo(x0 + BR, y0);
      s.lineTo(x0 + 0.075, y0);
      s.lineTo(x0 + 0.06, y0 - 0.065);
      s.lineTo(x0 + 0.12, y0);
      s.lineTo(x1 - BR, y0);
      s.quadraticCurveTo(x1, y0, x1, y0 + BR);
      s.lineTo(x1, y1 - BR);
      s.quadraticCurveTo(x1, y1, x1 - BR, y1);
      s.lineTo(x0 + BR, y1);
      s.quadraticCurveTo(x0, y1, x0, y1 - BR);
      s.lineTo(x0, y0 + BR);
      s.quadraticCurveTo(x0, y0, x0 + BR, y0);
      return s;
    })();
    const bubbleGeo = new THREE.ExtrudeGeometry(bubbleShape, { depth: BD, bevelEnabled: false, curveSegments: 5 });
    bubbleGeo.translate(0, 0, -BD / 2);
    const bubbleOutline = bubbleShape.getPoints(5);
    if (bubbleOutline[0].distanceTo(bubbleOutline[bubbleOutline.length - 1]) < 1e-6) bubbleOutline.pop();
    // local segments for a bubble (front loop + back loop)
    const bubbleLocal = [];
    for (const z of [-BD / 2, BD / 2]) {
      for (let i = 0; i < bubbleOutline.length; i++) {
        const a = bubbleOutline[i], b = bubbleOutline[(i + 1) % bubbleOutline.length];
        bubbleLocal.push(a.x, a.y, z, b.x, b.y, z);
      }
    }
    // three little text lines on one face
    for (const [y, l] of [[0.04, 0.19], [0.005, 0.21], [-0.03, 0.11]]) bubbleLocal.push(-0.11, y, BD / 2 + 0.0005, -0.11 + l, y, BD / 2 + 0.0005);

    const boxLocal = (w, h, d) => {
      const out = [];
      const c = [];
      for (let i = 0; i < 8; i++) c.push([i & 4 ? w / 2 : -w / 2, i & 2 ? h / 2 : -h / 2, i & 1 ? d / 2 : -d / 2]);
      for (let i = 0; i < 8; i++) for (const b of [1, 2, 4]) if (!(i & b)) out.push(...c[i], ...c[i | b]);
      return out;
    };

    const CW = 0.3, CD = 0.012;
    const cardLocal = boxLocal(CW, CW, CD);
    for (const [y, l] of [[-0.085, 0.2], [-0.112, 0.13]]) cardLocal.push(-0.11, y, CD / 2 + 0.0005, -0.11 + l, y, CD / 2 + 0.0005);

    const items = [];
    const rand = (a, b) => a + rng() * (b - a);
    const randQuat = () => new THREE.Quaternion().setFromEuler(new THREE.Euler(rand(0, 6.28), rand(0, 6.28), rand(0, 6.28)));
    const yawFlat = (yaw, tx = 0, tz = 0) => {
      const q = new THREE.Quaternion().setFromAxisAngle(v3(0, 1, 0), yaw);
      q.multiply(new THREE.Quaternion().setFromAxisAngle(v3(1, 0, 0), -Math.PI / 2 + tx));
      q.multiply(new THREE.Quaternion().setFromAxisAngle(v3(0, 1, 0), tz));
      return q;
    };
    const AIR = { x0: 0.95, x1: 3.0, y0: 0.5, y1: 2.3, z0: -1.6, z1: 1.9 };
    const airPos = () => v3(rand(AIR.x0, AIR.x1), rand(AIR.y0, AIR.y1), rand(AIR.z0, AIR.z1));

    // Bubbles (group 0): 40, into the tray
    const N_B = 40;
    const bubbleTones = ["card", "alt", "grey"];
    let heap = 0;
    for (let i = 0; i < N_B; i++) {
      const air = rng() < 0.74;
      let p, q;
      if (air) { p = airPos(); q = randQuat(); }
      else {
        const onDesk = rng() < 0.3;
        if (onDesk) { p = v3(rand(1.7, 2.6), DESK_Y + 0.01 + rng() * 0.02, rand(-2.25, -1.85)); }
        else { const a = rand(0, 6.28), r = Math.sqrt(rng()) * 0.5; p = v3(1.85 + Math.cos(a) * r * 1.3, FY + 0.009 + (heap++ % 6) * 0.017, 0.55 + Math.sin(a) * r); }
        q = yawFlat(rand(0, 6.28), rand(-0.25, 0.25));
      }
      const tq = yawFlat(Math.PI + rand(-0.06, 0.06));
      items.push({
        g: 0, idx: i, n: N_B, tone: bubbleTones[i % 3], hue: HUES[i % 3], air, p, q,
        tp: v3(TRAY.x + rand(-0.01, 0.01), DESK_Y + 0.012 + BD / 2 + i * (BD + 0.001), TRAY.z + 0.01 + rand(-0.008, 0.008)), tq,
        local: bubbleLocal, th: rand(1.5, 2.3),
      });
    }
    // Parcels and bags (group 1): 20, onto two shelves, each with a tag
    const N_P = 20;
    const piles = [v3(1.45, 0, 0.95), v3(2.65, 0, 0.75), v3(2.2, 0, -0.75)];
    const pileH = [0, 0, 0];
    for (let i = 0; i < N_P; i++) {
      const bag = i % 4 === 3;
      const s = bag ? v3(0.17, 0.25, 0.1) : v3(rand(0.17, 0.25), rand(0.12, 0.2), rand(0.15, 0.2));
      const air = rng() < 0.45;
      let p, q;
      if (air) { p = airPos(); q = randQuat(); }
      else {
        const k = i % 3, pile = piles[k];
        const layer = pileH[k]++;
        p = v3(pile.x + rand(-0.17, 0.17), FY + s.y / 2 + (layer >> 1) * 0.19, pile.z + rand(-0.17, 0.17));
        q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rand(-0.06, 0.06) * (layer > 1), rand(0, 6.28), rand(-0.08, 0.08) * (layer > 1)));
      }
      const shelf = i < 10 ? 1 : 2, j = i % 10;
      const tz = RS_Z0 + 0.2 + j * ((RS_Z1 - RS_Z0 - 0.4) / 9);
      const local = boxLocal(s.x, s.y, s.z);
      if (!bag) local.push(-s.x / 2 + 0.02, s.y / 2 + 0.0005, 0, s.x / 2 - 0.02, s.y / 2 + 0.0005, 0); // tape
      else local.push(-s.x / 2, s.y / 2 - 0.05, s.z / 2 + 0.0005, s.x / 2, s.y / 2 - 0.05, s.z / 2 + 0.0005); // fold
      items.push({
        g: 1, idx: i, n: N_P, tone: bag ? "alt" : "card", hue: PARCEL_HUE, air, p, q, s,
        tp: v3(RS_X - 0.02, FY + RS_LEVELS[shelf] + s.y / 2, tz),
        tq: new THREE.Quaternion().setFromAxisAngle(v3(0, 1, 0), -Math.PI / 2 + rand(-0.05, 0.05)),
        local, th: rand(1.5, 2.3),
      });
    }
    // Post cards (group 2): 12, a grid on the back wall above the desk
    const N_C = 12;
    for (let i = 0; i < N_C; i++) {
      const air = rng() < 0.66;
      let p, q;
      if (air) { p = airPos(); q = randQuat(); }
      else { p = v3(rand(1.0, 3.0), FY + 0.007 + rng() * 0.01, rand(-1.4, 1.8)); q = yawFlat(rand(0, 6.28), rand(-0.1, 0.1)); }
      const col = i % 4, row = Math.floor(i / 4);
      items.push({
        g: 2, idx: i, n: N_C, tone: "card", hue: HUES[1 + (i % 2)], air, p, q,
        tp: v3(1.3 + col * 0.4, FY + 2.12 - row * 0.39, -2.43 + CD / 2 + 0.006),
        tq: new THREE.Quaternion(),
        local: cardLocal, th: rand(1.5, 2.3),
      });
    }
    for (const it of items) {
      it.spinAxis = v3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).normalize();
      it.spin = rand(0.25, 0.7) * (rng() < 0.5 ? -1 : 1) * (it.g === 1 ? 0.6 : 1);
      it.ph = rand(0, 100);
      it.amp = it.air ? rand(0.03, 0.08) : 0;
      it.cur = { p: new THREE.Vector3(), q: new THREE.Quaternion(), sc: 0, lt: 0 };
      it.lineCol = new THREE.Color();
    }

    await pause();
    const mkInst = (geo, count, mat) => {
      const m = new THREE.InstancedMesh(geo, mat, count);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
      scene.add(m);
      return m;
    };
    const bubblesMesh = mkInst(bubbleGeo, N_B, groupMats[0]);
    const parcelsMesh = mkInst(new THREE.BoxGeometry(1, 1, 1), N_P, groupMats[1]);
    const cardsMesh = mkInst(new THREE.BoxGeometry(CW, CW, CD), N_C, groupMats[2]);
    const imgGeo = new THREE.PlaneGeometry(0.24, 0.15).translate(0, 0.035, CD / 2 + 0.0008);
    const cardImgMesh = mkInst(imgGeo, N_C, groupMats[3]);
    cardImgMesh.castShadow = false;
    const tagGeo = new THREE.BoxGeometry(0.075, 0.048, 0.005);
    const tagsMesh = mkInst(tagGeo, N_P, groupMats[1]);
    const tagDotMesh = mkInst(new THREE.CircleGeometry(0.017, 16).translate(0.016, 0, 0.0032), N_P, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    tagDotMesh.castShadow = false;
    for (const it of items) {
      const mesh = [bubblesMesh, parcelsMesh, cardsMesh][it.g];
      mesh.setColorAt(it.idx, TONES[it.tone]);
      if (it.g === 2) cardImgMesh.setColorAt(it.idx, it.hue);
      if (it.g === 1) tagDotMesh.setColorAt(it.idx, GREEN);
    }
    const tagLocal = boxLocal(0.075, 0.048, 0.005);

    const dynLines = new LineSegments2(new LineSegmentsGeometry(), lineDyn);
    const DYN_MAX = 7000;
    dynLines.geometry.setPositions(new Float32Array(DYN_MAX * 6));
    dynLines.frustumCulled = false;
    scene.add(dynLines);
    dynLines.geometry.setColors(new Float32Array(DYN_MAX * 6));
    const dynArr = dynLines.geometry.attributes.instanceStart.data.array;
    const dynCol = dynLines.geometry.attributes.instanceColorStart.data.array;

    await pause();
    // ── ERP cable: draws itself from the computer to the till
    const cablePts = (() => {
      // leaves the back of the ERP, arcs over the dividing wall, lands on the till
      const pts = [
        v3(CRT.x, DESK_Y + 0.3, CRT.z - 0.12), v3(CRT.x - 0.15, DESK_Y + 0.75, CRT.z + 0.1), v3(1.6, 1.95, -1.45),
        v3(0.6, 2.0, -1.2), v3(-0.5, 1.75, -0.95), v3(-1.15, 1.35, -0.8), v3(-1.25, FY + 1.12, -0.76),
      ];
      const curve = new THREE.CatmullRomCurve3(pts, false, "centripetal");
      return curve.getSpacedPoints(260);
    })();
    const cableSegs = [];
    for (let i = 0; i < cablePts.length - 1; i++) cableSegs.push(cablePts[i], cablePts[i + 1]);
    const cable = new LineSegments2(new LineSegmentsGeometry().setPositions(toFlat(cableSegs)), lineCable);
    cable.geometry.setColors(new Float32Array(cableSegs.length * 3));
    const cableCol = cable.geometry.attributes.instanceColorStart.data.array;
    cable.frustumCulled = false;
    scene.add(cable);
    const cableTotal = cablePts.length - 1;
    const plug = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.05), crossSide);
    scene.add(plug);

    // ── Resolved marks (green disc with a white tick), ping, phone screen
    const markTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const x = c.getContext("2d");
      x.fillStyle = "#1FA35C";
      x.beginPath(); x.arc(64, 64, 60, 0, Math.PI * 2); x.fill();
      x.strokeStyle = "#ffffff"; x.lineWidth = 13; x.lineCap = "round"; x.lineJoin = "round";
      x.beginPath(); x.moveTo(37, 66); x.lineTo(56, 85); x.lineTo(92, 46); x.stroke();
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    })();
    const MARK_POS = [v3(TRAY.x + 0.25, DESK_Y + 0.72, TRAY.z + 0.05), v3(RS_X - 0.25, FY + 1.42, RS_Z1 - 0.05), v3(2.82, FY + 2.24, -2.4), v3(CRT.x + 0.3, DESK_Y + 0.5, CRT.z + 0.1)];
    const marks = MARK_POS.map((p) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex, transparent: true }));
      s.position.copy(p);
      s.scale.setScalar(0);
      scene.add(s);
      return s;
    });
    const GREEN_HOT = HUES[0].clone().multiplyScalar(2.2);
    const phoneDot = new THREE.Mesh(new THREE.CircleGeometry(0.018, 20), new THREE.MeshBasicMaterial({ color: GREEN_HOT }));
    phoneDot.applyMatrix4(PHONE_M.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0.02, 0.0075)));
    phoneDot.matrixAutoUpdate = false;
    phoneDot.updateMatrix = () => {};
    const phoneDotBase = phoneDot.matrix.clone();
    scene.add(phoneDot);
    const crtDot = new THREE.Mesh(new THREE.CircleGeometry(0.03, 24), new THREE.MeshBasicMaterial({ color: GREEN_HOT }));
    crtDot.position.set(CRT.x, DESK_Y + 0.2, CRT.z + 0.1845);
    scene.add(crtDot);
    const ringMat = new THREE.MeshBasicMaterial({ color: HUES[0].clone().multiplyScalar(1.6), transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending });
    const rings = [0, 1].map(() => { const r = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 48), ringMat.clone()); scene.add(r); return r; });
    const pingDot = new THREE.Mesh(new THREE.SphereGeometry(0.02, 12, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.6, 2.4) }));
    scene.add(pingDot);
    const PHONE_P = new THREE.Vector3().setFromMatrixPosition(PHONE_M);

    await pause();
    // ───────────────────────── Orky
    const OD = 0.9;
    const orky = buildOrky(OD);
    scene.add(orky.group);

    function buildOrky(d) {
      const V = { T: [0, 1, 0], UL: [-1, 0.465, 0], UR: [1, 0.465, 0], LL: [-1, -0.465, 0], LR: [1, -0.465, 0], C: [0, 0.465, d], Cp: [0, 0.465, -d], B: [0, -1, d], Bp: [0, -1, -d] };
      const faces = [
        ["UL", "LL", "B", "C"], ["C", "B", "LR", "UR"], ["UR", "LR", "Bp", "Cp"], ["Cp", "Bp", "LL", "UL"],
        ["T", "UL", "C"], ["T", "C", "UR"], ["T", "UR", "Cp"], ["T", "Cp", "UL"],
        ["LL", "Bp", "B"], ["LR", "B", "Bp"],
      ];
      const pos = [], nor = [];
      for (const f of faces) {
        const p = f.map((k) => v3(...V[k]));
        const n = new THREE.Vector3().subVectors(p[1], p[0]).cross(new THREE.Vector3().subVectors(p[2], p[0])).normalize();
        const tris = p.length === 4 ? [[0, 1, 2], [0, 2, 3]] : [[0, 1, 2]];
        for (const t of tris) for (const k of t) { pos.push(p[k].x, p[k].y, p[k].z); nor.push(n.x, n.y, n.z); }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
      const toneU = {
        L: { value: v3(-1, 0.15, 0.5).normalize() },
        tLight: { value: 0.8 }, tMid: { value: -0.16 },
        lightTop: { value: new THREE.Color(0xffffff) }, lightBot: { value: new THREE.Color(0xe8e8e5) },
        midTop: { value: new THREE.Color(0xc9c9c5) }, midBot: { value: new THREE.Color(0xa6a6a1) },
        ink: { value: INK.clone() },
        // model G: natural sun shading while Orky moves, the exact logo tones at rest
        uLS: { value: v3(-0.7, 0.55, 0.45).normalize() }, uRest: { value: 1 }, uBright: { value: 1 },
      };
      const toneFn = `
        uniform vec3 L; uniform float tLight, tMid;
        uniform vec3 lightTop, lightBot, midTop, midBot, ink;
        uniform vec3 uLS; uniform float uRest, uBright;
        vec3 logoTone(vec3 n, float vLight, float vMid) {
          float t = dot(normalize(n), L);
          if (t > tLight) return mix(lightTop, lightBot, clamp(vLight, 0.0, 1.0));
          if (t > tMid) return mix(midTop, midBot, clamp(vMid, 0.0, 1.0));
          return ink;
        }
        vec3 tone(vec3 n, float vLight, float vMid, float pupil) {
          float s = smoothstep(-0.55, 0.95, dot(normalize(n), normalize(uLS)));
          vec3 w = mix(lightTop, lightBot, clamp(vLight, 0.0, 1.0));
          vec3 dark = pupil > 0.5 ? vec3(0.42, 0.42, 0.40) : vec3(0.021, 0.022, 0.025);
          return mix(mix(dark, w, s) * uBright, logoTone(n, vLight, vMid), uRest);
        }`;
      const faceMat = new THREE.ShaderMaterial({
        uniforms: toneU,
        polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1,
        vertexShader: `
          varying vec3 vN; varying float vY;
          void main() { vN = normalMatrix * normal; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          varying vec3 vN; varying float vY;
          ${toneFn}
          void main() {
            gl_FragColor = vec4(tone(vN, (1.0 - vY) * 0.5, (1.0 - vY) / 0.535, 0.0), 1.0);
            #include <colorspace_fragment>
          }`,
      });
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(geo, faceMat);
      mesh.castShadow = true;
      group.add(mesh);
      const edges = new LineSegments2(new LineSegmentsGeometry().fromEdgesGeometry(new THREE.EdgesGeometry(geo, 1)), lineOrky);
      group.add(edges);

      // Eyes: flat ellipses on the slanted front cheeks.
      const eyeU = (side, radii, lift, isPupil) => ({
        ...toneU,
        center: { value: new THREE.Vector2(side * 0.465, -0.116) },
        radii: { value: new THREE.Vector2(...radii) },
        side: { value: side }, d: { value: d }, lift: { value: lift },
        blink: { value: 1 }, look: { value: new THREE.Vector2() }, isPupil: { value: isPupil ? 1 : 0 },
      });
      const eyeVS = `
        uniform vec2 center, radii, look; uniform float side, d, lift, blink, isPupil;
        varying vec3 vN; varying float vV;
        void main() {
          vec2 off = position.xy * radii + look * isPupil;
          vec2 p = center + vec2(off.x, off.y * blink);
          vec3 n = normalize(vec3(side * d, 0.0, 1.0));
          vec3 q = vec3(p, d * (1.0 - abs(p.x))) + n * lift;
          vN = normalMatrix * n;
          vV = 0.5 - position.y * 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(q, 1.0);
        }`;
      const eyeFS = `
        uniform float isPupil;
        varying vec3 vN; varying float vV;
        ${toneFn}
        void main() {
          vec3 c = isPupil > 0.5 ? tone(vN, vV, vV, 1.0) : ink;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`;
      const disc = new THREE.CircleGeometry(1, 48);
      const eyes = [];
      for (const side of [-1, 1]) {
        for (const [radii, lift, pupil] of [[[0.256, 0.302], 0.006, false], [[0.105, 0.14], 0.012, true]]) {
          const m = new THREE.Mesh(disc, new THREE.ShaderMaterial({ uniforms: eyeU(side, radii, lift, pupil), vertexShader: eyeVS, fragmentShader: eyeFS, side: THREE.DoubleSide }));
          m.frustumCulled = false;
          group.add(m);
          eyes.push(m);
        }
      }
      return { group, mesh, eyes, U: toneU };
    }

    await pause();
    // ───────────────────────── camera shots, keyed on story time
    // Story time T reaches shot k at k (when chapter k's words switch on), holds there
    // until k + HOLD, then travels to shot k + 1.
    // Chapters, as in the story script.
    const CH_IN = 1, CH_MESS = 2, CH_ORKY = 3, CH_BEAT = 4, CH_DAWN = 8, CH_CLOSE = 9;
    // target, azimuth°, elevation°, radius to frame; the first and last shots are the hero
    const SHOTS = [
      { t: v3(-0.25, 0.55, 0.1), az: -36, el: 30, r: 5.6 }, // 0 the closed pharmacy (framed by the hero box)
      { t: v3(-0.3, 0.9, 0.05), az: -34, el: 29, r: 4.6 }, // 1 moved in: the whole pharmacy, centred
      { t: v3(2.0, 0.8, -0.1), az: -30, el: 33, r: 2.7 }, // 2 mess: low, into the back room
      { t: v3(2.05, 0.95, -0.35), az: -27, el: 40, r: 2.8 }, // 3 Orky arrives
      { t: v3(1.75, 1.0, -1.6), az: -18, el: 36, r: 1.95 }, // 4 tray
      { t: v3(2.85, 0.95, -0.55), az: -44, el: 32, r: 2.2 }, // 5 shelves
      { t: v3(1.95, 1.45, -1.85), az: -12, el: 22, r: 1.95 }, // 6 wall of posts
      { t: v3(0.45, 1.15, -1.15), az: -22, el: 36, r: 2.75 }, // 7 cable
      { t: v3(-0.25, 0.55, 0.1), az: -36, el: 30, r: 5.6 }, // 8 the shop opens: already the last framing, so the camera pulls straight back to it
      { t: v3(-0.25, 0.55, 0.1), az: -36, el: 30, r: 5.6 }, // 9 the close: the hero again
    ];
    const HERO_SHOT = (i) => i === 0 || i >= CH_DAWN;
    const WIDE = (i) => (HERO_SHOT(i) || i === CH_IN ? 1 : 0);
    const HOLD = 0.5;
    // The hero is one fixed camera position framed only by zoom and lens offset, so it is
    // the same picture at every viewport, moved and scaled in 2D like the poster.
    const HERO_DIST = 29.2;
    const ORKY_KEYS = [
      v3(2.1, 3.6, -0.3), v3(2.1, 3.6, -0.3), v3(2.1, 3.6, -0.3), v3(2.0, 1.55, -0.15), v3(2.3, 1.48, -1.05),
      v3(2.35, 1.55, -0.2), v3(1.95, 1.3, -0.95), v3(1.9, 1.35, -0.55), v3(2.38, 1.5, -2.02), v3(2.38, 1.5, -2.02),
    ];
    const LOOK_AT = [v3(TRAY.x, DESK_Y + 0.25, TRAY.z), v3(RS_X, FY + 0.8, -0.5), v3(1.9, FY + 1.75, -2.43), v3(CRT.x, DESK_Y + 0.2, CRT.z)];
    // the messages swirl here while Orky files them, beside it rather than around it
    const VORTEX = v3(1.62, 1.28, -1.62);

    const ease = (x) => x * x * x * (x * (x * 6 - 15) + 10);
    const easeIO = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const clamp01 = (x) => Math.min(1, Math.max(0, x));
    const lerp = (a, b, u) => a + (b - a) * u;
    const lerpLog = (a, b, u) => Math.exp(lerp(Math.log(a), Math.log(b), u));
    const D2R = Math.PI / 180;
    const tanV = Math.tan((camera.fov * D2R) / 2);
    // when the four sorting beats run, in story time
    const groupTimes = (T) => [0, 1, 2, 3].map((k) => clamp01((T - (CH_BEAT + k)) / (k === 3 ? 0.46 : 0.42)));

    function setSpherical(cam, t, az, el, dist) {
      const ca = Math.cos(el * D2R);
      cam.position.set(t.x + Math.sin(az * D2R) * ca * dist, t.y + Math.sin(el * D2R) * dist, t.z + Math.cos(az * D2R) * ca * dist);
      cam.lookAt(t);
    }

    // The hero picture's extent in view-tangent space (x/-z, y/-z): every model vertex,
    // seen from the hero camera.
    function computeR() {
      const cam = camera.clone();
      setSpherical(cam, SHOTS[0].t, SHOTS[0].az, SHOTS[0].el, HERO_DIST);
      cam.updateMatrixWorld(true);
      const view = cam.matrixWorldInverse;
      modelGroup.updateMatrixWorld(true);
      const p = new THREE.Vector3(), q = new THREE.Vector3();
      const r = { u0: Infinity, u1: -Infinity, v0: Infinity, v1: -Infinity };
      const add = (v) => {
        q.copy(v).applyMatrix4(view);
        const u = q.x / -q.z, w = q.y / -q.z;
        r.u0 = Math.min(r.u0, u); r.u1 = Math.max(r.u1, u); r.v0 = Math.min(r.v0, w); r.v1 = Math.max(r.v1, w);
      };
      modelGroup.traverse((o) => {
        if (!o.isMesh || o.isLineSegments2 || o === ground) return;
        const a = o.geometry.attributes.position;
        for (let i = 0; i < a.count; i++) add(p.fromBufferAttribute(a, i).applyMatrix4(o.matrixWorld));
      });
      const m = 0.03 * Math.max(r.u1 - r.u0, r.v1 - r.v0);
      r.u0 -= m; r.u1 += m; r.v0 -= m; r.v1 += m;
      return r;
    }
    await pause();
    const R = computeR();

    let vw = root.clientWidth, vh = root.clientHeight, narrow = narrowMQ.matches;
    const stageEl = document.querySelector(".stage");
    const stage = { l: 0, t: 0, w: 1, h: 1 };
    const hero = { zoom: 1, zoomY: 1, lx: 0, ly: 0, ls: 1 };
    // The night still carries the framing it was made with, per layout: data-r-d / data-s-d
    // (desktop) and data-r-p / data-s-p (phone), and --a-d / --wmax-d, --a-p / --wmax-p.
    const posterImg = () => document.querySelector(".poster.night .poster-img");
    const L = () => (narrow ? "P" : "D");
    // until there are stills, the hero box takes the picture's own proportions
    for (const img of document.querySelectorAll(".poster-img")) if (!img.dataset.rD) img.style.setProperty("--a", ((R.u1 - R.u0) / (R.v1 - R.v0)).toFixed(5));

    // Read the hero framing from the poster's box (CSS owns it) and the other shots' frame
    // from the stage box.
    function readLayout() {
      vw = root.clientWidth; vh = root.clientHeight; narrow = narrowMQ.matches;
      const sr = stageEl.getBoundingClientRect();
      Object.assign(stage, { l: sr.left, t: sr.top, w: Math.max(1, sr.width), h: Math.max(1, sr.height) });
      const img = posterImg();
      const nums = (img.dataset["r" + L()] || "").split(",").map(Number);
      const box = nums.length === 4 && nums.every(Number.isFinite) ? { u0: nums[0], v0: nums[1], u1: nums[2], v1: nums[3] } : R;
      const pr = img.getBoundingClientRect();
      // x and y scales separately: the box is rounded to whole pixels in both directions
      const sx = pr.width / (box.u1 - box.u0);
      const sy = pr.height > 0 ? pr.height / (box.v1 - box.v0) : sx;
      const cx = pr.left + pr.width / 2, cy = pr.top + scrollY + (pr.height > 0 ? pr.height : sy * (box.v1 - box.v0)) / 2;
      hero.zoom = (2 * sx * tanV) / vh;
      hero.zoomY = (2 * sy * tanV) / vh;
      hero.lx = (2 * (cx - (sx * (box.u0 + box.u1)) / 2)) / vw - 1;
      hero.ly = 1 - (2 * (cy + (sy * (box.v0 + box.v1)) / 2)) / vh;
      hero.ls = Number(img.dataset["s" + L()]) > 0 ? sx / Number(img.dataset["s" + L()]) : 1;
    }

    const A = { t: new THREE.Vector3() }, B = { t: new THREE.Vector3() };
    function shot(i, o) {
      const s = SHOTS[i];
      o.t.copy(s.t); o.az = s.az; o.el = s.el;
      if (HERO_SHOT(i)) return Object.assign(o, { dist: HERO_DIST, zoom: hero.zoom, zoomY: hero.zoomY, lx: hero.lx, ly: hero.ly, ls: hero.ls });
      // fit the shot's radius into the stage box, centred on it
      // a portrait phone needs more room around the wide shots
      const fill = narrow ? (WIDE(i) ? 0.72 : 0.94) : 1;
      o.dist = (s.r * vh) / (tanV * Math.min(stage.w, stage.h) * fill);
      o.zoom = o.zoomY = 1; o.ls = 1;
      o.lx = (2 * (stage.l + stage.w / 2)) / vw - 1;
      o.ly = 1 - (2 * (stage.t + stage.h / 2)) / vh;
    }
    const camAt = (T) => {
      const i = Math.min(SHOTS.length - 2, Math.floor(T));
      return [i, ease(clamp01((T - i - HOLD) / (1 - HOLD)))];
    };

    const camTarget = new THREE.Vector3();
    const play = {}; // the toys hook in here: cam(az, el, dist), item(it, c, dt), update(dt)
    let lensX = 0, lensY = 0, zoom = 1, zoomY = 1, lineScale = 1, lineMul = 1;
    function placeCamera(T, time, px, py) {
      const [i, u] = camAt(T);
      shot(i, A); shot(i + 1, B);
      camTarget.lerpVectors(A.t, B.t, u);
      let az = lerp(A.az, B.az, u), el = lerp(A.el, B.el, u);
      let dist = lerpLog(A.dist, B.dist, u);
      if (play.cam) ({ az, el, dist } = play.cam(az, el, dist));
      zoom = lerpLog(A.zoom, B.zoom, u);
      zoomY = lerpLog(A.zoomY, B.zoomY, u);
      lensX = lerp(A.lx, B.lx, u);
      lensY = lerp(A.ly, B.ly, u);
      lineScale = lerpLog(A.ls, B.ls, u);
      // a breath of pointer parallax, eased in from nothing so the first frame is still; the
      // first and last screens hold perfectly still otherwise
      const env = REDUCED ? 0 : ease(clamp01((time - 1) / 4));
      az += env * px * 1.6;
      el += env * py * 0.9;
      setSpherical(camera, camTarget, az, el, dist);
    }
    function applyLens() {
      camera.updateProjectionMatrix();
      const e = camera.projectionMatrix.elements;
      e[0] *= zoom; e[5] *= zoomY;
      e[8] = -lensX; e[9] = -lensY;
      camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    }

    // ───────────────────────── input, resize, visibility
    let ptrX = 0, ptrY = 0, ptrTX = 0, ptrTY = 0;
    const onPtr = (x, y) => { ptrTX = (x / vw) * 2 - 1; ptrTY = (y / vh) * 2 - 1; };
    addEventListener("pointermove", (e) => onPtr(e.clientX, e.clientY), { passive: true });
    addEventListener("touchstart", (e) => e.touches[0] && onPtr(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    addEventListener("touchmove", (e) => e.touches[0] && onPtr(e.touches[0].clientX, e.touches[0].clientY), { passive: true });

    const res = new THREE.Vector2();
    function setResolution(w, h) {
      res.set(w, h);
      for (const m of lineMats) m.resolution.copy(res);
      hullMat.uniforms.res.value.copy(res);
      skyMat.uniforms.view.value.set(w, h);
      skyMat.uniforms.px.value = renderer.getPixelRatio();
    }
    function resize() {
      readLayout();
      const lv = levelOf(level);
      if (S.mapSize.x !== lv.shadow) {
        S.mapSize.set(lv.shadow, lv.shadow);
        S.map?.dispose();
        S.map = null;
      }
      renderer.setPixelRatio(lv.pr);
      renderer.setSize(vw, vh, false);
      if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(vw, vh); }
      camera.aspect = vw / vh;
      setResolution(vw, vh);
    }

    // ───────────────────────── per-frame state
    const M = new THREE.Matrix4(), M2 = new THREE.Matrix4();
    const tmpQ = new THREE.Quaternion(), tmpQ2 = new THREE.Quaternion(), tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3();
    const ONE = v3(1, 1, 1), ZERO = v3(0, 0, 0), dotScale = v3(1, 1, 1), Z_AXIS = v3(0, 0, 1);
    const lookObj = new THREE.Object3D();
    let Tcur = 0, last = 0, clock = 0, first = true, revealed = false;
    let blinkAt = 2.5, blinkT = -1;
    // recede: 0 = lit, 1 = sunk into the dark (per loose group: bubbles, parcels, posts, ERP)
    const rec = [0, 0, 0, 0];
    const groupLit = (g) => 1 - 0.74 * rec[g];
    const FLASH = REDUCED ? 0 : 1; // no flashes for reduced motion: lights settle straight in
    const bump = (x) => (x > 0 && x < 1 ? Math.sin(Math.PI * x) : 0);
    const sstep = THREE.MathUtils.smoothstep;
    const tmpC = new THREE.Color();
    const WHITE = new THREE.Color(0xffffff);
    const vortexC = new THREE.Vector3();
    let litPosts = 0, sweepAmt = 0, cablePulse = 0, tillFlash = 0;
    const pulsePos = new THREE.Vector3();
    let arrived = false, arriveAt = -10;

    // Nothing loose may cover Orky: a thing on the line of sight to it, or close around
    // it, is moved aside (w: how free the thing is; what is being filed only budges).
    const sight = new THREE.Vector3(), aside = new THREE.Vector3();
    function clearOfOrky(p, w) {
      if (!orky.group.visible || w <= 0.001) return;
      sight.subVectors(orky.group.position, camera.position);
      const L = sight.length();
      sight.divideScalar(L);
      const t = aside.subVectors(p, camera.position).dot(sight);
      if (t < 0 || t > L + 0.35) return;
      aside.copy(camera.position).addScaledVector(sight, Math.min(t, L));
      aside.subVectors(p, aside);
      const d = aside.length(), R0 = 0.56;
      if (d >= R0) return;
      if (d < 1e-4) aside.copy(camera.up); else aside.divideScalar(d);
      p.addScaledVector(aside, (R0 - d) * w);
    }

    function writeSegs(local, m, n, col) {
      const e = m.elements;
      for (let i = 0; i < local.length; i += 3) {
        if (n >= DYN_MAX * 2) return n;
        const x = local[i], y = local[i + 1], z = local[i + 2];
        const o = n * 3;
        dynArr[o] = e[0] * x + e[4] * y + e[8] * z + e[12];
        dynArr[o + 1] = e[1] * x + e[5] * y + e[9] * z + e[13];
        dynArr[o + 2] = e[2] * x + e[6] * y + e[10] * z + e[14];
        dynCol[o] = col.r; dynCol[o + 1] = col.g; dynCol[o + 2] = col.b;
        n++;
      }
      return n;
    }

    function updateRecede(dt) {
      const ch = story.active;
      const focus = ch >= CH_BEAT && ch < CH_BEAT + 4 ? ch - CH_BEAT : -1;
      for (let g = 0; g < 4; g++) {
        const target = focus >= 0 && g !== focus ? 1 : 0;
        rec[g] = REDUCED || POSTER || !revealed ? target : rec[g] + (target - rec[g]) * (1 - Math.exp(-dt * 6));
      }
    }

    function updateItems(T, time, dt, groupT) {
      let pts = 0; // number of points written (2 per segment)
      vortexC.copy(VORTEX);
      const span = RS_Z1 - RS_Z0 + 0.4;
      const sw = clamp01((groupT[1] - 0.68) / 0.32);
      const sweepZ = RS_Z0 - 0.2 + span * sw;
      sweepAmt = bump(sw);
      litPosts = 0;
      for (const it of items) {
        const a = clamp01((T - it.th) / 0.2);
        const gT = groupT[it.g];
        const start = (it.idx / it.n) * (it.g === 1 ? 0.45 : 0.55);
        const lt = easeIO(clamp01((gT - start) / 0.45));
        const c = it.cur;
        const lit = groupLit(it.g);
        // chaos pose
        const jit = (1 - lt) * it.amp;
        const tt = time + it.ph;
        tmpV.copy(it.p);
        if (it.air) {
          tmpV.x += Math.sin(tt * 0.9) * jit;
          tmpV.y += Math.sin(tt * 0.7 + 2) * jit * 1.3;
          tmpV.z += Math.cos(tt * 0.8) * jit;
          tmpQ.setFromAxisAngle(it.spinAxis, tt * it.spin * (REDUCED ? 0 : 0.5)).multiply(it.q);
        } else tmpQ.copy(it.q);
        // dropping in as it appears
        tmpV.y += Math.pow(1 - a, 3) * 2.2;
        if (it.g === 0 && lt > 0 && lt < 1) {
          // swept into a vortex around Orky, faster and tighter, then snapped into the tray
          const sx = tmpV.x - vortexC.x, sz = tmpV.z - vortexC.z;
          const k = sstep(lt, 0, 0.5);
          const r = lerp(Math.hypot(sx, sz), 0.24 + 0.07 * Math.sin(it.ph * 3), k);
          const th = Math.atan2(sz, sx) + lt * lt * 12;
          tmpV2.set(vortexC.x + Math.cos(th) * r, lerp(tmpV.y, vortexC.y + Math.sin(it.ph * 5) * 0.17, k), vortexC.z + Math.sin(th) * r);
          const sn = Math.pow(sstep(lt, 0.6, 1), 2.4);
          c.p.lerpVectors(tmpV2, it.tp, sn);
          tmpQ.multiply(tmpQ2.setFromAxisAngle(it.spinAxis, lt * 8));
          c.q.slerpQuaternions(tmpQ, it.tq, sn);
        } else {
          // fly to place along an arc
          c.p.lerpVectors(tmpV, it.tp, lt);
          const dist = tmpV.distanceTo(it.tp);
          c.p.y += Math.sin(Math.PI * lt) * (0.25 + dist * 0.22);
          c.q.slerpQuaternions(tmpQ, it.tq, lt);
        }
        const land = bump((lt - 0.8) / 0.2) * FLASH;
        c.sc = a > 0 || lt > 0 ? Math.min(1, a * 3 + lt) * (1 + 0.12 * land) : 0;
        c.lt = lt;
        if (play.item && c.sc > 0) play.item(it, c, dt);
        if (c.sc > 0) clearOfOrky(c.p, 1 - sstep(lt, 0.7, 1));
        if (it.g === 1) M.compose(c.p, c.q, tmpV2.copy(it.s).multiplyScalar(c.sc));
        else M.compose(c.p, c.q, tmpV2.setScalar(c.sc));
        const mesh = [bubblesMesh, parcelsMesh, cardsMesh][it.g];
        mesh.setMatrixAt(it.idx, M);
        if (it.g === 2) cardImgMesh.setMatrixAt(it.idx, M);

        // light: the mess glows, a landing swells a little, the sorted settle calm
        let b;
        if (it.g === 0) {
          b = (lerp(1.25, 0.55, lt) + 0.25 * bump(lt * 1.1) + 0.35 * land) * lit;
          bubblesMesh.setColorAt(it.idx, tmpC.copy(it.hue).multiplyScalar(b).lerp(TONES[it.tone], dayNow));
          it.lineCol.copy(it.hue).lerp(WHITE, 0.45).multiplyScalar(b * 1.15);
        } else if (it.g === 1) {
          b = (lerp(0.85, 0.42, lt) + 0.5 * land) * lit;
          it.lineCol.copy(it.hue).multiplyScalar(b);
        } else {
          // posts: each frame lights once its card is on the wall
          const on = clamp01((gT - start - 0.46) / 0.03);
          const fl = bump((gT - start - 0.46) / 0.2) * FLASH * 0.35;
          litPosts += on;
          b = ((1 - on) * lerp(0.95, 0.12, lt) + on * 1.25 + 2.4 * fl) * lit;
          cardImgMesh.setColorAt(it.idx, tmpC.copy(it.hue).multiplyScalar(b).lerp(TONES.mid, dayNow));
          it.lineCol.copy(it.hue).lerp(WHITE, 0.6).multiplyScalar((lerp(0.8, 0.4, lt) + 0.8 * fl) * lit);
        }
        it.lineCol.lerp(INK, dayNow);
        if (c.sc > 0.001) {
          if (it.g === 1) {
            M2.compose(c.p, c.q, tmpV2.setScalar(c.sc));
            pts = writeSegs(it.local, M2, pts, it.lineCol);
          } else pts = writeSegs(it.local, M, pts, it.lineCol);
        }
        if (it.g === 1) {
          // tag hangs from the front face once the parcel is on the shelf; it turns green
          // as the sweep of light passes it
          const ts = clamp01((lt - 0.85) / 0.15);
          tmpV2.set(it.s.x * 0.18, -it.s.y * 0.12, it.s.z / 2 + 0.004).applyQuaternion(c.q).add(c.p);
          tmpQ2.setFromAxisAngle(Z_AXIS, 0.12).premultiply(c.q);
          M2.compose(tmpV2, tmpQ2, ts > 0 ? ONE : ZERO);
          tagsMesh.setMatrixAt(it.idx, M2);
          if (ts > 0.01) pts = writeSegs(tagLocal, M2, pts, it.lineCol);
          const passed = (sweepZ - it.tp.z) / 0.12;
          const dotOn = clamp01(passed) * ts;
          const fl = bump(passed / 5) * FLASH * ts * 0.4;
          M2.compose(tmpV2, tmpQ2, dotScale.setScalar(dotOn + 1e-4));
          tagDotMesh.setMatrixAt(it.idx, M2);
          tagDotMesh.setColorAt(it.idx, tmpC.copy(HUES[0]).multiplyScalar((2.2 + 4 * fl) * (0.4 + 0.6 * lit)).lerp(GREEN, dayNow));
        }
      }
      for (const m of [bubblesMesh, parcelsMesh, cardsMesh, cardImgMesh, tagsMesh, tagDotMesh]) m.instanceMatrix.needsUpdate = true;
      for (const m of [bubblesMesh, parcelsMesh, cardsMesh, cardImgMesh, tagDotMesh]) m.instanceColor.needsUpdate = true;
      dynLines.geometry.attributes.instanceStart.data.needsUpdate = true;
      dynLines.geometry.attributes.instanceColorStart.data.needsUpdate = true;
      dynLines.geometry.instanceCount = pts >> 1;
      // parcels and post cards: card with a faint warm glow while they are loose
      const loose = clamp01((T - 1.6) / 0.75);
      groupMats[1].emissive.copy(PARCEL_HUE).multiplyScalar(0.07 * loose * (1 - 0.6 * groupT[1]) * groupLit(1) * (1 - dayNow));
      groupMats[2].emissive.copy(HUES[1]).multiplyScalar(0.05 * loose * (1 - 0.6 * groupT[2]) * groupLit(2) * (1 - dayNow));
      // the sweep band runs along the shelf front
      sweepBand.position.set(RS_X - 0.27, FY + 0.88, sweepZ);
      sweepBand.material.uniforms.amt.value = sweepAmt * 2.2 * groupLit(1);
      sweepBand.visible = sweepAmt > 0;
      wallWash.material.uniforms.amt.value = (litPosts / N_C) * 0.22 * groupLit(2);
    }

    function updateOrky(T, time, groupT, dt) {
      const g = orky.group;
      // Orky drops in from above on the way to its chapter, with a pulse of light
      const visible = T > CH_MESS + 0.62;
      g.visible = visible;
      if (T > CH_ORKY - 0.03 && !arrived) { arrived = true; arriveAt = revealed ? time : -10; }
      if (T < CH_MESS + 0.66) arrived = false;
      const pa = (time - arriveAt) / 1.5;
      shell.visible = visible && FLASH > 0 && pa >= 0 && pa < 1;
      if (shell.visible) {
        shell.scale.set(0.3 + (1 - Math.pow(1 - pa, 3)) * 2.9, 0.3 + (1 - Math.pow(1 - pa, 3)) * 4.2, 1);
        shell.material.uniforms.amt.value = Math.sin(Math.PI * Math.min(1, pa * 1.6)) * (1 - pa) * 0.8;
      }
      orkyFlash = visible && FLASH > 0 && pa >= 0 && pa < 1 ? Math.pow(Math.sin(Math.PI * pa), 2) : 0;
      if (!visible) return;
      const [i, u] = camAt(T);
      const eu = i === CH_MESS ? easeIO(u) : u;
      g.position.lerpVectors(ORKY_KEYS[i], ORKY_KEYS[i + 1], eu);
      if (i === CH_MESS) g.position.y += Math.sin(Math.PI * eu) * 0.8;
      if (!REDUCED) g.position.y += Math.sin(time * 1.6) * 0.035;
      g.scale.setScalar(0.27);
      // face the visitor; turn toward the group being put in order
      lookObj.position.copy(g.position);
      lookObj.lookAt(camera.position);
      tmpQ.copy(lookObj.quaternion);
      let w = 0, k = -1;
      for (let j = 0; j < 4; j++) {
        const bmp = Math.sin(Math.PI * clamp01(groupT[j] * 1.15));
        if (bmp > w) { w = bmp; k = j; }
      }
      if (k >= 0) {
        lookObj.lookAt(LOOK_AT[k]);
        tmpQ.slerp(lookObj.quaternion, w * 0.6);
      }
      // Model G: Orky rests (exact logo tones, facing the visitor, still) whenever it is not
      // travelling between shots or turned toward the work.
      const moving = (u > 0.002 && u < 0.998) || w > 0.06 || Math.abs(T - Tgoal) > 0.08;
      orkyRest += ((moving ? 0 : 1) - orkyRest) * (1 - Math.exp(-dt / 0.18));
      if (REDUCED) orkyRest = moving ? 0 : 1;
      const wob = 1 - orkyRest;
      if (!REDUCED) tmpQ.multiply(tmpQ2.setFromEuler(new THREE.Euler(Math.sin(time * 0.7) * 0.05 * wob, Math.sin(time * 0.5) * 0.12 * wob, 0)));
      g.quaternion.copy(tmpQ);
      orky.U.uRest.value = orkyRest;
      // eyes: pupils follow the pointer, blink now and then
      let blink = 1;
      if (!REDUCED) {
        if (blinkT < 0 && time > blinkAt) blinkT = 0;
        if (blinkT >= 0) {
          blinkT += dt;
          const p = blinkT / 0.12;
          blink = p < 1 ? 1 - Math.sin(Math.PI * p) * 0.92 : 1;
          if (p >= 1) { blinkT = -1; blinkAt = time + 3 + Math.random() * 4; }
        }
      }
      for (const e of orky.eyes) {
        e.material.uniforms.blink.value = blink;
        e.material.uniforms.look.value.set(ptrX * 0.085, -ptrY * 0.09);
      }
    }
    let orkyFlash = 0, orkyRest = 1, Tgoal = 0;
    // Orky's key light, in view space: the moon or the sun, whichever is up (a soft overhead
    // sky in the minutes between them).
    const SKY_DIR = v3(-0.35, 1, 0.45).normalize();
    function orkySun() {
      const U = orky.U;
      tmpV.subVectors(sun.position, sun.target.position).normalize();
      tmpV.lerp(SKY_DIR, 1 - keyK).normalize();
      U.uLS.value.copy(tmpV).transformDirection(camera.matrixWorldInverse);
      U.uBright.value = lerp(lerp(0.62, 0.78, keyK), 1, dayNow);
    }

    function updateMarks(T, time, groupT) {
      const camDist = camera.position.distanceTo(camTarget) / zoom;
      for (let k = 0; k < 4; k++) {
        const s = ease(clamp01((groupT[k] - 0.9) / 0.1));
        marks[k].scale.setScalar(s * Math.min(0.1, Math.max(0.07, camDist * 0.009)));
      }
      // the cable draws itself from the ERP to the till, its head carrying the light; once
      // connected it stays lit, steady
      const g4 = groupT[3];
      const n = Math.floor(cableTotal * easeIO(g4));
      cable.geometry.instanceCount = n;
      cable.visible = n > 0;
      plug.visible = n > 0;
      if (n > 0) plug.position.copy(cablePts[n]);
      let head = -1e3, hb = 0;
      if (n > 0 && g4 < 1) { head = n; hb = 3.2; }
      const lit = groupLit(3);
      const base = 0.5 * lit + 0.35 * clamp01((T - CH_DAWN + 0.5) / 0.5);
      for (let i = 0; i < cableTotal; i++) {
        const d = (head - i) / 9;
        const v = base + (i <= head + 1 ? hb * Math.exp(-d * d) : 0) * lit;
        tmpC.copy(HUES[0]).lerp(WHITE, 0.55).multiplyScalar(v).lerp(INK, dayNow);
        const o = i * 6;
        cableCol[o] = cableCol[o + 3] = tmpC.r; cableCol[o + 1] = cableCol[o + 4] = tmpC.g; cableCol[o + 2] = cableCol[o + 5] = tmpC.b;
      }
      cable.geometry.attributes.instanceColorStart.data.needsUpdate = true;
      cablePulse = hb > 0 && head >= 0 && head <= cableTotal ? hb / 3.2 : 0;
      if (cablePulse > 0) pulsePos.copy(cablePts[Math.min(cableTotal, Math.max(0, Math.round(head)))]);
      pulseHalo.visible = cablePulse > 0 && n > 0;
      pulseHalo.position.copy(pulsePos);
      pulseHalo.material.opacity = 0.9 * lit;
      // arriving at the till: it flashes green
      const arrive = g4 < 1 ? bump((g4 - 0.86) / 0.14) : (head >= 0 ? Math.exp(-Math.pow((head - cableTotal) / 22, 2)) : 0);
      tillFlash = n > 0 ? (REDUCED ? clamp01((g4 - 0.9) / 0.1) * 0.5 : Math.max(arrive, 0.25 * clamp01((g4 - 0.9) / 0.1))) : 0;
      tillHalo.material.opacity = tillFlash * 1.1;
      tillHalo.visible = tillFlash > 0.01;
      crtDot.scale.setScalar(ease(clamp01((g4 - 0.92) / 0.08)) + 1e-4);
      // notices: a ping travels from the shelf to the phone
      const pingOn = groupT[1] >= 0.98 && T < CH_DAWN;
      const pd = ease(clamp01((groupT[1] - 0.9) / 0.1)) + 1e-4;
      phoneDot.matrix.copy(phoneDotBase).multiply(M2.makeScale(pd, pd, pd));
      if (!pingOn) { pingDot.visible = false; rings.forEach((r) => (r.visible = false)); return; }
      const from = v3(RS_X - 0.25, FY + 1.2, -0.5);
      const ph = REDUCED ? 0.75 : (time % 2.6) / 2.6;
      if (ph < 0.42) {
        const u = easeIO(ph / 0.42);
        pingDot.visible = true;
        pingDot.position.lerpVectors(from, PHONE_P, u);
        pingDot.position.y += Math.sin(Math.PI * u) * 0.5;
      } else pingDot.visible = false;
      rings.forEach((r, j) => {
        const u = clamp01((ph - 0.42 - j * 0.12) / 0.4);
        r.visible = u > 0 && u < 1;
        r.position.copy(PHONE_P);
        r.quaternion.copy(camera.quaternion);
        r.scale.setScalar(0.04 + u * 0.16);
        r.material.opacity = (1 - u) * 0.85;
      });
    }

    // ───────────────────────── the lighting state, from story time
    const roomCol = new THREE.Color(), CALM = new THREE.Color(0xc9d6ff);
    const MOON_LIGHT = new THREE.Color(0x9fb2d6), DAWN_LIGHT = new THREE.Color(0xffe2c6);
    const GROUND_FLAT = new THREE.Color(0xb9b9b5), GROUND_SUN = new THREE.Color(0x8c8c88);
    const LINE_ORKY_NIGHT = new THREE.Color(0xe8e8e5);
    const knot = (K, x) => {
      if (x <= K[0][0]) return K[0][1];
      for (let i = 0; i < K.length - 1; i++) { const [a, va] = K[i], [b, vb] = K[i + 1]; if (x <= b) return lerp(va, vb, (x - a) / (b - a)); }
      return K[K.length - 1][1];
    };
    // How high the moon and the sun stand, in degrees, by story time. The moon sinks
    // through the night and sets as the first beat ends; the sun clears the horizon on the
    // way to the second, lies almost flat while the notices go out, and climbs to a
    // morning height for the close.
    const MOON_EL = [[0, 38], [CH_IN, 34], [CH_MESS, 28], [CH_ORKY, 20], [CH_BEAT, 9], [CH_BEAT + 0.55, 0], [CH_BEAT + 1, -8]];
    const SUN_EL = [[CH_BEAT + 0.55, -6], [CH_BEAT + 0.75, 0], [CH_BEAT + 1, 4], [CH_BEAT + 2, 12], [CH_BEAT + 3, 22], [CH_DAWN, 34], [CH_CLOSE, 46]];
    // Directions are taken from the story's own view (the hero's azimuth), not the moving
    // camera, so turning the model never moves the sun.
    const REF_R = v3(Math.cos(-36 * D2R), 0, -Math.sin(-36 * D2R)), REF_F = v3(-Math.sin(-36 * D2R), 0, -Math.cos(-36 * D2R));
    const UP = v3(0, 1, 0);
    let keyK = 0, sunEl = -10, useSun = false;
    const easeOut = (x) => 1 - (1 - x) * (1 - x);
    // Which way the key light falls across the model: from the moon's side of the page (it
    // crosses toward the right edge through the night) or the sun's (it rises at the left
    // edge and climbs toward the middle), and a little from the visitor's, so the card
    // faces read white, as in the logo.
    function lightSide(T) {
      const x = useSun
        ? lerp(-0.05, 0.6, easeOut(clamp01((T - CH_BEAT - 0.7) / (CH_CLOSE - CH_BEAT - 0.7))))
        : lerp(0.66, 1.05, Math.pow(clamp01(T / (CH_BEAT + 0.55)), 1.3));
      return [Math.min(0.5, (x - 0.5) * 2), -0.45];
    }
    function sky(T) {
      const mEl = knot(MOON_EL, T);
      sunEl = knot(SUN_EL, T);
      const mK = sst(mEl, -1, 8), sK = sst(sunEl, -1, 4);
      useSun = sunEl > -1;
      const [hx, hz] = lightSide(T);
      const el = (useSun ? sunEl : mEl) * D2R;
      tmpV.copy(REF_R).multiplyScalar(hx).addScaledVector(REF_F, hz).normalize().multiplyScalar(Math.cos(el)).addScaledVector(UP, Math.sin(el));
      // the light stays a touch above the horizon, so the shadow map never grazes
      if (tmpV.y < 0.04) { tmpV.y = 0.04; }
      tmpV.normalize();
      sun.position.copy(sun.target.position).addScaledVector(tmpV, 26);
      keyK = useSun ? sK : mK;
      const morning = sst(sunEl, 6, 40);
      if (useSun) {
        sun.color.copy(DAWN_LIGHT).lerp(WHITE, morning);
        sun.intensity = sK * 3.0;
      } else {
        sun.color.copy(MOON_LIGHT);
        sun.intensity = 0.6 * mK;
      }
      sun.shadow.radius = lerp(2.4, 1.0, morning);
      // the page's sky: the story script holds its numbers, the shader paints them
      story.setSky(T);
      const U = skyMat.uniforms, K = story.SKY;
      U.A.value = K.A; U.G.value = K.G; U.warm.value = K.warm; U.sunX.value = K.sunX;
      U.stars.value = POSTER ? 0 : 1 - sst(K.day, 0.2, 0.45);
      return morning;
    }

    // The cross coming on, by seconds since it was switched (crossAt is set at the takeover):
    // a stutter, as an LED cross does when it powers up, then steady. Reduced motion: on.
    const FLICKER = [[0, 1], [0.05, 0], [0.13, 0.6], [0.18, 0], [0.34, 1]];
    let crossAt = Infinity;
    function crossLevel(t) {
      if (!(t >= 0)) return 0;
      if (REDUCED) return 1;
      let v = 0;
      for (const [a, x] of FLICKER) if (t >= a) v = x;
      return v;
    }
    const crossSettled = () => REDUCED ? crossAt < Infinity : clock - crossAt > FLICKER[FLICKER.length - 1][0];

    function updateLights(T, time, groupT) {
      const day = dayNow, nd = 1 - day;
      const morning = sky(T);
      const mess = clamp01((T - 1.6) / 0.75);
      const sorted = (groupT[0] + groupT[1] + groupT[2] + groupT[3]) / 4;
      // the sky's fill: faint blue at night, a flat grey before the sun is up, open by day
      hemi.color.copy(HEMI_NIGHT[0]).lerp(WHITE, day);
      hemi.groundColor.copy(HEMI_NIGHT[1]).lerp(tmpC.copy(GROUND_FLAT).lerp(GROUND_SUN, Math.max(keyK * 0.6, morning) * +useSun), day);
      hemi.intensity = lerp(0.38, lerp(1.35, 1.95, morning), day);
      // the shadow on the page beyond the base plate stays light, so it reads as shadow
      ground.material.opacity = useSun ? keyK * lerp(0.2, 0.15, morning) : 0.3 * keyK;
      // the back room: lit by what piles up in it, a steady light that cools as it is sorted
      roomCol.copy(HUES[1]).lerp(HUES[0], 0.35).lerp(CALM, 1 - 0.4 * clamp01(mess * (1 - sorted) * 1.3));
      const ri = lerp(0, 2.3, mess) * (1 - 0.4 * sorted);
      roomLight.intensity = ri * nd;
      roomLight.color.copy(roomCol);
      roomLight.position.set(2.0, 2.2, -0.3);
      roomPool.material.uniforms.color.value.copy(roomCol);
      roomPool.material.uniforms.amt.value = ri * 0.03 * nd;
      // the green cross glows through the night and simply reads green by day; it is off
      // until the scene takes over (the night still shows it off), then comes on
      const on = POSTER ? +(T > 4.5) : crossLevel(time - crossAt);
      crossCaps.color.copy(GREEN).multiplyScalar(lerp(0.32, lerp(2.2, 1, day), on));
      crossLight.intensity = 2.2 * nd * on;
      crossHalo.material.opacity = 0.42 * nd * on;
      crossPool.material.uniforms.amt.value = 0.3 * nd * on;
      // the old computer's screen: a little light in the back room all night
      crtScreen.material.color.setScalar(lerp(0.98, 0.74, day));
      crtLight.intensity = 1.3 * nd * nd;
      // the roaming light follows whichever payoff is playing
      if (T < CH_ORKY + 0.7) {
        fxLight.color.setRGB(1, 1, 1);
        fxLight.position.copy(orky.group.position);
        fxLight.intensity = orky.group.visible ? (0.5 + 1.4 * orkyFlash) * (1 - sst(T, CH_ORKY + 0.35, CH_ORKY + 0.68)) : 0;
      } else if (T < CH_BEAT + 0.7) {
        fxLight.color.copy(HUES[1]).lerp(WHITE, 0.4);
        fxLight.position.copy(vortexC);
        fxLight.position.y += 0.8;
        fxLight.intensity = 0.7 * bump(groupT[0]) * groupLit(0);
      } else if (T < CH_BEAT + 1.7) {
        fxLight.color.copy(HUES[0]).lerp(WHITE, 0.3);
        fxLight.position.set(RS_X - 0.5, FY + 1.0, sweepBand.position.z);
        fxLight.intensity = 1.8 * sweepAmt * groupLit(1);
      } else if (T < CH_BEAT + 2.7) {
        fxLight.color.copy(HUES[2]).lerp(HUES[1], 0.5).lerp(WHITE, 0.3);
        fxLight.position.set(1.9, FY + 1.75, -1.55);
        fxLight.intensity = 1.8 * (litPosts / N_C) * groupLit(2) * (1 - sst(T, CH_BEAT + 2.4, CH_BEAT + 2.68));
      } else {
        // the till, once the ERP reaches it
        fxLight.color.copy(HUES[0]).lerp(WHITE, 0.4);
        fxLight.position.set(-1.25, FY + 1.3, -0.5);
        fxLight.intensity = 0.8 * tillFlash * groupLit(3);
      }
      fxLight.intensity *= nd;
      for (const q of [sweepBand, wallWash, shell]) q.material.uniforms.amt.value *= nd;
      tillHalo.material.opacity *= nd; pulseHalo.material.opacity *= nd;
      // the glow drains out of the loose things as the sun comes up
      groupMats[0].userData.glow.value = groupMats[3].userData.glow.value = nd;
      // edges: pale hairlines in the dark, ink by day
      const lc = tmpC.copy(LINE_NIGHT).lerp(INK, day);
      for (const m of lineStatic) m.color.copy(lc);
      lineFine.opacity = lerp(0.5, 0.75, day);
      hullMat.uniforms.color.value.copy(lc);
      lineOrky.color.copy(LINE_ORKY_NIGHT).lerp(INK, day);
      // the shop is closed all night; with the sun up the pharmacist comes out of the back
      // room to the counter, and the first customer walks in from the street (then the day)
      shop.pose(T);
    }

    // ───────────────────────── Orky's bubble
    // From its arrival Orky says each chapter's title in a bubble that follows it.
    const ov = document.getElementById("ov");
    const HEAD_H = 64;
    const keyEls = [...document.querySelectorAll("[data-key]")];
    const beatEls = [...document.querySelectorAll(".beat-key")];
    const TITLE = keyEls.map((el) => {
      if (!el.hasAttribute("data-orky")) return "";
      const j = beatEls.indexOf(el);
      return (j >= 0 ? document.querySelectorAll(".beats strong")[j] : el.querySelector("h2")).textContent.trim();
    });
    const PV = new THREE.Vector3();
    const proj = (v) => {
      PV.copy(v).project(camera);
      return { x: ((PV.x + 1) / 2) * vw, y: ((1 - PV.y) / 2) * vh, on: PV.z < 1 && Math.abs(PV.x) < 1.02 && Math.abs(PV.y) < 1.02 };
    };
    const say = document.createElement("div");
    say.className = "say ovh d r";
    say.style.opacity = 0; // hidden until a chapter has words for it
    say.innerHTML = `<div class="bub"></div>`;
    ov.appendChild(say);
    const bub = say.firstChild;
    let shown = -1, side = 1;
    const words = {
      update() {
        const k = Math.max(0, story.active);
        if (k !== shown) {
          shown = k;
          bub.textContent = TITLE[k];
          bub.classList.remove("pop");
          // a bubble already up when the scene arrives is simply there
          if (revealed) {
            void bub.offsetWidth;
            bub.classList.add("pop");
          }
        }
        const p = proj(orky.group.position);
        const od = camera.position.distanceTo(orky.group.position);
        const r = ((0.27 * zoom) / (od * tanV)) * vh * 0.5;
        const bw = bub.offsetWidth, bh = bub.offsetHeight;
        // beside Orky's upper corner, clear of its eye (which sits below its centre)
        const gap = Math.max(10, r * 0.95);
        const minX = 16, maxX = vw - 16;
        // to Orky's right unless that runs off screen; back to the right once there is room
        if (side > 0 && p.x + gap + bw > maxX) side = -1;
        else if (side < 0 && p.x + gap + bw < maxX - 40) side = 1;
        let x = side > 0 ? p.x + gap : p.x - gap - bw;
        let y = p.y - r * 0.6 - bh - 10;
        const below = y < HEAD_H + 12;
        if (below) y = p.y + r * 0.95 + 16;
        x = Math.min(Math.max(x, minX), maxX - bw);
        say.className = `say ovh ${below ? "u" : "d"} ${side > 0 ? "r" : "l"}`;
        bub.style.setProperty("--ox", side > 0 ? "0%" : "100%");
        bub.style.setProperty("--oy", below ? "0%" : "100%");
        say.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        say.style.opacity = p.on && orky.group.visible && TITLE[k] && story.wordsOn ? 1 : 0;
      },
    };

    // ───────────────────────── play: the pointer pushes the loose things, a drag turns the
    // maquette. Nothing says so; vertical scrolling always stays the browser's.
    const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
    const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
    const rayAt = (x, y) => {
      ndc.set((x / vw) * 2 - 1, -((y / vh) * 2 - 1));
      raycaster.setFromCamera(ndc, camera);
      return raycaster.ray;
    };
    const PT = { x: -1, y: -1, on: false, down: false };
    const H = {};
    const ups = [];
    function input(type, x, y) {
      PT.x = x; PT.y = y; PT.on = type !== "leave";
      if (type === "down") PT.down = true;
      H[type]?.(x, y);
      if (type === "up") PT.down = false;
    }
    const blocked = (t) => !!t?.closest?.("a, button, input, textarea, label, .block.is-on, .site-header, .site-footer");
    document.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || blocked(e.target)) return;
      if (e.pointerType === "mouse") e.preventDefault();
      input("down", e.clientX, e.clientY);
    });
    addEventListener("pointermove", (e) => input("move", e.clientX, e.clientY), { passive: true });
    addEventListener("pointerup", (e) => input("up", e.clientX, e.clientY));
    addEventListener("pointercancel", () => { PT.down = false; H.up?.(); });
    root.addEventListener("pointerleave", () => input("leave", PT.x, PT.y));

    // turntable: drag to turn, inertia, then it eases back to the story's camera
    let turning = () => false, pushed = false;
    {
      root.classList.add("gl");
      let yaw = 0, pitch = 0, vYaw = 0, dragging = false, lx = 0, ly = 0, lt = 0, idle = 0;
      H.down = (x, y) => { dragging = true; lx = x; ly = y; lt = performance.now(); vYaw = 0; root.classList.add("dragging"); };
      H.move = (x, y) => {
        if (!dragging) return;
        const now = performance.now(), s = Math.max(0.008, (now - lt) / 1000);
        const d = (x - lx) * 0.45;
        yaw += d;
        pitch = clamp(pitch + (y - ly) * 0.2, -25, 30);
        vYaw = lerp(vYaw, d / s, 0.5);
        lx = x; ly = y; lt = now; idle = 0;
      };
      H.up = () => { if (!dragging) return; dragging = false; idle = 0; root.classList.remove("dragging"); if (performance.now() - lt > 90) vYaw = 0; };
      ups.push((dt) => {
        if (dragging) return;
        yaw += vYaw * dt;
        vYaw *= Math.exp(-dt * 2.4);
        if (Math.abs(vYaw) < 12) idle += dt;
        if (idle > 0.8) {
          const home = Math.round(yaw / 360) * 360, k = 1 - Math.exp(-dt * 2.6);
          yaw += (home - yaw) * k; pitch -= pitch * k;
          if (Math.abs(home - yaw) < 0.05) yaw -= home;
        }
      });
      // how far it turns: freely on the wide shots, a little in the close-ups, so the walls
      // never come between the visitor and the action (a soft limit, felt as resistance)
      turning = () => dragging || Math.abs(vYaw) > 0.5 || Math.abs(yaw) > 0.05 || Math.abs(pitch) > 0.05;
      const TURN = SHOTS.map((_, i) => (HERO_SHOT(i) || i === CH_IN ? 150 : 24));
      play.cam = (az, el, dist) => {
        const [i, u] = camAt(Tcur);
        const lim = lerp(TURN[i], TURN[i + 1], u), plim = lim > 100 ? 25 : 12;
        yaw = clamp(yaw, -2.2 * lim, 2.2 * lim);
        pitch = clamp(pitch, -2 * plim, 2 * plim);
        return { az: az - lim * Math.tanh(yaw / lim), el: clamp(el + plim * Math.tanh(pitch / plim), 4, 80), dist };
      };
    }

    // push the mess: the pointer is a force; loose things scatter and drift back. What is
    // near the pointer is pushed away from it, and a moving pointer sweeps things along
    // with it, so a pass of the mouse through the mess is felt at once.
    {
      const R = 1.05;
      for (const it of items) { it.off = new THREE.Vector3(); it.vel = new THREE.Vector3(); }
      let ray = null, lpx = -1, lpy = -1;
      const sweep = new THREE.Vector2(), camR = new THREE.Vector3(), camU = new THREE.Vector3();
      const cp = new THREE.Vector3(), dir = new THREE.Vector3(), ax = new THREE.Vector3(), q = new THREE.Quaternion();
      ups.push((dt) => {
        pushed = false;
        ray = PT.on ? rayAt(PT.x, PT.y).clone() : null;
        // the pointer's own speed, in pixels a second, eased so one jerky event is not a blow
        const k = 1 - Math.exp(-dt * 12);
        const vx = PT.on && lpx >= 0 && dt > 0 ? (PT.x - lpx) / dt : 0, vy = PT.on && lpy >= 0 && dt > 0 ? (PT.y - lpy) / dt : 0;
        sweep.x += (Math.max(-2500, Math.min(2500, vx)) - sweep.x) * k;
        sweep.y += (Math.max(-2500, Math.min(2500, vy)) - sweep.y) * k;
        lpx = PT.on ? PT.x : -1; lpy = PT.on ? PT.y : -1;
        camR.setFromMatrixColumn(camera.matrixWorld, 0);
        camU.setFromMatrixColumn(camera.matrixWorld, 1);
      });
      play.item = (it, c, dt) => {
        if (ray) {
          ray.closestPointToPoint(c.p, cp);
          dir.subVectors(c.p, cp);
          const d = dir.length();
          if (d < R) {
            // what is already filed only budges
            const f = (1 - d / R) * (1 - d / R) * (1 - 0.88 * c.lt);
            it.vel.addScaledVector(dir.multiplyScalar(1 / (d + 1e-4)), f * 230 * dt);
            // the sweep: the pointer's motion carried into the scene at the thing's depth
            const wpp = (2 * tanV * camera.position.distanceTo(c.p)) / (vh * zoom);
            it.vel.addScaledVector(camR, sweep.x * wpp * f * 7 * dt).addScaledVector(camU, -sweep.y * wpp * f * 7 * dt);
          }
        }
        it.vel.addScaledVector(it.off, -11 * dt).multiplyScalar(Math.exp(-dt * 2.4));
        it.off.addScaledVector(it.vel, dt);
        if (it.vel.lengthSq() > 1e-6) pushed = true;
        // never further than a throw from home (a filed thing, much less)
        const cap = lerp(0.8, 0.12, c.lt);
        if (it.off.length() > cap) { it.off.setLength(cap); it.vel.multiplyScalar(0.5); }
        c.p.add(it.off);
        const L = it.off.length();
        if (Math.hypot(it.off.x, it.off.z) > 1e-4) { ax.set(it.off.z, 0, -it.off.x).normalize(); c.q.premultiply(q.setFromAxisAngle(ax, L * 3)); }
      };
    }
    play.update = (dt) => { for (const f of ups) f(dt); };
    play.busy = () => turning() || pushed;

    // ───────────────────────── the day
    // Once the ending has played the shop is open, for as long as the last screen shows.
    // Customers come in from the street after random gaps, some stop at the display table,
    // queue at the counter (three at most in the shop, three places in the queue), are
    // served and leave with a white bag. The pharmacist faces the counter, turns to the
    // shelves now and then, and hands the bag over. Everyone keeps to fixed lanes: in from the
    // east of the pavement, out by the left of the counter to the west; the street door is
    // one way at a time; a walker slows and waits short of anyone in the way (someone leaving
    // never waits for someone coming in, whose lanes keep clear of theirs). ?seed=<n> fixes
    // the sequence. Two minutes with no input from the visitor and nobody new comes in: the
    // last customers are served, and the loop rests. It rests between moments too, when
    // nothing moves, and wakes for the next one. Off under reduced motion and at the lowest
    // quality level; scrolling away fades the customers out where they stand.
    const shop = (() => {
      const sq = parseInt(params.get("seed") ?? "", 10);
      const seed = Number.isFinite(sq) ? sq >>> 0 : (Math.random() * 4294967296) >>> 0;
      story.daySeed = seed;
      const R = mulberry32(seed);
      const rnd = (a, b) => a + R() * (b - a);
      const P = (x, z) => v3(x, FY, z);
      const PH = people[0], FIRST = people[1];
      // the counter's place is where the first customer stands; the queue runs back to the
      // right, so each in it is seen beside the one ahead
      const SLOT = [FIRST.home, P(-1.16, 0.42), P(-0.62, 0.72)];
      const ST_TURN = P(-2.55, 3.35), DOOR_OUT = P(-3.05, 2.95), DOOR_IN = P(-3.05, 2.1), HALL = P(-2.35, 1.45);
      const BEHIND = P(-1.45, 1.02), MID = P(-0.95, 1.02), BROWSE = P(-1.5, 2.05), NOOK = P(-1.85, 1.5), TABLE = P(-0.9, 1.55);
      const EXIT = [P(-2.5, 0.32), P(-3.2, 0.95), P(-3.25, 1.45), DOOR_IN, DOOR_OUT, P(-3.45, 3.3), P(-4.9, 3.4)];
      // the street door and the lobby inside it: one way at a time
      const inZone = (p) => p.x < -2.4 && p.z > 1.6 && p.z < 3.25;
      const LOOK = 0.4, REACH = 0.35, WIDE = 0.55, TOUCH = 0.56, IDLE = 120;
      const faceTo = (p, q) => Math.atan2(q.x - p.x, q.z - p.z);
      const TURN = Math.atan2(Math.sin(Math.PI - PH.rest), Math.cos(Math.PI - PH.rest)); // to the shelves
      const typing = () => !!document.activeElement?.matches?.(".contact-form :is(input, textarea)");
      // a few seconds, now and then a pair close together or a longer lull; slow while the
      // visitor is filling in the form
      const gap = () => (typing() ? rnd(18, 32) : Math.min(11, 1.6 - Math.log(1 - R()) * 3));

      for (const c of crowd) {
        Object.assign(c, {
          state: c === FIRST ? "script" : "off", pts: Array.from({ length: 10 }, () => new THREE.Vector3()), cum: new Float32Array(10),
          n: 0, plen: 0, s: 0, v: 0, speed: 1, h: 1, yaw: 0, face: 0, walkS: 0, m: 0, at: 0, goal: "", until: 0, readyAt: 0,
          leaving: false, alpha: 1, dying: false, bag: 0, bagOn: false, side: 1, reach: 0, reachT: 0, fadeIn: false, fadeOut: false,
          claim: false, yieldTo: null, stuck: 0, shownA: -1, cast: true, meshes: [],
        });
        c.outer.traverse((o) => o.isMesh && o.castShadow && c.meshes.push(o));
      }
      const line = []; // the queue, first at the counter
      const serve = { c: null, t0: 0, a: 0, shelf: 0 };
      const ph = { turn: 0, step: 0, reach: 0, next: 0, tripEnd: 0 };
      let on = false, winding = false, moving = false, soon = Infinity, nextArrival = Infinity, lastInput = 0, timer = 0;
      const soonest = (t) => { if (t < soon) soon = t; };
      const TH = new Float64Array(8);
      // a figure's per-visit state back to nothing
      function fresh(c) {
        c.leaving = c.dying = c.bagOn = c.claim = c.fadeIn = c.fadeOut = false;
        c.alpha = 1; c.bag = c.reach = c.reachT = c.stuck = 0; c.yieldTo = null;
      }

      // ── paths: a polyline from where the figure stands, walked by distance
      let seg = 1;
      function pointAt(c, s, out) {
        let i = 1;
        while (i < c.n - 1 && c.cum[i] < s) i++;
        seg = i;
        const L = c.cum[i] - c.cum[i - 1];
        return out.lerpVectors(c.pts[i - 1], c.pts[i], L > 1e-6 ? clamp01((s - c.cum[i - 1]) / L) : 1);
      }
      function add(c, p) {
        const i = c.n++;
        c.pts[i].set(p.x, FY, p.z);
        c.cum[i] = i ? c.cum[i - 1] + c.pts[i].distanceTo(c.pts[i - 1]) : 0;
      }
      function begin(c) { c.n = 0; add(c, c.outer.position); }
      function go(c, goal) { c.plen = c.cum[c.n - 1]; c.s = 0; c.state = "walk"; c.goal = goal; }
      // someone ahead was served while this one was still on the way: the same way in (what is
      // left of the street, the door, the lobby), then to the better place
      const rest = Array.from({ length: 10 }, () => new THREE.Vector3());
      const isPlace = (p) => p.distanceToSquared(BEHIND) < 1e-6 || p.distanceToSquared(MID) < 1e-6 || SLOT.some((q) => p.distanceToSquared(q) < 1e-6);
      function retarget(c, k) {
        pointAt(c, c.s, ahead);
        let m = 0;
        for (let i = seg; i < c.n; i++) if (!isPlace(c.pts[i])) rest[m++].copy(c.pts[i]);
        begin(c);
        for (let i = 0; i < m; i++) add(c, rest[i]);
        if (k === 2) { add(c, BEHIND); add(c, MID); }
        add(c, SLOT[k]);
        c.at = k;
        go(c, "slot");
      }
      // to the queue's last place, from where the figure stands, by way of `via`
      function join(c, via) {
        const k = line.length;
        line.push(c);
        begin(c);
        if (via) add(c, via);
        if (k === 2) { add(c, BEHIND); add(c, MID); }
        add(c, SLOT[k]);
        c.at = k;
        go(c, "slot");
      }

      // ── the street: a new customer, not like the last
      function spawn(c) {
        c.h = rnd(0.9, 1.07);
        c.speed = rnd(0.7, 1.15);
        const g = R() < 0.3 ? rnd(0.1, 0.3) : rnd(0.3, 0.92), l = g * rnd(0.7, 0.92);
        c.mats.body.color.setRGB(g, g, g, THREE.SRGBColorSpace);
        c.mats.limb.color.setRGB(l, l, l, THREE.SRGBColorSpace);
        c.side = R() < 0.5 ? 0 : 1;
        fresh(c);
        c.outer.position.set(rnd(-0.7, 0.1), FY, 3.3 + rnd(-0.05, 0.05));
        c.yaw = c.face = -Math.PI / 2;
        c.walkS = 0; c.v = c.speed; c.m = 1;
        begin(c); add(c, ST_TURN); add(c, DOOR_OUT); add(c, DOOR_IN);
        if (R() < 0.35) { add(c, BROWSE); go(c, "browse"); }
        else {
          const k = line.length;
          line.push(c);
          add(c, HALL);
          if (k === 2) { add(c, BEHIND); add(c, MID); }
          add(c, SLOT[k]);
          c.at = k;
          go(c, "slot");
        }
        c.fadeIn = true;
      }
      function leave(c) {
        line.shift();
        c.leaving = true; c.reachT = 0;
        begin(c);
        for (let i = 0; i < EXIT.length; i++) add(c, EXIT[i]);
        go(c, "out");
        c.fadeOut = true;
      }
      // back to the story's own first customer (scrolled away from the end), or hidden
      function toScript(c, a) {
        fresh(c);
        c.state = "script"; c.alpha = a; c.h = 1;
        c.mats.body.color.copy(TONES.grey);
        c.mats.limb.color.copy(TONES.mid);
      }
      function retire(c) {
        if (c === FIRST && !on) toScript(c, 0);
        else { fresh(c); c.state = "off"; c.outer.visible = false; }
      }

      function start(now) {
        lastInput = now;
        nextArrival = now + rnd(2.5, 5);
        ph.next = now + rnd(4, 9); ph.tripEnd = 0;
        const c = FIRST;
        if (c.state !== "script") return;
        // the customer at the counter is the day's first: served after a moment
        c.state = "queue"; c.at = 0; c.readyAt = now + rnd(1, 2);
        c.yaw = c.face = c.rest; c.h = 1; c.speed = rnd(0.75, 1.1); c.side = 1; c.m = c.walkS = c.v = 0;
        c.outer.position.copy(c.home);
        line.push(c);
      }
      function stop() {
        serve.c = null; line.length = 0; nextArrival = Infinity;
        for (const c of crowd) {
          c.reachT = 0;
          if (c.state === "off") { if (c === FIRST) toScript(c, 0); continue; }
          if (c.state === "script") continue;
          // the first customer still waiting at the counter simply stays the story's
          if (c === FIRST && !c.bagOn && c.at === 0 && (c.state === "queue" || c.state === "serve") && c.outer.position.distanceToSquared(c.home) < 1e-4) { toScript(c, c.alpha); continue; }
          c.dying = true;
        }
      }

      // ── walking: slow down short of anyone in the way, wait for the door
      const ahead = new THREE.Vector3();
      function walk(c, dt, now) {
        const pos = c.outer.position;
        pointAt(c, c.s + LOOK, ahead);
        let block = false;
        c.yieldTo = null;
        // someone in the corridor ahead: in front, and within a body's width of the way
        const fx = ahead.x - pos.x, fz = ahead.z - pos.z, fl = Math.hypot(fx, fz);
        // (held up a while by someone standing still beside the way: go on past, never
        // nearer than touching)
        if (fl > 1e-4) for (const o of crowd) {
          if (o === c || !o.outer.visible || o.yieldTo === c || (c.leaving && !o.leaving)) continue;
          if (c.stuck > 1.2 && o.state !== "walk") continue;
          const rx = o.outer.position.x - pos.x, rz = o.outer.position.z - pos.z;
          const along = (rx * fx + rz * fz) / fl, lat = Math.abs(rx * fz - rz * fx) / fl;
          if (along > 0.05 && along < fl + REACH && lat < WIDE) { block = true; c.yieldTo = o; break; }
        }
        c.stuck = block && c.yieldTo.state !== "walk" ? c.stuck + dt : 0;
        const into = !inZone(pos) && inZone(ahead);
        if (!block && into) for (const o of crowd) if (o !== c && o.claim && o.leaving !== c.leaving) { block = true; break; }
        c.claim = inZone(pos) || (!block && inZone(ahead));
        const left = c.plen - c.s;
        const target = block ? 0 : Math.min(c.speed, 0.15 + left * 2.2);
        c.v += (target - c.v) * (1 - Math.exp(-dt * 9));
        if (block && c.v < 0.03) c.v = 0;
        let ds = Math.min(left, c.v * dt);
        if (ds > 0) {
          // and never into anyone, whatever the slowing left over
          pointAt(c, c.s + ds, ahead);
          for (const o of crowd) {
            if (o === c || !o.outer.visible || o.yieldTo === c || (c.leaving && !o.leaving)) continue;
            const op = o.outer.position;
            const d1 = Math.hypot(ahead.x - op.x, ahead.z - op.z);
            if (d1 < TOUCH && d1 < Math.hypot(pos.x - op.x, pos.z - op.z)) { ds = 0; c.v = 0; break; }
          }
        }
        c.s += ds; c.walkS += ds;
        pointAt(c, c.s, pos);
        if (ds > 1e-6) {
          const a = c.pts[seg - 1], b = c.pts[seg];
          c.face = Math.atan2(b.x - a.x, b.z - a.z);
          moving = true;
        } else if (left > 1e-4) soonest(now + 0.3);
      }
      function arrive(c, now) {
        c.fadeIn = false; c.v = 0;
        if (c.goal === "browse") { c.state = "browse"; c.until = now + rnd(1.8, 4.2); c.face = faceTo(c.outer.position, TABLE); }
        else if (c.goal === "slot") {
          c.state = "queue";
          c.face = faceTo(c.outer.position, PH.home);
          if (c.at === 0) c.readyAt = now + rnd(0.4, 1.2);
        } else retire(c);
      }
      // a figure's turn, step, reach and bag ease to where they are going
      function ease1(x, to, dt, rate) {
        const y = x + (to - x) * (1 - Math.exp(-dt * rate));
        if (Math.abs(to - y) < 1e-3) return to;
        moving = true;
        return y;
      }
      function settle(c, dt) {
        const d = Math.atan2(Math.sin(c.face - c.yaw), Math.cos(c.face - c.yaw));
        if (Math.abs(d) > 1e-3) { c.yaw += d * (1 - Math.exp(-dt * 7)); moving = true; } else c.yaw = c.face;
        c.m = ease1(c.m, c.state === "walk" ? Math.min(1, c.v / (0.5 * c.speed)) : 0, dt, 10);
        c.reach = ease1(c.reach, c.reachT, dt, 8);
        if (c.bagOn && c.bag < 1) { c.bag = Math.min(1, c.bag + dt / 0.3); moving = true; }
        if (!c.dying && c.alpha < 1) { c.alpha = Math.min(1, c.alpha + dt / 0.45); moving = true; }
      }
      function tick(c, dt, now) {
        if (c.state === "off") return;
        if (c.state === "script") { settle(c, dt); return; }
        if (c.dying) {
          c.alpha -= dt / 0.4;
          moving = true;
          if (c.alpha <= 0) retire(c);
          return;
        }
        if (c.state === "walk") {
          if (c.goal === "slot") { const k = line.indexOf(c); if (k >= 0 && k < c.at) retarget(c, k); }
          walk(c, dt, now);
          if (c.s >= c.plen - 1e-4) arrive(c, now);
        }
        else if (c.state === "browse") { if (now >= c.until) join(c, NOOK); else soonest(c.until); }
        else if (c.state === "queue") {
          const k = line.indexOf(c);
          if (k < c.at) { begin(c); add(c, SLOT[k]); c.at = k; go(c, "slot"); }
          else if (k === 0 && !serve.c) { if (now >= c.readyAt) { serve.c = c; serve.t0 = now; serve.a = rnd(0.6, 1.5); serve.shelf = R() < 0.7 ? rnd(0.9, 2.0) : 0; c.state = "serve"; } else soonest(c.readyAt); }
        }
        if (c.state !== "off") settle(c, dt);
      }

      // ── the pharmacist: talk, maybe fetch from the shelves behind, hand the bag over
      function staff(now, dt) {
        let tt = 0, tr = 0;
        const c = serve.c;
        if (c) {
          const e = now - serve.t0, a = serve.a, h = serve.shelf, b = a + (h ? h + 1.1 : 0);
          if (h && e >= a && e < a + 0.55 + h) tt = 1;
          if (e >= b && e < b + 0.6) tr = 1;
          c.reachT = e >= b + 0.1 && e < b + 0.7 ? 1 : 0;
          if (e >= b + 0.35) c.bagOn = true;
          if (e >= b + 1.05) { leave(c); serve.c = null; ph.next = Math.max(ph.next, now + rnd(2.5, 6)); }
          else {
            // the next change of phase
            TH[0] = a; TH[1] = a + 0.55 + h; TH[2] = b; TH[3] = b + 0.1; TH[4] = b + 0.35; TH[5] = b + 0.6; TH[6] = b + 0.7; TH[7] = b + 1.05;
            for (let i = 0; i < 8; i++) if (TH[i] > e) { soonest(serve.t0 + TH[i]); break; }
          }
        } else if (on && !winding) {
          // nobody at the counter: now and then a look at the shelves
          const waiting = line.length > 0 && line[0].state === "queue" && line[0].at === 0;
          if (!waiting && now >= ph.next && now >= ph.tripEnd) { ph.tripEnd = now + rnd(1.2, 2.6); ph.next = ph.tripEnd + rnd(5, 12); }
          if (!waiting && now < ph.tripEnd) tt = 1;
          soonest(now < ph.tripEnd ? ph.tripEnd : ph.next);
        }
        ph.turn = ease1(ph.turn, tt, dt, 4.5);
        ph.step = ease1(ph.step, tt, dt, 4.5);
        ph.reach = ease1(ph.reach, tr, dt, 9);
      }

      function update(dt) {
        const now = performance.now() / 1000;
        moving = false; soon = Infinity;
        const want = !REDUCED && revealed && Tgoal >= CH_CLOSE && Tcur >= CH_CLOSE && level < LEVELS.length - 1;
        if (want !== on) { on = want; if (on) start(now); else stop(); }
        winding = now - lastInput > IDLE;
        if (on && !winding) {
          if (nextArrival === Infinity) nextArrival = now + gap();
          if (now >= nextArrival) {
            let inside = 0, free = null;
            for (const c of crowd) {
              if (c.state === "off") free ??= c;
              else if (!(c.leaving && c.outer.position.z > 2.6)) inside++;
            }
            if (inside < 3 && free) { spawn(free); nextArrival = now + gap(); }
            else nextArrival = now + rnd(0.8, 2);
          }
          soonest(nextArrival);
        } else nextArrival = Infinity;
        staff(now, dt);
        for (const c of crowd) tick(c, dt, now);
      }

      // ── drawing the people at story time T
      function showAlpha(c, a) {
        c.outer.visible = c.outer.visible && a > 0.004;
        if (a === c.shownA) return;
        c.shownA = a;
        const M = c.mats;
        M.body.opacity = M.limb.opacity = M.bag.opacity = M.line.opacity = a;
        M.hull.uniforms.opacity.value = a;
        const cast = a > 0.5;
        if (cast !== c.cast) { c.cast = cast; for (const m of c.meshes) m.castShadow = cast; }
      }
      function pose(T) {
        const P0 = PH;
        walkPerson(P0, sst(T, CH_DAWN + 0.05, CH_DAWN + 0.4));
        if (P0.outer.visible && ph.turn + ph.step + ph.reach > 0) {
          P0.outer.rotation.y += ph.turn * TURN;
          P0.outer.position.z -= ph.step * 0.3;
          // one step back to the shelves and one forward again
          const sw = Math.sin(Math.PI * ph.step) * 0.32;
          P0.legs[0].rotation.x = sw; P0.legs[1].rotation.x = -sw;
          P0.arms[0].rotation.x = -sw * 0.6; P0.arms[1].rotation.x = sw * 0.6 - ph.reach * 1.2;
        }
        for (const c of crowd) {
          if (c.state === "off") { c.outer.visible = false; continue; }
          if (c.state === "script") {
            walkPerson(c, sst(T, CH_DAWN + 0.2, CH_DAWN + 0.7));
            c.pivot.scale.setScalar(PS);
            c.bags[0].visible = c.bags[1].visible = false;
            showAlpha(c, c.alpha);
            continue;
          }
          const a = c.alpha * (c.fadeIn ? Math.min(1, c.walkS / 0.8) : 1) * (c.fadeOut ? Math.min(1, (c.plen - c.s) / 0.9) : 1);
          c.outer.visible = true;
          c.outer.rotation.y = c.yaw;
          const k = PS * c.h, phs = (Math.PI * c.walkS) / (0.34 * k), sw = Math.sin(phs) * 0.55 * c.m;
          c.legs[0].rotation.x = sw; c.legs[1].rotation.x = -sw;
          c.arms[0].rotation.x = -sw * 0.8; c.arms[1].rotation.x = sw * 0.8;
          c.arms[c.side].rotation.x -= c.reach * 1.05;
          c.pivot.scale.setScalar(k);
          c.pivot.position.y = Math.abs(Math.cos(phs)) * 0.025 * k * c.m;
          c.pivot.rotation.x = 0.07 * c.m;
          const bag = c.bags[c.side];
          bag.visible = c.bag > 0;
          bag.scale.setScalar(Math.max(1e-3, easeIO(c.bag)));
          c.bags[1 - c.side].visible = false;
          showAlpha(c, a);
        }
      }

      // the visitor: any input keeps the day going (and starts it again after a lull); a
      // field taking focus pushes the next arrival back
      const ring = () => { timer = 0; wake(); };
      const touched = () => { lastInput = performance.now() / 1000; if (on && winding) wake(); };
      for (const e of ["scroll", "pointermove", "pointerdown", "wheel", "touchstart", "keydown"]) addEventListener(e, touched, { passive: true });
      document.querySelector(".contact-form")?.addEventListener("focusin", () => {
        if (!on || nextArrival === Infinity) return;
        nextArrival = Math.max(nextArrival, performance.now() / 1000 + rnd(12, 20));
      });
      return {
        update, pose,
        get moving() { return moving; },
        // the loop is going to rest: wake it for the next moment, if there is one
        alarm() { clearTimeout(timer); timer = soon < Infinity ? setTimeout(ring, Math.max(0, soon * 1000 - performance.now()) + 5) : 0; },
        disarm() { clearTimeout(timer); timer = 0; },
      };
    })();

    // ───────────────────────── one frame of the story at time T
    function renderAt(T, time, dt, px, py) {
      if (!POSTER) story.apply(T);
      placeCamera(T, time, px, py);
      applyLens();
      const k = lineScale * lineMul;
      for (const m of lineMats) if (m !== lineOrky) m.linewidth = m.userData.base * k;
      hullMat.uniforms.width.value = 1.25 * k;
      updateRecede(dt);
      const groupT = groupTimes(T);
      // daylight: the glow drains out of the room and the ink comes into the lines as the sky
      // lifts, from Orky's arrival to the shop opening, with no moment where it switches
      dayNow = sst(story.skyState(T).day, 0.2, 0.92);
      updateOrky(T, time, groupT, dt);
      updateItems(T, time, dt, groupT);
      updateMarks(T, time, groupT);
      updateLights(T, time, groupT);
      camera.updateMatrixWorld();
      orkySun();

      // Orky's edge weight: about 1.6% of its on-screen height
      const od = camera.position.distanceTo(orky.group.position);
      const orkyPx = ((2 * 0.27 * zoom) / (2 * od * tanV)) * vh;
      lineOrky.linewidth = Math.max(1.1, orkyPx * 0.016) * lineMul;

      draw();
      words.update?.(T);
    }

    // ───────────────────────── post: bloom on the emitters only (they are the only values
    // above 1). On the wide layout only (the phone stills are made without it) and at the
    // higher quality levels; a step down fades it out rather than cutting it.
    const bloomQ = params.get("bloom");
    let composer = null, bloomPass = null, bloomK = 0;
    if (bloomQ !== "0") {
      const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
      composer = new EffectComposer(renderer, rt);
      composer.addPass(new RenderPass(scene, camera));
      bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.32, 0.12, 1.0);
      composer.addPass(bloomPass);
      composer.addPass(new OutputPass());
    }

    // ───────────────────────── quality: the pixel ratio (never above the one the stills are
    // made at), the shadow map's size, how often the shadows are redrawn, and the glow. It
    // starts where the graphics card says it can hold (see startLevel) and is only ever
    // stepped down, by measurement.
    const LEVELS = [
      { pr: 2, shadow: 2048, bloom: true, every: 1 },
      { pr: 1.5, shadow: 2048, bloom: true, every: 1 },
      { pr: 1, shadow: 2048, bloom: false, every: 1 },
      { pr: 1, shadow: 1024, bloom: false, every: 2 },
      { pr: 0.75, shadow: 1024, bloom: false, every: 3 },
    ];
    // An old integrated card or a low-end mobile one starts a step down (a lower pixel
    // ratio); every other card at the top, which is what the stills are made at. The
    // renderer string is the one the probe and the context report.
    const startLevel = (g) => (/intel.*\bhd graphics|uhd graphics [56]\d\d|mali-(t|g[57]\d\b)|adreno\D*[3-5]\d\d\b|powervr/i.test(g) ? 1 : 0);
    let level = POSTER ? 0 : startLevel(gpu), frameNo = 0;
    const levelOf = (i) => {
      const l = LEVELS[i];
      return { pr: Math.min(story.pixelRatio(), l.pr), shadow: l.shadow, bloom: !narrow && l.bloom, every: l.every };
    };
    const bloomWanted = () => !!composer && (bloomQ !== null || levelOf(level).bloom);
    // the next level down that changes anything on this screen, or -1
    function lower() {
      const k = JSON.stringify(levelOf(level));
      for (let i = level + 1; i < LEVELS.length; i++) if (JSON.stringify(levelOf(i)) !== k) return i;
      return -1;
    }
    function setLevel(i) {
      level = i;
      resize();
    }

    // The sky pass covers every pixel, so the clear colour never shows. Bloom only matters
    // while things glow, and fades out with the night.
    function draw() {
      if (frameNo % levelOf(level).every === 0) renderer.shadowMap.needsUpdate = true;
      // (the very first frame, out of sight, draws without the glow: shadows and scene
      // first, the glow's first use in the next frame)
      if (bloomK > 0.002 && dayNow < 0.98 && (revealed || warmN > 0 || POSTER)) { bloomPass.strength = 0.32 * (1 - dayNow) * bloomK; composer.render(); }
      else renderer.render(scene, camera);
      story.frames += 1;
    }

    // Before it shows, the scene draws two frames out of sight: the first draws the shadows
    // and the scene, the second the glow for the first time. Then it takes over.
    let warmN = 0;
    const median = (a) => [...a].sort((x, y) => x - y)[a.length >> 1];
    // Once live, over every second or so of drawing, the typical frame (the median, so one
    // hitch is not a slow machine): below 40 frames a second, one level down, applied
    // before the next frame is drawn. At the lowest level, below 24, the plain page takes
    // over if the visitor is still on the first screen (where it is the same picture);
    // further down the story stays at that level.
    let mon = [], monSum = 0, leftTop = false, nextLevel = -1;
    function monitor(raw) {
      if (document.hidden || raw <= 0) return;
      if (scrollY > 8) leftTop = true;
      mon.push(raw);
      monSum += raw;
      if (monSum < 1.2) return;
      const m = median(mon);
      mon = [];
      monSum = 0;
      if (m <= 1 / 40) return;
      const i = lower();
      if (i >= 0) nextLevel = i;
      else if (m > 1 / 24 && !leftTop && Tcur < 0.001) story.goPlain(true);
    }

    // ───────────────────────── drawing only when the picture changes
    // The loop runs while anything moves: the scroll's story time catching up, the ending,
    // the loose things floating (from the mess on), Orky, a drag or a push settling, the
    // pointer's parallax, the cross coming on, a step of the glow, someone in the shop. On
    // the first screens (before the mess drops in) and on the last, once all of that is at
    // rest, the picture is still and the loop stops; scroll, pointer, touch and resize wake
    // it, and so does the day's next moment.
    let looping = false, stillN = 0;
    const ITEMS_FROM = Math.min(...items.map((it) => it.th));
    function still(time) {
      if (Tcur !== Tgoal || !(Tcur < ITEMS_FROM || Tcur >= CH_CLOSE)) return false;
      if (Math.abs(ptrTX - ptrX) > 1e-3 || Math.abs(ptrTY - ptrY) > 1e-3) return false;
      if (time < 5 && Math.abs(ptrX) + Math.abs(ptrY) > 1e-3) return false; // the parallax easing in
      if (!crossSettled() || nextLevel >= 0 || bloomK !== (bloomWanted() ? 1 : 0)) return false;
      if (orky.group.visible && (blinkT >= 0 || Math.abs(1 - orkyRest) > 1e-3)) return false;
      if (rec.some((r, g) => Math.abs(r - (story.active >= CH_BEAT && story.active < CH_BEAT + 4 && g !== story.active - CH_BEAT ? 1 : 0)) > 1e-3)) return false;
      return !play.busy?.();
    }
    function wake() {
      if (looping || !running || !revealed || !isStory()) return;
      shop.disarm();
      looping = true;
      first = true;
      stillN = 0;
      renderer.setAnimationLoop(frame);
    }
    function sleep() {
      looping = false;
      renderer.setAnimationLoop(null);
    }

    function frame(now) {
      const raw = first ? 0 : (now - last) / 1000;
      const dt = Math.min(0.05, raw);
      first = false;
      last = now;
      frameNo += 1;
      if (!REDUCED) clock += dt;
      const time = clock;
      const pe = REDUCED ? 0 : 1 - Math.exp(-dt * 4);
      ptrX += (ptrTX - ptrX) * pe;
      ptrY += (ptrTY - ptrY) * pe;

      if (nextLevel >= 0) {
        setLevel(nextLevel);
        nextLevel = -1;
      }
      const Tt = story.storyT(scrollY);
      // The ending plays by itself. Once the scroll reaches the point where the camera starts
      // to pull back from the last beat, the rest (the pull-back, then the pharmacist and the
      // first customer walking in) runs on the clock, with the contact form already up.
      // Scrolling back above that point hands the story back to the scroll.
      const END_FROM = CH_BEAT + 3.5;
      const ending = Tt >= END_FROM - 1e-3;
      Tgoal = ending ? CH_CLOSE : Tt;
      if (REDUCED || !revealed) Tcur = Tgoal;
      else if (ending && Tcur >= END_FROM - 0.01) Tcur = Math.min(CH_CLOSE, Tcur + dt * (Tcur < CH_DAWN ? 0.6 : 0.3));
      else {
        const to = ending ? END_FROM : Tt;
        Tcur += (to - Tcur) * (1 - Math.exp(-dt * 5));
        if (Math.abs(to - Tcur) < 1e-4) Tcur = to;
      }
      const bw = bloomWanted() ? 1 : 0;
      bloomK = !revealed || Math.abs(bw - bloomK) < 0.01 ? bw : bloomK + (bw - bloomK) * (1 - Math.exp(-dt * 3));
      play.update?.(dt);
      shop.update(dt);
      renderAt(Tcur, time, dt, ptrX, ptrY);
      if (revealed) {
        monitor(raw);
        // two still frames in a row, then rest (until the day's next moment, if any)
        if (!still(time) || shop.moving) stillN = 0;
        else if (++stillN >= 2) { sleep(); shop.alarm(); }
        return;
      }
      warmN += 1;
      if (warmN < 2 || !isStory()) return;
      // The takeover. On the first screen the canvas is the still (with the cross off), so
      // it simply replaces it (the still goes a moment later, under it), and the cross comes
      // on as it shows. Anywhere else the page is already in that moment's tone and the
      // scene fades in over it, already settled. Either way the page may scroll from here.
      revealed = true;
      looping = true;
      crossAt = clock + 0.12;
      story.driven = true;
      root.classList.add("live");
      if (scrollY >= 2 || Tt >= 0.001) root.classList.add("fade");
      story.unlock();
    }

    // ───────────────────────── still capture (?poster=desktop|phone&dpr=&t=)
    // The hero frame at story time t (0 the night, 9 the morning), drawn into the hero box
    // at dpr device pixels per CSS pixel, without stars, with the sky made transparent.
    function capturePoster() {
      const layout = narrow ? "phone" : "desktop";
      if (POSTER !== layout) {
        window.__poster = { error: `asked for the ${POSTER} still but the page is in its ${layout} layout` };
        return;
      }
      const dpr = Number(params.get("dpr")) || (layout === "phone" ? 1.5 : 2);
      const T = Number(params.get("t")) || 0;
      const q = Number(params.get("q")) || 0.9;
      const img = posterImg();
      const a0 = (R.u1 - R.u0) / (R.v1 - R.v0);
      img.style.setProperty("--a", a0.toFixed(5));
      img.style.setProperty("--wmax", "100vw");
      const rect = img.getBoundingClientRect();
      // whole grid cells (1 CSS px desktop, 2 phone, as in the CSS) so the still maps 1:1
      // onto the canvas's pixels
      const cell = dpr * (layout === "phone" ? 2 : 1);
      const W = Math.round(rect.width * dpr), H = Math.round(W / a0 / cell) * cell;
      const vc = (R.v0 + R.v1) / 2, vr = ((R.u1 - R.u0) * H) / W;
      const box = { u0: R.u0, u1: R.u1, v0: vc - vr / 2, v1: vc + vr / 2 };
      const s = W / (box.u1 - box.u0);
      const sh = levelOf(0).shadow;
      S.mapSize.set(sh, sh);
      renderer.setPixelRatio(1);
      renderer.setSize(W, H, false);
      if (composer) { composer.setPixelRatio(1); composer.setSize(W, H); }
      bloomK = bloomWanted() ? 1 : 0;
      vw = W; vh = H;
      camera.aspect = W / H;
      setResolution(W, H);
      Object.assign(hero, { zoom: (2 * s * tanV) / H, zoomY: (2 * s * tanV) / H, lx: (2 * (W / 2 - (s * (box.u0 + box.u1)) / 2)) / W - 1, ly: 1 - (2 * (H / 2 + s * vc)) / H, ls: 1 });
      lineMul = dpr;
      renderAt(T, 0, 0, 0, 0);
      const c2 = document.createElement("canvas");
      c2.width = W; c2.height = H;
      const g = c2.getContext("2d", { willReadFrequently: true });
      g.drawImage(renderer.domElement, 0, 0);
      const px = g.getImageData(0, 0, W, H), d = px.data;
      const sky = story.RAMP[T < 4.5 ? 0 : story.RAMP.length - 1][1];
      for (let i = 0; i < d.length; i += 4) {
        if (Math.abs(d[i] - sky[0]) <= 2 && Math.abs(d[i + 1] - sky[1]) <= 2 && Math.abs(d[i + 2] - sky[2]) <= 2) d[i + 3] = 0;
      }
      g.putImageData(px, 0, 0);
      const f = (x) => x.toFixed(6);
      window.__poster = {
        layout, dpr, t: T, uri: c2.toDataURL("image/webp", q), width: W, height: H,
        r: [box.u0, box.v0, box.u1, box.v1].map(f).join(","), s: (rect.width / (box.u1 - box.u0)).toFixed(4),
        a: (W / H).toFixed(5), wmax: rect.width,
      };
    }

    if (POSTER) {
      capturePoster();
      return;
    }

    addEventListener("resize", () => { resize(); wake(); });
    let running = !document.hidden;
    document.addEventListener("visibilitychange", () => {
      if (!isStory()) return;
      running = !document.hidden;
      if (!running) { sleep(); shop.disarm(); }
      else if (revealed) wake();
      else renderer.setAnimationLoop(frame);
    });
    for (const e of ["scroll", "pointermove", "pointerdown", "pointerup", "touchstart", "touchmove", "wheel"]) addEventListener(e, wake, { passive: true });
    addEventListener("orkava:plain", () => { running = false; }, { once: true });

    // Size everything, then compile every material (in parallel where the driver can)
    // before the first frame; the two frames before the takeover do the rest out of sight.
    renderer.shadowMap.autoUpdate = false;
    resize();
    bloomK = bloomWanted() ? 1 : 0;
    placeCamera(story.storyT(scrollY), 0, 0, 0);
    applyLens();
    await pause();
    // Everything, including what only shows later in the story (compile skips the hidden),
    // for each kind of target it draws into: the screen, and with the glow the composer's
    // half-float target, where every material is a different program. The programs are
    // all requested at once, so the driver links them in parallel.
    const hidden = [];
    scene.traverse((o) => { if (!o.visible) { hidden.push(o); o.visible = true; } });
    const compiling = [renderer.compileAsync(scene, camera)];
    if (composer) {
      composer.setSize(vw, vh);
      // the passes draw a full-screen triangle with a position and a uv, no normal: a
      // stand-in with the same attributes compiles the same programs
      const quad = new THREE.PlaneGeometry(2, 2).deleteAttribute("normal");
      const passScene = (mats) => {
        const sc = new THREE.Scene();
        for (const m of mats) if (m) { const q = new THREE.Mesh(quad, m); q.frustumCulled = false; sc.add(q); }
        return sc;
      };
      // the output pass sets its colour-space define on its first render; set it now (as
      // that render would, for this renderer: sRGB out, no tone mapping) so the program
      // compiled here is the one it uses
      const out = composer.passes.find((p) => p instanceof OutputPass);
      out.material.defines = { SRGB_TRANSFER: "" };
      Object.assign(out, { _outputColorSpace: renderer.outputColorSpace, _toneMapping: renderer.toneMapping });
      compiling.push(renderer.compileAsync(passScene([out.material]), camera));
      renderer.setRenderTarget(composer.renderTarget1);
      compiling.push(renderer.compileAsync(scene, camera));
      compiling.push(renderer.compileAsync(passScene([bloomPass.materialHighPassFilter, ...bloomPass.separableBlurMaterials, bloomPass.compositeMaterial, bloomPass.blendMaterial, composer.copyPass?.material]), camera));
      renderer.setRenderTarget(null);
    }
    for (const o of hidden) o.visible = false;
    await Promise.all(compiling.map((c) => c.catch(() => {})));
    if (running && isStory()) renderer.setAnimationLoop(frame);
  }

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  // Row of product boxes along x on a shelf.
  function fillRow(x0, x1, put, depth, hMax) {
    const r = fillRow.rng || (fillRow.rng = mulberry32(11));
    let x = x0 + 0.015;
    while (x < x1 - 0.05) {
      const w = 0.06 + r() * 0.08;
      if (x + w > x1 - 0.01) break;
      if (r() < 0.1) { x += w * 0.9; continue; }
      const h = 0.1 + r() * (hMax - 0.1);
      const d = depth * (0.6 + r() * 0.35);
      put(x + w / 2, w, h, d, r() < 0.28 ? "alt" : "card");
      x += w + 0.006 + r() * 0.012;
    }
  }
  // Row of storage cartons along z.
  function fillRowZ(z0, z1, put, hMax) {
    const r = fillRowZ.rng || (fillRowZ.rng = mulberry32(5));
    let z = z0 + 0.02;
    while (z < z1 - 0.1) {
      const w = 0.22 + r() * 0.16;
      if (z + w > z1 - 0.01) break;
      if (r() < 0.15) { z += w * 0.7; continue; }
      put(z + w / 2, w, 0.16 + r() * (hMax - 0.2), 0.3 + r() * 0.08, r() < 0.35 ? "alt" : "card");
      z += w + 0.02 + r() * 0.03;
    }
  }
})();
