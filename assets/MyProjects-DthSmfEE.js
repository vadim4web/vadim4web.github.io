const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncFrame-B-Nvriln.js","assets/index-CgCFnTWI.js","assets/index-fJmOmZmt.css","assets/AsyncFrame-C53ljj0E.css"])))=>i.map(i=>d[i]);
import{r as d,l as t,a as C,m as E,c as n,b as a,d as m,t as i,e as h,F as f,p as v,q as T,w as g,s as V,o as r,u as p,f as $,x as B,g as L}from"./index-CgCFnTWI.js";import{H as N}from"./HighLight-BuuFes-r.js";import{_ as P}from"./ActiveElement-BC0MBbOS.js";import{g as I}from"./getPath-DuMssay4.js";const M={class:"flex-col-start projects-page"},x={class:"flex-col-start page-header padding-13"},A={class:"h2",style:{left:"-0.2rem"}},D={class:"t2"},F={class:"projects-container"},H=["id"],R={class:"title-box"},z={class:"t3"},K={__name:"MyProjects",setup(q){const k=$(()=>L(()=>import("./AsyncFrame-B-Nvriln.js"),__vite__mapDeps([0,1,2,3]))),l=d(2),s=d(t.slice(0,l.value)),u=d(s.value.length===t.length),w=()=>{t.length-1>l.value?(l.value+=2,s.value=t.slice(0,l.value)):t.length-1===l.value&&(s.value=t.slice()),u.value=s.value.length===t.length},b=()=>{const o=`three-${s.value.length-2}`,c=document.getElementById(o);c&&c.scrollIntoView({behavior:"smooth",block:"start"})};return C(()=>window.scrollTo(0,0)),E(()=>b()),(o,c)=>{const j=B("router-link");return r(),n("main",M,[a("div",x,[a("h2",A,[m(i(o.$t("worksH2"))+" ",1),h(N)]),a("p",D,i(o.$t("worksT1")),1)]),a("div",F,[(r(!0),n(f,null,v(s.value,(y,_)=>(r(),n("div",{class:"three",key:_,id:"three-"+_},[(r(!0),n(f,null,v(y,(e,S)=>(r(),n("div",{key:S,class:"project"},[h(p(k),{iframeSrc:p(I)(e.path),iframeClass:{vertical:e.orientation==="|",horizontal:e.orientation==="-",white_bg:e.white_bg,iframe:!0}},null,8,["iframeSrc","iframeClass"]),a("div",R,[a("p",z,i(e.tags.join(" | ")),1),h(j,{class:"t2",to:{name:"project",params:{projectName:e.name}},title:o.$t("worksDetails")+" `"+e.title+"`"},{default:g(()=>[m(i(e.title),1)]),_:2},1032,["to","title"])])]))),128))],8,H))),128)),u.value?V("",!0):(r(),T(P,{key:0,padding:"1.5rem 2.5rem",fontSize:"1.33rem",borderRadius:"2.166rem",bg:"var(--bg50)",class:"font-variant load-more",action:w},{default:g(()=>[m(i(o.$t("worksMore")),1)]),_:1}))])])}}};export{K as default};
