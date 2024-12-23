const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncFrame-BIxG9TAK.js","assets/index-BLsylWfK.js","assets/index-Da09RCaM.css","assets/AsyncFrame-Vyhom64n.css"])))=>i.map(i=>d[i]);
import{_ as T,o as a,c as r,b as e,r as d,y as H,z as n,A as V,a as E,d as _,t as s,e as c,u as j,F as I,p as L,w as b,B as R,x as z,f as F,g as M}from"./index-BLsylWfK.js";import{H as G}from"./HighLight-V9Mm-EF-.js";import{g as A}from"./getPath-DuMssay4.js";import{g as B}from"./getThreeRandom-CCNb0v1N.js";const O={},Z={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"13",viewBox:"0 0 50 13",fill:"none",class:"nav-arrow"};function q(v,p){return a(),r("svg",Z,p[0]||(p[0]=[e("path",{opacity:"0.5","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.656006 1.33081e-07C-0.606846 2.23877e-05 0.274555 1.41676 0.656006 1.83698L10.8721 12.6848C11.2536 13.1051 11.872 13.1051 12.2535 12.6848C12.6349 12.2646 12.6349 11.5833 12.2535 11.1631L3.7048 2.15214H49.0232C49.5627 2.15214 50 1.67038 50 1.0761C50 0.481823 49.5627 6.58092e-05 49.0232 6.58092e-05H3.7048C3.7048 6.58092e-05 0.858303 -3.43187e-06 0.656006 1.33081e-07Z"},null,-1)]))}const D=T(O,[["render",q],["__scopeId","data-v-c7e9770e"]]);function J(v){return v==="product-catalog"?"https://github.com/fe-jan23-team-six":"https://github.com/vadim4web/"+v}const K={class:"flex-col-start project-page"},Q={class:"flex-col-start page-header padding-13"},U={class:"h2"},W={class:"t2"},X={class:"project-details flex-col-start"},Y={class:"text flex-col-start"},ee={class:"h3"},te={class:"p4"},se={class:"p4"},oe={class:"p4"},ae=["href"],re={class:"p4"},le=["href"],ne={key:0,class:"p4"},ce={key:1,class:"p4"},ie={class:"p4"},ue={key:0},de={key:1,class:"p4"},pe={class:"navigation"},_e={class:"others flex-col-start"},ve={class:"h1"},he={class:"cards"},me={class:"other-text flex-col-start"},fe={class:"h4"},ge={class:"other-p"},$e={__name:"ProjectView",setup(v){const p=F(()=>M(()=>import("./AsyncFrame-BIxG9TAK.js"),__vite__mapDeps([0,1,2,3]))),w=R(),h=d(w.params.projectName),o=d(C(h.value)),P=H(()=>J(h.value)),m=H(()=>A(o.value.path)),i=d(x()),$=d(S()),k=d(N()),y=d(B(n,i.value));function C(t){return n.find(u=>u.name===t)||{}}function x(){return n.findIndex(t=>t.name===o.value.name&&t.orientation===o.value.orientation)}function N(){const t=i.value<n.length-1?i.value+1:0;return n[t]}function S(){const t=i.value>0?i.value-1:n.length-1;return n[t]}return V(()=>{h.value=w.params.projectName,o.value=C(h.value),i.value=x(),$.value=S(),k.value=N(),y.value=B(n,i.value)}),E(()=>window.scrollTo(0,0)),(t,u)=>{const f=z("router-link");return a(),r("div",K,[e("div",Q,[e("h2",U,[_(s(t.$t("projectH21"))+" ",1),c(G)]),e("p",W,s(t.$t("projectT1")),1)]),e("div",X,[c(j(p),{iframeSrc:m.value,iframeClass:{white_bg:o.value.white_bg,preview:!0},iframeStyle:{zoom:"0.75"}},null,8,["iframeSrc","iframeClass"]),e("div",Y,[e("h3",ee,s(o.value.title),1),e("p",te,[e("b",null,s(t.$t("projectP1"))+":  ",1),_(" "+s(o.value.tags.join(" | ")),1)]),e("p",se,[e("b",null,s(t.$t("projectP2"))+":  ",1),_(" "+s(o.value.stack.join(", ")),1)]),e("p",oe,[e("b",null,s(t.$t("projectP3"))+":  ",1),e("a",{href:P.value,target:"_blank",class:"source",title:"GitHub Repository"},s(P.value),9,ae)]),e("p",re,[e("b",null,s(t.$t("projectP4"))+":  ",1),e("a",{href:m.value,target:"_blank",class:"demo",title:"Live Demo"},s(m.value),9,le)]),o.value.deps.length?(a(),r("div",ne,[e("b",null,s(t.$t("projectP5"))+":",1),u[0]||(u[0]=e("br",null,null,-1)),e("ul",null,[(a(!0),r(I,null,L(o.value.deps,(l,g)=>(a(),r("li",{key:g},s(l),1))),128))])])):(a(),r("p",ce,s(t.$t("projectP5_default")),1)),e("p",ie,[e("b",null,s(t.$t("projectP6"))+": ",1),u[1]||(u[1]=e("br",null,null,-1)),o.value["desc_"+t.$i18n.locale]?(a(),r("pre",ue,""+s(o.value["desc_"+t.$i18n.locale])+`
          `,1)):(a(),r("p",de,s(t.$t("projectP6_default")),1))])])]),e("div",pe,[c(f,{to:{name:"project",params:{projectName:$.value.name}},class:"nav-button prev"},{default:b(()=>[c(D),_(" "+s(t.$t("projectPrev")),1)]),_:1},8,["to"]),c(f,{to:{name:"project",params:{projectName:k.value.name}},class:"nav-button next"},{default:b(()=>[_(s(t.$t("projectNext"))+" ",1),c(D)]),_:1},8,["to"])]),e("div",_e,[e("h2",ve,s(t.$t("projectH22")),1),e("div",he,[(a(!0),r(I,null,L(y.value,(l,g)=>(a(),r("div",{class:"card",key:g},[c(f,{to:{name:"project",params:{projectName:l.name}},title:t.$t("worksDetails")+" `"+l.title+"`"},{default:b(()=>[c(j(p),{iframeSrc:j(A)(l.path),iframeClass:{white_bg:l.white_bg,other:!0},iframeStyle:{zoom:"0.25"}},null,8,["iframeSrc","iframeClass"]),e("div",me,[e("h4",fe,s(l.title),1),e("p",ge,s(l.stack.join(", ")),1)])]),_:2},1032,["to","title"])]))),128))])])])}}};export{$e as default};
