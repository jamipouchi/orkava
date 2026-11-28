(()=>{var Hf=0,Gu=1,Gf=2;var Cs=1,Vf=2,Va=3,ka=0,En=1,fi=2,gr=0,dl=1,vr=2,Vu=3,ku=4,kf=5;var Wa=100,Wf=101,Xf=102,jf=103,qf=104,Yf=200,Zf=201,Jf=202,$f=203,Kf=204,Qf=205,tm=206,em=207,nm=208,im=209,rm=210,sm=211,am=212,om=213,lm=214,Wu=0,Xu=1,ju=2,nh=3,qu=4,Yu=5,Zu=6,Ju=7,cm=0,hm=1,um=2,mi=0,pl=1,fl=2,ml=3,gl=4,vl=5,_l=6,yl=7;var xl=301,Xa=302,ih=303,rh=304,dm=1e3,sh=1001,pm=1002,ts=1003,fm=1004;var Ml=1005;var gi=1006,ah=1007;var es=1008;var Ai=1009,mm=1010,gm=1011,Sl=1012,$u=1013,ns=1014,_r=1015,_n=1016,Ku=1017,Qu=1018,Ps=1020,vm=35902,_m=35899,ym=1021,xm=1022,yr=1023,ja=1026,is=1027,Mm=1028,td=1029,Is=1030,ed=1031;var nd=1033,oh=33776,lh=33777,ch=33778,hh=33779,id=35840,rd=35841,sd=35842,ad=35843,od=36196,ld=37492,cd=37496,hd=37488,ud=37489,uh=37490,dd=37491,pd=37808,fd=37809,md=37810,gd=37811,vd=37812,_d=37813,yd=37814,xd=37815,Md=37816,Sd=37817,bd=37818,Td=37819,Ed=37820,wd=37821,Ad=36492,Rd=36494,Cd=36495,Pd=36283,Id=36284,dh=36285,Ld=36286;var Nd=0,Sm=1,Ls="",Ns="srgb",ph="srgb-linear",Dd="linear",Ie="srgb";var bm=512,Tm=513,Em=514,Ud=515,wm=516,Am=517,Od=518,Fd=519;var Bd=35048;var zd="300 es",Hd=2e3;function z0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function H0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Fo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rm(){let r=Fo("canvas");return r.style.display="block",r}var tf={},ba=null;function Bo(...r){let t="THREE."+r.shift();ba?ba("log",t,...r):console.log(t,...r)}function Cm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Qt(...r){let t="THREE."+(r=Cm(r)).shift();if(ba)ba("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function te(...r){let t="THREE."+(r=Cm(r)).shift();if(ba)ba("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function No(...r){let t=r.join(" ");t in tf||(tf[t]=!0,Qt(...r))}function Pm(r,t,e){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}},e)})}var Im={[Wu]:0,[ju]:6,[qu]:4,[nh]:5,[Xu]:1,[Zu]:2,[Ju]:7,[Yu]:3},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n!==void 0&&n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=1234567,Ma=Math.PI/180,Ta=180/Math.PI;function xr(){let r=4294967295*Math.random()|0,t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(In[255&r]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[255&t]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[63&e|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[255&n]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ae(r,t,e){return Math.max(t,Math.min(e,r))}function Gd(r,t){return(r%t+t)%t}function G0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function V0(r,t,e){return r!==t?(e-r)/(t-r):0}function Do(r,t,e){return(1-e)*r+e*t}function k0(r,t,e,n){return Do(r,t,1-Math.exp(-e*n))}function W0(r,t=1){return t-Math.abs(Gd(r,2*t)-t)}function X0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t))*r*(3-2*r)}function j0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t))*r*r*(r*(6*r-15)+10)}function q0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Y0(r,t){return r+Math.random()*(t-r)}function Z0(r){return r*(.5-Math.random())}function J0(r){r!==void 0&&(ef=r);let t=ef+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}function $0(r){return r*Ma}function K0(r){return r*Ta}function Q0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function tv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ev(r,t,e,n,i){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),d=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*d,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*d,o*c);break;case"ZYZ":r.set(l*d,l*p,o*h,o*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kd(r,t){if(t.constructor===Float32Array)return r;let e=fh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Wd(r,t){if(t.constructor===Float32Array)return r;let e=fh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var qa={DEG2RAD:Ma,RAD2DEG:Ta,generateUUID:xr,clamp:ae,euclideanModulo:Gd,mapLinear:G0,inverseLerp:V0,lerp:Do,damp:k0,pingpong:W0,smoothstep:X0,smootherstep:j0,randInt:q0,randFloat:Y0,randFloatSpread:Z0,seededRandom:J0,degToRad:$0,radToDeg:K0,isPowerOfTwo:Q0,ceilPowerOfTwo:tv,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:ev,normalize:Wd,denormalize:kd},Zd=class Zd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zd.prototype.isVector2=!0;var lt=Zd,je=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[a+0],p=s[a+1],d=s[a+2],_=s[a+3];if(u!==_||l!==f||c!==p||h!==d){let v=l*f+c*p+h*d+u*_;v<0&&(f=-f,p=-p,d=-d,_=-_,v=-v);let m=1-o;if(v<.9995){let x=Math.acos(v),y=Math.sin(x);m=Math.sin(m*x)/y,l=l*m+f*(o=Math.sin(o*x)/y),c=c*m+p*o,h=h*m+d*o,u=u*m+_*o}else{l=l*m+f*o,c=c*m+p*o,h=h*m+d*o,u=u*m+_*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],p=s[a+2],d=s[a+3];return t[e]=o*d+h*u+l*p-c*f,t[e+1]=l*d+h*f+c*u-o*p,t[e+2]=c*d+h*p+o*f-l*u,t[e+3]=h*d-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),p=l(i/2),d=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u-f*p*d;break;case"YXZ":this._x=f*h*u+c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u+f*p*d;break;case"ZXY":this._x=f*h*u-c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u-f*p*d;break;case"ZYX":this._x=f*h*u-c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u+f*p*d;break;case"YZX":this._x=f*h*u+c*p*d,this._y=c*p*u+f*h*d,this._z=c*h*d-f*p*u,this._w=c*h*u-f*p*d;break;case"XZY":this._x=f*h*u-c*p*d,this._y=c*p*u-f*h*d,this._z=c*h*d+f*p*u,this._w=c*h*u+f*p*d;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jd=class Jd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return au.copy(this).projectOnVector(t),this.sub(au)}reflect(t){return this.sub(au.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jd.prototype.isVector3=!0;var w=Jd,au=new w,nf=new je,$d=class $d{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],d=n[8],_=i[0],v=i[3],m=i[6],x=i[1],y=i[4],C=i[7],E=i[2],b=i[5],P=i[8];return s[0]=a*_+o*x+l*E,s[3]=a*v+o*y+l*b,s[6]=a*m+o*C+l*P,s[1]=c*_+h*x+u*E,s[4]=c*v+h*y+u*b,s[7]=c*m+h*C+u*P,s[2]=f*_+p*x+d*E,s[5]=f*v+p*y+d*b,s[8]=f*m+p*C+d*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,d=e*u+n*f+i*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return No("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(t,e)),this}rotate(t){return No("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-t)),this}translate(t,e){return No("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$d.prototype.isMatrix3=!0;var re=$d,ou=new re,rf=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sf=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nv(){let r={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer==="srgb"&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(i.r=Sa(i.r),i.g=Sa(i.g),i.b=Sa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?"linear":this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ph]:{primaries:t,whitePoint:n,transfer:"linear",toXYZ:rf,fromXYZ:sf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},[Ns]:{primaries:t,whitePoint:n,transfer:"srgb",toXYZ:rf,fromXYZ:sf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),r}var ye=nv();function dr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Sa(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var ia,Tc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ia===void 0&&(ia=Fo("canvas")),ia.width=t.width,ia.height=t.height;let i=ia.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ia}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*dr(s[a]/255);return n.putImageData(i,0,0),e}if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(255*dr(e[n]/255)):e[n]=dr(e[n]);return{data:e,width:t.width,height:t.height}}return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},iv=0,Ea=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(lu(i[a].image)):s.push(lu(i[a]))}else s=lu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function lu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var rv=0,cu=new w,Gn=class r extends Xi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=xr(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n:Qt(`Texture.setValues(): property '${e}' does not exist.`)}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null,Gn.DEFAULT_MAPPING=300,Gn.DEFAULT_ANISOTROPY=1;var Kd=class Kd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],d=l[9],_=l[2],v=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(d-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(d+v)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,C=(p+1)/2,E=(m+1)/2,b=(h+f)/4,P=(u+_)/4,B=(d+v)/4;return y>C&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=P/n):C>E?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=b/i,s=B/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=P/s,i=B/s),this.set(n,i,s,e),this}let x=Math.sqrt((v-d)*(v-d)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(v-d)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kd.prototype.isVector4=!0;var be=Kd,Ec=class extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Gn({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ea(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zo=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends Gn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var eh=class eh{constructor(t,e,n,i,s,a,o,l,c,h,u,f,p,d,_,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,p,d,_,v)}set(t,e,n,i,s,a,o,l,c,h,u,f,p,d,_,v){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=d,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ra.setFromMatrixColumn(t,0).length(),s=1/ra.setFromMatrixColumn(t,1).length(),a=1/ra.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*h,p=a*u,d=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+d*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=d+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,d=c*h,_=c*u;e[0]=f+_*o,e[4]=d*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-d,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,d=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=d+p*o,e[1]=p+d*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,d=o*h,_=o*u;e[0]=l*h,e[4]=d*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-d,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,d=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=d*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+d,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,p=a*c,d=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-d,e[2]=d*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sv,t,av)}lookAt(t,e,n){let i=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Fr.crossVectors(n,Kn),Fr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Fr.crossVectors(n,Kn)),Fr.normalize(),Yl.crossVectors(Kn,Fr),i[0]=Fr.x,i[4]=Yl.x,i[8]=Kn.x,i[1]=Fr.y,i[5]=Yl.y,i[9]=Kn.y,i[2]=Fr.z,i[6]=Yl.z,i[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],d=n[2],_=n[6],v=n[10],m=n[14],x=n[3],y=n[7],C=n[11],E=n[15],b=i[0],P=i[4],B=i[8],H=i[12],D=i[1],Q=i[5],G=i[9],z=i[13],Z=i[2],ut=i[6],nt=i[10],W=i[14],et=i[3],vt=i[7],Nt=i[11],Ft=i[15];return s[0]=a*b+o*D+l*Z+c*et,s[4]=a*P+o*Q+l*ut+c*vt,s[8]=a*B+o*G+l*nt+c*Nt,s[12]=a*H+o*z+l*W+c*Ft,s[1]=h*b+u*D+f*Z+p*et,s[5]=h*P+u*Q+f*ut+p*vt,s[9]=h*B+u*G+f*nt+p*Nt,s[13]=h*H+u*z+f*W+p*Ft,s[2]=d*b+_*D+v*Z+m*et,s[6]=d*P+_*Q+v*ut+m*vt,s[10]=d*B+_*G+v*nt+m*Nt,s[14]=d*H+_*z+v*W+m*Ft,s[3]=x*b+y*D+C*Z+E*et,s[7]=x*P+y*Q+C*ut+E*vt,s[11]=x*B+y*G+C*nt+E*Nt,s[15]=x*H+y*z+C*W+E*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],d=t[3],_=t[7],v=t[11],m=t[15],x=l*p-c*f,y=o*p-c*u,C=o*f-l*u,E=a*p-c*h,b=a*f-l*h,P=a*u-o*h;return e*(_*x-v*y+m*C)-n*(d*x-v*E+m*b)+i*(d*y-_*E+m*P)-s*(d*C-_*b+v*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],d=t[12],_=t[13],v=t[14],m=t[15],x=e*o-n*a,y=e*l-i*a,C=e*c-s*a,E=n*l-i*o,b=n*c-s*o,P=i*c-s*l,B=h*_-u*d,H=h*v-f*d,D=h*m-p*d,Q=u*v-f*_,G=u*m-p*_,z=f*m-p*v,Z=x*z-y*G+C*Q+E*D-b*H+P*B;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ut=1/Z;return t[0]=(o*z-l*G+c*Q)*ut,t[1]=(i*G-n*z-s*Q)*ut,t[2]=(_*P-v*b+m*E)*ut,t[3]=(f*b-u*P-p*E)*ut,t[4]=(l*D-a*z-c*H)*ut,t[5]=(e*z-i*D+s*H)*ut,t[6]=(v*C-d*P-m*y)*ut,t[7]=(h*P-f*C+p*y)*ut,t[8]=(a*G-o*D+c*B)*ut,t[9]=(n*D-e*G-s*B)*ut,t[10]=(d*b-_*C+m*x)*ut,t[11]=(u*C-h*b-p*x)*ut,t[12]=(o*H-a*Q-l*B)*ut,t[13]=(e*Q-n*H+i*B)*ut,t[14]=(_*y-d*E-v*x)*ut,t[15]=(h*E-u*y+f*x)*ut,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,d=s*u,_=a*h,v=a*u,m=o*u,x=l*c,y=l*h,C=l*u,E=n.x,b=n.y,P=n.z;return i[0]=(1-(_+m))*E,i[1]=(p+C)*E,i[2]=(d-y)*E,i[3]=0,i[4]=(p-C)*b,i[5]=(1-(f+m))*b,i[6]=(v+x)*b,i[7]=0,i[8]=(d+y)*P,i[9]=(v-x)*P,i[10]=(1-(f+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=ra.set(i[0],i[1],i[2]).length(),o=ra.set(i[4],i[5],i[6]).length(),l=ra.set(i[8],i[9],i[10]).length();s<0&&(a=-a),bi.copy(this);let c=1/a,h=1/o,u=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i),d,_;if(l)d=s/(a-s),_=a*s/(a-s);else if(o===2e3)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==2001)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),_=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=2e3,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i),d,_;if(l)d=1/(a-s),_=a/(a-s);else if(o===2e3)d=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==2001)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);d=-1/(a-s),_=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};eh.prototype.isMatrix4=!0;var qt=eh,ra=new w,bi=new qt,sv=new w(0,0,0),av=new w(1,1,1),Fr=new w,Yl=new w,Kn=new w,af=new qt,of=new je,ei=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(af,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return of.setFromEuler(this),this.setFromQuaternion(of,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}},ov=0,lf=new w,sa=new je,or=new qt,Zl=new w,bo=new w,lv=new w,cv=new je,cf=new w(1,0,0),hf=new w(0,1,0),uf=new w(0,0,1),df={type:"added"},hv={type:"removed"},aa={type:"childadded",child:null},hu={type:"childremoved",child:null},hn=class r extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new w,e=new ei,n=new je,i=new w(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new re}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sa.setFromAxisAngle(t,e),this.quaternion.multiply(sa),this}rotateOnWorldAxis(t,e){return sa.setFromAxisAngle(t,e),this.quaternion.premultiply(sa),this}rotateX(t){return this.rotateOnAxis(cf,t)}rotateY(t){return this.rotateOnAxis(hf,t)}rotateZ(t){return this.rotateOnAxis(uf,t)}translateOnAxis(t,e){return lf.copy(t).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cf,t)}translateY(t){return this.translateOnAxis(hf,t)}translateZ(t){return this.translateOnAxis(uf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zl.copy(t):Zl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(bo,Zl,this.up):or.lookAt(Zl,bo,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),sa.setFromRotationMatrix(or),this.quaternion.premultiply(sa.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(df),aa.child=t,this.dispatchEvent(aa),aa.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hv),hu.child=t,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),or.multiply(t.parent.matrixWorld)),t.applyMatrix4(or),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(df),aa.child=t,this.dispatchEvent(aa),aa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),d=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new w(0,1,0),hn.DEFAULT_MATRIX_AUTO_UPDATE=!0,hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},uv={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let v=e.getJointPose(_,n),m=this._getHandJoint(c,_);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,d=.005;c.inputState.pinching&&f>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function uu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+6*(t-r)*(2/3-e):r}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=Gd(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=uu(a,s,t+1/3),this.g=uu(a,s,t),this.b=uu(a,s,t-1/3)}return ye.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){s!==void 0&&parseFloat(s)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Lm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ye.workingToColorSpace(Ln.copy(this),t),65536*Math.round(ae(255*Ln.r,0,255))+256*Math.round(ae(255*Ln.g,0,255))+Math.round(ae(255*Ln.b,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,s=Ln.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t="srgb"){ye.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,i=Ln.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(Br),this.setHSL(Br.h+t,Br.s+e,Br.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Br),t.getHSL(Jl);let n=Do(Br.h,Jl.h,e),i=Do(Br.s,Jl.s,e),s=Do(Br.l,Jl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new It;It.NAMES=Lm;var Ra=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new w,lr=new w,du=new w,cr=new w,oa=new w,la=new w,pf=new w,pu=new w,fu=new w,mu=new w,gu=new be,vu=new be,_u=new be,ki=class r{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ti.subVectors(t,e),i.cross(Ti);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ti.subVectors(i,e),lr.subVectors(n,e),du.subVectors(t,e);let a=Ti.dot(Ti),o=Ti.dot(lr),l=Ti.dot(du),c=lr.dot(lr),h=lr.dot(du),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,d=(a*h-o*l)*f;return s.set(1-p-d,d,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cr)!==null&&cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(a,cr.y),l.addScaledVector(o,cr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return gu.setScalar(0),vu.setScalar(0),_u.setScalar(0),gu.fromBufferAttribute(t,e),vu.fromBufferAttribute(t,n),_u.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(gu,s.x),a.addScaledVector(vu,s.y),a.addScaledVector(_u,s.z),a}static isFrontFacing(t,e,n,i){return Ti.subVectors(n,e),lr.subVectors(t,e),Ti.cross(lr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),.5*Ti.cross(lr).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;oa.subVectors(i,n),la.subVectors(s,n),pu.subVectors(t,n);let l=oa.dot(pu),c=la.dot(pu);if(l<=0&&c<=0)return e.copy(n);fu.subVectors(t,i);let h=oa.dot(fu),u=la.dot(fu);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(oa,a);mu.subVectors(t,s);let p=oa.dot(mu),d=la.dot(mu);if(d>=0&&p<=d)return e.copy(s);let _=p*c-l*d;if(_<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(la,o);let v=h*d-p*u;if(v<=0&&u-h>=0&&p-d>=0)return pf.subVectors(s,i),o=(u-h)/(u-h+(p-d)),e.copy(i).addScaledVector(pf,o);let m=1/(v+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(oa,a).addScaledVector(la,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$l.copy(n.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),Kl.subVectors(this.max,To),ca.subVectors(t.a,To),ha.subVectors(t.b,To),ua.subVectors(t.c,To),zr.subVectors(ha,ca),Hr.subVectors(ua,ha),xs.subVectors(ca,ua);let e=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-xs.z,xs.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,xs.z,0,-xs.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-xs.y,xs.x,0];return!!yu(e,ca,ha,ua,Kl)&&(e=[1,0,0,0,1,0,0,0,1],!!yu(e,ca,ha,ua,Kl)&&(Ql.crossVectors(zr,Hr),e=[Ql.x,Ql.y,Ql.z],yu(e,ca,ha,ua,Kl)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(Ei).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hr)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hr=[new w,new w,new w,new w,new w,new w,new w,new w],Ei=new w,$l=new Tn,ca=new w,ha=new w,ua=new w,zr=new w,Hr=new w,xs=new w,To=new w,Kl=new w,Ql=new w,Ms=new w;function yu(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ms.fromArray(r,s);let o=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),l=t.dot(Ms),c=e.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var rS=dv();function dv(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var an=new w,tc=new lt,pv=0,bn=class extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=t!==void 0?fh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tc.fromBufferAttribute(this,e),tc.applyMatrix3(t),this.setXY(e,tc.x,tc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):kd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wd(t,this.array)}};var Ho=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Go=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},fv=new Tn,Eo=new w,xu=new w,Dn=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);let e=Eo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=.5*(n-this.radius);this.center.addScaledVector(Eo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(xu)),this.expandByPoint(Eo.copy(t.center).sub(xu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},mv=0,pi=new qt,Mu=new hn,da=new w,Qn=new Tn,wo=new Tn,vn=new w,Ae=class r extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z0(t)?Go:Ho)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return Mu.lookAt(t),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];wo.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(Qn.min,wo.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,wo.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(wo.min),Qn.expandByPoint(wo.max))}Qn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)vn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(vn));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vn.fromBufferAttribute(o,c),l&&(da.fromBufferAttribute(t,c),vn.add(da)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===n.count||(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let H=0;H<n.count;H++)o[H]=new w,l[H]=new w;let h=new w,u=new w,f=new w,p=new lt,d=new lt,_=new lt,v=new w,m=new w;function x(H,D,Q){c[H]=c[D]=c[Q]=1,h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,D),f.fromBufferAttribute(n,Q),p.fromBufferAttribute(s,H),d.fromBufferAttribute(s,D),_.fromBufferAttribute(s,Q),u.sub(h),f.sub(h),d.sub(p),_.sub(p);let G=1/(d.x*_.y-_.x*d.y);isFinite(G)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(G),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(G),o[H].add(v),o[D].add(v),o[Q].add(v),l[H].add(m),l[D].add(m),l[Q].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let H=0,D=y.length;H<D;++H){let Q=y[H],G=Q.start;for(let z=G,Z=G+Q.count;z<Z;z+=3)x(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let C=new w,E=new w,b=new w,P=new w;function B(H){b.fromBufferAttribute(i,H),P.copy(b);let D=o[H];C.copy(D),C.sub(b.multiplyScalar(b.dot(D))).normalize(),E.crossVectors(P,D);let Q=E.dot(l[H])<0?-1:1;a.setXYZW(H,C.x,C.y,C.z,Q)}for(let H=0,D=n.count;H<D;++H)c[H]&&B(H);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){let d=t.getX(f+0),_=t.getX(f+1),v=t.getX(f+2);i.fromBufferAttribute(e,d),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,v),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,d=0;for(let _=0,v=l.length;_<v;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let m=0;m<h;m++)f[d++]=c[p++]}return new bn(f,h,u)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=t(i[o],n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let f=t(c[h],n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ca=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=xr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ff(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ff(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ff(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=xr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var Hn=new w,qn=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?fh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new bn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):kd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wd(t,this.data.array)}},Su=new w,gv=new w,vv=new re,wi=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Su.subVectors(n,e).cross(gv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Su),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vv.getNormalMatrix(t),i=this.coplanarPoint(Su).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pa,_v=0,ji=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:Qt(`Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ts=class extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ao=new w,fa=new w,ma=new w,ga=new lt,Ro=new lt,Nm=new qt,ec=new w,Co=new w,nc=new w,mf=new lt,bu=new lt,gf=new lt,Pa=class extends hn{constructor(t=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",pa===void 0){pa=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ca(e,5);pa.setIndex([0,1,2,0,2,3]),pa.setAttribute("position",new qn(n,3,0,!1)),pa.setAttribute("uv",new qn(n,2,3,!1))}this.geometry=pa,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fa.setFromMatrixScale(this.matrixWorld),Nm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ma.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fa.multiplyScalar(-ma.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;ic(ec.set(-.5,-.5,0),ma,a,fa,i,s),ic(Co.set(.5,-.5,0),ma,a,fa,i,s),ic(nc.set(.5,.5,0),ma,a,fa,i,s),mf.set(0,0),bu.set(1,0),gf.set(1,1);let o=t.ray.intersectTriangle(ec,Co,nc,!1,Ao);if(o===null&&(ic(Co.set(-.5,.5,0),ma,a,fa,i,s),bu.set(0,1),o=t.ray.intersectTriangle(ec,nc,Co,!1,Ao),o===null))return;let l=t.ray.origin.distanceTo(Ao);l<t.near||l>t.far||e.push({distance:l,point:Ao.clone(),uv:ki.getInterpolation(Ao,ec,Co,nc,mf,bu,gf,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ic(r,t,e,n,i,s){ga.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ro.x=s*ga.x-i*ga.y,Ro.y=i*ga.x+s*ga.y):Ro.copy(ga),r.copy(t),r.x+=Ro.x,r.y+=Ro.y,r.applyMatrix4(Nm)}var sS=new w,aS=new w;var ur=new w,Tu=new w,rc=new w,sc=new w,Wr=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ur)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ur.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ur.copy(this.origin).addScaledVector(this.direction,e),ur.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Tu.copy(t).add(e).multiplyScalar(.5),rc.copy(e).sub(t).normalize(),sc.copy(this.origin).sub(Tu);let s=.5*t.distanceTo(e),a=-this.direction.dot(rc),o=sc.dot(this.direction),l=-sc.dot(rc),c=sc.lengthSq(),h=Math.abs(1-a*a),u,f,p,d;if(h>0)if(u=a*l-o,f=a*o-l,d=s*h,u>=0)if(f>=-d)if(f<=d){let _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-d?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=d?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Tu).addScaledVector(rc,f),p}intersectSphere(t,e){if(t.radius<0)return null;ur.subVectors(t.center,this.origin);let n=ur.dot(this.direction),i=ur.dot(ur)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return!(t.radius<0)&&this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0?!0:t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return this.intersectBox(t,ur)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,p=t.z-a.z,d=e.x-a.x,_=e.y-a.y,v=e.z-a.z,m=n.x-a.x,x=n.y-a.y,y=n.z-a.z,C=Math.abs(l),E=Math.abs(c),b=Math.abs(h),P,B,H,D,Q,G,z,Z,ut,nt,W,et;if(C>=E&&C>=b?(H=l,G=u,ut=d,et=m,l>=0?(P=c,B=h,D=f,Q=p,z=_,Z=v,nt=x,W=y):(P=h,B=c,D=p,Q=f,z=v,Z=_,nt=y,W=x)):E>=b?(H=c,G=f,ut=_,et=x,c>=0?(P=h,B=l,D=p,Q=u,z=v,Z=d,nt=y,W=m):(P=l,B=h,D=u,Q=p,z=d,Z=v,nt=m,W=y)):(H=h,G=p,ut=v,et=y,h>=0?(P=l,B=c,D=u,Q=f,z=d,Z=_,nt=m,W=x):(P=c,B=l,D=f,Q=u,z=_,Z=d,nt=x,W=m)),H===0)return null;let vt=P/H,Nt=B/H,Ft=D-vt*G,ct=Q-Nt*G,xt=z-vt*ut,Ct=Z-Nt*ut,St=nt-vt*et,Bt=W-Nt*et,j=St*Ct-Bt*xt,kt=Ft*Bt-ct*St,Kt=xt*ct-Ct*Ft;if(i){if(j<0||kt<0||Kt<0)return null}else if((j<0||kt<0||Kt<0)&&(j>0||kt>0||Kt>0))return null;let mt=j+kt+Kt;if(mt===0)return null;let ht=1/H*(j*G+kt*ut+Kt*et);return(mt>0?ht<0:ht>0)?null:this.at(ht/mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vf=new qt,Ss=new Wr,ac=new Dn,_f=new w,oc=new w,lc=new w,cc=new w,Eu=new w,hc=new w,yf=new w,uc=new w,xe=class extends hn{constructor(t=new Ae,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){hc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Eu.fromBufferAttribute(u,t),a?hc.addScaledVector(Eu,h):hc.addScaledVector(Eu.sub(e),h))}e.add(hc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),Ss.copy(t.ray).recast(t.near),ac.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(ac,_f)===null||Ss.origin.distanceToSquared(_f)>(t.far-t.near)**2))return;vf.copy(s).invert(),Ss.copy(t.ray).applyMatrix4(vf),n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1||this._computeIntersections(t,e,Ss)}}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,_=f.length;d<_;d++){let v=f[d],m=a[v.materialIndex];for(let x=Math.max(v.start,p.start),y=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));x<y;x+=3)i=dc(this,m,t,n,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,e.push(i))}else for(let d=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);d<_;d+=3)i=dc(this,a,t,n,c,h,u,o.getX(d),o.getX(d+1),o.getX(d+2)),i&&(i.faceIndex=Math.floor(d/3),e.push(i));else if(l!==void 0)if(Array.isArray(a))for(let d=0,_=f.length;d<_;d++){let v=f[d],m=a[v.materialIndex];for(let x=Math.max(v.start,p.start),y=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));x<y;x+=3)i=dc(this,m,t,n,c,h,u,x,x+1,x+2),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,e.push(i))}else for(let d=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);d<_;d+=3)i=dc(this,a,t,n,c,h,u,d,d+1,d+2),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}};function yv(r,t,e,n,i,s,a,o){let l;if(l=t.side===1?n.intersectTriangle(a,s,i,!0,o):n.intersectTriangle(i,s,a,t.side===0,o),l===null)return null;uc.copy(o),uc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(uc);return c<e.near||c>e.far?null:{distance:c,point:uc.clone(),object:r}}function dc(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,oc),r.getVertexPosition(l,lc),r.getVertexPosition(c,cc);let h=yv(r,t,e,n,oc,lc,cc,yf);if(h){let u=new w;ki.getBarycoord(yf,oc,lc,cc,u),i&&(h.uv=ki.getInterpolatedAttribute(i,o,l,c,u,new lt)),s&&(h.uv1=ki.getInterpolatedAttribute(s,o,l,c,u,new lt)),a&&(h.normal=ki.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new w,materialIndex:0};ki.getNormal(oc,lc,cc,f.normal),h.face=f,h.barycoord=u}return h}var oS=new be,lS=new be,cS=new be,hS=new be,uS=new qt,dS=new w,pS=new Dn,fS=new qt,mS=new Wr;var Vo=class extends Gn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=1003,h=1003,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gS=new qt,vS=new qt;var Ia=class extends bn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},va=new qt,xf=new qt,pc=[],Mf=new Tn,xv=new qt,Po=new xe,Io=new Dn,ko=class extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,va),Mf.copy(t.boundingBox).applyMatrix4(va),this.boundingBox.union(Mf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,va),Io.copy(t.boundingSphere).applyMatrix4(va),this.boundingSphere.union(Io)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=t*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(n),t.ray.intersectsSphere(Io)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,va),xf.multiplyMatrices(n,va),Po.matrixWorld=xf,Po.raycast(t,pc);for(let a=0,o=pc.length;a<o;a++){let l=pc[a];l.instanceId=s,l.object=this,e.push(l)}pc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,16*t),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vo(new Float32Array(i*this.count),i,this.count,1028,1015));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new Dn,Mv=new lt(.5,.5),fc=new w,pr=class{constructor(t=new wi,e=new wi,n=new wi,i=new wi,s=new wi,a=new wi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],d=s[8],_=s[9],v=s[10],m=s[11],x=s[12],y=s[13],C=s[14],E=s[15];if(i[0].setComponents(c-a,p-h,m-d,E-x).normalize(),i[1].setComponents(c+a,p+h,m+d,E+x).normalize(),i[2].setComponents(c+o,p+u,m+_,E+y).normalize(),i[3].setComponents(c-o,p-u,m-_,E-y).normalize(),n)i[4].setComponents(l,f,v,C).normalize(),i[5].setComponents(c-l,p-f,m-v,E-C).normalize();else if(i[4].setComponents(c-l,p-f,m-v,E-C).normalize(),e===2e3)i[5].setComponents(c+l,p+f,m+v,E+C).normalize();else{if(e!==2001)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(l,f,v,C).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=Mv.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(fc.x=i.normal.x>0?t.max.x:t.min.x,fc.y=i.normal.y>0?t.max.y:t.min.y,fc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sf=new qt,Wo=class r{constructor(){this.coordinateSystem=2e3,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];Sf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new pr),n[i].setFromProjectionMatrix(Sf,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new pr),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Lu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},_S=new qt,yS=new It(1,1,1),xS=new pr,MS=new Wo,SS=new Tn,bS=new Dn,TS=new w,ES=new w,wS=new w,AS=new w,RS=new Lu,CS=new xe;var PS=new w,IS=new w,LS=new qt,NS=new Wr,DS=new Dn,US=new w,OS=new w;var FS=new w,BS=new w;var zS=new qt,HS=new Wr,GS=new Dn,VS=new w;var Xo=class extends Gn{constructor(t=[],e=301,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},La=class extends Gn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fr=class extends Gn{constructor(t,e,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==1026&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jo=class extends fr{constructor(t,e=1014,n=301,i,s,a=1003,o=1003,l,c=1026){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qo=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Un=class r extends Ae{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;function d(_,v,m,x,y,C,E,b,P,B,H){let D=C/P,Q=E/B,G=C/2,z=E/2,Z=b/2,ut=P+1,nt=B+1,W=0,et=0,vt=new w;for(let Nt=0;Nt<nt;Nt++){let Ft=Nt*Q-z;for(let ct=0;ct<ut;ct++){let xt=ct*D-G;vt[_]=xt*x,vt[v]=Ft*y,vt[m]=Z,c.push(vt.x,vt.y,vt.z),vt[_]=0,vt[v]=0,vt[m]=b>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(ct/P),u.push(1-Nt/B),W+=1}}for(let Nt=0;Nt<B;Nt++)for(let Ft=0;Ft<P;Ft++){let ct=f+Ft+ut*Nt,xt=f+Ft+ut*(Nt+1),Ct=f+(Ft+1)+ut*(Nt+1),St=f+(Ft+1)+ut*Nt;l.push(ct,xt,St),l.push(xt,Ct,St),et+=6}o.addGroup(p,et,H),p+=et,f+=W}d("z","y","x",-1,-1,n,e,t,a,s,0),d("z","y","x",1,-1,n,e,-t,a,s,1),d("x","z","y",1,1,t,n,e,i,a,2),d("x","z","y",1,-1,t,n,-e,i,a,3),d("x","y","z",1,-1,t,e,n,i,s,4),d("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Es=class r extends Ae{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,d=2*n+s,_=i+1,v=new w,m=new w;for(let x=0;x<=d;x++){let y=0,C=0,E=0,b=0;if(x<=n){let H=x/n,D=H*Math.PI/2;C=-h-t*Math.cos(D),E=t*Math.sin(D),b=-t*Math.cos(D),y=H*u}else if(x<=n+s){let H=(x-n)/s;C=H*e-h,E=t,b=0,y=u+H*f}else{let H=(x-n-s)/n,D=H*Math.PI/2;C=h+t*Math.sin(D),E=t*Math.cos(D),b=t*Math.sin(D),y=u+f+H*u}let P=Math.max(0,Math.min(1,y/p)),B=0;x===0?B=.5/i:x===d&&(B=-.5/i);for(let H=0;H<=i;H++){let D=H/i,Q=D*Math.PI*2,G=Math.sin(Q),z=Math.cos(Q);m.x=-E*z,m.y=C,m.z=E*G,o.push(m.x,m.y,m.z),v.set(-E*z,b,E*G),v.normalize(),l.push(v.x,v.y,v.z),c.push(D+B,P)}if(x>0){let H=(x-1)*_;for(let D=0;D<i;D++){let Q=H+D,G=H+D+1,z=x*_+D,Z=x*_+D+1;a.push(Q,G,z),a.push(G,Z,z)}}}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mr=class r extends Ae{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],a=[],o=[],l=[],c=new w,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xr=class r extends Ae{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],p=[],d=0,_=[],v=n/2,m=0;function x(y){let C=d,E=new lt,b=new w,P=0,B=y===!0?t:e,H=y===!0?1:-1;for(let Q=1;Q<=i;Q++)u.push(0,v*H,0),f.push(0,H,0),p.push(.5,.5),d++;let D=d;for(let Q=0;Q<=i;Q++){let G=Q/i*l+o,z=Math.cos(G),Z=Math.sin(G);b.x=B*Z,b.y=v*H,b.z=B*z,u.push(b.x,b.y,b.z),f.push(0,H,0),E.x=.5*z+.5,E.y=.5*Z*H+.5,p.push(E.x,E.y),d++}for(let Q=0;Q<i;Q++){let G=C+Q,z=D+Q;y===!0?h.push(z,z+1,G):h.push(z+1,z,G),P+=3}c.addGroup(m,P,y===!0?1:2),m+=P}(function(){let y=new w,C=new w,E=0,b=(e-t)/n;for(let P=0;P<=s;P++){let B=[],H=P/s,D=H*(e-t)+t;for(let Q=0;Q<=i;Q++){let G=Q/i,z=G*l+o,Z=Math.sin(z),ut=Math.cos(z);C.x=D*Z,C.y=-H*n+v,C.z=D*ut,u.push(C.x,C.y,C.z),y.set(Z,b,ut).normalize(),f.push(y.x,y.y,y.z),p.push(G,1-H),B.push(d++)}_.push(B)}for(let P=0;P<i;P++)for(let B=0;B<s;B++){let H=_[B][P],D=_[B+1][P],Q=_[B+1][P+1],G=_[B][P+1];(t>0||B!==0)&&(h.push(H,D,G),E+=3),(e>0||B!==s-1)&&(h.push(D,Q,G),E+=3)}c.addGroup(m,E,0),m+=E})(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ac=class r extends Xr{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jr=class r extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];function o(p,d,_,v){let m=v+1,x=[];for(let y=0;y<=m;y++){x[y]=[];let C=p.clone().lerp(_,y/m),E=d.clone().lerp(_,y/m),b=m-y;for(let P=0;P<=b;P++)x[y][P]=P===0&&y===m?C:C.clone().lerp(E,P/b)}for(let y=0;y<m;y++)for(let C=0;C<2*(m-y)-1;C++){let E=Math.floor(C/2);C%2==0?(l(x[y][E+1]),l(x[y+1][E]),l(x[y][E])):(l(x[y][E+1]),l(x[y+1][E+1]),l(x[y+1][E]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,d){let _=3*p;d.x=t[_+0],d.y=t[_+1],d.z=t[_+2]}function h(p,d,_,v){v<0&&p.x===1&&(a[d]=p.x-1),_.x===0&&_.z===0&&(a[d]=v/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function f(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let d=new w,_=new w,v=new w;for(let m=0;m<e.length;m+=3)c(e[m+0],d),c(e[m+1],_),c(e[m+2],v),o(d,_,v,p)})(i),(function(p){let d=new w;for(let _=0;_<s.length;_+=3)d.x=s[_+0],d.y=s[_+1],d.z=s[_+2],d.normalize().multiplyScalar(p),s[_+0]=d.x,s[_+1]=d.y,s[_+2]=d.z})(n),(function(){let p=new w;for(let d=0;d<s.length;d+=3){p.x=s[d+0],p.y=s[d+1],p.z=s[d+2];let _=u(p)/2/Math.PI+.5,v=f(p)/Math.PI+.5;a.push(_,1-v)}(function(){let d=new w,_=new w,v=new w,m=new w,x=new lt,y=new lt,C=new lt;for(let E=0,b=0;E<s.length;E+=9,b+=6){d.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),x.set(a[b+0],a[b+1]),y.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),m.copy(d).add(_).add(v).divideScalar(3);let P=u(m);h(x,b+0,d,P),h(y,b+2,_,P),h(C,b+4,v,P)}})(),(function(){for(let d=0;d<a.length;d+=6){let _=a[d+0],v=a[d+2],m=a[d+4],x=Math.max(_,v,m),y=Math.min(_,v,m);x>.9&&y<.1&&(_<.2&&(a[d+0]+=1),v<.2&&(a[d+2]+=1),m<.2&&(a[d+4]+=1))}})()})(),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(s.slice(),3)),this.setAttribute("uv",new jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}},Rc=class r extends jr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},mc=new w,gc=new w,wu=new w,vc=new ki,Na=class extends Ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(Ma*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f=new Map,p=[];for(let d=0;d<l;d+=3){a?(c[0]=a.getX(d),c[1]=a.getX(d+1),c[2]=a.getX(d+2)):(c[0]=d,c[1]=d+1,c[2]=d+2);let{a:_,b:v,c:m}=vc;if(_.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),vc.getNormal(wu),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let y=(x+1)%3,C=u[x],E=u[y],b=vc[h[x]],P=vc[h[y]],B=`${C}_${E}`,H=`${E}_${C}`,D=f.get(H);D?(wu.dot(D.normal)<=s&&(p.push(b.x,b.y,b.z),p.push(P.x,P.y,P.z)),f.set(H,null)):f.has(B)||f.set(B,{index0:c[x],index1:c[y],normal:wu.clone()})}}for(let d of f.values())if(d){let{index0:_,index1:v}=d;mc.fromBufferAttribute(o,_),gc.fromBufferAttribute(o,v),p.push(mc.x,mc.y,mc.z),p.push(gc.x,gc.y,gc.z)}this.setAttribute("position",new jt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,a;a=e||t*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new lt:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new w,i=[],s=[],a=[],o=new w,l=new qt;for(let p=0;p<=t;p++){let d=p/t;i[p]=this.getTangentAt(d,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(ae(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(ae(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let d=1;d<=t;d++)s[d].applyMatrix4(l.makeRotationAxis(i[d],p*d)),a[d].crossVectors(i[d],s[d])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Da=class extends ni{constructor(t=0,e=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cc=class extends Da{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xd(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(s){let a=s*s;return r+t*s+e*a+n*(a*s)}}}var bf=new w,Tf=new w,Au=new Xd,Ru=new Xd,Cu=new Xd,qr=class extends ni{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){let n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Tf.subVectors(i[0],i[1]).add(i[0]),o=Tf);let u=i[c%s],f=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(bf.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=bf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,d=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(l),p);_<1e-4&&(_=1),d<1e-4&&(d=_),v<1e-4&&(v=_),Au.initNonuniformCatmullRom(o.x,u.x,f.x,l.x,d,_,v),Ru.initNonuniformCatmullRom(o.y,u.y,f.y,l.y,d,_,v),Cu.initNonuniformCatmullRom(o.z,u.z,f.z,l.z,d,_,v)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(o.x,u.x,f.x,l.x,this.tension),Ru.initCatmullRom(o.y,u.y,f.y,l.y,this.tension),Cu.initCatmullRom(o.z,u.z,f.z,l.z,this.tension));return n.set(Au.calc(h),Ru.calc(h),Cu.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ef(r,t,e,n,i){let s=.5*(n-t),a=.5*(i-e),o=r*r;return(2*e-2*n+s+a)*(r*o)+(-3*e+3*n-2*s-a)*o+s*r+e}function Sv(r,t){let e=1-r;return e*e*t}function bv(r,t){return 2*(1-r)*r*t}function Tv(r,t){return r*r*t}function Uo(r,t,e,n){return Sv(r,t)+bv(r,e)+Tv(r,n)}function Ev(r,t){let e=1-r;return e*e*e*t}function wv(r,t){let e=1-r;return 3*e*e*r*t}function Av(r,t){return 3*(1-r)*r*r*t}function Rv(r,t){return r*r*r*t}function Oo(r,t,e,n,i){return Ev(r,t)+wv(r,e)+Av(r,n)+Rv(r,i)}var Yo=class extends ni{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Oo(t,i.x,s.x,a.x,o.x),Oo(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pc=class extends ni{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){let n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Oo(t,i.x,s.x,a.x,o.x),Oo(t,i.y,s.y,a.y,o.y),Oo(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends ni{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends ni{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends ni{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Uo(t,i.x,s.x,a.x),Uo(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends ni{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Uo(t,i.x,s.x,a.x),Uo(t,i.y,s.y,a.y),Uo(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Ef(o,l.x,c.x,h.x,u.x),Ef(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:Cc,CatmullRomCurve3:qr,CubicBezierCurve:Yo,CubicBezierCurve3:Pc,EllipseCurve:Da,LineCurve:Zo,LineCurve3:Ic,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:$o,SplineCurve:Ko}),Nc=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*t:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Lc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Qo=class extends Nc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zo(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Jo(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){let o=new Yo(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ko(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){let c=new Da(t,e,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yr=class extends Qo{constructor(t){super(t),this.uuid=xr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Qo().fromJSON(i))}return this}};function Cv(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Dm(r,0,i,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Dv(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let h=o,u=l;for(let f=e;f<i;f+=e){let p=r[f],d=r[f+1];p<o&&(o=p),d<l&&(l=d),p>h&&(h=p),d>u&&(u=d)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return tl(s,a,e,o,l,c,0),a}function Dm(r,t,e,n,i){let s;if(i===Xv(r,t,e,n)>0)for(let a=t;a<e;a+=n)s=wf(a/n|0,r[a],r[a+1],s);else for(let a=e-n;a>=t;a-=n)s=wf(a/n|0,r[a],r[a+1],s);return s&&Ua(s,s.next)&&(nl(s),s=s.next),s}function ws(r,t){if(!r)return r;t||(t=r);let e,n=r;do if(e=!1,n.steiner||!Ua(n,n.next)&&Ze(n.prev,n,n.next)!==0)n=n.next;else{if(nl(n),n=t=n.prev,n===n.next)break;e=!0}while(e||n!==t);return t}function tl(r,t,e,n,i,s,a){if(!r)return;!a&&s&&zv(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Iv(r,n,i,s):Pv(r))t.push(l.i,r.i,c.i),nl(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?tl(r=Lv(ws(r),t),t,e,n,i,s,2):a===2&&Nv(r,t,e,n,i,s):tl(ws(r),t,e,n,i,s,1);break}}}function Pv(r){let t=r.prev,e=r,n=r.next;if(Ze(t,e,n)>=0)return!1;let i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),f=Math.max(i,s,a),p=Math.max(o,l,c),d=n.next;for(;d!==t;){if(d.x>=h&&d.x<=f&&d.y>=u&&d.y<=p&&Lo(i,o,s,l,a,c,d.x,d.y)&&Ze(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Iv(r,t,e,n){let i=r.prev,s=r,a=r.next;if(Ze(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,f=a.y,p=Math.min(o,l,c),d=Math.min(h,u,f),_=Math.max(o,l,c),v=Math.max(h,u,f),m=Nu(p,d,t,e,n),x=Nu(_,v,t,e,n),y=r.prevZ,C=r.nextZ;for(;y&&y.z>=m&&C&&C.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=d&&y.y<=v&&y!==i&&y!==a&&Lo(o,h,l,u,c,f,y.x,y.y)&&Ze(y.prev,y,y.next)>=0||(y=y.prevZ,C.x>=p&&C.x<=_&&C.y>=d&&C.y<=v&&C!==i&&C!==a&&Lo(o,h,l,u,c,f,C.x,C.y)&&Ze(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=_&&y.y>=d&&y.y<=v&&y!==i&&y!==a&&Lo(o,h,l,u,c,f,y.x,y.y)&&Ze(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;C&&C.z<=x;){if(C.x>=p&&C.x<=_&&C.y>=d&&C.y<=v&&C!==i&&C!==a&&Lo(o,h,l,u,c,f,C.x,C.y)&&Ze(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function Lv(r,t){let e=r;do{let n=e.prev,i=e.next.next;!Ua(n,i)&&Om(n,e,e.next,i)&&el(n,i)&&el(i,n)&&(t.push(n.i,e.i,i.i),nl(e),nl(e.next),e=r=i),e=e.next}while(e!==r);return ws(e)}function Nv(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vv(a,o)){let l=Fm(a,o);return a=ws(a,a.next),l=ws(l,l.next),tl(a,t,e,n,i,s,0),void tl(l,t,e,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Dv(r,t,e,n){let i=[];for(let s=0,a=t.length;s<a;s++){let o=Dm(r,t[s]*n,s<a-1?t[s+1]*n:r.length,n,!1);o===o.next&&(o.steiner=!0),i.push(Gv(o))}i.sort(Uv);for(let s=0;s<i.length;s++)e=Ov(i[s],e);return e}function Uv(r,t){let e=r.x-t.x;return e===0&&(e=r.y-t.y,e===0)&&(e=(r.next.y-r.y)/(r.next.x-r.x)-(t.next.y-t.y)/(t.next.x-t.x)),e}function Ov(r,t){let e=Fv(r,t);if(!e)return t;let n=Fm(e,r);return ws(n,n.next),ws(e,e.next)}function Fv(r,t){let e=t,n=r.x,i=r.y,s,a=-1/0;if(Ua(r,e))return e;do{if(Ua(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>a&&(a=u,s=e.x<e.next.x?e:e.next,u===n))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Um(i<c?n:a,i,l,c,i<c?a:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);el(e,r)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Bv(s,e)))&&(s=e,h=u)}e=e.next}while(e!==o);return s}function Bv(r,t){return Ze(r.prev,r,t.prev)<0&&Ze(t.next,r,r.next)<0}function zv(r,t,e,n){let i=r;do i.z===0&&(i.z=Nu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Hv(i)}function Hv(r){let t,e=1;do{let n,i=r;r=null;let s=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,e*=2}while(t>1);return r}function Nu(r,t,e,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-e)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*i|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function Gv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Um(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Lo(r,t,e,n,i,s,a,o){return!(r===a&&t===o)&&Um(r,t,e,n,i,s,a,o)}function Vv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!kv(r,t)&&(el(r,t)&&el(t,r)&&Wv(r,t)&&(Ze(r.prev,r,t.prev)||Ze(r,t.prev,t))||Ua(r,t)&&Ze(r.prev,r,r.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Ua(r,t){return r.x===t.x&&r.y===t.y}function Om(r,t,e,n){let i=yc(Ze(r,t,e)),s=yc(Ze(r,t,n)),a=yc(Ze(e,n,r)),o=yc(Ze(e,n,t));return i!==s&&a!==o||!(i!==0||!_c(r,e,t))||!(s!==0||!_c(r,n,t))||!(a!==0||!_c(e,r,n))||!(o!==0||!_c(e,t,n))}function _c(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function yc(r){return r>0?1:r<0?-1:0}function kv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Om(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function el(r,t){return Ze(r.prev,r,r.next)<0?Ze(r,t,r.next)>=0&&Ze(r,r.prev,t)>=0:Ze(r,t,r.prev)<0||Ze(r,r.next,t)<0}function Wv(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Fm(r,t){let e=Du(r.i,r.x,r.y),n=Du(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function wf(r,t,e,n){let i=Du(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Du(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xv(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var Uu=class{static triangulate(t,e,n=2){return Cv(t,e,n)}},Wi=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return .5*n}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Af(t),Rf(n,t);let a=t.length;e.forEach(Af);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Rf(n,e[l]);let o=Uu.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Af(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Rf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var As=class r extends Ae{constructor(t=new Yr([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++)a(t[o]);function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled===void 0||e.bevelEnabled,p=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:jv,y,C,E,b,P,B=!1;if(m){y=m.getSpacedPoints(h),B=!0,f=!1;let ht=!!m.isCatmullRomCurve3&&m.closed;C=m.computeFrenetFrames(h,ht),E=new w,b=new w,P=new w}f||(v=0,p=0,d=0,_=0);let H=o.extractPoints(c),D=H.shape,Q=H.holes;if(!Wi.isClockWise(D)){D=D.reverse();for(let ht=0,_t=Q.length;ht<_t;ht++){let N=Q[ht];Wi.isClockWise(N)&&(Q[ht]=N.reverse())}}function G(ht){let _t=10000000000000001e-36,N=ht[0];for(let ot=1;ot<=ht.length;ot++){let S=ot%ht.length,M=ht[S],I=M.x-N.x,q=M.y-N.y,X=I*I+q*q,J=Math.max(Math.abs(M.x),Math.abs(M.y),Math.abs(N.x),Math.abs(N.y));X<=_t*J*J?(ht.splice(S,1),ot--):N=M}}G(D),Q.forEach(G);let z=Q.length,Z=D;for(let ht=0;ht<z;ht++){let _t=Q[ht];D=D.concat(_t)}function ut(ht,_t,N){return _t||te("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(_t,N)}let nt=D.length;function W(ht,_t,N){let ot,S,M,I=ht.x-_t.x,q=ht.y-_t.y,X=N.x-ht.x,J=N.y-ht.y,rt=I*I+q*q,U=I*J-q*X;if(Math.abs(U)>Number.EPSILON){let st=Math.sqrt(rt),Mt=Math.sqrt(X*X+J*J),wt=_t.x-q/st,dt=_t.y+I/st,ee=((N.x-J/Mt-wt)*J-(N.y+X/Mt-dt)*X)/(I*J-q*X);ot=wt+I*ee-ht.x,S=dt+q*ee-ht.y;let bt=ot*ot+S*S;if(bt<=2)return new lt(ot,S);M=Math.sqrt(bt/2)}else{let st=!1;I>Number.EPSILON?X>Number.EPSILON&&(st=!0):I<-Number.EPSILON?X<-Number.EPSILON&&(st=!0):Math.sign(q)===Math.sign(J)&&(st=!0),st?(ot=-q,S=I,M=Math.sqrt(rt)):(ot=I,S=q,M=Math.sqrt(rt/2))}return new lt(ot/M,S/M)}let et=[];for(let ht=0,_t=Z.length,N=_t-1,ot=ht+1;ht<_t;ht++,N++,ot++)N===_t&&(N=0),ot===_t&&(ot=0),et[ht]=W(Z[ht],Z[N],Z[ot]);let vt=[],Nt,Ft,ct=et.concat();for(let ht=0,_t=z;ht<_t;ht++){let N=Q[ht];Nt=[];for(let ot=0,S=N.length,M=S-1,I=ot+1;ot<S;ot++,M++,I++)M===S&&(M=0),I===S&&(I=0),Nt[ot]=W(N[ot],N[M],N[I]);vt.push(Nt),ct=ct.concat(Nt)}if(v===0)Ft=Wi.triangulateShape(Z,Q);else{let ht=[],_t=[];for(let N=0;N<v;N++){let ot=N/v,S=p*Math.cos(ot*Math.PI/2),M=d*Math.sin(ot*Math.PI/2)+_;for(let I=0,q=Z.length;I<q;I++){let X=ut(Z[I],et[I],M);Bt(X.x,X.y,-S),ot===0&&ht.push(X)}for(let I=0,q=z;I<q;I++){let X=Q[I];Nt=vt[I];let J=[];for(let rt=0,U=X.length;rt<U;rt++){let st=ut(X[rt],Nt[rt],M);Bt(st.x,st.y,-S),ot===0&&J.push(st)}ot===0&&_t.push(J)}}Ft=Wi.triangulateShape(ht,_t)}let xt=Ft.length,Ct=d+_;for(let ht=0;ht<nt;ht++){let _t=f?ut(D[ht],ct[ht],Ct):D[ht];B?(b.copy(C.normals[0]).multiplyScalar(_t.x),E.copy(C.binormals[0]).multiplyScalar(_t.y),P.copy(y[0]).add(b).add(E),Bt(P.x,P.y,P.z)):Bt(_t.x,_t.y,0)}for(let ht=1;ht<=h;ht++)for(let _t=0;_t<nt;_t++){let N=f?ut(D[_t],ct[_t],Ct):D[_t];B?(b.copy(C.normals[ht]).multiplyScalar(N.x),E.copy(C.binormals[ht]).multiplyScalar(N.y),P.copy(y[ht]).add(b).add(E),Bt(P.x,P.y,P.z)):Bt(N.x,N.y,u/h*ht)}for(let ht=v-1;ht>=0;ht--){let _t=ht/v,N=p*Math.cos(_t*Math.PI/2),ot=d*Math.sin(_t*Math.PI/2)+_;for(let S=0,M=Z.length;S<M;S++){let I=ut(Z[S],et[S],ot);Bt(I.x,I.y,u+N)}for(let S=0,M=Q.length;S<M;S++){let I=Q[S];Nt=vt[S];for(let q=0,X=I.length;q<X;q++){let J=ut(I[q],Nt[q],ot);B?Bt(J.x,J.y+y[h-1].y,y[h-1].x+N):Bt(J.x,J.y,u+N)}}}function St(ht,_t){let N=ht.length;for(;--N>=0;){let ot=N,S=N-1;S<0&&(S=ht.length-1);for(let M=0,I=h+2*v;M<I;M++){let q=nt*M,X=nt*(M+1);kt(_t+ot+q,_t+S+q,_t+S+X,_t+ot+X)}}}function Bt(ht,_t,N){l.push(ht),l.push(_t),l.push(N)}function j(ht,_t,N){Kt(ht),Kt(_t),Kt(N);let ot=i.length/3,S=x.generateTopUV(n,i,ot-3,ot-2,ot-1);mt(S[0]),mt(S[1]),mt(S[2])}function kt(ht,_t,N,ot){Kt(ht),Kt(_t),Kt(ot),Kt(_t),Kt(N),Kt(ot);let S=i.length/3,M=x.generateSideWallUV(n,i,S-6,S-3,S-2,S-1);mt(M[0]),mt(M[1]),mt(M[3]),mt(M[1]),mt(M[2]),mt(M[3])}function Kt(ht){i.push(l[3*ht+0]),i.push(l[3*ht+1]),i.push(l[3*ht+2])}function mt(ht){s.push(ht.x),s.push(ht.y)}(function(){let ht=i.length/3;if(f){let _t=0,N=nt*_t;for(let ot=0;ot<xt;ot++){let S=Ft[ot];j(S[2]+N,S[1]+N,S[0]+N)}_t=h+2*v,N=nt*_t;for(let ot=0;ot<xt;ot++){let S=Ft[ot];j(S[0]+N,S[1]+N,S[2]+N)}}else{for(let _t=0;_t<xt;_t++){let N=Ft[_t];j(N[2],N[1],N[0])}for(let _t=0;_t<xt;_t++){let N=Ft[_t];j(N[0]+nt*h,N[1]+nt*h,N[2]+nt*h)}}n.addGroup(ht,i.length/3-ht,0)})(),(function(){let ht=i.length/3,_t=0;St(Z,_t),_t+=Z.length;for(let N=0,ot=Q.length;N<ot;N++){let S=Q[N];St(S,_t),_t+=S.length}n.addGroup(ht,i.length/3-ht,1)})()}this.setAttribute("position",new jt(i,3)),this.setAttribute("uv",new jt(s,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return qv(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let n=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lc[i.type]().fromJSON(i)),new r(n,t.options)}},jv={generateTopUV:function(r,t,e,n,i){let s=t[3*e],a=t[3*e+1],o=t[3*n],l=t[3*n+1],c=t[3*i],h=t[3*i+1];return[new lt(s,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let a=t[3*e],o=t[3*e+1],l=t[3*e+2],c=t[3*n],h=t[3*n+1],u=t[3*n+2],f=t[3*i],p=t[3*i+1],d=t[3*i+2],_=t[3*s],v=t[3*s+1],m=t[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(f,1-d),new lt(_,1-m)]:[new lt(o,1-l),new lt(h,1-u),new lt(p,1-d),new lt(v,1-m)]}};function qv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Dc=class r extends jr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Uc=class r extends Ae{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/e,u=new w,f=new lt,p=new w,d=new w,_=new w,v=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:v=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,p.x=1*m,p.y=-v,p.z=0*m,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:v=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,p.x=1*m,p.y=-v,p.z=0*m,d.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(d)}for(let x=0;x<=e;x++){let y=n+x*h*i,C=Math.sin(y),E=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*C,u.y=t[b].y,u.z=t[b].x*E,a.push(u.x,u.y,u.z),f.x=x/e,f.y=b/(t.length-1),o.push(f.x,f.y);let P=l[3*b+0]*C,B=l[3*b+1],H=l[3*b+0]*E;c.push(P,B,H)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let C=y+x*t.length,E=C,b=C+t.length,P=C+t.length+1,B=C+1;s.push(E,b,B),s.push(P,B,b)}this.setIndex(s),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Oc=class r extends jr{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},ii=class r extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,p=[],d=[],_=[],v=[];for(let m=0;m<h;m++){let x=m*f-a;for(let y=0;y<c;y++){let C=y*u-s;d.push(C,-x,0),_.push(0,0,1),v.push(y/o),v.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let y=x+c*m,C=x+c*(m+1),E=x+1+c*(m+1),b=x+1+c*m;p.push(y,C,b),p.push(C,E,b)}this.setIndex(p),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Oa=class r extends Ae{constructor(t=.5,e=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/(i=Math.max(1,i)),p=new w,d=new lt;for(let _=0;_<=i;_++){for(let v=0;v<=n;v++){let m=s+v/n*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),d.x=(p.x/e+1)/2,d.y=(p.y/e+1)/2,h.push(d.x,d.y)}u+=f}for(let _=0;_<i;_++){let v=_*(n+1);for(let m=0;m<n;m++){let x=m+v,y=x,C=x+n+1,E=x+n+2,b=x+1;o.push(y,C,b),o.push(C,E,b)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Fc=class r extends Ae{constructor(t=new Yr([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,f=h.extractPoints(e),p=f.shape,d=f.holes;Wi.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,m=d.length;v<m;v++){let x=d[v];Wi.isClockWise(x)===!0&&(d[v]=x.reverse())}let _=Wi.triangulateShape(p,d);for(let v=0,m=d.length;v<m;v++){let x=d[v];p=p.concat(x)}for(let v=0,m=p.length;v<m;v++){let x=p[v];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let v=0,m=_.length;v<m;v++){let x=_[v],y=x[0]+u,C=x[1]+u,E=x[2]+u;n.push(y,C,E),l+=3}}this.setIndex(n),this.setAttribute("position",new jt(i,3)),this.setAttribute("normal",new jt(s,3)),this.setAttribute("uv",new jt(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return Yv(this.parameters.shapes,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let a=e[t.shapes[i]];n.push(a)}return new r(n,t.curveSegments)}};function Yv(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var Zr=class r extends Ae{constructor(t=1,e=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,f=new w,p=[],d=[],_=[],v=[];for(let m=0;m<=n;m++){let x=[],y=m/n,C=a+y*o,E=t*Math.cos(C),b=Math.sqrt(t*t-E*E),P=0;m===0&&a===0?P=.5/e:m===n&&l===Math.PI&&(P=-.5/e);for(let B=0;B<=e;B++){let H=B/e,D=i+H*s;u.x=-b*Math.cos(D),u.y=E,u.z=b*Math.sin(D),d.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),v.push(H+P,1-y),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let y=h[m][x+1],C=h[m][x],E=h[m+1][x],b=h[m+1][x+1];(m!==0||a>0)&&p.push(y,C,b),(m!==n-1||l<Math.PI)&&p.push(C,E,b)}this.setIndex(p),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Bc=class r extends jr{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},zc=class r extends Ae{constructor(t=1,e=.4,n=12,i=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new w,p=new w,d=new w;for(let _=0;_<=n;_++){let v=a+_/n*o;for(let m=0;m<=i;m++){let x=m/i*s;p.x=(t+e*Math.cos(v))*Math.cos(x),p.y=(t+e*Math.cos(v))*Math.sin(x),p.z=e*Math.sin(v),c.push(p.x,p.y,p.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),d.subVectors(p,f).normalize(),h.push(d.x,d.y,d.z),u.push(m/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let v=1;v<=i;v++){let m=(i+1)*_+v-1,x=(i+1)*(_-1)+v-1,y=(i+1)*(_-1)+v,C=(i+1)*_+v;l.push(m,x,C),l.push(x,y,C)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Hc=class r extends Ae{constructor(t=1,e=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new w,f=new w,p=new w,d=new w,_=new w,v=new w,m=new w;for(let y=0;y<=n;++y){let C=y/n*s*Math.PI*2;x(C,s,a,t,p),x(C+.01,s,a,t,d),v.subVectors(d,p),m.addVectors(d,p),_.crossVectors(v,m),m.crossVectors(_,v),_.normalize(),m.normalize();for(let E=0;E<=i;++E){let b=E/i*Math.PI*2,P=-e*Math.cos(b),B=e*Math.sin(b);u.x=p.x+(P*m.x+B*_.x),u.y=p.y+(P*m.y+B*_.y),u.z=p.z+(P*m.z+B*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,p).normalize(),c.push(f.x,f.y,f.z),h.push(y/n),h.push(E/i)}}for(let y=1;y<=n;y++)for(let C=1;C<=i;C++){let E=(i+1)*(y-1)+(C-1),b=(i+1)*y+(C-1),P=(i+1)*y+C,B=(i+1)*(y-1)+C;o.push(E,b,B),o.push(b,P,B)}function x(y,C,E,b,P){let B=Math.cos(y),H=Math.sin(y),D=E/C*y,Q=Math.cos(D);P.x=b*(2+Q)*.5*B,P.y=b*(2+Q)*H*.5,P.z=b*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Gc=class r extends Ae{constructor(t=new $o(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new lt,h=new w,u=[],f=[],p=[],d=[];function _(v){h=t.getPointAt(v/e,h);let m=a.normals[v],x=a.binormals[v];for(let y=0;y<=i;y++){let C=y/i*Math.PI*2,E=Math.sin(C),b=-Math.cos(C);l.x=b*m.x+E*x.x,l.y=b*m.y+E*x.y,l.z=b*m.z+E*x.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<e;v++)_(v);_(s===!1?e:0),(function(){for(let v=0;v<=e;v++)for(let m=0;m<=i;m++)c.x=v/e,c.y=m/i,p.push(c.x,c.y)})(),(function(){for(let v=1;v<=e;v++)for(let m=1;m<=i;m++){let x=(i+1)*(v-1)+(m-1),y=(i+1)*v+(m-1),C=(i+1)*v+m,E=(i+1)*(v-1)+m;d.push(x,y,E),d.push(y,C,E)}})()})(),this.setIndex(d),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Lc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Fa=class extends Ae{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new w,s=new w;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start;for(let p=f,d=f+u.count;p<d;p+=3)for(let _=0;_<3;_++){let v=o.getX(p+_),m=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,v),s.fromBufferAttribute(a,m),Cf(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Cf(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Cf(r,t,e){let n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)!==!0&&e.has(i)!==!0&&(e.add(n),e.add(i),!0)}var kS=Object.freeze({__proto__:null,BoxGeometry:Un,CapsuleGeometry:Es,CircleGeometry:mr,ConeGeometry:Ac,CylinderGeometry:Xr,DodecahedronGeometry:Rc,EdgesGeometry:Na,ExtrudeGeometry:As,IcosahedronGeometry:Dc,LatheGeometry:Uc,OctahedronGeometry:Oc,PlaneGeometry:ii,PolyhedronGeometry:jr,RingGeometry:Oa,ShapeGeometry:Fc,SphereGeometry:Zr,TetrahedronGeometry:Bc,TorusGeometry:zc,TorusKnotGeometry:Hc,TubeGeometry:Gc,WireframeGeometry:Fa}),il=class extends ji{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new It(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ds(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Pf(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Pf(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function On(r){let t={};for(let e=0;e<r.length;e++){let n=Ds(r[e]);for(let i in n)t[i]=n[i]}return t}function Pf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Zv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function jd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var vi={clone:Ds,merge:On},Jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jv,this.fragmentShader=$v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=Zv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new w().fromArray(i.value);break;case"v4":this.uniforms[n].value=new be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ba=class extends Fe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Jr=class extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vc=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kc=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _a(r,t){return r&&r.constructor!==t?typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r):r}function xc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var $r=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wc=class extends $r{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,o=2*e-n;break;case 2402:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=t,l=2*n-e;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=.5*(n-e),h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,d=(n-e)/(i-e),_=d*d,v=_*d,m=-f*v+2*f*_-f*d,x=(1+f)*v+(-1.5-2*f)*_+(-.5+f)*d+1,y=(-1-p)*v+(1.5+p)*_+.5*d,C=p*v-p*_;for(let E=0;E!==o;++E)s[E]=m*a[h+E]+x*a[c+E]+y*a[l+E]+C*a[u+E];return s}},Xc=class extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}},jc=class extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},qc=class extends $r{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let d=(n-e)/(i-e),_=1-d;for(let v=0;v!==o;++v)s[v]=a[c+v]*_+a[l+v]*d;return s}let f=2*o,p=t-1;for(let d=0;d!==o;++d){let _=a[c+d],v=a[l+d],m=p*f+2*d,x=u[m],y=u[m+1],C=t*f+2*d,E=h[C],b=h[C+1],P=Qv(n,e,x,E,i);s[d]=Bm(P,_,y,b,v)}return s}};function Bm(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Kv(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Qv(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=Bm(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=Kv(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ti=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),xc(t.settings)&&(n.settings={inTangents:_a(t.settings.inTangents,Array),outTangents:_a(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;xc(this.settings)&&(If(this.settings.inTangents,t),If(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;xc(this.settings)&&(Lf(this.settings.inTangents,t),Lf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){te("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&H0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o];if(c!==t[o+1]&&(o!==1||c!==t[0]))if(i)l=!0;else{let h=o*n,u=h-n,f=h+n;for(let p=0;p!==n;++p){let d=e[h+p];if(d!==e[u+p]||d!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=new this.constructor(this.name,t,e);return n.createInterpolant=this.createInterpolant,xc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function If(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function Lf(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ti.prototype.ValueTypeName="",ti.prototype.TimeBufferType=Float32Array,ti.prototype.ValueBufferType=Float32Array,ti.prototype.DefaultInterpolation=2301;var Vr=class extends ti{constructor(t,e,n){super(t,e,n)}};Vr.prototype.ValueTypeName="bool",Vr.prototype.ValueBufferType=Array,Vr.prototype.DefaultInterpolation=2300,Vr.prototype.InterpolantFactoryMethodLinear=void 0,Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="color";var Zc=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}};Zc.prototype.ValueTypeName="number";var Jc=class extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)je.slerpFlat(s,0,a,c-o,a,c,l);return s}},rl=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Jc(this.times,this.values,this.getValueSize(),t)}};rl.prototype.ValueTypeName="quaternion",rl.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends ti{constructor(t,e,n){super(t,e,n)}};kr.prototype.ValueTypeName="string",kr.prototype.ValueBufferType=Array,kr.prototype.DefaultInterpolation=2300,kr.prototype.InterpolantFactoryMethodLinear=void 0,kr.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends ti{constructor(t,e,n,i){super(t,e,n,i)}};$c.prototype.ValueTypeName="vector";var Kc=class{constructor(t,e,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],d=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zm=new Kc,Qc=class{constructor(t){this.manager=t!==void 0?t:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var za=class extends hn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},sl=class extends za{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pu=new qt,Nf=new w,Df=new w,al=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pu,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===2001||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Pu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mc=new w,Sc=new je,Vi=new w,Ha=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mc,Sc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,Sc,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mc,Sc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,Sc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gr=new w,Uf=new lt,Of=new lt,Nn=class extends Ha{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=2*Ta*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(.5*Ma*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Ta*Math.atan(Math.tan(.5*Ma*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gr.x,Gr.y).multiplyScalar(-t/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-t/Gr.z)}getViewSize(t,e){return this.getViewBounds(t,Uf,Of),e.subVectors(Of,Uf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(.5*Ma*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ou=class extends al{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}},Kr=class extends za{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ou}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Rs=class extends Ha{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fu=class extends al{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ol=class extends za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Fu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ll=class extends Ae{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var WS=new qt,XS=new qt,jS=new qt;var Ga=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nn(-90,1,t,e);i.layers=this.layers,this.add(i);let s=new Nn(-90,1,t,e);s.layers=this.layers,this.add(s);let a=new Nn(-90,1,t,e);a.layers=this.layers,this.add(a);let o=new Nn(-90,1,t,e);o.layers=this.layers,this.add(o);let l=new Nn(-90,1,t,e);l.layers=this.layers,this.add(l);let c=new Nn(-90,1,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(t!==2001)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let v=!1;v=t.isWebGLRenderer===!0?t.state.buffers.depth.getReversed():t.reversedDepthBuffer,t.setRenderTarget(n,0,i),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},th=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},cl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=t_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function t_(){this._document.hidden===!1&&this.reset()}var qS=new w,YS=new je,ZS=new w,JS=new w,$S=new w;var KS=new w,QS=new je,tb=new w,eb=new w;var e_=new RegExp("[\\[\\]\\.:\\/]","g"),qd="[^\\[\\]\\.:\\/]",n_="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",i_=/((?:WC+[\/:])*)/.source.replace("WC",qd),r_=/(WCOD+)?/.source.replace("WCOD",n_),s_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qd),a_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qd),o_=new RegExp("^"+i_+r_+s_+a_+"$"),l_=["material","materials","bones","map"],Bu=class{constructor(t,e,n){let i=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(e_,"")}static parseTrackName(t){let e=o_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);l_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void Qt("PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material)return void te("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void te("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[n]===void 0)return void te("PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(c!==void 0){if(t[c]===void 0)return void te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[c]}}let a=t[i];if(a===void 0)return void te("PropertyBinding: Trying to update property for track: "+e.nodeName+"."+i+" but it wasn't found.",t);let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return void te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Bu,ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray],ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nb=new Float32Array(1);var Qr=class extends Ca{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Ff=new qt,hl=class{constructor(t,e,n=0,i=1/0){this.ray=new Wr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(t,e=!0,n=[]){return zu(t,this,n,e),n.sort(Bf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)zu(t[i],this,n,e);return n.sort(Bf),n}};function Bf(r,t){return r.distance-t.distance}function zu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)zu(s[a],t,e,!0)}}var Qd=class Qd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Qd.prototype.isMatrix2=!0;var Hu=Qd,ib=new lt;var zf=new w,bc=new w,ya=new w,xa=new w,Iu=new w,c_=new w,h_=new w,ul=class{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){zf.subVectors(t,this.start),bc.subVectors(this.end,this.start);let n=bc.dot(bc);if(n===0)return 0;let i=bc.dot(zf)/n;return e&&(i=ae(i,0,1)),i}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=c_,n=h_){let i=10000000000000001e-32,s,a,o=this.start,l=t.start,c=this.end,h=t.end;ya.subVectors(c,o),xa.subVectors(h,l),Iu.subVectors(o,l);let u=ya.dot(ya),f=xa.dot(xa),p=xa.dot(Iu);if(u<=i&&f<=i)return e.copy(o),n.copy(l),e.distanceToSquared(n);if(u<=i)s=0,a=p/f,a=ae(a,0,1);else{let d=ya.dot(Iu);if(f<=i)a=0,s=ae(-d/u,0,1);else{let _=ya.dot(xa),v=u*f-_*_;s=v!==0?ae((_*p-d*f)/v,0,1):0,a=(_*s+p)/f,a<0?(a=0,s=ae(-d/u,0,1)):a>1&&(a=1,s=ae((_-d)/u,0,1))}}return e.copy(o).addScaledVector(ya,s),n.copy(l).addScaledVector(xa,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},rb=new w;var sb=new w,ab=new qt,ob=new qt;var lb=new w,cb=new It,hb=new It;var ub=new w,db=new w,pb=new w;var fb=new w,mb=new Ha;var gb=new Tn;var vb=new w;function Yd(r,t,e,n){let i=u_(n);switch(e){case 1021:return r*t;case 1028:case 1029:return r*t/i.components*i.byteLength;case 1030:case 1031:return r*t*2/i.components*i.byteLength;case 1022:return r*t*3/i.components*i.byteLength;case 1023:case 1033:return r*t*4/i.components*i.byteLength;case 33776:case 33777:case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(t,8)/2;case 37809:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(t/4)*8}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u_(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ag(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function g_(r){let t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);let n=t.get(e);n&&(r.deleteBuffer(n.buffer),t.delete(e))},update:function(e,n){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let s=t.get(e);return void((!s||s.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}let i=t.get(e);if(i===void 0)t.set(e,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(e,n));else if(i.version<e.version){if(i.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,f)=>u.start-f.start);let h=0;for(let u=1;u<c.length;u++){let f=c[h],p=c[u];p.start<=f.start+f.count+1?f.count=Math.max(f.count,p.start+p.count-f.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,f=c.length;u<f;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,e,n),i.version=e.version}}}}var v_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,__=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,my=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Py=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:v_,alphahash_pars_fragment:__,alphamap_fragment:y_,alphamap_pars_fragment:x_,alphatest_fragment:M_,alphatest_pars_fragment:S_,aomap_fragment:b_,aomap_pars_fragment:T_,batching_pars_vertex:E_,batching_vertex:w_,begin_vertex:A_,beginnormal_vertex:R_,bsdfs:C_,iridescence_fragment:P_,bumpmap_pars_fragment:I_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:N_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:U_,color_fragment:O_,color_pars_fragment:F_,color_pars_vertex:B_,color_vertex:z_,common:H_,defaultnormal_vertex:G_,displacementmap_pars_vertex:V_,displacementmap_vertex:k_,emissivemap_fragment:W_,emissivemap_pars_fragment:X_,colorspace_fragment:j_,colorspace_pars_fragment:q_,envmap_fragment:Y_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:J_,envmap_pars_vertex:$_,envmap_physical_pars_fragment:ly,envmap_vertex:K_,fog_vertex:Q_,fog_pars_vertex:ty,fog_fragment:ey,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:ay,lights_pars_begin:oy,lights_toon_fragment:cy,lights_toon_pars_fragment:hy,lights_phong_fragment:uy,lights_phong_pars_fragment:dy,lights_physical_fragment:py,lights_physical_pars_fragment:fy,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:vy,lightprobes_pars_fragment:_y,logdepthbuf_fragment:yy,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:Sy,map_fragment:by,map_pars_fragment:Ty,map_particle_fragment:Ey,map_particle_pars_fragment:wy,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Ry,morphinstance_vertex:Cy,morphcolor_vertex:Py,morphnormal_vertex:Iy,morphtarget_pars_vertex:Ly,morphtarget_vertex:Ny,normal_fragment_begin:Dy,normal_fragment_maps:Uy,normal_pars_fragment:Oy,normal_pars_vertex:Fy,normal_vertex:By,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:ky,opaque_fragment:Wy,packing:Xy,premultiplied_alpha_fragment:jy,project_vertex:qy,dithering_fragment:Yy,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Qy,shadowmap_vertex:tx,shadowmask_pars_fragment:ex,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:rx,skinnormal_vertex:sx,specularmap_fragment:ax,specularmap_pars_fragment:ox,tonemapping_fragment:lx,tonemapping_pars_fragment:cx,transmission_fragment:hx,transmission_pars_fragment:ux,uv_pars_fragment:dx,uv_pars_vertex:px,uv_vertex:fx,worldpos_vertex:mx,background_vert:gx,background_frag:vx,backgroundCube_vert:_x,backgroundCube_frag:yx,cube_vert:xx,cube_frag:Mx,depth_vert:Sx,depth_frag:bx,distance_vert:Tx,distance_frag:Ex,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Rx,linedashed_frag:Cx,meshbasic_vert:Px,meshbasic_frag:Ix,meshlambert_vert:Lx,meshlambert_frag:Nx,meshmatcap_vert:Dx,meshmatcap_frag:Ux,meshnormal_vert:Ox,meshnormal_frag:Fx,meshphong_vert:Bx,meshphong_frag:zx,meshphysical_vert:Hx,meshphysical_frag:Gx,meshtoon_vert:Vx,meshtoon_frag:kx,points_vert:Wx,points_frag:Xx,shadow_vert:jx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:Zx},Rt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Vn={basic:{uniforms:On([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:On([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:On([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:On([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:On([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new It(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:On([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:On([Rt.points,Rt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:On([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:On([Rt.common,Rt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:On([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:On([Rt.sprite,Rt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:On([Rt.common,Rt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:On([Rt.lights,Rt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Vn.physical={uniforms:On([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var mh={r:0,b:0,g:0},Jx=new qt,og=new re;function $x(r,t,e,n,i,s){let a=new It(0),o,l,c=i===!0?0:1,h=null,u=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let m=_.backgroundBlurriness>0;v=t.get(v,m)}return v}function d(_,v){_.getRGB(mh,jd(r)),e.buffers.color.setClear(mh.r,mh.g,mh.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(a,c)},render:function(_){let v=!1,m=p(_);m===null?d(a,c):m&&m.isColor&&(d(m,1),v=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(_,v){let m=p(v);m&&m.isCubeTexture?(l===void 0&&(l=new xe(new Un(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Ds(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(v.backgroundRotation)).transpose(),m.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(og),l.material.toneMapped=ye.getTransfer(m.colorSpace)!==Ie,h===m&&u===m.version&&f===r.toneMapping||(l.material.needsUpdate=!0,h=m,u=m.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(o===void 0&&(o=new xe(new ii(2,2),new Fe({name:"BackgroundMaterial",uniforms:Ds(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=m,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=ye.getTransfer(m.colorSpace)!==Ie,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),h===m&&u===m.version&&f===r.toneMapping||(o.material.needsUpdate=!0,h=m,u=m.version,f=r.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Kx(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(m){return r.bindVertexArray(m)}function l(m){return r.deleteVertexArray(m)}function c(m){let x=[],y=[],C=[];for(let E=0;E<e;E++)x[E]=0,y[E]=0,C[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:y,attributeDivisors:C,object:m,attributes:{},index:null}}function h(){let m=s.newAttributes;for(let x=0,y=m.length;x<y;x++)m[x]=0}function u(m){f(m,0)}function f(m,x){let y=s.newAttributes,C=s.enabledAttributes,E=s.attributeDivisors;y[m]=1,C[m]===0&&(r.enableVertexAttribArray(m),C[m]=1),E[m]!==x&&(r.vertexAttribDivisor(m,x),E[m]=x)}function p(){let m=s.newAttributes,x=s.enabledAttributes;for(let y=0,C=x.length;y<C;y++)x[y]!==m[y]&&(r.disableVertexAttribArray(y),x[y]=0)}function d(m,x,y,C,E,b,P){P===!0?r.vertexAttribIPointer(m,x,y,E,b):r.vertexAttribPointer(m,x,y,C,E,b)}function _(){v(),a=!0,s!==i&&(s=i,o(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(m,x,y,C,E){let b=!1,P=(function(B,H,D,Q){let G=Q.wireframe===!0,z=n[H.id];z===void 0&&(z={},n[H.id]=z);let Z=B.isInstancedMesh===!0?B.id:0,ut=z[Z];ut===void 0&&(ut={},z[Z]=ut);let nt=ut[D.id];nt===void 0&&(nt={},ut[D.id]=nt);let W=nt[G];return W===void 0&&(W=c(r.createVertexArray()),nt[G]=W),W})(m,C,y,x);s!==P&&(s=P,o(s.object)),b=(function(B,H,D,Q){let G=s.attributes,z=H.attributes,Z=0,ut=D.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let W=G[nt],et=z[nt];if(et===void 0&&(nt==="instanceMatrix"&&B.instanceMatrix&&(et=B.instanceMatrix),nt==="instanceColor"&&B.instanceColor&&(et=B.instanceColor)),W===void 0||W.attribute!==et||et&&W.data!==et.data)return!0;Z++}return s.attributesNum!==Z||s.index!==Q})(m,C,y,E),b&&(function(B,H,D,Q){let G={},z=H.attributes,Z=0,ut=D.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let W=z[nt];W===void 0&&(nt==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),nt==="instanceColor"&&B.instanceColor&&(W=B.instanceColor));let et={};et.attribute=W,W&&W.data&&(et.data=W.data),G[nt]=et,Z++}s.attributes=G,s.attributesNum=Z,s.index=Q})(m,C,y,E),E!==null&&t.update(E,r.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,(function(B,H,D,Q){h();let G=Q.attributes,z=D.getAttributes(),Z=H.defaultAttributeValues;for(let ut in z){let nt=z[ut];if(nt.location>=0){let W=G[ut];if(W===void 0&&(ut==="instanceMatrix"&&B.instanceMatrix&&(W=B.instanceMatrix),ut==="instanceColor"&&B.instanceColor&&(W=B.instanceColor)),W!==void 0){let et=W.normalized,vt=W.itemSize,Nt=t.get(W);if(Nt===void 0)continue;let Ft=Nt.buffer,ct=Nt.type,xt=Nt.bytesPerElement,Ct=ct===r.INT||ct===r.UNSIGNED_INT||W.gpuType===$u;if(W.isInterleavedBufferAttribute){let St=W.data,Bt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,j=W.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let kt=0;kt<nt.locationSize;kt++)f(nt.location+kt,St.meshPerAttribute);B.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let kt=0;kt<nt.locationSize;kt++)u(nt.location+kt);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let kt=0;kt<nt.locationSize;kt++)d(nt.location+kt,vt/nt.locationSize,ct,et,Bt*xt,(j+vt/nt.locationSize*kt)*xt,Ct)}else{if(W.isInstancedBufferAttribute){for(let St=0;St<nt.locationSize;St++)f(nt.location+St,W.meshPerAttribute);B.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let St=0;St<nt.locationSize;St++)u(nt.location+St);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let St=0;St<nt.locationSize;St++)d(nt.location+St,vt/nt.locationSize,ct,et,vt*xt,vt/nt.locationSize*St*xt,Ct)}}else if(Z!==void 0){let et=Z[ut];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(nt.location,et);break;case 3:r.vertexAttrib3fv(nt.location,et);break;case 4:r.vertexAttrib4fv(nt.location,et);break;default:r.vertexAttrib1fv(nt.location,et)}}}}p()})(m,x,y,C),E!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))},reset:_,resetDefaultState:v,dispose:function(){_();for(let m in n){let x=n[m];for(let y in x){let C=x[y];for(let E in C){let b=C[E];for(let P in b)l(b[P].object),delete b[P];delete C[E]}}delete n[m]}},releaseStatesOfGeometry:function(m){if(n[m.id]===void 0)return;let x=n[m.id];for(let y in x){let C=x[y];for(let E in C){let b=C[E];for(let P in b)l(b[P].object),delete b[P];delete C[E]}}delete n[m.id]},releaseStatesOfObject:function(m){for(let x in n){let y=n[x],C=m.isInstancedMesh===!0?m.id:0,E=y[C];if(E!==void 0){for(let b in E){let P=E[b];for(let B in P)l(P[B].object),delete P[B];delete E[b]}delete y[C],Object.keys(y).length===0&&delete n[x]}}},releaseStatesOfProgram:function(m){for(let x in n){let y=n[x];for(let C in y){let E=y[C];if(E[m.id]===void 0)continue;let b=E[m.id];for(let P in b)l(b[P].object),delete b[P];delete E[m.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Qx(r,t,e){let n;this.setMode=function(i){n=i},this.render=function(i,s){r.drawArrays(n,i,s),e.update(s,n,1)},this.renderInstances=function(i,s,a){a!==0&&(r.drawArraysInstanced(n,i,s,a),e.update(s,n,a))},this.renderMultiDraw=function(i,s,a){if(a===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,i,0,s,0,a);let o=0;for(let l=0;l<a;l++)o+=s[l];e.update(o,n,1)}}function t1(r,t,e,n){let i;function s(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp",o=s(a);o!==a&&(Qt("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=e.logarithmicDepthBuffer===!0&&l===!1;return e.reversedDepthBuffer===!0&&l===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&l===!0&&Qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled."),{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let h=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(h){return h===yr||n.convert(h)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(h!==Ai&&h!==_r&&!u&&n.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function e1(r){let t=this,e=null,n=0,i=!1,s=!1,a=new wi,o=new re,l={value:null,needsUpdate:!1};function c(h,u,f,p){let d=h!==null?h.length:0,_=null;if(d!==0){if(_=l.value,p!==!0||_===null){let v=f+4*d,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<v)&&(_=new Float32Array(v));for(let x=0,y=f;x!==d;++x,y+=4)a.copy(h[x]).applyMatrix4(m,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=c(h,u,0)},this.setState=function(h,u,f){let p=h.clippingPlanes,d=h.clipIntersection,_=h.clipShadows,v=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0})();else{let m=s?0:n,x=4*m,y=v.clippingState||null;l.value=y,y=c(p,u,x,f);for(let C=0;C!==x;++C)y[C]=e[C];v.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=m}}}og.set(-1,0,0,0,1,0,0,0,1);var El=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Un(5,5,5),s=new Fe({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:gr});s.uniforms.tEquirect.value=e;let a=new xe(i,s),o=e.minFilter;return e.minFilter===es&&(e.minFilter=gi),new Ga(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};var n1=new w,i1=new It,vh=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ga(1,10,null),this._boxMesh=new xe(new Un(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=n1}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,d=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(i1));let v=new Ga(n,i,h);return v.position.copy(o),v.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=d,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(256,Vd(t))}_fromTexture(t,e){t.mapping===xl||t.mapping===Xa?this._setSize(t.image.length===0?256:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Hm(t,!1,!1),n=Math.log2(t)-3;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===xl||t.mapping===Xa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=r1(),this._integrationMaterial=s1());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/16);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-3)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(256*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=a1());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function Hm(r,t,e){return new El(r,{minFilter:es,generateMipmaps:t,type:_n,colorSpace:ph,depthBuffer:e})}function wl(r,t,e){return new Fe({name:r,uniforms:t,vertexShader:ge.cube_vert,fragmentShader:e,side:En,blending:gr,depthTest:!1,depthWrite:!1})}function r1(){return wl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES 256u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function s1(){return wl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:16}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function a1(){return wl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES 20
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gm(){return wl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vm(){return wl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function o1(r){let t=new WeakMap,e=new WeakMap,n=null;function i(o,l){return l===ih?o.mapping=xl:l===rh&&(o.mapping=Xa),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let h=c.mapping,u=h===ih||h===rh,f=h===xl||h===Xa;if(u||f){let p=e.get(c),d=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return n===null&&(n=new vh(r)),p=u?n.fromEquirectangular(c,p):n.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{let _=c.image;return u&&_&&_.height>0||f&&_&&(function(v){let m=0,x=6;for(let y=0;y<x;y++)v[y]!==void 0&&m++;return m===x})(_)?(n===null&&(n=new vh(r)),p=u?n.fromEquirectangular(c):n.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===ih||h===rh){if(t.has(c))return i(t.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let f=new El(u.height);return f.fromEquirectangularTexture(r,c),t.set(c,f),c.addEventListener("dispose",s),i(f.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function l1(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&No("WebGLRenderer: "+n+" extension not supported."),i}}}function c1(r,t,e,n){let i={},s=new WeakMap,a=new FinalizationRegistry(h=>delete i[h]);function o(h){l(h.target)}function l(h){h.index!==null&&t.remove(h.index);for(let f in h.attributes)t.remove(h.attributes[f]);h.removeEventListener("dispose",o),delete i[h.id],a.unregister(h);let u=s.get(h);u&&(t.remove(u),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function c(h){let u=h.index,f=h.attributes.position,p=0;if(f===void 0)return;let d=u!==null?u.array.length:f.array.length/3-1,_=new(f.count>=65535?Go:Ho)(6*Math.ceil(d/3),1),v=_.array;if(u!==null){let x=u.array;p=u.version;for(let y=0,C=0;y<d;y+=3){let E=x[y+0],b=x[y+1],P=x[y+2];v[C++]=E,v[C++]=b,v[C++]=b,v[C++]=P,v[C++]=P,v[C++]=E}}else{p=f.version;for(let x=0,y=0;x<d;x+=3){let C=x+0,E=x+1,b=x+2;v[y++]=C,v[y++]=E,v[y++]=E,v[y++]=b,v[y++]=b,v[y++]=C}}_.version=p;let m=s.get(h);m&&t.remove(m),s.set(h,_)}return{get:function(h,u){return i[u.id]!==void 0||(u.addEventListener("dispose",o),i[u.id]=new WeakRef(u),a.register(u,u.id,u),e.memory.geometries++),u},update:function(h){let u=h.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)},getWireframeAttribute:function(h){let u=s.get(h);if(u){let f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return s.get(h)},dispose:function(){for(let h in i){let u=i[h].deref();u!==void 0&&l(u)}}}}function h1(r,t,e){let n,i,s;this.setMode=function(a){n=a},this.setIndex=function(a){i=a.type,s=a.bytesPerElement},this.render=function(a,o){r.drawElements(n,o,i,a*s),e.update(o,n,1)},this.renderInstances=function(a,o,l){l!==0&&(r.drawElementsInstanced(n,o,i,a*s,l),e.update(o,n,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,o,0,i,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];e.update(c,n,1)}}function u1(r){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,n,i){switch(t.calls++,n){case r.TRIANGLES:t.triangles+=i*(e/3);break;case r.LINES:t.lines+=i*(e/2);break;case r.LINE_STRIP:t.lines+=i*(e-1);break;case r.LINE_LOOP:t.lines+=i*e;break;case r.POINTS:t.points+=i*e;break;default:te("WebGLInfo: Unknown draw mode:",n)}}}}function d1(r,t,e){let n=new WeakMap,i=new be;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),d===!0&&(x=3);let y=a.attributes.position.count*x,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*h),b=new zo(E,y,C,h);b.type=_r,b.needsUpdate=!0;let P=4*x;for(let B=0;B<h;B++){let H=_[B],D=v[B],Q=m[B],G=y*C*4*B;for(let z=0;z<H.count;z++){let Z=z*P;f===!0&&(i.fromBufferAttribute(H,z),E[G+Z+0]=i.x,E[G+Z+1]=i.y,E[G+Z+2]=i.z,E[G+Z+3]=0),p===!0&&(i.fromBufferAttribute(D,z),E[G+Z+4]=i.x,E[G+Z+5]=i.y,E[G+Z+6]=i.z,E[G+Z+7]=0),d===!0&&(i.fromBufferAttribute(Q,z),E[G+Z+8]=i.x,E[G+Z+9]=i.y,E[G+Z+10]=i.z,E[G+Z+11]=Q.itemSize===4?i.w:1)}}u={count:h,texture:b,size:new lt(y,C)},n.set(a,u),a.addEventListener("dispose",function B(){b.dispose(),n.delete(a),a.removeEventListener("dispose",B)})}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,e);else{let f=0;for(let d=0;d<l.length;d++)f+=l[d];let p=a.morphTargetsRelative?1:1-f;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function p1(r,t,e,n,i){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),n.releaseStatesOfObject(l),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:function(o){let l=i.render.frame,c=o.geometry,h=t.get(o,c);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(e.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,r.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}var f1={[pl]:"LINEAR_TONE_MAPPING",[fl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function m1(r,t,e,n,i,s){let a=new Qe(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ae;h.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new jt([0,2,0,0,2,0],2));let u=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new xe(h,u),p=new Rs(-1,1,1,-1,0,1),d,_=null,v=null,m=!1,x=null,y=[],C=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let P=0;P<y.length;P++){let B=y[P];B.setSize&&B.setSize(E,b)}},this.setEffects=function(E){y=E,C=y.length>0&&y[0].isRenderPass===!0;let b=a.width,P=a.height;y.length>0&&o===null&&(o=new Qe(b,P,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(b,P,{type:_n,depthBuffer:!1,stencilBuffer:!1}));let B=i===!0&&y.some(H=>H.needsDepthTexture===!0);B!==(a.depthTexture!==null)&&(B===!0&&c===null&&(c=new fr(b,P),s===!0&&(c.format=is,c.type=Ps)),a.dispose(),a.depthTexture=B?c:null,a.resolveDepthBuffer=B,a.storeMultisampledDepthBuffer=B);for(let H=0;H<y.length;H++){let D=y[H];D.setSize&&D.setSize(b,P),B&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(E,b){if(m||E.toneMapping===mi&&y.length===0)return!1;if(x=b,b!==null){let P=b.width,B=b.height;a.width===P&&a.height===B||this.setSize(P,B)}return C===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=mi,!0},this.hasRenderPass=function(){return C},this.end=function(E,b){E.toneMapping=d,m=!0;let P=a,B=o;for(let H=0;H<y.length;H++){let D=y[H];D.enabled!==!1&&(D.render(E,B,P,b),D.needsSwap!==!1&&(P=B,B=B===o?l:o))}if(_!==E.outputColorSpace||v!==E.toneMapping){_=E.outputColorSpace,v=E.toneMapping,u.defines={},ye.getTransfer(_)===Ie&&(u.defines.SRGB_TRANSFER="");let H=f1[v];H&&(u.defines[H]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=P.texture,E.setRenderTarget(x),E.render(f,p),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var lg=new Gn,cg=new fr(1,1),hg=new jo(1),ug=new zo,dg=new wc,pg=new Xo,km=[],Wm=[],Xm=new Float32Array(16),jm=new Float32Array(9),qm=new Float32Array(4);function Za(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=km[i];if(s===void 0&&(s=new Float32Array(i),km[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function un(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function dn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function yh(r,t){let e=Wm[t];e===void 0&&(e=new Int32Array(t),Wm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function g1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function v1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2fv(this.addr,t),dn(e,t)}}function _1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)e[0]===t.r&&e[1]===t.g&&e[2]===t.b||(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;r.uniform3fv(this.addr,t),dn(e,t)}}function y1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4fv(this.addr,t),dn(e,t)}}function x1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;qm.set(n),r.uniformMatrix2fv(this.addr,!1,qm),dn(e,n)}}function M1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;jm.set(n),r.uniformMatrix3fv(this.addr,!1,jm),dn(e,n)}}function S1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Xm.set(n),r.uniformMatrix4fv(this.addr,!1,Xm),dn(e,n)}}function b1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function T1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2iv(this.addr,t),dn(e,t)}}function E1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3iv(this.addr,t),dn(e,t)}}function w1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4iv(this.addr,t),dn(e,t)}}function A1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function R1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2uiv(this.addr,t),dn(e,t)}}function C1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3uiv(this.addr,t),dn(e,t)}}function P1(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4uiv(this.addr,t),dn(e,t)}}function xh(r){return r.version===0&&(r.compareFunction=Fd,r.needsUpdate=!0),r}function I1(r,t,e){let n=this.cache,i=e.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),s=this.type===r.SAMPLER_2D_SHADOW?xh(cg):lg,e.setTexture2D(t||s,i)}function L1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dg,i)}function N1(r,t,e){let n=this.cache,i=e.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),s=this.type===r.SAMPLER_CUBE_SHADOW?xh(hg):pg,e.setTextureCube(t||s,i)}function D1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ug,i)}function U1(r){switch(r){case 5126:return g1;case 35664:return v1;case 35665:return _1;case 35666:return y1;case 35674:return x1;case 35675:return M1;case 35676:return S1;case 5124:case 35670:return b1;case 35667:case 35671:return T1;case 35668:case 35672:return E1;case 35669:case 35673:return w1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return D1}}function O1(r,t){r.uniform1fv(this.addr,t)}function F1(r,t){let e=Za(t,this.size,2);r.uniform2fv(this.addr,e)}function B1(r,t){let e=Za(t,this.size,3);r.uniform3fv(this.addr,e)}function z1(r,t){let e=Za(t,this.size,4);r.uniform4fv(this.addr,e)}function H1(r,t){let e=Za(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function G1(r,t){let e=Za(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function V1(r,t){let e=Za(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function k1(r,t){r.uniform1iv(this.addr,t)}function W1(r,t){r.uniform2iv(this.addr,t)}function X1(r,t){r.uniform3iv(this.addr,t)}function j1(r,t){r.uniform4iv(this.addr,t)}function q1(r,t){r.uniform1uiv(this.addr,t)}function Y1(r,t){r.uniform2uiv(this.addr,t)}function Z1(r,t){r.uniform3uiv(this.addr,t)}function J1(r,t){r.uniform4uiv(this.addr,t)}function $1(r,t,e){let n=this.cache,i=t.length,s=yh(e,i),a;un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s)),a=this.type===r.SAMPLER_2D_SHADOW?xh(cg):lg;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function K1(r,t,e){let n=this.cache,i=t.length,s=yh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dg,s[a])}function Q1(r,t,e){let n=this.cache,i=t.length,s=yh(e,i),a;un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s)),a=this.type===r.SAMPLER_CUBE_SHADOW?xh(hg):pg;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,s[o])}function tM(r,t,e){let n=this.cache,i=t.length,s=yh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ug,s[a])}function eM(r){switch(r){case 5126:return O1;case 35664:return F1;case 35665:return B1;case 35666:return z1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return j1;case 5125:return q1;case 36294:return Y1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return tM}}var np=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U1(e.type)}},ip=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}},rp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},tp=/(\w+)(\])?(\[|\.)?/g;function Ym(r,t){r.seq.push(t),r.map[t.id]=t}function nM(r,t,e){let n=r.name,i=n.length;for(tp.lastIndex=0;;){let s=tp.exec(n),a=tp.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Ym(e,c===void 0?new np(o,r,t):new ip(o,r,t));break}{let h=e.map[o];h===void 0&&(h=new rp(o),Ym(e,h)),e=h}}}var Ya=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a);nM(o,t.getUniformLocation(e,o.name),this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Zm(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var iM=0;function rM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Jm=new re;function sM(r){ye._getMatrix(Jm,ye.workingColorSpace,r);let t=`mat3( ${Jm.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(r)){case Dd:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $m(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=(r.getShaderInfoLog(t)||"").trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+rM(r.getShaderSource(t),a)}return i}function aM(r,t){let e=sM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var oM={[pl]:"Linear",[fl]:"Reinhard",[ml]:"Cineon",[gl]:"ACESFilmic",[_l]:"AgX",[yl]:"Neutral",[vl]:"Custom"};function lM(r,t){let e=oM[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gh=new w;function cM(){return ye.getLuminanceCoefficients(gh),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${gh.x.toFixed(4)}, ${gh.y.toFixed(4)}, ${gh.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function uM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Tl(r){return r!==""}function Km(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(pM,fM)}function fM(r,t){let e=ge[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return sp(e)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(r){return r.replace(mM,gM)}function gM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function eg(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var vM={[Cs]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function _M(r){return vM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yM={[Xa]:"ENVMAP_MODE_REFRACTION"};function xM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var MM={[cm]:"ENVMAP_BLENDING_MULTIPLY",[hm]:"ENVMAP_BLENDING_MIX",[um]:"ENVMAP_BLENDING_ADD"};function SM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MM[r.combine]||"ENVMAP_BLENDING_NONE"}function bM(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=_M(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xM(e),u=SM(e),f=hM(e),p=uM(s),d=i.createProgram(),_,v,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tl).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Tl).join(`
`),v.length>0&&(v+=`
`)):(_=[eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),v=[eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ge.tonemapping_pars_fragment:"",e.toneMapping!==mi?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,aM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Tl).join(`
`)),a=sp(a),a=Km(a,e),a=Qm(a,e),o=sp(o),o=Km(o,e),o=Qm(o,e),a=tg(a),o=tg(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",e.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=m+_+a,y=m+v+o,C=Zm(i,i.VERTEX_SHADER,x),E=Zm(i,i.FRAGMENT_SHADER,y);function b(D){if(r.debug.checkShaderErrors){let Q=i.getProgramInfoLog(d)||"",G=i.getShaderInfoLog(C)||"",z=i.getShaderInfoLog(E)||"",Z=Q.trim(),ut=G.trim(),nt=z.trim(),W=!0,et=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,d,C,E);else{let vt=$m(i,C,"vertex"),Nt=$m(i,E,"fragment");te("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+vt+`
`+Nt)}else Z!==""?Qt("WebGLProgram: Program Info Log:",Z):ut!==""&&nt!==""||(et=!1);et&&(D.diagnostics={runnable:W,programLog:Z,vertexShader:{log:ut,prefix:_},fragmentShader:{log:nt,prefix:v}})}i.deleteShader(C),i.deleteShader(E),P=new Ya(i,d),B=dM(i,d)}let P,B;i.attachShader(d,C),i.attachShader(d,E),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),this.getUniforms=function(){return P===void 0&&b(this),P},this.getAttributes=function(){return B===void 0&&b(this),B};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(d,37297)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=C,this.fragmentShader=E,this}var TM=0,ap=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new op(t),e.set(t,n)),n}},op=class{constructor(t){this.id=TM++,this.code=t,this.usedTimes=0}};function EM(r){return r===Is||r===uh||r===dh}function wM(r,t,e,n,i,s){let a=new wa,o=new ap,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(d){return l.add(d),d===0?"uv":`uv${d}`}return{getParameters:function(d,_,v,m,x,y){let C=m.fog,E=x.geometry,b=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?m.environment:null,P=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,B=t.get(d.envMap||b,P),H=f[d.type],D=n.precision;d.precision!==null&&(D=n.getMaxPrecision(d.precision),D!==d.precision&&Qt("WebGLProgram.getParameters:",d.precision,"not supported, using",D,"instead."));let Q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,G=Q!==void 0?Q.length:0,z,Z,ut,nt,W=0;if(E.morphAttributes.position!==void 0&&(W=1),E.morphAttributes.normal!==void 0&&(W=2),E.morphAttributes.color!==void 0&&(W=3),H){let Ee=Vn[H];z=Ee.vertexShader,Z=Ee.fragmentShader}else{z=d.vertexShader,Z=d.fragmentShader;let Ee=o.getVertexShaderStage(d),en=o.getFragmentShaderStage(d);o.update(d,Ee,en),ut=Ee.id,nt=en.id}let et=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Nt=x.isInstancedMesh===!0,Ft=x.isBatchedMesh===!0,ct=!!d.map,xt=!!d.matcap,Ct=!!B,St=Ct&&B.isPMREMTexture===!0,Bt=!!d.aoMap,j=!!d.lightMap,kt=!!d.bumpMap&&d.wireframe===!1,Kt=!!d.normalMap,mt=!!d.displacementMap,ht=!!d.emissiveMap,_t=!!d.metalnessMap,N=!!d.roughnessMap,ot=d.anisotropy>0,S=d.clearcoat>0,M=d.diffuseRoughness>0,I=d.dispersion>0,q=d.retroreflectivity>0,X=d.iridescence>0,J=d.sheen>0,rt=d.transmission>0,U=ot&&!!d.anisotropyMap,st=S&&!!d.clearcoatMap,Mt=S&&!!d.clearcoatNormalMap,wt=S&&!!d.clearcoatRoughnessMap,dt=M&&!!d.diffuseRoughnessMap,ee=X&&!!d.iridescenceMap,bt=X&&!!d.iridescenceThicknessMap,Ut=J&&!!d.sheenColorMap,Te=J&&!!d.sheenRoughnessMap,oe=!!d.specularMap,At=!!d.specularColorMap,$t=!!d.specularIntensityMap,ce=rt&&!!d.transmissionMap,Le=rt&&!!d.thicknessMap,Me=!!d.gradientMap,Re=!!d.alphaMap,He=d.alphaTest>0,Ht=!!d.alphaHash,ue=!!d.extensions,fe=mi;d.toneMapped&&(et!==null&&et.isXRRenderTarget!==!0||(fe=r.toneMapping));let tn=St?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Pe={shaderID:H,shaderType:d.type,shaderName:d.name,vertexShader:z,fragmentShader:Z,defines:d.defines,customVertexShaderID:ut,customFragmentShaderID:nt,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:D,batching:Ft,batchingColor:Ft&&x._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&x.instanceColor!==null,instancingMorph:Nt&&x.morphTexture!==null,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:ct,matcap:xt,envMap:Ct,envMapMode:Ct&&B.mapping,envMapPMREM:St,envMapMaxLod:St?tn.length-1:null,envMapSize:St?tn[0].width:null,aoMap:Bt,lightMap:j,bumpMap:kt,normalMap:Kt,displacementMap:mt,emissiveMap:ht,normalMapObjectSpace:Kt&&d.normalMapType===Sm,normalMapTangentSpace:Kt&&d.normalMapType===Nd,packedNormalMap:Kt&&d.normalMapType===Nd&&EM(d.normalMap.format),metalnessMap:_t,roughnessMap:N,anisotropy:ot,anisotropyMap:U,clearcoat:S,clearcoatMap:st,clearcoatNormalMap:Mt,clearcoatRoughnessMap:wt,diffuseRoughness:M,diffuseRoughnessMap:dt,dispersion:I,retroreflection:q,iridescence:X,iridescenceMap:ee,iridescenceThicknessMap:bt,sheen:J,sheenColorMap:Ut,sheenRoughnessMap:Te,specularMap:oe,specularColorMap:At,specularIntensityMap:$t,transmission:rt,transmissionMap:ce,thicknessMap:Le,gradientMap:Me,opaque:d.transparent===!1&&d.blending===dl&&d.alphaToCoverage===!1,alphaMap:Re,alphaTest:He,alphaHash:Ht,combine:d.combine,mapUv:ct&&p(d.map.channel),aoMapUv:Bt&&p(d.aoMap.channel),lightMapUv:j&&p(d.lightMap.channel),bumpMapUv:kt&&p(d.bumpMap.channel),normalMapUv:Kt&&p(d.normalMap.channel),displacementMapUv:mt&&p(d.displacementMap.channel),emissiveMapUv:ht&&p(d.emissiveMap.channel),metalnessMapUv:_t&&p(d.metalnessMap.channel),roughnessMapUv:N&&p(d.roughnessMap.channel),anisotropyMapUv:U&&p(d.anisotropyMap.channel),clearcoatMapUv:st&&p(d.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&p(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&p(d.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&p(d.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&p(d.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(d.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(d.sheenRoughnessMap.channel),specularMapUv:oe&&p(d.specularMap.channel),specularColorMapUv:At&&p(d.specularColorMap.channel),specularIntensityMapUv:$t&&p(d.specularIntensityMap.channel),transmissionMapUv:ce&&p(d.transmissionMap.channel),thicknessMapUv:Le&&p(d.thicknessMap.channel),alphaMapUv:Re&&p(d.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Kt||ot),vertexNormals:!!E.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!E.attributes.uv&&(ct||Re),fog:!!C,useFog:d.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||E.attributes.normal===void 0&&Kt===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:W,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:y.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:ct&&d.map.isVideoTexture===!0&&ye.getTransfer(d.map.colorSpace)===Ie,decodeVideoTextureEmissive:ht&&d.emissiveMap.isVideoTexture===!0&&ye.getTransfer(d.emissiveMap.colorSpace)===Ie,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===fi,flipSided:d.side===En,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:ue&&d.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&d.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe},getProgramCacheKey:function(d){let _=[];if(d.shaderID?_.push(d.shaderID):(_.push(d.customVertexShaderID),_.push(d.customFragmentShaderID)),d.defines!==void 0)for(let v in d.defines)_.push(v),_.push(d.defines[v]);return d.isRawShaderMaterial===!1&&((function(v,m){v.push(m.precision),v.push(m.outputColorSpace),v.push(m.envMapMode),v.push(m.envMapPMREM),v.push(m.envMapMaxLod),v.push(m.envMapSize),v.push(m.mapUv),v.push(m.alphaMapUv),v.push(m.lightMapUv),v.push(m.aoMapUv),v.push(m.bumpMapUv),v.push(m.normalMapUv),v.push(m.displacementMapUv),v.push(m.emissiveMapUv),v.push(m.metalnessMapUv),v.push(m.roughnessMapUv),v.push(m.anisotropyMapUv),v.push(m.clearcoatMapUv),v.push(m.clearcoatNormalMapUv),v.push(m.clearcoatRoughnessMapUv),v.push(m.diffuseRoughnessMapUv),v.push(m.iridescenceMapUv),v.push(m.iridescenceThicknessMapUv),v.push(m.sheenColorMapUv),v.push(m.sheenRoughnessMapUv),v.push(m.specularMapUv),v.push(m.specularColorMapUv),v.push(m.specularIntensityMapUv),v.push(m.transmissionMapUv),v.push(m.thicknessMapUv),v.push(m.combine),v.push(m.fogExp2),v.push(m.sizeAttenuation),v.push(m.morphTargetsCount),v.push(m.numSunLights),v.push(m.numDirLights),v.push(m.numPointLights),v.push(m.numSpotLights),v.push(m.numSpotLightMaps),v.push(m.numHemiLights),v.push(m.numRectAreaLights),v.push(m.numSunLightShadows),v.push(m.numDirLightShadows),v.push(m.numPointLightShadows),v.push(m.numSpotLightShadows),v.push(m.numSpotLightShadowsWithMaps),v.push(m.numLightProbes),v.push(m.numLightProbeGrids),v.push(m.shadowMapType),v.push(m.toneMapping),v.push(m.numClippingPlanes),v.push(m.numClipIntersection),v.push(m.depthPacking)})(_,d),(function(v,m){a.disableAll(),m.instancing&&a.enable(0),m.instancingColor&&a.enable(1),m.instancingMorph&&a.enable(2),m.matcap&&a.enable(3),m.envMap&&a.enable(4),m.normalMapObjectSpace&&a.enable(5),m.normalMapTangentSpace&&a.enable(6),m.clearcoat&&a.enable(7),m.iridescence&&a.enable(8),m.alphaTest&&a.enable(9),m.vertexColors&&a.enable(10),m.vertexAlphas&&a.enable(11),m.vertexUv1s&&a.enable(12),m.vertexUv2s&&a.enable(13),m.vertexUv3s&&a.enable(14),m.vertexTangents&&a.enable(15),m.anisotropy&&a.enable(16),m.alphaHash&&a.enable(17),m.batching&&a.enable(18),m.dispersion&&a.enable(19),m.retroreflection&&a.enable(24),m.diffuseRoughness&&a.enable(25),m.batchingColor&&a.enable(20),m.gradientMap&&a.enable(21),m.packedNormalMap&&a.enable(22),m.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reversedDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),m.numLightProbeGrids>0&&a.enable(22),m.hasPositionAttribute&&a.enable(23),v.push(a.mask)})(_,d),_.push(r.outputColorSpace)),_.push(d.customProgramCacheKey),_.join()},getUniforms:function(d){let _=f[d.type],v;if(_){let m=Vn[_];v=vi.clone(m.uniforms)}else v=d.uniforms;return v},acquireProgram:function(d,_){let v=h.get(_);return v!==void 0?++v.usedTimes:(v=new bM(r,_,d,i),c.push(v),h.set(_,v)),v},releaseProgram:function(d){if(--d.usedTimes===0){let _=c.indexOf(d);c[_]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}},releaseShaderCache:function(d){o.remove(d)},programs:c,dispose:function(){o.dispose()}}}function AM(){let r=new WeakMap;return{has:function(t){return r.has(t)},get:function(t){let e=r.get(t);return e===void 0&&(e={},r.set(t,e)),e},remove:function(t){r.delete(t)},update:function(t,e,n){r.get(t)[e]=n},dispose:function(){r=new WeakMap}}}function RM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ng(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ig(){let r=[],t=0,e=[],n=[],i=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,f){let p=r[t];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:f},r[t]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=f),t++,p}return{opaque:e,transmissive:n,transparent:i,init:function(){t=0,e.length=0,n.length=0,i.length=0},push:function(o,l,c,h,u,f,p){p.reversedDepth===!0&&(u=-u);let d=a(o,l,c,h,u,f);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):e.push(d)},unshift:function(o,l,c,h,u,f){let p=a(o,l,c,h,u,f);c.transmission>0?n.unshift(p):c.transparent===!0?i.unshift(p):e.unshift(p)},finish:function(){for(let o=t,l=r.length;o<l;o++){let c=r[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){e.length>1&&e.sort(o||RM),n.length>1&&n.sort(l||ng),i.length>1&&i.sort(l||ng)}}}function CM(){let r=new WeakMap;return{get:function(t,e){let n=r.get(t),i;return n===void 0?(i=new ig,r.set(t,[i])):e>=n.length?(i=new ig,n.push(i)):i=n[e],i},dispose:function(){r=new WeakMap}}}function PM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new w,color:new It};break;case"SpotLight":e={position:new w,direction:new w,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new w,halfWidth:new w,halfHeight:new w}}return r[t.id]=e,e}}}function IM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3}}return r[t.id]=e,e}}}var LM=0;function NM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function DM(r){let t=new PM,e=IM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new w);let i=new w,s=new qt,a=new qt;return{setup:function(o){let l=0,c=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,f=0,p=0,d=0,_=0,v=0,m=0,x=0,y=0,C=0,E=0,b=0,P=0,B=0;o.sort(NM);for(let D=0,Q=o.length;D<Q;D++){let G=o[D],z=G.color,Z=G.intensity,ut=G.distance,nt=null;if(G.shadow&&G.shadow.map&&(nt=G.shadow.map.texture.format===Is?G.shadow.map.texture:G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)l+=z.r*Z,c+=z.g*Z,h+=z.b*Z;else if(G.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(G.sh.coefficients[W],Z);B++}else if(G.isSunLight){let W=t.get(G);if(W.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let et=G.shadow,vt=e.get(G);vt.shadowIntensity=et.intensity,vt.shadowBias=et.bias,vt.shadowNormalBias=et.normalBias,vt.shadowRadius=et.radius,vt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[f]=vt,n.sunShadowMap[f]=nt;let Nt=et.getViewportCount();for(let Ft=0;Ft<Nt;Ft++)n.sunShadowMatrix[p+Ft]=et.getMatrix(Ft),n.sunShadowCascade[p+Ft]=et._cascadeData[Ft];p+=Nt,f++}n.sun[u]=W,u++}else if(G.isDirectionalLight){let W=t.get(G);if(W.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let et=G.shadow,vt=e.get(G);vt.shadowIntensity=et.intensity,vt.shadowBias=et.bias,vt.shadowNormalBias=et.normalBias,vt.shadowRadius=et.radius,vt.shadowMapSize=et.mapSize,n.directionalShadow[d]=vt,n.directionalShadowMap[d]=nt,n.directionalShadowMatrix[d]=G.shadow.matrix,y++}n.directional[d]=W,d++}else if(G.isSpotLight){let W=t.get(G);W.position.setFromMatrixPosition(G.matrixWorld),W.color.copy(z).multiplyScalar(Z),W.distance=ut,W.coneCos=Math.cos(G.angle),W.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),W.decay=G.decay,n.spot[v]=W;let et=G.shadow;if(G.map&&(n.spotLightMap[b]=G.map,b++,et.updateMatrices(G),G.castShadow&&P++),n.spotLightMatrix[v]=et.matrix,G.castShadow){let vt=e.get(G);vt.shadowIntensity=et.intensity,vt.shadowBias=et.bias,vt.shadowNormalBias=et.normalBias,vt.shadowRadius=et.radius,vt.shadowMapSize=et.mapSize,n.spotShadow[v]=vt,n.spotShadowMap[v]=nt,E++}v++}else if(G.isRectAreaLight){let W=t.get(G);W.color.copy(z).multiplyScalar(Z),W.halfWidth.set(.5*G.width,0,0),W.halfHeight.set(0,.5*G.height,0),n.rectArea[m]=W,m++}else if(G.isPointLight){let W=t.get(G);if(W.color.copy(G.color).multiplyScalar(G.intensity),W.distance=G.distance,W.decay=G.decay,G.castShadow){let et=G.shadow,vt=e.get(G);vt.shadowIntensity=et.intensity,vt.shadowBias=et.bias,vt.shadowNormalBias=et.normalBias,vt.shadowRadius=et.radius,vt.shadowMapSize=et.mapSize,vt.shadowCameraNear=et.camera.near,vt.shadowCameraFar=et.camera.far,n.pointShadow[_]=vt,n.pointShadowMap[_]=nt,n.pointShadowMatrix[_]=G.shadow.matrix,C++}n.point[_]=W,_++}else if(G.isHemisphereLight){let W=t.get(G);W.skyColor.copy(G.color).multiplyScalar(Z),W.groundColor.copy(G.groundColor).multiplyScalar(Z),n.hemi[x]=W,x++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let H=n.hash;H.sunLength===u&&H.directionalLength===d&&H.pointLength===_&&H.spotLength===v&&H.rectAreaLength===m&&H.hemiLength===x&&H.numSunShadows===f&&H.numDirectionalShadows===y&&H.numPointShadows===C&&H.numSpotShadows===E&&H.numSpotMaps===b&&H.numLightProbes===B||(n.sun.length=u,n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=x,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=p,n.sunShadowCascade.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=B,H.sunLength=u,H.directionalLength=d,H.pointLength=_,H.spotLength=v,H.rectAreaLength=m,H.hemiLength=x,H.numSunShadows=f,H.numDirectionalShadows=y,H.numPointShadows=C,H.numSpotShadows=E,H.numSpotMaps=b,H.numLightProbes=B,n.version=LM++)},setupView:function(o,l){let c=0,h=0,u=0,f=0,p=0,d=0,_=l.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let x=o[v];if(x.isSunLight){let y=n.sun[c];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(_),c++}else if(x.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(_),h++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(_),f++}else if(x.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(x.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(.5*x.width,0,0),y.halfHeight.set(0,.5*x.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),u++}else if(x.isHemisphereLight){let y=n.hemi[d];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(_),d++}}},state:n}}function rg(r){let t=new DM(r),e=[],n=[],i=[],s={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,e.length=0,n.length=0,i.length=0},state:s,setupLights:function(){t.setup(e),i.sort((a,o)=>a.priority-o.priority||a.id-o.id)},setupLightsView:function(a){t.setupView(e,a)},pushLight:function(a){a.isLightProbeGrid?i.push(a):e.push(a)},pushShadow:function(a){n.push(a)}}}function UM(r){let t=new WeakMap;return{get:function(e,n=0){let i=t.get(e),s;return i===void 0?(s=new rg(r),t.set(e,[s])):n>=i.length?(s=new rg(r),i.push(s)):s=i[n],s},dispose:function(){t=new WeakMap}}}var OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BM=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],zM=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],sg=new qt,bl=new w,ep=new w;function HM(r,t,e){let n=new pr,i=new lt,s=new lt,a=new be,o=new Vc,l=new kc,c={},h=e.maxTextureSize,u={[ka]:En,[En]:ka,[fi]:fi},f=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:OM,fragmentShader:FM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let d=new Ae;d.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(d,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let m=this.type;function x(b,P){let B=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Qe(i.x,i.y,{format:Is,type:_n}):b.mapPass.width===b.map.width&&b.mapPass.height===b.map.height||b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(P,null,B,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(P,null,B,p,_,null)}function y(b,P,B,H){let D=null,Q=B.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Q!==void 0)D=Q;else if(D=B.isPointLight===!0?l:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=D.uuid,z=P.uuid,Z=c[G];Z===void 0&&(Z={},c[G]=Z);let ut=Z[z];ut===void 0&&(ut=D.clone(),Z[z]=ut,P.addEventListener("dispose",E)),D=ut}return D.visible=P.visible,D.wireframe=P.wireframe,D.side=H===Va?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,B.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(r.properties.get(D).light=B),D}function C(b,P,B,H,D,Q){if(b.visible===!1)return;if(b.layers.test(D)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&Q===Va)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld);let z=t.update(b),Z=b.material;if(Array.isArray(Z)){let ut=z.groups;for(let nt=0,W=ut.length;nt<W;nt++){let et=ut[nt],vt=Z[et.materialIndex];if(vt&&vt.visible){let Nt=y(b,vt,H,Q);b.onBeforeShadow(r,b,P,B,z,Nt,et),r.renderBufferDirect(B,null,z,Nt,b,et),b.onAfterShadow(r,b,P,B,z,Nt,et)}}}else if(Z.visible){let ut=y(b,Z,H,Q);b.onBeforeShadow(r,b,P,B,z,ut,null),r.renderBufferDirect(B,null,z,ut,b,null),b.onAfterShadow(r,b,P,B,z,ut,null)}}let G=b.children;for(let z=0,Z=G.length;z<Z;z++)C(G[z],P,B,H,D,Q)}function E(b){b.target.removeEventListener("dispose",E);for(let P in c){let B=c[P],H=b.target.uuid;H in B&&(B[H].dispose(),delete B[H])}}this.render=function(b,P,B){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;this.type===Vf&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);let H=r.getRenderTarget(),D=r.getActiveCubeFace(),Q=r.getActiveMipmapLevel(),G=r.state;G.setBlending(gr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=m!==this.type;z&&P.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(ut=>ut.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,ut=b.length;Z<ut;Z++){let nt=b[Z],W=nt.shadow;if(W===void 0){Qt("WebGLShadowMap:",nt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let et=W.getFrameExtents();i.multiply(et),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,W.mapSize.y=s.y));let vt=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=vt,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Va){if(nt.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Qe(i.x,i.y,{format:Is,type:_n,minFilter:gi,magFilter:gi,generateMipmaps:!1}),W.map.texture.name=nt.name+".shadowMap",W.map.depthTexture=new fr(i.x,i.y,_r),W.map.depthTexture.name=nt.name+".shadowMapDepth",W.map.depthTexture.format=ja,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ts,W.map.depthTexture.magFilter=ts}else nt.isPointLight?(W.map=new El(i.x),W.map.depthTexture=new jo(i.x,ns)):(W.map=new Qe(i.x,i.y),W.map.depthTexture=new fr(i.x,i.y,ns)),W.map.depthTexture.name=nt.name+".shadowMap",W.map.depthTexture.format=ja,this.type===Cs?(W.map.depthTexture.compareFunction=vt?Od:Ud,W.map.depthTexture.minFilter=gi,W.map.depthTexture.magFilter=gi):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ts,W.map.depthTexture.magFilter=ts);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget===!0||W.map.width===i.x&&W.map.height===i.y||W.map.setSize(i.x,i.y);let Nt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();nt.isPointLight!==!0&&W.updateMatrices(nt,B);let Ft=4294967294&W.camera.layers.mask?W.camera.layers:B.layers;for(let ct=0;ct<Nt;ct++){let xt=W.getCamera(ct);if(nt.isPointLight){let Ct=W.camera,St=W.matrix,Bt=nt.distance||Ct.far;Bt!==Ct.far&&(Ct.far=Bt,Ct.updateProjectionMatrix()),bl.setFromMatrixPosition(nt.matrixWorld),Ct.position.copy(bl),ep.copy(Ct.position),ep.add(BM[ct]),Ct.up.copy(zM[ct]),Ct.lookAt(ep),Ct.updateMatrixWorld(),St.makeTranslation(-bl.x,-bl.y,-bl.z),sg.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),W._frustum.setFromProjectionMatrix(sg,Ct.coordinateSystem,Ct.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,ct),r.clear();else{ct===0&&(r.setRenderTarget(W.map),r.clear());let Ct=W.getViewport(ct);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),G.viewport(a)}n=W.getFrustum(ct),C(P,B,xt,nt,Ft,this.type)}W.isPointLightShadow!==!0&&this.type===Va&&x(W,B),W.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(H,D,Q)}}function GM(r,t){let e=new function(){let N=!1,ot=new be,S=null,M=new be(0,0,0,0);return{setMask:function(I){S===I||N||(r.colorMask(I,I,I,I),S=I)},setLocked:function(I){N=I},setClear:function(I,q,X,J,rt){rt===!0&&(I*=J,q*=J,X*=J),ot.set(I,q,X,J),M.equals(ot)===!1&&(r.clearColor(I,q,X,J),M.copy(ot))},reset:function(){N=!1,S=null,M.set(-1,0,0,0)}}},n=new function(){let N=!1,ot=!1,S=null,M=null,I=null;return{setReversed:function(q){if(ot!==q){let X=t.get("EXT_clip_control");q?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),ot=q;let J=I;I=null,this.setClear(J)}},getReversed:function(){return ot},setTest:function(q){q?St(r.DEPTH_TEST):Bt(r.DEPTH_TEST)},setMask:function(q){S===q||N||(r.depthMask(q),S=q)},setFunc:function(q){if(ot&&(q=Im[q]),M!==q){switch(q){case Wu:r.depthFunc(r.NEVER);break;case Xu:r.depthFunc(r.ALWAYS);break;case ju:r.depthFunc(r.LESS);break;case nh:r.depthFunc(r.LEQUAL);break;case qu:r.depthFunc(r.EQUAL);break;case Yu:r.depthFunc(r.GEQUAL);break;case Zu:r.depthFunc(r.GREATER);break;case Ju:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}M=q}},setLocked:function(q){N=q},setClear:function(q){I!==q&&(I=q,ot&&(q=1-q),r.clearDepth(q))},reset:function(){N=!1,S=null,M=null,I=null,ot=!1}}},i=new function(){let N=!1,ot=null,S=null,M=null,I=null,q=null,X=null,J=null,rt=null;return{setTest:function(U){N||(U?St(r.STENCIL_TEST):Bt(r.STENCIL_TEST))},setMask:function(U){ot===U||N||(r.stencilMask(U),ot=U)},setFunc:function(U,st,Mt){S===U&&M===st&&I===Mt||(r.stencilFunc(U,st,Mt),S=U,M=st,I=Mt)},setOp:function(U,st,Mt){q===U&&X===st&&J===Mt||(r.stencilOp(U,st,Mt),q=U,X=st,J=Mt)},setLocked:function(U){N=U},setClear:function(U){rt!==U&&(r.clearStencil(U),rt=U)},reset:function(){N=!1,ot=null,S=null,M=null,I=null,q=null,X=null,J=null,rt=null}}},s={},a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],f=null,p=!1,d=null,_=null,v=null,m=null,x=null,y=null,C=null,E=new It(0,0,0),b=0,P=!1,B=null,H=null,D=null,Q=null,G=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ut=0,nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Z=ut>=1):nt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Z=ut>=2);let W=null,et={},vt=r.getParameter(r.SCISSOR_BOX),Nt=r.getParameter(r.VIEWPORT),Ft=new be().fromArray(vt),ct=new be().fromArray(Nt);function xt(N,ot,S,M){let I=new Uint8Array(4),q=r.createTexture();r.bindTexture(N,q),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let X=0;X<S;X++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,M,0,r.RGBA,r.UNSIGNED_BYTE,I):r.texImage2D(ot+X,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,I);return q}let Ct={};function St(N){o[N]!==!0&&(r.enable(N),o[N]=!0)}function Bt(N){o[N]!==!1&&(r.disable(N),o[N]=!1)}Ct[r.TEXTURE_2D]=xt(r.TEXTURE_2D,r.TEXTURE_2D,1),Ct[r.TEXTURE_CUBE_MAP]=xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[r.TEXTURE_2D_ARRAY]=xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ct[r.TEXTURE_3D]=xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),e.setClear(0,0,0,1),n.setClear(1),i.setClear(0),St(r.DEPTH_TEST),n.setFunc(nh),mt(!1),ht(Gu),St(r.CULL_FACE),Kt(gr);let j={[Wa]:r.FUNC_ADD,[Wf]:r.FUNC_SUBTRACT,[Xf]:r.FUNC_REVERSE_SUBTRACT};j[jf]=r.MIN,j[qf]=r.MAX;let kt={[Yf]:r.ZERO,[Zf]:r.ONE,[Jf]:r.SRC_COLOR,[Kf]:r.SRC_ALPHA,[rm]:r.SRC_ALPHA_SATURATE,[nm]:r.DST_COLOR,[tm]:r.DST_ALPHA,[$f]:r.ONE_MINUS_SRC_COLOR,[Qf]:r.ONE_MINUS_SRC_ALPHA,[im]:r.ONE_MINUS_DST_COLOR,[em]:r.ONE_MINUS_DST_ALPHA,[sm]:r.CONSTANT_COLOR,[am]:r.ONE_MINUS_CONSTANT_COLOR,[om]:r.CONSTANT_ALPHA,[lm]:r.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,ot,S,M,I,q,X,J,rt,U){if(N!==gr){if(p===!1&&(St(r.BLEND),p=!0),N===kf)I=I||ot,q=q||S,X=X||M,ot===_&&I===x||(r.blendEquationSeparate(j[ot],j[I]),_=ot,x=I),S===v&&M===m&&q===y&&X===C||(r.blendFuncSeparate(kt[S],kt[M],kt[q],kt[X]),v=S,m=M,y=q,C=X),J.equals(E)!==!1&&rt===b||(r.blendColor(J.r,J.g,J.b,rt),E.copy(J),b=rt),d=N,P=!1;else if(N!==d||U!==P){if(_===Wa&&x===Wa||(r.blendEquation(r.FUNC_ADD),_=Wa,x=Wa),U)switch(N){case dl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vr:r.blendFunc(r.ONE,r.ONE);break;case Vu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ku:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:te("WebGLState: Invalid blending: ",N)}else switch(N){case dl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vu:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ku:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",N)}v=null,m=null,y=null,C=null,E.set(0,0,0),b=0,d=N,P=U}}else p===!0&&(Bt(r.BLEND),p=!1)}function mt(N){B!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),B=N)}function ht(N){N!==Hf?(St(r.CULL_FACE),N!==H&&(N===Gu?r.cullFace(r.BACK):N===Gf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Bt(r.CULL_FACE),H=N}function _t(N,ot,S){N?(St(r.POLYGON_OFFSET_FILL),Q===ot&&G===S||(Q=ot,G=S,n.getReversed()&&(ot=-ot,S=-S),r.polygonOffset(ot,S))):Bt(r.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:n,stencil:i},enable:St,disable:Bt,bindFramebuffer:function(N,ot){return c[N]!==ot&&(r.bindFramebuffer(N,ot),c[N]=ot,N===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=ot),N===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=ot),!0)},drawBuffers:function(N,ot){let S=u,M=!1;if(N){S=h.get(ot),S===void 0&&(S=[],h.set(ot,S));let I=N.textures;if(S.length!==I.length||S[0]!==r.COLOR_ATTACHMENT0){for(let q=0,X=I.length;q<X;q++)S[q]=r.COLOR_ATTACHMENT0+q;S.length=I.length,M=!0}}else S[0]!==r.BACK&&(S[0]=r.BACK,M=!0);M&&r.drawBuffers(S)},useProgram:function(N){return f!==N&&(r.useProgram(N),f=N,!0)},setBlending:Kt,setMaterial:function(N,ot){N.side===fi?Bt(r.CULL_FACE):St(r.CULL_FACE);let S=N.side===En;ot&&(S=!S),mt(S),N.blending===dl&&N.transparent===!1?Kt(gr):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),n.setFunc(N.depthFunc),n.setTest(N.depthTest),n.setMask(N.depthWrite),e.setMask(N.colorWrite);let M=N.stencilWrite;i.setTest(M),M&&(i.setMask(N.stencilWriteMask),i.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),i.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):Bt(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:mt,setCullFace:ht,setLineWidth:function(N){N!==D&&(Z&&r.lineWidth(N),D=N)},setPolygonOffset:_t,setScissorTest:function(N){N?St(r.SCISSOR_TEST):Bt(r.SCISSOR_TEST)},activeTexture:function(N){N===void 0&&(N=r.TEXTURE0+z-1),W!==N&&(r.activeTexture(N),W=N)},bindTexture:function(N,ot,S){S===void 0&&(S=W===null?r.TEXTURE0+z-1:W);let M=et[S];M===void 0&&(M={type:void 0,texture:void 0},et[S]=M),M.type===N&&M.texture===ot||(W!==S&&(r.activeTexture(S),W=S),r.bindTexture(N,ot||Ct[N]),M.type=N,M.texture=ot)},unbindTexture:function(){let N=et[W];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(N){te("WebGLState:",N)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(N){te("WebGLState:",N)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(N){te("WebGLState:",N)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(N){te("WebGLState:",N)}},pixelStorei:function(N,ot){l[N]!==ot&&(r.pixelStorei(N,ot),l[N]=ot)},getParameter:function(N){return l[N]!==void 0?l[N]:r.getParameter(N)},updateUBOMapping:function(N,ot){let S=a.get(ot);S===void 0&&(S=new WeakMap,a.set(ot,S));let M=S.get(N);M===void 0&&(M=r.getUniformBlockIndex(ot,N.name),r.uniformBlockBinding(ot,M,M),S.set(N,M))},uniformBlockBinding:function(N,ot,S){let M=a.get(ot).get(N);s[M]!==S&&(r.bindBufferBase(r.UNIFORM_BUFFER,M,S),s[M]=S)},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(N){te("WebGLState:",N)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(N){te("WebGLState:",N)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}},scissor:function(N){Ft.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ft.copy(N))},viewport:function(N){ct.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ct.copy(N))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},l={},W=null,et={},c={},s={},h=new WeakMap,u=[],f=null,p=!1,d=null,_=null,v=null,m=null,x=null,y=null,C=null,E=new It(0,0,0),b=0,P=!1,B=null,H=null,D=null,Q=null,G=null,Ft.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),e.reset(),n.reset(),i.reset()}}}function VM(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set,f,p=new WeakMap,d=new Set,_=new FinalizationRegistry(S=>d.delete(S)),v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,M){return v?new OffscreenCanvas(S,M):Fo("canvas")}function x(S,M,I){let q=1,X=ot(S);if((X.width>I||X.height>I)&&(q=I/Math.max(X.width,X.height)),q<1){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let J=Math.floor(q*X.width),rt=Math.floor(q*X.height);f===void 0&&(f=m(J,rt));let U=M?m(J,rt):f;return U.width=J,U.height=rt,U.getContext("2d").drawImage(S,0,0,J,rt),Qt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+J+"x"+rt+")."),U}return"data"in S&&Qt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),S}return S}function y(S){return S.generateMipmaps}function C(S){r.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?r.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(S,M,I,q,X,J=!1){if(S!==null){if(r[S]!==void 0)return r[S];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let rt;q&&(rt=t.get("EXT_texture_norm16"),rt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=M;if(M===r.RED&&(I===r.FLOAT&&(U=r.R32F),I===r.HALF_FLOAT&&(U=r.R16F),I===r.UNSIGNED_BYTE&&(U=r.R8),I===r.UNSIGNED_SHORT&&rt&&(U=rt.R16_EXT),I===r.SHORT&&rt&&(U=rt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(U=r.R8UI),I===r.UNSIGNED_SHORT&&(U=r.R16UI),I===r.UNSIGNED_INT&&(U=r.R32UI),I===r.BYTE&&(U=r.R8I),I===r.SHORT&&(U=r.R16I),I===r.INT&&(U=r.R32I)),M===r.RG&&(I===r.FLOAT&&(U=r.RG32F),I===r.HALF_FLOAT&&(U=r.RG16F),I===r.UNSIGNED_BYTE&&(U=r.RG8),I===r.UNSIGNED_SHORT&&rt&&(U=rt.RG16_EXT),I===r.SHORT&&rt&&(U=rt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(U=r.RG8UI),I===r.UNSIGNED_SHORT&&(U=r.RG16UI),I===r.UNSIGNED_INT&&(U=r.RG32UI),I===r.BYTE&&(U=r.RG8I),I===r.SHORT&&(U=r.RG16I),I===r.INT&&(U=r.RG32I)),M===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(U=r.RGB8UI),I===r.UNSIGNED_SHORT&&(U=r.RGB16UI),I===r.UNSIGNED_INT&&(U=r.RGB32UI),I===r.BYTE&&(U=r.RGB8I),I===r.SHORT&&(U=r.RGB16I),I===r.INT&&(U=r.RGB32I)),M===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(U=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(U=r.RGBA16UI),I===r.UNSIGNED_INT&&(U=r.RGBA32UI),I===r.BYTE&&(U=r.RGBA8I),I===r.SHORT&&(U=r.RGBA16I),I===r.INT&&(U=r.RGBA32I)),M===r.RGB&&(I===r.UNSIGNED_SHORT&&rt&&(U=rt.RGB16_EXT),I===r.SHORT&&rt&&(U=rt.RGB16_SNORM_EXT),I===r.UNSIGNED_INT_5_9_9_9_REV&&(U=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(U=r.R11F_G11F_B10F)),M===r.RGBA){let st=J?Dd:ye.getTransfer(X);I===r.FLOAT&&(U=r.RGBA32F),I===r.HALF_FLOAT&&(U=r.RGBA16F),I===r.UNSIGNED_BYTE&&(U=st===Ie?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT&&rt&&(U=rt.RGBA16_EXT),I===r.SHORT&&rt&&(U=rt.RGBA16_SNORM_EXT),I===r.UNSIGNED_SHORT_4_4_4_4&&(U=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(U=r.RGB5_A1)}return U!==r.R16F&&U!==r.R32F&&U!==r.RG16F&&U!==r.RG32F&&U!==r.RGBA16F&&U!==r.RGBA32F||t.get("EXT_color_buffer_float"),U}function P(S,M){let I;return S?M===null||M===ns||M===Ps?I=r.DEPTH24_STENCIL8:M===_r?I=r.DEPTH32F_STENCIL8:M===Sl&&(I=r.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ns||M===Ps?I=r.DEPTH_COMPONENT24:M===_r?I=r.DEPTH_COMPONENT32F:M===Sl&&(I=r.DEPTH_COMPONENT16),I}function B(S,M){return y(S)===!0||S.isFramebufferTexture&&S.minFilter!==ts&&S.minFilter!==gi?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function H(S){let M=new WeakRef(S);n.get(S).__ref=M,d.add(M),_.register(S,M,M)}function D(S){let M=n.get(S).__ref;M!==void 0&&(d.delete(M),_.unregister(M))}function Q(S){z(S.target)}function G(S){Z(S.target)}function z(S){S.removeEventListener("dispose",Q),D(S),(function(M){let I=n.get(M);if(I.__webglInit===void 0)return;let q=M.source,X=p.get(q);if(X){let J=X[I.__cacheKey];J.usedTimes--,J.usedTimes===0&&ut(M),Object.keys(X).length===0&&p.delete(q)}n.remove(M)})(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function Z(S){S.removeEventListener("dispose",G),D(S),(function(M){let I=n.get(M);I.__depthDisposeCallback&&I.__depthDisposeCallback();let q=M.depthTexture;if(q&&q.renderTarget===M&&z(q),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(I.__webglFramebuffer[J]))for(let rt=0;rt<I.__webglFramebuffer[J].length;rt++)r.deleteFramebuffer(I.__webglFramebuffer[J][rt]);else r.deleteFramebuffer(I.__webglFramebuffer[J]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[J])}else{if(Array.isArray(I.__webglFramebuffer))for(let J=0;J<I.__webglFramebuffer.length;J++)r.deleteFramebuffer(I.__webglFramebuffer[J]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let J=0;J<I.__webglColorRenderbuffer.length;J++)I.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[J]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let X=M.textures;for(let J=0,rt=X.length;J<rt;J++){let U=n.get(X[J]);U.__webglTexture&&(r.deleteTexture(U.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(M)})(S)}function ut(S){let M=n.get(S);r.deleteTexture(M.__webglTexture);let I=S.source;delete p.get(I)[M.__cacheKey],a.memory.textures--}let nt=0;function W(S,M){let I=n.get(S);if(S.isVideoTexture&&(function(q){let X=a.render.frame;h.get(q)!==X&&(h.set(q,X),q.update())})(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){let q=S.image;if(q===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else{if(q.complete!==!1)return void St(I,S,M);Qt("WebGLRenderer: Texture marked for update but image is incomplete")}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+M)}function et(S,M){let I=n.get(S);S.version>0&&I.__version!==S.version?(function(q,X,J){if(X.image.length!==6)return;let rt=xt(q,X),U=X.source;e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+J);let st=n.get(U);if(U.version!==st.__version||rt===!0){e.activeTexture(r.TEXTURE0+J);let Mt=ye.getPrimaries(ye.workingColorSpace),wt=X.colorSpace===Ls?null:ye.getPrimaries(X.colorSpace),dt=X.colorSpace===Ls||Mt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,X.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,X.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let ee=X.isCompressedTexture||X.image[0].isCompressedTexture,bt=X.image[0]&&X.image[0].isDataTexture,Ut=[];for(let Ht=0;Ht<6;Ht++)Ut[Ht]=ee||bt?bt?X.image[Ht].image:X.image[Ht]:x(X.image[Ht],!0,i.maxCubemapSize),Ut[Ht]=N(X,Ut[Ht]);let Te=Ut[0],oe=s.convert(X.format,X.colorSpace),At=s.convert(X.type),$t=b(X.internalFormat,oe,At,X.normalized,X.colorSpace),ce=X.isVideoTexture!==!0,Le=st.__version===void 0||rt===!0,Me=U.dataReady,Re,He=B(X,Te);if(ct(r.TEXTURE_CUBE_MAP,X),X.isDepthTexture){if($t=P(X.format===is,X.type),Le)if(ce)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,$t,Te.width,Te.height);else for(let Ht=0;Ht<6;Ht++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,$t,Te.width,Te.height,0,oe,At,null)}else if(ee){ce&&Le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,He,$t,Te.width,Te.height);for(let Ht=0;Ht<6;Ht++){Re=Ut[Ht].mipmaps;for(let ue=0;ue<Re.length;ue++){let fe=Re[ue];X.format!==yr?oe!==null?ce?Me&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue,0,0,fe.width,fe.height,oe,fe.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue,$t,fe.width,fe.height,0,fe.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?Me&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue,0,0,fe.width,fe.height,oe,At,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue,$t,fe.width,fe.height,0,oe,At,fe.data)}}}else{if(Re=X.mipmaps,ce&&Le){Re.length>0&&He++;let Ht=ot(Ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,He,$t,Ht.width,Ht.height)}for(let Ht=0;Ht<6;Ht++)if(bt){ce?Me&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,Ut[Ht].width,Ut[Ht].height,oe,At,Ut[Ht].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,$t,Ut[Ht].width,Ut[Ht].height,0,oe,At,Ut[Ht].data);for(let ue=0;ue<Re.length;ue++){let fe=Re[ue].image[Ht].image;ce?Me&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue+1,0,0,fe.width,fe.height,oe,At,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue+1,$t,fe.width,fe.height,0,oe,At,fe.data)}}else{ce?Me&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,oe,At,Ut[Ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,$t,oe,At,Ut[Ht]);for(let ue=0;ue<Re.length;ue++){let fe=Re[ue];ce?Me&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue+1,0,0,oe,At,fe.image[Ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ue+1,$t,oe,At,fe.image[Ht])}}}y(X)&&X.mipmapsAutoUpdate===!0&&C(r.TEXTURE_CUBE_MAP),st.__version=U.version,X.onUpdate&&X.onUpdate(X)}q.__version=X.version})(I,S,M):e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+M)}let vt={[dm]:r.REPEAT,[sh]:r.CLAMP_TO_EDGE,[pm]:r.MIRRORED_REPEAT},Nt={[ts]:r.NEAREST,[fm]:r.NEAREST_MIPMAP_NEAREST,[Ml]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[ah]:r.LINEAR_MIPMAP_NEAREST,[es]:r.LINEAR_MIPMAP_LINEAR},Ft={[bm]:r.NEVER,[Fd]:r.ALWAYS,[Tm]:r.LESS,[Ud]:r.LEQUAL,[Em]:r.EQUAL,[Od]:r.GEQUAL,[wm]:r.GREATER,[Am]:r.NOTEQUAL};function ct(S,M){if(M.type!==_r||t.has("OES_texture_float_linear")!==!1||M.magFilter!==gi&&M.magFilter!==ah&&M.magFilter!==Ml&&M.magFilter!==es&&M.minFilter!==gi&&M.minFilter!==ah&&M.minFilter!==Ml&&M.minFilter!==es||Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(S,r.TEXTURE_WRAP_S,vt[M.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,vt[M.wrapT]),S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY||r.texParameteri(S,r.TEXTURE_WRAP_R,vt[M.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,Nt[M.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,Nt[M.minFilter]),M.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,Ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ts||M.minFilter!==Ml&&M.minFilter!==es||M.type===_r&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");r.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function xt(S,M){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",Q),H(M));let q=M.source,X=p.get(q);X===void 0&&(X={},p.set(q,X));let J=(function(rt){let U=[];return U.push(rt.wrapS),U.push(rt.wrapT),U.push(rt.wrapR||0),U.push(rt.magFilter),U.push(rt.minFilter),U.push(rt.anisotropy),U.push(rt.internalFormat),U.push(rt.format),U.push(rt.type),U.push(rt.generateMipmaps),U.push(rt.mipmapsAutoUpdate),U.push(rt.premultiplyAlpha),U.push(rt.flipY),U.push(rt.unpackAlignment),U.push(rt.colorSpace),U.join()})(M);if(J!==S.__cacheKey){X[J]===void 0&&(X[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,I=!0),X[J].usedTimes++;let rt=X[S.__cacheKey];rt!==void 0&&(X[S.__cacheKey].usedTimes--,rt.usedTimes===0&&ut(M)),S.__cacheKey=J,S.__webglTexture=X[J].texture}return I}function Ct(S,M,I){return Math.floor(Math.floor(S/I)/M)}function St(S,M,I){let q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=r.TEXTURE_3D);let X=xt(S,M),J=M.source;e.bindTexture(q,S.__webglTexture,r.TEXTURE0+I);let rt=n.get(J);if(J.version!==rt.__version||X===!0){if(e.activeTexture(r.TEXTURE0+I),!(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)){let At=ye.getPrimaries(ye.workingColorSpace),$t=M.colorSpace===Ls?null:ye.getPrimaries(M.colorSpace),ce=M.colorSpace===Ls||At===$t?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let U=x(M.image,!1,i.maxTextureSize);U=N(M,U);let st=s.convert(M.format,M.colorSpace),Mt=s.convert(M.type),wt,dt=b(M.internalFormat,st,Mt,M.normalized,M.colorSpace,M.isVideoTexture);ct(q,M);let ee=M.mipmaps,bt=M.isVideoTexture!==!0,Ut=rt.__version===void 0||X===!0,Te=J.dataReady,oe=B(M,U);if(M.isDepthTexture)dt=P(M.format===is,M.type),Ut&&(bt?e.texStorage2D(r.TEXTURE_2D,1,dt,U.width,U.height):e.texImage2D(r.TEXTURE_2D,0,dt,U.width,U.height,0,st,Mt,null));else if(M.isDataTexture)if(ee.length>0){bt&&Ut&&e.texStorage2D(r.TEXTURE_2D,oe,dt,ee[0].width,ee[0].height);for(let At=0,$t=ee.length;At<$t;At++)wt=ee[At],bt?Te&&e.texSubImage2D(r.TEXTURE_2D,At,0,0,wt.width,wt.height,st,Mt,wt.data):e.texImage2D(r.TEXTURE_2D,At,dt,wt.width,wt.height,0,st,Mt,wt.data);M.generateMipmaps=!1}else bt?(Ut&&e.texStorage2D(r.TEXTURE_2D,oe,dt,U.width,U.height),Te&&(function(At,$t,ce,Le){let Me=At.updateRanges;if(Me.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,$t.width,$t.height,ce,Le,$t.data);else{Me.sort((fe,tn)=>fe.start-tn.start);let Re=0;for(let fe=1;fe<Me.length;fe++){let tn=Me[Re],Pe=Me[fe],Ee=tn.start+tn.count,en=Ct(Pe.start,$t.width,4),ai=Ct(tn.start,$t.width,4);Pe.start<=Ee+1&&en===ai&&Ct(Pe.start+Pe.count-1,$t.width,4)===en?tn.count=Math.max(tn.count,Pe.start+Pe.count-tn.start):(++Re,Me[Re]=Pe)}Me.length=Re+1;let He=e.getParameter(r.UNPACK_ROW_LENGTH),Ht=e.getParameter(r.UNPACK_SKIP_PIXELS),ue=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,$t.width);for(let fe=0,tn=Me.length;fe<tn;fe++){let Pe=Me[fe],Ee=Math.floor(Pe.start/4),en=Math.ceil(Pe.count/4),ai=Ee%$t.width,k=Math.floor(Ee/$t.width),Mr=en;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ai),e.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,ai,k,Mr,1,ce,Le,$t.data)}At.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,He),e.pixelStorei(r.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(r.UNPACK_SKIP_ROWS,ue)}})(M,U,st,Mt)):e.texImage2D(r.TEXTURE_2D,0,dt,U.width,U.height,0,st,Mt,U.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){bt&&Ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,oe,dt,ee[0].width,ee[0].height,U.depth);for(let At=0,$t=ee.length;At<$t;At++)if(wt=ee[At],M.format!==yr)if(st!==null)if(bt){if(Te)if(M.layerUpdates.size>0){let ce=Yd(wt.width,wt.height,M.format,M.type);for(let Le of M.layerUpdates){let Me=wt.data.subarray(Le*ce/wt.data.BYTES_PER_ELEMENT,(Le+1)*ce/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,Le,wt.width,wt.height,1,st,Me)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,U.depth,st,wt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,dt,wt.width,wt.height,U.depth,0,wt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Te&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,wt.width,wt.height,U.depth,st,Mt,wt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,At,dt,wt.width,wt.height,U.depth,0,st,Mt,wt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{bt&&Ut&&e.texStorage2D(r.TEXTURE_2D,oe,dt,ee[0].width,ee[0].height);for(let At=0,$t=ee.length;At<$t;At++)wt=ee[At],M.format!==yr?st!==null?bt?Te&&e.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,wt.width,wt.height,st,wt.data):e.compressedTexImage2D(r.TEXTURE_2D,At,dt,wt.width,wt.height,0,wt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Te&&e.texSubImage2D(r.TEXTURE_2D,At,0,0,wt.width,wt.height,st,Mt,wt.data):e.texImage2D(r.TEXTURE_2D,At,dt,wt.width,wt.height,0,st,Mt,wt.data)}else if(M.isDataArrayTexture)if(bt){if(Ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,oe,dt,U.width,U.height,U.depth),Te)if(M.layerUpdates.size>0){let At=Yd(U.width,U.height,M.format,M.type);for(let $t of M.layerUpdates){let ce=U.data.subarray($t*At/U.data.BYTES_PER_ELEMENT,($t+1)*At/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$t,U.width,U.height,1,st,Mt,ce)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,st,Mt,U.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,U.width,U.height,U.depth,0,st,Mt,U.data);else if(M.isData3DTexture)bt?(Ut&&e.texStorage3D(r.TEXTURE_3D,oe,dt,U.width,U.height,U.depth),Te&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,st,Mt,U.data)):e.texImage3D(r.TEXTURE_3D,0,dt,U.width,U.height,U.depth,0,st,Mt,U.data);else if(M.isFramebufferTexture){if(Ut)if(bt)e.texStorage2D(r.TEXTURE_2D,oe,dt,U.width,U.height);else{let At=U.width,$t=U.height;for(let ce=0;ce<oe;ce++)e.texImage2D(r.TEXTURE_2D,ce,dt,At,$t,0,st,Mt,null),At>>=1,$t>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let At=r.canvas;if(At.hasAttribute("layoutsubtree")||At.setAttribute("layoutsubtree","true"),U.parentNode!==At)return At.appendChild(U),u.add(M),At.onpaint=$t=>{let ce=$t.changedElements;for(let Le of u)ce.includes(Le.image)&&(Le.needsUpdate=!0)},void At.requestPaint();if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,U);else{let ce=r.RGBA,Le=r.RGBA,Me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ce,Le,Me,U)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ee.length>0){if(bt&&Ut){let At=ot(ee[0]);e.texStorage2D(r.TEXTURE_2D,oe,dt,At.width,At.height)}for(let At=0,$t=ee.length;At<$t;At++)wt=ee[At],bt?Te&&e.texSubImage2D(r.TEXTURE_2D,At,0,0,st,Mt,wt):e.texImage2D(r.TEXTURE_2D,At,dt,st,Mt,wt);M.generateMipmaps=!1}else if(bt){if(Ut){let At=ot(U);e.texStorage2D(r.TEXTURE_2D,oe,dt,At.width,At.height)}Te&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st,Mt,U)}else e.texImage2D(r.TEXTURE_2D,0,dt,st,Mt,U);y(M)&&M.mipmapsAutoUpdate===!0&&C(q),rt.__version=J.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Bt(S,M,I,q,X,J){let rt=s.convert(I.format,I.colorSpace),U=s.convert(I.type),st=b(I.internalFormat,rt,U,I.normalized,I.colorSpace),Mt=n.get(M),wt=n.get(I);if(wt.__renderTarget=M,!Mt.__hasExternalTextures){let dt=Math.max(1,M.width>>J),ee=Math.max(1,M.height>>J);X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?e.texImage3D(X,J,st,dt,ee,M.depth,0,rt,U,null):e.texImage2D(X,J,st,dt,ee,0,rt,U,null)}e.bindFramebuffer(r.FRAMEBUFFER,S),_t(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,X,wt.__webglTexture,0,ht(M)):(X===r.TEXTURE_2D||X>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,X,wt.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function j(S,M,I){if(r.bindRenderbuffer(r.RENDERBUFFER,S),M.depthBuffer){let q=M.depthTexture,X=q&&q.isDepthTexture?q.type:null,J=P(M.stencilBuffer,X),rt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(M),J,M.width,M.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(M),J,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,J,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,S)}else{let q=M.textures;for(let X=0;X<q.length;X++){let J=q[X],rt=s.convert(J.format,J.colorSpace),U=s.convert(J.type),st=b(J.internalFormat,rt,U,J.normalized,J.colorSpace);_t(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht(M),st,M.width,M.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht(M),st,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,st,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(S,M,I){let q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,S),!M.depthTexture||!M.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(M.depthTexture);X.__renderTarget=M;let J=q?M.depthTexture.image[0]:M.depthTexture.image;X.__webglTexture&&J.width===M.width&&J.height===M.height||(J.width=M.width,J.height=M.height,M.depthTexture.needsUpdate=!0),q?et(M.depthTexture,0):W(M.depthTexture,0);let rt=X.__webglTexture,U=ht(M),st=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,Mt=M.depthTexture.format===is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ja)_t(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Mt,st,rt,0,U):r.framebufferTexture2D(r.FRAMEBUFFER,Mt,st,rt,0);else{if(M.depthTexture.format!==is)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");_t(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Mt,st,rt,0,U):r.framebufferTexture2D(r.FRAMEBUFFER,Mt,st,rt,0)}}function Kt(S){let M=n.get(S),I=S.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==S.depthTexture){let q=S.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let X=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",X)};q.addEventListener("dispose",X),M.__depthDisposeCallback=X}M.__boundDepthTexture=q}if(S.depthTexture&&!M.__autoAllocateDepthBuffer)if(I)for(let q=0;q<6;q++)kt(M.__webglFramebuffer[q],S,q);else S.texture.mipmaps.length>0?kt(M.__webglFramebuffer[0],S,0):kt(M.__webglFramebuffer,S,0);else if(I){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=r.createRenderbuffer(),j(M.__webglDepthbuffer[q],S,!1);else{let X=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,X,r.RENDERBUFFER,J)}}else if(S.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),j(M.__webglDepthbuffer,S,!1);else{let q=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,X)}e.bindFramebuffer(r.FRAMEBUFFER,null)}let mt=[];function ht(S){return Math.min(i.maxSamples,S.samples)}function _t(S){let M=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(S,M){let I=S.colorSpace,q=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==ph&&I!==Ls&&(ye.getTransfer(I)===Ie?q===yr&&X===Ai||Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",I)),M}function ot(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=function(){let S=nt;return S>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+i.maxTextures),nt+=1,S},this.resetTextureUnits=function(){nt=0},this.getTextureUnits=function(){return nt},this.setTextureUnits=function(S){nt=S},this.setTexture2D=W,this.setTexture2DArray=function(S,M){let I=n.get(S);S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version?St(I,S,M):(S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null),e.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+M))},this.setTexture3D=function(S,M){let I=n.get(S);S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version?St(I,S,M):e.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=et,this.rebindTextures=function(S,M,I){let q=n.get(S);M!==void 0&&Bt(q.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&Kt(S)},this.setupRenderTarget=function(S){let M=S.texture,I=n.get(S),q=n.get(M);S.addEventListener("dispose",G),H(S);let X=S.textures,J=S.isWebGLCubeRenderTarget===!0,rt=X.length>1;if(rt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=M.version,a.memory.textures++),J){I.__webglFramebuffer=[];for(let U=0;U<6;U++)if(M.mipmaps.length>0){I.__webglFramebuffer[U]=[];for(let st=0;st<M.mipmaps.length;st++)I.__webglFramebuffer[U][st]=r.createFramebuffer()}else I.__webglFramebuffer[U]=r.createFramebuffer()}else{if(M.mipmaps.length>0){I.__webglFramebuffer=[];for(let U=0;U<M.mipmaps.length;U++)I.__webglFramebuffer[U]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(rt)for(let U=0,st=X.length;U<st;U++){let Mt=n.get(X[U]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=r.createTexture(),a.memory.textures++)}if(S.samples>0&&_t(S)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let U=0;U<X.length;U++){let st=X[U];I.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[U]);let Mt=s.convert(st.format,st.colorSpace),wt=s.convert(st.type),dt=b(st.internalFormat,Mt,wt,st.normalized,st.colorSpace,S.isXRRenderTarget===!0),ee=ht(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,dt,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,I.__webglColorRenderbuffer[U])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),j(I.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),ct(r.TEXTURE_CUBE_MAP,M);for(let U=0;U<6;U++)if(M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Bt(I.__webglFramebuffer[U][st],S,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,st);else Bt(I.__webglFramebuffer[U],S,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);y(M)?C(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(rt){for(let U=0,st=X.length;U<st;U++){let Mt=X[U],wt=n.get(Mt),dt=r.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(dt=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,wt.__webglTexture),ct(dt,Mt),Bt(I.__webglFramebuffer,S,Mt,r.COLOR_ATTACHMENT0+U,dt,0),y(Mt)&&C(dt)}e.unbindTexture()}else{let U=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(U=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(U,q.__webglTexture),ct(U,M),M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Bt(I.__webglFramebuffer[st],S,M,r.COLOR_ATTACHMENT0,U,st);else Bt(I.__webglFramebuffer,S,M,r.COLOR_ATTACHMENT0,U,0);y(M)?C(U):M.mipmaps.length>0&&r.texParameteri(U,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}S.depthBuffer&&Kt(S)},this.updateRenderTargetMipmap=function(S){let M=S.textures;for(let I=0,q=M.length;I<q;I++){let X=M[I];if(y(X)&&X.mipmapsAutoUpdate===!0){let J=E(S),rt=n.get(X).__webglTexture;e.bindTexture(J,rt),C(J),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(S.samples>0){if(_t(S)===!1){let M=S.textures,I=S.width,q=S.height,X=r.COLOR_BUFFER_BIT,J=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=n.get(S),U=M.length>1;if(U)for(let st=0;st<M.length;st++)e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),S.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let st=0;st<M.length;st++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(X|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(X|=r.STENCIL_BUFFER_BIT)),U){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,rt.__webglColorRenderbuffer[st]);let Mt=n.get(M[st]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,I,q,0,0,I,q,X,r.NEAREST),l===!0&&(mt.length=0,mt.push(r.COLOR_ATTACHMENT0+st),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&mt.push(J),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),U)for(let st=0;st<M.length;st++){e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,rt.__webglColorRenderbuffer[st]);let Mt=n.get(M[st]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,Mt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let M=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=_t,this.dispose=function(){for(let S of d){let M=S.deref();M!==void 0&&(M.isRenderTarget===!0?Z(M):z(M))}d.clear(),u.clear()}}function kM(r,t){return{convert:function(e,n=Ls){let i,s=ye.getTransfer(n);if(e===Ai)return r.UNSIGNED_BYTE;if(e===Ku)return r.UNSIGNED_SHORT_4_4_4_4;if(e===Qu)return r.UNSIGNED_SHORT_5_5_5_1;if(e===vm)return r.UNSIGNED_INT_5_9_9_9_REV;if(e===_m)return r.UNSIGNED_INT_10F_11F_11F_REV;if(e===mm)return r.BYTE;if(e===gm)return r.SHORT;if(e===Sl)return r.UNSIGNED_SHORT;if(e===$u)return r.INT;if(e===ns)return r.UNSIGNED_INT;if(e===_r)return r.FLOAT;if(e===_n)return r.HALF_FLOAT;if(e===ym)return r.ALPHA;if(e===xm)return r.RGB;if(e===yr)return r.RGBA;if(e===ja)return r.DEPTH_COMPONENT;if(e===is)return r.DEPTH_STENCIL;if(e===Mm)return r.RED;if(e===td)return r.RED_INTEGER;if(e===Is)return r.RG;if(e===ed)return r.RG_INTEGER;if(e===nd)return r.RGBA_INTEGER;if(e===oh||e===lh||e===ch||e===hh)if(s===Ie){if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(e===oh)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(e===lh)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(e===ch)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(e===hh)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=t.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(e===oh)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===lh)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===ch)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===hh)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(e===id||e===rd||e===sd||e===ad){if(i=t.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(e===id)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===rd)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===sd)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===ad)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(e===od||e===ld||e===cd||e===hd||e===ud||e===uh||e===dd){if(i=t.get("WEBGL_compressed_texture_etc"),i===null)return null;if(e===od||e===ld)return s===Ie?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(e===cd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(e===hd)return i.COMPRESSED_R11_EAC;if(e===ud)return i.COMPRESSED_SIGNED_R11_EAC;if(e===uh)return i.COMPRESSED_RG11_EAC;if(e===dd)return i.COMPRESSED_SIGNED_RG11_EAC}if(e===pd||e===fd||e===md||e===gd||e===vd||e===_d||e===yd||e===xd||e===Md||e===Sd||e===bd||e===Td||e===Ed||e===wd){if(i=t.get("WEBGL_compressed_texture_astc"),i===null)return null;if(e===pd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(e===fd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(e===md)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(e===gd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(e===vd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(e===_d)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(e===yd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(e===xd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(e===Md)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(e===Sd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(e===bd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(e===Td)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(e===Ed)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(e===wd)return s===Ie?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(e===Ad||e===Rd||e===Cd){if(i=t.get("EXT_texture_compression_bptc"),i===null)return null;if(e===Ad)return s===Ie?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(e===Rd)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(e===Cd)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(e===Pd||e===Id||e===dh||e===Ld){if(i=t.get("EXT_texture_compression_rgtc"),i===null)return null;if(e===Pd)return i.COMPRESSED_RED_RGTC1_EXT;if(e===Id)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(e===dh)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(e===Ld)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return e===Ps?r.UNSIGNED_INT_24_8:r[e]!==void 0?r[e]:null}}}var WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qo(t.texture);t.depthNear===e.depthNear&&t.depthFar===e.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cp=class extends Xi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,d=null,_=typeof XRWebGLBinding<"u",v=new lp,m={},x=e.getContextAttributes(),y=null,C=null,E=[],b=[],P=new lt,B=null,H=null,D=new Nn;D.viewport=new be;let Q=new Nn;Q.viewport=new be;let G=[D,Q],z=new th,Z=null,ut=null;function nt(ct){let xt=b.indexOf(ct.inputSource);if(xt===-1)return;let Ct=E[xt];Ct!==void 0&&(Ct.update(ct.inputSource,ct.frame,c||a),Ct.dispatchEvent({type:ct.type,data:ct.inputSource}))}function W(){i.removeEventListener("select",nt),i.removeEventListener("selectstart",nt),i.removeEventListener("selectend",nt),i.removeEventListener("squeeze",nt),i.removeEventListener("squeezestart",nt),i.removeEventListener("squeezeend",nt),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",et);for(let ct=0;ct<E.length;ct++){let xt=b[ct];xt!==null&&(b[ct]=null,E[ct].disconnect(xt))}Z=null,ut=null,v.reset();for(let ct in m)delete m[ct];if(t.setRenderTarget(y),p=null,f=null,u=null,i=null,C=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(P.width,P.height,!1),H!==null){let ct=H.camera;ct.fov=H.fov,ct.zoom=H.zoom,ct.updateProjectionMatrix(),H=null}n.dispatchEvent({type:"sessionend"})}function et(ct){for(let xt=0;xt<ct.removed.length;xt++){let Ct=ct.removed[xt],St=b.indexOf(Ct);St>=0&&(b[St]=null,E[St].disconnect(Ct))}for(let xt=0;xt<ct.added.length;xt++){let Ct=ct.added[xt],St=b.indexOf(Ct);if(St===-1){for(let j=0;j<E.length;j++){if(j>=b.length){b.push(Ct),St=j;break}if(b[j]===null){b[j]=Ct,St=j;break}}if(St===-1)break}let Bt=E[St];Bt&&Bt.connect(Ct)}}function vt(ct,xt){xt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(xt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let xt=E[ct];return xt===void 0&&(xt=new Aa,E[ct]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(ct){let xt=E[ct];return xt===void 0&&(xt=new Aa,E[ct]=xt),xt.getGripSpace()},this.getHand=function(ct){let xt=E[ct];return xt===void 0&&(xt=new Aa,E[ct]=xt),xt.getHandSpace()},this.setFramebufferScaleFactor=function(ct){s=ct,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){o=ct,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(ct){if(i=ct,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",nt),i.addEventListener("selectstart",nt),i.addEventListener("selectend",nt),i.addEventListener("squeeze",nt),i.addEventListener("squeezestart",nt),i.addEventListener("squeezeend",nt),i.addEventListener("end",W),i.addEventListener("inputsourceschange",et),x.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ct=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?is:ja,Ct=x.stencil?Ps:ns);let Bt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Bt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new Qe(f.textureWidth,f.textureHeight,{format:yr,type:Ai,depthTexture:new fr(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Qe(p.framebufferWidth,p.framebufferHeight,{format:yr,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ft.setContext(i),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()},this.updateCamera=function(ct){if(i===null)return;let xt=ct.near,Ct=ct.far;v.texture!==null&&(v.depthNear>0&&(xt=v.depthNear),v.depthFar>0&&(Ct=v.depthFar)),z.near=Q.near=D.near=xt,z.far=Q.far=D.far=Ct,Z===z.near&&ut===z.far||(i.updateRenderState({depthNear:z.near,depthFar:z.far}),Z=z.near,ut=z.far),z.layers.mask=6|ct.layers.mask,D.layers.mask=-5&z.layers.mask,Q.layers.mask=-3&z.layers.mask;let St=ct.parent,Bt=z.cameras;vt(z,St);for(let j=0;j<Bt.length;j++)vt(Bt[j],St);z.projectionMatrix.copy(D.projectionMatrix),z.projectionMatrixInverse.copy(D.projectionMatrixInverse),H===null&&ct.isPerspectiveCamera&&(H={camera:ct,fov:ct.fov,zoom:ct.zoom}),(function(j,kt,Kt){Kt===null?j.matrix.copy(kt.matrixWorld):(j.matrix.copy(Kt.matrixWorld),j.matrix.invert(),j.matrix.multiply(kt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(kt.projectionMatrix),j.projectionMatrixInverse.copy(kt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=2*Ta*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)})(ct,z,St)},this.getCamera=function(){return z},this.getFoveation=function(){if(f!==null||p!==null)return l},this.setFoveation=function(ct){l=ct,f!==null&&(f.fixedFoveation=ct),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ct)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(z)},this.getCameraTexture=function(ct){return m[ct]};let Nt=null,Ft=new ag;Ft.setAnimationLoop(function(ct,xt){if(h=xt.getViewerPose(c||a),d=xt,h!==null){let Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(C,p.framebuffer),t.setRenderTarget(C));let St=!1;Ct.length!==z.cameras.length&&(z.cameras.length=0,St=!0);for(let j=0;j<Ct.length;j++){let kt=Ct[j],Kt=null;if(p!==null)Kt=p.getViewport(kt);else{let ht=u.getViewSubImage(f,kt);Kt=ht.viewport,j===0&&(t.setRenderTargetTextures(C,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(C))}let mt=G[j];mt===void 0&&(mt=new Nn,mt.layers.enable(j),mt.viewport=new be,G[j]=mt),mt.matrix.fromArray(kt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(kt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),j===0&&(z.matrix.copy(mt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),St===!0&&z.cameras.push(mt)}let Bt=i.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let j=u.getDepthInformation(Ct[0]);j&&j.isValid&&j.texture&&v.init(j,i.renderState)}if(Bt&&Bt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let j=0;j<Ct.length;j++){let kt=Ct[j].camera;if(kt){let Kt=m[kt];Kt||(Kt=new qo,m[kt]=Kt);let mt=u.getCameraImage(kt);Kt.sourceTexture=mt}}}}for(let Ct=0;Ct<E.length;Ct++){let St=b[Ct],Bt=E[Ct];St!==null&&Bt!==void 0&&Bt.update(St,xt,c||a)}Nt&&Nt(ct,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),d=null}),this.setAnimationLoop=function(ct){Nt=ct},this.dispose=function(){}}},jM=new qt,fg=new re;function qM(r,t){function e(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,e(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,e(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,e(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===En&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,e(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===En&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,e(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,e(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,e(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=t.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,i.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&i.envMapRotation.value.premultiply(fg),i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,e(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,e(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,jd(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?n(i,s):s.isMeshLambertMaterial?(n(i,s),s.envMap&&(i.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s),s.envMap&&(i.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.diffuseRoughness>0&&(c.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(c.diffuseRoughnessMap.value=h.diffuseRoughnessMap,e(h.diffuseRoughnessMap,c.diffuseRoughnessMapTransform))),h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.retroreflectivity>0&&(c.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,c.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=t.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,f){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*f,h.map&&(c.map.value=h.map,e(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,e(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,e(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function YM(r,t,e,n){let i={},s={};function a(u,f,p,d){if((function(_,v,m,x){let y=_.value,C=v+"_"+m;if(Array.isArray(y)){x[C]===void 0&&(x[C]=[]);let E=x[C],b=!1;for(let P=0;P<y.length;P++)l(y[P],E,P)===!0&&(b=!0);return b}return l(y,x,C)})(u,f,p,d)===!0){let _=u.__offset,v=u.value;if(Array.isArray(v)){let m=0;for(let x=0;x<v.length;x++){let y=v[x],C=c(y,!0);o(y,u.__data,m),m+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else o(v,u.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,u.__data)}}function o(u,f,p){typeof u=="number"||typeof u=="boolean"?f[p]=u:u.isMatrix3?(f[p]=u.elements[0],f[p+1]=u.elements[1],f[p+2]=u.elements[2],f[p+3]=0,f[p+4]=u.elements[3],f[p+5]=u.elements[4],f[p+6]=u.elements[5],f[p+7]=0,f[p+8]=u.elements[6],f[p+9]=u.elements[7],f[p+10]=u.elements[8],f[p+11]=0):ArrayBuffer.isView(u)?f.set(u.subarray(0,f.length-p),p):u.toArray(f,p)}function l(u,f,p){if(f[p]===void 0)return typeof u=="number"||typeof u=="boolean"?f[p]=u:ArrayBuffer.isView(u)?f[p]=u.slice():f[p]=u.clone(),!0;{let d=f[p];if(typeof u=="number"||typeof u=="boolean"){if(d!==u)return f[p]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(d.equals(u)===!1)return d.copy(u),!0}}return!1}function c(u,f){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=16,p.storage=48):u.isMatrix4?(p.boundary=16,p.storage=64):u.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(p.boundary=16,p.storage=u.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",u),f===!0&&(p.boundary=16,p.storage=16*Math.ceil(p.storage/16)),p}function h(u){let f=u.target;f.removeEventListener("dispose",h),r.deleteBuffer(i[f.id]),delete i[f.id],delete s[f.id]}return{bind:function(u,f){let p=f.program;n.uniformBlockBinding(u,p,i[u.id])},update:function(u,f){let p=i[u.id];p===void 0&&((function(v){let m=v.uniforms,x=0,y=16;for(let E=0,b=m.length;E<b;E++){let P=Array.isArray(m[E])?m[E]:[m[E]];for(let B=0,H=P.length;B<H;B++){let D=P[B],Q=Array.isArray(D.value)?D.value:[D.value],G=Array.isArray(m[E])||Array.isArray(D.value),z=x;for(let ut=0,nt=Q.length;ut<nt;ut++){let W=c(Q[ut],G),et=x%y,vt=et%W.boundary,Nt=et+vt;x+=vt,Nt!==0&&y-Nt<W.storage&&(x+=y-Nt),ut===0&&(z=x),x+=W.storage}let Z=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Z((x-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let C=x%y;C>0&&(x+=y-C),v.__size=x,v.__cache={}})(u),p=(function(v){let m=r.createBuffer(),x=v.__size,y=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,m),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),m})(u),i[u.id]=p,u.addEventListener("dispose",h));let d=f.program;n.updateUBOMapping(u,d);let _=t.render.frame;s[u.id]!==_&&((function(v){let m=i[v.id],x=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,m);for(let C=0,E=x.length;C<E;C++){let b=x[C];if(Array.isArray(b))for(let P=0,B=b.length;P<B;P++)a(b[P],C,P,y);else a(b,C,0,y)}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);i={},s={}}}}fg.set(-1,0,0,0,1,0,0,0,1);var ZM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function JM(){return qi===null&&(qi=new Vo(ZM,16,16,Is,_n),qi.name="DFG_LUT",qi.minFilter=gi,qi.magFilter=gi,qi.wrapS=sh,qi.wrapT=sh,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var _h=class{constructor(t={}){let{canvas:e=Rm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Ai}=t,d;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let _=p,v=new Set([nd,ed,td]),m=new Set([Ai,ns,Sl,Ps,Ku,Qu]),x=new Uint32Array(4),y=new Int32Array(4),C={textures:[],min:[],max:[],resolution:[]},E=null,b=null,P=[],B=[],H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,Q=!1,G=null,z=null,Z=null,ut=null;this._outputColorSpace=Ns;let nt=0,W=0,et=null,vt=-1,Nt=null,Ft=new be,ct=new be,xt=null,Ct=new It(0),St=0,Bt=e.width,j=e.height,kt=1,Kt=null,mt=null,ht=new be(0,0,Bt,j),_t=new be(0,0,Bt,j),N=!1,ot=new pr,S=new Wo,M=!1,I=!1,q=new qt,X=new w,J=new be,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},U=!1;function st(){return et===null?kt:1}let Mt,wt,dt,ee,bt,Ut,Te,oe,At,$t,ce,Le,Me,Re,He,Ht,ue,fe,tn,Pe,Ee,en,ai,k=n;function Mr(T,V){return e.getContext(T,V)}try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Sr,!1),e.addEventListener("webglcontextrestored",ss,!1),e.addEventListener("webglcontextcreationerror",$i,!1),k===null){let V="webgl2";if(k=Mr(V,T),k===null)throw Mr(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ci()}catch(T){throw e.removeEventListener("webglcontextlost",Sr,!1),e.removeEventListener("webglcontextrestored",ss,!1),e.removeEventListener("webglcontextcreationerror",$i,!1),te("WebGLRenderer: "+T.message),T}function Ci(){Mt=new l1(k),Mt.init(),Ee=new kM(k,Mt),wt=new t1(k,Mt,t,Ee),dt=new GM(k,Mt),wt.reversedDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),z=k.createFramebuffer(),Z=k.createFramebuffer(),ut=k.createFramebuffer(),ee=new u1(k),bt=new AM,Ut=new VM(k,Mt,dt,bt,wt,Ee,ee),Te=new o1(D),oe=new g_(k),en=new Kx(k,oe),At=new c1(k,oe,ee,en),$t=new p1(k,At,oe,en,ee),fe=new d1(k,wt,Ut),He=new e1(bt),ce=new wM(D,Te,Mt,wt,en,He),Le=new qM(D,bt),Me=new CM,Re=new UM(Mt),ue=new $x(D,Te,dt,$t,d,l),Ht=new HM(D,$t,wt),ai=new YM(k,ee,wt,dt),tn=new Qx(k,Mt,ee),Pe=new h1(k,Mt,ee),ee.programs=ce.programs,D.capabilities=wt,D.extensions=Mt,D.properties=bt,D.renderLists=Me,D.shadowMap=Ht,D.state=dt,D.info=ee}_!==Ai&&(H=new m1(_,e.width,e.height,o,i,s));let qe=new cp(D,k);function Sr(T){T.preventDefault(),Bo("WebGLRenderer: Context Lost."),Q=!0}function ss(){Bo("WebGLRenderer: Context Restored."),Q=!1;let T=ee.autoReset,V=Ht.enabled,tt=Ht.autoUpdate,at=Ht.needsUpdate,it=Ht.type;Ci(),ee.autoReset=T,Ht.enabled=V,Ht.autoUpdate=tt,Ht.needsUpdate=at,Ht.type=it}function $i(T){te("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){let V=T.target;V.removeEventListener("dispose",$e),(function(tt){(function(at){let it=bt.get(at).programs;it!==void 0&&(it.forEach(function(Tt){ce.releaseProgram(Tt)}),at.isShaderMaterial&&ce.releaseShaderCache(at))})(tt),bt.remove(tt)})(V)}function pn(T,V,tt,at){G!==null&&T.isNodeMaterial&&G.setObject(at,T),M===!0&&He.setState(T,tt,!1),T.transparent===!0&&T.side===fi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,oi(T,V,at),T.side=ka,T.needsUpdate=!0,oi(T,V,at),T.side=fi):oi(T,V,at)}this.xr=qe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=Mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(T){T!==void 0&&(kt=T,this.setSize(Bt,j,!1))},this.getSize=function(T){return T.set(Bt,j)},this.setSize=function(T,V,tt=!0){qe.isPresenting?Qt("WebGLRenderer: Can't change size while VR device is presenting."):(Bt=T,j=V,e.width=Math.floor(T*kt),e.height=Math.floor(V*kt),tt===!0&&(e.style.width=T+"px",e.style.height=V+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,T,V))},this.getDrawingBufferSize=function(T){return T.set(Bt*kt,j*kt).floor()},this.setDrawingBufferSize=function(T,V,tt){Bt=T,j=V,kt=tt,e.width=Math.floor(T*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(_!==Ai){if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(T||[])}else te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(Ft)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,V,tt,at){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,V,tt,at),dt.viewport(Ft.copy(ht).multiplyScalar(st()).round())},this.getScissor=function(T){return T.copy(_t)},this.setScissor=function(T,V,tt,at){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,V,tt,at),dt.scissor(ct.copy(_t).multiplyScalar(st()).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){dt.setScissorTest(N=T)},this.setOpaqueSort=function(T){Kt=T},this.setTransparentSort=function(T){mt=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,tt=!0){let at=0;if(T){let it=!1;if(et!==null){let Tt=et.texture.format;it=v.has(Tt)}if(it){let Tt=et.texture.type,Lt=m.has(Tt),Pt=ue.getClearColor(),Ot=ue.getClearAlpha(),Zt=Pt.r,le=Pt.g,me=Pt.b;Lt?(x[0]=Zt,x[1]=le,x[2]=me,x[3]=Ot,k.clearBufferuiv(k.COLOR,0,x)):(y[0]=Zt,y[1]=le,y[2]=me,y[3]=Ot,k.clearBufferiv(k.COLOR,0,y))}else at|=k.COLOR_BUFFER_BIT}V&&(at|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),G=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Sr,!1),e.removeEventListener("webglcontextrestored",ss,!1),e.removeEventListener("webglcontextcreationerror",$i,!1),ue.dispose(),Me.dispose(),Re.dispose(),Ut.dispose(),bt.dispose(),Te.dispose(),$t.dispose(),At.dispose(),en.dispose(),ai.dispose(),ce.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Os),qe.removeEventListener("sessionend",Fs),kn.stop()},this.renderBufferDirect=function(T,V,tt,at,it,Tt){V===null&&(V=rt);let Lt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Pt=(function(de,we,nn,Yt,Et){we.isScene!==!0&&(we=rt),Ut.resetTextureUnits();let Fn=we.fog,os=Yt.isMeshStandardMaterial||Yt.isMeshLambertMaterial||Yt.isMeshPhongMaterial?we.environment:null,li=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ye.workingColorSpace,Ki=Yt.isMeshStandardMaterial||Yt.isMeshLambertMaterial&&!Yt.envMap||Yt.isMeshPhongMaterial&&!Yt.envMap,Wn=Te.get(Yt.envMap||os,Ki),Er=Yt.vertexColors===!0&&!!nn.attributes.color&&nn.attributes.color.itemSize===4,_i=!!nn.attributes.tangent&&(!!Yt.normalMap||Yt.anisotropy>0),Qi=!!nn.morphAttributes.position,wr=!!nn.morphAttributes.normal,Rh=!!nn.morphAttributes.color,Pi=mi;Yt.toneMapped&&(et!==null&&et.isXRRenderTarget!==!0||(Pi=D.toneMapping));let tr=nn.morphAttributes.position||nn.morphAttributes.normal||nn.morphAttributes.color,ls=tr!==void 0?tr.length:0,ie=bt.get(Yt),Xn=b.state.lights;if(M===!0&&(I===!0||de!==Nt)){let Ce=de===Nt&&Yt.id===vt;He.setState(Yt,de,Ce)}let Zn=!1,Ii=!1;Yt.version===ie.__version?ie.needsLights&&ie.lightsStateVersion!==Xn.state.version||Et.isBatchedMesh&&ie.batching===!1?Zn=!0:Et.isBatchedMesh||ie.batching!==!0?Et.isBatchedMesh&&ie.batchingColor===!0&&Et._colorsTexture===null||Et.isBatchedMesh&&ie.batchingColor===!1&&Et._colorsTexture!==null||Et.isInstancedMesh&&ie.instancing===!1?Zn=!0:Et.isInstancedMesh||ie.instancing!==!0?Et.isSkinnedMesh&&ie.skinning===!1?Zn=!0:Et.isSkinnedMesh||ie.skinning!==!0?Et.isInstancedMesh&&ie.instancingColor===!0&&Et.instanceColor===null||Et.isInstancedMesh&&ie.instancingColor===!1&&Et.instanceColor!==null||Et.isInstancedMesh&&ie.instancingMorph===!0&&Et.morphTexture===null||Et.isInstancedMesh&&ie.instancingMorph===!1&&Et.morphTexture!==null||ie.envMap!==Wn||Yt.fog===!0&&ie.fog!==Fn?Zn=!0:ie.numClippingPlanes===void 0||ie.numClippingPlanes===He.numPlanes&&ie.numIntersection===He.numIntersection?ie.vertexAlphas!==Er||ie.vertexTangents!==_i||ie.morphTargets!==Qi||ie.morphNormals!==wr||ie.morphColors!==Rh||ie.morphTargetsCount!==ls||ie.numLightProbeGrids!==Qa(b.state.lightProbeGridArray)?Zn=!0:ie.outputColorSpace===li&&ie.toneMapping===Pi||(Ii=!0):Zn=!0:Zn=!0:Zn=!0:Zn=!0:(Zn=!0,ie.__version=Yt.version);let Li=ie.currentProgram;Zn!==!0&&Ii!==!0||(Li=Ii===!0?(function(Ce,sn,fn,yi,Hs){let er=bt.get(Ce),Ch=er.currentProgram.id+","+yi+","+Hs,hs=er.programVariants.get(Ch);return hs===void 0?(hs=oi(Ce,sn,fn),er.programVariants.set(Ch,hs)):(er.currentProgram=hs,er.uniformsList=null,er.outputColorSpace=yi,er.toneMapping=Hs),hs})(Yt,we,Et,li,Pi):oi(Yt,we,Et),G&&Yt.isNodeMaterial&&G.onUpdateProgram(Yt,Li,ie));let to=!1,ci=!1,eo=!1,Se=Li.getUniforms(),Cn=ie.uniforms;if(dt.useProgram(Li.program)&&(to=!0,ci=!0,eo=!0),Yt.id!==vt&&(vt=Yt.id,ci=!0),to||Nt!==de){dt.buffers.depth.getReversed()&&de.reversedDepth!==!0&&(de._reversedDepth=!0,de.updateProjectionMatrix()),Se.setValue(k,"projectionMatrix",de.projectionMatrix),Se.setValue(k,"viewMatrix",de.matrixWorldInverse);let Ce=Se.map.cameraPosition;Ce!==void 0&&Ce.setValue(k,X.setFromMatrixPosition(de.matrixWorld)),wt.logarithmicDepthBuffer&&Se.setValue(k,"logDepthBufFC",2/(Math.log(de.far+1)/Math.LN2)),(Yt.isMeshPhongMaterial||Yt.isMeshToonMaterial||Yt.isMeshLambertMaterial||Yt.isMeshBasicMaterial||Yt.isMeshStandardMaterial||Yt.isShaderMaterial)&&Se.setValue(k,"isOrthographic",de.isOrthographicCamera===!0),Nt!==de&&(Nt=de,ci=!0,eo=!0)}if(ie.needsLights&&(Xn.state.sunShadowMap.length>0&&Se.setValue(k,"sunShadowMap",Xn.state.sunShadowMap,Ut),Xn.state.directionalShadowMap.length>0&&Se.setValue(k,"directionalShadowMap",Xn.state.directionalShadowMap,Ut),Xn.state.spotShadowMap.length>0&&Se.setValue(k,"spotShadowMap",Xn.state.spotShadowMap,Ut),Xn.state.pointShadowMap.length>0&&Se.setValue(k,"pointShadowMap",Xn.state.pointShadowMap,Ut)),Et.isSkinnedMesh){Se.setOptional(k,Et,"bindMatrix"),Se.setOptional(k,Et,"bindMatrixInverse");let Ce=Et.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Se.setValue(k,"boneTexture",Ce.boneTexture,Ut))}Et.isBatchedMesh&&(Se.setOptional(k,Et,"batchingTexture"),Se.setValue(k,"batchingTexture",Et._matricesTexture,Ut),Se.setOptional(k,Et,"batchingIdTexture"),Se.setValue(k,"batchingIdTexture",Et._indirectTexture,Ut),Se.setOptional(k,Et,"batchingColorTexture"),Et._colorsTexture!==null&&Se.setValue(k,"batchingColorTexture",Et._colorsTexture,Ut));let cs=nn.morphAttributes;if(cs.position===void 0&&cs.normal===void 0&&cs.color===void 0||fe.update(Et,nn,Li),(ci||ie.receiveShadow!==Et.receiveShadow)&&(ie.receiveShadow=Et.receiveShadow,Se.setValue(k,"receiveShadow",Et.receiveShadow)),(Yt.isMeshStandardMaterial||Yt.isMeshLambertMaterial||Yt.isMeshPhongMaterial)&&Yt.envMap===null&&we.environment!==null&&(Cn.envMapIntensity.value=we.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=JM()),ci){if(Se.setValue(k,"toneMappingExposure",D.toneMappingExposure),ie.needsLights&&(rn=eo,(Pn=Cn).ambientLightColor.needsUpdate=rn,Pn.lightProbe.needsUpdate=rn,Pn.sunLights.needsUpdate=rn,Pn.sunLightShadows.needsUpdate=rn,Pn.directionalLights.needsUpdate=rn,Pn.directionalLightShadows.needsUpdate=rn,Pn.pointLights.needsUpdate=rn,Pn.pointLightShadows.needsUpdate=rn,Pn.spotLights.needsUpdate=rn,Pn.spotLightShadows.needsUpdate=rn,Pn.rectAreaLights.needsUpdate=rn,Pn.hemisphereLights.needsUpdate=rn),Fn&&Yt.fog===!0&&Le.refreshFogUniforms(Cn,Fn),Le.refreshMaterialUniforms(Cn,Yt,kt,j,b.state.transmissionRenderTarget[de.id]),ie.needsLights&&ie.numLightProbeGrids>0){let Ce=C,sn=0;for(let fn of b.state.lightProbeGridArray)fn.texture!==null&&(Ce.textures[sn]=fn.texture,Ce.min[sn]=fn.boundingBox.min,Ce.max[sn]=fn.boundingBox.max,Ce.resolution[sn]=fn.resolution,sn++);for(let fn in Ce)Ce[fn].length=sn;Cn.probesSH.value=Ce.textures,Cn.probesMin.value=Ce.min,Cn.probesMax.value=Ce.max,Cn.probesResolution.value=Ce.resolution}Ya.upload(k,Bs(ie),Cn,Ut)}var Pn,rn;if(Yt.isShaderMaterial&&Yt.uniformsNeedUpdate===!0&&(Ya.upload(k,Bs(ie),Cn,Ut),Yt.uniformsNeedUpdate=!1),Yt.isSpriteMaterial&&Se.setValue(k,"center",Et.center),Se.setValue(k,"modelViewMatrix",Et.modelViewMatrix),Se.setValue(k,"normalMatrix",Et.normalMatrix),Se.setValue(k,"modelMatrix",Et.matrixWorld),Yt.uniformsGroups!==void 0){let Ce=Yt.uniformsGroups;for(let sn=0,fn=Ce.length;sn<fn;sn++){let yi=Ce[sn];ai.update(yi,Li),ai.bind(yi,Li)}}return Li})(T,V,tt,at,it);dt.setMaterial(at,Lt);let Ot=tt.index,Zt=1;if(at.wireframe===!0){if(Ot=At.getWireframeAttribute(tt),Ot===void 0)return;Zt=2}let le=tt.drawRange,me=tt.attributes.position,Vt=le.start*Zt,ve=(le.start+le.count)*Zt;Tt!==null&&(Vt=Math.max(Vt,Tt.start*Zt),ve=Math.min(ve,(Tt.start+Tt.count)*Zt)),Ot!==null?(Vt=Math.max(Vt,0),ve=Math.min(ve,Ot.count)):me!=null&&(Vt=Math.max(Vt,0),ve=Math.min(ve,me.count));let De=ve-Vt;if(De<0||De===1/0)return;let Ue;en.setup(it,at,Pt,tt,Ot);let Oe=tn;if(Ot!==null&&(Ue=oe.get(Ot),Oe=Pe,Oe.setIndex(Ue)),it.isMesh)at.wireframe===!0?(dt.setLineWidth(at.wireframeLinewidth*st()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(it.isLine){let de=at.linewidth;de===void 0&&(de=1),dt.setLineWidth(de*st()),it.isLineSegments?Oe.setMode(k.LINES):it.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else it.isPoints?Oe.setMode(k.POINTS):it.isSprite&&Oe.setMode(k.TRIANGLES);if(it.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Oe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let de=it._multiDrawStarts,we=it._multiDrawCounts,nn=it._multiDrawCount,Yt=Ot?oe.get(Ot).bytesPerElement:1,Et=bt.get(at).currentProgram.getUniforms();for(let Fn=0;Fn<nn;Fn++)Et.setValue(k,"_gl_DrawID",Fn),Oe.render(de[Fn]/Yt,we[Fn])}else if(it.isInstancedMesh)Oe.renderInstances(Vt,De,it.count);else if(tt.isInstancedBufferGeometry){let de=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,we=Math.min(tt.instanceCount,de);Oe.renderInstances(Vt,De,we)}else Oe.render(Vt,De)},this.compile=function(T,V,tt=null){tt===null&&(tt=T),G!==null&&G.renderStart(T,V,tt),b=Re.get(tt),b.init(V),B.push(b),tt.traverseVisible(function(it){it.isLight&&it.layers.test(V.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),T!==tt&&T.traverseVisible(function(it){it.isLight&&it.layers.test(V.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),b.setupLights(),G!==null&&G.updateLights(b.state.lightsArray),I=this.localClippingEnabled,M=He.init(this.clippingPlanes,I),M===!0&&He.setGlobalState(this.clippingPlanes,V),G!==null&&Ht.render(b.state.shadowsArray,tt,V);let at=new Set;return T.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let Tt=it.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){let Pt=Tt[Lt];pn(Pt,tt,V,it),at.add(Pt)}else pn(Tt,tt,V,it),at.add(Tt)}),b=B.pop(),G!==null&&G.renderEnd(),at},this.compileAsync=function(T,V,tt=null){let at=this.compile(T,V,tt);return new Promise(it=>{function Tt(){at.forEach(function(Lt){let Pt=bt.get(Lt).currentProgram;(Pt===void 0||Pt.isReady())&&at.delete(Lt)}),at.size!==0?setTimeout(Tt,10):it(T)}Mt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let on=null;function Os(){kn.stop()}function Fs(){kn.start()}let kn=new ag;function as(T,V,tt,at){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)tt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){let Tt=V.isArrayCamera?S:ot;if(!T.frustumCulled||T.intersectsFrustum(Tt)){at&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(q);let Lt=$t.update(T),Pt=T.material;Pt.visible&&E.push(T,Lt,Pt,tt,J.z,null,V)}}else if(T.isMesh||T.isLine||T.isPoints){let Tt=V.isArrayCamera?S:ot;if(!T.frustumCulled||T.intersectsFrustum(Tt)){let Lt=$t.update(T),Pt=T.material;if(at&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),J.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),J.copy(Lt.boundingSphere.center)),J.applyMatrix4(T.matrixWorld).applyMatrix4(q)),Array.isArray(Pt)){let Ot=Lt.groups;for(let Zt=0,le=Ot.length;Zt<le;Zt++){let me=Ot[Zt],Vt=Pt[me.materialIndex];Vt&&Vt.visible&&E.push(T,Lt,Vt,tt,J.z,me,V)}}else Pt.visible&&E.push(T,Lt,Pt,tt,J.z,null,V)}}}let it=T.children;for(let Tt=0,Lt=it.length;Tt<Lt;Tt++)as(it[Tt],V,tt,at)}function Il(T,V,tt,at){let{opaque:it,transmissive:Tt,transparent:Lt}=T;b.setupLightsView(tt),M===!0&&He.setGlobalState(D.clippingPlanes,tt),at&&dt.viewport(Ft.copy(at)),it.length>0&&Tr(it,V,tt),Tt.length>0&&Tr(Tt,V,tt),Lt.length>0&&Tr(Lt,V,tt),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function br(T,V,tt,at){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[at.id]===void 0){let me=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[at.id]=new Qe(1,1,{generateMipmaps:!0,type:me?_n:Ai,minFilter:es,samples:Math.max(4,wt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let it=b.state.transmissionRenderTarget[at.id],Tt=at.viewport||Ft;it.setSize(Tt.z*D.transmissionResolutionScale,Tt.w*D.transmissionResolutionScale);let Lt=D.getRenderTarget(),Pt=D.getActiveCubeFace(),Ot=D.getActiveMipmapLevel();D.setRenderTarget(it),D.getClearColor(Ct),St=D.getClearAlpha(),St<1&&D.setClearColor(16777215,.5),D.clear(),U&&ue.render(tt);let Zt=D.toneMapping;D.toneMapping=mi;let le=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),b.setupLightsView(at),M===!0&&He.setGlobalState(D.clippingPlanes,at),Tr(T,tt,at),Ut.updateMultisampleRenderTarget(it),Ut.updateRenderTargetMipmap(it),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Vt=0,ve=V.length;Vt<ve;Vt++){let De=V[Vt],{object:Ue,geometry:Oe,material:de,group:we}=De;if(de.side===fi&&Ue.layers.test(at.layers)){let nn=de.side;de.side=En,de.needsUpdate=!0,Ll(Ue,tt,at,Oe,de,we),de.side=nn,de.needsUpdate=!0,me=!0}}me===!0&&(Ut.updateMultisampleRenderTarget(it),Ut.updateRenderTargetMipmap(it))}D.setRenderTarget(Lt,Pt,Ot),D.setClearColor(Ct,St),le!==void 0&&(at.viewport=le),D.toneMapping=Zt}function Tr(T,V,tt){let at=V.isScene===!0?V.overrideMaterial:null;for(let it=0,Tt=T.length;it<Tt;it++){let Lt=T[it],{object:Pt,geometry:Ot,group:Zt}=Lt,le=Lt.material;le.allowOverride===!0&&at!==null&&(le=at),Pt.layers.test(tt.layers)&&Ll(Pt,V,tt,Ot,le,Zt)}}function Ll(T,V,tt,at,it,Tt){G!==null&&it.isNodeMaterial&&G.setObject(T,it),T.onBeforeRender(D,V,tt,at,it,Tt),T.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),it.onBeforeRender(D,V,tt,at,T,Tt),it.transparent===!0&&it.side===fi&&it.forceSinglePass===!1?(it.side=En,it.needsUpdate=!0,D.renderBufferDirect(tt,V,at,it,T,Tt),it.side=ka,it.needsUpdate=!0,D.renderBufferDirect(tt,V,at,it,T,Tt),it.side=fi):D.renderBufferDirect(tt,V,at,it,T,Tt),T.onAfterRender(D,V,tt,at,it,Tt)}function Qa(T){let V=0;for(let tt of T)tt.texture!==null&&V++;return V}function oi(T,V,tt){V.isScene!==!0&&(V=rt);let at=bt.get(T),it=b.state.lights,Tt=b.state.shadowsArray,Lt=it.state.version,Pt=ce.getParameters(T,it.state,Tt,V,tt,b.state.lightProbeGridArray),Ot=ce.getProgramCacheKey(Pt),Zt=at.programs;at.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,at.fog=V.fog;let le=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;at.envMap=Te.get(T.envMap||at.environment,le),at.envMapRotation=at.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",$e),Zt=new Map,at.programs=Zt,at.programVariants=new Map);let me=Zt.get(Ot);if(me!==void 0){if(at.currentProgram===me&&at.lightsStateVersion===Lt)return Nl(T,Pt),me}else Pt.uniforms=ce.getUniforms(T),G!==null&&T.isNodeMaterial&&G.build(T,tt,Pt),T.onBeforeCompile(Pt,D),me=ce.acquireProgram(Pt,Ot),Zt.set(Ot,me),at.uniforms=Pt.uniforms;let Vt=at.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Vt.clippingPlanes=He.uniform),Nl(T,Pt),at.needsLights=(function(ve){return ve.isMeshLambertMaterial||ve.isMeshToonMaterial||ve.isMeshPhongMaterial||ve.isMeshStandardMaterial||ve.isShadowMaterial||ve.isShaderMaterial&&ve.lights===!0})(T),at.lightsStateVersion=Lt,at.needsLights&&(Vt.ambientLightColor.value=it.state.ambient,Vt.lightProbe.value=it.state.probe,Vt.sunLights.value=it.state.sun,Vt.sunLightShadows.value=it.state.sunShadow,Vt.directionalLights.value=it.state.directional,Vt.directionalLightShadows.value=it.state.directionalShadow,Vt.spotLights.value=it.state.spot,Vt.spotLightShadows.value=it.state.spotShadow,Vt.rectAreaLights.value=it.state.rectArea,Vt.ltc_1.value=it.state.rectAreaLTC1,Vt.ltc_2.value=it.state.rectAreaLTC2,Vt.pointLights.value=it.state.point,Vt.pointLightShadows.value=it.state.pointShadow,Vt.hemisphereLights.value=it.state.hemi,Vt.sunShadowMatrix.value=it.state.sunShadowMatrix,Vt.sunShadowCascade.value=it.state.sunShadowCascade,Vt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Vt.spotLightMatrix.value=it.state.spotLightMatrix,Vt.spotLightMap.value=it.state.spotLightMap,Vt.pointShadowMatrix.value=it.state.pointShadowMatrix),at.numLightProbeGrids=Qa(b.state.lightProbeGridArray),at.currentProgram=me,at.uniformsList=null,me}function Bs(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Ya.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Nl(T,V){let tt=bt.get(T);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function zs(T){let V=bt.get(T);return V.__readFormat===T.format&&V.__readType===T.type||(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=wt.textureFormatReadable(T.format),V.__typeReadable=wt.textureTypeReadable(T.type)),V}kn.setAnimationLoop(function(T){on&&on(T)}),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){on=T,qe.setAnimationLoop(T),T===null?kn.stop():kn.start()},qe.addEventListener("sessionstart",Os),qe.addEventListener("sessionend",Fs),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0)return void te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(Q===!0)return;G!==null&&G.renderStart(T,V);let tt=qe.enabled===!0&&qe.isPresenting===!0,at=H!==null&&(et===null||tt)&&H.begin(D,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),qe.enabled!==!0||qe.isPresenting!==!0||H!==null&&H.isCompositing()!==!1||(qe.cameraAutoUpdate===!0&&qe.updateCamera(V),V=qe.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,V,et),b=Re.get(T,B.length),b.init(V),b.state.textureUnits=Ut.getTextureUnits(),B.push(b),q.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?S.setFromArrayCamera(V):ot.setFromProjectionMatrix(q,Hd,V.reversedDepth),I=this.localClippingEnabled,M=He.init(this.clippingPlanes,I),E=Me.get(T,P.length),E.init(),P.push(E),this.info.render.frame++,qe.enabled===!0&&qe.isPresenting===!0){let Tt=D.xr.getDepthSensingMesh();Tt!==null&&as(Tt,V,-1/0,D.sortObjects)}as(T,V,0,D.sortObjects),E.finish(),G!==null&&G.updateLights(b.state.lightsArray),D.sortObjects===!0&&E.sort(Kt,mt),U=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,U&&ue.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),M===!0&&He.beginShadows();let it=b.state.shadowsArray;if(Ht.render(it,T,V),M===!0&&He.endShadows(),(at&&H.hasRenderPass())===!1){let Tt=E.opaque,Lt=E.transmissive;if(b.setupLights(),V.isArrayCamera){let Pt=V.cameras;if(Lt.length>0)for(let Ot=0,Zt=Pt.length;Ot<Zt;Ot++)br(Tt,Lt,T,Pt[Ot]);U&&ue.render(T);for(let Ot=0,Zt=Pt.length;Ot<Zt;Ot++){let le=Pt[Ot];Il(E,T,le,le.viewport)}}else Lt.length>0&&br(Tt,Lt,T,V),U&&ue.render(T),Il(E,T,V)}et!==null&&W===0&&(Ut.updateMultisampleRenderTarget(et),Ut.updateRenderTargetMipmap(et)),at&&H.end(D),T.isScene===!0&&T.onAfterRender(D,T,V),en.resetDefaultState(),vt=-1,Nt=null,B.pop(),B.length>0?(b=B[B.length-1],Ut.setTextureUnits(b.state.textureUnits),M===!0&&He.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,P.pop(),E=P.length>0?P[P.length-1]:null,G!==null&&G.renderEnd()},this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,V,tt){let at=bt.get(T);at.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),bt.get(T.texture).__webglTexture=V,bt.get(T.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:tt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let tt=bt.get(T);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,tt=0){et=T,nt=V,W=tt;let at=null,it=!1,Tt=!1;if(T){let Lt=bt.get(T);if(Lt.__useDefaultFramebuffer!==void 0)return dt.bindFramebuffer(k.FRAMEBUFFER,Lt.__webglFramebuffer),Ft.copy(T.viewport),ct.copy(T.scissor),xt=T.scissorTest,dt.viewport(Ft),dt.scissor(ct),dt.setScissorTest(xt),void(vt=-1);if(Lt.__webglFramebuffer===void 0)Ut.setupRenderTarget(T);else if(Lt.__hasExternalTextures)Ut.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Zt=T.depthTexture;if(Lt.__boundDepthTexture!==Zt){if(Zt!==null&&bt.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(T)}}let Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Tt=!0);let Ot=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(at=Array.isArray(Ot[V])?Ot[V][tt]:Ot[V],it=!0):at=T.samples>0&&Ut.useMultisampledRTT(T)===!1?bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?Ot[tt]:Ot,Ft.copy(T.viewport),ct.copy(T.scissor),xt=T.scissorTest}else Ft.copy(ht).multiplyScalar(kt).floor(),ct.copy(_t).multiplyScalar(kt).floor(),xt=N;if(tt!==0&&(at=z),dt.bindFramebuffer(k.FRAMEBUFFER,at)&&dt.drawBuffers(T,at),dt.viewport(Ft),dt.scissor(ct),dt.setScissorTest(xt),it){let Lt=bt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,tt)}else if(Tt){let Lt=V;for(let Pt=0;Pt<T.textures.length;Pt++){let Ot=bt.get(T.textures[Pt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Pt,Ot.__webglTexture,tt,Lt)}}else if(T!==null&&tt!==0){let Lt=bt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Lt.__webglTexture,tt)}vt=-1},this.readRenderTargetPixels=function(T,V,tt,at,it,Tt,Lt,Pt=0){if(!T||!T.isWebGLRenderTarget)return void te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot){dt.bindFramebuffer(k.FRAMEBUFFER,Ot);try{let Zt=T.textures[Pt],le=Zt.format,me=Zt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt);let Vt=zs(Zt);if(Vt.__formatReadable===!1)return void te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)return void te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=T.width-at&&tt>=0&&tt<=T.height-it&&k.readPixels(V,tt,at,it,Ee.convert(le),Ee.convert(me),Tt)}finally{let Zt=et!==null?bt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(T,V,tt,at,it,Tt,Lt,Pt=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt],Array.isArray(Ot)&&(Ot=Ot[0])),Ot){if(V>=0&&V<=T.width-at&&tt>=0&&tt<=T.height-it){dt.bindFramebuffer(k.FRAMEBUFFER,Ot);let Zt=T.textures[Pt],le=Zt.format,me=Zt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt);let Vt=zs(Zt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ve),k.bufferData(k.PIXEL_PACK_BUFFER,Tt.byteLength,k.STREAM_READ),k.readPixels(V,tt,at,it,Ee.convert(le),Ee.convert(me),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let De=et!==null?bt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(k.FRAMEBUFFER,De);let Ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Pm(k,Ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Tt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ve),k.deleteSync(Ue),Tt}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,tt=0){let at=Math.pow(2,-tt),it=Math.floor(T.image.width*at),Tt=Math.floor(T.image.height*at),Lt=V!==null?V.x:0,Pt=V!==null?V.y:0;Ut.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,tt,0,0,Lt,Pt,it,Tt),dt.unbindTexture()},this.copyTextureToTexture=function(T,V,tt=null,at=null,it=0,Tt=0){let Lt,Pt,Ot,Zt,le,me,Vt,ve,De,Ue=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(tt!==null)Lt=tt.max.x-tt.min.x,Pt=tt.max.y-tt.min.y,Ot=tt.isBox3?tt.max.z-tt.min.z:1,Zt=tt.min.x,le=tt.min.y,me=tt.isBox3?tt.min.z:0;else{let Wn=Math.pow(2,-it);Lt=Math.floor(Ue.width*Wn),Pt=Math.floor(Ue.height*Wn),Ot=T.isDataArrayTexture?Ue.depth:T.isData3DTexture?Math.floor(Ue.depth*Wn):1,Zt=0,le=0,me=0}at!==null?(Vt=at.x,ve=at.y,De=at.z):(Vt=0,ve=0,De=0);let Oe=Ee.convert(V.format),de=Ee.convert(V.type),we;V.isData3DTexture?(Ut.setTexture3D(V,0),we=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ut.setTexture2DArray(V,0),we=k.TEXTURE_2D_ARRAY):(Ut.setTexture2D(V,0),we=k.TEXTURE_2D),dt.activeTexture(k.TEXTURE0),dt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),dt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),dt.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let nn=dt.getParameter(k.UNPACK_ROW_LENGTH),Yt=dt.getParameter(k.UNPACK_IMAGE_HEIGHT),Et=dt.getParameter(k.UNPACK_SKIP_PIXELS),Fn=dt.getParameter(k.UNPACK_SKIP_ROWS),os=dt.getParameter(k.UNPACK_SKIP_IMAGES);dt.pixelStorei(k.UNPACK_ROW_LENGTH,Ue.width),dt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue.height),dt.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),dt.pixelStorei(k.UNPACK_SKIP_ROWS,le),dt.pixelStorei(k.UNPACK_SKIP_IMAGES,me);let li=T.isDataArrayTexture||T.isData3DTexture,Ki=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let Wn=bt.get(T),Er=bt.get(V),_i=bt.get(Wn.__renderTarget),Qi=bt.get(Er.__renderTarget);dt.bindFramebuffer(k.READ_FRAMEBUFFER,_i.__webglFramebuffer),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let wr=0;wr<Ot;wr++)li&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,it,me+wr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.get(V).__webglTexture,Tt,De+wr)),k.blitFramebuffer(Zt,le,Zt+Lt,le+Pt,Vt,ve,Vt+Lt,ve+Pt,k.DEPTH_BUFFER_BIT,k.NEAREST);dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(it!==0||T.isRenderTargetTexture||bt.has(T)){let Wn=bt.get(T),Er=bt.get(V);dt.bindFramebuffer(k.READ_FRAMEBUFFER,Z),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ut);for(let _i=0;_i<Ot;_i++)li?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wn.__webglTexture,it,me+_i):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wn.__webglTexture,it),Ki?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Er.__webglTexture,Tt,De+_i):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Er.__webglTexture,Tt),it!==0?k.blitFramebuffer(Zt,le,Zt+Lt,le+Pt,Vt,ve,Vt+Lt,ve+Pt,k.COLOR_BUFFER_BIT,k.NEAREST):Ki?k.copyTexSubImage3D(we,Tt,Vt,ve,De+_i,Zt,le,Lt,Pt):k.copyTexSubImage2D(we,Tt,Vt,ve,Zt,le,Lt,Pt);dt.bindFramebuffer(k.READ_FRAMEBUFFER,null),dt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ki?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(we,Tt,Vt,ve,De,Lt,Pt,Ot,Oe,de,Ue.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(we,Tt,Vt,ve,De,Lt,Pt,Ot,Oe,Ue.data):k.texSubImage3D(we,Tt,Vt,ve,De,Lt,Pt,Ot,Oe,de,Ue):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Tt,Vt,ve,Lt,Pt,Oe,de,Ue.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Tt,Vt,ve,Ue.width,Ue.height,Oe,Ue.data):k.texSubImage2D(k.TEXTURE_2D,Tt,Vt,ve,Lt,Pt,Oe,de,Ue);dt.pixelStorei(k.UNPACK_ROW_LENGTH,nn),dt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt),dt.pixelStorei(k.UNPACK_SKIP_PIXELS,Et),dt.pixelStorei(k.UNPACK_SKIP_ROWS,Fn),dt.pixelStorei(k.UNPACK_SKIP_IMAGES,os),Tt===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&k.generateMipmap(we),dt.unbindTexture()},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&Ut.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ut.setTextureCube(T,0):T.isData3DTexture?Ut.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ut.setTexture2DArray(T,0):Ut.setTexture2D(T,0),dt.unbindTexture()},this.resetState=function(){nt=0,W=0,et=null,dt.reset(),en.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hd}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var mg=new Tn,Mh=new w,ri=class extends ll{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new jt([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new jt([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Qr(e,6,1);return this.setAttribute("instanceStart",new qn(n,3,0)),this.setAttribute("instanceEnd",new qn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Qr(e,6,1);return this.setAttribute("instanceColorStart",new qn(n,3,0)),this.setAttribute("instanceColorEnd",new qn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Fa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),mg.setFromBufferAttribute(e),this.boundingBox.union(mg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Mh.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Mh)),Mh.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mh));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Vn.line={uniforms:vi.merge([Rt.common,Rt.fog,Rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ja=class extends Fe{constructor(t){super({type:"LineMaterial",uniforms:vi.clone(Vn.line.uniforms),vertexShader:Vn.line.vertexShader,fragmentShader:Vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var hp=new be,gg=new w,vg=new w,wn=new be,An=new be,Yi=new be,up=new w,dp=new qt,Rn=new ul,_g=new w,Sh=new Tn,bh=new Dn,Zi=new be,Ji,Us;function yg(r,t,e){return Zi.set(0,0,-t,1).applyMatrix4(r.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=Us/e.width,Zi.y=Us/e.height,Zi.applyMatrix4(r.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function KM(r,t){let e=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd;for(let a=0,o=Math.min(n.instanceCount,i.count);a<o;a++){Rn.start.fromBufferAttribute(i,a),Rn.end.fromBufferAttribute(s,a),Rn.applyMatrix4(e);let l=new w,c=new w;Ji.distanceSqToSegment(Rn.start,Rn.end,c,l),c.distanceTo(l)<.5*Us&&t.push({point:c,pointOnLine:l,distance:Ji.origin.distanceTo(c),object:r,face:null,faceIndex:a,uv:null,uv1:null})}}function QM(r,t,e){let n=t.projectionMatrix,i=r.material.resolution,s=r.matrixWorld,a=r.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,c=Math.min(a.instanceCount,o.count),h=-t.near;Ji.at(1,Yi),Yi.w=1,Yi.applyMatrix4(t.matrixWorldInverse),Yi.applyMatrix4(n),Yi.multiplyScalar(1/Yi.w),Yi.x*=i.x/2,Yi.y*=i.y/2,Yi.z=0,up.copy(Yi),dp.multiplyMatrices(t.matrixWorldInverse,s);for(let u=0,f=c;u<f;u++){if(wn.fromBufferAttribute(o,u),An.fromBufferAttribute(l,u),wn.w=1,An.w=1,wn.applyMatrix4(dp),An.applyMatrix4(dp),wn.z>h&&An.z>h)continue;if(wn.z>h){let m=wn.z-An.z,x=(wn.z-h)/m;wn.lerp(An,x)}else if(An.z>h){let m=An.z-wn.z,x=(An.z-h)/m;An.lerp(wn,x)}wn.applyMatrix4(n),An.applyMatrix4(n),wn.multiplyScalar(1/wn.w),An.multiplyScalar(1/An.w),wn.x*=i.x/2,wn.y*=i.y/2,An.x*=i.x/2,An.y*=i.y/2,Rn.start.copy(wn),Rn.start.z=0,Rn.end.copy(An),Rn.end.z=0;let p=Rn.closestPointToPointParameter(up,!0);Rn.at(p,_g);let d=qa.lerp(wn.z,An.z,p),_=d>=-1&&d<=1,v=up.distanceTo(_g)<.5*Us;if(_&&v){Rn.start.fromBufferAttribute(o,u),Rn.end.fromBufferAttribute(l,u),Rn.start.applyMatrix4(s),Rn.end.applyMatrix4(s);let m=new w,x=new w;Ji.distanceSqToSegment(Rn.start,Rn.end,x,m),e.push({point:x,pointOnLine:m,distance:Ji.origin.distanceTo(x),object:r,face:null,faceIndex:u,uv:null,uv1:null})}}}var Ri=class extends xe{constructor(t=new ri,e=new Ja({color:16777215*Math.random()})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)gg.fromBufferAttribute(e,a),vg.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+gg.distanceTo(vg);let s=new Qr(i,2,1);return t.setAttribute("instanceDistanceStart",new qn(s,1,0)),t.setAttribute("instanceDistanceEnd",new qn(s,1,1)),this}raycast(t,e){let n=this.material.worldUnits,i=t.camera;if(i!==null||n||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ji=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material,c,h;Us=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),bh.copy(o.boundingSphere).applyMatrix4(a),n?c=.5*Us:c=yg(i,Math.max(i.near,bh.distanceToPoint(Ji.origin)),l.resolution),bh.radius+=c,Ji.intersectsSphere(bh)!==!1&&(o.boundingBox===null&&o.computeBoundingBox(),Sh.copy(o.boundingBox).applyMatrix4(a),n?h=.5*Us:h=yg(i,Math.max(i.near,Sh.distanceToPoint(Ji.origin)),l.resolution),Sh.expandByScalar(h),Ji.intersectsBox(Sh)!==!1&&(n?KM(this,e):QM(this,i,e)))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(hp),this.material.uniforms.resolution.value.set(hp.z,hp.w))}};function Al(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Ae;l.morphTargetsRelative=o;let c=0;for(let h=0;h<r.length;++h){let u=r[h],f=0,p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[d].length!==r[0].morphAttributes[d].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+d+'" morph attribute.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let d;if(e)d=u.index.count;else{if(u.attributes.position===void 0)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;d=u.attributes.position.count}l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let p=r[f].index;for(let d=0;d<p.count;++d)u.push(p.getX(d)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=xg(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][f]);let d=xg(p);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(d)}}}return l}function xg(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let a=new t(s),o=new bn(a,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,p=h.count;f<p;f++)for(let d=0;d<e;d++){let _=h.getComponent(f,d);o.setComponent(f+u,d,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function pp(r,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count,a=0,o=Object.keys(r.attributes),l=[],c=new Map,h=[],u=["getX","getY","getZ","getW"],f=.5*t,p=Math.log10(1/t),d=Math.pow(10,p),_=f*d;for(let m=0;m<s;m++){let x=n?n.getX(m):m,y="";for(let C=0,E=o.length;C<E;C++){let b=o[C],P=r.getAttribute(b),B=P.itemSize;for(let H=0;H<B;H++)y+=`${Math.trunc(P[u[H]](x)*d+_)},`}y in e?h.push(e[y]):(l.push(x),e[y]=a,h.push(a),a++)}let v=r.clone();for(let m in r.attributes)v.setAttribute(m,Mg(r.attributes[m],l,c));for(let m in r.morphAttributes)v.morphAttributes[m]=r.morphAttributes[m].map(x=>Mg(x,l,c));return v.setIndex(h),v}function Mg(r,t,e=new Map){let n=r.isInterleavedBufferAttribute,i=n?r.data:r,s=n?i.stride:r.itemSize,a=n?e.get(i):void 0;if(a===void 0){let l=new i.array.constructor(t.length*s);for(let c=0;c<t.length;c++)for(let h=0;h<s;h++)l[c*s+h]=i.array[t[c]*s+h];a=n?new i.constructor(l,s,i.meshPerAttribute):new r.constructor(l,r.itemSize,r.normalized,r.meshPerAttribute),a.setUsage(i.usage),n&&e.set(i,a)}let o=n?new r.constructor(a,r.itemSize,r.offset,r.normalized):a;return o.name=r.name,n||(o.gpuType=r.gpuType),o}var $a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var si=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tS=new Rs(-1,1,1,-1,0,1),fp=class extends Ae{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}},eS=new fp,rs=class{constructor(t){this._mesh=new xe(eS,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tS)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Th=class extends si{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vi.clone(t.uniforms),this.material=new Fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new rs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Rl=class extends si{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state,a,o;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0),this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Eh=class extends si{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var wh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new lt);this._width=n.width,this._height=n.height,(e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n})).texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Th($a),this.copyPass.material.blending=gr,this.timer=new cl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Rl!==void 0&&(a instanceof Rl?n=!0:a instanceof Eh&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,(t=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ah=class extends si{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new It}render(t,e,n){let i=t.autoClear,s,a;t.autoClear=!1,this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var Sg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ka=class r extends si{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new It(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(s,a,{type:_n,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Qe(s,a,{type:_n,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let u=new Qe(s,a,{type:_n,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=Sg;this.highPassUniforms=vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new lt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vi.clone($a.uniforms),this.blendMaterial=new Fe({uniforms:this.copyUniforms,vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader,premultipliedAlpha:!0,blending:vr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new It,this._oldClearAlpha=1,this._basic=new Yn,this._fsQuad=new rs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],s=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new Fe({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ka.BlurDirectionX=new lt(1,0),Ka.BlurDirectionY=new lt(0,1);var Cl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Pl=class extends si{constructor(){super(),this.isOutputPass=!0,this.uniforms=vi.clone(Cl.uniforms),this.material=new Ba({name:Cl.name,uniforms:this.uniforms,vertexShader:Cl.vertexShader,fragmentShader:Cl.fragmentShader}),this._fsQuad=new rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,this._outputColorSpace===t.outputColorSpace&&this._toneMapping===t.toneMapping||(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ye.getTransfer(this._outputColorSpace)===Ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};(()=>{"use strict";let r=document.documentElement,t=window.rebotica,e=window.orkavaBoot,n=new URLSearchParams(location.search),i=n.get("poster"),s=matchMedia("(prefers-reduced-motion: reduce)").matches,a=matchMedia("(max-width: 760px)"),o=(x,y,C)=>{let E=Math.min(1,Math.max(0,(x-y)/(C-y)));return E*E*(3-2*E)},l=()=>new Promise(x=>globalThis.scheduler?.yield?scheduler.yield().then(x):setTimeout(x,0)),c=/swiftshader|llvmpipe|softpipe|software|basic render|lavapipe/i,h=()=>r.classList.contains("story"),u,f="";p();async function p(){if(!(!h()||!await e.verdict||!h())&&(await t.released,!!h())){try{u=new _h({canvas:document.getElementById("scene"),antialias:!0,powerPreference:"high-performance",alpha:!1,failIfMajorPerformanceCaveat:!i});let x=u.getContext();if(!x)throw new Error("no gl");let y=x.getExtension("WEBGL_debug_renderer_info");if(f=String(x.getParameter(y?y.UNMASKED_RENDERER_WEBGL:x.RENDERER)),!i&&c.test(f))throw new Error("software");u.domElement.addEventListener("webglcontextlost",()=>console.warn("webglcontextlost"))}catch{u?.dispose(),t.goPlain(!0);return}addEventListener("orkava:plain",()=>{u.setAnimationLoop(null),u.dispose(),u.forceContextLoss()},{once:!0}),await d()}}async function d(){u.setPixelRatio(t.pixelRatio()),u.debug.checkShaderErrors=!1,u.toneMapping=mi,u.setClearColor(921362,1),u.shadowMap.enabled=!0,u.shadowMap.type=Cs;let x=new Ra,y=new Nn(27,1,.1,200),C=_(7),E=new It(921362),b=new It(2073436),P=new It(8225940),B=[9427380,10336234,15247805].map(g=>new It(g)),H=new It(16766888),D={card:new It(16777215),alt:new It(15592938),grey:new It(13816526),mid:new It(11842735),poche:new It(4540237)},Q=0;function G(g){return g.userData.glow={value:0},g.onBeforeCompile=A=>{A.uniforms.uGlow=g.userData.glow,A.fragmentShader=`uniform float uGlow;
`+A.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          totalEmissiveRadiance += diffuseColor.rgb * uGlow;
          diffuseColor.rgb *= 1.0 - uGlow;`)},g}let z=.06,Z=z+.76,ut=[],nt=(g,A={})=>{let L=new Ja({color:A.color??921362,linewidth:g,transparent:!!A.opacity,opacity:A.opacity??1,vertexColors:!!A.vertexColors});return L.userData.base=g,ut.push(L),L},W=nt(1.3),et=nt(.8,{opacity:.75}),vt=nt(1.1,{color:16777215,vertexColors:!0}),Nt=nt(2.2,{color:16777215,vertexColors:!0}),Ft=nt(1.5,{color:15263973}),ct=[W,et],xt=[],Ct=[],St=[],Bt=[],j=(g,A,L)=>new w(g,A,L);function kt(g,A,L){g.applyMatrix4(A);let O=g.attributes.position.count,F=new Float32Array(O*3),$=D[L]??D.card;for(let K=0;K<O;K++)F[K*3]=$.r,F[K*3+1]=$.g,F[K*3+2]=$.b;g.setAttribute("color",new bn(F,3)),xt.push(g)}function Kt(g,A,L,O,F){let $=[];for(let K=0;K<8;K++)$.push(j(K&4?A/2:-A/2,K&2?L/2:-L/2,K&1?O/2:-O/2).applyMatrix4(g));for(let K=0;K<8;K++)for(let gt of[1,2,4])K&gt||F.push($[K],$[K|gt])}function mt(g,A,L,O,F,$,K={}){let gt=new qt().makeRotationY(K.ry??0).setPosition(g,A+F/2,L);ht(gt,O,F,$,K)}function ht(g,A,L,O,F={}){kt(new Un(A,L,O),g,F.tone??"card"),F.edges!==!1&&Kt(g,A,L,O,F.fine?Bt:St)}function _t(g,A){let L=g.clone();L.deleteAttribute("normal"),L.deleteAttribute("uv");let O=pp(L,1e-4);O.computeVertexNormals(),O.applyMatrix4(A),Ct.push(O)}function N(g,A,L,O,F,$={}){let K=new qt().makeTranslation(g,A+F/2,L),gt=new Xr(O,O,F,28);_t(gt,K),kt(gt,K,$.tone??"card");let yt=$.fine?Bt:St;for(let Y of[A,A+F])for(let zt=0;zt<28;zt++){let Dt=zt/28*Math.PI*2,Xt=(zt+1)/28*Math.PI*2;yt.push(j(g+Math.cos(Dt)*O,Y,L+Math.sin(Dt)*O),j(g+Math.cos(Xt)*O,Y,L+Math.sin(Xt)*O))}}function ot(g,A,L,O,F={}){let $=new qt().makeTranslation(g,A,L),K=new Zr(O,28,18);_t(K,$),kt(K,$,F.tone??"card")}function S(g,A,L,O,F){mt(g,z,A,L,O,F),mt(g,z+O,A,L,.004,F,{tone:"poche",edges:!1})}mt(-.2,-.3,.15,9.8,.3,7.1),mt(-.2,0,0,8.14,z,5.14);let M=.14,I=2.4,q=.42;S(-.2,-2.5,8+M,I,M),S(3.8,.07,M,I,5+M),S(-4.2,0,M,q,5-M),S(-3.85,2.5,.7,q,M),S(.6,2.5,6.4,q,M),S(.6,-2.29,M,1.25,.42-M),S(.6,.73,M,1.25,3.54),mt(-4.2,z,2.5,.3,2.62,.3),mt(-4.2,z+2.62,2.5,.3,.004,.3,{tone:"poche",edges:!1}),await l();let X=-2.43+.2;mt(-1.85,z,X,4.3,.46,.4);for(let g of[.86,1.26,1.66,2.04])mt(-1.85,z+g-.025,X,4.3,.025,.4);for(let g of[-4,-2.925,-1.85,-.775,.3])mt(g,z+.46,X,.03,1.6,.4);for(let g of[.46,.86,1.26,1.66])for(let A=0;A<4;A++){let L=-4+A*1.075+.03,O=L+1.045;v(L,O,(F,$,K,gt,yt)=>mt(F,z+g,X+.2-gt/2-.02,$,K,gt,{tone:yt,fine:!0}),.36,g>1.5?.2:.28)}mt(-2,z,-.65,2.6,.92,.56),mt(-2,z+.92,-.62,2.72,.035,.66),mt(-2,z+.2,-.36,2.6,.005,.005,{fine:!0,edges:!1});{let g=z+.955;mt(-1.25,g,-.7,.24,.07,.2);let A=new qt().makeRotationX(-.38).setPosition(-1.25,g+.17,-.74);ht(A,.26,.17,.02);let L=new qt().makeRotationX(-.38).setPosition(-1.25,g+.17,-.729);ht(L,.22,.13,.002,{tone:"grey",edges:!1}),mt(-1.25,g,-.76,.04,.1,.04,{fine:!0}),mt(-2.75,g,-.6,.3,.08,.2,{tone:"alt"})}mt(-.55,z,1.55,1.3,.55,.5),mt(-.55,z+.55,1.55,1.36,.025,.56),v(-1.18,.08,(g,A,L,O,F)=>mt(g,z+.575,1.55,A,L,O,{tone:F,fine:!0}),.3,.22),await l(),mt(1.02,z,-2.08,.035,.72,.6),mt(2.78,z,-2.08,.035,.72,.6),mt(1.9,z+.72,-2.08,1.84,.04,.64),mt(1.32,z+.12,-2.08,.5,.6,.58),mt(1.32,z+.42,-1.787,.44,.002,.002,{fine:!0,edges:!1});let J=j(2.38,Z,-2.12);mt(J.x,Z,J.z-.03,.32,.3,.3),mt(J.x,Z,J.z+.07,.44,.38,.22),mt(J.x,Z+.075,J.z+.181,.33,.25,.004,{tone:"grey"}),mt(J.x-.02,Z,-1.86,.38,.022,.12,{fine:!1}),mt(1.88,Z,-2.2,.17,.055,.14),mt(1.88,Z+.055,-2.22,.19,.035,.05);let rt=j(1.36,Z,-2);mt(rt.x,Z,rt.z,.42,.012,.32),mt(rt.x,Z+.012,rt.z-.155,.42,.05,.01),mt(rt.x,Z+.012,rt.z+.155,.42,.05,.01),mt(rt.x-.205,Z+.012,rt.z,.01,.05,.3),mt(rt.x+.205,Z+.012,rt.z,.01,.05,.3);let U=new qt().makeRotationX(-.28).setPosition(1.72,Z+.085,-1.93);ht(U,.085,.16,.012),ht(U.clone().multiply(new qt().makeTranslation(0,0,.0065)),.07,.135,.002,{tone:"grey",edges:!1}),mt(1.72,Z,-1.955,.07,.02,.06,{fine:!0}),N(2.05,z,-1.4,.03,.42,{fine:!0}),mt(2.05,z+.42,-1.4,.4,.04,.38),mt(2.05,z+.46,-1.21,.4,.36,.035);let st=3.505,Mt=-2.2,wt=1.2,dt=[.08,.55,1.02,1.49,1.96];for(let g of dt)mt(st,z+g-.025,(Mt+wt)/2,.45,.025,wt-Mt);for(let g of[Mt,-1.067,.067,wt])mt(st,z,g,.45,1.96,.03);for(let g of[0,3]){let A=z+dt[g];m(Mt+.03,wt-.03,(L,O,F,$,K)=>mt(st+.04,A,L,$,F,O,{tone:K}),g===3?.4:.42)}mt(1.18,z,1.95,.46,.34,.4,{ry:.08}),mt(1.2,z+.34,1.93,.38,.28,.34,{ry:-.12}),mt(1.74,z,2.08,.36,.3,.3,{ry:.3,tone:"alt"}),mt(3.25,z,2,.44,.4,.44,{ry:-.05}),mt(3.27,z+.4,2.02,.34,.26,.32,{ry:.2,tone:"alt"});let ee=(g,A,L,O)=>mt(g,A,L,.21,.003,.29,{ry:O,fine:!0});ee(2,Z,-1.98,.3),ee(1.9,Z+.003,-2.02,-.2),ee(1.55,z,.6,.7),ee(2.55,z,-.2,-.4),ee(1.25,z,-.85,1.2),N(4.25,0,3.1,.035,.85,{fine:!0}),ot(4.25,1.22,3.1,.4),await l();let bt=new Sn;x.add(bt);let Ut=new Jr({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),Te=new xe(Al(xt),Ut);Te.castShadow=Te.receiveShadow=!0,bt.add(Te),await l();let oe=new Fe({side:En,uniforms:{res:{value:new lt(1,1)},width:{value:1.25},color:{value:E.clone()}},vertexShader:`
        uniform vec2 res; uniform float width;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec4 clip = projectionMatrix * mv;
          vec3 nv = normalize(normalMatrix * normal);
          vec4 clip2 = projectionMatrix * (mv + vec4(nv * 0.01, 0.0));
          vec2 dir = normalize(clip2.xy / clip2.w - clip.xy / clip.w + 1e-7);
          clip.xy += dir * width * 2.0 / res * clip.w;
          gl_Position = clip;
        }`,fragmentShader:`
        uniform vec3 color;
        void main() {
          gl_FragColor = vec4(color, 1.0);
          #include <colorspace_fragment>
        }`});bt.add(new xe(Al(Ct),oe)),await l();let At=g=>{let A=new Float32Array(g.length*3);return g.forEach((L,O)=>{A[O*3]=L.x,A[O*3+1]=L.y,A[O*3+2]=L.z}),A},$t=new Ri(new ri().setPositions(At(St)),W),ce=new Ri(new ri().setPositions(At(Bt)),et);bt.add($t,ce),await l();let Le=1.4,Me=.15,Re=(g,A)=>{g.deleteAttribute("uv");let L=g.attributes.position.count,O=new Float32Array(L*3);for(let F=0;F<L;F++)O[F*3]=A.r,O[F*3+1]=A.g,O[F*3+2]=A.b;return g.setAttribute("color",new bn(O,3)),g},He=g=>Al(g.map(A=>{let L=new Ae().setAttribute("position",A.attributes.position.clone());L.setIndex(A.index.clone());let O=pp(L,1e-4);return O.computeVertexNormals(),O})),Ht=(g,A,L,O=24)=>{for(let F=0;F<O;F++){let $=F/O*Math.PI*2,K=(F+1)/O*Math.PI*2;L.push(j(Math.sin($)*A,g,Math.cos($)*A),j(Math.sin(K)*A,g,Math.cos(K)*A))}};function ue(g,A,L){let O=new Sn,F=new xe(Al(g),L?.solid??Ut);return F.castShadow=F.receiveShadow=!0,O.add(F,new xe(He(g),L?.hull??oe)),A?.length&&O.add(new Ri(new ri().setPositions(At(A)),L?.line??W)),O}function fe(){let g=F=>new Jr({color:F,vertexColors:!0,transparent:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),A=oe.uniforms,L=new Fe({side:En,transparent:!0,uniforms:{res:A.res,width:A.width,color:A.color,opacity:{value:1}},vertexShader:oe.vertexShader,fragmentShader:oe.fragmentShader.replace("uniform vec3 color;","uniform vec3 color; uniform float opacity;").replace("vec4(color, 1.0)","vec4(color, opacity)")}),O=nt(1.3);return O.transparent=!0,ct.push(O),{body:g(D.grey),limb:g(D.mid),bag:g(D.card),hull:L,line:O}}function tn(g,A){let L=g==="ph",O=L?null:fe(),F=Gt=>O&&{solid:Gt,hull:O.hull,line:O.line},$=D.card,K=D.card,gt=new Sn,yt=new Sn;yt.scale.setScalar(Le),gt.add(yt);let Y=[Re(new Es(Me,.36,8,20).translate(0,.3+Me+.18,0),$),Re(new Zr(.105,24,16).translate(0,1.08,0),$)],zt=[];if(L){Y.push(Re(new Xr(Me+.008,.2,.42,32).translate(0,.46,0),$)),Ht(.67,Me+.008,zt),Ht(.25,.2,zt);let Gt=Ge=>Ge>.81?Math.sqrt(Math.max(0,Me*Me-(Ge-.81)**2)):Me,pe=null;for(let Ge=0;Ge<=12;Ge++){let Xe=Ge/12,_e=(Xe*2-1)*.07,Je=.78+(.925-.78)*Math.abs(Xe*2-1),$n=Gt(Je),zi=j(_e,Je,Math.sqrt(Math.max(0,$n*$n-_e*_e))+.004);pe&&zt.push(pe,zi),pe=zi}let he=.055,se=new qt().makeRotationY(-.52).setPosition(-.075,.7,.132);for(let[Ge,Xe]of[[he,he*.34],[he*.34,he]])Y.push(Re(new Un(Ge,Xe,.008).applyMatrix4(se),b))}yt.add(ue(Y,zt,F(O?.body)));let Dt=(Gt,pe,he,se,Ge,Xe,_e)=>{let Je=new Sn,$n=new Sn;return Je.position.set(Gt,pe,0),$n.rotation.z=Xe,Je.add($n),$n.add(ue([Re(new Es(he,se,6,14).translate(0,-(he+se/2),0),Ge)],null,F(_e))),yt.add(Je),Je},Xt=[Dt(-.07,.36,.055,.25,K,0,O?.limb),Dt(.07,.36,.055,.25,K,0,O?.limb)],Wt=[Dt(-.17,.86,.042,.24,$,-.14,O?.body),Dt(.17,.86,.042,.24,$,.14,O?.body)],Jt=L?null:Wt.map(Gt=>{let pe=new Sn;pe.position.set(0,-.33,.02);let he=[];for(let se of[.012,-.012])he.push(j(-.035,-.06,se),j(0,0,0),j(0,0,0),j(.035,-.06,se));return pe.add(ue([Re(new Un(.13,.15,.07).translate(0,-.135,0),D.card)],he,F(O.bag))),pe.visible=!1,Gt.children[0].add(pe),pe});return bt.add(gt),gt.position.copy(A),gt.visible=!1,{outer:gt,pivot:yt,legs:Xt,arms:Wt,home:A,mats:O,bags:Jt}}let Pe=[tn("ph",j(-2.3,z,-1.24)),tn("cu",j(-1.72,z,.12))],Ee=[Pe[1]];for(let g=0;g<3;g++)Ee.push(tn("cu",Pe[1].home));Pe[0].path=new qr([j(1.3,z,-1.55),j(.2,z,-1.5),j(-1.2,z,-1.32),Pe[0].home],!1,"centripetal"),Pe[1].path=new qr([j(-3.05,z,3.5),j(-3.05,z,2.4),j(-2.55,z,1.3),Pe[1].home],!1,"centripetal");for(let[g,A]of Pe.entries()){A.len=A.path.getLength(),A.stride=A.len/Math.max(1,Math.round(A.len/(.34*Le)));let L=Pe[1-g].home;A.rest=Math.atan2(L.x-A.home.x,L.z-A.home.z)}let en=new w;function ai(g,A,L=!1){if(g.outer.visible=A>.001,!g.outer.visible)return;g.path.getPointAt(A,g.outer.position);let O=A*g.len,F=s?0:o(O,0,.3)*o(g.len-O,0,.3),$=Math.PI*O/g.stride,K=Math.sin($)*.55*F;g.legs[0].rotation.x=K,g.legs[1].rotation.x=-K,g.arms[0].rotation.x=-K*.8,g.arms[1].rotation.x=K*.8,g.pivot.position.y=Math.abs(Math.cos($))*.025*Le*F,g.pivot.rotation.x=.07*F,g.path.getTangentAt(Math.min(A,.999),en);let gt=Math.atan2(en.x,en.z)+(L?Math.PI:0),yt=g.rest-gt;yt=Math.atan2(Math.sin(yt),Math.cos(yt)),g.outer.rotation.y=gt+yt*o(A,.8,1)}await l();let k=new Yn({color:b.clone()}),Mr=new Jr({color:16777215}),Ci=j(-4.86,z+2.12,2.5);{let O=[[.095,.29],[.095,.095],[.29,.095],[.29,-.095],[.095,-.095],[.095,-.29],[-.095,-.29],[-.095,-.095],[-.29,-.095],[-.29,.095],[-.095,.095],[-.095,.29]],F=new Yr(O.map(([Xt,Wt])=>new lt(Xt,Wt))),$=new As(F,{depth:.075,bevelEnabled:!1});$.translate(0,0,-.075/2);let K=new xe($,[k,Mr]);K.position.copy(Ci),K.castShadow=!0,bt.add(K);let gt=[];for(let Xt=0;Xt<O.length;Xt++){let[Wt,Jt]=O[Xt],[Gt,pe]=O[(Xt+1)%O.length];for(let he of[-.075/2,.075/2])gt.push(j(Wt,Jt,he).add(Ci),j(Gt,pe,he).add(Ci));gt.push(j(Wt,Jt,-.075/2).add(Ci),j(Wt,Jt,.075/2).add(Ci))}bt.add(new Ri(new ri().setPositions(At(gt)),W));let yt=[],Y=new qt().makeTranslation(-4.5,z+2.12,2.5),zt=new Un(.3,.035,.035);Kt(Y,.3,.035,.035,yt);let Dt=new xe(zt,Mr);Dt.applyMatrix4(Y),bt.add(Dt),bt.add(new Ri(new ri().setPositions(At(yt)),W))}await l();let qe=[new It(4872826),new It(658191)],Sr=new sl(4872826,658191,.5);x.add(Sr);let ss=new Kr(3134588,0,2.6,2);ss.position.set(-4.8,z+2,2.85);let $i=new Kr(10336511,0,5,2);$i.position.set(2,1.75,-.3);let $e=new Kr(16777215,0,2.2,2);x.add(ss,$i,$e);let pn=new ol(10466006,.5);pn.position.set(-5.5,10,-3.2),pn.target.position.set(.2,0,0),pn.castShadow=!0;let on=pn.shadow;on.mapSize.set(2048,2048),on.camera.left=on.camera.bottom=-11,on.camera.right=on.camera.top=11,on.camera.near=1,on.camera.far=60,on.bias=-4e-4,on.normalBias=.02,on.radius=2.2;let Os=new xe(new ii(.31,.23),new Yn({color:16777215}));Os.position.set(2.38,z+.76+.075+.125,-2.12+.07+.111+.0035);let Fs=new Kr(15922675,0,3.2,1.6);Fs.position.set(2.3,z+.76+.34,-1.4),x.add(Os,Fs),x.add(pn,pn.target);let kn=new xe(new ii(60,60),new il({color:0,opacity:.35}));kn.rotation.x=-Math.PI/2,kn.position.y=-.3,kn.receiveShadow=!0,bt.add(kn);let as=new Sn;x.add(as);let Il="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";function br(g,A,L,O=0){let F=new Fe({uniforms:{color:{value:new It(L)},amt:{value:0},shape:{value:O}},transparent:!0,depthWrite:!1,blending:vr,vertexShader:Il,fragmentShader:`
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
          }`}),$=new xe(new ii(g,A),F);return $.renderOrder=2,as.add($),$}let Tr=(g,A,L,O)=>(g.rotation.x=-Math.PI/2,g.position.set(A,L,O),g),Ll=Tr(br(1,1.2,3134588),-4.6,.006,3),Qa=Tr(br(3.2,4.4,10336511),2.15,z+.003,-.2),oi=br(.9,1.5,10354632,1);oi.rotation.y=-Math.PI/2;let Bs=br(2.3,1.6,16777215,2);Bs.position.set(1.9,z+1.73,-2.425);let Nl=(()=>{let g=document.createElement("canvas");g.width=g.height=128;let A=g.getContext("2d"),L=A.createRadialGradient(64,64,0,64,64,64);return L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.25,"rgba(255,255,255,0.45)"),L.addColorStop(.6,"rgba(255,255,255,0.1)"),L.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=L,A.fillRect(0,0,128,128),new La(g)})(),zs=(g,A)=>{let L=new Pa(new Ts({map:Nl,color:g,transparent:!0,depthWrite:!1,blending:vr}));return L.scale.setScalar(A),L.userData.size=A,L.renderOrder=3,as.add(L),L},T=zs(3134588,1.5);T.position.copy(Ci);let V=zs(6545572,.45);V.position.set(-1.25,z+1.13,-.72);let tt=zs(14221288,.32),at=Tr(br(1,1,15660031,3),2.2,z+.004,0);at.visible=!1;let it=new Fe({depthTest:!1,depthWrite:!1,uniforms:{A:{value:-.3},G:{value:.5},warm:{value:0},sunX:{value:.04},stars:{value:1},px:{value:1},view:{value:new lt(1,1)},rampC:{value:t.RAMP.map(([,g])=>new w(g[0]/255,g[1]/255,g[2]/255))},tint:{value:new w(...t.TINT.map(g=>g/255))}},vertexShader:"void main() { gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",fragmentShader:`
        uniform float A, G, warm, sunX, stars, px;
        uniform vec2 view;
        uniform vec3 rampC[5];
        uniform vec3 tint;
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
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
        }`}),Tt=new xe(new ii(1,1),it);Tt.frustumCulled=!1,Tt.renderOrder=-10,x.add(Tt),await l();let Lt=()=>G(new Jr({color:16777215,emissive:0})),Pt=[Lt(),Lt(),Lt(),Lt()],Ot=.32,Zt=.19,le=.05,me=.016,Vt=(()=>{let g=new Yr,A=-Ot/2,L=Ot/2,O=-Zt/2,F=Zt/2;return g.moveTo(A+le,O),g.lineTo(A+.075,O),g.lineTo(A+.06,O-.065),g.lineTo(A+.12,O),g.lineTo(L-le,O),g.quadraticCurveTo(L,O,L,O+le),g.lineTo(L,F-le),g.quadraticCurveTo(L,F,L-le,F),g.lineTo(A+le,F),g.quadraticCurveTo(A,F,A,F-le),g.lineTo(A,O+le),g.quadraticCurveTo(A,O,A+le,O),g})(),ve=new As(Vt,{depth:me,bevelEnabled:!1,curveSegments:5});ve.translate(0,0,-me/2);let De=Vt.getPoints(5);De[0].distanceTo(De[De.length-1])<1e-6&&De.pop();let Ue=[];for(let g of[-me/2,me/2])for(let A=0;A<De.length;A++){let L=De[A],O=De[(A+1)%De.length];Ue.push(L.x,L.y,g,O.x,O.y,g)}for(let[g,A]of[[.04,.19],[.005,.21],[-.03,.11]])Ue.push(-.11,g,me/2+5e-4,-.11+A,g,me/2+5e-4);let Oe=(g,A,L)=>{let O=[],F=[];for(let $=0;$<8;$++)F.push([$&4?g/2:-g/2,$&2?A/2:-A/2,$&1?L/2:-L/2]);for(let $=0;$<8;$++)for(let K of[1,2,4])$&K||O.push(...F[$],...F[$|K]);return O},de=.3,we=.012,nn=Oe(de,de,we);for(let[g,A]of[[-.085,.2],[-.112,.13]])nn.push(-.11,g,we/2+5e-4,-.11+A,g,we/2+5e-4);let Yt=[],Et=(g,A)=>g+C()*(A-g),Fn=()=>new je().setFromEuler(new ei(Et(0,6.28),Et(0,6.28),Et(0,6.28))),os=(g,A=0,L=0)=>{let O=new je().setFromAxisAngle(j(0,1,0),g);return O.multiply(new je().setFromAxisAngle(j(1,0,0),-Math.PI/2+A)),O.multiply(new je().setFromAxisAngle(j(0,1,0),L)),O},li={x0:.95,x1:3,y0:.5,y1:2.3,z0:-1.6,z1:1.9},Ki=()=>j(Et(li.x0,li.x1),Et(li.y0,li.y1),Et(li.z0,li.z1)),Wn=40,Er=["card","alt","grey"],_i=0;for(let g=0;g<Wn;g++){let A=C()<.74,L,O;if(A)L=Ki(),O=Fn();else{if(C()<.3)L=j(Et(1.7,2.6),Z+.01+C()*.02,Et(-2.25,-1.85));else{let K=Et(0,6.28),gt=Math.sqrt(C())*.5;L=j(1.85+Math.cos(K)*gt*1.3,z+.009+_i++%6*.017,.55+Math.sin(K)*gt)}O=os(Et(0,6.28),Et(-.25,.25))}let F=os(Math.PI+Et(-.06,.06));Yt.push({g:0,idx:g,n:Wn,tone:Er[g%3],hue:B[g%3],air:A,p:L,q:O,tp:j(rt.x+Et(-.01,.01),Z+.012+me/2+g*(me+.001),rt.z+.01+Et(-.008,.008)),tq:F,local:Ue,th:Et(1.5,2.3)})}let Qi=20,wr=[j(1.45,0,.95),j(2.65,0,.75),j(2.2,0,-.75)],Rh=[0,0,0];for(let g=0;g<Qi;g++){let A=g%4===3,L=A?j(.17,.25,.1):j(Et(.17,.25),Et(.12,.2),Et(.15,.2)),O=C()<.45,F,$;if(O)F=Ki(),$=Fn();else{let zt=g%3,Dt=wr[zt],Xt=Rh[zt]++;F=j(Dt.x+Et(-.17,.17),z+L.y/2+(Xt>>1)*.19,Dt.z+Et(-.17,.17)),$=new je().setFromEuler(new ei(Et(-.06,.06)*(Xt>1),Et(0,6.28),Et(-.08,.08)*(Xt>1)))}let K=g<10?1:2,gt=g%10,yt=Mt+.2+gt*((wt-Mt-.4)/9),Y=Oe(L.x,L.y,L.z);A?Y.push(-L.x/2,L.y/2-.05,L.z/2+5e-4,L.x/2,L.y/2-.05,L.z/2+5e-4):Y.push(-L.x/2+.02,L.y/2+5e-4,0,L.x/2-.02,L.y/2+5e-4,0),Yt.push({g:1,idx:g,n:Qi,tone:A?"alt":"card",hue:H,air:O,p:F,q:$,s:L,tp:j(st-.02,z+dt[K]+L.y/2,yt),tq:new je().setFromAxisAngle(j(0,1,0),-Math.PI/2+Et(-.05,.05)),local:Y,th:Et(1.5,2.3)})}let Pi=12;for(let g=0;g<Pi;g++){let A=C()<.66,L,O;A?(L=Ki(),O=Fn()):(L=j(Et(1,3),z+.007+C()*.01,Et(-1.4,1.8)),O=os(Et(0,6.28),Et(-.1,.1)));let F=g%4,$=Math.floor(g/4);Yt.push({g:2,idx:g,n:Pi,tone:"card",hue:B[1+g%2],air:A,p:L,q:O,tp:j(1.3+F*.4,z+2.12-$*.39,-2.43+we/2+.006),tq:new je,local:nn,th:Et(1.5,2.3)})}for(let g of Yt)g.spinAxis=j(Et(-1,1),Et(-1,1),Et(-1,1)).normalize(),g.spin=Et(.25,.7)*(C()<.5?-1:1)*(g.g===1?.6:1),g.ph=Et(0,100),g.amp=g.air?Et(.03,.08):0,g.cur={p:new w,q:new je,sc:0,lt:0},g.lineCol=new It;await l();let tr=(g,A,L)=>{let O=new ko(g,L,A);return O.instanceMatrix.setUsage(Bd),O.castShadow=!0,O.receiveShadow=!0,O.frustumCulled=!1,x.add(O),O},ls=tr(ve,Wn,Pt[0]),ie=tr(new Un(1,1,1),Qi,Pt[1]),Xn=tr(new Un(de,de,we),Pi,Pt[2]),Zn=new ii(.24,.15).translate(0,.035,we/2+8e-4),Ii=tr(Zn,Pi,Pt[3]);Ii.castShadow=!1;let Li=new Un(.075,.048,.005),to=tr(Li,Qi,Pt[1]),ci=tr(new mr(.017,16).translate(.016,0,.0032),Qi,new Yn({color:16777215}));ci.castShadow=!1;for(let g of Yt)[ls,ie,Xn][g.g].setColorAt(g.idx,D[g.tone]),g.g===2&&Ii.setColorAt(g.idx,g.hue),g.g===1&&ci.setColorAt(g.idx,b);let eo=Oe(.075,.048,.005),Se=new Ri(new ri,vt),Cn=7e3;Se.geometry.setPositions(new Float32Array(Cn*6)),Se.frustumCulled=!1,x.add(Se),Se.geometry.setColors(new Float32Array(Cn*6));let cs=Se.geometry.attributes.instanceStart.data.array,Pn=Se.geometry.attributes.instanceColorStart.data.array;await l();let rn=(()=>{let g=[j(J.x,Z+.3,J.z-.12),j(J.x-.15,Z+.75,J.z+.1),j(1.6,1.95,-1.45),j(.6,2,-1.2),j(-.5,1.75,-.95),j(-1.15,1.35,-.8),j(-1.25,z+1.12,-.76)];return new qr(g,!1,"centripetal").getSpacedPoints(260)})(),Ce=[];for(let g=0;g<rn.length-1;g++)Ce.push(rn[g],rn[g+1]);let sn=new Ri(new ri().setPositions(At(Ce)),Nt);sn.geometry.setColors(new Float32Array(Ce.length*3));let fn=sn.geometry.attributes.instanceColorStart.data.array;sn.frustumCulled=!1,x.add(sn);let yi=rn.length-1,Hs=new xe(new Un(.05,.03,.05),Mr);x.add(Hs);let er=(()=>{let g=document.createElement("canvas");g.width=g.height=128;let A=g.getContext("2d");A.fillStyle="#1FA35C",A.beginPath(),A.arc(64,64,60,0,Math.PI*2),A.fill(),A.strokeStyle="#ffffff",A.lineWidth=13,A.lineCap="round",A.lineJoin="round",A.beginPath(),A.moveTo(37,66),A.lineTo(56,85),A.lineTo(92,46),A.stroke();let L=new La(g);return L.colorSpace=Ns,L})(),hs=[j(rt.x+.25,Z+.72,rt.z+.05),j(st-.25,z+1.42,wt-.05),j(2.82,z+2.24,-2.4),j(J.x+.3,Z+.5,J.z+.1)].map(g=>{let A=new Pa(new Ts({map:er,transparent:!0}));return A.position.copy(g),A.scale.setScalar(0),x.add(A),A}),mp=B[0].clone().multiplyScalar(2.2),Gs=new xe(new mr(.018,20),new Yn({color:mp}));Gs.applyMatrix4(U.clone().multiply(new qt().makeTranslation(0,.02,.0075))),Gs.matrixAutoUpdate=!1,Gs.updateMatrix=()=>{};let bg=Gs.matrix.clone();x.add(Gs);let Ph=new xe(new mr(.03,24),new Yn({color:mp}));Ph.position.set(J.x,Z+.2,J.z+.1845),x.add(Ph);let Tg=new Yn({color:B[0].clone().multiplyScalar(1.6),transparent:!0,opacity:1,depthWrite:!1,blending:vr}),gp=[0,1].map(()=>{let g=new xe(new Oa(.92,1,48),Tg.clone());return x.add(g),g}),Vs=new xe(new Zr(.02,12,8),new Yn({color:new It(2.4,2.6,2.4)}));x.add(Vs);let vp=new w().setFromMatrixPosition(U);await l();let jn=Eg(.9);x.add(jn.group);function Eg(g){let A={T:[0,1,0],UL:[-1,.465,0],UR:[1,.465,0],LL:[-1,-.465,0],LR:[1,-.465,0],C:[0,.465,g],Cp:[0,.465,-g],B:[0,-1,g],Bp:[0,-1,-g]},L=[["UL","LL","B","C"],["C","B","LR","UR"],["UR","LR","Bp","Cp"],["Cp","Bp","LL","UL"],["T","UL","C"],["T","C","UR"],["T","UR","Cp"],["T","Cp","UL"],["LL","Bp","B"],["LR","B","Bp"]],O=[],F=[];for(let he of L){let se=he.map(_e=>j(...A[_e])),Ge=new w().subVectors(se[1],se[0]).cross(new w().subVectors(se[2],se[0])).normalize(),Xe=se.length===4?[[0,1,2],[0,2,3]]:[[0,1,2]];for(let _e of Xe)for(let Je of _e)O.push(se[Je].x,se[Je].y,se[Je].z),F.push(Ge.x,Ge.y,Ge.z)}let $=new Ae;$.setAttribute("position",new jt(O,3)),$.setAttribute("normal",new jt(F,3));let K={L:{value:j(-1,.15,.5).normalize()},tLight:{value:.8},tMid:{value:-.16},lightTop:{value:new It(16777215)},lightBot:{value:new It(15263973)},midTop:{value:new It(13224389)},midBot:{value:new It(10921633)},ink:{value:E.clone()},uLS:{value:j(-.7,.55,.45).normalize()},uRest:{value:1},uBright:{value:1}},gt=`
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
        }`,yt=new Fe({uniforms:K,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,vertexShader:`
          varying vec3 vN; varying float vY;
          void main() { vN = normalMatrix * normal; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
          varying vec3 vN; varying float vY;
          ${gt}
          void main() {
            gl_FragColor = vec4(tone(vN, (1.0 - vY) * 0.5, (1.0 - vY) / 0.535, 0.0), 1.0);
            #include <colorspace_fragment>
          }`}),Y=new Sn,zt=new xe($,yt);zt.castShadow=!0,Y.add(zt);let Dt=new Ri(new ri().fromEdgesGeometry(new Na($,1)),Ft);Y.add(Dt);let Xt=(he,se,Ge,Xe)=>({...K,center:{value:new lt(he*.465,-.116)},radii:{value:new lt(...se)},side:{value:he},d:{value:g},lift:{value:Ge},blink:{value:1},look:{value:new lt},isPupil:{value:Xe?1:0}}),Wt=`
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
        }`,Jt=`
        uniform float isPupil;
        varying vec3 vN; varying float vV;
        ${gt}
        void main() {
          vec3 c = isPupil > 0.5 ? tone(vN, vV, vV, 1.0) : ink;
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`,Gt=new mr(1,48),pe=[];for(let he of[-1,1])for(let[se,Ge,Xe]of[[[.256,.302],.006,!1],[[.105,.14],.012,!0]]){let _e=new xe(Gt,new Fe({uniforms:Xt(he,se,Ge,Xe),vertexShader:Wt,fragmentShader:Jt,side:fi}));_e.frustumCulled=!1,Y.add(_e),pe.push(_e)}return{group:Y,mesh:zt,eyes:pe,U:K}}await l();let Ih=1,no=2,io=3,We=4,Ni=8,us=9,ks=[{t:j(-.25,.55,.1),az:-36,el:30,r:5.6},{t:j(-.3,.9,.05),az:-34,el:29,r:4.6},{t:j(2,.8,-.1),az:-30,el:33,r:2.7},{t:j(2.05,.95,-.35),az:-27,el:40,r:2.8},{t:j(1.75,1,-1.6),az:-18,el:36,r:1.95},{t:j(2.85,.95,-.55),az:-44,el:32,r:2.2},{t:j(1.95,1.45,-1.85),az:-12,el:22,r:1.95},{t:j(.45,1.15,-1.15),az:-22,el:36,r:2.75},{t:j(-.25,.55,.1),az:-36,el:30,r:5.6},{t:j(-.25,.55,.1),az:-36,el:30,r:5.6}],Lh=g=>g===0||g>=Ni,wg=g=>Lh(g)||g===Ih?1:0,_p=.5,yp=29.2,xp=[j(2.1,3.6,-.3),j(2.1,3.6,-.3),j(2.1,3.6,-.3),j(2,1.55,-.15),j(2.3,1.48,-1.05),j(2.35,1.55,-.2),j(1.95,1.3,-.95),j(1.9,1.35,-.55),j(2.38,1.5,-2.02),j(2.38,1.5,-2.02)],Ag=[j(rt.x,Z+.25,rt.z),j(st,z+.8,-.5),j(1.9,z+1.75,-2.43),j(J.x,Z+.2,J.z)],Rg=j(1.62,1.28,-1.62),ro=g=>g*g*g*(g*(g*6-15)+10),so=g=>g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2,Ye=g=>Math.min(1,Math.max(0,g)),Ne=(g,A,L)=>g+(A-g)*L,Dl=(g,A,L)=>Math.exp(Ne(Math.log(g),Math.log(A),L)),Di=Math.PI/180,Ar=Math.tan(y.fov*Di/2),Cg=g=>[0,1,2,3].map(A=>Ye((g-(We+A))/(A===3?.46:.42)));function Mp(g,A,L,O,F){let $=Math.cos(O*Di);g.position.set(A.x+Math.sin(L*Di)*$*F,A.y+Math.sin(O*Di)*F,A.z+Math.cos(L*Di)*$*F),g.lookAt(A)}function Pg(){let g=y.clone();Mp(g,ks[0].t,ks[0].az,ks[0].el,yp),g.updateMatrixWorld(!0);let A=g.matrixWorldInverse;bt.updateMatrixWorld(!0);let L=new w,O=new w,F={u0:1/0,u1:-1/0,v0:1/0,v1:-1/0},$=gt=>{O.copy(gt).applyMatrix4(A);let yt=O.x/-O.z,Y=O.y/-O.z;F.u0=Math.min(F.u0,yt),F.u1=Math.max(F.u1,yt),F.v0=Math.min(F.v0,Y),F.v1=Math.max(F.v1,Y)};bt.traverse(gt=>{if(!gt.isMesh||gt.isLineSegments2||gt===kn)return;let yt=gt.geometry.attributes.position;for(let Y=0;Y<yt.count;Y++)$(L.fromBufferAttribute(yt,Y).applyMatrix4(gt.matrixWorld))});let K=.03*Math.max(F.u1-F.u0,F.v1-F.v0);return F.u0-=K,F.u1+=K,F.v0-=K,F.v1+=K,F}await l();let Bn=Pg(),Jn=r.clientWidth,mn=r.clientHeight,ao=a.matches,Ig=document.querySelector(".stage"),ds={l:0,t:0,w:1,h:1},xi={zoom:1,zoomY:1,lx:0,ly:0,ls:1},Sp=()=>document.querySelector(".poster.open .poster-img"),Nh=()=>ao?"P":"D";for(let g of document.querySelectorAll(".poster-img"))g.dataset.rD||g.style.setProperty("--a",((Bn.u1-Bn.u0)/(Bn.v1-Bn.v0)).toFixed(5));function Lg(){Jn=r.clientWidth,mn=r.clientHeight,ao=a.matches;let g=Ig.getBoundingClientRect();Object.assign(ds,{l:g.left,t:g.top,w:Math.max(1,g.width),h:Math.max(1,g.height)});let A=Sp(),L=(A.dataset["r"+Nh()]||"").split(",").map(Number),O=L.length===4&&L.every(Number.isFinite)?{u0:L[0],v0:L[1],u1:L[2],v1:L[3]}:Bn,F=A.getBoundingClientRect(),$=F.width/(O.u1-O.u0),K=F.height>0?F.height/(O.v1-O.v0):$,gt=F.left+F.width/2,yt=F.top+scrollY+(F.height>0?F.height:K*(O.v1-O.v0))/2;xi.zoom=2*$*Ar/mn,xi.zoomY=2*K*Ar/mn,xi.lx=2*(gt-$*(O.u0+O.u1)/2)/Jn-1,xi.ly=1-2*(yt+K*(O.v0+O.v1)/2)/mn,xi.ls=Number(A.dataset["s"+Nh()])>0?$/Number(A.dataset["s"+Nh()]):1}let Ui={t:new w},Oi={t:new w};function bp(g,A){let L=ks[g];if(A.t.copy(L.t),A.az=L.az,A.el=L.el,Lh(g))return Object.assign(A,{dist:yp,zoom:xi.zoom,zoomY:xi.zoomY,lx:xi.lx,ly:xi.ly,ls:xi.ls});let O=ao?wg(g)?.72:.94:1;A.dist=L.r*mn/(Ar*Math.min(ds.w,ds.h)*O),A.zoom=A.zoomY=1,A.ls=1,A.lx=2*(ds.l+ds.w/2)/Jn-1,A.ly=1-2*(ds.t+ds.h/2)/mn}let Dh=g=>{let A=Math.min(ks.length-2,Math.floor(g));return[A,ro(Ye((g-A-_p)/(1-_p)))]},Uh=new w,Fi={},Tp=0,Ep=0,Ws=1,wp=1,Ap=1,Oh=1;function Rp(g,A,L,O){let[F,$]=Dh(g);bp(F,Ui),bp(F+1,Oi),Uh.lerpVectors(Ui.t,Oi.t,$);let K=Ne(Ui.az,Oi.az,$),gt=Ne(Ui.el,Oi.el,$),yt=Dl(Ui.dist,Oi.dist,$);Fi.cam&&({az:K,el:gt,dist:yt}=Fi.cam(K,gt,yt)),Ws=Dl(Ui.zoom,Oi.zoom,$),wp=Dl(Ui.zoomY,Oi.zoomY,$),Tp=Ne(Ui.lx,Oi.lx,$),Ep=Ne(Ui.ly,Oi.ly,$),Ap=Dl(Ui.ls,Oi.ls,$);let Y=s?0:ro(Ye((A-1)/4));K+=Y*L*1.6,gt+=Y*O*.9,Mp(y,Uh,K,gt,yt)}function Cp(){y.updateProjectionMatrix();let g=y.projectionMatrix.elements;g[0]*=Ws,g[5]*=wp,g[8]=-Tp,g[9]=-Ep,y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}let Xs=0,js=0,Fh=0,Bh=0,zh=(g,A)=>{Fh=g/Jn*2-1,Bh=A/mn*2-1};addEventListener("pointermove",g=>zh(g.clientX,g.clientY),{passive:!0}),addEventListener("touchstart",g=>g.touches[0]&&zh(g.touches[0].clientX,g.touches[0].clientY),{passive:!0}),addEventListener("touchmove",g=>g.touches[0]&&zh(g.touches[0].clientX,g.touches[0].clientY),{passive:!0});let Hh=new lt;function Pp(g,A){Hh.set(g,A);for(let L of ut)L.resolution.copy(Hh);oe.uniforms.res.value.copy(Hh),it.uniforms.view.value.set(g,A),it.uniforms.px.value=u.getPixelRatio()}function Gh(){Lg();let g=Qs(ys);on.mapSize.x!==g.shadow&&(on.mapSize.set(g.shadow,g.shadow),on.map?.dispose(),on.map=null),u.setPixelRatio(g.pr),u.setSize(Jn,mn,!1),xn&&(xn.setPixelRatio(u.getPixelRatio()),xn.setSize(Jn,mn)),y.aspect=Jn/mn,Pp(Jn,mn)}let oo=new qt,Rr=new qt,nr=new je,lo=new je,gn=new w,Cr=new w,Ng=j(1,1,1),Dg=j(0,0,0),Ug=j(1,1,1),Og=j(0,0,1),co=new hn,yn=0,Ip=0,Lp=0,Vh=!0,Mi=!1,ps=1,Np=2.5,fs=-1,ho=[0,0,0,0],Bi=g=>1-.74*ho[g],uo=s?0:1,ms=g=>g>0&&g<1?Math.sin(Math.PI*g):0,kh=qa.smoothstep,ir=new It,rr=new It(16777215),gs=new w,Ul=0,Ol=0,Wh=0,Fl=0,Dp=new w,Xh=!1,Up=-10,po=new w,Pr=new w;function Fg(g,A){if(!jn.group.visible||A<=.001)return;po.subVectors(jn.group.position,y.position);let L=po.length();po.divideScalar(L);let O=Pr.subVectors(g,y.position).dot(po);if(O<0||O>L+.35)return;Pr.copy(y.position).addScaledVector(po,Math.min(O,L)),Pr.subVectors(g,Pr);let F=Pr.length(),$=.56;F>=$||(F<1e-4?Pr.copy(y.up):Pr.divideScalar(F),g.addScaledVector(Pr,($-F)*A))}function jh(g,A,L,O){let F=A.elements;for(let $=0;$<g.length;$+=3){if(L>=Cn*2)return L;let K=g[$],gt=g[$+1],yt=g[$+2],Y=L*3;cs[Y]=F[0]*K+F[4]*gt+F[8]*yt+F[12],cs[Y+1]=F[1]*K+F[5]*gt+F[9]*yt+F[13],cs[Y+2]=F[2]*K+F[6]*gt+F[10]*yt+F[14],Pn[Y]=O.r,Pn[Y+1]=O.g,Pn[Y+2]=O.b,L++}return L}function Bg(g){let A=t.active,L=A>=We&&A<We+4?A-We:-1;for(let O=0;O<4;O++){let F=L>=0&&O!==L?1:0;ho[O]=s||i||!Mi?F:ho[O]+(F-ho[O])*(1-Math.exp(-g*6))}}function zg(g,A,L,O){let F=0;gs.copy(Rg);let $=wt-Mt+.4,K=Ye((O[1]-.68)/.32),gt=Mt-.2+$*K;Ol=ms(K),Ul=0;for(let Y of Yt){let zt=Ye((g-Y.th)/.2),Dt=O[Y.g],Xt=Y.idx/Y.n*(Y.g===1?.45:.55),Wt=so(Ye((Dt-Xt)/.45)),Jt=Y.cur,Gt=Bi(Y.g),pe=(1-Wt)*Y.amp,he=A+Y.ph;if(gn.copy(Y.p),Y.air?(gn.x+=Math.sin(he*.9)*pe,gn.y+=Math.sin(he*.7+2)*pe*1.3,gn.z+=Math.cos(he*.8)*pe,nr.setFromAxisAngle(Y.spinAxis,he*Y.spin*(s?0:.5)).multiply(Y.q)):nr.copy(Y.q),gn.y+=Math.pow(1-zt,3)*2.2,Y.g===0&&Wt>0&&Wt<1){let _e=gn.x-gs.x,Je=gn.z-gs.z,$n=kh(Wt,0,.5),zi=Ne(Math.hypot(_e,Je),.24+.07*Math.sin(Y.ph*3),$n),kl=Math.atan2(Je,_e)+Wt*Wt*12;Cr.set(gs.x+Math.cos(kl)*zi,Ne(gn.y,gs.y+Math.sin(Y.ph*5)*.17,$n),gs.z+Math.sin(kl)*zi);let Wl=Math.pow(kh(Wt,.6,1),2.4);Jt.p.lerpVectors(Cr,Y.tp,Wl),nr.multiply(lo.setFromAxisAngle(Y.spinAxis,Wt*8)),Jt.q.slerpQuaternions(nr,Y.tq,Wl)}else{Jt.p.lerpVectors(gn,Y.tp,Wt);let _e=gn.distanceTo(Y.tp);Jt.p.y+=Math.sin(Math.PI*Wt)*(.25+_e*.22),Jt.q.slerpQuaternions(nr,Y.tq,Wt)}let se=ms((Wt-.8)/.2)*uo;Jt.sc=zt>0||Wt>0?Math.min(1,zt*3+Wt)*(1+.12*se):0,Jt.lt=Wt,Fi.item&&Jt.sc>0&&Fi.item(Y,Jt,L),Jt.sc>0&&Fg(Jt.p,1-kh(Wt,.7,1)),Y.g===1?oo.compose(Jt.p,Jt.q,Cr.copy(Y.s).multiplyScalar(Jt.sc)):oo.compose(Jt.p,Jt.q,Cr.setScalar(Jt.sc)),[ls,ie,Xn][Y.g].setMatrixAt(Y.idx,oo),Y.g===2&&Ii.setMatrixAt(Y.idx,oo);let Xe;if(Y.g===0)Xe=(Ne(1.25,.55,Wt)+.25*ms(Wt*1.1)+.35*se)*Gt,ls.setColorAt(Y.idx,ir.copy(Y.hue).multiplyScalar(Xe).lerp(D[Y.tone],Q)),Y.lineCol.copy(Y.hue).lerp(rr,.45).multiplyScalar(Xe*1.15);else if(Y.g===1)Xe=(Ne(.85,.42,Wt)+.5*se)*Gt,Y.lineCol.copy(Y.hue).multiplyScalar(Xe);else{let _e=Ye((Dt-Xt-.46)/.03),Je=ms((Dt-Xt-.46)/.2)*uo*.35;Ul+=_e,Xe=((1-_e)*Ne(.95,.12,Wt)+_e*1.25+2.4*Je)*Gt,Ii.setColorAt(Y.idx,ir.copy(Y.hue).multiplyScalar(Xe).lerp(D.mid,Q)),Y.lineCol.copy(Y.hue).lerp(rr,.6).multiplyScalar((Ne(.8,.4,Wt)+.8*Je)*Gt)}if(Y.lineCol.lerp(E,Q),Jt.sc>.001&&(Y.g===1?(Rr.compose(Jt.p,Jt.q,Cr.setScalar(Jt.sc)),F=jh(Y.local,Rr,F,Y.lineCol)):F=jh(Y.local,oo,F,Y.lineCol)),Y.g===1){let _e=Ye((Wt-.85)/.15);Cr.set(Y.s.x*.18,-Y.s.y*.12,Y.s.z/2+.004).applyQuaternion(Jt.q).add(Jt.p),lo.setFromAxisAngle(Og,.12).premultiply(Jt.q),Rr.compose(Cr,lo,_e>0?Ng:Dg),to.setMatrixAt(Y.idx,Rr),_e>.01&&(F=jh(eo,Rr,F,Y.lineCol));let Je=(gt-Y.tp.z)/.12,$n=Ye(Je)*_e,zi=ms(Je/5)*uo*_e*.4;Rr.compose(Cr,lo,Ug.setScalar($n+1e-4)),ci.setMatrixAt(Y.idx,Rr),ci.setColorAt(Y.idx,ir.copy(B[0]).multiplyScalar((2.2+4*zi)*(.4+.6*Gt)).lerp(b,Q))}}for(let Y of[ls,ie,Xn,Ii,to,ci])Y.instanceMatrix.needsUpdate=!0;for(let Y of[ls,ie,Xn,Ii,ci])Y.instanceColor.needsUpdate=!0;Se.geometry.attributes.instanceStart.data.needsUpdate=!0,Se.geometry.attributes.instanceColorStart.data.needsUpdate=!0,Se.geometry.instanceCount=F>>1;let yt=Ye((g-1.6)/.75);Pt[1].emissive.copy(H).multiplyScalar(.07*yt*(1-.6*O[1])*Bi(1)*(1-Q)),Pt[2].emissive.copy(B[1]).multiplyScalar(.05*yt*(1-.6*O[2])*Bi(2)*(1-Q)),oi.position.set(st-.27,z+.88,gt),oi.material.uniforms.amt.value=Ol*2.2*Bi(1),oi.visible=Ol>0,Bs.material.uniforms.amt.value=Ul/Pi*.22*Bi(2)}function Hg(g,A,L,O){let F=jn.group,$=g>no+.62;F.visible=$,g>io-.03&&!Xh&&(Xh=!0,Up=Mi?A:-10),g<no+.66&&(Xh=!1);let K=(A-Up)/1.5;if(at.visible=$&&uo>0&&K>=0&&K<1,at.visible&&(at.scale.set(.3+(1-Math.pow(1-K,3))*2.9,.3+(1-Math.pow(1-K,3))*4.2,1),at.material.uniforms.amt.value=Math.sin(Math.PI*Math.min(1,K*1.6))*(1-K)*.8),Op=$&&uo>0&&K>=0&&K<1?Math.pow(Math.sin(Math.PI*K),2):0,!$)return;let[gt,yt]=Dh(g),Y=gt===no?so(yt):yt;F.position.lerpVectors(xp[gt],xp[gt+1],Y),gt===no&&(F.position.y+=Math.sin(Math.PI*Y)*.8),s||(F.position.y+=Math.sin(A*1.6)*.035),F.scale.setScalar(.27),co.position.copy(F.position),co.lookAt(y.position),nr.copy(co.quaternion);let zt=0,Dt=-1;for(let Gt=0;Gt<4;Gt++){let pe=Math.sin(Math.PI*Ye(L[Gt]*1.15));pe>zt&&(zt=pe,Dt=Gt)}Dt>=0&&(co.lookAt(Ag[Dt]),nr.slerp(co.quaternion,zt*.6));let Xt=yt>.002&&yt<.998||zt>.06||Math.abs(g-Ys)>.08;qs+=((Xt?0:1)-qs)*(1-Math.exp(-O/.18)),s&&(qs=Xt?0:1);let Wt=1-qs;s||nr.multiply(lo.setFromEuler(new ei(Math.sin(A*.7)*.05*Wt,Math.sin(A*.5)*.12*Wt,0))),F.quaternion.copy(nr),jn.U.uRest.value=qs;let Jt=1;if(!s&&(fs<0&&A>Np&&(fs=0),fs>=0)){fs+=O;let Gt=fs/.12;Jt=Gt<1?1-Math.sin(Math.PI*Gt)*.92:1,Gt>=1&&(fs=-1,Np=A+3+Math.random()*4)}for(let Gt of jn.eyes)Gt.material.uniforms.blink.value=Jt,Gt.material.uniforms.look.value.set(Xs*.085,-js*.09)}let Op=0,qs=1,Ys=0,Gg=j(-.35,1,.45).normalize();function Vg(){let g=jn.U;gn.subVectors(pn.position,pn.target.position).normalize(),gn.lerp(Gg,1-Zs).normalize(),g.uLS.value.copy(gn).transformDirection(y.matrixWorldInverse),g.uBright.value=Ne(Ne(.62,.78,Zs),1,Q)}function kg(g,A,L){let O=y.position.distanceTo(Uh)/Ws;for(let Gt=0;Gt<4;Gt++){let pe=ro(Ye((L[Gt]-.9)/.1));hs[Gt].scale.setScalar(pe*Math.min(.1,Math.max(.07,O*.009)))}let F=L[3],$=Math.floor(yi*so(F));sn.geometry.instanceCount=$,sn.visible=$>0,Hs.visible=$>0,$>0&&Hs.position.copy(rn[$]);let K=-1e3,gt=0;$>0&&F<1&&(K=$,gt=3.2);let yt=Bi(3),Y=.5*yt+.35*Ye((g-Ni+.5)/.5);for(let Gt=0;Gt<yi;Gt++){let pe=(K-Gt)/9,he=Y+(Gt<=K+1?gt*Math.exp(-pe*pe):0)*yt;ir.copy(B[0]).lerp(rr,.55).multiplyScalar(he).lerp(E,Q);let se=Gt*6;fn[se]=fn[se+3]=ir.r,fn[se+1]=fn[se+4]=ir.g,fn[se+2]=fn[se+5]=ir.b}sn.geometry.attributes.instanceColorStart.data.needsUpdate=!0,Wh=gt>0&&K>=0&&K<=yi?gt/3.2:0,Wh>0&&Dp.copy(rn[Math.min(yi,Math.max(0,Math.round(K)))]),tt.visible=Wh>0&&$>0,tt.position.copy(Dp),tt.material.opacity=.9*yt;let zt=F<1?ms((F-.86)/.14):K>=0?Math.exp(-Math.pow((K-yi)/22,2)):0;Fl=$>0?s?Ye((F-.9)/.1)*.5:Math.max(zt,.25*Ye((F-.9)/.1)):0,V.material.opacity=Fl*1.1,V.visible=Fl>.01,Ph.scale.setScalar(ro(Ye((F-.92)/.08))+1e-4);let Dt=L[1]>=.98&&g<Ni,Xt=ro(Ye((L[1]-.9)/.1))+1e-4;if(Gs.matrix.copy(bg).multiply(Rr.makeScale(Xt,Xt,Xt)),!Dt){Vs.visible=!1,gp.forEach(Gt=>Gt.visible=!1);return}let Wt=j(st-.25,z+1.2,-.5),Jt=s?.75:A%2.6/2.6;if(Jt<.42){let Gt=so(Jt/.42);Vs.visible=!0,Vs.position.lerpVectors(Wt,vp,Gt),Vs.position.y+=Math.sin(Math.PI*Gt)*.5}else Vs.visible=!1;gp.forEach((Gt,pe)=>{let he=Ye((Jt-.42-pe*.12)/.4);Gt.visible=he>0&&he<1,Gt.position.copy(vp),Gt.quaternion.copy(y.quaternion),Gt.scale.setScalar(.04+he*.16),Gt.material.opacity=(1-he)*.85})}let qh=new It,Wg=new It(13227775),Xg=new It(10466006),jg=new It(16769734),qg=new It(12171701),Yg=new It(9211016),Zg=new It(15263973),Yh=(g,A)=>{if(A<=g[0][0])return g[0][1];for(let L=0;L<g.length-1;L++){let[O,F]=g[L],[$,K]=g[L+1];if(A<=$)return Ne(F,K,(A-O)/($-O))}return g[g.length-1][1]},Jg=[[0,38],[Ih,34],[no,28],[io,20],[We,9],[We+.55,0],[We+1,-8]],$g=[[We+.55,-6],[We+.75,0],[We+1,4],[We+2,12],[We+3,22],[Ni,34],[us,46]],Kg=j(Math.cos(-36*Di),0,-Math.sin(-36*Di)),Qg=j(-Math.sin(-36*Di),0,-Math.cos(-36*Di)),t0=j(0,1,0),Zs=0,Js=-10,Ir=!1,e0=g=>1-(1-g)*(1-g);function n0(g,A){let L=A!==void 0&&Ir?A:Ir?Ne(-.05,.6,e0(Ye((g-We-.7)/(us-We-.7)))):Ne(.66,1.05,Math.pow(Ye(g/(We+.55)),1.3));return[Math.min(.5,(L-.5)*2),-.45]}let i0=[[0,-8],[.22,-1],[.45,5],[1,46]];function r0(g){let A=Yh(Jg,g);Js=Yh($g,g);let L;ps>0&&(Js=Yh(i0,ps),L=Ne(1.05,.6,ps));let O=o(A,-1,8)*(1-o(ps,.04,.22)),F=o(Js,-1,4);Ir=Js>-1;let[$,K]=n0(g,L),gt=(Ir?Js:A)*Di;gn.copy(Kg).multiplyScalar($).addScaledVector(Qg,K).normalize().multiplyScalar(Math.cos(gt)).addScaledVector(t0,Math.sin(gt)),gn.y<.04&&(gn.y=.04),gn.normalize(),pn.position.copy(pn.target.position).addScaledVector(gn,26),Zs=Ir?F:O;let yt=o(Js,6,40);Ir?(pn.color.copy(jg).lerp(rr,yt),pn.intensity=F*3):(pn.color.copy(Xg),pn.intensity=.6*O),pn.shadow.radius=Ne(2.4,1,yt),t.setSky(g);let Y=it.uniforms,zt=t.SKY;return Y.A.value=zt.A,Y.G.value=zt.G,Y.warm.value=zt.warm,Y.sunX.value=zt.sunX,Y.stars.value=i?0:1-o(zt.day,.2,.45),yt}function s0(g,A,L){let O=Q,F=1-O,$=r0(g),K=Ye((g-1.6)/.75),gt=(L[0]+L[1]+L[2]+L[3])/4;Sr.color.copy(qe[0]).lerp(rr,O),Sr.groundColor.copy(qe[1]).lerp(ir.copy(qg).lerp(Yg,Math.max(Zs*.6,$)*+Ir),O),Sr.intensity=Ne(.38,Ne(1.35,1.95,$),O),kn.material.opacity=Ir?Zs*Ne(.2,.15,$):.3*Zs,qh.copy(B[1]).lerp(B[0],.35).lerp(Wg,1-.4*Ye(K*(1-gt)*1.3));let yt=Ne(0,2.3,K)*(1-.4*gt);$i.intensity=yt*F,$i.color.copy(qh),$i.position.set(2,2.2,-.3),Qa.material.uniforms.color.value.copy(qh),Qa.material.uniforms.amt.value=yt*.03*F,k.color.copy(b).multiplyScalar(Ne(2.2,1,O)),ss.intensity=2.2*F,T.material.opacity=.42*F,Ll.material.uniforms.amt.value=.3*F,Os.material.color.setScalar(Ne(.98,.74,O)),Fs.intensity=1.3*F*F,g<io+.7?($e.color.setRGB(1,1,1),$e.position.copy(jn.group.position),$e.intensity=jn.group.visible?(.5+1.4*Op)*(1-o(g,io+.35,io+.68)):0):g<We+.7?($e.color.copy(B[1]).lerp(rr,.4),$e.position.copy(gs),$e.position.y+=.8,$e.intensity=.7*ms(L[0])*Bi(0)):g<We+1.7?($e.color.copy(B[0]).lerp(rr,.3),$e.position.set(st-.5,z+1,oi.position.z),$e.intensity=1.8*Ol*Bi(1)):g<We+2.7?($e.color.copy(B[2]).lerp(B[1],.5).lerp(rr,.3),$e.position.set(1.9,z+1.75,-1.55),$e.intensity=1.8*(Ul/Pi)*Bi(2)*(1-o(g,We+2.4,We+2.68))):($e.color.copy(B[0]).lerp(rr,.4),$e.position.set(-1.25,z+1.3,-.5),$e.intensity=.8*Fl*Bi(3)),$e.intensity*=F;for(let zt of[oi,Bs,at])zt.material.uniforms.amt.value*=F;V.material.opacity*=F,tt.material.opacity*=F,Pt[0].userData.glow.value=Pt[3].userData.glow.value=F;let Y=ir.copy(P).lerp(E,O);for(let zt of ct)zt.color.copy(Y);et.opacity=Ne(.5,.75,O),oe.uniforms.color.value.copy(Y),Ft.color.copy(Zg).lerp(E,O),Ks.pose(g)}let a0=document.getElementById("ov"),o0=64,l0=[...document.querySelectorAll("[data-key]")],c0=[...document.querySelectorAll(".beat-key")],Fp=l0.map(g=>{if(!g.hasAttribute("data-orky"))return"";let A=c0.indexOf(g);return(A>=0?document.querySelectorAll(".beats strong")[A]:g.querySelector("h2")).textContent.trim()}),$s=new w,h0=g=>($s.copy(g).project(y),{x:($s.x+1)/2*Jn,y:(1-$s.y)/2*mn,on:$s.z<1&&Math.abs($s.x)<1.02&&Math.abs($s.y)<1.02}),Lr=document.createElement("div");Lr.className="say ovh d r",Lr.style.opacity=0,Lr.innerHTML='<div class="bub"></div>',a0.appendChild(Lr);let Nr=Lr.firstChild,Bp=-1,vs=1,u0={update(){let g=Math.max(0,t.active);g!==Bp&&(Bp=g,Nr.textContent=Fp[g],Nr.classList.remove("pop"),Mi&&(Nr.offsetWidth,Nr.classList.add("pop")));let A=h0(jn.group.position),L=y.position.distanceTo(jn.group.position),O=.27*Ws/(L*Ar)*mn*.5,F=Nr.offsetWidth,$=Nr.offsetHeight,K=Math.max(10,O*.95),gt=16,yt=Jn-16;vs>0&&A.x+K+F>yt?vs=-1:vs<0&&A.x+K+F<yt-40&&(vs=1);let Y=vs>0?A.x+K:A.x-K-F,zt=A.y-O*.6-$-10,Dt=zt<o0+12;Dt&&(zt=A.y+O*.95+16),Y=Math.min(Math.max(Y,gt),yt-F),Lr.className=`say ovh ${Dt?"u":"d"} ${vs>0?"r":"l"}`,Nr.style.setProperty("--ox",vs>0?"0%":"100%"),Nr.style.setProperty("--oy",Dt?"0%":"100%"),Lr.style.transform=`translate(${Y.toFixed(1)}px, ${zt.toFixed(1)}px)`,Lr.style.opacity=A.on&&jn.group.visible&&Fp[g]&&t.wordsOn?1:0}},Bl=(g,A,L)=>Math.min(L,Math.max(A,g)),zp=new hl,Hp=new lt,d0=(g,A)=>(Hp.set(g/Jn*2-1,-(A/mn*2-1)),zp.setFromCamera(Hp,y),zp.ray),ln={x:-1,y:-1,on:!1,down:!1},fo={},Zh=[];function zl(g,A,L){ln.x=A,ln.y=L,ln.on=g!=="leave",g==="down"&&(ln.down=!0),fo[g]?.(A,L),g==="up"&&(ln.down=!1)}let p0=g=>!!g?.closest?.("a, button, input, textarea, label, .block.is-on, .site-header, .site-footer");document.addEventListener("pointerdown",g=>{g.button!==0||p0(g.target)||(g.pointerType==="mouse"&&g.preventDefault(),zl("down",g.clientX,g.clientY))}),addEventListener("pointermove",g=>zl("move",g.clientX,g.clientY),{passive:!0}),addEventListener("pointerup",g=>zl("up",g.clientX,g.clientY)),addEventListener("pointercancel",()=>{ln.down=!1,fo.up?.()}),r.addEventListener("pointerleave",()=>zl("leave",ln.x,ln.y));let Gp=()=>!1,Jh=!1;{r.classList.add("gl");let g=0,A=0,L=0,O=!1,F=0,$=0,K=0,gt=0;fo.down=(Y,zt)=>{O=!0,F=Y,$=zt,K=performance.now(),L=0,r.classList.add("dragging")},fo.move=(Y,zt)=>{if(!O)return;let Dt=performance.now(),Xt=Math.max(.008,(Dt-K)/1e3),Wt=(Y-F)*.45;g+=Wt,A=Bl(A+(zt-$)*.2,-25,30),L=Ne(L,Wt/Xt,.5),F=Y,$=zt,K=Dt,gt=0},fo.up=()=>{O&&(O=!1,gt=0,r.classList.remove("dragging"),performance.now()-K>90&&(L=0))},Zh.push(Y=>{if(!O&&(g+=L*Y,L*=Math.exp(-Y*2.4),Math.abs(L)<12&&(gt+=Y),gt>.8)){let zt=Math.round(g/360)*360,Dt=1-Math.exp(-Y*2.6);g+=(zt-g)*Dt,A-=A*Dt,Math.abs(zt-g)<.05&&(g-=zt)}}),Gp=()=>O||Math.abs(L)>.5||Math.abs(g)>.05||Math.abs(A)>.05;let yt=ks.map((Y,zt)=>Lh(zt)||zt===Ih?150:24);Fi.cam=(Y,zt,Dt)=>{let[Xt,Wt]=Dh(yn),Jt=Ne(yt[Xt],yt[Xt+1],Wt),Gt=Jt>100?25:12;return g=Bl(g,-2.2*Jt,2.2*Jt),A=Bl(A,-2*Gt,2*Gt),{az:Y-Jt*Math.tanh(g/Jt),el:Bl(zt+Gt*Math.tanh(A/Gt),4,80),dist:Dt}}}{for(let Dt of Yt)Dt.off=new w,Dt.vel=new w;let A=null,L=-1,O=-1,F=new lt,$=new w,K=new w,gt=new w,yt=new w,Y=new w,zt=new je;Zh.push(Dt=>{Jh=!1,A=ln.on?d0(ln.x,ln.y).clone():null;let Xt=1-Math.exp(-Dt*12),Wt=ln.on&&L>=0&&Dt>0?(ln.x-L)/Dt:0,Jt=ln.on&&O>=0&&Dt>0?(ln.y-O)/Dt:0;F.x+=(Math.max(-2500,Math.min(2500,Wt))-F.x)*Xt,F.y+=(Math.max(-2500,Math.min(2500,Jt))-F.y)*Xt,L=ln.on?ln.x:-1,O=ln.on?ln.y:-1,$.setFromMatrixColumn(y.matrixWorld,0),K.setFromMatrixColumn(y.matrixWorld,1)}),Fi.item=(Dt,Xt,Wt)=>{if(A){A.closestPointToPoint(Xt.p,gt),yt.subVectors(Xt.p,gt);let pe=yt.length();if(pe<1.05){let he=(1-pe/1.05)*(1-pe/1.05)*(1-.88*Xt.lt);Dt.vel.addScaledVector(yt.multiplyScalar(1/(pe+1e-4)),he*230*Wt);let se=2*Ar*y.position.distanceTo(Xt.p)/(mn*Ws);Dt.vel.addScaledVector($,F.x*se*he*7*Wt).addScaledVector(K,-F.y*se*he*7*Wt)}}Dt.vel.addScaledVector(Dt.off,-11*Wt).multiplyScalar(Math.exp(-Wt*2.4)),Dt.off.addScaledVector(Dt.vel,Wt),Dt.vel.lengthSq()>1e-6&&(Jh=!0);let Jt=Ne(.8,.12,Xt.lt);Dt.off.length()>Jt&&(Dt.off.setLength(Jt),Dt.vel.multiplyScalar(.5)),Xt.p.add(Dt.off);let Gt=Dt.off.length();Math.hypot(Dt.off.x,Dt.off.z)>1e-4&&(Y.set(Dt.off.z,0,-Dt.off.x).normalize(),Xt.q.premultiply(zt.setFromAxisAngle(Y,Gt*3)))}}Fi.update=g=>{for(let A of Zh)A(g)},Fi.busy=()=>Gp()||Jh;let Ks=(()=>{let g=parseInt(n.get("seed")??"",10),A=Number.isFinite(g)?g>>>0:Math.random()*4294967296>>>0;t.daySeed=A;let L=_(A),O=(R,pt)=>R+L()*(pt-R),F=(R,pt)=>j(R,z,pt),$=Pe[0],K=Pe[1],gt=[K.home,F(-1.16,.42),F(-.62,.72)],yt=F(-2.55,3.35),Y=F(-3.05,2.95),zt=F(-3.05,2.1),Dt=F(-2.35,1.45),Xt=F(-1.45,1.02),Wt=F(-.95,1.02),Jt=F(-1.5,2.05),Gt=F(-1.85,1.5),pe=F(-.9,1.55),he=[F(-2.5,.32),F(-3.2,.95),F(-3.25,1.45),zt,Y,F(-3.45,3.3),F(-4.9,3.4)],se=R=>R.x<-2.4&&R.z>1.6&&R.z<3.25,Ge=.4,Xe=.35,_e=.55,Je=.56,$n=120,zi=(R,pt)=>Math.atan2(pt.x-R.x,pt.z-R.z),kl=Math.atan2(Math.sin(Math.PI-$.rest),Math.cos(Math.PI-$.rest)),Wl=()=>!!document.activeElement?.matches?.(".contact-form :is(input, textarea)"),Yp=()=>Wl()?O(18,32):Math.min(22,1.5-Math.log(1-L())*6);for(let R of Ee)Object.assign(R,{state:R===K?"script":"off",pts:Array.from({length:10},()=>new w),cum:new Float32Array(10),n:0,plen:0,s:0,v:0,speed:1,h:1,yaw:0,face:0,walkS:0,m:0,at:0,goal:"",until:0,readyAt:0,leaving:!1,alpha:1,dying:!1,bag:0,bagOn:!1,side:1,reach:0,reachT:0,fadeIn:!1,fadeOut:!1,claim:!1,yieldTo:null,stuck:0,shownA:-1,cast:!0,meshes:[]}),R.outer.traverse(pt=>pt.isMesh&&pt.castShadow&&R.meshes.push(pt));let hi=[],ui={c:null,t0:0,a:0,shelf:0},Be={turn:0,step:0,reach:0,next:0,tripEnd:0},Dr=!1,Xl=!1,Ur=!1,_o=1/0,Si=1/0,iu=0,yo=0,ta=R=>{R<_o&&(_o=R)},Hi=new Float64Array(8);function ru(R){R.leaving=R.dying=R.bagOn=R.claim=R.fadeIn=R.fadeOut=!1,R.alpha=1,R.bag=R.reach=R.reachT=R.stuck=0,R.yieldTo=null}let jl=1;function ql(R,pt,ne){let ft=1;for(;ft<R.n-1&&R.cum[ft]<pt;)ft++;jl=ft;let ze=R.cum[ft]-R.cum[ft-1];return ne.lerpVectors(R.pts[ft-1],R.pts[ft],ze>1e-6?Ye((pt-R.cum[ft-1])/ze):1)}function cn(R,pt){let ne=R.n++;R.pts[ne].set(pt.x,z,pt.z),R.cum[ne]=ne?R.cum[ne-1]+R.pts[ne].distanceTo(R.pts[ne-1]):0}function xo(R){R.n=0,cn(R,R.outer.position)}function ea(R,pt){R.plen=R.cum[R.n-1],R.s=0,R.state="walk",R.goal=pt}let Zp=Array.from({length:10},()=>new w),S0=R=>R.distanceToSquared(Xt)<1e-6||R.distanceToSquared(Wt)<1e-6||gt.some(pt=>R.distanceToSquared(pt)<1e-6);function b0(R,pt){ql(R,R.s,ar);let ne=0;for(let ft=jl;ft<R.n;ft++)S0(R.pts[ft])||Zp[ne++].copy(R.pts[ft]);xo(R);for(let ft=0;ft<ne;ft++)cn(R,Zp[ft]);pt===2&&(cn(R,Xt),cn(R,Wt)),cn(R,gt[pt]),R.at=pt,ea(R,"slot")}function T0(R,pt){let ne=hi.length;hi.push(R),xo(R),pt&&cn(R,pt),ne===2&&(cn(R,Xt),cn(R,Wt)),cn(R,gt[ne]),R.at=ne,ea(R,"slot")}function E0(R){R.h=O(.9,1.07),R.speed=O(.7,1.15);let pt=L()<.3?O(.1,.3):O(.3,.92),ne=pt*O(.7,.92);if(R.mats.body.color.setRGB(pt,pt,pt,Ns),R.mats.limb.color.setRGB(ne,ne,ne,Ns),R.side=L()<.5?0:1,ru(R),R.outer.position.set(O(-.7,.1),z,3.3+O(-.05,.05)),R.yaw=R.face=-Math.PI/2,R.walkS=0,R.v=R.speed,R.m=1,xo(R),cn(R,yt),cn(R,Y),cn(R,zt),L()<.35)cn(R,Jt),ea(R,"browse");else{let ft=hi.length;hi.push(R),cn(R,Dt),ft===2&&(cn(R,Xt),cn(R,Wt)),cn(R,gt[ft]),R.at=ft,ea(R,"slot")}R.fadeIn=!0}function w0(R){hi.shift(),R.leaving=!0,R.reachT=0,xo(R);for(let pt=0;pt<he.length;pt++)cn(R,he[pt]);ea(R,"out"),R.fadeOut=!0}function su(R,pt){ru(R),R.state="script",R.alpha=pt,R.h=1,R.mats.body.color.copy(D.grey),R.mats.limb.color.copy(D.mid)}function Jp(R){R===K&&!Dr?su(R,0):(ru(R),R.state="off",R.outer.visible=!1)}function A0(R){iu=R,Si=R+O(2.5,5),Be.next=R+O(4,9),Be.tripEnd=0;let pt=K;pt.state==="script"&&(pt.state="queue",pt.at=0,pt.readyAt=R+O(1,2),pt.yaw=pt.face=pt.rest,pt.h=1,pt.speed=O(.75,1.1),pt.side=1,pt.m=pt.walkS=pt.v=0,pt.outer.position.copy(pt.home),hi.push(pt))}function R0(){ui.c=null,hi.length=0,Si=1/0;for(let R of Ee){if(R.reachT=0,R.state==="off"){R===K&&su(R,0);continue}if(R.state!=="script"){if(R===K&&!R.bagOn&&R.at===0&&(R.state==="queue"||R.state==="serve")&&R.outer.position.distanceToSquared(R.home)<1e-4){su(R,R.alpha);continue}R.dying=!0}}}let ar=new w;function C0(R,pt,ne){let ft=R.outer.position;ql(R,R.s+Ge,ar);let ze=!1;R.yieldTo=null;let Ve=ar.x-ft.x,di=ar.z-ft.z,zn=Math.hypot(Ve,di);if(zn>1e-4)for(let Ke of Ee){if(Ke===R||!Ke.outer.visible||Ke.yieldTo===R||R.leaving&&!Ke.leaving||R.stuck>1.2&&Ke.state!=="walk")continue;let Gi=Ke.outer.position.x-ft.x,So=Ke.outer.position.z-ft.z,Qp=(Gi*Ve+So*di)/zn,B0=Math.abs(Gi*di-So*Ve)/zn;if(Qp>.05&&Qp<zn+Xe&&B0<_e){ze=!0,R.yieldTo=Ke;break}}R.stuck=ze&&R.yieldTo.state!=="walk"?R.stuck+pt:0;let Mn=!se(ft)&&se(ar);if(!ze&&Mn){for(let Ke of Ee)if(Ke!==R&&Ke.claim&&Ke.leaving!==R.leaving){ze=!0;break}}R.claim=se(ft)||!ze&&se(ar);let Or=R.plen-R.s,F0=ze?0:Math.min(R.speed,.15+Or*2.2);R.v+=(F0-R.v)*(1-Math.exp(-pt*9)),ze&&R.v<.03&&(R.v=0);let na=Math.min(Or,R.v*pt);if(na>0){ql(R,R.s+na,ar);for(let Ke of Ee){if(Ke===R||!Ke.outer.visible||Ke.yieldTo===R||R.leaving&&!Ke.leaving)continue;let Gi=Ke.outer.position,So=Math.hypot(ar.x-Gi.x,ar.z-Gi.z);if(So<Je&&So<Math.hypot(ft.x-Gi.x,ft.z-Gi.z)){na=0,R.v=0;break}}}if(R.s+=na,R.walkS+=na,ql(R,R.s,ft),na>1e-6){let Ke=R.pts[jl-1],Gi=R.pts[jl];R.face=Math.atan2(Gi.x-Ke.x,Gi.z-Ke.z),Ur=!0}else Or>1e-4&&ta(ne+.3)}function P0(R,pt){R.fadeIn=!1,R.v=0,R.goal==="browse"?(R.state="browse",R.until=pt+O(1.8,4.2),R.face=zi(R.outer.position,pe)):R.goal==="slot"?(R.state="queue",R.face=zi(R.outer.position,$.home),R.at===0&&(R.readyAt=pt+O(.4,1.2))):Jp(R)}function Mo(R,pt,ne,ft){let ze=R+(pt-R)*(1-Math.exp(-ne*ft));return Math.abs(pt-ze)<.001?pt:(Ur=!0,ze)}function $p(R,pt){let ne=Math.atan2(Math.sin(R.face-R.yaw),Math.cos(R.face-R.yaw));Math.abs(ne)>.001?(R.yaw+=ne*(1-Math.exp(-pt*7)),Ur=!0):R.yaw=R.face,R.m=Mo(R.m,R.state==="walk"?Math.min(1,R.v/(.5*R.speed)):0,pt,10),R.reach=Mo(R.reach,R.reachT,pt,8),R.bagOn&&R.bag<1&&(R.bag=Math.min(1,R.bag+pt/.3),Ur=!0),!R.dying&&R.alpha<1&&(R.alpha=Math.min(1,R.alpha+pt/.45),Ur=!0)}function I0(R,pt,ne){if(R.state!=="off"){if(R.state==="script"){$p(R,pt);return}if(R.dying){R.alpha-=pt/.4,Ur=!0,R.alpha<=0&&Jp(R);return}if(R.state==="walk"){if(R.goal==="slot"){let ft=hi.indexOf(R);ft>=0&&ft<R.at&&b0(R,ft)}C0(R,pt,ne),R.s>=R.plen-1e-4&&P0(R,ne)}else if(R.state==="browse")ne>=R.until?T0(R,Gt):ta(R.until);else if(R.state==="queue"){let ft=hi.indexOf(R);ft<R.at?(xo(R),cn(R,gt[ft]),R.at=ft,ea(R,"slot")):ft===0&&!ui.c&&(ne>=R.readyAt?(ui.c=R,ui.t0=ne,ui.a=O(.6,1.5),ui.shelf=L()<.7?O(.9,2):0,R.state="serve"):ta(R.readyAt))}R.state!=="off"&&$p(R,pt)}}function L0(R,pt){let ne=0,ft=0,ze=ui.c;if(ze){let Ve=R-ui.t0,di=ui.a,zn=ui.shelf,Mn=di+(zn?zn+1.1:0);if(zn&&Ve>=di&&Ve<di+.55+zn&&(ne=1),Ve>=Mn&&Ve<Mn+.6&&(ft=1),ze.reachT=Ve>=Mn+.1&&Ve<Mn+.7?1:0,Ve>=Mn+.35&&(ze.bagOn=!0),Ve>=Mn+1.05)w0(ze),ui.c=null,Be.next=Math.max(Be.next,R+O(2.5,6));else{Hi[0]=di,Hi[1]=di+.55+zn,Hi[2]=Mn,Hi[3]=Mn+.1,Hi[4]=Mn+.35,Hi[5]=Mn+.6,Hi[6]=Mn+.7,Hi[7]=Mn+1.05;for(let Or=0;Or<8;Or++)if(Hi[Or]>Ve){ta(ui.t0+Hi[Or]);break}}}else if(Dr&&!Xl){let Ve=hi.length>0&&hi[0].state==="queue"&&hi[0].at===0;!Ve&&R>=Be.next&&R>=Be.tripEnd&&(Be.tripEnd=R+O(1.2,2.6),Be.next=Be.tripEnd+O(5,12)),!Ve&&R<Be.tripEnd&&(ne=1),ta(R<Be.tripEnd?Be.tripEnd:Be.next)}Be.turn=Mo(Be.turn,ne,pt,4.5),Be.step=Mo(Be.step,ne,pt,4.5),Be.reach=Mo(Be.reach,ft,pt,9)}function N0(R){let pt=performance.now()/1e3;Ur=!1,_o=1/0;let ne=!s&&Mi&&(Ys>=us&&yn>=us||Ys<=0&&yn<=.001)&&ys<$h.length-1;if(ne!==Dr&&(Dr=ne,Dr?A0(pt):R0()),Xl=pt-iu>$n,Dr&&!Xl){if(Si===1/0&&(Si=pt+Yp()),pt>=Si){let ft=0,ze=null;for(let Ve of Ee)Ve.state==="off"?ze??=Ve:Ve.leaving&&Ve.outer.position.z>2.6||ft++;ft<3&&ze&&E0(ze),Si=pt+Yp()}ta(Si)}else Si=1/0;L0(pt,R);for(let ft of Ee)I0(ft,R,pt)}function Kp(R,pt){if(R.outer.visible=R.outer.visible&&pt>.004,pt===R.shownA)return;R.shownA=pt;let ne=R.mats;ne.body.opacity=ne.limb.opacity=ne.bag.opacity=ne.line.opacity=pt,ne.hull.uniforms.opacity.value=pt;let ft=pt>.5;if(ft!==R.cast){R.cast=ft;for(let ze of R.meshes)ze.castShadow=ft}}function D0(R){let pt=$,ne=R<Ni;if(ai(pt,Math.max(o(R,Ni+.05,Ni+.4),o(ps,.3,.75)),ne),pt.outer.visible&&Be.turn+Be.step+Be.reach>0){pt.outer.rotation.y+=Be.turn*kl,pt.outer.position.z-=Be.step*.3;let ft=Math.sin(Math.PI*Be.step)*.32;pt.legs[0].rotation.x=ft,pt.legs[1].rotation.x=-ft,pt.arms[0].rotation.x=-ft*.6,pt.arms[1].rotation.x=ft*.6-Be.reach*1.2}for(let ft of Ee){if(ft.state==="off"){ft.outer.visible=!1;continue}if(ft.state==="script"){ai(ft,Math.max(o(R,Ni+.2,Ni+.7),o(ps,.65,1)),ne),ft.pivot.scale.setScalar(Le),ft.bags[0].visible=ft.bags[1].visible=!1,Kp(ft,ft.alpha);continue}let ze=ft.alpha*(ft.fadeIn?Math.min(1,ft.walkS/.8):1)*(ft.fadeOut?Math.min(1,(ft.plen-ft.s)/.9):1);ft.outer.visible=!0,ft.outer.rotation.y=ft.yaw;let Ve=Le*ft.h,di=Math.PI*ft.walkS/(.34*Ve),zn=Math.sin(di)*.55*ft.m;ft.legs[0].rotation.x=zn,ft.legs[1].rotation.x=-zn,ft.arms[0].rotation.x=-zn*.8,ft.arms[1].rotation.x=zn*.8,ft.arms[ft.side].rotation.x-=ft.reach*1.05,ft.pivot.scale.setScalar(Ve),ft.pivot.position.y=Math.abs(Math.cos(di))*.025*Ve*ft.m,ft.pivot.rotation.x=.07*ft.m;let Mn=ft.bags[ft.side];Mn.visible=ft.bag>0,Mn.scale.setScalar(Math.max(.001,so(ft.bag))),ft.bags[1-ft.side].visible=!1,Kp(ft,ze)}}let U0=()=>{yo=0,go()},O0=()=>{iu=performance.now()/1e3,Dr&&Xl&&go()};for(let R of["scroll","pointermove","pointerdown","wheel","touchstart","keydown"])addEventListener(R,O0,{passive:!0});return document.querySelector(".contact-form")?.addEventListener("focusin",()=>{!Dr||Si===1/0||(Si=Math.max(Si,performance.now()/1e3+O(12,20)))}),{update:N0,pose:D0,get moving(){return Ur},alarm(){clearTimeout(yo),yo=_o<1/0?setTimeout(U0,Math.max(0,_o*1e3-performance.now())+5):0},disarm(){clearTimeout(yo),yo=0}}})();function Vp(g,A,L,O,F){i||t.apply(g),Rp(g,A,O,F),Cp();let $=Ap*Oh;for(let Y of ut)Y!==Ft&&(Y.linewidth=Y.userData.base*$);oe.uniforms.width.value=1.25*$,Bg(L);let K=Cg(g);ps=t.openAt(g),Q=o(t.skyState(g).day,.2,.92),Hg(g,A,K,L),zg(g,A,L,K),kg(g,A,K),s0(g,A,K),y.updateMatrixWorld(),Vg();let gt=y.position.distanceTo(jn.group.position),yt=2*.27*Ws/(2*gt*Ar)*mn;Ft.linewidth=Math.max(1.1,yt*.016)*Oh,g0(),u0.update?.(g)}let kp=n.get("bloom"),xn=null,_s=null,sr=0;if(kp!=="0"){let g=new Qe(1,1,{type:_n,samples:4});xn=new wh(u,g),xn.addPass(new Ah(x,y)),_s=new Ka(new lt(1,1),.32,.12,1),xn.addPass(_s),xn.addPass(new Pl)}let $h=[{pr:2,shadow:2048,bloom:!0,every:1},{pr:1.5,shadow:2048,bloom:!0,every:1},{pr:1,shadow:2048,bloom:!1,every:1},{pr:1,shadow:1024,bloom:!1,every:2},{pr:.75,shadow:1024,bloom:!1,every:3}],ys=i?0:(g=>/intel.*\bhd graphics|uhd graphics [56]\d\d|mali-(t|g[57]\d\b)|adreno\D*[3-5]\d\d\b|powervr/i.test(g)?1:0)(f),Wp=0,Qs=g=>{let A=$h[g];return{pr:Math.min(t.pixelRatio(),A.pr),shadow:A.shadow,bloom:!ao&&A.bloom,every:A.every}},Hl=()=>!!xn&&(kp!==null||Qs(ys).bloom);function f0(){let g=JSON.stringify(Qs(ys));for(let A=ys+1;A<$h.length;A++)if(JSON.stringify(Qs(A))!==g)return A;return-1}function m0(g){ys=g,Gh()}function g0(){Wp%Qs(ys).every===0&&(u.shadowMap.needsUpdate=!0),sr>.002&&Q<.98&&(Mi||Kh>0||i)?(_s.strength=.32*(1-Q)*sr,xn.render()):u.render(x,y),t.frames+=1}let Kh=0,v0=g=>[...g].sort((A,L)=>A-L)[g.length>>1],Qh=[],tu=0,Xp=!1,mo=-1;function _0(g){if(document.hidden||g<=0||(scrollY>8&&(Xp=!0),Qh.push(g),tu+=g,tu<1.2))return;let A=v0(Qh);if(Qh=[],tu=0,A<=1/40)return;let L=f0();L>=0?mo=L:A>1/24&&!Xp&&yn<.001&&t.goPlain(!0)}let Gl=!1,eu=0,y0=Math.min(...Yt.map(g=>g.th));function x0(g){return yn!==Ys||!(yn<y0||yn>=us)||Math.abs(Fh-Xs)>.001||Math.abs(Bh-js)>.001||g<5&&Math.abs(Xs)+Math.abs(js)>.001||mo>=0||sr!==(Hl()?1:0)||jn.group.visible&&(fs>=0||Math.abs(1-qs)>.001)||ho.some((A,L)=>Math.abs(A-(t.active>=We&&t.active<We+4&&L!==t.active-We?1:0))>.001)?!1:!Fi.busy?.()}function go(){Gl||!vo||!Mi||!h()||(Ks.disarm(),Gl=!0,Vh=!0,eu=0,u.setAnimationLoop(nu))}function jp(){Gl=!1,u.setAnimationLoop(null)}function nu(g){let A=Vh?0:(g-Ip)/1e3,L=Math.min(.05,A);Vh=!1,Ip=g,Wp+=1,s||(Lp+=L);let O=Lp,F=s?0:1-Math.exp(-L*4);Xs+=(Fh-Xs)*F,js+=(Bh-js)*F,mo>=0&&(m0(mo),mo=-1);let $=t.storyT(scrollY),K=We+3.5,gt=$>=K-.001;if(Ys=gt?us:$,s||!Mi)yn=Ys;else if(gt&&yn>=K-.01)yn=Math.min(us,yn+L*(yn<Ni?.6:.3));else{let Y=gt?K:$;yn+=(Y-yn)*(1-Math.exp(-L*5)),Math.abs(Y-yn)<1e-4&&(yn=Y)}let yt=Hl()?1:0;if(sr=!Mi||Math.abs(yt-sr)<.01?yt:sr+(yt-sr)*(1-Math.exp(-L*3)),Fi.update?.(L),Ks.update(L),Vp(yn,O,L,Xs,js),Mi){_0(A),!x0(O)||Ks.moving?eu=0:++eu>=2&&(jp(),Ks.alarm());return}Kh+=1,!(Kh<2||!h())&&(Mi=!0,Gl=!0,t.driven=!0,r.classList.add("live"),(scrollY>=2||$>=.001)&&r.classList.add("fade"),t.unlock())}function M0(){let g=ao?"phone":"desktop";if(i!==g){window.__poster={error:`asked for the ${i} still but the page is in its ${g} layout`};return}let A=Number(n.get("dpr"))||(g==="phone"?1.5:2),L=Number(n.get("t"))||0,O=Number(n.get("q"))||.9,F=Sp(),$=(Bn.u1-Bn.u0)/(Bn.v1-Bn.v0);F.style.setProperty("--a",$.toFixed(5)),F.style.setProperty("--wmax","100vw");let K=F.getBoundingClientRect(),gt=A*(g==="phone"?2:1),yt=Math.round(K.width*A),Y=Math.round(yt/$/gt)*gt,zt=(Bn.v0+Bn.v1)/2,Dt=(Bn.u1-Bn.u0)*Y/yt,Xt={u0:Bn.u0,u1:Bn.u1,v0:zt-Dt/2,v1:zt+Dt/2},Wt=yt/(Xt.u1-Xt.u0),Jt=Qs(0).shadow;on.mapSize.set(Jt,Jt),u.setPixelRatio(1),u.setSize(yt,Y,!1),xn&&(xn.setPixelRatio(1),xn.setSize(yt,Y)),sr=Hl()?1:0,Jn=yt,mn=Y,y.aspect=yt/Y,Pp(yt,Y),Object.assign(xi,{zoom:2*Wt*Ar/Y,zoomY:2*Wt*Ar/Y,lx:2*(yt/2-Wt*(Xt.u0+Xt.u1)/2)/yt-1,ly:1-2*(Y/2+Wt*zt)/Y,ls:1}),Oh=A,Vp(L,0,0,0,0);let Gt=document.createElement("canvas");Gt.width=yt,Gt.height=Y;let pe=Gt.getContext("2d",{willReadFrequently:!0});pe.drawImage(u.domElement,0,0);let he=pe.getImageData(0,0,yt,Y),se=he.data,Ge=t.RAMP[Q<.5?0:t.RAMP.length-1][1];for(let _e=0;_e<se.length;_e+=4)Math.abs(se[_e]-Ge[0])<=2&&Math.abs(se[_e+1]-Ge[1])<=2&&Math.abs(se[_e+2]-Ge[2])<=2&&(se[_e+3]=0);pe.putImageData(he,0,0);let Xe=_e=>_e.toFixed(6);window.__poster={layout:g,dpr:A,t:L,uri:Gt.toDataURL("image/webp",O),width:yt,height:Y,r:[Xt.u0,Xt.v0,Xt.u1,Xt.v1].map(Xe).join(","),s:(K.width/(Xt.u1-Xt.u0)).toFixed(4),a:(yt/Y).toFixed(5),wmax:K.width}}if(i){M0();return}addEventListener("resize",()=>{Gh(),go()});let vo=!document.hidden;document.addEventListener("visibilitychange",()=>{h()&&(vo=!document.hidden,vo?Mi?go():u.setAnimationLoop(nu):(jp(),Ks.disarm()))});for(let g of["scroll","pointermove","pointerdown","pointerup","touchstart","touchmove","wheel"])addEventListener(g,go,{passive:!0});addEventListener("orkava:plain",()=>{vo=!1},{once:!0}),u.shadowMap.autoUpdate=!1,Gh(),sr=Hl()?1:0,Rp(t.storyT(scrollY),0,0,0),Cp(),await l();let qp=[];x.traverse(g=>{g.visible||(qp.push(g),g.visible=!0)});let Vl=[u.compileAsync(x,y)];if(xn){xn.setSize(Jn,mn);let g=new ii(2,2).deleteAttribute("normal"),A=O=>{let F=new Ra;for(let $ of O)if($){let K=new xe(g,$);K.frustumCulled=!1,F.add(K)}return F},L=xn.passes.find(O=>O instanceof Pl);L.material.defines={SRGB_TRANSFER:""},Object.assign(L,{_outputColorSpace:u.outputColorSpace,_toneMapping:u.toneMapping}),Vl.push(u.compileAsync(A([L.material]),y)),u.setRenderTarget(xn.renderTarget1),Vl.push(u.compileAsync(x,y)),Vl.push(u.compileAsync(A([_s.materialHighPassFilter,..._s.separableBlurMaterials,_s.compositeMaterial,_s.blendMaterial,xn.copyPass?.material]),y)),u.setRenderTarget(null)}for(let g of qp)g.visible=!1;await Promise.all(Vl.map(g=>g.catch(()=>{}))),vo&&h()&&u.setAnimationLoop(nu)}function _(x){return function(){x|=0,x=x+1831565813|0;let y=Math.imul(x^x>>>15,1|x);return y=y+Math.imul(y^y>>>7,61|y)^y,((y^y>>>14)>>>0)/4294967296}}function v(x,y,C,E,b){let P=v.rng||(v.rng=_(11)),B=x+.015;for(;B<y-.05;){let H=.06+P()*.08;if(B+H>y-.01)break;if(P()<.1){B+=H*.9;continue}let D=.1+P()*(b-.1),Q=E*(.6+P()*.35);C(B+H/2,H,D,Q,P()<.28?"alt":"card"),B+=H+.006+P()*.012}}function m(x,y,C,E){let b=m.rng||(m.rng=_(5)),P=x+.02;for(;P<y-.1;){let B=.22+b()*.16;if(P+B>y-.01)break;if(b()<.15){P+=B*.7;continue}C(P+B/2,B,.16+b()*(E-.2),.3+b()*.08,b()<.35?"alt":"card"),P+=B+.02+b()*.03}}})();})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
