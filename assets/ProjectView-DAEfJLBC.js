const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncFrame-C4l-09j-.js","assets/index-CMx9Pi-F.js","assets/index-CBbGo0ne.css","assets/ArrowNavigation-B5BjUrTY.js","assets/ArrowNavigation-Dx74wq1L.css","assets/HighLight-B4VeVgGZ.js","assets/HighLight-B0hqULOW.css"])))=>i.map(i=>d[i]);
import{y as S,z as h,r as d,A as n,B as G,c as a,d as e,e as _,t as s,f as c,u as p,F as T,p as C,w as b,C as M,x as Q,b as r,g as P,h as k}from"./index-CMx9Pi-F.js";import{g as B}from"./getPath-Bn4ax-8e.js";import{g as H}from"./getThreeRandom-SFstBoGy.js";const q=m=>m==="product-catalog"?"https://github.com/fe-jan23-team-six":"https://github.com/vadim4web/"+m,J={class:"flex-col project-page"},K={class:"flex-col page-header padding-13"},U={class:"h2"},W={class:"t2"},X={class:"project-details flex-col"},Y={class:"text flex-col"},Z={class:"h3"},ee={class:"p4"},te={class:"p4"},se={class:"p4"},oe=["href"],ae={class:"p4"},re=["href"],le={key:0,class:"p4"},ne={key:1,class:"p4"},ce={class:"p4"},ie={key:0},ue={key:1,class:"p4"},de={class:"navigation"},pe={class:"others flex-col"},_e={class:"h1"},ve={class:"cards"},he={class:"other-text flex-col-between text-center"},me={class:"h4"},fe={class:"other-p"},Pe={__name:"ProjectView",setup(m){const $=P(()=>k(()=>import("./AsyncFrame-C4l-09j-.js"),__vite__mapDeps([0,1,2]))),w=P(()=>k(()=>import("./ArrowNavigation-B5BjUrTY.js"),__vite__mapDeps([3,1,2,4]))),z=P(()=>k(()=>import("./HighLight-B4VeVgGZ.js"),__vite__mapDeps([5,1,2,6]))),y=S("(min-width: 1024px)"),F=h(()=>y?"0.25":"0.175"),O=h(()=>y?"4rem":"5.714285rem"),N=M(),v=d(N.params.projectName),o=d(D(v.value)),i=d(L()),x=d(V()),E=d(R()),I=d(H(n,i.value)),A=h(()=>q(v.value)),f=h(()=>B(o.value.path));function D(t){return n.find(u=>u.name===t)||{}}function L(){return n.findIndex(t=>t.name===o.value.name&&t.orientation===o.value.orientation)}function R(){const t=i.value<n.length-1?i.value+1:0;return n[t]}function V(){const t=i.value>0?i.value-1:n.length-1;return n[t]}return G(()=>{v.value=N.params.projectName,o.value=D(v.value),i.value=L(),x.value=V(),E.value=R(),I.value=H(n,i.value)}),(t,u)=>{const g=Q("router-link");return r(),a("main",J,[e("div",K,[e("h2",U,[_(s(t.$t("projectH21"))+" ",1),c(p(z))]),e("p",W,s(t.$t("projectT1")),1)]),e("div",X,[c(p($),{"iframe-src":f.value,"iframe-class":{white_bg:o.value.white_bg,preview:!0},scrolling:"yes"},null,8,["iframe-src","iframe-class"]),e("div",Y,[e("h3",Z,s(o.value.title),1),e("p",ee,[e("b",null,s(t.$t("projectP1"))+":  ",1),_(" "+s(o.value.tags.join(" | ")),1)]),e("p",te,[e("b",null,s(t.$t("projectP2"))+":  ",1),_(" "+s(o.value.stack.join(", ")),1)]),e("p",se,[e("b",null,s(t.$t("projectP3"))+":  ",1),e("a",{href:A.value,target:"_blank",class:"source",title:"GitHub Repository"},s(A.value),9,oe)]),e("p",ae,[e("b",null,s(t.$t("projectP4"))+":  ",1),e("a",{href:f.value,target:"_blank",class:"demo",title:"Live Demo"},s(f.value),9,re)]),o.value.deps.length?(r(),a("div",le,[e("b",null,s(t.$t("projectP5"))+":",1),u[0]||(u[0]=e("br",null,null,-1)),e("ul",null,[(r(!0),a(T,null,C(o.value.deps,(l,j)=>(r(),a("li",{key:j},s(l),1))),128))])])):(r(),a("p",ne,s(t.$t("projectP5_default")),1)),e("div",ce,[e("b",null,s(t.$t("projectP6"))+": ",1),u[1]||(u[1]=e("br",null,null,-1)),o.value["desc_"+t.$i18n.locale]?(r(),a("pre",ie,s(o.value["desc_"+t.$i18n.locale])+`
          `,1)):(r(),a("p",ue,s(t.$t("projectP6_default")),1))])])]),e("div",de,[c(g,{to:{name:"project",params:{projectName:x.value.name}},class:"nav-button prev"},{default:b(()=>[c(p(w)),_(" "+s(t.$t("projectPrev")),1)]),_:1},8,["to"]),c(g,{to:{name:"project",params:{projectName:E.value.name}},class:"nav-button next"},{default:b(()=>[_(s(t.$t("projectNext"))+" ",1),c(p(w))]),_:1},8,["to"])]),e("div",pe,[e("h2",_e,s(t.$t("projectH22")),1),e("div",ve,[(r(!0),a(T,null,C(I.value,(l,j)=>(r(),a("div",{key:j,class:"card card-back br1 rel"},[c(g,{to:{name:"project",params:{projectName:l.name}},title:t.$t("worksDetails")+" `"+l.title+"`",class:"flex-col"},{default:b(()=>[c(p($),{"iframe-src":p(B)(l.path),"iframe-class":{white_bg:l.white_bg,other:!0,w100:!0,br1:!0,rel:!0},"iframe-style":{zoom:F.value,borderRadius:O.value},three:!0,scrolling:"no"},null,8,["iframe-src","iframe-class","iframe-style"]),e("div",he,[e("h4",me,s(l.title),1),e("p",fe,s(l.stack.join(", ")),1)])]),_:2},1032,["to","title"])]))),128))])])])}}};export{Pe as default};
