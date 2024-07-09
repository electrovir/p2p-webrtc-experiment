var ga=Object.defineProperty;var ya=(t,e,r)=>e in t?ga(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var nt=(t,e,r)=>(ya(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var On;(function(t){t.Upper="upper",t.Lower="lower"})(On||(On={}));var Ln;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ln||(Ln={}));function Dn(t){return!!t&&typeof t=="object"}function va(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}va();class Qr extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const ba=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ea(t,e){return t?ba.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ta(t){return t instanceof Promise}function ze(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function k(t,e){return ze(t)===e}function Xr(t,e,r){if(!(t instanceof e))throw new Qr(r||"instanceof assertion failed")}function Pe(t,e){if(t==null)throw new Qr(e||"defined assertion failed")}function en(t,e){return t===e}function Sa(t,e,r=en){return Dn(t)&&Dn(e)?Array.from(new Set([...Object.keys(t),...Object.keys(e)])).every(i=>{const s=t[i],o=e[i];return r(s,o)}):r(t,e)}function $a(t,e){if(!(k(t,"string")||k(t,"number")||k(t,"symbol")))throw new Qr(e||`value is of type '${ze(t)}' but expected a PropertyKey.`)}function yr(t){try{return $a(t),!0}catch{return!1}}const Aa=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function fs(t,e){return t?Aa.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function ka(t){return t.replace(/,/g,"")}var Nn;(function(t){t.Upper="upper",t.Lower="lower"})(Nn||(Nn={}));function Ma(t){return typeof t=="number"?t:Number(typeof t=="string"?ka(t):t)}function In(t){const e=xa(t);if(e==null)throw new Error(`Cannot convert to a number: ${t}`);return e}function xa(t){const e=Ma(t);if(!isNaN(e))return e}function vr({max:t,min:e,value:r}){return r>t?e:r<e?t:r}var Pn;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Pn||(Pn={}));function hs(t,e){try{return Ca(t,e),!0}catch{return!1}}function Ca(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Oa(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function ms(){let t,e,r=!1;const n=new Promise((i,s)=>{t=o=>(r=!0,i(o)),e=o=>{r=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ms.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function La(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}La();function Da({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function Na(t){var r;return[...t.children,...((r=t.shadowRoot)==null?void 0:r.children)??[]]}var Ia=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Pa(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const _a=globalThis.CustomEvent||Pa();function Y(){function t(e){var r;return r=class extends _a{constructor(i){super(e,i)}},Ia(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var Ha=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function tn(t){var e;return e=class extends Event{constructor(n){super(t,n)}},Ha(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}function Va(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function _n(t){return Va(t).map(e=>t[e])}var Hn;(function(t){t.Upper="upper",t.Lower="lower"})(Hn||(Hn={}));var Vn;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Vn||(Vn={}));function Fa(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Fa();class Wa{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return _n(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(e,r,n={}){const i=this.listeners,s=k(e,"string")?e:e.type;function o(){var l;return((l=i[s])==null?void 0:l.delete(r))||!1}function a(l,c){n.once&&o(),r(l,c)}return i[s]||(i[s]=new Map),i[s].set(r,{listener:a,removeListener:o}),o}removeListener(e,r){const n=k(e,"string")?e:e.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(e){const r=this.listeners[e.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(i=>{i.listener(e,i.removeListener)}),n}removeAllListeners(){const r=_n(this.listeners).reduce((n,i)=>{const s=(i==null?void 0:i.size)||0;return i==null||i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class rn extends Wa{}function Ra(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function Fn(t,e,r){return Ra(globalThis,t,e,r)}const Ua=Symbol("no update");class br extends Y()("observable-value-update"){}class th extends Y()("observable-value-resolve"){}class rh extends Y()("observable-value-error"){}class ja extends tn("observable-destroy"){}class nh extends tn("observable-callback-call"){}class ih extends Y()("observable-params-update"){}class sh extends Y()("observable-interval-run"){}class oh extends Y()("observable-interval-skip"){}class ah extends Y()("observable-interval-rate-limited"){}class za{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new rn}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(e,r=this.equalityCheck){return e===Ua?!1:!r||!r(this.value,e)?(this.value=e,this.listenTarget.dispatch(new br({detail:e})),!0):!1}listen(e,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),e&&r(this.value),this.listenTarget.listen(br,n)}removeListener(e){const r=this.listenerMap.get(e);return!!r&&this.listenTarget.removeListener(br,r)}destroy(){this.listenTarget.dispatch(new ja),this.listenTarget.destroy()}listenToEvent(e,r,n){return this.listenTarget.listen(e,r,n)}}var Wn;(function(t){t.Upper="upper",t.Lower="lower"})(Wn||(Wn={}));var Rn;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Rn||(Rn={}));function Ga(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ga();function Ba(t,e){return Sa(t,e,qa)}function qa(t,e){return ze(t)===ze(e)&&k(t,"function")?!0:en(t,e)}const Za=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Ka(t,e){return t?Za.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function ps(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ya(t){return!!t}var Un;(function(t){t.Upper="upper",t.Lower="lower"})(Un||(Un={}));var jn;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(jn||(jn={}));function Ja(t){return ps(t).filter(e=>isNaN(Number(e)))}function Qa(t){return Ja(t).map(r=>t[r])}function ws(t,e){return ps(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function Xa(t,e){return ws(t,r=>!e.includes(r))}function el(t,e){return ws(t,r=>e.includes(r))}function tl(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}tl();class Ce extends Error{}class rl extends Ce{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class nl extends Ce{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class il extends Ce{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Ve extends Ce{}class gs extends Ce{constructor(e){super(`Invalid unit ${e}`)}}class H extends Ce{}class se extends Ce{constructor(){super("Zone is an abstract class")}}const m="numeric",K="short",V="long",zt={year:m,month:m,day:m},ys={year:m,month:K,day:m},sl={year:m,month:K,day:m,weekday:K},vs={year:m,month:V,day:m},bs={year:m,month:V,day:m,weekday:V},Es={hour:m,minute:m},Ts={hour:m,minute:m,second:m},Ss={hour:m,minute:m,second:m,timeZoneName:K},$s={hour:m,minute:m,second:m,timeZoneName:V},As={hour:m,minute:m,hourCycle:"h23"},ks={hour:m,minute:m,second:m,hourCycle:"h23"},Ms={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:K},xs={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:V},Cs={year:m,month:m,day:m,hour:m,minute:m},Os={year:m,month:m,day:m,hour:m,minute:m,second:m},Ls={year:m,month:K,day:m,hour:m,minute:m},Ds={year:m,month:K,day:m,hour:m,minute:m,second:m},ol={year:m,month:K,day:m,weekday:K,hour:m,minute:m},Ns={year:m,month:V,day:m,hour:m,minute:m,timeZoneName:K},Is={year:m,month:V,day:m,hour:m,minute:m,second:m,timeZoneName:K},Ps={year:m,month:V,day:m,weekday:V,hour:m,minute:m,timeZoneName:V},_s={year:m,month:V,day:m,weekday:V,hour:m,minute:m,second:m,timeZoneName:V};class Et{get type(){throw new se}get name(){throw new se}get ianaName(){return this.name}get isUniversal(){throw new se}offsetName(e,r){throw new se}formatOffset(e,r){throw new se}offset(e){throw new se}equals(e){throw new se}get isValid(){throw new se}}let Er=null;class er extends Et{static get instance(){return Er===null&&(Er=new er),Er}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return Gs(e,r,n)}formatOffset(e,r){return dt(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let Ft={};function al(t){return Ft[t]||(Ft[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ft[t]}const ll={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function cl(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,l,c,u]=n;return[o,i,s,a,l,c,u]}function ul(t,e){const r=t.formatToParts(e),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=ll[s];s==="era"?n[a]=o:g(a)||(n[a]=parseInt(o,10))}return n}let Ot={};class ne extends Et{static create(e){return Ot[e]||(Ot[e]=new ne(e)),Ot[e]}static resetCache(){Ot={},Ft={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=ne.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return Gs(e,r,n,this.name)}formatOffset(e,r){return dt(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=al(this.name);let[i,s,o,a,l,c,u]=n.formatToParts?ul(n,r):cl(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=rr({year:i,month:s,day:o,hour:l===24?0:l,minute:c,second:u,millisecond:0});let h=+r;const v=h%1e3;return h-=v>=0?v:1e3+v,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let zn={};function dl(t,e={}){const r=JSON.stringify([t,e]);let n=zn[r];return n||(n=new Intl.ListFormat(t,e),zn[r]=n),n}let Vr={};function Fr(t,e={}){const r=JSON.stringify([t,e]);let n=Vr[r];return n||(n=new Intl.DateTimeFormat(t,e),Vr[r]=n),n}let Wr={};function fl(t,e={}){const r=JSON.stringify([t,e]);let n=Wr[r];return n||(n=new Intl.NumberFormat(t,e),Wr[r]=n),n}let Rr={};function hl(t,e={}){const{base:r,...n}=e,i=JSON.stringify([t,n]);let s=Rr[i];return s||(s=new Intl.RelativeTimeFormat(t,e),Rr[i]=s),s}let at=null;function ml(){return at||(at=new Intl.DateTimeFormat().resolvedOptions().locale,at)}let Gn={};function pl(t){let e=Gn[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Gn[t]=e}return e}function wl(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,i;try{n=Fr(t).resolvedOptions(),i=t}catch{const l=t.substring(0,r);n=Fr(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function gl(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function yl(t){const e=[];for(let r=1;r<=12;r++){const n=p.utc(2009,r,1);e.push(t(n))}return e}function vl(t){const e=[];for(let r=1;r<=7;r++){const n=p.utc(2016,11,13+r);e.push(t(n))}return e}function Lt(t,e,r,n){const i=t.listingMode();return i==="error"?null:i==="en"?r(e):n(e)}function bl(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class El{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=fl(e,a)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):an(e,3);return D(r,this.padTo)}}}class Tl{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const o=-1*(e.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;e.offset!==0&&ne.create(a).valid?(i=a,this.dt=e):(i="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Fr(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class Sl{constructor(e,r,n){this.opts={style:"long",...n},!r&&js()&&(this.rtf=hl(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):jl(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const $l={firstDay:1,minimalDays:4,weekend:[6,7]};class A{static fromOpts(e){return A.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,i,s=!1){const o=e||M.defaultLocale,a=o||(s?"en-US":ml()),l=r||M.defaultNumberingSystem,c=n||M.defaultOutputCalendar,u=Ur(i)||M.defaultWeekSettings;return new A(a,l,c,u,o)}static resetCache(){at=null,Vr={},Wr={},Rr={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return A.create(e,r,n,i)}constructor(e,r,n,i,s){const[o,a,l]=wl(e);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=gl(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=bl(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:A.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,Ur(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return Lt(this,e,Zs,()=>{const n=r?{month:e,day:"numeric"}:{month:e},i=r?"format":"standalone";return this.monthsCache[i][e]||(this.monthsCache[i][e]=yl(s=>this.extract(s,n,"month"))),this.monthsCache[i][e]})}weekdays(e,r=!1){return Lt(this,e,Js,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=r?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=vl(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return Lt(this,void 0,()=>Qs,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[p.utc(2016,11,13,9),p.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Lt(this,e,Xs,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[p.utc(-40,1,1),p.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const i=this.dtFormatter(e,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(e={}){return new El(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new Tl(e,this.intl,r)}relFormatter(e={}){return new Sl(this.intl,this.isEnglish(),e)}listFormatter(e={}){return dl(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:zs()?pl(this.locale):$l}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let Tr=null;class _ extends Et{static get utcInstance(){return Tr===null&&(Tr=new _(0)),Tr}static instance(e){return e===0?_.utcInstance:new _(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new _(nr(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${dt(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${dt(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return dt(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class Al extends Et{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ce(t,e){if(g(t)||t===null)return e;if(t instanceof Et)return t;if(xl(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?er.instance:r==="utc"||r==="gmt"?_.utcInstance:_.parseSpecifier(r)||ne.create(t)}else return Ae(t)?_.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new Al(t)}let Bn=()=>Date.now(),qn="system",Zn=null,Kn=null,Yn=null,Jn=60,Qn,Xn=null;class M{static get now(){return Bn}static set now(e){Bn=e}static set defaultZone(e){qn=e}static get defaultZone(){return ce(qn,er.instance)}static get defaultLocale(){return Zn}static set defaultLocale(e){Zn=e}static get defaultNumberingSystem(){return Kn}static set defaultNumberingSystem(e){Kn=e}static get defaultOutputCalendar(){return Yn}static set defaultOutputCalendar(e){Yn=e}static get defaultWeekSettings(){return Xn}static set defaultWeekSettings(e){Xn=Ur(e)}static get twoDigitCutoffYear(){return Jn}static set twoDigitCutoffYear(e){Jn=e%100}static get throwOnInvalid(){return Qn}static set throwOnInvalid(e){Qn=e}static resetCaches(){A.resetCache(),ne.resetCache()}}class Z{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Hs=[0,31,59,90,120,151,181,212,243,273,304,334],Vs=[0,31,60,91,121,152,182,213,244,274,305,335];function j(t,e){return new Z("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function nn(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function Fs(t,e,r){return r+(Tt(t)?Vs:Hs)[e-1]}function Ws(t,e){const r=Tt(t)?Vs:Hs,n=r.findIndex(s=>s<e),i=e-r[n];return{month:n+1,day:i}}function sn(t,e){return(t-e+7)%7+1}function Gt(t,e=4,r=1){const{year:n,month:i,day:s}=t,o=Fs(n,i,s),a=sn(nn(n,i,s),r);let l=Math.floor((o-a+14-e)/7),c;return l<1?(c=n-1,l=wt(c,e,r)):l>wt(n,e,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:a,...ir(t)}}function ei(t,e=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=t,o=sn(nn(n,1,e),r),a=We(n);let l=i*7+s-o-7+e,c;l<1?(c=n-1,l+=We(c)):l>a?(c=n+1,l-=We(n)):c=n;const{month:u,day:d}=Ws(c,l);return{year:c,month:u,day:d,...ir(t)}}function Sr(t){const{year:e,month:r,day:n}=t,i=Fs(e,r,n);return{year:e,ordinal:i,...ir(t)}}function ti(t){const{year:e,ordinal:r}=t,{month:n,day:i}=Ws(e,r);return{year:e,month:n,day:i,...ir(t)}}function ri(t,e){if(!g(t.localWeekday)||!g(t.localWeekNumber)||!g(t.localWeekYear)){if(!g(t.weekday)||!g(t.weekNumber)||!g(t.weekYear))throw new Ve("Cannot mix locale-based week fields with ISO-based week fields");return g(t.localWeekday)||(t.weekday=t.localWeekday),g(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),g(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function kl(t,e=4,r=1){const n=tr(t.weekYear),i=z(t.weekNumber,1,wt(t.weekYear,e,r)),s=z(t.weekday,1,7);return n?i?s?!1:j("weekday",t.weekday):j("week",t.weekNumber):j("weekYear",t.weekYear)}function Ml(t){const e=tr(t.year),r=z(t.ordinal,1,We(t.year));return e?r?!1:j("ordinal",t.ordinal):j("year",t.year)}function Rs(t){const e=tr(t.year),r=z(t.month,1,12),n=z(t.day,1,Bt(t.year,t.month));return e?r?n?!1:j("day",t.day):j("month",t.month):j("year",t.year)}function Us(t){const{hour:e,minute:r,second:n,millisecond:i}=t,s=z(e,0,23)||e===24&&r===0&&n===0&&i===0,o=z(r,0,59),a=z(n,0,59),l=z(i,0,999);return s?o?a?l?!1:j("millisecond",i):j("second",n):j("minute",r):j("hour",e)}function g(t){return typeof t>"u"}function Ae(t){return typeof t=="number"}function tr(t){return typeof t=="number"&&t%1===0}function xl(t){return typeof t=="string"}function Cl(t){return Object.prototype.toString.call(t)==="[object Date]"}function js(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function zs(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Ol(t){return Array.isArray(t)?t:[t]}function ni(t,e,r){if(t.length!==0)return t.reduce((n,i)=>{const s=[e(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Ll(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t){if(t==null)return null;if(typeof t!="object")throw new H("Week settings must be an object");if(!z(t.firstDay,1,7)||!z(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!z(e,1,7)))throw new H("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function z(t,e,r){return tr(t)&&t>=e&&t<=r}function Dl(t,e){return t-e*Math.floor(t/e)}function D(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function le(t){if(!(g(t)||t===null||t===""))return parseInt(t,10)}function we(t){if(!(g(t)||t===null||t===""))return parseFloat(t)}function on(t){if(!(g(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function an(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function Tt(t){return t%4===0&&(t%100!==0||t%400===0)}function We(t){return Tt(t)?366:365}function Bt(t,e){const r=Dl(e-1,12)+1,n=t+(e-r)/12;return r===2?Tt(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function rr(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function ii(t,e,r){return-sn(nn(t,1,e),r)+e-1}function wt(t,e=4,r=1){const n=ii(t,e,r),i=ii(t+1,e,r);return(We(t)-n+i)/7}function jr(t){return t>99?t:t>M.twoDigitCutoffYear?1900+t:2e3+t}function Gs(t,e,r,n=null){const i=new Date(t),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:e,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function nr(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Bs(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new H(`Invalid unit value ${t}`);return e}function qt(t,e){const r={};for(const n in t)if(Ge(t,n)){const i=t[n];if(i==null)continue;r[e(n)]=Bs(i)}return r}function dt(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),i=t>=0?"+":"-";switch(e){case"short":return`${i}${D(r,2)}:${D(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${D(r,2)}${D(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function ir(t){return Ll(t,["hour","minute","second","millisecond"])}const Nl=["January","February","March","April","May","June","July","August","September","October","November","December"],qs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Il=["J","F","M","A","M","J","J","A","S","O","N","D"];function Zs(t){switch(t){case"narrow":return[...Il];case"short":return[...qs];case"long":return[...Nl];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Ks=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ys=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Pl=["M","T","W","T","F","S","S"];function Js(t){switch(t){case"narrow":return[...Pl];case"short":return[...Ys];case"long":return[...Ks];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Qs=["AM","PM"],_l=["Before Christ","Anno Domini"],Hl=["BC","AD"],Vl=["B","A"];function Xs(t){switch(t){case"narrow":return[...Vl];case"short":return[...Hl];case"long":return[..._l];default:return null}}function Fl(t){return Qs[t.hour<12?0:1]}function Wl(t,e){return Js(e)[t.weekday-1]}function Rl(t,e){return Zs(e)[t.month-1]}function Ul(t,e){return Xs(e)[t.year<0?0:1]}function jl(t,e,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&s){const d=t==="days";switch(e){case 1:return d?"tomorrow":`next ${i[t][0]}`;case-1:return d?"yesterday":`last ${i[t][0]}`;case 0:return d?"today":`this ${i[t][0]}`}}const o=Object.is(e,-0)||e<0,a=Math.abs(e),l=a===1,c=i[t],u=n?l?c[1]:c[2]||c[1]:l?i[t][0]:t;return o?`${a} ${u} ago`:`in ${a} ${u}`}function si(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const zl={D:zt,DD:ys,DDD:vs,DDDD:bs,t:Es,tt:Ts,ttt:Ss,tttt:$s,T:As,TT:ks,TTT:Ms,TTTT:xs,f:Cs,ff:Ls,fff:Ns,ffff:Ps,F:Os,FF:Ds,FFF:Is,FFFF:_s};class P{static create(e,r={}){return new P(e,r)}static parseFormat(e){let r=null,n="",i=!1;const s=[];for(let o=0;o<e.length;o++){const a=e.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(e){return zl[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return D(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(h,v)=>this.loc.extract(e,h,v),o=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",a=()=>n?Fl(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,v)=>n?Rl(e,h):s(v?{month:h}:{month:h,day:"numeric"},"month"),c=(h,v)=>n?Wl(e,h):s(v?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{const v=P.macroTokenToFormatOpts(h);return v?this.formatWithSystemDefault(e,v):h},d=h=>n?Ul(e,h):s({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(e.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(e.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(e.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(h)}};return si(P.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const u=n(c);return u?this.num(l.get(u),c.length):c},s=P.parseFormat(r),o=s.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=e.shiftTo(...o.map(n).filter(l=>l));return si(s,i(a))}}const eo=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ke(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function Ye(...t){return e=>t.reduce(([r,n,i],s)=>{const[o,a,l]=s(e,i);return[{...r,...o},a||n,l]},[{},null,1]).slice(0,2)}function Je(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const i=r.exec(t);if(i)return n(i)}return[null,null]}function to(...t){return(e,r)=>{const n={};let i;for(i=0;i<t.length;i++)n[t[i]]=le(e[r+i]);return[n,null,r+i]}}const ro=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Gl=`(?:${ro.source}?(?:\\[(${eo.source})\\])?)?`,ln=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,no=RegExp(`${ln.source}${Gl}`),cn=RegExp(`(?:T${no.source})?`),Bl=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,ql=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Zl=/(\d{4})-?(\d{3})/,Kl=to("weekYear","weekNumber","weekDay"),Yl=to("year","ordinal"),Jl=/(\d{4})-(\d\d)-(\d\d)/,io=RegExp(`${ln.source} ?(?:${ro.source}|(${eo.source}))?`),Ql=RegExp(`(?: ${io.source})?`);function Re(t,e,r){const n=t[e];return g(n)?r:le(n)}function Xl(t,e){return[{year:Re(t,e),month:Re(t,e+1,1),day:Re(t,e+2,1)},null,e+3]}function Qe(t,e){return[{hours:Re(t,e,0),minutes:Re(t,e+1,0),seconds:Re(t,e+2,0),milliseconds:on(t[e+3])},null,e+4]}function St(t,e){const r=!t[e]&&!t[e+1],n=nr(t[e+1],t[e+2]),i=r?null:_.instance(n);return[{},i,e+3]}function $t(t,e){const r=t[e]?ne.create(t[e]):null;return[{},r,e+1]}const ec=RegExp(`^T?${ln.source}$`),tc=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function rc(t){const[e,r,n,i,s,o,a,l,c]=t,u=e[0]==="-",d=l&&l[0]==="-",f=(h,v=!1)=>h!==void 0&&(v||h&&u)?-h:h;return[{years:f(we(r)),months:f(we(n)),weeks:f(we(i)),days:f(we(s)),hours:f(we(o)),minutes:f(we(a)),seconds:f(we(l),l==="-0"),milliseconds:f(on(c),d)}]}const nc={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function un(t,e,r,n,i,s,o){const a={year:e.length===2?jr(le(e)):le(e),month:qs.indexOf(r)+1,day:le(n),hour:le(i),minute:le(s)};return o&&(a.second=le(o)),t&&(a.weekday=t.length>3?Ks.indexOf(t)+1:Ys.indexOf(t)+1),a}const ic=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function sc(t){const[,e,r,n,i,s,o,a,l,c,u,d]=t,f=un(e,i,n,r,s,o,a);let h;return l?h=nc[l]:c?h=0:h=nr(u,d),[f,new _(h)]}function oc(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const ac=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,lc=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,cc=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function oi(t){const[,e,r,n,i,s,o,a]=t;return[un(e,i,n,r,s,o,a),_.utcInstance]}function uc(t){const[,e,r,n,i,s,o,a]=t;return[un(e,a,r,n,i,s,o),_.utcInstance]}const dc=Ke(Bl,cn),fc=Ke(ql,cn),hc=Ke(Zl,cn),mc=Ke(no),so=Ye(Xl,Qe,St,$t),pc=Ye(Kl,Qe,St,$t),wc=Ye(Yl,Qe,St,$t),gc=Ye(Qe,St,$t);function yc(t){return Je(t,[dc,so],[fc,pc],[hc,wc],[mc,gc])}function vc(t){return Je(oc(t),[ic,sc])}function bc(t){return Je(t,[ac,oi],[lc,oi],[cc,uc])}function Ec(t){return Je(t,[tc,rc])}const Tc=Ye(Qe);function Sc(t){return Je(t,[ec,Tc])}const $c=Ke(Jl,Ql),Ac=Ke(io),kc=Ye(Qe,St,$t);function Mc(t){return Je(t,[$c,so],[Ac,kc])}const ai="Invalid Duration",oo={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},xc={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...oo},W=146097/400,Ne=146097/4800,Cc={years:{quarters:4,months:12,weeks:W/7,days:W,hours:W*24,minutes:W*24*60,seconds:W*24*60*60,milliseconds:W*24*60*60*1e3},quarters:{months:3,weeks:W/28,days:W/4,hours:W*24/4,minutes:W*24*60/4,seconds:W*24*60*60/4,milliseconds:W*24*60*60*1e3/4},months:{weeks:Ne/7,days:Ne,hours:Ne*24,minutes:Ne*24*60,seconds:Ne*24*60*60,milliseconds:Ne*24*60*60*1e3},...oo},ve=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Oc=ve.slice(0).reverse();function oe(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new E(n)}function ao(t,e){let r=e.milliseconds??0;for(const n of Oc.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function li(t,e){const r=ao(t,e)<0?-1:1;ve.reduceRight((n,i)=>{if(g(e[i]))return n;if(n){const s=e[n]*r,o=t[i][n],a=Math.floor(s/o);e[i]+=a*r,e[n]-=a*o*r}return i},null),ve.reduce((n,i)=>{if(g(e[i]))return n;if(n){const s=e[n]%1;e[n]-=s,e[i]+=s*t[n][i]}return i},null)}function Lc(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class E{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?Cc:xc;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||A.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return E.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new H(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new E({values:qt(e,E.normalizeUnit),loc:A.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Ae(e))return E.fromMillis(e);if(E.isDuration(e))return e;if(typeof e=="object")return E.fromObject(e);throw new H(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=Ec(e);return n?E.fromObject(n,r):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=Sc(e);return n?E.fromObject(n,r):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new H("need to specify a reason the Duration is invalid");const n=e instanceof Z?e:new Z(e,r);if(M.throwOnInvalid)throw new il(n);return new E({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new gs(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?P.create(this.loc,n).formatDurationFromString(this,e):ai}toHuman(e={}){if(!this.isValid)return ai;const r=ve.map(n=>{const i=this.values[n];return g(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=an(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},p.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?ao(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e),n={};for(const i of ve)(Ge(r.values,i)||Ge(this.values,i))&&(n[i]=r.get(i)+this.get(i));return oe(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Bs(e(this.values[n],n));return oe(this,{values:r},!0)}get(e){return this[E.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...qt(e,E.normalizeUnit)};return oe(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:i,conversionAccuracy:n};return oe(this,o)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return li(this.matrix,e),oe(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=Lc(this.normalize().shiftToAll().toObject());return oe(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(o=>E.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of ve)if(e.indexOf(o)>=0){s=o;let a=0;for(const c in n)a+=this.matrix[c][o]*n[c],n[c]=0;Ae(i[o])&&(a+=i[o]);const l=Math.trunc(a);r[o]=l,n[o]=(a*1e3-l*1e3)/1e3}else Ae(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return li(this.matrix,r),oe(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return oe(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of ve)if(!r(this.values[n],e.values[n]))return!1;return!0}}const Ie="Invalid Interval";function Dc(t,e){return!t||!t.isValid?O.invalid("missing or invalid start"):!e||!e.isValid?O.invalid("missing or invalid end"):e<t?O.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class O{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new H("need to specify a reason the Interval is invalid");const n=e instanceof Z?e:new Z(e,r);if(M.throwOnInvalid)throw new nl(n);return new O({invalid:n})}static fromDateTimes(e,r){const n=st(e),i=st(r),s=Dc(n,i);return s??new O({start:n,end:i})}static after(e,r){const n=E.fromDurationLike(r),i=st(e);return O.fromDateTimes(i,i.plus(n))}static before(e,r){const n=E.fromDurationLike(r),i=st(e);return O.fromDateTimes(i.minus(n),i)}static fromISO(e,r){const[n,i]=(e||"").split("/",2);if(n&&i){let s,o;try{s=p.fromISO(n,r),o=s.isValid}catch{o=!1}let a,l;try{a=p.fromISO(i,r),l=a.isValid}catch{l=!1}if(o&&l)return O.fromDateTimes(s,a);if(o){const c=E.fromISO(i,r);if(c.isValid)return O.after(s,c)}else if(l){const c=E.fromISO(n,r);if(c.isValid)return O.before(a,c)}}return O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let i;return r!=null&&r.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(e,r),Math.floor(i.diff(n,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?O.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(st).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(O.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(e){const r=E.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*i));s=+a>+this.e?this.e:a,o.push(O.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:O.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return O.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const i=[],s=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((l,c)=>l.time-c.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(O.fromDateTimes(r,l.time)),r=null);return O.merge(i)}difference(...e){return O.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ie}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=zt,r={}){return this.isValid?P.create(this.s.loc.clone(r),e).formatInterval(this):Ie}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Ie}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ie}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Ie}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Ie}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):E.invalid(this.invalidReason)}mapEndpoints(e){return O.fromDateTimes(e(this.s),e(this.e))}}class lt{static hasDST(e=M.defaultZone){const r=p.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return ne.isValidZone(e)}static normalizeZone(e){return ce(e,M.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||A.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||A.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||A.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||A.create(r,n,s)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||A.create(r,n,s)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||A.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||A.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return A.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return A.create(r,null,"gregory").eras(e)}static features(){return{relative:js(),localeWeek:zs()}}}function ci(t,e){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(E.fromMillis(n).as("days"))}function Nc(t,e,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=ci(l,c);return(u-u%7)/7}],["days",ci]],i={},s=t;let o,a;for(const[l,c]of n)r.indexOf(l)>=0&&(o=l,i[l]=c(t,e),a=s.plus(i),a>e?(i[l]--,t=s.plus(i),t>e&&(a=t,i[l]--,t=s.plus(i))):t=a);return[t,i,a,o]}function Ic(t,e,r,n){let[i,s,o,a]=Nc(t,e,r);const l=e-i,c=r.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(o<e&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+l/(o-i)));const u=E.fromObject(s,n);return c.length>0?E.fromMillis(l,n).shiftTo(...c).plus(u):u}const dn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ui={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Pc=dn.hanidec.replace(/[\[|\]]/g,"").split("");function _c(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(dn.hanidec)!==-1)e+=Pc.indexOf(t[r]);else for(const i in ui){const[s,o]=ui[i];n>=s&&n<=o&&(e+=n-s)}}return parseInt(e,10)}else return e}function B({numberingSystem:t},e=""){return new RegExp(`${dn[t||"latn"]}${e}`)}const Hc="missing Intl.DateTimeFormat.formatToParts support";function S(t,e=r=>r){return{regex:t,deser:([r])=>e(_c(r))}}const Vc=String.fromCharCode(160),lo=`[ ${Vc}]`,co=new RegExp(lo,"g");function Fc(t){return t.replace(/\./g,"\\.?").replace(co,lo)}function di(t){return t.replace(/\./g,"").replace(co," ").toLowerCase()}function q(t,e){return t===null?null:{regex:RegExp(t.map(Fc).join("|")),deser:([r])=>t.findIndex(n=>di(r)===di(n))+e}}function fi(t,e){return{regex:t,deser:([,r,n])=>nr(r,n),groups:e}}function Dt(t){return{regex:t,deser:([e])=>e}}function Wc(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Rc(t,e){const r=B(e),n=B(e,"{2}"),i=B(e,"{3}"),s=B(e,"{4}"),o=B(e,"{6}"),a=B(e,"{1,2}"),l=B(e,"{1,3}"),c=B(e,"{1,6}"),u=B(e,"{1,9}"),d=B(e,"{2,4}"),f=B(e,"{4,6}"),h=N=>({regex:RegExp(Wc(N.val)),deser:([ee])=>ee,literal:!0}),$=(N=>{if(t.literal)return h(N);switch(N.val){case"G":return q(e.eras("short"),0);case"GG":return q(e.eras("long"),0);case"y":return S(c);case"yy":return S(d,jr);case"yyyy":return S(s);case"yyyyy":return S(f);case"yyyyyy":return S(o);case"M":return S(a);case"MM":return S(n);case"MMM":return q(e.months("short",!0),1);case"MMMM":return q(e.months("long",!0),1);case"L":return S(a);case"LL":return S(n);case"LLL":return q(e.months("short",!1),1);case"LLLL":return q(e.months("long",!1),1);case"d":return S(a);case"dd":return S(n);case"o":return S(l);case"ooo":return S(i);case"HH":return S(n);case"H":return S(a);case"hh":return S(n);case"h":return S(a);case"mm":return S(n);case"m":return S(a);case"q":return S(a);case"qq":return S(n);case"s":return S(a);case"ss":return S(n);case"S":return S(l);case"SSS":return S(i);case"u":return Dt(u);case"uu":return Dt(a);case"uuu":return S(r);case"a":return q(e.meridiems(),0);case"kkkk":return S(s);case"kk":return S(d,jr);case"W":return S(a);case"WW":return S(n);case"E":case"c":return S(r);case"EEE":return q(e.weekdays("short",!1),1);case"EEEE":return q(e.weekdays("long",!1),1);case"ccc":return q(e.weekdays("short",!0),1);case"cccc":return q(e.weekdays("long",!0),1);case"Z":case"ZZ":return fi(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return fi(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return Dt(/[a-z_+-/]{1,256}?/i);case" ":return Dt(/[^\S\n\r]/);default:return h(N)}})(t)||{invalidReason:Hc};return $.token=t,$}const Uc={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function jc(t,e,r){const{type:n,value:i}=t;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=e[n];let o=n;n==="hour"&&(e.hour12!=null?o=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=Uc[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function zc(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function Gc(t,e,r){const n=t.match(e);if(n){const i={};let s=1;for(const o in r)if(Ge(r,o)){const a=r[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+l))),s+=l}return[n,i]}else return[n,{}]}function Bc(t){const e=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return g(t.z)||(r=ne.create(t.z)),g(t.Z)||(r||(r=new _(t.Z)),n=t.Z),g(t.q)||(t.M=(t.q-1)*3+1),g(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),g(t.u)||(t.S=on(t.u)),[Object.keys(t).reduce((s,o)=>{const a=e(o);return a&&(s[a]=t[o]),s},{}),r,n]}let $r=null;function qc(){return $r||($r=p.fromMillis(1555555555555)),$r}function Zc(t,e){if(t.literal)return t;const r=P.macroTokenToFormatOpts(t.val),n=ho(r,e);return n==null||n.includes(void 0)?t:n}function uo(t,e){return Array.prototype.concat(...t.map(r=>Zc(r,e)))}function fo(t,e,r){const n=uo(P.parseFormat(r),t),i=n.map(o=>Rc(o,t)),s=i.find(o=>o.invalidReason);if(s)return{input:e,tokens:n,invalidReason:s.invalidReason};{const[o,a]=zc(i),l=RegExp(o,"i"),[c,u]=Gc(e,l,a),[d,f,h]=u?Bc(u):[null,null,void 0];if(Ge(u,"a")&&Ge(u,"H"))throw new Ve("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:u,result:d,zone:f,specificOffset:h}}}function Kc(t,e,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=fo(t,e,r);return[n,i,s,o]}function ho(t,e){if(!t)return null;const n=P.create(e,t).dtFormatter(qc()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>jc(o,t,s))}const Ar="Invalid DateTime",hi=864e13;function Nt(t){return new Z("unsupported zone",`the zone "${t.name}" is not supported`)}function kr(t){return t.weekData===null&&(t.weekData=Gt(t.c)),t.weekData}function Mr(t){return t.localWeekData===null&&(t.localWeekData=Gt(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function ge(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new p({...r,...e,old:r})}function mo(t,e,r){let n=t-e*60*1e3;const i=r.offset(n);if(e===i)return[n,e];n-=(i-e)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[t-Math.min(i,s)*60*1e3,Math.max(i,s)]}function It(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function Wt(t,e,r){return mo(rr(t),e,r)}function mi(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),i=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,s={...t.c,year:n,month:i,day:Math.min(t.c.day,Bt(n,i))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},o=E.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),a=rr(s);let[l,c]=mo(a,r,t.zone);return o!==0&&(l+=o,c=t.zone.offset(l)),{ts:l,o:c}}function it(t,e,r,n,i,s){const{setZone:o,zone:a}=r;if(t&&Object.keys(t).length!==0||e){const l=e||a,c=p.fromObject(t,{...r,zone:l,specificOffset:s});return o?c:c.setZone(a)}else return p.invalid(new Z("unparsable",`the input "${i}" can't be parsed as ${n}`))}function Pt(t,e,r=!0){return t.isValid?P.create(A.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function xr(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=D(t.c.year,r?6:4),e?(n+="-",n+=D(t.c.month),n+="-",n+=D(t.c.day)):(n+=D(t.c.month),n+=D(t.c.day)),n}function pi(t,e,r,n,i,s){let o=D(t.c.hour);return e?(o+=":",o+=D(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(o+=":")):o+=D(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(o+=D(t.c.second),(t.c.millisecond!==0||!n)&&(o+=".",o+=D(t.c.millisecond,3))),i&&(t.isOffsetFixed&&t.offset===0&&!s?o+="Z":t.o<0?(o+="-",o+=D(Math.trunc(-t.o/60)),o+=":",o+=D(Math.trunc(-t.o%60))):(o+="+",o+=D(Math.trunc(t.o/60)),o+=":",o+=D(Math.trunc(t.o%60)))),s&&(o+="["+t.zone.ianaName+"]"),o}const po={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Yc={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Jc={ordinal:1,hour:0,minute:0,second:0,millisecond:0},wo=["year","month","day","hour","minute","second","millisecond"],Qc=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Xc=["year","ordinal","hour","minute","second","millisecond"];function eu(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new gs(t);return e}function wi(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return eu(t)}}function gi(t,e){const r=ce(e.zone,M.defaultZone),n=A.fromObject(e),i=M.now();let s,o;if(g(t.year))s=i;else{for(const c of wo)g(t[c])&&(t[c]=po[c]);const a=Rs(t)||Us(t);if(a)return p.invalid(a);const l=r.offset(i);[s,o]=Wt(t,l,r)}return new p({ts:s,zone:r,loc:n,o})}function yi(t,e,r){const n=g(r.round)?!0:r.round,i=(o,a)=>(o=an(o,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?e.hasSame(t,o)?0:e.startOf(o).diff(t.startOf(o),o).get(o):e.diff(t,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(t>e?-0:0,r.units[r.units.length-1])}function vi(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class p{constructor(e){const r=e.zone||M.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new Z("invalid input"):null)||(r.isValid?null:Nt(r));this.ts=g(e.ts)?M.now():e.ts;let i=null,s=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[i,s]=[e.old.c,e.old.o];else{const a=r.offset(this.ts);i=It(this.ts,a),n=Number.isNaN(i.year)?new Z("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=e.loc||A.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new p({})}static local(){const[e,r]=vi(arguments),[n,i,s,o,a,l,c]=r;return gi({year:n,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static utc(){const[e,r]=vi(arguments),[n,i,s,o,a,l,c]=r;return e.zone=_.utcInstance,gi({year:n,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static fromJSDate(e,r={}){const n=Cl(e)?e.valueOf():NaN;if(Number.isNaN(n))return p.invalid("invalid input");const i=ce(r.zone,M.defaultZone);return i.isValid?new p({ts:n,zone:i,loc:A.fromObject(r)}):p.invalid(Nt(i))}static fromMillis(e,r={}){if(Ae(e))return e<-hi||e>hi?p.invalid("Timestamp out of range"):new p({ts:e,zone:ce(r.zone,M.defaultZone),loc:A.fromObject(r)});throw new H(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Ae(e))return new p({ts:e*1e3,zone:ce(r.zone,M.defaultZone),loc:A.fromObject(r)});throw new H("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=ce(r.zone,M.defaultZone);if(!n.isValid)return p.invalid(Nt(n));const i=A.fromObject(r),s=qt(e,wi),{minDaysInFirstWeek:o,startOfWeek:a}=ri(s,i),l=M.now(),c=g(r.specificOffset)?n.offset(l):r.specificOffset,u=!g(s.ordinal),d=!g(s.year),f=!g(s.month)||!g(s.day),h=d||f,v=s.weekYear||s.weekNumber;if((h||u)&&v)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&u)throw new Ve("Can't mix ordinal dates with month/day");const $=v||s.weekday&&!h;let N,ee,J=It(l,c);$?(N=Qc,ee=Yc,J=Gt(J,o,a)):u?(N=Xc,ee=Jc,J=Sr(J)):(N=wo,ee=po);let et=!1;for(const rt of N){const wa=s[rt];g(wa)?et?s[rt]=ee[rt]:s[rt]=J[rt]:et=!0}const tt=$?kl(s,o,a):u?Ml(s):Rs(s),Ct=tt||Us(s);if(Ct)return p.invalid(Ct);const ha=$?ei(s,o,a):u?ti(s):s,[ma,pa]=Wt(ha,c,n),gr=new p({ts:ma,zone:n,o:pa,loc:i});return s.weekday&&h&&e.weekday!==gr.weekday?p.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${gr.toISO()}`):gr}static fromISO(e,r={}){const[n,i]=yc(e);return it(n,i,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,i]=vc(e);return it(n,i,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,i]=bc(e);return it(n,i,r,"HTTP",r)}static fromFormat(e,r,n={}){if(g(e)||g(r))throw new H("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=A.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,l,c,u]=Kc(o,e,r);return u?p.invalid(u):it(a,l,n,`format ${r}`,e,c)}static fromString(e,r,n={}){return p.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,i]=Mc(e);return it(n,i,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new H("need to specify a reason the DateTime is invalid");const n=e instanceof Z?e:new Z(e,r);if(M.throwOnInvalid)throw new rl(n);return new p({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=ho(e,A.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(e,r={}){return uo(P.parseFormat(e),A.fromObject(r)).map(i=>i.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?kr(this).weekYear:NaN}get weekNumber(){return this.isValid?kr(this).weekNumber:NaN}get weekday(){return this.isValid?kr(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Mr(this).weekday:NaN}get localWeekNumber(){return this.isValid?Mr(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Mr(this).weekYear:NaN}get ordinal(){return this.isValid?Sr(this.c).ordinal:NaN}get monthShort(){return this.isValid?lt.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?lt.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?lt.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?lt.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=rr(this.c),i=this.zone.offset(n-e),s=this.zone.offset(n+e),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const l=n-o*r,c=n-a*r,u=It(l,o),d=It(c,a);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[ge(this,{ts:l}),ge(this,{ts:c})]:[this]}get isInLeapYear(){return Tt(this.year)}get daysInMonth(){return Bt(this.year,this.month)}get daysInYear(){return this.isValid?We(this.year):NaN}get weeksInWeekYear(){return this.isValid?wt(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wt(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:i}=P.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(e=0,r={}){return this.setZone(_.instance(e),r)}toLocal(){return this.setZone(M.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=ce(e,M.defaultZone),e.equals(this.zone))return this;if(e.isValid){let i=this.ts;if(r||n){const s=e.offset(this.ts),o=this.toObject();[i]=Wt(o,s,e)}return ge(this,{ts:i,zone:e})}else return p.invalid(Nt(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return ge(this,{loc:i})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=qt(e,wi),{minDaysInFirstWeek:n,startOfWeek:i}=ri(r,this.loc),s=!g(r.weekYear)||!g(r.weekNumber)||!g(r.weekday),o=!g(r.ordinal),a=!g(r.year),l=!g(r.month)||!g(r.day),c=a||l,u=r.weekYear||r.weekNumber;if((c||o)&&u)throw new Ve("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&o)throw new Ve("Can't mix ordinal dates with month/day");let d;s?d=ei({...Gt(this.c,n,i),...r},n,i):g(r.ordinal)?(d={...this.toObject(),...r},g(r.day)&&(d.day=Math.min(Bt(d.year,d.month),d.day))):d=ti({...Sr(this.c),...r});const[f,h]=Wt(d,this.o,this.zone);return ge(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e);return ge(this,mi(this,r))}minus(e){if(!this.isValid)return this;const r=E.fromDurationLike(e).negate();return ge(this,mi(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=E.normalizeUnit(e);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?P.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Ar}toLocaleString(e=zt,r={}){return this.isValid?P.create(this.loc.clone(r),e).formatDateTime(this):Ar}toLocaleParts(e={}){return this.isValid?P.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=e==="extended";let a=xr(this,o);return a+="T",a+=pi(this,o,r,n,i,s),a}toISODate({format:e="extended"}={}){return this.isValid?xr(this,e==="extended"):null}toISOWeekDate(){return Pt(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+pi(this,o==="extended",r,e,n,s):null}toRFC2822(){return Pt(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Pt(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?xr(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||e)&&(n&&(i+=" "),r?i+="z":e&&(i+="ZZ")),Pt(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Ar}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return E.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=Ol(r).map(E.normalizeUnit),o=e.valueOf()>this.valueOf(),a=o?this:e,l=o?e:this,c=Ic(a,l,s,i);return o?c.negate():c}diffNow(e="milliseconds",r={}){return this.diff(p.now(),e,r)}until(e){return this.isValid?O.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const i=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||p.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(i=e.unit,s=void 0),yi(r,this.plus(n),{...e,numeric:"always",units:i,unit:s})}toRelativeCalendar(e={}){return this.isValid?yi(e.base||p.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(p.isDateTime))throw new H("min requires all arguments be DateTimes");return ni(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(p.isDateTime))throw new H("max requires all arguments be DateTimes");return ni(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=A.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return fo(o,e,r)}static fromStringExplain(e,r,n={}){return p.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return zt}static get DATE_MED(){return ys}static get DATE_MED_WITH_WEEKDAY(){return sl}static get DATE_FULL(){return vs}static get DATE_HUGE(){return bs}static get TIME_SIMPLE(){return Es}static get TIME_WITH_SECONDS(){return Ts}static get TIME_WITH_SHORT_OFFSET(){return Ss}static get TIME_WITH_LONG_OFFSET(){return $s}static get TIME_24_SIMPLE(){return As}static get TIME_24_WITH_SECONDS(){return ks}static get TIME_24_WITH_SHORT_OFFSET(){return Ms}static get TIME_24_WITH_LONG_OFFSET(){return xs}static get DATETIME_SHORT(){return Cs}static get DATETIME_SHORT_WITH_SECONDS(){return Os}static get DATETIME_MED(){return Ls}static get DATETIME_MED_WITH_SECONDS(){return Ds}static get DATETIME_MED_WITH_WEEKDAY(){return ol}static get DATETIME_FULL(){return Ns}static get DATETIME_FULL_WITH_SECONDS(){return Is}static get DATETIME_HUGE(){return Ps}static get DATETIME_HUGE_WITH_SECONDS(){return _s}}function st(t){if(p.isDateTime(t))return t;if(t&&t.valueOf&&Ae(t.valueOf()))return p.fromJSDate(t);if(t&&typeof t=="object")return p.fromObject(t);throw new H(`Unknown datetime argument: ${t}, of type ${typeof t}`)}function fn(t){const e=p.fromObject(Xa(t,["timezone"]),{zone:t.timezone});if(!e.isValid)throw new Error(e.invalidExplanation??void 0);return e}function tu(t,e){if(!t.isValid)throw new Error(`Invalid input: '${t.toISO()}'`);return{day:t.day,month:t.month,year:t.year,hour:t.hour,minute:t.minute,second:t.second,millisecond:t.millisecond,timezone:e??t.zoneName}}const ru=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ft(t,e){return t?ru.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function ke(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function nu(t){return ke(t).map(e=>t[e])}function iu(t,e){return t.includes(e)}function su(t){return!!t}var bi;(function(t){t.Upper="upper",t.Lower="lower"})(bi||(bi={}));var Ei;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ei||(Ei={}));function ou(t){return t?t.map(hn).filter(su).join(`
`):""}function hn(t){return t?t instanceof Error?t.message:ft(t,"message")?String(t.message):String(t):""}function au(t){return t instanceof Error?t:new Error(hn(t))}function lu(t,e){const r=au(t);return r.message=`${e}: ${r.message}`,r}function go(t,e){let r=!1;const n=ke(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(ke(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function cu(t,e){try{return uu(t,e),!0}catch{return!1}}function uu(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Be(t){return!!t&&typeof t=="object"}function du(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}du();function fu(t,e){var a;const r=e==null?void 0:e.constructor,n=(a=t==null?void 0:t.constructor)==null?void 0:a.prototype,i=(t==null?void 0:t.constructor)===r,s=r&&n?n instanceof r:!1,o=i||s;return ze(t)===ze(e)&&o}const yo="__vir__shape__definition__key__do__not__use__in__actual__objects";function vo(t){return ft(t,yo)}const mn=Symbol("and"),bo=Symbol("instance"),Eo=Symbol("enum"),To=Symbol("exact"),pn=Symbol("indexed-keys"),So=Symbol("or"),wn=Symbol("unknown"),hu=[mn,Eo,To,pn,bo,So,wn],$o="__vir__shape__specifier__key__do__not__use__in__actual__objects";function mu(...t){return gn(t,mn)}function pu(...t){return gn(t,pn)}function wu(t){return gn([t],wn)}function sr(t){return Oe(t,mn)}function or(t){return Oe(t,bo)}function ar(t){return Oe(t,Eo)}function lr(t){return Oe(t,To)}function cr(t){return Oe(t,pn)}function At(t){return Oe(t,So)}function ur(t){return Oe(t,wn)}function Oe(t,e){const r=kt(t);return!!r&&r.specifierType===e}function gn(t,e){return{[$o]:!0,specifierType:e,parts:t}}function be(t,e,r,n){const i=kt(e);if(i){if(or(i))return t instanceof i.parts[0];if(sr(i))return i.parts.every(s=>be(t,s));if(At(i))return i.parts.some(s=>be(t,s));if(lr(i))return Be(t)?be(t,i.parts[0]):t===i.parts[0];if(ar(i))return Object.values(i.parts[0]).some(s=>s===t);if(cr(i))return Be(t)?gu(t,i,!!r)&&nu(t).every(s=>be(s,i.parts[0].values)):!1;if(ur(i))return!0}return n?e===t:fu(t,e)}function gu(t,e,r){const n=e.parts[0].required,i=e.parts[0].keys;if(r)if(n){const s=yn(e);return k(s,"boolean")?s:s.every(o=>ke(t).some(a=>be(a,o,!1,!0)))}else return!0;else return ke(t).every(s=>be(s,i))}function yn(t){const e=t.parts[0].keys,r=kt(e);if(yr(e))return[e];if(r){if(or(r))return!1;if(sr(r))return!1;if(At(r)){const n=r.parts.map(s=>yn(pu({...t.parts[0],keys:s})));let i;return n.forEach(s=>{k(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),k(i,"boolean")?i:n.flat().filter(yr)}else if(lr(r)){const n=r.parts.filter(yr);return n.length!==r.parts.length?!1:n}else{if(ar(r))return Object.values(r.parts[0]);if(cr(r))return!1;if(ur(r))return!0}}return!1}function kt(t){if(Be(t)&&ft(t,$o)){if(!ft(t,"parts")||!k(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ft(t,"specifierType")||!iu(hu,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Ti extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function zr(t,e=!1){return ct(t)}function ct(t){const e=kt(t);if(e)if(or(e)){const r=e.parts[0];try{return new r}catch(n){throw new Ti(`Failed to create default value for classShape for class '${r.name}': ${hn(n)}`)}}else{if(At(e)||lr(e))return ct(e.parts[0]);if(sr(e))return e.parts.reduce((r,n)=>Object.assign(r,ct(n)),{});if(ar(e))return Object.values(e.parts[0])[0];if(cr(e)){const r=yn(e);return!e.parts[0].required||k(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,ct(e.parts[0].values)]))}else{if(ur(e))return e.parts[0]??{};throw new Ti(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return vo(t)?zr(t.shape):t instanceof RegExp?t:k(t,"array")?t.map(ct):Be(t)?go(t,(r,n)=>zr(n)):t}function dr(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return zr(t)},[yo]:!0}}class R extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function yu(t,e,r={}){try{return Ao(t,e,r),!0}catch{return!1}}function Ao(t,e,r={},n=""){try{te({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?lu(i,n):i}}function Gr(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function te({subject:t,shape:e,keys:r,options:n}){if(ur(e))return!0;if(vo(e))return te({subject:t,shape:e.shape,keys:r,options:n});const i=Gr(r);if(kt(t))throw new R(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!be(t,e,!n.ignoreExtraKeys))throw new R(`Subject does not match shape definition at key ${i}`);if(k(e,"function"))return k(t,"function");if(or(e))return t instanceof e.parts[0];if(Be(t)){const o=t,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(u=>[u,!1])),l=[];let c=!1;if(At(e)){const u=[];c=e.parts.some(d=>{try{const f=te({subject:t,shape:d,keys:r,options:{...n}});return Object.assign(a,f),!0}catch(f){if(f instanceof R)return u.push(f),!1;throw f}}),!c&&cu(u,1)&&l.push(u[0])}else if(sr(e))c=e.parts.every(u=>{try{const d=te({subject:t,shape:u,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof R)return l.push(d),!1;throw d}});else if(lr(e)){const u=te({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,u),c=!0}else{if(ar(e))throw new R(`Cannot compare an enum specifier to an object at ${i}`);if(k(e,"array")&&k(o,"array"))c=o.every((u,d)=>{const f=e.some(h=>{try{return te({subject:u,shape:h,keys:[...r,d],options:n}),!0}catch(v){if(v instanceof R)return l.push(v),!1;throw v}});return a[d]=f,f});else if(cr(e)){const u=go(t,(d,f)=>(n.ignoreExtraKeys||te({shape:e.parts[0].keys,subject:d,keys:[...r,d],options:n}),te({shape:e.parts[0].values,subject:f,keys:[...r,d],options:n}),!0));Object.assign(a,u),c=!0}else{const u=vu({keys:r,options:n,shape:e,subject:t});Object.assign(a,u),c=!0}}if(l.length)throw new R(ou(l));if(!c){const d=`Failed on key(s): ${Object.keys(a).filter(f=>!a[f]).map(f=>Gr([...r,f])).join(",")}`;throw new R(d)}return n.ignoreExtraKeys||Object.entries(a).forEach(([u,d])=>{if(!d)throw new R(`subject as extra key '${u}' in ${i}.`)}),a}else if(n.exactValues)return t===e;return!0}function vu({keys:t,options:e,shape:r,subject:n}){const i=Gr(t),s={};if(Be(r)){const o=new Set(ke(r)),a=new Set(ke(n));o.forEach(l=>{l in n&&a.add(l)}),e.ignoreExtraKeys||a.forEach(l=>{if(!o.has(l))throw new R(`Subject has extra key '${String(l)}' in ${i}`)}),o.forEach(l=>{var f;const c=r[l],u=At(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new R(`Subject missing key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=n[l];if(e.ignoreExtraKeys&&!o.has(l))return;const u=r[l];te({subject:c,shape:u,keys:[...t,l],options:e}),s[l]=!0})}else throw new R(`shape definition at ${i} was not an object.`);return s}const bu=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Eu=bu.reduce((t,e)=>(t[e]=e,t),{}),Tu=M.defaultZone.name,vn=Eu.UTC;var re;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(re||(re={}));const Su=["hour","minute","second","millisecond"],$u=dr({hour:14,minute:19,second:7,millisecond:877,timezone:vn}),Au=dr({year:2023,month:6,day:5,timezone:vn}),ku=dr(mu(Au,$u));var b;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(b||(b={}));b.Milliseconds+"",b.Seconds+"",b.Minutes+"",b.Hours+"",b.Days+"",b.Weeks+"",b.Months+"",b.Quarters+"",b.Years+"";b.Milliseconds,b.Seconds,b.Minutes,b.Hours,b.Days,b.Weeks,b.Months,b.Quarters,b.Years;b.Years+"",b.Quarters+"",b.Months+"",b.Weeks+"",b.Days+"",b.Hours+"",b.Minutes+"",b.Seconds+"",b.Milliseconds+"";var Si;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(Si||(Si={}));function $i(t,e){const r=[];if(e.forEach(n=>{t[n]==null&&r.push(n)}),r.length)throw new Error(`Missing required FullDate key(s): ${r.join(", ")}`)}function Mu(t){if(!lt.isValidIANAZone(t))throw new Error(`'${t}' is not a valid time zone`)}function xu(t){Ao(t,ku),Mu(t.timezone),fn(t)}function Cu(t){try{return xu(t),!0}catch{return!1}}const Ou=["L-y","LLL-y","LLLL-y"];function Lu(t,e){const r=p.fromISO(t,{zone:e});if(r.isValid)return r;let n;return Ou.some(i=>{const s=p.fromFormat(t,i,{zone:e});return s.isValid?(n=s,!0):!1}),n}function Du(t,e){const r=Iu(t,e);if(!r||!r.isValid)throw new Error(`Failed to parse date input '${t}'`);return tu(r,e)}function Nu(t){const e=p.fromJSDate(new Date(t));if(e.isValid)return e}function Iu(t,e){if(Cu(t)&&(t=fn(t).toMillis()),p.isDateTime(t))return t.setZone(e);if(k(t,"number"))return p.fromMillis(t,{zone:vn}).setZone(e);if(k(t,"string")){const r=Lu(t,e);if(r)return r}else if(t instanceof Date)return p.fromJSDate(t).setZone(e);return Nu(t)}function Pu(t){return Du(Date.now(),t)}function Ai(){return Pu(Tu)}const _u={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};el(_u,Su);const Hu=M.defaultLocale;function Vu(t){return t.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Fu(t,e){const r=fn(t).toLocaleString({...e},{locale:(e==null?void 0:e.locale)??Hu});return Vu(r)}function Wu(t){return[String(Math.abs(t.year)).padStart(4,"0"),String(Math.abs(t.month)).padStart(2,"0"),String(Math.abs(t.day)).padStart(2,"0")].join("-")}function Ru(t,e){const r=Ka(t,"second")&&e?String(Math.abs(t.second)).padStart(2,"0"):void 0;return[String(Math.abs(t.hour)).padStart(2,"0"),String(Math.abs(t.minute)).padStart(2,"0"),r].filter(Ya).join(":")}function Br(t,e,r){const n=t;if(e===re.Date)return $i(n,["year","month","day"]),Wu(n);if(e===re.Time){if(r&&n.second==null)throw new Error("Tried to include seconds in the time string but no seconds were provided.");return $i(n,["hour","minute"]),Ru(n,!!r)}else if(e===re.DateTime){const i=Br(t,re.Date),s=Br(t,re.Time,r);return`${i}T${s}`}else throw new Error(`Unexpected inputTyped: '${e}'. Expected usage of FullDatePartEnum or one of ${Qa(re).join(", ")}.`)}b.Milliseconds+"",b.Seconds+"",b.Minutes+"",b.Hours+"",b.Days+"",b.Weeks+"",b.Months+"",b.Quarters+"",b.Years+"";const Uu={DateShort:p.DATE_SHORT,DateMed:p.DATE_MED,DateMedWithWeekday:p.DATE_MED_WITH_WEEKDAY,DateFull:p.DATE_FULL,DateHuge:p.DATE_HUGE,TimeSimple:p.TIME_SIMPLE,TimeWithSeconds:p.TIME_WITH_SECONDS,TimeWithShortOffset:p.TIME_WITH_SHORT_OFFSET,TimeWithLongOffset:p.TIME_WITH_LONG_OFFSET,Time24Simple:p.TIME_24_SIMPLE,Time24WithSeconds:p.TIME_24_WITH_SECONDS,Time24WithShortOffset:p.TIME_24_WITH_SHORT_OFFSET,Time24WithLongOffset:p.TIME_24_WITH_LONG_OFFSET,DatetimeShort:p.DATETIME_SHORT,DatetimeShortWithSeconds:p.DATETIME_SHORT_WITH_SECONDS,DatetimeMed:p.DATETIME_MED,DatetimeMedWithSeconds:p.DATETIME_MED_WITH_SECONDS,DatetimeMedWithWeekday:p.DATETIME_MED_WITH_WEEKDAY,DatetimeFull:p.DATETIME_FULL,DatetimeFullWithSeconds:p.DATETIME_FULL_WITH_SECONDS,DatetimeHuge:p.DATETIME_HUGE,DatetimeHugeWithSeconds:p.DATETIME_HUGE_WITH_SECONDS};class ju extends za{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e.defaultValue,this.equalityCheck=e.equalityCheck||Ba}setValue(e){return super.setValue(e)}listen(e,r){return super.listen(e,r)}removeListener(e){return super.removeListener(e)}}const zu=dr({listen(t,e){return()=>!1},destroy(){},removeListener(t){return!1},value:wu()});function Cr(t){return yu(t,zu,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=globalThis,bn=Rt.ShadowRoot&&(Rt.ShadyCSS===void 0||Rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,En=Symbol(),ki=new WeakMap;let ko=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==En)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(bn&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ki.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ki.set(r,e))}return e}toString(){return this.cssText}};const I=t=>new ko(typeof t=="string"?t:t+"",void 0,En),Ut=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ko(r,t,En)},Gu=(t,e)=>{if(bn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=Rt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},Mi=bn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return I(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bu,defineProperty:qu,getOwnPropertyDescriptor:Zu,getOwnPropertyNames:Ku,getOwnPropertySymbols:Yu,getPrototypeOf:Ju}=Object,he=globalThis,xi=he.trustedTypes,Qu=xi?xi.emptyScript:"",Or=he.reactiveElementPolyfillSupport,ht=(t,e)=>t,Zt={toAttribute(t,e){switch(e){case Boolean:t=t?Qu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Tn=(t,e)=>!Bu(t,e),Ci={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Tn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),he.litPropertyMetadata??(he.litPropertyMetadata=new WeakMap);class _e extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ci){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&qu(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:s}=Zu(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ci}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;const e=Ju(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){const r=this.properties,n=[...Ku(r),...Yu(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(Mi(i))}else e!==void 0&&r.push(Mi(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gu(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:Zt).toAttribute(r,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,r){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Zt;this._$Em=i,this[i]=a.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Tn)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}_e.elementStyles=[],_e.shadowRootOptions={mode:"open"},_e[ht("elementProperties")]=new Map,_e[ht("finalized")]=new Map,Or==null||Or({ReactiveElement:_e}),(he.reactiveElementVersions??(he.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=globalThis,Kt=mt.trustedTypes,Oi=Kt?Kt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Mo="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,xo="?"+ue,Xu=`<${xo}>`,Me=document,gt=()=>Me.createComment(""),yt=t=>t===null||typeof t!="object"&&typeof t!="function",Co=Array.isArray,ed=t=>Co(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Lr=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Li=/-->/g,Di=/>/g,ye=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ni=/'/g,Ii=/"/g,Oo=/^(?:script|style|textarea|title)$/i,td=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),rd=td(1),G=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Pi=new WeakMap,Ee=Me.createTreeWalker(Me,129);function Lo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oi!==void 0?Oi.createHTML(e):e}const nd=(t,e)=>{const r=t.length-1,n=[];let i,s=e===2?"<svg>":"",o=ot;for(let a=0;a<r;a++){const l=t[a];let c,u,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===ot?u[1]==="!--"?o=Li:u[1]!==void 0?o=Di:u[2]!==void 0?(Oo.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=ye):u[3]!==void 0&&(o=ye):o===ye?u[0]===">"?(o=i??ot,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ye:u[3]==='"'?Ii:Ni):o===Ii||o===Ni?o=ye:o===Li||o===Di?o=ot:(o=ye,i=void 0);const h=o===ye&&t[a+1].startsWith("/>")?" ":"";s+=o===ot?l+Xu:d>=0?(n.push(c),l.slice(0,d)+Mo+l.slice(d)+ue+h):l+ue+(d===-2?a:h)}return[Lo(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class vt{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,u]=nd(e,r);if(this.el=vt.createElement(c,n),Ee.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ee.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Mo)){const f=u[o++],h=i.getAttribute(d).split(ue),v=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:v[2],strings:h,ctor:v[1]==="."?sd:v[1]==="?"?od:v[1]==="@"?ad:fr}),i.removeAttribute(d)}else d.startsWith(ue)&&(l.push({type:6,index:s}),i.removeAttribute(d));if(Oo.test(i.tagName)){const d=i.textContent.split(ue),f=d.length-1;if(f>0){i.textContent=Kt?Kt.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],gt()),Ee.nextNode(),l.push({type:2,index:++s});i.append(d[f],gt())}}}else if(i.nodeType===8)if(i.data===xo)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(ue,d+1))!==-1;)l.push({type:7,index:s}),d+=ue.length-1}s++}}static createElement(e,r){const n=Me.createElement("template");return n.innerHTML=e,n}}function qe(t,e,r=t,n){var o,a;if(e===G)return e;let i=n!==void 0?(o=r._$Co)==null?void 0:o[n]:r._$Cl;const s=yt(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=qe(t,i._$AS(t,e.values),i,n)),e}class id{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Me).importNode(r,!0);Ee.currentNode=i;let s=Ee.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Mt(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new ld(s,this,e)),this._$AV.push(c),l=n[++a]}o!==(l==null?void 0:l.index)&&(s=Ee.nextNode(),o++)}return Ee.currentNode=Me,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Mt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=qe(this,e,r),yt(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ed(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==C&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Me.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=vt.createElement(Lo(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const o=new id(i,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let r=Pi.get(e.strings);return r===void 0&&Pi.set(e.strings,r=new vt(e)),r}k(e){Co(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of e)i===r.length?r.push(n=new Mt(this.S(gt()),this.S(gt()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class fr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=qe(this,e,r,0),o=!yt(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=qe(this,a[n+l],r,l),c===G&&(c=this._$AH[l]),o||(o=!yt(c)||c!==this._$AH[l]),c===C?e=C:e!==C&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class sd extends fr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class od extends fr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}class ad extends fr{constructor(e,r,n,i,s){super(e,r,n,i,s),this.type=5}_$AI(e,r=this){if((e=qe(this,e,r,0)??C)===G)return;const n=this._$AH,i=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==C&&(n===C||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class ld{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}}const Dr=mt.litHtmlPolyfillSupport;Dr==null||Dr(vt,Mt),(mt.litHtmlVersions??(mt.litHtmlVersions=[])).push("3.1.4");const cd=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new Mt(e.insertBefore(gt(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cd(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return G}}var ds;pt._$litElement$=!0,pt.finalized=!0,(ds=globalThis.litElementHydrateSupport)==null||ds.call(globalThis,{LitElement:pt});const Nr=globalThis.litElementPolyfillSupport;Nr==null||Nr({LitElement:pt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=t=>(...e)=>({_$litDirective$:t,values:e});class Le{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ud={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Tn},dd=(t=ud,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),n==="accessor"){const{name:o}=r;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t)},init(a){return a!==void 0&&this.P(o,void 0,t),a}}}if(n==="setter"){const{name:o}=r;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,t)}}throw Error("Unsupported decorator location: "+n)};function fd(t){return(e,r)=>typeof r=="object"?dd(t,e,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=Xe(class extends Le{constructor(t){var e;if(super(t),t.type!==Sn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(o?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return G}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=t=>t??C;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qr extends Le{constructor(e){if(super(e),this.it=C,e.type!==Sn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===G)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}qr.directiveName="unsafeHTML",qr.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _i extends qr{}_i.directiveName="unsafeSVG",_i.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hd(t,e,r){return t?e(t):r==null?void 0:r(t)}class No extends pt{}function md(t,e,r){if(e in t)return t[e];{const n=r();return Ta(n)?new Promise(async(i,s)=>{try{const o=await n;t[e]=o,i(o)}catch(o){s(o)}}):(t[e]=n,n)}}const pd=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function $n(t,e){return t?pd.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function me(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function wd(t,e,r){return t.reduce((n,i,s,o)=>{const a=e(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Io(t){return!!t}const gd={capitalizeFirstLetter:!1};function yd(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function vd(t,e){return e.capitalizeFirstLetter?yd(t):t}function bd(t,e=gd){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return vd(n,e)}var Hi;(function(t){t.Upper="upper",t.Lower="lower"})(Hi||(Hi={}));var Vi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Vi||(Vi={}));function Po(t){return t?t instanceof Error?t.message:$n(t,"message")?String(t.message):String(t):""}function Ed(t){return t instanceof Error?t:new Error(Po(t))}function Td(t,e){const r=Ed(t);return r.message=`${e}: ${r.message}`,r}function _o(t,e){let r=!1;const n=me(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(me(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Sd(t){return!!t&&typeof t=="object"}function $d(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}$d();function Fi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Ze;(function(t){t.Upper="upper",t.Lower="lower"})(Ze||(Ze={}));function Ad(t){return t.toLowerCase()!==t.toUpperCase()}function Wi(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const i=t[n]||"";if(!Ad(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===Ze.Upper&&i!==i.toUpperCase())return!1;if(e===Ze.Lower&&i!==i.toLowerCase())return!1}return!0}function kd(t){return t.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",l=Wi(o,Ze.Lower,{blockNoCaseCharacters:!0})||Wi(a,Ze.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Ri;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ri||(Ri={}));function Md(t){return!!t&&typeof t=="object"}function xd(t,e){let r=!1;const n=Fi(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Fi(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Cd(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Cd();function De(t){if(Md(t))return xd(t,(r,n)=>{if(!k(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(kd(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?I(r):r.startsWith("-")?Ut`-${I(r)}`:Ut`--${I(r)}`;return{name:o,value:Ut`var(${o}, ${I(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${De.name}' function.`)}function Od(t,e,r){const n=!e.length&&!r.length,i=t.length?!1:!e.filter(a=>!!a.index).length;if(n||i)return[...t];const s=t.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<t.length&&(s[a]=[])}),e.forEach(a=>{const l=s[a.index];l&&l.splice(0,0,...a.values)}),s.flat()}function jt(t){return $n(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function An(t){return $n(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function Ho(t){return wd(t,e=>{if(jt(e))return e.definition;if(An(e))return e.tagInterpolationKey||e},Io)}const Vo=new WeakMap;function Ld(t,e){var i;const r=Ho(e);return(i=Fo(Vo,[t,...r]).value)==null?void 0:i.template}function Dd(t,e,r){const n=Ho(e);return Ro(Vo,[t,...n],r)}function Fo(t,e,r=0){const{currentTemplateAndNested:n,reason:i}=Wo(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Fo(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function Wo(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=t.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Ro(t,e,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Wo(t,e,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||t.set(s,a),n===e.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),Ro(l,e,r,n+1)}const Nd=new WeakMap;function Uo(t,e,r){const n=Ld(t,e),i=n??r();if(!n){const a=Dd(t,e,i);if(a.result)Nd.set(t,i);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(e),o=Od(e,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function jo(t,e,r,n){const i=[],s=[],o=[],a=[];return t.forEach((c,u)=>{const d=i.length-1,f=i[d],h=u-1,v=e[h];n&&n(c);let $,N=[];if(typeof f=="string"&&($=r(f,c,v),$)){i[d]=f+$.replacement,o.push(h);const J=$.getExtraValues;N=J?J(v):[],N.length&&J?(i[d]+=" ",N.forEach((et,tt)=>{tt&&i.push(" ")}),a.push(et=>{const tt=et[h],Ct=J(tt);return{index:h,values:Ct}}),i.push(c)):i[d]+=c}$||i.push(c);const ee=t.raw[u];$?(s[d]=s[d]+$.replacement+ee,N.length&&N.forEach(()=>{s.push("")})):s.push(ee)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const u=a.map(d=>d(c)).flat();return{valueIndexDeletions:o,valueInsertions:u}}}}function Id(...[t,e,r]){if(An(r))return{replacement:r.tagName,getExtraValues:void 0}}function Pd(t,e){return jo(t,e,Id)}function T(t,...e){const r=Uo(t,e,()=>Pd(t,e));return Ut(r.strings,...r.values)}const _d={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function zo(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof No?!0:zo(r)}function Go(t,e){const r=t.instanceState;me(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&me(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),Hd(t)}function Hd(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function Ui(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class Vd extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Bo(){return t=>{var e;return e=class extends Vd{constructor(r){super(t,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function pe(){return Bo()}function Fd(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Bo()([t,n].join("-"));return r[n]=i,r},{}):{}}function Wd(t){return t?_o(t,e=>e):{}}const kn=Symbol("element-vir-state-setup");function Rd(t){return Sd(t)?kn in t:!1}function qo(t,e){e in t||fd()(t,e)}function Ud(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function ji(t,e){const r=t;function n(o){e?Ud(o,t,t.tagName):qo(t,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,l){const c=Rd(l)?l[kn]():l;n(a);const u=r[a];function d(v){o[a]=v,r[a]=v}const f=t.observablePropertyListenerMap[a];if(u!==c&&Cr(u)&&f&&u.removeListener(f),Cr(c))if(f)c.listen(!1,f);else{let v=function(){t.requestUpdate()};var h=v;t.observablePropertyListenerMap[a]=v,c.listen(!1,v)}else Cr(u)&&(t.observablePropertyListenerMap[a]=void 0);return d(c),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function jd({hostClassNames:t,cssVars:e}){return{hostClasses:_o(t,(r,n)=>({name:I(n),selector:I(`:host(.${n})`)})),cssVars:e}}function zd({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:i}){e&&me(e).forEach(s=>{const o=e[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?t.classList.add(a):t.classList.remove(a))})}function Gd({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function i(o){me(o).forEach(a=>{const l=o[a];t.instanceState[a]=l})}return{cssVars:r,slotNames:n,dispatch:o=>t.dispatchEvent(o),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:i}}function Bd(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}var qd=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function xt(t){var e;const r=t;if(!k(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!k(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={..._d,...r.options},i=Fd(r.tagName,r.events),s=Wd(r.hostClasses);r.hostClasses&&Ui(r.tagName,r.hostClasses),r.cssVars&&Ui(r.tagName,r.cssVars);const o=r.cssVars?De(r.cssVars):{},a=Bd(r.slotNames),l=typeof r.styles=="function"?r.styles(jd({hostClassNames:s,cssVars:o})):r.styles||T``,c=r.renderCallback;function u(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(e=class extends No{createRenderParams(){return Gd({element:this,eventsMap:i,cssVars:o,slotNamesMap:a})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{zo(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${xt.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return zd({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:s,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Td(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,Po(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{Ea(f,"destroy")&&k(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){Go(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ji(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ji(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};me(f).forEach(h=>{qo(this,h),this.instanceState[h]=f[h]}),this.definition=d}},qd(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),e);return Object.defineProperties(d,{name:{value:bd(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,d),d}function Mn(){return t=>{const e=t;if(!k(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return xt({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function hr(t,e){return Zr(t,e),t.element}function Zd(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function Zr(t,e){const r=Zd(t),n=r?`: in ${r}`:"";if(t.type!==Sn.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function Kd(t){const e=Xe(class extends Le{constructor(r){super(r),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=hr(r,t)}render(r){return this.element.setAttribute(t,r),G}});return{attributeSelector(r){return`[${t}="${r}"]`},attributeDirective(r){return e(r)},attributeName:t}}function x(t,e){return Yd(t,e)}const Yd=Xe(class extends Le{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=hr(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),G}}),Ir="onResize",Zo=Xe(class extends Le{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Zr(t,Ir)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${Ir} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){Zr(t,Ir),this.callback=e;const r=t.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(e)}render(t){}});function Te(t,e,r){return hd(t,()=>e,()=>r)}const{attributeDirective:ut,attributeSelector:ch,attributeName:uh}=Kd("data-test-id");me({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function Ko(t){return{[kn]:t}}function Jd(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Mn()(r(n))),defineElementNoInputs:n=>(e(n),xt(r(n)))}}function Qd(t,e){return e?zi(t,e):zi(void 0,t)}const zi=Xe(class extends Le{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=hr(t,"assign")}render(t,e){return Go(this.element,e),G}}),Xd={};function ef(t,e){return e.map((r,n)=>{const i=t[n],s=t[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=Yo(i,s);if(o&&k(r,"string"))return{tagName:r,tagInterpolationKey:md(Xd,r,()=>({tagName:r}))}}return r})}function Yo(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function tf(...[t,e,r]){var l,c,u;const n=jt(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=Yo(t,e),o=An(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((u=n==null?void 0:n.constructor)==null?void 0:u.name)}'`);if(!s||!o)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!jt(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(d){const f=jt(d)?d.inputs:void 0;return[i&&f?Qd(f):void 0].filter(Io)}}}function rf(t){}function nf(t){return jo(t.strings,t.values,tf,rf)}function y(t,...e){const r=ef(t,e),n=rd(t,...r),i=Uo(t,r,()=>nf(n));return{...n,strings:i.strings,values:i.values}}function sf(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Pr(t){return sf(t).map(e=>[e,t[e]])}var Gi;(function(t){t.Upper="upper",t.Lower="lower"})(Gi||(Gi={}));var Bi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Bi||(Bi={}));function of(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}of();const Jo={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},af=Object.keys(Jo),Qo={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},lf=Object.keys(Qo),Xo={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},cf=Object.keys(Xo),uf=[Pr(Jo).map(([t,e])=>[e,t]),Pr(Qo).map(([t,e])=>[e,t]),Pr(Xo).map(([t,e])=>[e,t])].flat();new Map(uf);Array.from(new Set([...af,...cf,...lf].sort()));function _r(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const i=e.name,s=n==null?void 0:n.constructor.name,o=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}const qi="vira-",{defineElement:ie,defineElementNoInputs:dh}=Jd({assertInputs:t=>{if(!t.tagName.startsWith(qi))throw new Error(`Tag name should start with '${qi}' but got '${t.tagName}'`)}}),w=De({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Zi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function df(t,e="and"){if(t.length<2)return t.join("");const r=t.length>2?", ":" ";return`${t.slice(0,-1).join(r)}${r}${e} ${t[t.length-1]}`}var Ki;(function(t){t.Upper="upper",t.Lower="lower"})(Ki||(Ki={}));var Yi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Yi||(Yi={}));function Ji(t,e){let r=!1;const n=Zi(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Zi(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function ea(){let t,e,r=!1;const n=new Promise((i,s)=>{t=o=>(r=!0,i(o)),e=o=>{r=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ea.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Qi(t){const e=ea();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function ff(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ff();const hf="px";function mf(t){return pf({value:t,suffix:hf})}function pf({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}function F({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const wf=F({name:"Check24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Q=De({"vira-form-input-radius":"8px"}),mr=T`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,X=De({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),xe=De({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":T`calc(${Q["vira-form-input-radius"].value} + 4px)`});function xn({selector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=2}){const i=I(mf(n+r+e));return T`
        ${I(t)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${xe["vira-focus-outline-color"].value};
            border-radius: ${xe["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const fe=De({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":xe["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),pr=T`
    padding: 0;
    margin: 0;
`,de=T`
    ${pr};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Xi=T`#e2e2e2`,ta={menuShadow:T`
        filter: drop-shadow(0px 5px 5px ${Xi});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:T`
        filter: drop-shadow(0px -5px 5px ${Xi});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},bt=T`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,L=ie()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>T`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}}),Hr=ie()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:t})=>t.selected},styles:({hostClasses:t})=>T`
        :host {
            display: flex;
            ${bt};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${t["vira-dropdown-item-selected"].selector} ${L} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${L} {
            transition: opacity
                ${X["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Q["vira-form-input-radius"].value}
                ${Q["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Q["vira-form-input-radius"].value}
                ${Q["vira-form-input-radius"].value} 0 0;
        }
    `,renderCallback({inputs:t}){return y`
            <div class="option">
                <${L.assign({icon:wf})}></${L}>
                <slot>${t.label}</slot>
            </div>
        `}});function gf(t,e){return[t,e].filter(r=>r!==void 0).join(",")||""}function yf(t){const e=t.split(",");return hs(e,2)?{type:"2d",xCord:In(e[0]),yCord:In(e[1])}:{type:"1d"}}function vf(t,e){Object.entries(e).forEach(([r,n])=>{k(n,"boolean")&&n?t.setAttribute(r,""):k(n,"boolean")&&!n||n==null?t.removeAttribute(r):t.setAttribute(r,String(n))})}const bf=Xe(class extends Le{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=hr(t,"modifyElement")}render(t,e){return t!==this.lastKey&&(e(this.element),this.lastKey=t),G}}),Ue={name:"data-nav",selector(t){return t===""?`[${Ue.name}]`:`[${Ue.name}*="${String(t).replace(/"/g,"'")}"]`},css(t){return T`
            ${I(Ue.selector(t))}
        `}},He="nav-activated",Kr={selector:{click(t){return`${t}.${He}`},selected(t){return`${t}:focus`}},css:{click(t){return T`
                ${I(Kr.selector.click(t))}
            `},selected(t){return T`
                ${I(Kr.selector.selected(t))}
            `}}},Ef={activateKeys:["Space","Return","Enter"]};function Tf(){ra=Oa(Ef)}let ra;Tf();function es(t){return ra.activateKeys.some(e=>{const r=e.toLowerCase();return r===t.key.toLowerCase()||r===t.code.toLowerCase()})}function Sf(t,e){const r=gf(t,e);return bf(`${t}-${e}`,n=>{const i=n.hasAttribute("tabindex")?{}:{tabindex:0},s={[Ue.name]:r,...i};Xr(n,HTMLElement),vf(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(He)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(He)},!0),n.addEventListener("blur",()=>{n.classList.remove(He)},!0),n.addEventListener("keydown",o=>{o.target===n&&es(o)&&n.classList.add(He)},!0),n.addEventListener("keyup",o=>{o.target===n&&es(o)&&n.classList.remove(He)},!0)})}function $f(t,e){return na([],t,e)}function na(t,e,r){return!e||e.type==="child"?!1:e.type==="1d"?ts(e.children,e,0,t,r):e.children.some((n,i)=>ts(n,e,i,t,r))}function ts(t,e,r,n,i){return t.some((s,o)=>{const a=fs(e,"isRoot")?n:n.concat(e);return i(a,s,{x:o,y:r})?!0:na(a,s,i)})}function wr(t){if(!t)return;let e,r,n;$f(t,(s,o,a)=>o.element.matches(":focus")?(e=s,r=o,n=a,!0):!1);const i=e?(e==null?void 0:e.slice(-1)[0])||t:void 0;if(!(!r||!i||!n))return{node:r,parent:i,coords:n}}function Jt(t){t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()}function Af(t){var n;if(!t)return{success:!1,reason:"no nav tree"};const e=wr(t);if(!e)return{success:!1,reason:"no focused node to enter into"};if(e.node.type==="child"||!e.node.children.length)return{success:!1,reason:"no children to enter into"};const r=e.node.type==="1d"?e.node.children[0]:(n=e.node.children[0])==null?void 0:n[0];return r?(Jt(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function kf(t){if(!t)return{success:!1,reason:"no nav tree"};const e=wr(t);if(!e)return{success:!1,reason:"no focused node to exit out of"};if(fs(e.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const r=e.parent;return Jt(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}}function ia(t){const e=[];return Na(t).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=ia(r),i=r.hasAttribute(Ue.name)?yf(r.getAttribute(Ue.name)||""):void 0;if(!i){e.push(...n);return}e.push({children:n,element:r,navValue:i})}),e}function Mf(t){const e=ia(t);return sa(e)}function sa(t){if(!hs(t,1))return;const e=t[0].navValue.type,r={type:e,children:[],isRoot:!0};return t.forEach(n=>{const i=n.children.length?sa(n.children):void 0,s=i?{element:n.element,children:i.children,type:i.type}:{element:n.element,type:"child"};if(n.navValue.type==="2d"&&r.type==="2d"){r.children[n.navValue.xCord]||(r.children[n.navValue.xCord]=[]);const o=r.children[n.navValue.xCord];if(o[n.navValue.yCord])throw new Error(`Parent already has child at ${n.navValue.xCord},${n.navValue.yCord}`);o[n.navValue.yCord]=s}else if(n.navValue.type==="1d"&&r.type==="1d")r.children.push(s);else if(e!==n.navValue.type){const o=new Error("child nav does not match parent nav type");throw console.error(o,n),o}}),r}function rs(t,e){return t>e}function ns(t,e){return t<e}var U;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(U||(U={}));function xf(t,e,r){var a;if(!t)return{success:!1,reason:"no nav tree"};const n=wr(t);if(!n){const l=t.type==="1d"?t.children[0]:(a=t.children[0])==null?void 0:a[0];return l?(Jt(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Cf(n.parent,e,n),o=r?!0:!s;return(i==null?void 0:i.element)===n.node.element?{success:!1,reason:"no other nodes to navigate to"}:i&&o?(Jt(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function Cf(t,e,r){var i,s;if(e===U.Down||e===U.Up){const o=e===U.Down?ns:rs,a=e===U.Down?1:-1,l=t.type==="1d"?0:vr({value:r.coords.y+a,min:0,max:t.children.length-1}),c=t.type==="2d"?t.children[l]:void 0,u={x:t.type==="1d"?vr({value:r.coords.x+a,min:0,max:t.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},d=t.type==="1d"?t.children[u.x]:(i=t.children[u.y])==null?void 0:i[u.x],f=t.type==="1d"?o(u.x,r.coords.x):o(u.y,r.coords.y);return{nextNode:d,requiresWrapping:f}}else{const o=e===U.Right?ns:rs,a=e===U.Right?1:-1,l=t.type==="1d"?t.children:t.children[r.coords.y];Pe(l,`No current row found at y index: '${r.coords.y}'`);const c={x:vr({value:r.coords.x+a,min:0,max:l.length-1}),y:r.coords.y},u=o(c.x,r.coords.x);return{nextNode:t.type==="1d"?t.children[c.x]:(s=t.children[c.y])==null?void 0:s[c.x],requiresWrapping:u}}}class oa{constructor(e){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:e})}getCurrentlyFocused(){return wr(this.buildNavTree())}buildNavTree(){return Mf(this.rootElement)}navigate({direction:e,allowWrapping:r}){return xf(this.buildNavTree(),e,r)}enterInto(){return Af(this.buildNavTree())}exitOutOf(){return kf(this.buildNavTree())}navigatePibling(e){const r=this.exitOutOf();if(!r.success)return r;const n=this.navigate(e);if(!n.success)return n;const i=this.enterInto();return i.success?i:n}}const Of={option:"dropdown-option"},_t=ie()({tagName:"vira-dropdown-options",events:{selectionChange:pe()},styles:T`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Q["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${fe["vira-form-background-color"].value};
            border: 1px solid ${fe["vira-form-border-color"].value};
            color: ${fe["vira-form-foreground-color"].value};
            ${ta.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Kr.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${fe["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Hr} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${mr};
            pointer-events: auto;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){const n=t.options.map(i=>{const s=i.template||y`
                    <${Hr.assign({label:i.label,selected:t.selectedOptions.includes(i)})}></${Hr}>
                `;return y`
                <div
                    class="dropdown-item ${Yt({disabled:!!i.disabled})}"
                    ${ut(Of.option)}
                    title=${Do(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?C:Sf()}
                    ${x("mousedown",o=>{o.stopPropagation()})}
                    ${x("mouseup",o=>{o.stopPropagation(),i.disabled||e(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return y`
            <slot>${n}</slot>
        `}}),Lf=F({name:"ChevronUp24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${w["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Df=F({name:"CloseX24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});F({name:"Element16Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});F({name:"Element24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Nf=F({name:"EyeClosed24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${w["vira-icon-fill-color"].value}
            stroke=${w["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),If=F({name:"EyeOpen24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${w["vira-icon-fill-color"].value}
            stroke=${w["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${w["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Pf=F({name:"Loader24Icon",svgTemplate:y`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),_f=T`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${X["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Hf=F({name:"LoaderAnimated24Icon",svgTemplate:y`
        <style>
            ${_f}
        </style>
        ${Pf.svgTemplate}
    `});F({name:"Options24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${w["vira-icon-stroke-color"].value}"
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Vf=F({name:"StatusFailure24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});F({name:"StatusInProgress24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${w["vira-icon-stroke-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width="calc(${w["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});F({name:"StatusSuccess24Icon",svgTemplate:y`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${w["vira-icon-fill-color"].value}
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});function Qt(t){if(t instanceof ShadowRoot)return Qt(t.host);const e=t.parentNode;if(e)return e instanceof Element?e:Qt(e)}function aa(t,e){if(e(t))return t;const r=Qt(t);if(r)return aa(r,e)}function Ff(t){const e=Qt(t);return e&&aa(e,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function Wf(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const i=e.name,s=n==null?void 0:n.constructor.name,o=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}class Rf extends ju{constructor(){super({defaultValue:document.hidden,equalityCheck:en}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const e=r=>this.updateVisibility(r);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e){const r=jf.includes(e.type),n=Uf.includes(e.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const Uf=["blur","focusout","pagehide"],jf=["focus","focusin","pageshow"],zf=new Rf;function Gf(t,e){return zf.listen(t,e)}const is={top:0,left:0,right:0,bottom:0};class la extends tn("hide-pop-up"){}class ca extends Y()("nav-select"){}class Bf{constructor(e){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new rn}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0}}),Object.defineProperty(this,"cleanupCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"lastRootElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.options={...this.options,...e}}attachGlobalListeners(e){const r=new oa(e);this.cleanupCallbacks=[Gf(!1,n=>{n||this.removePopUp()}),Fn("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Fn("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:U.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:U.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:U.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:U.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new ca({detail:s.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(e,r,n){return this.listenTarget.listen(e,r,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new la)}showPopUp(e,r){this.lastRootElement=e;const n={...this.options,...r},i=Ff(e);Xr(i,HTMLElement);const s=e.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-l},u=Ji(is,h=>s[h]),d=Ji(is,h=>{const v=c[h],$=u[h];return Math.abs(v-$)}),f=d.top>d.bottom+n.verticalDiffThreshold&&d.bottom<n.minDownSpace;return this.attachGlobalListeners(e),{popDown:!f,positions:{container:c,root:u,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function qf({selected:t,options:e,isMultiSelect:r}){if(t.length&&e.length){const n=e.filter(i=>t.includes(i.id));return n.length>1&&!r?(console.error(`${Kf.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),n.slice(0,1)):n}else return[]}function Zf(t){const e=new Set,r=[];if(t.forEach(n=>{e.has(n.id)?r.push(n.id):e.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${df(r)}`)}function ss(t,e,r){return r?e.includes(t)?e.filter(n=>n!==t):[...e,t]:[t]}function os({open:t,emitEvent:e},{updateState:r,popUpManager:n,dispatch:i,host:s}){t?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),e&&i(t)}const Ht={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Kf=ie()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:t})=>!!t.isDisabled},styles:({hostClasses:t})=>T`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${xe["vira-focus-outline-color"].name}: ${fe["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${de};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Q["vira-form-input-radius"].value};
            transition: border-radius
                ${X["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${xn({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${X["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${fe["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${bt};
            border-radius: inherit;
            background-color: ${fe["vira-form-background-color"].value};
            color: ${fe["vira-form-foreground-color"].value};
        }

        .open-upwards ${_t} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${ta.menuShadowReversed}
        }

        ${t["vira-dropdown-disabled"].selector} {
            ${mr}
            pointer-events: auto;
        }

        ${t["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:pe(),openChange:pe()},stateInitStatic:{showPopUpResult:void 0,popUpManager:Ko(()=>new Bf),navController:void 0},cleanupCallback({state:t,updateState:e}){e({showPopUpResult:void 0}),t.popUpManager.destroy()},initCallback({state:t,updateState:e,host:r,inputs:n,dispatch:i,events:s}){t.popUpManager.listen(la,()=>{if(e({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");Xr(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),t.popUpManager.listen(ca,o=>{const a=o.detail.x,l=n.options[a];if(!l)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||os({emitEvent:!0,open:!1},{dispatch:c=>{i(new s.openChange(c))},host:r,popUpManager:t.popUpManager,updateState:e}),i(new s.selectedChange(ss(l.id,n.selected,!!n.isMultiSelect)))}),e({navController:new oa(r)})},renderCallback({dispatch:t,events:e,state:r,inputs:n,updateState:i,host:s}){var v;Zf(n.options);function o($){os($,{dispatch:N=>{t(new e.openChange(N))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=qf(n),l=n.icon?y`
                  <${L.assign({icon:n.icon})}
                      ${ut(Ht.icon)}
                  ></${L}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?T`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:T`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function u(){o({emitEvent:!0,open:!r.showPopUpResult})}const d=!a.length,f=n.selectionPrefix&&!d?y`
                      <span class="selected-label-prefix" ${ut(Ht.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",h=d?n.placeholder||"":a.map($=>$.label).join(", ");return y`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Yt({open:!!r.showPopUpResult,"open-upwards":!((v=r.showPopUpResult)!=null&&v.popDown)})}"
                ${ut(Ht.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${x("keydown",$=>{!r.showPopUpResult&&$.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${x("click",$=>{$.detail===0&&u()})}
                ${x("mousedown",$=>{$.button===0&&u()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${Yt({"using-placeholder":d})}"
                        title=${Do(d?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${L.assign({icon:Lf})}
                            class="trigger-icon"
                        ></${L}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${Te(!!r.showPopUpResult,y`
                            <${_t.assign({options:n.options,selectedOptions:a})}
                                ${x(_t.events.selectionChange,$=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),t(new e.selectedChange(ss($.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${ut(Ht.options)}
                            ></${_t}>
                        `)}
                </div>
            </button>
        `}});var Se;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(Se||(Se={}));const $e=ie()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===Se.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>T`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${bt};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${xe["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${mr};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${de};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Q["vira-form-input-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${X["vira-interaction-animation-duration"].value},
                background-color
                    ${X["vira-interaction-animation-duration"].value},
                border-color ${X["vira-interaction-animation-duration"].value};
        }

        ${xn({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${L} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?y`
                  <${L.assign({icon:t.icon})}></${L}>
              `:"",r=t.text?y`
                  <span class="text-template">${t.text}</span>
              `:"";return y`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});ie()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},slotNames:["header"],styles:({hostClasses:t})=>T`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${de};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${X["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pe()},stateInitStatic:{contentHeight:0},renderCallback({state:t,slotNames:e,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?T`
                  height: ${t.contentHeight}px;
              `:T`
                  height: 0;
              `;return y`
            <button
                class="header-wrapper"
                ${x("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${e.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${Zo(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var Xt;(function(t){t.Loading="loading",t.Error="error"})(Xt||(Xt={}));ie()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:pe(),imageError:pe()},styles:({hostClasses:t})=>T`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${t["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${t["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:i}){const s=t.imageUrl,o=e.erroredUrls[s]?y`
                  <slot class="status-wrapper" name=${Xt.Error}>
                      <${L.assign({icon:Vf})} class="error"></${L}>
                  </slot>
              `:e.loadedUrls[s]?void 0:y`
                    <slot class="status-wrapper" name=${Xt.Loading}>
                        <${L.assign({icon:Hf})}></${L}>
                    </slot>
                `;return y`
            ${Te(!!o,o)}
            <img
                class=${Yt({hidden:!!o})}
                ${x("load",async()=>{t._debugLoadDelay&&await Qi(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${x("error",async a=>{t._debugLoadDelay&&await Qi(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[s]:!0}}),n(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function Yr({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>Yr({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function ua({value:t,allowed:e,blocked:r}){const n=e?Yr({input:t,matcher:e}):!0,i=r?Yr({input:t,matcher:r}):!1;return n&&!i}function da(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,i)=>(ua({...t,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function Yf({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=Wf(r,HTMLInputElement),o=r.data,a=e;let l=s.value??"";if(o)if(o.length===1)ua({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=a,n(o));else{const{filtered:c,blocked:u}=da({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,n(u)}s.value!==l&&(s.value=l),a!==l&&i(l)}var je;(function(t){t.Default="text",t.Password="password",t.Email="email"})(je||(je={}));const Vt=ie()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":xe["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:pe(),inputBlocked:pe()},styles:({hostClasses:t,cssVars:e})=>T`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${xe["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${mr};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
                ${de};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${bt};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${de};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Q["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${X["vira-interaction-animation-duration"].value};
            }

            label {
                ${de};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Q["vira-form-input-radius"].value};
                background-color: ${e["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${xn({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${de};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${bt};
            }

            button {
                ${de};
                cursor: pointer;
                display: flex;
                transition: color
                    ${X["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${e["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${e["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${e["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${e["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${e["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:i})=>{const{filtered:s}=da({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),o=t.icon?y`
                  <${L.assign({icon:t.icon})} class="left-side-icon"></${L}>
              `:"",a=t.fitText?T`
                  width: ${r.forcedInputWidth}px;
              `:"";return y`
            <label>
                ${o}
                ${Te(!!t.fitText,y`
                        <span
                            class="size-span"
                            ${Zo(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${Jf(t.type,r.showPassword)}
                    style=${a}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${s}
                    ${x("input",l=>{Yf({inputs:t,filteredValue:s,event:l,inputBlockedCallback(c){e(new i.inputBlocked(c))},newValueCallback(c){e(new i.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${Te(!!(t.showClearButton&&t.value),y`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${x("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new i.valueChange(""))})}
                        >
                            <${L.assign({icon:Df})}></${L}>
                        </button>
                    `)}
                ${Te(t.type===je.Password,y`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${x("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${L.assign({icon:r.showPassword?If:Nf})}></${L}>
                        </button>
                    `)}
                ${Te(!!t.suffix,y`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Jf(t,e){return t===je.Password&&e?je.Default:t||je.Default}ie()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>T`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${t["vira-link-hover-color"].value};
        }
    `,renderCallback({inputs:t}){var r,n;function e(i){t.route&&t.route.router.setRouteOnDirectNavigation(t.route.route,i)&&t.route.scrollToTop&&window.scrollTo(0,0)}if((r=t.link)!=null&&r.newTab)return y`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=t.link?t.link.url:(n=t.route)==null?void 0:n.router.createRouteUrl(t.route.route);return y`
                <a href=${i} rel="noopener noreferrer" ${x("click",e)}>
                    <slot></slot>
                </a>
            `}}});class Cn extends Y()("peer-message-received"){}class fa extends Y()("peer-message-sent"){}var ae=(t=>(t.Connecting="connecting",t.Connected="connected",t.Closing="closing",t.Closed="closed",t))(ae||{});class Fe extends Y()("peer-connection-status"){}function as(t){return t.map(e=>({urls:Da({value:e,prefix:"stun:"})}))}class Qf extends rn{constructor(){super(...arguments);nt(this,"offer");nt(this,"answer");nt(this,"dataChannel");nt(this,"connection")}async createOffer(r){if(this.offer||this.dataChannel||this.connection)throw new Error("offer already created");const n=ms(),i=o=>{Pe(this.connection),o.candidate||(n.resolve(),this.connection.removeEventListener("icecandidate",i))};this.connection=new RTCPeerConnection({iceServers:as(r)}),this.connection.addEventListener("icecandidate",i),this.handleDataChannel(this.connection.createDataChannel("chat")),await this.connection.setLocalDescription(await this.connection.createOffer()),await n.promise;const s=this.connection.localDescription;return Pe(s),this.offer=s,this.offer}async acceptAnswer(r){this.answer=k(r,"string")?JSON.parse(r):r,Pe(this.connection),Pe(this.answer),this.connection.setRemoteDescription(this.answer)}async createAnswer(r,n){if(this.offer||this.answer||this.dataChannel)throw new Error("offer already accepted");const i=k(r,"string")?JSON.parse(r):r;this.connection=new RTCPeerConnection({iceServers:as(n)}),this.connection.addEventListener("datachannel",o=>{this.handleDataChannel(o.channel)}),await this.connection.setRemoteDescription(i);const s=await this.connection.createAnswer();return await this.connection.setLocalDescription(s),this.offer=i,this.answer=s,s}sendMessage(r){Pe(this.dataChannel),this.dataChannel.send(r),this.dispatch(new fa({detail:r}))}handleDataChannel(r){if(this.dataChannel)throw new Error("data channel already created");this.dataChannel=r,this.dispatch(new Fe({detail:"connecting"})),this.dataChannel.addEventListener("open",()=>{this.dispatch(new Fe({detail:"connected"}))}),this.dataChannel.addEventListener("closing",()=>{this.dispatch(new Fe({detail:"closing"}))}),this.dataChannel.addEventListener("close",()=>{this.dispatch(new Fe({detail:"closed"}))}),this.dataChannel.addEventListener("message",n=>{this.dispatch(new Cn({detail:n.data}))})}}var Jr=(t=>(t.Sent="sent",t.Received="received",t))(Jr||{});const ls=Mn()({tagName:"vir-chat-message",hostClasses:{"vir-chat-message-self":({inputs:t})=>t.message.direction==="sent"},styles:({hostClasses:t})=>T`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-right: 24px;
        }

        time {
            font-size: 12px;
            opacity: 0.8;
        }

        .message {
            border-radius: 8px;
            background-color: #ccc;
            padding: 8px;
        }

        p {
            ${pr};
        }

        ${t["vir-chat-message-self"].selector} {
            align-items: flex-end;

            padding-right: 0;
            padding-left: 24px;
        }
    `,renderCallback({inputs:t}){const e=Fu(t.message.time,Uu.DatetimeShortWithSeconds);return y`
            <time
                datetime=${Br(t.message.time,re.DateTime,!0)}
            >
                ${e}
            </time>
            <p class="message">${t.message.text}</p>
        `}}),cs=Mn()({tagName:"vir-chat",styles:T`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 400px;
            max-width: 100%;
        }

        .chat-history {
            height: 500px;
            max-height: 100%;
            padding: 8px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            overflow-y: auto;
            border-radius: 2px;
            border: 1px solid #ccc;
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .connection-status {
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .connection-status-indicator {
            border-radius: 50%;
            width: 6px;
            height: 6px;
            background-color: #ccc;
        }

        .connection-status-indicator.${I(ae.Closed)} {
            background-color: red;
        }
        .connection-status-indicator.${I(ae.Closing)},
            .connection-status-indicator.${I(ae.Connecting)} {
            background-color: orange;
        }
        .connection-status-indicator.${I(ae.Closing)},
            .connection-status-indicator.${I(ae.Connected)} {
            background-color: lightseagreen;
        }

        ${Vt} {
            width: 100%;
        }

        ${$e} {
            align-self: flex-end;
        }
    `,stateInitStatic:{cleanup:void 0,connectionStatus:void 0,chatHistory:[],currentMessage:""},initCallback({inputs:t,state:e,updateState:r}){if(!e.cleanup){const n=[t.connectionController.listen(Fe,i=>{r({connectionStatus:i.detail})}),t.connectionController.listen(Cn,i=>{r({chatHistory:[...e.chatHistory,{direction:Jr.Received,time:Ai(),text:i.detail}]})}),t.connectionController.listen(fa,i=>{r({chatHistory:[...e.chatHistory,{direction:Jr.Sent,time:Ai(),text:i.detail}]})})];r({cleanup(){n.forEach(i=>i())}})}},cleanupCallback({state:t,updateState:e}){var r;(r=t.cleanup)==null||r.call(t),e({cleanup:void 0})},renderCallback({inputs:t,state:e,updateState:r}){var s;const n=e.chatHistory.map(o=>y`
                <${ls.assign({message:o})}></${ls}>
            `);function i(){const o=e.currentMessage;r({currentMessage:""}),t.connectionController.sendMessage(o)}return y`
            <header>
                Chat
                <div class="connection-status">
                    <div class="connection-status-indicator ${e.connectionStatus}"></div>
                    ${((s=e.connectionStatus)==null?void 0:s.toLowerCase())||"no connection"}
                </div>
            </header>
            <div class="chat-history">${n}</div>
            <${Vt.assign({value:e.currentMessage,disabled:e.connectionStatus!==ae.Connected})}
                ${x(Vt.events.valueChange,o=>{r({currentMessage:o.detail})})}
                ${x("keyup",o=>{["Enter","Return","NumpadEnter"].includes(o.code)&&i()})}
            ></${Vt}>
            <${$e.assign({text:"send",disabled:e.connectionStatus!==ae.Connected})}
                ${x("click",i)}
            ></${$e}>
        `}}),us=xt({tagName:"vir-how",styles:T`
        :host {
            display: block;
            max-width: 100%;
        }
        h4 {
            ${pr};
        }
    `,renderCallback(){return y`
            <h4>How it works</h4>
            <ol>
                <li>
                    For access outside of your LAN, enter a list of STUN servers you'd like to use.
                    (Required for both host and client.)
                </li>
                <li>The first user clicks "host".</li>
                <li>The host computer generates an "offer" JSON string.</li>
                <li>The host user copies the offer string and sends it to a client user.</li>
                <li>The client user clicks "join" and pastes the offer string.</li>
                <li>The client computer then generates an "answer" JSON string.</li>
                <li>The client user copies this answer string and sends it to the host user.</li>
                <li>The host user pastes the answer string.</li>
                <li>The connection is now established.</li>
                <li>Both users can now send messages to each other!</li>
            </ol>
        `}});xt({tagName:"vir-no-server-app",styles:T`
        :host {
            font-family: sans-serif;
            padding: 16px;
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
        }

        .buttons {
            display: flex;
            gap: 32px;
            font-size: 2em;
        }

        main {
            flex-grow: 1;
            max-width: 100%;
            flex-basis: 500px;
        }

        .offer-wrapper {
            padding: 16px 0;
            width: 700px;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .offer {
            font-family: monospace;
            user-select: all;
            -webkit-user-select: all;
            word-break: break-all;
        }

        p {
            ${pr};
        }

        .stun-input {
            height: 50px;
        }

        textarea {
            width: 300px;
            max-width: 100%;
            height: 150px;
        }
    `,stateInitStatic:{connectionController:Ko(()=>new Qf),connectionMode:void 0,offer:void 0,answer:void 0,connectionStatus:void 0,messageToSend:"",copied:!1,copiedTimeout:void 0,stunServerUrls:[]},initCallback({state:t,updateState:e}){t.connectionController.listen(Cn,r=>{console.log("message",r.detail)}),t.connectionController.listen(Fe,r=>{e({connectionStatus:r.detail}),console.log("status",r.detail)})},renderCallback({state:t,updateState:e}){const r=y`
            <section class="offer-wrapper host">
                Copy the following "offer" and send it to a client so they can join you:
                <div>
                    <p class="offer">${JSON.stringify(t.offer)}</p>
                    <button
                        ${x("click",async()=>{await window.navigator.clipboard.writeText(JSON.stringify(t.offer)),e({copied:!0}),t.copiedTimeout&&window.clearTimeout(t.copiedTimeout),e({copiedTimeout:window.setTimeout(()=>{e({copied:!1,copiedTimeout:void 0})},2e3)})})}
                    >
                        ${t.copied?"copied":"copy"}
                    </button>
                </div>
                <p>
                    After pasting your offer, the client should provide you with an "answer". Paste
                    the client's answer below:
                </p>
                <textarea
                    ${x("input",async i=>{const s=_r(i,HTMLTextAreaElement);await t.connectionController.acceptAnswer(s.value)})}
                ></textarea>
            </section>
        `,n=y`
            <section class="offer-wrapper join">
                Paste the host's offer:
                <br />
                <textarea
                    ${x("input",async i=>{const s=_r(i,HTMLTextAreaElement),o=await t.connectionController.createAnswer(s.value,t.stunServerUrls);e({answer:o})})}
                ></textarea>
                ${Te(!!t.answer,y`
                        <br />
                        Copy the following "answer" and send it to the host:
                        <div>
                            <p class="offer">${JSON.stringify(t.answer)}</p>
                            <button
                                ${x("click",async()=>{await window.navigator.clipboard.writeText(JSON.stringify(t.answer)),e({copied:!0}),t.copiedTimeout&&window.clearTimeout(t.copiedTimeout),e({copiedTimeout:window.setTimeout(()=>{e({copied:!1,copiedTimeout:void 0})},2e3)})})}
                            >
                                ${t.copied?"copied":"copy"}
                            </button>
                        </div>
                    `)}
            </section>
        `;return y`
            <main>
                <${us}></${us}>
                <section>
                    <p>
                        Enter a comma-separated list of stun servers you'd like to use (if any).
                        <br />
                        Without any STUN servers, you can only connect across your LAN.
                    </p>
                    <textarea
                        class="stun-input"
                        ${x("input",async i=>{const o=_r(i,HTMLTextAreaElement).value.split(",").map(a=>a.trim());e({stunServerUrls:o})})}
                    ></textarea>
                </section>
                <section class="buttons">
                    <${$e.assign({text:"Host",buttonStyle:t.connectionMode==="host"?Se.Default:Se.Outline})}
                        ${x("click",async()=>{if(e({connectionMode:"host"}),!t.offer){const i=await t.connectionController.createOffer(t.stunServerUrls);e({offer:i})}})}
                    ></${$e}>
                    <${$e.assign({text:"Join",buttonStyle:t.connectionMode==="join"?Se.Default:Se.Outline})}
                        ${x("click",()=>{e({connectionMode:"join"})})}
                    ></${$e}>
                </section>
                ${t.connectionMode==="host"?r:t.connectionMode==="join"?n:C}
            </main>
            <${cs.assign({connectionController:t.connectionController})}></${cs}>
        `}});
