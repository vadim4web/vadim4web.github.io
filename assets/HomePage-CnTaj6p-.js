const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gltfLoader-CupwwCPy.js","assets/three-BcayzK72.js","assets/dracoLoader-DXtg0tJ7.js","assets/ProjectCards-B60_N6iZ.js","assets/index-Cm1zDwWv.js","assets/index-CurBBFGc.css","assets/getPath-Bn4ax-8e.js","assets/getThreeRandom-SFstBoGy.js","assets/ProjectCards-D-uaxepO.css","assets/TechStackSlider-BOT7IO7Z.js","assets/TechStackSlider-BAbQUFZe.css"])))=>i.map(i=>d[i]);
import{r as lt,c as yt,o as ht,a as gt,b as ot,d as at,n as ft,_ as tt,u as wt,e as Mt,w as _t,t as z,f as Dt,g as b,h as V,i as et,j as B,k as ut,l as dt}from"./index-Cm1zDwWv.js";import{ac as bt,ad as St,ae as Ot,z as kt,af as Lt,p as Tt}from"./three-BcayzK72.js";import nt from"./InteractiveButton-DQcP37Lv.js";import st from"./TextHighlight-COGHRmyb.js";const rt="/model/",Ht="logo.glb",xt={__name:"RotatingLogo",props:{noRotate:Boolean,noShadow:Boolean,size:Number},setup(S){let A=null,L=null,c=null,m=a(),R,w,y,x,$;const F=lt(null),M={},I=new bt,T=yt(()=>S.noShadow?"":`filter: drop-shadow(0 0 1rem var(--accent0));
			-webkit-filter: drop-shadow(0 0 1rem var(--accent0));`);function a(){return getComputedStyle(document.documentElement).getPropertyValue("--is-dark").trim()==="1"?"dark":"light"}function g(){const u=new St;M.light=u.load(`${rt}texture-silver.jpg `.repeat(6).split(" ")),M.dark=u.load(`${rt}texture-gold.jpg `.repeat(6).split(" "))}function P(){y=new Ot,x=new kt(76.5,1,1.5,1e3),x.position.set(0,0,5),$=new Lt({antialias:!0,alpha:!0}),$.setPixelRatio(window.devicePixelRatio),$.autoClear=!1,$.shadowMap.enabled=!1,$.physicallyCorrectLights=!1,F.value.appendChild($.domElement),C()}async function O(){if(!R||!w){const{GLTFLoader:e}=await tt(async()=>{const{GLTFLoader:l}=await import("./gltfLoader-CupwwCPy.js");return{GLTFLoader:l}},__vite__mapDeps([0,1])),{DRACOLoader:p}=await tt(async()=>{const{DRACOLoader:l}=await import("./dracoLoader-DXtg0tJ7.js");return{DRACOLoader:l}},__vite__mapDeps([2,1]));R=e,w=p}const u=new R,r=new w;r.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),u.setDRACOLoader(r),u.load(`${rt}${Ht}`,e=>{A=e.scene,_(m),y.add(A)},void 0,e=>console.error("Error loading model:",e))}function C(){let u;S.size?u=S.size:u=Math.min(window.innerWidth,window.innerHeight)*1.5,$.setSize(u,u),x.aspect=1,x.updateProjectionMatrix()}function _(u){!A||!M[u]||A.traverse(r=>{r.isMesh&&(r.material=new Tt({metalness:1,roughness:.1,envMap:M[u],envMapIntensity:1}))})}function U(){const u=new MutationObserver(()=>{const r=a();r!==m&&(m=r,_(m))});return u.observe(document.documentElement,{attributes:!0}),u}function N(){const u=I.getDelta();A&&(A.rotation.x=Math.PI/2,S.noRotate||(A.rotation.z+=u*.5)),$.clear(),$.render(y,x),c=requestAnimationFrame(N)}return ht(()=>{g(),P(),O(),window.addEventListener("resize",C),L=U(),I.start(),N()}),gt(()=>{window.removeEventListener("resize",C),L==null||L.disconnect(),cancelAnimationFrame(c),$.dispose(),y.clear()}),(u,r)=>(ot(),at("div",{ref_key:"canvasContainer",ref:F,class:"abs",style:ft(T.value)},null,4))}},ct={__name:"ArrowText",props:{height:String},setup(S){return(A,L)=>(ot(),at("strong",{class:"arrow-text",style:ft([{"font-weight":"700","text-wrap":"nowrap"},{height:S.height,width:parseInt(S.height)*1.5+"rem"}])}," -> ",4))}};var mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $t(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var pt={exports:{}};(function(S,A){(function(L,c){S.exports=c()})(mt,function(){var L=1e3,c=6e4,m=36e5,R="millisecond",w="second",y="minute",x="hour",$="day",F="week",M="month",I="quarter",T="year",a="date",g="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,C={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var s=["th","st","nd","rd"],t=i%100;return"["+i+(s[(t-20)%10]||s[t]||s[0])+"]"}},_=function(i,s,t){var o=String(i);return!o||o.length>=s?i:""+Array(s+1-o.length).join(t)+i},U={s:_,z:function(i){var s=-i.utcOffset(),t=Math.abs(s),o=Math.floor(t/60),n=t%60;return(s<=0?"+":"-")+_(o,2,"0")+":"+_(n,2,"0")},m:function i(s,t){if(s.date()<t.date())return-i(t,s);var o=12*(t.year()-s.year())+(t.month()-s.month()),n=s.clone().add(o,M),h=t-n<0,f=s.clone().add(o+(h?-1:1),M);return+(-(o+(t-n)/(h?n-f:f-n))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M,y:T,w:F,d:$,D:a,h:x,m:y,s:w,ms:R,Q:I}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},N="en",u={};u[N]=C;var r="$isDayjsObject",e=function(i){return i instanceof k||!(!i||!i[r])},p=function i(s,t,o){var n;if(!s)return N;if(typeof s=="string"){var h=s.toLowerCase();u[h]&&(n=h),t&&(u[h]=t,n=h);var f=s.split("-");if(!n&&f.length>1)return i(f[0])}else{var v=s.name;u[v]=s,n=v}return!o&&n&&(N=n),n||!o&&N},l=function(i,s){if(e(i))return i.clone();var t=typeof s=="object"?s:{};return t.date=i,t.args=arguments,new k(t)},d=U;d.l=p,d.i=e,d.w=function(i,s){return l(i,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var k=function(){function i(t){this.$L=p(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[r]=!0}var s=i.prototype;return s.parse=function(t){this.$d=function(o){var n=o.date,h=o.utc;if(n===null)return new Date(NaN);if(d.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var f=n.match(P);if(f){var v=f[2]-1||0,D=(f[7]||"0").substring(0,3);return h?new Date(Date.UTC(f[1],v,f[3]||1,f[4]||0,f[5]||0,f[6]||0,D)):new Date(f[1],v,f[3]||1,f[4]||0,f[5]||0,f[6]||0,D)}}return new Date(n)}(t),this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return d},s.isValid=function(){return this.$d.toString()!==g},s.isSame=function(t,o){var n=l(t);return this.startOf(o)<=n&&n<=this.endOf(o)},s.isAfter=function(t,o){return l(t)<this.startOf(o)},s.isBefore=function(t,o){return this.endOf(o)<l(t)},s.$g=function(t,o,n){return d.u(t)?this[o]:this.set(n,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,o){var n=this,h=!!d.u(o)||o,f=d.p(t),v=function(J,j){var G=d.w(n.$u?Date.UTC(n.$y,j,J):new Date(n.$y,j,J),n);return h?G:G.endOf($)},D=function(J,j){return d.w(n.toDate()[J].apply(n.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(j)),n)},H=this.$W,Y=this.$M,W=this.$D,q="set"+(this.$u?"UTC":"");switch(f){case T:return h?v(1,0):v(31,11);case M:return h?v(1,Y):v(0,Y+1);case F:var Z=this.$locale().weekStart||0,Q=(H<Z?H+7:H)-Z;return v(h?W-Q:W+(6-Q),Y);case $:case a:return D(q+"Hours",0);case x:return D(q+"Minutes",1);case y:return D(q+"Seconds",2);case w:return D(q+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,o){var n,h=d.p(t),f="set"+(this.$u?"UTC":""),v=(n={},n[$]=f+"Date",n[a]=f+"Date",n[M]=f+"Month",n[T]=f+"FullYear",n[x]=f+"Hours",n[y]=f+"Minutes",n[w]=f+"Seconds",n[R]=f+"Milliseconds",n)[h],D=h===$?this.$D+(o-this.$W):o;if(h===M||h===T){var H=this.clone().set(a,1);H.$d[v](D),H.init(),this.$d=H.set(a,Math.min(this.$D,H.daysInMonth())).$d}else v&&this.$d[v](D);return this.init(),this},s.set=function(t,o){return this.clone().$set(t,o)},s.get=function(t){return this[d.p(t)]()},s.add=function(t,o){var n,h=this;t=Number(t);var f=d.p(o),v=function(Y){var W=l(h);return d.w(W.date(W.date()+Math.round(Y*t)),h)};if(f===M)return this.set(M,this.$M+t);if(f===T)return this.set(T,this.$y+t);if(f===$)return v(1);if(f===F)return v(7);var D=(n={},n[y]=c,n[x]=m,n[w]=L,n)[f]||1,H=this.$d.getTime()+t*D;return d.w(H,this)},s.subtract=function(t,o){return this.add(-1*t,o)},s.format=function(t){var o=this,n=this.$locale();if(!this.isValid())return n.invalidDate||g;var h=t||"YYYY-MM-DDTHH:mm:ssZ",f=d.z(this),v=this.$H,D=this.$m,H=this.$M,Y=n.weekdays,W=n.months,q=n.meridiem,Z=function(j,G,K,X){return j&&(j[G]||j(o,h))||K[G].slice(0,X)},Q=function(j){return d.s(v%12||12,j,"0")},J=q||function(j,G,K){var X=j<12?"AM":"PM";return K?X.toLowerCase():X};return h.replace(O,function(j,G){return G||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return d.s(o.$y,4,"0");case"M":return H+1;case"MM":return d.s(H+1,2,"0");case"MMM":return Z(n.monthsShort,H,W,3);case"MMMM":return Z(W,H);case"D":return o.$D;case"DD":return d.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return Z(n.weekdaysMin,o.$W,Y,2);case"ddd":return Z(n.weekdaysShort,o.$W,Y,3);case"dddd":return Y[o.$W];case"H":return String(v);case"HH":return d.s(v,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return J(v,D,!0);case"A":return J(v,D,!1);case"m":return String(D);case"mm":return d.s(D,2,"0");case"s":return String(o.$s);case"ss":return d.s(o.$s,2,"0");case"SSS":return d.s(o.$ms,3,"0");case"Z":return f}return null}(j)||f.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,o,n){var h,f=this,v=d.p(o),D=l(t),H=(D.utcOffset()-this.utcOffset())*c,Y=this-D,W=function(){return d.m(f,D)};switch(v){case T:h=W()/12;break;case M:h=W();break;case I:h=W()/3;break;case F:h=(Y-H)/6048e5;break;case $:h=(Y-H)/864e5;break;case x:h=Y/m;break;case y:h=Y/c;break;case w:h=Y/L;break;default:h=Y}return n?h:d.a(h)},s.daysInMonth=function(){return this.endOf(M).$D},s.$locale=function(){return u[this.$L]},s.locale=function(t,o){if(!t)return this.$L;var n=this.clone(),h=p(t,o,!0);return h&&(n.$L=h),n},s.clone=function(){return d.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},i}(),E=k.prototype;return l.prototype=E,[["$ms",R],["$s",w],["$m",y],["$H",x],["$W",$],["$M",M],["$y",T],["$D",a]].forEach(function(i){E[i[1]]=function(s){return this.$g(s,i[0],i[1])}}),l.extend=function(i,s){return i.$i||(i(s,k,l),i.$i=!0),l},l.locale=p,l.isDayjs=e,l.unix=function(i){return l(1e3*i)},l.en=u[N],l.Ls=u,l.p={},l})})(pt);var Ct=pt.exports;const it=$t(Ct);var vt={exports:{}};(function(S,A){(function(L,c){S.exports=c()})(mt,function(){var L,c,m=1e3,R=6e4,w=36e5,y=864e5,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$=31536e6,F=2628e6,M=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,I={years:$,months:F,days:y,hours:w,minutes:R,seconds:m,milliseconds:1,weeks:6048e5},T=function(u){return u instanceof U},a=function(u,r,e){return new U(u,e,r.$l)},g=function(u){return c.p(u)+"s"},P=function(u){return u<0},O=function(u){return P(u)?Math.ceil(u):Math.floor(u)},C=function(u){return Math.abs(u)},_=function(u,r){return u?P(u)?{negative:!0,format:""+C(u)+r}:{negative:!1,format:""+u+r}:{negative:!1,format:""}},U=function(){function u(e,p,l){var d=this;if(this.$d={},this.$l=l,e===void 0&&(this.$ms=0,this.parseFromMilliseconds()),p)return a(e*I[g(p)],this);if(typeof e=="number")return this.$ms=e,this.parseFromMilliseconds(),this;if(typeof e=="object")return Object.keys(e).forEach(function(i){d.$d[g(i)]=e[i]}),this.calMilliseconds(),this;if(typeof e=="string"){var k=e.match(M);if(k){var E=k.slice(2).map(function(i){return i!=null?Number(i):0});return this.$d.years=E[0],this.$d.months=E[1],this.$d.weeks=E[2],this.$d.days=E[3],this.$d.hours=E[4],this.$d.minutes=E[5],this.$d.seconds=E[6],this.calMilliseconds(),this}}return this}var r=u.prototype;return r.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce(function(p,l){return p+(e.$d[l]||0)*I[l]},0)},r.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=O(e/$),e%=$,this.$d.months=O(e/F),e%=F,this.$d.days=O(e/y),e%=y,this.$d.hours=O(e/w),e%=w,this.$d.minutes=O(e/R),e%=R,this.$d.seconds=O(e/m),e%=m,this.$d.milliseconds=e},r.toISOString=function(){var e=_(this.$d.years,"Y"),p=_(this.$d.months,"M"),l=+this.$d.days||0;this.$d.weeks&&(l+=7*this.$d.weeks);var d=_(l,"D"),k=_(this.$d.hours,"H"),E=_(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3,i=Math.round(1e3*i)/1e3);var s=_(i,"S"),t=e.negative||p.negative||d.negative||k.negative||E.negative||s.negative,o=k.format||E.format||s.format?"T":"",n=(t?"-":"")+"P"+e.format+p.format+d.format+o+k.format+E.format+s.format;return n==="P"||n==="-P"?"P0D":n},r.toJSON=function(){return this.toISOString()},r.format=function(e){var p=e||"YYYY-MM-DDTHH:mm:ss",l={Y:this.$d.years,YY:c.s(this.$d.years,2,"0"),YYYY:c.s(this.$d.years,4,"0"),M:this.$d.months,MM:c.s(this.$d.months,2,"0"),D:this.$d.days,DD:c.s(this.$d.days,2,"0"),H:this.$d.hours,HH:c.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:c.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:c.s(this.$d.seconds,2,"0"),SSS:c.s(this.$d.milliseconds,3,"0")};return p.replace(x,function(d,k){return k||String(l[d])})},r.as=function(e){return this.$ms/I[g(e)]},r.get=function(e){var p=this.$ms,l=g(e);return l==="milliseconds"?p%=1e3:p=l==="weeks"?O(p/I[l]):this.$d[l],p||0},r.add=function(e,p,l){var d;return d=p?e*I[g(p)]:T(e)?e.$ms:a(e,this).$ms,a(this.$ms+d*(l?-1:1),this)},r.subtract=function(e,p){return this.add(e,p,!0)},r.locale=function(e){var p=this.clone();return p.$l=e,p},r.clone=function(){return a(this.$ms,this)},r.humanize=function(e){return L().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},r.valueOf=function(){return this.asMilliseconds()},r.milliseconds=function(){return this.get("milliseconds")},r.asMilliseconds=function(){return this.as("milliseconds")},r.seconds=function(){return this.get("seconds")},r.asSeconds=function(){return this.as("seconds")},r.minutes=function(){return this.get("minutes")},r.asMinutes=function(){return this.as("minutes")},r.hours=function(){return this.get("hours")},r.asHours=function(){return this.as("hours")},r.days=function(){return this.get("days")},r.asDays=function(){return this.as("days")},r.weeks=function(){return this.get("weeks")},r.asWeeks=function(){return this.as("weeks")},r.months=function(){return this.get("months")},r.asMonths=function(){return this.as("months")},r.years=function(){return this.get("years")},r.asYears=function(){return this.as("years")},u}(),N=function(u,r,e){return u.add(r.years()*e,"y").add(r.months()*e,"M").add(r.days()*e,"d").add(r.hours()*e,"h").add(r.minutes()*e,"m").add(r.seconds()*e,"s").add(r.milliseconds()*e,"ms")};return function(u,r,e){L=e,c=e().$utils(),e.duration=function(d,k){var E=e.locale();return a(d,{$l:E},k)},e.isDuration=T;var p=r.prototype.add,l=r.prototype.subtract;r.prototype.add=function(d,k){return T(d)?N(this,d,1):p.bind(this)(d,k)},r.prototype.subtract=function(d,k){return T(d)?N(this,d,-1):l.bind(this)(d,k)}}})})(vt);var Et=vt.exports;const Yt=$t(Et),At={__name:"AgeCounter",setup(S){it.extend(Yt);const A=lt(""),{locale:L}=wt(),c=it("1988-06-17T09:40:00Z");let m=null;const R=()=>{const a=it(),g=a.diff(c,"year"),P=a.diff(c.add(g,"year"),"month"),O=a.diff(c.add(g,"year").add(P,"month"),"day"),C=a.diff(c.add(g,"year").add(P,"month").add(O,"day"),"hour")%24,_=a.diff(c.add(g,"year").add(P,"month").add(O,"day").add(C,"hour"),"minute")%60,U=a.diff(c.add(g,"year").add(P,"month").add(O,"day").add(C,"hour").add(_,"minute"),"second")%60,N=a.diff(c.add(g,"year").add(P,"month").add(O,"day").add(C,"hour").add(_,"minute").add(U,"second"),"millisecond")%1e3;return{y:g,m:P,d:O,h:C,min:_,s:U,ms:N}},w=(a,[g,P,O])=>{const C=a%10,_=a%100;return C===1&&_!==11?`${a} ${g}`:C>=2&&C<=4&&(_<10||_>=20)?`${a} ${P}`:`${a} ${O}`},y={y:["рік","роки","років"],m:["місяць","місяці","місяців"],d:["день","дні","днів"],h:["година","години","годин"],min:["хвилина","хвилини","хвилин"],s:["секунда","секунди","секунд"],ms:["мілісекунда","мілісекунди","мілісекунд"]},x=a=>`${w(a.y,y.y)} ${w(a.m,y.m)} ${w(a.d,y.d)} ${w(a.h,y.h)} ${w(a.min,y.min)} ${w(a.s,y.s)} і ${w(a.ms,y.ms)}`,$=(a,g)=>`${a} ${g}${a===1?"":"s"}`,F=a=>`${$(a.y,"year")} ${$(a.m,"month")} ${$(a.d,"day")} ${$(a.h,"hour")} ${$(a.min,"minute")} ${$(a.s,"second")} and ${$(a.ms,"millisecond")}`,M=()=>{const a=R();A.value=L.value==="uk"?x(a):F(a)},I=()=>m=setInterval(M,33),T=()=>{document.hidden?clearInterval(m):I()};return ht(()=>{M(),I(),document.addEventListener("visibilitychange",T)}),Mt(()=>{m&&clearInterval(m),document.removeEventListener("visibilitychange",T)}),_t(L,M),(a,g)=>z(A.value)}},Pt={class:"home"},It={class:"head content flex-col-center text-center"},jt={class:"h1"},zt=["data-text-1"],Rt=["data-text-2"],Ft={class:"hero w100"},Nt={class:"left content flex-col-center w100 rel"},Wt={class:"text flex-col"},Vt={class:"h2"},Bt={class:"t2"},Ut={class:"projects flex-col-center"},Gt={class:"h2 text-center"},Zt={__name:"HomePage",setup(S){const A=dt(()=>tt(()=>import("./ProjectCards-B60_N6iZ.js"),__vite__mapDeps([3,4,5,6,7,8]))),L=dt(()=>tt(()=>import("./TechStackSlider-BOT7IO7Z.js"),__vite__mapDeps([9,4,5,10])));return(c,m)=>(ot(),at("main",Pt,[b("section",It,[b("div",jt,[b("h2",{class:"h1_h2","data-text-1":c.$t("homeH11"),style:{filter:"drop-shadow(0 0 0.5rem var(--color-op))"}},[b("strong",null,z(c.$t("homeH11")),1),m[0]||(m[0]=b("br",null,null,-1)),V(st)],8,zt),b("h2",{class:"h1_span","data-text-2":c.$t("homeH12"),style:{"font-size":"75%",filter:"drop-shadow(0 0 0.5rem var(--color-op))"}},[b("em",null,z(c.$t("homeH12")),1)],8,Rt)]),V(xt),V(nt,{bg:"var(--accent50)","border-radius":"2.3125rem","font-size":"1.75rem",padding:"1.5rem 3rem",path:"projects"},{default:et(()=>[B(z(c.$t("homeB1"))+"  ",1),V(ct,{height:"1.75rem"})]),_:1})]),b("section",Ft,[b("div",Nt,[b("div",Wt,[b("h2",Vt,[V(st),B(" "+z(c.$t("homeH211")),1),m[1]||(m[1]=b("br",null,null,-1)),B(z(c.$t("homeH212")),1),m[2]||(m[2]=b("br",null,null,-1)),B(z(c.$t("homeH213")),1)]),b("p",Bt,[B(z(c.$t("homeP11")),1),b("em",null,z(c.$t("homeP12")),1),V(At),m[3]||(m[3]=B(".")),m[4]||(m[4]=b("br",null,null,-1)),B(" "+z(c.$t("homeP13")),1),m[5]||(m[5]=b("br",null,null,-1)),B(" "+z(c.$t("homeP14")),1)])]),V(nt,{bg:"var(--accent50)","border-radius":"2.125rem",class:"font-variant","font-size":"1.5rem",padding:"1.5rem 3rem",path:"about"},{default:et(()=>[B(z(c.$t("homeB2")),1)]),_:1})]),m[6]||(m[6]=b("div",{class:"right rel"},[b("div",{class:"photo w100"})],-1))]),b("section",Ut,[b("h2",Gt,[B(z(c.$t("homeH22"))+" ",1),V(st)]),V(nt,{bg:"var(--accent50)","border-radius":"2.166rem","font-size":"1.33rem",padding:"1.5rem 2.5rem",path:"projects"},{default:et(()=>[B(z(c.$t("homeB3"))+"  ",1),V(ct,{height:"1.33rem"})]),_:1}),V(ut(A))]),V(ut(L))]))}},Xt=Dt(Zt,[["__scopeId","data-v-1bfdeeb6"]]);export{Xt as default};
