const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gltfLoader-Ip18YELR.js","assets/three-A0NEnJSH.js","assets/dracoLoader-C3wfX6PV.js"])))=>i.map(i=>d[i]);
import{h as T,B as A,C as k,o as O,c as R,g as h}from"./index-BYsNZqPg.js";import{ac as P,ad as S,ae as x,z as y,af as z,p as F}from"./three-A0NEnJSH.js";const G="logo.glb",V={__name:"Logo3D",setup(I){const p=T(null);let s,r,a,n=null,i={},w=new P,v=null,d=L();const g="/";let c,l;function C(){const e=new S;i.light=e.load("texture-silver.jpg ".repeat(6).split(" ")),i.dark=e.load("texture-gold.jpg ".repeat(6).split(" "))}function L(){return getComputedStyle(document.documentElement).getPropertyValue("--is-dark").trim()==="1"?"dark":"light"}function M(){s=new x,r=new y(76.5,1,1.5,1e3),r.position.set(0,0,5),a=new z({antialias:!0,alpha:!0}),a.autoClear=!1,p.value.appendChild(a.domElement),u()}async function E(){if(!c||!l){const{GLTFLoader:o}=await h(async()=>{const{GLTFLoader:m}=await import("./gltfLoader-Ip18YELR.js");return{GLTFLoader:m}},__vite__mapDeps([0,1])),{DRACOLoader:b}=await h(async()=>{const{DRACOLoader:m}=await import("./dracoLoader-C3wfX6PV.js");return{DRACOLoader:m}},__vite__mapDeps([2,1]));c=o,l=b}const e=new c,t=new l;t.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),e.setDRACOLoader(t),e.load(`${g}${G}`,o=>{n=o.scene,f(d),s.add(n)},void 0,o=>console.error("Error loading model:",o))}function f(e){!n||!i[e]||n.traverse(t=>{t.isMesh&&(t.material=new F({metalness:1,roughness:0,envMap:i[e]}))})}function D(){const e=new MutationObserver(()=>{const t=L();t!==d&&(d=t,f(d))});return e.observe(document.documentElement,{attributes:!0}),e}function u(){const e=Math.min(window.innerWidth,window.innerHeight)*1.5;a.setSize(e,e),r.aspect=1,r.updateProjectionMatrix()}function _(){const e=w.getDelta();n&&(n.rotation.x=Math.PI/2,n.rotation.z+=e*.5),a.clear(),a.render(s,r),v=requestAnimationFrame(_)}return A(()=>{C(),M(),E();const e=D();window.addEventListener("resize",u),w.start(),_(),k(()=>{window.removeEventListener("resize",u),e.disconnect(),cancelAnimationFrame(v),a.dispose(),s.clear()})}),(e,t)=>(O(),R("div",{ref_key:"canvasContainer",ref:p,class:"canvas-container abs",style:{"background-color":"transparent",filter:"drop-shadow(0 0 1rem var(--accent0))","-webkit-filter":"drop-shadow(0 0 1rem var(--accent0))"}},null,512))}};export{V as default};
