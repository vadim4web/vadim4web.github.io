const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PageHeader-BNTNNcfU.js","assets/index-vUJ3sy-M.js","assets/index-bwSus1SB.css","assets/FrameLoader-Df4iAxNi.js","assets/ArrowIcon-D622VafO.js"])))=>i.map(i=>d[i]);
import{C as z,c as m,r as d,D as n,E as G,d as a,h as c,k as p,g as e,t as s,j as v,F as A,y as C,i as b,G as M,B as Q,b as r,l as P,_ as k}from"./index-vUJ3sy-M.js";import{g as B}from"./getPath-Bn4ax-8e.js";import{g as H}from"./getThreeRandom-SFstBoGy.js";const q=h=>h==="product-catalog"?"https://github.com/fe-jan23-team-six":"https://github.com/vadim4web/"+h,J={class:"flex-col project-page"},K={class:"project-details flex-col"},U={class:"text flex-col"},W={class:"h3"},X={class:"p4"},Y={class:"p4"},Z={class:"p4"},ee=["href"],te={class:"p4"},se=["href"],oe={key:0,class:"p4"},ae={key:1,class:"p4"},re={class:"p4"},le={key:0},ne={key:1,class:"p4"},ce={class:"navigation"},ie={class:"others flex-col"},ue={class:"h1"},de={class:"cards"},pe={class:"other-text flex-col-between text-center"},_e={class:"h4"},me={class:"other-p"},je={__name:"ProjectDetails",setup(h){const F=P(()=>k(()=>import("./PageHeader-BNTNNcfU.js"),__vite__mapDeps([0,1,2]))),y=P(()=>k(()=>import("./FrameLoader-Df4iAxNi.js"),__vite__mapDeps([3,1,2]))),$=P(()=>k(()=>import("./ArrowIcon-D622VafO.js"),__vite__mapDeps([4,1,2]))),w=z("(min-width: 1024px)"),O=m(()=>w?"0.25":"0.175"),S=m(()=>w?"4rem":"5.714285rem"),x=M(),_=d(x.params.projectName),o=d(L(_.value)),i=d(R()),N=d(V()),D=d(T()),E=d(H(n,i.value)),I=m(()=>q(_.value)),f=m(()=>B(o.value.path));function L(t){return n.find(u=>u.name===t)||{}}function R(){return n.findIndex(t=>t.name===o.value.name&&t.orientation===o.value.orientation)}function T(){const t=i.value<n.length-1?i.value+1:0;return n[t]}function V(){const t=i.value>0?i.value-1:n.length-1;return n[t]}return G(()=>{_.value=x.params.projectName,o.value=L(_.value),i.value=R(),N.value=V(),D.value=T(),E.value=H(n,i.value)}),(t,u)=>{const j=Q("router-link");return r(),a("main",J,[c(p(F),{"head-key":"projectH21","text-key":"projectT1"}),e("div",K,[c(p(y),{"iframe-class":{white_bg:o.value.white_bg,preview:!0},"iframe-src":f.value,scrolling:"yes"},null,8,["iframe-class","iframe-src"]),e("div",U,[e("h3",W,s(o.value.title),1),e("p",X,[e("b",null,s(t.$t("projectP1"))+":  ",1),v(" "+s(o.value.tags.join(" | ")),1)]),e("p",Y,[e("b",null,s(t.$t("projectP2"))+":  ",1),v(" "+s(o.value.stack.join(", ")),1)]),e("p",Z,[e("b",null,s(t.$t("projectP3"))+":  ",1),e("a",{class:"source",href:I.value,target:"_blank",title:"GitHub Repository"},[e("i",null,s(I.value),1)],8,ee)]),e("p",te,[e("b",null,s(t.$t("projectP4"))+":  ",1),e("a",{class:"demo",href:f.value,target:"_blank",title:"Live Demo"},[e("i",null,s(f.value),1)],8,se)]),o.value.deps.length?(r(),a("div",oe,[e("b",null,s(t.$t("projectP5"))+":",1),u[0]||(u[0]=e("br",null,null,-1)),e("ul",null,[(r(!0),a(A,null,C(o.value.deps,(l,g)=>(r(),a("li",{key:g},s(l),1))),128))])])):(r(),a("p",ae,s(t.$t("projectP5_default")),1)),e("div",re,[e("b",null,s(t.$t("projectP6"))+": ",1),u[1]||(u[1]=e("br",null,null,-1)),o.value["desc_"+t.$i18n.locale]?(r(),a("pre",le,s(o.value["desc_"+t.$i18n.locale])+`
          `,1)):(r(),a("p",ne,s(t.$t("projectP6_default")),1))])])]),e("div",ce,[c(j,{class:"nav-button prev",to:{name:"project",params:{projectName:N.value.name}}},{default:b(()=>[c(p($)),v(" "+s(t.$t("projectPrev")),1)]),_:1},8,["to"]),c(j,{class:"nav-button next",to:{name:"project",params:{projectName:D.value.name}}},{default:b(()=>[v(s(t.$t("projectNext"))+" ",1),c(p($))]),_:1},8,["to"])]),e("div",ie,[e("h2",ue,s(t.$t("projectH22")),1),e("div",de,[(r(!0),a(A,null,C(E.value,(l,g)=>(r(),a("div",{key:g,class:"card card-back br1 rel"},[c(j,{class:"flex-col",title:t.$t("worksDetails")+" `"+l.title+"`",to:{name:"project",params:{projectName:l.name}}},{default:b(()=>[c(p(y),{"iframe-class":{white_bg:l.white_bg,other:!0,w100:!0,br1:!0,rel:!0},"iframe-src":p(B)(l.path),"iframe-style":{zoom:O.value,borderRadius:S.value},scrolling:"no",three:!0},null,8,["iframe-class","iframe-src","iframe-style"]),e("div",pe,[e("h4",_e,[e("em",null,s(l.title),1)]),e("p",me,s(l.stack.join(", ")),1)])]),_:2},1032,["title","to"])]))),128))])])])}}};export{je as default};
