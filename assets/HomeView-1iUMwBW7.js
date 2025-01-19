const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gltfLoader-CupwwCPy.js","assets/three-BcayzK72.js","assets/dracoLoader-DXtg0tJ7.js","assets/ThreeView-DOu5HJ8k.js","assets/index-CZHQJeG5.js","assets/index-ECIySpam.css","assets/getPath-Bn4ax-8e.js","assets/getThreeRandom-SFstBoGy.js","assets/ThreeView-D-uaxepO.css","assets/TechStack-B6kCswHv.js","assets/TechStack-ByxGIFQz.css"])))=>i.map(i=>d[i]);
import{r as ct,c as yt,o as ht,a as gt,b as it,d as ot,n as lt,_ as tt,e as ft,u as wt,f as Mt,w as _t,t as R,g as b,h as W,i as et,j as B,k as at,l as ut}from"./index-CZHQJeG5.js";import{ac as Dt,ad as bt,ae as St,z as Ot,af as kt,p as Lt}from"./three-BcayzK72.js";import nt from"./ActiveElement-DaRPnY4b.js";import st from"./HighLight-DuKxt5pr.js";const Tt="logo.glb",Ht={__name:"Logo3D",props:{noRotate:Boolean,noShadow:Boolean,size:Number},setup(S){let Y=null,T=null,d=null,p=y(),z,w,g,A,$;const F="/",D=ct(null),C={},O=new Dt,u=yt(()=>S.noShadow?"":`filter: drop-shadow(0 0 1rem var(--accent0));
			-webkit-filter: drop-shadow(0 0 1rem var(--accent0));`);function y(){return getComputedStyle(document.documentElement).getPropertyValue("--is-dark").trim()==="1"?"dark":"light"}function I(){const n=new bt;C.light=n.load("texture-silver.jpg ".repeat(6).split(" ")),C.dark=n.load("texture-gold.jpg ".repeat(6).split(" "))}function k(){g=new St,A=new Ot(76.5,1,1.5,1e3),A.position.set(0,0,5),$=new kt({antialias:!0,alpha:!0}),$.setPixelRatio(window.devicePixelRatio),$.autoClear=!1,$.shadowMap.enabled=!1,$.physicallyCorrectLights=!1,D.value.appendChild($.domElement),M()}async function P(){if(!z||!w){const{GLTFLoader:m}=await tt(async()=>{const{GLTFLoader:a}=await import("./gltfLoader-CupwwCPy.js");return{GLTFLoader:a}},__vite__mapDeps([0,1])),{DRACOLoader:l}=await tt(async()=>{const{DRACOLoader:a}=await import("./dracoLoader-DXtg0tJ7.js");return{DRACOLoader:a}},__vite__mapDeps([2,1]));z=m,w=l}const n=new z,t=new w;t.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),n.setDRACOLoader(t),n.load(`${F}${Tt}`,m=>{Y=m.scene,U(p),g.add(Y)},void 0,m=>console.error("Error loading model:",m))}function M(){let n;S.size?n=S.size:n=Math.min(window.innerWidth,window.innerHeight)*1.5,$.setSize(n,n),A.aspect=1,A.updateProjectionMatrix()}function U(n){!Y||!C[n]||Y.traverse(t=>{t.isMesh&&(t.material=new Lt({metalness:1,roughness:.1,envMap:C[n],envMapIntensity:1}))})}function V(){const n=new MutationObserver(()=>{const t=y();t!==p&&(p=t,U(p))});return n.observe(document.documentElement,{attributes:!0}),n}function f(){const n=O.getDelta();Y&&(Y.rotation.x=Math.PI/2,S.noRotate||(Y.rotation.z+=n*.5)),$.clear(),$.render(g,A),d=requestAnimationFrame(f)}return ht(()=>{I(),k(),P(),window.addEventListener("resize",M),T=V(),O.start(),f()}),gt(()=>{window.removeEventListener("resize",M),T==null||T.disconnect(),cancelAnimationFrame(d),$.dispose(),g.clear()}),(n,t)=>(it(),ot("div",{ref_key:"canvasContainer",ref:D,class:"abs",style:lt(u.value)},null,4))}},At={__name:"ArrowRight",props:{height:String},setup(S){return(Y,T)=>(it(),ot("strong",{class:"arrow-right",style:lt({height:S.height,width:parseInt(S.height)*1.5+"rem"})}," -> ",4))}},dt=ft(At,[["__scopeId","data-v-8651a891"]]);var mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $t(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var pt={exports:{}};(function(S,Y){(function(T,d){S.exports=d()})(mt,function(){var T=1e3,d=6e4,p=36e5,z="millisecond",w="second",g="minute",A="hour",$="day",F="week",D="month",C="quarter",O="year",u="date",y="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var r=["th","st","nd","rd"],e=i%100;return"["+i+(r[(e-20)%10]||r[e]||r[0])+"]"}},M=function(i,r,e){var o=String(i);return!o||o.length>=r?i:""+Array(r+1-o.length).join(e)+i},U={s:M,z:function(i){var r=-i.utcOffset(),e=Math.abs(r),o=Math.floor(e/60),s=e%60;return(r<=0?"+":"-")+M(o,2,"0")+":"+M(s,2,"0")},m:function i(r,e){if(r.date()<e.date())return-i(e,r);var o=12*(e.year()-r.year())+(e.month()-r.month()),s=r.clone().add(o,D),c=e-s<0,h=r.clone().add(o+(c?-1:1),D);return+(-(o+(e-s)/(c?s-h:h-s))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:D,y:O,w:F,d:$,D:u,h:A,m:g,s:w,ms:z,Q:C}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},V="en",f={};f[V]=P;var n="$isDayjsObject",t=function(i){return i instanceof L||!(!i||!i[n])},m=function i(r,e,o){var s;if(!r)return V;if(typeof r=="string"){var c=r.toLowerCase();f[c]&&(s=c),e&&(f[c]=e,s=c);var h=r.split("-");if(!s&&h.length>1)return i(h[0])}else{var v=r.name;f[v]=r,s=v}return!o&&s&&(V=s),s||!o&&V},l=function(i,r){if(t(i))return i.clone();var e=typeof r=="object"?r:{};return e.date=i,e.args=arguments,new L(e)},a=U;a.l=m,a.i=t,a.w=function(i,r){return l(i,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var L=function(){function i(e){this.$L=m(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[n]=!0}var r=i.prototype;return r.parse=function(e){this.$d=function(o){var s=o.date,c=o.utc;if(s===null)return new Date(NaN);if(a.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var h=s.match(I);if(h){var v=h[2]-1||0,_=(h[7]||"0").substring(0,3);return c?new Date(Date.UTC(h[1],v,h[3]||1,h[4]||0,h[5]||0,h[6]||0,_)):new Date(h[1],v,h[3]||1,h[4]||0,h[5]||0,h[6]||0,_)}}return new Date(s)}(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return a},r.isValid=function(){return this.$d.toString()!==y},r.isSame=function(e,o){var s=l(e);return this.startOf(o)<=s&&s<=this.endOf(o)},r.isAfter=function(e,o){return l(e)<this.startOf(o)},r.isBefore=function(e,o){return this.endOf(o)<l(e)},r.$g=function(e,o,s){return a.u(e)?this[o]:this.set(s,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,o){var s=this,c=!!a.u(o)||o,h=a.p(e),v=function(J,j){var G=a.w(s.$u?Date.UTC(s.$y,j,J):new Date(s.$y,j,J),s);return c?G:G.endOf($)},_=function(J,j){return a.w(s.toDate()[J].apply(s.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(j)),s)},H=this.$W,x=this.$M,N=this.$D,q="set"+(this.$u?"UTC":"");switch(h){case O:return c?v(1,0):v(31,11);case D:return c?v(1,x):v(0,x+1);case F:var Z=this.$locale().weekStart||0,Q=(H<Z?H+7:H)-Z;return v(c?N-Q:N+(6-Q),x);case $:case u:return _(q+"Hours",0);case A:return _(q+"Minutes",1);case g:return _(q+"Seconds",2);case w:return _(q+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,o){var s,c=a.p(e),h="set"+(this.$u?"UTC":""),v=(s={},s[$]=h+"Date",s[u]=h+"Date",s[D]=h+"Month",s[O]=h+"FullYear",s[A]=h+"Hours",s[g]=h+"Minutes",s[w]=h+"Seconds",s[z]=h+"Milliseconds",s)[c],_=c===$?this.$D+(o-this.$W):o;if(c===D||c===O){var H=this.clone().set(u,1);H.$d[v](_),H.init(),this.$d=H.set(u,Math.min(this.$D,H.daysInMonth())).$d}else v&&this.$d[v](_);return this.init(),this},r.set=function(e,o){return this.clone().$set(e,o)},r.get=function(e){return this[a.p(e)]()},r.add=function(e,o){var s,c=this;e=Number(e);var h=a.p(o),v=function(x){var N=l(c);return a.w(N.date(N.date()+Math.round(x*e)),c)};if(h===D)return this.set(D,this.$M+e);if(h===O)return this.set(O,this.$y+e);if(h===$)return v(1);if(h===F)return v(7);var _=(s={},s[g]=d,s[A]=p,s[w]=T,s)[h]||1,H=this.$d.getTime()+e*_;return a.w(H,this)},r.subtract=function(e,o){return this.add(-1*e,o)},r.format=function(e){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||y;var c=e||"YYYY-MM-DDTHH:mm:ssZ",h=a.z(this),v=this.$H,_=this.$m,H=this.$M,x=s.weekdays,N=s.months,q=s.meridiem,Z=function(j,G,K,X){return j&&(j[G]||j(o,c))||K[G].slice(0,X)},Q=function(j){return a.s(v%12||12,j,"0")},J=q||function(j,G,K){var X=j<12?"AM":"PM";return K?X.toLowerCase():X};return c.replace(k,function(j,G){return G||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return a.s(o.$y,4,"0");case"M":return H+1;case"MM":return a.s(H+1,2,"0");case"MMM":return Z(s.monthsShort,H,N,3);case"MMMM":return Z(N,H);case"D":return o.$D;case"DD":return a.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return Z(s.weekdaysMin,o.$W,x,2);case"ddd":return Z(s.weekdaysShort,o.$W,x,3);case"dddd":return x[o.$W];case"H":return String(v);case"HH":return a.s(v,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return J(v,_,!0);case"A":return J(v,_,!1);case"m":return String(_);case"mm":return a.s(_,2,"0");case"s":return String(o.$s);case"ss":return a.s(o.$s,2,"0");case"SSS":return a.s(o.$ms,3,"0");case"Z":return h}return null}(j)||h.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,o,s){var c,h=this,v=a.p(o),_=l(e),H=(_.utcOffset()-this.utcOffset())*d,x=this-_,N=function(){return a.m(h,_)};switch(v){case O:c=N()/12;break;case D:c=N();break;case C:c=N()/3;break;case F:c=(x-H)/6048e5;break;case $:c=(x-H)/864e5;break;case A:c=x/p;break;case g:c=x/d;break;case w:c=x/T;break;default:c=x}return s?c:a.a(c)},r.daysInMonth=function(){return this.endOf(D).$D},r.$locale=function(){return f[this.$L]},r.locale=function(e,o){if(!e)return this.$L;var s=this.clone(),c=m(e,o,!0);return c&&(s.$L=c),s},r.clone=function(){return a.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},i}(),E=L.prototype;return l.prototype=E,[["$ms",z],["$s",w],["$m",g],["$H",A],["$W",$],["$M",D],["$y",O],["$D",u]].forEach(function(i){E[i[1]]=function(r){return this.$g(r,i[0],i[1])}}),l.extend=function(i,r){return i.$i||(i(r,L,l),i.$i=!0),l},l.locale=m,l.isDayjs=t,l.unix=function(i){return l(1e3*i)},l.en=f[V],l.Ls=f,l.p={},l})})(pt);var Ct=pt.exports;const rt=$t(Ct);var vt={exports:{}};(function(S,Y){(function(T,d){S.exports=d()})(mt,function(){var T,d,p=1e3,z=6e4,w=36e5,g=864e5,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$=31536e6,F=2628e6,D=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,C={years:$,months:F,days:g,hours:w,minutes:z,seconds:p,milliseconds:1,weeks:6048e5},O=function(f){return f instanceof U},u=function(f,n,t){return new U(f,t,n.$l)},y=function(f){return d.p(f)+"s"},I=function(f){return f<0},k=function(f){return I(f)?Math.ceil(f):Math.floor(f)},P=function(f){return Math.abs(f)},M=function(f,n){return f?I(f)?{negative:!0,format:""+P(f)+n}:{negative:!1,format:""+f+n}:{negative:!1,format:""}},U=function(){function f(t,m,l){var a=this;if(this.$d={},this.$l=l,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),m)return u(t*C[y(m)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(i){a.$d[y(i)]=t[i]}),this.calMilliseconds(),this;if(typeof t=="string"){var L=t.match(D);if(L){var E=L.slice(2).map(function(i){return i!=null?Number(i):0});return this.$d.years=E[0],this.$d.months=E[1],this.$d.weeks=E[2],this.$d.days=E[3],this.$d.hours=E[4],this.$d.minutes=E[5],this.$d.seconds=E[6],this.calMilliseconds(),this}}return this}var n=f.prototype;return n.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(m,l){return m+(t.$d[l]||0)*C[l]},0)},n.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=k(t/$),t%=$,this.$d.months=k(t/F),t%=F,this.$d.days=k(t/g),t%=g,this.$d.hours=k(t/w),t%=w,this.$d.minutes=k(t/z),t%=z,this.$d.seconds=k(t/p),t%=p,this.$d.milliseconds=t},n.toISOString=function(){var t=M(this.$d.years,"Y"),m=M(this.$d.months,"M"),l=+this.$d.days||0;this.$d.weeks&&(l+=7*this.$d.weeks);var a=M(l,"D"),L=M(this.$d.hours,"H"),E=M(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3,i=Math.round(1e3*i)/1e3);var r=M(i,"S"),e=t.negative||m.negative||a.negative||L.negative||E.negative||r.negative,o=L.format||E.format||r.format?"T":"",s=(e?"-":"")+"P"+t.format+m.format+a.format+o+L.format+E.format+r.format;return s==="P"||s==="-P"?"P0D":s},n.toJSON=function(){return this.toISOString()},n.format=function(t){var m=t||"YYYY-MM-DDTHH:mm:ss",l={Y:this.$d.years,YY:d.s(this.$d.years,2,"0"),YYYY:d.s(this.$d.years,4,"0"),M:this.$d.months,MM:d.s(this.$d.months,2,"0"),D:this.$d.days,DD:d.s(this.$d.days,2,"0"),H:this.$d.hours,HH:d.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:d.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:d.s(this.$d.seconds,2,"0"),SSS:d.s(this.$d.milliseconds,3,"0")};return m.replace(A,function(a,L){return L||String(l[a])})},n.as=function(t){return this.$ms/C[y(t)]},n.get=function(t){var m=this.$ms,l=y(t);return l==="milliseconds"?m%=1e3:m=l==="weeks"?k(m/C[l]):this.$d[l],m||0},n.add=function(t,m,l){var a;return a=m?t*C[y(m)]:O(t)?t.$ms:u(t,this).$ms,u(this.$ms+a*(l?-1:1),this)},n.subtract=function(t,m){return this.add(t,m,!0)},n.locale=function(t){var m=this.clone();return m.$l=t,m},n.clone=function(){return u(this.$ms,this)},n.humanize=function(t){return T().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},n.valueOf=function(){return this.asMilliseconds()},n.milliseconds=function(){return this.get("milliseconds")},n.asMilliseconds=function(){return this.as("milliseconds")},n.seconds=function(){return this.get("seconds")},n.asSeconds=function(){return this.as("seconds")},n.minutes=function(){return this.get("minutes")},n.asMinutes=function(){return this.as("minutes")},n.hours=function(){return this.get("hours")},n.asHours=function(){return this.as("hours")},n.days=function(){return this.get("days")},n.asDays=function(){return this.as("days")},n.weeks=function(){return this.get("weeks")},n.asWeeks=function(){return this.as("weeks")},n.months=function(){return this.get("months")},n.asMonths=function(){return this.as("months")},n.years=function(){return this.get("years")},n.asYears=function(){return this.as("years")},f}(),V=function(f,n,t){return f.add(n.years()*t,"y").add(n.months()*t,"M").add(n.days()*t,"d").add(n.hours()*t,"h").add(n.minutes()*t,"m").add(n.seconds()*t,"s").add(n.milliseconds()*t,"ms")};return function(f,n,t){T=t,d=t().$utils(),t.duration=function(a,L){var E=t.locale();return u(a,{$l:E},L)},t.isDuration=O;var m=n.prototype.add,l=n.prototype.subtract;n.prototype.add=function(a,L){return O(a)?V(this,a,1):m.bind(this)(a,L)},n.prototype.subtract=function(a,L){return O(a)?V(this,a,-1):l.bind(this)(a,L)}}})})(vt);var Et=vt.exports;const xt=$t(Et),Yt={__name:"AgeCalculator",setup(S){rt.extend(xt);const Y=ct(""),{locale:T}=wt(),d=rt("1988-06-17T09:40:00Z");let p=null;const z=()=>{const u=rt(),y=u.diff(d,"year"),I=u.diff(d.add(y,"year"),"month"),k=u.diff(d.add(y,"year").add(I,"month"),"day"),P=u.diff(d.add(y,"year").add(I,"month").add(k,"day"),"hour")%24,M=u.diff(d.add(y,"year").add(I,"month").add(k,"day").add(P,"hour"),"minute")%60,U=u.diff(d.add(y,"year").add(I,"month").add(k,"day").add(P,"hour").add(M,"minute"),"second")%60,V=u.diff(d.add(y,"year").add(I,"month").add(k,"day").add(P,"hour").add(M,"minute").add(U,"second"),"millisecond")%1e3;return{y,m:I,d:k,h:P,min:M,s:U,ms:V}},w=(u,[y,I,k])=>{const P=u%10,M=u%100;return P===1&&M!==11?`${u} ${y}`:P>=2&&P<=4&&(M<10||M>=20)?`${u} ${I}`:`${u} ${k}`},g={y:["рік","роки","років"],m:["місяць","місяці","місяців"],d:["день","дні","днів"],h:["година","години","годин"],min:["хвилина","хвилини","хвилин"],s:["секунда","секунди","секунд"],ms:["мілісекунда","мілісекунди","мілісекунд"]},A=u=>`${w(u.y,g.y)} ${w(u.m,g.m)} ${w(u.d,g.d)} ${w(u.h,g.h)} ${w(u.min,g.min)} ${w(u.s,g.s)} і ${w(u.ms,g.ms)}`,$=(u,y)=>`${u} ${y}${u===1?"":"s"}`,F=u=>`${$(u.y,"year")} ${$(u.m,"month")} ${$(u.d,"day")} ${$(u.h,"hour")} ${$(u.min,"minute")} ${$(u.s,"second")} and ${$(u.ms,"millisecond")}`,D=()=>{const u=z();Y.value=T.value==="uk"?A(u):F(u)},C=()=>p=setInterval(D,33),O=()=>{document.hidden?clearInterval(p):C()};return ht(()=>{D(),C(),document.addEventListener("visibilitychange",O)}),Mt(()=>{p&&clearInterval(p),document.removeEventListener("visibilitychange",O)}),_t(T,D),(u,y)=>R(Y.value)}},It={class:"home"},Pt={class:"head content flex-col-center text-center"},jt={class:"h1"},zt=["data-text-1"],Rt=["data-text-2"],Ft={class:"hero w100"},Vt={class:"left content flex-col-center w100 rel"},Nt={class:"text flex-col"},Wt={class:"h2"},Ut={class:"t2"},Bt={class:"projects flex-col-center"},Gt={class:"h2 text-center"},Zt={__name:"HomeView",setup(S){const Y=ut(()=>tt(()=>import("./ThreeView-DOu5HJ8k.js"),__vite__mapDeps([3,4,5,6,7,8]))),T=ut(()=>tt(()=>import("./TechStack-B6kCswHv.js"),__vite__mapDeps([9,4,5,10])));return(d,p)=>(it(),ot("main",It,[b("section",Pt,[b("div",jt,[b("h2",{class:"h1_h2","data-text-1":d.$t("homeH11"),style:{filter:"drop-shadow(0 0 0.5rem var(--color-op))"}},[b("strong",null,R(d.$t("homeH11")),1),p[0]||(p[0]=b("br",null,null,-1)),W(st)],8,zt),b("h2",{class:"h1_span","data-text-2":d.$t("homeH12"),style:{"font-size":"75%",filter:"drop-shadow(0 0 0.5rem var(--color-op))"}},[b("em",null,R(d.$t("homeH12")),1)],8,Rt)]),W(Ht),W(nt,{bg:"var(--accent50)","border-radius":"2.3125rem","font-size":"1.75rem",padding:"1.5rem 3rem",path:"projects"},{default:et(()=>[B(R(d.$t("homeB1"))+"  ",1),W(dt,{height:"1.75rem"})]),_:1})]),b("section",Ft,[b("div",Vt,[b("div",Nt,[b("h2",Wt,[W(st),B(" "+R(d.$t("homeH211")),1),p[1]||(p[1]=b("br",null,null,-1)),B(R(d.$t("homeH212")),1),p[2]||(p[2]=b("br",null,null,-1)),B(R(d.$t("homeH213")),1)]),b("p",Ut,[B(R(d.$t("homeP11")),1),b("em",null,R(d.$t("homeP12")),1),W(Yt),p[3]||(p[3]=B(".")),p[4]||(p[4]=b("br",null,null,-1)),B(R(d.$t("homeP13")),1)])]),W(nt,{bg:"var(--accent50)","border-radius":"2.125rem",class:"font-variant","font-size":"1.5rem",padding:"1.5rem 3rem",path:"about"},{default:et(()=>[B(R(d.$t("homeB2")),1)]),_:1})]),p[5]||(p[5]=b("div",{class:"right rel"},[b("div",{class:"photo w100"})],-1))]),b("section",Bt,[b("h2",Gt,[B(R(d.$t("homeH22"))+" ",1),W(st)]),W(nt,{bg:"var(--accent50)","border-radius":"2.166rem","font-size":"1.33rem",padding:"1.5rem 2.5rem",path:"projects"},{default:et(()=>[B(R(d.$t("homeB3"))+"  ",1),W(dt,{height:"1.33rem"})]),_:1}),W(at(Y))]),W(at(T))]))}},Xt=ft(Zt,[["__scopeId","data-v-9b0dc240"]]);export{Xt as default};
