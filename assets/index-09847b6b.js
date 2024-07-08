var wa=Object.defineProperty;var ga=(t,e,n)=>e in t?wa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var it=(t,e,n)=>(ga(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Cr;(function(t){t.Upper="upper",t.Lower="lower"})(Cr||(Cr={}));var Or;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Or||(Or={}));function Lr(t){return!!t&&typeof t=="object"}function ya(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ya();class Qn extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const va=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ba(t,e){return t?va.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Ea(t){return t instanceof Promise}function Ge(t){return t===null?"null":Array.isArray(t)?"array":typeof t}function k(t,e){return Ge(t)===e}function Xn(t,e,n){if(!(t instanceof e))throw new Qn(n||"instanceof assertion failed")}function _e(t,e){if(t==null)throw new Qn(e||"defined assertion failed")}function er(t,e){return t===e}function Ta(t,e,n=er){return Lr(t)&&Lr(e)?Array.from(new Set([...Object.keys(t),...Object.keys(e)])).every(i=>{const s=t[i],o=e[i];return n(s,o)}):n(t,e)}function $a(t,e){if(!(k(t,"string")||k(t,"number")||k(t,"symbol")))throw new Qn(e||`value is of type '${Ge(t)}' but expected a PropertyKey.`)}function vn(t){try{return $a(t),!0}catch{return!1}}const Sa=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ds(t,e){return t?Sa.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Aa(t){return t.replace(/,/g,"")}var Dr;(function(t){t.Upper="upper",t.Lower="lower"})(Dr||(Dr={}));function ka(t){return typeof t=="number"?t:Number(typeof t=="string"?Aa(t):t)}function Nr(t){const e=Ma(t);if(e==null)throw new Error(`Cannot convert to a number: ${t}`);return e}function Ma(t){const e=ka(t);if(!isNaN(e))return e}function bn({max:t,min:e,value:n}){return n>t?e:n<e?t:n}var Ir;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ir||(Ir={}));function fs(t,e){try{return xa(t,e),!0}catch{return!1}}function xa(t,e,n){if(t.length<e)throw new Error(n?`'${n}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Ca(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function hs(){let t,e,n=!1;const r=new Promise((i,s)=>{t=o=>(n=!0,i(o)),e=o=>{n=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${hs.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function Oa(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Oa();function La(t){var n;return[...t.children,...((n=t.shadowRoot)==null?void 0:n.children)??[]]}var Da=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Na(){return class extends Event{constructor(e,n){super(e,n),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=n.detail}}}const Ia=globalThis.CustomEvent||Na();function Y(){function t(e){var n;return n=class extends Ia{constructor(i){super(e,i)}},Da(n,"TypedEventConstructor"),Object.defineProperty(n,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),n}return t}var Pa=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function tr(t){var e;return e=class extends Event{constructor(r){super(t,r)}},Pa(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}function _a(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Pr(t){return _a(t).map(e=>t[e])}var _r;(function(t){t.Upper="upper",t.Lower="lower"})(_r||(_r={}));var Hr;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Hr||(Hr={}));function Ha(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ha();class Va{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return Pr(this.listeners).map(n=>(n==null?void 0:n.size)||0).reduce((n,r)=>n+r,0)}listen(e,n,r={}){const i=this.listeners,s=k(e,"string")?e:e.type;function o(){var l;return((l=i[s])==null?void 0:l.delete(n))||!1}function a(l,c){r.once&&o(),n(l,c)}return i[s]||(i[s]=new Map),i[s].set(n,{listener:a,removeListener:o}),o}removeListener(e,n){const r=k(e,"string")?e:e.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(e){const n=this.listeners[e.type],r=(n==null?void 0:n.size)||0;return n==null||n.forEach(i=>{i.listener(e,i.removeListener)}),r}removeAllListeners(){const n=Pr(this.listeners).reduce((r,i)=>{const s=(i==null?void 0:i.size)||0;return i==null||i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class nr extends Va{}function Fa(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Vr(t,e,n){return Fa(globalThis,t,e,n)}const Wa=Symbol("no update");class En extends Y()("observable-value-update"){}class Xf extends Y()("observable-value-resolve"){}class eh extends Y()("observable-value-error"){}class Ra extends tr("observable-destroy"){}class th extends tr("observable-callback-call"){}class nh extends Y()("observable-params-update"){}class rh extends Y()("observable-interval-run"){}class ih extends Y()("observable-interval-skip"){}class sh extends Y()("observable-interval-rate-limited"){}class Ua{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new nr}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(e,n=this.equalityCheck){return e===Wa?!1:!n||!n(this.value,e)?(this.value=e,this.listenTarget.dispatch(new En({detail:e})),!0):!1}listen(e,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),e&&n(this.value),this.listenTarget.listen(En,r)}removeListener(e){const n=this.listenerMap.get(e);return!!n&&this.listenTarget.removeListener(En,n)}destroy(){this.listenTarget.dispatch(new Ra),this.listenTarget.destroy()}listenToEvent(e,n,r){return this.listenTarget.listen(e,n,r)}}var Fr;(function(t){t.Upper="upper",t.Lower="lower"})(Fr||(Fr={}));var Wr;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Wr||(Wr={}));function ja(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ja();function za(t,e){return Ta(t,e,Ga)}function Ga(t,e){return Ge(t)===Ge(e)&&k(t,"function")?!0:er(t,e)}const Ba=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function qa(t,e){return t?Ba.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function ms(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Za(t){return!!t}var Rr;(function(t){t.Upper="upper",t.Lower="lower"})(Rr||(Rr={}));var Ur;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ur||(Ur={}));function Ka(t){return ms(t).filter(e=>isNaN(Number(e)))}function Ya(t){return Ka(t).map(n=>t[n])}function ps(t,e){return ms(t).filter(r=>{const i=t[r];return e(r,i,t)}).reduce((r,i)=>(r[i]=t[i],r),{})}function Ja(t,e){return ps(t,n=>!e.includes(n))}function Qa(t,e){return ps(t,n=>e.includes(n))}function Xa(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Xa();class Oe extends Error{}class el extends Oe{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class tl extends Oe{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class nl extends Oe{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Fe extends Oe{}class ws extends Oe{constructor(e){super(`Invalid unit ${e}`)}}class H extends Oe{}class oe extends Oe{constructor(){super("Zone is an abstract class")}}const m="numeric",K="short",V="long",zt={year:m,month:m,day:m},gs={year:m,month:K,day:m},rl={year:m,month:K,day:m,weekday:K},ys={year:m,month:V,day:m},vs={year:m,month:V,day:m,weekday:V},bs={hour:m,minute:m},Es={hour:m,minute:m,second:m},Ts={hour:m,minute:m,second:m,timeZoneName:K},$s={hour:m,minute:m,second:m,timeZoneName:V},Ss={hour:m,minute:m,hourCycle:"h23"},As={hour:m,minute:m,second:m,hourCycle:"h23"},ks={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:K},Ms={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:V},xs={year:m,month:m,day:m,hour:m,minute:m},Cs={year:m,month:m,day:m,hour:m,minute:m,second:m},Os={year:m,month:K,day:m,hour:m,minute:m},Ls={year:m,month:K,day:m,hour:m,minute:m,second:m},il={year:m,month:K,day:m,weekday:K,hour:m,minute:m},Ds={year:m,month:V,day:m,hour:m,minute:m,timeZoneName:K},Ns={year:m,month:V,day:m,hour:m,minute:m,second:m,timeZoneName:K},Is={year:m,month:V,day:m,weekday:V,hour:m,minute:m,timeZoneName:V},Ps={year:m,month:V,day:m,weekday:V,hour:m,minute:m,second:m,timeZoneName:V};class Tt{get type(){throw new oe}get name(){throw new oe}get ianaName(){return this.name}get isUniversal(){throw new oe}offsetName(e,n){throw new oe}formatOffset(e,n){throw new oe}offset(e){throw new oe}equals(e){throw new oe}get isValid(){throw new oe}}let Tn=null;class en extends Tt{static get instance(){return Tn===null&&(Tn=new en),Tn}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:n,locale:r}){return zs(e,n,r)}formatOffset(e,n){return ft(this.offset(e),n)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let Ft={};function sl(t){return Ft[t]||(Ft[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ft[t]}const ol={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function al(t,e){const n=t.format(e).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,l,c,u]=r;return[o,i,s,a,l,c,u]}function ll(t,e){const n=t.formatToParts(e),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=ol[s];s==="era"?r[a]=o:y(a)||(r[a]=parseInt(o,10))}return r}let Lt={};class ie extends Tt{static create(e){return Lt[e]||(Lt[e]=new ie(e)),Lt[e]}static resetCache(){Lt={},Ft={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=ie.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:n,locale:r}){return zs(e,n,r,this.name)}formatOffset(e,n){return ft(this.offset(e),n)}offset(e){const n=new Date(e);if(isNaN(n))return NaN;const r=sl(this.name);let[i,s,o,a,l,c,u]=r.formatToParts?ll(r,n):al(r,n);a==="BC"&&(i=-Math.abs(i)+1);const f=nn({year:i,month:s,day:o,hour:l===24?0:l,minute:c,second:u,millisecond:0});let h=+n;const v=h%1e3;return h-=v>=0?v:1e3+v,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let jr={};function cl(t,e={}){const n=JSON.stringify([t,e]);let r=jr[n];return r||(r=new Intl.ListFormat(t,e),jr[n]=r),r}let Vn={};function Fn(t,e={}){const n=JSON.stringify([t,e]);let r=Vn[n];return r||(r=new Intl.DateTimeFormat(t,e),Vn[n]=r),r}let Wn={};function ul(t,e={}){const n=JSON.stringify([t,e]);let r=Wn[n];return r||(r=new Intl.NumberFormat(t,e),Wn[n]=r),r}let Rn={};function dl(t,e={}){const{base:n,...r}=e,i=JSON.stringify([t,r]);let s=Rn[i];return s||(s=new Intl.RelativeTimeFormat(t,e),Rn[i]=s),s}let lt=null;function fl(){return lt||(lt=new Intl.DateTimeFormat().resolvedOptions().locale,lt)}let zr={};function hl(t){let e=zr[t];if(!e){const n=new Intl.Locale(t);e="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,zr[t]=e}return e}function ml(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const n=t.indexOf("-u-");if(n===-1)return[t];{let r,i;try{r=Fn(t).resolvedOptions(),i=t}catch{const l=t.substring(0,n);r=Fn(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function pl(t,e,n){return(n||e)&&(t.includes("-u-")||(t+="-u"),n&&(t+=`-ca-${n}`),e&&(t+=`-nu-${e}`)),t}function wl(t){const e=[];for(let n=1;n<=12;n++){const r=p.utc(2009,n,1);e.push(t(r))}return e}function gl(t){const e=[];for(let n=1;n<=7;n++){const r=p.utc(2016,11,13+n);e.push(t(r))}return e}function Dt(t,e,n,r){const i=t.listingMode();return i==="error"?null:i==="en"?n(e):r(e)}function yl(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class vl{constructor(e,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=ul(e,a)}}format(e){if(this.inf){const n=this.floor?Math.floor(e):e;return this.inf.format(n)}else{const n=this.floor?Math.floor(e):or(e,3);return D(n,this.padTo)}}}class bl{constructor(e,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const o=-1*(e.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;e.offset!==0&&ie.create(a).valid?(i=a,this.dt=e):(i="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=Fn(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class El{constructor(e,n,r){this.opts={style:"long",...r},!n&&Us()&&(this.rtf=dl(e,r))}format(e,n){return this.rtf?this.rtf.format(e,n):Rl(n,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,n){return this.rtf?this.rtf.formatToParts(e,n):[]}}const Tl={firstDay:1,minimalDays:4,weekend:[6,7]};class A{static fromOpts(e){return A.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,n,r,i,s=!1){const o=e||x.defaultLocale,a=o||(s?"en-US":fl()),l=n||x.defaultNumberingSystem,c=r||x.defaultOutputCalendar,u=Un(i)||x.defaultWeekSettings;return new A(a,l,c,u,o)}static resetCache(){lt=null,Vn={},Wn={},Rn={}}static fromObject({locale:e,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return A.create(e,n,r,i)}constructor(e,n,r,i,s){const[o,a,l]=ml(e);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||l||null,this.weekSettings=i,this.intl=pl(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=yl(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&n?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:A.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,Un(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,n=!1){return Dt(this,e,qs,()=>{const r=n?{month:e,day:"numeric"}:{month:e},i=n?"format":"standalone";return this.monthsCache[i][e]||(this.monthsCache[i][e]=wl(s=>this.extract(s,r,"month"))),this.monthsCache[i][e]})}weekdays(e,n=!1){return Dt(this,e,Ys,()=>{const r=n?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=n?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=gl(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return Dt(this,void 0,()=>Js,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[p.utc(2016,11,13,9),p.utc(2016,11,13,19)].map(n=>this.extract(n,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Dt(this,e,Qs,()=>{const n={era:e};return this.eraCache[e]||(this.eraCache[e]=[p.utc(-40,1,1),p.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[e]})}extract(e,n,r){const i=this.dtFormatter(e,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(e={}){return new vl(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,n={}){return new bl(e,this.intl,n)}relFormatter(e={}){return new El(this.intl,this.isEnglish(),e)}listFormatter(e={}){return cl(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:js()?hl(this.locale):Tl}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let $n=null;class _ extends Tt{static get utcInstance(){return $n===null&&($n=new _(0)),$n}static instance(e){return e===0?_.utcInstance:new _(e)}static parseSpecifier(e){if(e){const n=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new _(rn(n[1],n[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ft(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ft(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,n){return ft(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class $l extends Tt{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function ue(t,e){if(y(t)||t===null)return e;if(t instanceof Tt)return t;if(kl(t)){const n=t.toLowerCase();return n==="default"?e:n==="local"||n==="system"?en.instance:n==="utc"||n==="gmt"?_.utcInstance:_.parseSpecifier(n)||ie.create(t)}else return ke(t)?_.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new $l(t)}let Gr=()=>Date.now(),Br="system",qr=null,Zr=null,Kr=null,Yr=60,Jr,Qr=null;class x{static get now(){return Gr}static set now(e){Gr=e}static set defaultZone(e){Br=e}static get defaultZone(){return ue(Br,en.instance)}static get defaultLocale(){return qr}static set defaultLocale(e){qr=e}static get defaultNumberingSystem(){return Zr}static set defaultNumberingSystem(e){Zr=e}static get defaultOutputCalendar(){return Kr}static set defaultOutputCalendar(e){Kr=e}static get defaultWeekSettings(){return Qr}static set defaultWeekSettings(e){Qr=Un(e)}static get twoDigitCutoffYear(){return Yr}static set twoDigitCutoffYear(e){Yr=e%100}static get throwOnInvalid(){return Jr}static set throwOnInvalid(e){Jr=e}static resetCaches(){A.resetCache(),ie.resetCache()}}class Z{constructor(e,n){this.reason=e,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const _s=[0,31,59,90,120,151,181,212,243,273,304,334],Hs=[0,31,60,91,121,152,182,213,244,274,305,335];function j(t,e){return new Z("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function rr(t,e,n){const r=new Date(Date.UTC(t,e-1,n));t<100&&t>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Vs(t,e,n){return n+($t(t)?Hs:_s)[e-1]}function Fs(t,e){const n=$t(t)?Hs:_s,r=n.findIndex(s=>s<e),i=e-n[r];return{month:r+1,day:i}}function ir(t,e){return(t-e+7)%7+1}function Gt(t,e=4,n=1){const{year:r,month:i,day:s}=t,o=Vs(r,i,s),a=ir(rr(r,i,s),n);let l=Math.floor((o-a+14-e)/7),c;return l<1?(c=r-1,l=gt(c,e,n)):l>gt(r,e,n)?(c=r+1,l=1):c=r,{weekYear:c,weekNumber:l,weekday:a,...sn(t)}}function Xr(t,e=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=t,o=ir(rr(r,1,e),n),a=Re(r);let l=i*7+s-o-7+e,c;l<1?(c=r-1,l+=Re(c)):l>a?(c=r+1,l-=Re(r)):c=r;const{month:u,day:d}=Fs(c,l);return{year:c,month:u,day:d,...sn(t)}}function Sn(t){const{year:e,month:n,day:r}=t,i=Vs(e,n,r);return{year:e,ordinal:i,...sn(t)}}function ei(t){const{year:e,ordinal:n}=t,{month:r,day:i}=Fs(e,n);return{year:e,month:r,day:i,...sn(t)}}function ti(t,e){if(!y(t.localWeekday)||!y(t.localWeekNumber)||!y(t.localWeekYear)){if(!y(t.weekday)||!y(t.weekNumber)||!y(t.weekYear))throw new Fe("Cannot mix locale-based week fields with ISO-based week fields");return y(t.localWeekday)||(t.weekday=t.localWeekday),y(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),y(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Sl(t,e=4,n=1){const r=tn(t.weekYear),i=z(t.weekNumber,1,gt(t.weekYear,e,n)),s=z(t.weekday,1,7);return r?i?s?!1:j("weekday",t.weekday):j("week",t.weekNumber):j("weekYear",t.weekYear)}function Al(t){const e=tn(t.year),n=z(t.ordinal,1,Re(t.year));return e?n?!1:j("ordinal",t.ordinal):j("year",t.year)}function Ws(t){const e=tn(t.year),n=z(t.month,1,12),r=z(t.day,1,Bt(t.year,t.month));return e?n?r?!1:j("day",t.day):j("month",t.month):j("year",t.year)}function Rs(t){const{hour:e,minute:n,second:r,millisecond:i}=t,s=z(e,0,23)||e===24&&n===0&&r===0&&i===0,o=z(n,0,59),a=z(r,0,59),l=z(i,0,999);return s?o?a?l?!1:j("millisecond",i):j("second",r):j("minute",n):j("hour",e)}function y(t){return typeof t>"u"}function ke(t){return typeof t=="number"}function tn(t){return typeof t=="number"&&t%1===0}function kl(t){return typeof t=="string"}function Ml(t){return Object.prototype.toString.call(t)==="[object Date]"}function Us(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function js(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function xl(t){return Array.isArray(t)?t:[t]}function ni(t,e,n){if(t.length!==0)return t.reduce((r,i)=>{const s=[e(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function Cl(t,e){return e.reduce((n,r)=>(n[r]=t[r],n),{})}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Un(t){if(t==null)return null;if(typeof t!="object")throw new H("Week settings must be an object");if(!z(t.firstDay,1,7)||!z(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!z(e,1,7)))throw new H("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function z(t,e,n){return tn(t)&&t>=e&&t<=n}function Ol(t,e){return t-e*Math.floor(t/e)}function D(t,e=2){const n=t<0;let r;return n?r="-"+(""+-t).padStart(e,"0"):r=(""+t).padStart(e,"0"),r}function ce(t){if(!(y(t)||t===null||t===""))return parseInt(t,10)}function ge(t){if(!(y(t)||t===null||t===""))return parseFloat(t)}function sr(t){if(!(y(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function or(t,e,n=!1){const r=10**e;return(n?Math.trunc:Math.round)(t*r)/r}function $t(t){return t%4===0&&(t%100!==0||t%400===0)}function Re(t){return $t(t)?366:365}function Bt(t,e){const n=Ol(e-1,12)+1,r=t+(e-n)/12;return n===2?$t(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function nn(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function ri(t,e,n){return-ir(rr(t,1,e),n)+e-1}function gt(t,e=4,n=1){const r=ri(t,e,n),i=ri(t+1,e,n);return(Re(t)-r+i)/7}function jn(t){return t>99?t:t>x.twoDigitCutoffYear?1900+t:2e3+t}function zs(t,e,n,r=null){const i=new Date(t),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:e,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function rn(t,e){let n=parseInt(t,10);Number.isNaN(n)&&(n=0);const r=parseInt(e,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Gs(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new H(`Invalid unit value ${t}`);return e}function qt(t,e){const n={};for(const r in t)if(Be(t,r)){const i=t[r];if(i==null)continue;n[e(r)]=Gs(i)}return n}function ft(t,e){const n=Math.trunc(Math.abs(t/60)),r=Math.trunc(Math.abs(t%60)),i=t>=0?"+":"-";switch(e){case"short":return`${i}${D(n,2)}:${D(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${D(n,2)}${D(r,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function sn(t){return Cl(t,["hour","minute","second","millisecond"])}const Ll=["January","February","March","April","May","June","July","August","September","October","November","December"],Bs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Dl=["J","F","M","A","M","J","J","A","S","O","N","D"];function qs(t){switch(t){case"narrow":return[...Dl];case"short":return[...Bs];case"long":return[...Ll];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Zs=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ks=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Nl=["M","T","W","T","F","S","S"];function Ys(t){switch(t){case"narrow":return[...Nl];case"short":return[...Ks];case"long":return[...Zs];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Js=["AM","PM"],Il=["Before Christ","Anno Domini"],Pl=["BC","AD"],_l=["B","A"];function Qs(t){switch(t){case"narrow":return[..._l];case"short":return[...Pl];case"long":return[...Il];default:return null}}function Hl(t){return Js[t.hour<12?0:1]}function Vl(t,e){return Ys(e)[t.weekday-1]}function Fl(t,e){return qs(e)[t.month-1]}function Wl(t,e){return Qs(e)[t.year<0?0:1]}function Rl(t,e,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(t)===-1;if(n==="auto"&&s){const d=t==="days";switch(e){case 1:return d?"tomorrow":`next ${i[t][0]}`;case-1:return d?"yesterday":`last ${i[t][0]}`;case 0:return d?"today":`this ${i[t][0]}`}}const o=Object.is(e,-0)||e<0,a=Math.abs(e),l=a===1,c=i[t],u=r?l?c[1]:c[2]||c[1]:l?i[t][0]:t;return o?`${a} ${u} ago`:`in ${a} ${u}`}function ii(t,e){let n="";for(const r of t)r.literal?n+=r.val:n+=e(r.val);return n}const Ul={D:zt,DD:gs,DDD:ys,DDDD:vs,t:bs,tt:Es,ttt:Ts,tttt:$s,T:Ss,TT:As,TTT:ks,TTTT:Ms,f:xs,ff:Os,fff:Ds,ffff:Is,F:Cs,FF:Ls,FFF:Ns,FFFF:Ps};class P{static create(e,n={}){return new P(e,n)}static parseFormat(e){let n=null,r="",i=!1;const s=[];for(let o=0;o<e.length;o++){const a=e.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(e){return Ul[e]}constructor(e,n){this.opts=n,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...n}).format()}dtFormatter(e,n={}){return this.loc.dtFormatter(e,{...this.opts,...n})}formatDateTime(e,n){return this.dtFormatter(e,n).format()}formatDateTimeParts(e,n){return this.dtFormatter(e,n).formatToParts()}formatInterval(e,n){return this.dtFormatter(e.start,n).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,n){return this.dtFormatter(e,n).resolvedOptions()}num(e,n=0){if(this.opts.forceSimple)return D(e,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(e)}formatDateTimeFromString(e,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(h,v)=>this.loc.extract(e,h,v),o=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",a=()=>r?Hl(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,v)=>r?Fl(e,h):s(v?{month:h}:{month:h,day:"numeric"},"month"),c=(h,v)=>r?Vl(e,h):s(v?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),u=h=>{const v=P.macroTokenToFormatOpts(h);return v?this.formatWithSystemDefault(e,v):h},d=h=>r?Wl(e,h):s({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(e.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(e.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(e.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return d("short");case"GG":return d("long");case"GGGGG":return d("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return u(h)}};return ii(P.parseFormat(n),f)}formatDurationFromString(e,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const u=r(c);return u?this.num(l.get(u),c.length):c},s=P.parseFormat(n),o=s.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),a=e.shiftTo(...o.map(r).filter(l=>l));return ii(s,i(a))}}const Xs=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Ye(...t){const e=t.reduce((n,r)=>n+r.source,"");return RegExp(`^${e}$`)}function Je(...t){return e=>t.reduce(([n,r,i],s)=>{const[o,a,l]=s(e,i);return[{...n,...o},a||r,l]},[{},null,1]).slice(0,2)}function Qe(t,...e){if(t==null)return[null,null];for(const[n,r]of e){const i=n.exec(t);if(i)return r(i)}return[null,null]}function eo(...t){return(e,n)=>{const r={};let i;for(i=0;i<t.length;i++)r[t[i]]=ce(e[n+i]);return[r,null,n+i]}}const to=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,jl=`(?:${to.source}?(?:\\[(${Xs.source})\\])?)?`,ar=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,no=RegExp(`${ar.source}${jl}`),lr=RegExp(`(?:T${no.source})?`),zl=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Gl=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Bl=/(\d{4})-?(\d{3})/,ql=eo("weekYear","weekNumber","weekDay"),Zl=eo("year","ordinal"),Kl=/(\d{4})-(\d\d)-(\d\d)/,ro=RegExp(`${ar.source} ?(?:${to.source}|(${Xs.source}))?`),Yl=RegExp(`(?: ${ro.source})?`);function Ue(t,e,n){const r=t[e];return y(r)?n:ce(r)}function Jl(t,e){return[{year:Ue(t,e),month:Ue(t,e+1,1),day:Ue(t,e+2,1)},null,e+3]}function Xe(t,e){return[{hours:Ue(t,e,0),minutes:Ue(t,e+1,0),seconds:Ue(t,e+2,0),milliseconds:sr(t[e+3])},null,e+4]}function St(t,e){const n=!t[e]&&!t[e+1],r=rn(t[e+1],t[e+2]),i=n?null:_.instance(r);return[{},i,e+3]}function At(t,e){const n=t[e]?ie.create(t[e]):null;return[{},n,e+1]}const Ql=RegExp(`^T?${ar.source}$`),Xl=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function ec(t){const[e,n,r,i,s,o,a,l,c]=t,u=e[0]==="-",d=l&&l[0]==="-",f=(h,v=!1)=>h!==void 0&&(v||h&&u)?-h:h;return[{years:f(ge(n)),months:f(ge(r)),weeks:f(ge(i)),days:f(ge(s)),hours:f(ge(o)),minutes:f(ge(a)),seconds:f(ge(l),l==="-0"),milliseconds:f(sr(c),d)}]}const tc={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function cr(t,e,n,r,i,s,o){const a={year:e.length===2?jn(ce(e)):ce(e),month:Bs.indexOf(n)+1,day:ce(r),hour:ce(i),minute:ce(s)};return o&&(a.second=ce(o)),t&&(a.weekday=t.length>3?Zs.indexOf(t)+1:Ks.indexOf(t)+1),a}const nc=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function rc(t){const[,e,n,r,i,s,o,a,l,c,u,d]=t,f=cr(e,i,r,n,s,o,a);let h;return l?h=tc[l]:c?h=0:h=rn(u,d),[f,new _(h)]}function ic(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const sc=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,oc=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ac=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function si(t){const[,e,n,r,i,s,o,a]=t;return[cr(e,i,r,n,s,o,a),_.utcInstance]}function lc(t){const[,e,n,r,i,s,o,a]=t;return[cr(e,a,n,r,i,s,o),_.utcInstance]}const cc=Ye(zl,lr),uc=Ye(Gl,lr),dc=Ye(Bl,lr),fc=Ye(no),io=Je(Jl,Xe,St,At),hc=Je(ql,Xe,St,At),mc=Je(Zl,Xe,St,At),pc=Je(Xe,St,At);function wc(t){return Qe(t,[cc,io],[uc,hc],[dc,mc],[fc,pc])}function gc(t){return Qe(ic(t),[nc,rc])}function yc(t){return Qe(t,[sc,si],[oc,si],[ac,lc])}function vc(t){return Qe(t,[Xl,ec])}const bc=Je(Xe);function Ec(t){return Qe(t,[Ql,bc])}const Tc=Ye(Kl,Yl),$c=Ye(ro),Sc=Je(Xe,St,At);function Ac(t){return Qe(t,[Tc,io],[$c,Sc])}const oi="Invalid Duration",so={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},kc={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...so},W=146097/400,Ie=146097/4800,Mc={years:{quarters:4,months:12,weeks:W/7,days:W,hours:W*24,minutes:W*24*60,seconds:W*24*60*60,milliseconds:W*24*60*60*1e3},quarters:{months:3,weeks:W/28,days:W/4,hours:W*24/4,minutes:W*24*60/4,seconds:W*24*60*60/4,milliseconds:W*24*60*60*1e3/4},months:{weeks:Ie/7,days:Ie,hours:Ie*24,minutes:Ie*24*60,seconds:Ie*24*60*60,milliseconds:Ie*24*60*60*1e3},...so},be=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],xc=be.slice(0).reverse();function ae(t,e,n=!1){const r={values:n?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new E(r)}function oo(t,e){let n=e.milliseconds??0;for(const r of xc.slice(1))e[r]&&(n+=e[r]*t[r].milliseconds);return n}function ai(t,e){const n=oo(t,e)<0?-1:1;be.reduceRight((r,i)=>{if(y(e[i]))return r;if(r){const s=e[r]*n,o=t[i][r],a=Math.floor(s/o);e[i]+=a*n,e[r]-=a*o*n}return i},null),be.reduce((r,i)=>{if(y(e[i]))return r;if(r){const s=e[r]%1;e[r]-=s,e[i]+=s*t[r][i]}return i},null)}function Cc(t){const e={};for(const[n,r]of Object.entries(t))r!==0&&(e[n]=r);return e}class E{constructor(e){const n=e.conversionAccuracy==="longterm"||!1;let r=n?Mc:kc;e.matrix&&(r=e.matrix),this.values=e.values,this.loc=e.loc||A.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(e,n){return E.fromObject({milliseconds:e},n)}static fromObject(e,n={}){if(e==null||typeof e!="object")throw new H(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new E({values:qt(e,E.normalizeUnit),loc:A.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(e){if(ke(e))return E.fromMillis(e);if(E.isDuration(e))return e;if(typeof e=="object")return E.fromObject(e);throw new H(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,n){const[r]=vc(e);return r?E.fromObject(r,n):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,n){const[r]=Ec(e);return r?E.fromObject(r,n):E.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,n=null){if(!e)throw new H("need to specify a reason the Duration is invalid");const r=e instanceof Z?e:new Z(e,n);if(x.throwOnInvalid)throw new nl(r);return new E({invalid:r})}static normalizeUnit(e){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!n)throw new ws(e);return n}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?P.create(this.loc,r).formatDurationFromString(this,e):oi}toHuman(e={}){if(!this.isValid)return oi;const n=be.map(r=>{const i=this.values[r];return y(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=or(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},p.fromMillis(n,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?oo(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const n=E.fromDurationLike(e),r={};for(const i of be)(Be(n.values,i)||Be(this.values,i))&&(r[i]=n.get(i)+this.get(i));return ae(this,{values:r},!0)}minus(e){if(!this.isValid)return this;const n=E.fromDurationLike(e);return this.plus(n.negate())}mapUnits(e){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Gs(e(this.values[r],r));return ae(this,{values:n},!0)}get(e){return this[E.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const n={...this.values,...qt(e,E.normalizeUnit)};return ae(this,{values:n})}reconfigure({locale:e,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:e,numberingSystem:n}),matrix:i,conversionAccuracy:r};return ae(this,o)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return ai(this.matrix,e),ae(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=Cc(this.normalize().shiftToAll().toObject());return ae(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(o=>E.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of be)if(e.indexOf(o)>=0){s=o;let a=0;for(const c in r)a+=this.matrix[c][o]*r[c],r[c]=0;ke(i[o])&&(a+=i[o]);const l=Math.trunc(a);n[o]=l,r[o]=(a*1e3-l*1e3)/1e3}else ke(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return ai(this.matrix,n),ae(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const n of Object.keys(this.values))e[n]=this.values[n]===0?0:-this.values[n];return ae(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of be)if(!n(this.values[r],e.values[r]))return!1;return!0}}const Pe="Invalid Interval";function Oc(t,e){return!t||!t.isValid?O.invalid("missing or invalid start"):!e||!e.isValid?O.invalid("missing or invalid end"):e<t?O.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class O{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,n=null){if(!e)throw new H("need to specify a reason the Interval is invalid");const r=e instanceof Z?e:new Z(e,n);if(x.throwOnInvalid)throw new tl(r);return new O({invalid:r})}static fromDateTimes(e,n){const r=ot(e),i=ot(n),s=Oc(r,i);return s??new O({start:r,end:i})}static after(e,n){const r=E.fromDurationLike(n),i=ot(e);return O.fromDateTimes(i,i.plus(r))}static before(e,n){const r=E.fromDurationLike(n),i=ot(e);return O.fromDateTimes(i.minus(r),i)}static fromISO(e,n){const[r,i]=(e||"").split("/",2);if(r&&i){let s,o;try{s=p.fromISO(r,n),o=s.isValid}catch{o=!1}let a,l;try{a=p.fromISO(i,n),l=a.isValid}catch{l=!1}if(o&&l)return O.fromDateTimes(s,a);if(o){const c=E.fromISO(i,n);if(c.isValid)return O.after(s,c)}else if(l){const c=E.fromISO(r,n);if(c.isValid)return O.before(a,c)}}return O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(e,n);let i;return n!=null&&n.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(e,n),Math.floor(i.diff(r,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:n}={}){return this.isValid?O.fromDateTimes(e||this.s,n||this.e):this}splitAt(...e){if(!this.isValid)return[];const n=e.map(ot).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(O.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(e){const n=E.fromDurationLike(e);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(l=>l*i));s=+a>+this.e?this.e:a,o.push(O.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const n=this.s>e.s?this.s:e.s,r=this.e<e.e?this.e:e.e;return n>=r?null:O.fromDateTimes(n,r)}union(e){if(!this.isValid)return this;const n=this.s<e.s?this.s:e.s,r=this.e>e.e?this.e:e.e;return O.fromDateTimes(n,r)}static merge(e){const[n,r]=e.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(e){let n=null,r=0;const i=[],s=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((l,c)=>l.time-c.time);for(const l of a)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&i.push(O.fromDateTimes(n,l.time)),n=null);return O.merge(i)}difference(...e){return O.xor([this].concat(e)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Pe}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=zt,n={}){return this.isValid?P.create(this.s.loc.clone(n),e).formatInterval(this):Pe}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Pe}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Pe}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Pe}toFormat(e,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${n}${this.e.toFormat(e)}`:Pe}toDuration(e,n){return this.isValid?this.e.diff(this.s,e,n):E.invalid(this.invalidReason)}mapEndpoints(e){return O.fromDateTimes(e(this.s),e(this.e))}}class ct{static hasDST(e=x.defaultZone){const n=p.now().setZone(e).set({month:12});return!e.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(e){return ie.isValidZone(e)}static normalizeZone(e){return ue(e,x.defaultZone)}static getStartOfWeek({locale:e=null,locObj:n=null}={}){return(n||A.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:n=null}={}){return(n||A.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:n=null}={}){return(n||A.create(e)).getWeekendDays().slice()}static months(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||A.create(n,r,s)).months(e)}static monthsFormat(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||A.create(n,r,s)).months(e,!0)}static weekdays(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||A.create(n,r,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||A.create(n,r,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return A.create(e).meridiems()}static eras(e="short",{locale:n=null}={}){return A.create(n,null,"gregory").eras(e)}static features(){return{relative:Us(),localeWeek:js()}}}function li(t,e){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(e)-n(t);return Math.floor(E.fromMillis(r).as("days"))}function Lc(t,e,n){const r=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=li(l,c);return(u-u%7)/7}],["days",li]],i={},s=t;let o,a;for(const[l,c]of r)n.indexOf(l)>=0&&(o=l,i[l]=c(t,e),a=s.plus(i),a>e?(i[l]--,t=s.plus(i),t>e&&(a=t,i[l]--,t=s.plus(i))):t=a);return[t,i,a,o]}function Dc(t,e,n,r){let[i,s,o,a]=Lc(t,e,n);const l=e-i,c=n.filter(d=>["hours","minutes","seconds","milliseconds"].indexOf(d)>=0);c.length===0&&(o<e&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+l/(o-i)));const u=E.fromObject(s,r);return c.length>0?E.fromMillis(l,r).shiftTo(...c).plus(u):u}const ur={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ci={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Nc=ur.hanidec.replace(/[\[|\]]/g,"").split("");function Ic(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);if(t[n].search(ur.hanidec)!==-1)e+=Nc.indexOf(t[n]);else for(const i in ci){const[s,o]=ci[i];r>=s&&r<=o&&(e+=r-s)}}return parseInt(e,10)}else return e}function B({numberingSystem:t},e=""){return new RegExp(`${ur[t||"latn"]}${e}`)}const Pc="missing Intl.DateTimeFormat.formatToParts support";function $(t,e=n=>n){return{regex:t,deser:([n])=>e(Ic(n))}}const _c=String.fromCharCode(160),ao=`[ ${_c}]`,lo=new RegExp(ao,"g");function Hc(t){return t.replace(/\./g,"\\.?").replace(lo,ao)}function ui(t){return t.replace(/\./g,"").replace(lo," ").toLowerCase()}function q(t,e){return t===null?null:{regex:RegExp(t.map(Hc).join("|")),deser:([n])=>t.findIndex(r=>ui(n)===ui(r))+e}}function di(t,e){return{regex:t,deser:([,n,r])=>rn(n,r),groups:e}}function Nt(t){return{regex:t,deser:([e])=>e}}function Vc(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Fc(t,e){const n=B(e),r=B(e,"{2}"),i=B(e,"{3}"),s=B(e,"{4}"),o=B(e,"{6}"),a=B(e,"{1,2}"),l=B(e,"{1,3}"),c=B(e,"{1,6}"),u=B(e,"{1,9}"),d=B(e,"{2,4}"),f=B(e,"{4,6}"),h=N=>({regex:RegExp(Vc(N.val)),deser:([ee])=>ee,literal:!0}),S=(N=>{if(t.literal)return h(N);switch(N.val){case"G":return q(e.eras("short"),0);case"GG":return q(e.eras("long"),0);case"y":return $(c);case"yy":return $(d,jn);case"yyyy":return $(s);case"yyyyy":return $(f);case"yyyyyy":return $(o);case"M":return $(a);case"MM":return $(r);case"MMM":return q(e.months("short",!0),1);case"MMMM":return q(e.months("long",!0),1);case"L":return $(a);case"LL":return $(r);case"LLL":return q(e.months("short",!1),1);case"LLLL":return q(e.months("long",!1),1);case"d":return $(a);case"dd":return $(r);case"o":return $(l);case"ooo":return $(i);case"HH":return $(r);case"H":return $(a);case"hh":return $(r);case"h":return $(a);case"mm":return $(r);case"m":return $(a);case"q":return $(a);case"qq":return $(r);case"s":return $(a);case"ss":return $(r);case"S":return $(l);case"SSS":return $(i);case"u":return Nt(u);case"uu":return Nt(a);case"uuu":return $(n);case"a":return q(e.meridiems(),0);case"kkkk":return $(s);case"kk":return $(d,jn);case"W":return $(a);case"WW":return $(r);case"E":case"c":return $(n);case"EEE":return q(e.weekdays("short",!1),1);case"EEEE":return q(e.weekdays("long",!1),1);case"ccc":return q(e.weekdays("short",!0),1);case"cccc":return q(e.weekdays("long",!0),1);case"Z":case"ZZ":return di(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return di(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return Nt(/[a-z_+-/]{1,256}?/i);case" ":return Nt(/[^\S\n\r]/);default:return h(N)}})(t)||{invalidReason:Pc};return S.token=t,S}const Wc={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Rc(t,e,n){const{type:r,value:i}=t;if(r==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=e[r];let o=r;r==="hour"&&(e.hour12!=null?o=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=Wc[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function Uc(t){return[`^${t.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,t]}function jc(t,e,n){const r=t.match(e);if(r){const i={};let s=1;for(const o in n)if(Be(n,o)){const a=n[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+l))),s+=l}return[r,i]}else return[r,{}]}function zc(t){const e=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return y(t.z)||(n=ie.create(t.z)),y(t.Z)||(n||(n=new _(t.Z)),r=t.Z),y(t.q)||(t.M=(t.q-1)*3+1),y(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),y(t.u)||(t.S=sr(t.u)),[Object.keys(t).reduce((s,o)=>{const a=e(o);return a&&(s[a]=t[o]),s},{}),n,r]}let An=null;function Gc(){return An||(An=p.fromMillis(1555555555555)),An}function Bc(t,e){if(t.literal)return t;const n=P.macroTokenToFormatOpts(t.val),r=fo(n,e);return r==null||r.includes(void 0)?t:r}function co(t,e){return Array.prototype.concat(...t.map(n=>Bc(n,e)))}function uo(t,e,n){const r=co(P.parseFormat(n),t),i=r.map(o=>Fc(o,t)),s=i.find(o=>o.invalidReason);if(s)return{input:e,tokens:r,invalidReason:s.invalidReason};{const[o,a]=Uc(i),l=RegExp(o,"i"),[c,u]=jc(e,l,a),[d,f,h]=u?zc(u):[null,null,void 0];if(Be(u,"a")&&Be(u,"H"))throw new Fe("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:r,regex:l,rawMatches:c,matches:u,result:d,zone:f,specificOffset:h}}}function qc(t,e,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=uo(t,e,n);return[r,i,s,o]}function fo(t,e){if(!t)return null;const r=P.create(e,t).dtFormatter(Gc()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>Rc(o,t,s))}const kn="Invalid DateTime",fi=864e13;function It(t){return new Z("unsupported zone",`the zone "${t.name}" is not supported`)}function Mn(t){return t.weekData===null&&(t.weekData=Gt(t.c)),t.weekData}function xn(t){return t.localWeekData===null&&(t.localWeekData=Gt(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function ye(t,e){const n={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new p({...n,...e,old:n})}function ho(t,e,n){let r=t-e*60*1e3;const i=n.offset(r);if(e===i)return[r,e];r-=(i-e)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[t-Math.min(i,s)*60*1e3,Math.max(i,s)]}function Pt(t,e){t+=e*60*1e3;const n=new Date(t);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Wt(t,e,n){return ho(nn(t),e,n)}function hi(t,e){const n=t.o,r=t.c.year+Math.trunc(e.years),i=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,s={...t.c,year:r,month:i,day:Math.min(t.c.day,Bt(r,i))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},o=E.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),a=nn(s);let[l,c]=ho(a,n,t.zone);return o!==0&&(l+=o,c=t.zone.offset(l)),{ts:l,o:c}}function st(t,e,n,r,i,s){const{setZone:o,zone:a}=n;if(t&&Object.keys(t).length!==0||e){const l=e||a,c=p.fromObject(t,{...n,zone:l,specificOffset:s});return o?c:c.setZone(a)}else return p.invalid(new Z("unparsable",`the input "${i}" can't be parsed as ${r}`))}function _t(t,e,n=!0){return t.isValid?P.create(A.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(t,e):null}function Cn(t,e){const n=t.c.year>9999||t.c.year<0;let r="";return n&&t.c.year>=0&&(r+="+"),r+=D(t.c.year,n?6:4),e?(r+="-",r+=D(t.c.month),r+="-",r+=D(t.c.day)):(r+=D(t.c.month),r+=D(t.c.day)),r}function mi(t,e,n,r,i,s){let o=D(t.c.hour);return e?(o+=":",o+=D(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!n)&&(o+=":")):o+=D(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!n)&&(o+=D(t.c.second),(t.c.millisecond!==0||!r)&&(o+=".",o+=D(t.c.millisecond,3))),i&&(t.isOffsetFixed&&t.offset===0&&!s?o+="Z":t.o<0?(o+="-",o+=D(Math.trunc(-t.o/60)),o+=":",o+=D(Math.trunc(-t.o%60))):(o+="+",o+=D(Math.trunc(t.o/60)),o+=":",o+=D(Math.trunc(t.o%60)))),s&&(o+="["+t.zone.ianaName+"]"),o}const mo={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Zc={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Kc={ordinal:1,hour:0,minute:0,second:0,millisecond:0},po=["year","month","day","hour","minute","second","millisecond"],Yc=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Jc=["year","ordinal","hour","minute","second","millisecond"];function Qc(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new ws(t);return e}function pi(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Qc(t)}}function wi(t,e){const n=ue(e.zone,x.defaultZone),r=A.fromObject(e),i=x.now();let s,o;if(y(t.year))s=i;else{for(const c of po)y(t[c])&&(t[c]=mo[c]);const a=Ws(t)||Rs(t);if(a)return p.invalid(a);const l=n.offset(i);[s,o]=Wt(t,l,n)}return new p({ts:s,zone:n,loc:r,o})}function gi(t,e,n){const r=y(n.round)?!0:n.round,i=(o,a)=>(o=or(o,r||n.calendary?0:2,!0),e.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?e.hasSame(t,o)?0:e.startOf(o).diff(t.startOf(o),o).get(o):e.diff(t,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(t>e?-0:0,n.units[n.units.length-1])}function yi(t){let e={},n;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],n=Array.from(t).slice(0,t.length-1)):n=Array.from(t),[e,n]}class p{constructor(e){const n=e.zone||x.defaultZone;let r=e.invalid||(Number.isNaN(e.ts)?new Z("invalid input"):null)||(n.isValid?null:It(n));this.ts=y(e.ts)?x.now():e.ts;let i=null,s=null;if(!r)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(n))[i,s]=[e.old.c,e.old.o];else{const a=n.offset(this.ts);i=Pt(this.ts,a),r=Number.isNaN(i.year)?new Z("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=e.loc||A.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new p({})}static local(){const[e,n]=yi(arguments),[r,i,s,o,a,l,c]=n;return wi({year:r,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static utc(){const[e,n]=yi(arguments),[r,i,s,o,a,l,c]=n;return e.zone=_.utcInstance,wi({year:r,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static fromJSDate(e,n={}){const r=Ml(e)?e.valueOf():NaN;if(Number.isNaN(r))return p.invalid("invalid input");const i=ue(n.zone,x.defaultZone);return i.isValid?new p({ts:r,zone:i,loc:A.fromObject(n)}):p.invalid(It(i))}static fromMillis(e,n={}){if(ke(e))return e<-fi||e>fi?p.invalid("Timestamp out of range"):new p({ts:e,zone:ue(n.zone,x.defaultZone),loc:A.fromObject(n)});throw new H(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,n={}){if(ke(e))return new p({ts:e*1e3,zone:ue(n.zone,x.defaultZone),loc:A.fromObject(n)});throw new H("fromSeconds requires a numerical input")}static fromObject(e,n={}){e=e||{};const r=ue(n.zone,x.defaultZone);if(!r.isValid)return p.invalid(It(r));const i=A.fromObject(n),s=qt(e,pi),{minDaysInFirstWeek:o,startOfWeek:a}=ti(s,i),l=x.now(),c=y(n.specificOffset)?r.offset(l):n.specificOffset,u=!y(s.ordinal),d=!y(s.year),f=!y(s.month)||!y(s.day),h=d||f,v=s.weekYear||s.weekNumber;if((h||u)&&v)throw new Fe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&u)throw new Fe("Can't mix ordinal dates with month/day");const S=v||s.weekday&&!h;let N,ee,J=Pt(l,c);S?(N=Yc,ee=Zc,J=Gt(J,o,a)):u?(N=Jc,ee=Kc,J=Sn(J)):(N=po,ee=mo);let tt=!1;for(const rt of N){const pa=s[rt];y(pa)?tt?s[rt]=ee[rt]:s[rt]=J[rt]:tt=!0}const nt=S?Sl(s,o,a):u?Al(s):Ws(s),Ot=nt||Rs(s);if(Ot)return p.invalid(Ot);const fa=S?Xr(s,o,a):u?ei(s):s,[ha,ma]=Wt(fa,c,r),yn=new p({ts:ha,zone:r,o:ma,loc:i});return s.weekday&&h&&e.weekday!==yn.weekday?p.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${yn.toISO()}`):yn}static fromISO(e,n={}){const[r,i]=wc(e);return st(r,i,n,"ISO 8601",e)}static fromRFC2822(e,n={}){const[r,i]=gc(e);return st(r,i,n,"RFC 2822",e)}static fromHTTP(e,n={}){const[r,i]=yc(e);return st(r,i,n,"HTTP",n)}static fromFormat(e,n,r={}){if(y(e)||y(n))throw new H("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=A.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,l,c,u]=qc(o,e,n);return u?p.invalid(u):st(a,l,r,`format ${n}`,e,c)}static fromString(e,n,r={}){return p.fromFormat(e,n,r)}static fromSQL(e,n={}){const[r,i]=Ac(e);return st(r,i,n,"SQL",e)}static invalid(e,n=null){if(!e)throw new H("need to specify a reason the DateTime is invalid");const r=e instanceof Z?e:new Z(e,n);if(x.throwOnInvalid)throw new el(r);return new p({invalid:r})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,n={}){const r=fo(e,A.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(e,n={}){return co(P.parseFormat(e),A.fromObject(n)).map(i=>i.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Mn(this).weekYear:NaN}get weekNumber(){return this.isValid?Mn(this).weekNumber:NaN}get weekday(){return this.isValid?Mn(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?xn(this).weekday:NaN}get localWeekNumber(){return this.isValid?xn(this).weekNumber:NaN}get localWeekYear(){return this.isValid?xn(this).weekYear:NaN}get ordinal(){return this.isValid?Sn(this.c).ordinal:NaN}get monthShort(){return this.isValid?ct.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ct.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ct.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ct.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,n=6e4,r=nn(this.c),i=this.zone.offset(r-e),s=this.zone.offset(r+e),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const l=r-o*n,c=r-a*n,u=Pt(l,o),d=Pt(c,a);return u.hour===d.hour&&u.minute===d.minute&&u.second===d.second&&u.millisecond===d.millisecond?[ye(this,{ts:l}),ye(this,{ts:c})]:[this]}get isInLeapYear(){return $t(this.year)}get daysInMonth(){return Bt(this.year,this.month)}get daysInYear(){return this.isValid?Re(this.year):NaN}get weeksInWeekYear(){return this.isValid?gt(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?gt(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:n,numberingSystem:r,calendar:i}=P.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(e=0,n={}){return this.setZone(_.instance(e),n)}toLocal(){return this.setZone(x.defaultZone)}setZone(e,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(e=ue(e,x.defaultZone),e.equals(this.zone))return this;if(e.isValid){let i=this.ts;if(n||r){const s=e.offset(this.ts),o=this.toObject();[i]=Wt(o,s,e)}return ye(this,{ts:i,zone:e})}else return p.invalid(It(e))}reconfigure({locale:e,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:e,numberingSystem:n,outputCalendar:r});return ye(this,{loc:i})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const n=qt(e,pi),{minDaysInFirstWeek:r,startOfWeek:i}=ti(n,this.loc),s=!y(n.weekYear)||!y(n.weekNumber)||!y(n.weekday),o=!y(n.ordinal),a=!y(n.year),l=!y(n.month)||!y(n.day),c=a||l,u=n.weekYear||n.weekNumber;if((c||o)&&u)throw new Fe("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&o)throw new Fe("Can't mix ordinal dates with month/day");let d;s?d=Xr({...Gt(this.c,r,i),...n},r,i):y(n.ordinal)?(d={...this.toObject(),...n},y(n.day)&&(d.day=Math.min(Bt(d.year,d.month),d.day))):d=ei({...Sn(this.c),...n});const[f,h]=Wt(d,this.o,this.zone);return ye(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const n=E.fromDurationLike(e);return ye(this,hi(this,n))}minus(e){if(!this.isValid)return this;const n=E.fromDurationLike(e).negate();return ye(this,hi(this,n))}startOf(e,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=E.normalizeUnit(e);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(e,n){return this.isValid?this.plus({[e]:1}).startOf(e,n).minus(1):this}toFormat(e,n={}){return this.isValid?P.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,e):kn}toLocaleString(e=zt,n={}){return this.isValid?P.create(this.loc.clone(n),e).formatDateTime(this):kn}toLocaleParts(e={}){return this.isValid?P.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=e==="extended";let a=Cn(this,o);return a+="T",a+=mi(this,o,n,r,i,s),a}toISODate({format:e="extended"}={}){return this.isValid?Cn(this,e==="extended"):null}toISOWeekDate(){return _t(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+mi(this,o==="extended",n,e,r,s):null}toRFC2822(){return _t(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return _t(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Cn(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||e)&&(r&&(i+=" "),n?i+="z":e&&(i+="ZZ")),_t(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():kn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const n={...this.c};return e.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,n="milliseconds",r={}){if(!this.isValid||!e.isValid)return E.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=xl(n).map(E.normalizeUnit),o=e.valueOf()>this.valueOf(),a=o?this:e,l=o?e:this,c=Dc(a,l,s,i);return o?c.negate():c}diffNow(e="milliseconds",n={}){return this.diff(p.now(),e,n)}until(e){return this.isValid?O.fromDateTimes(this,e):this}hasSame(e,n,r){if(!this.isValid)return!1;const i=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const n=e.base||p.fromObject({},{zone:this.zone}),r=e.padding?this<n?-e.padding:e.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(i=e.unit,s=void 0),gi(n,this.plus(r),{...e,numeric:"always",units:i,unit:s})}toRelativeCalendar(e={}){return this.isValid?gi(e.base||p.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(p.isDateTime))throw new H("min requires all arguments be DateTimes");return ni(e,n=>n.valueOf(),Math.min)}static max(...e){if(!e.every(p.isDateTime))throw new H("max requires all arguments be DateTimes");return ni(e,n=>n.valueOf(),Math.max)}static fromFormatExplain(e,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=A.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return uo(o,e,n)}static fromStringExplain(e,n,r={}){return p.fromFormatExplain(e,n,r)}static get DATE_SHORT(){return zt}static get DATE_MED(){return gs}static get DATE_MED_WITH_WEEKDAY(){return rl}static get DATE_FULL(){return ys}static get DATE_HUGE(){return vs}static get TIME_SIMPLE(){return bs}static get TIME_WITH_SECONDS(){return Es}static get TIME_WITH_SHORT_OFFSET(){return Ts}static get TIME_WITH_LONG_OFFSET(){return $s}static get TIME_24_SIMPLE(){return Ss}static get TIME_24_WITH_SECONDS(){return As}static get TIME_24_WITH_SHORT_OFFSET(){return ks}static get TIME_24_WITH_LONG_OFFSET(){return Ms}static get DATETIME_SHORT(){return xs}static get DATETIME_SHORT_WITH_SECONDS(){return Cs}static get DATETIME_MED(){return Os}static get DATETIME_MED_WITH_SECONDS(){return Ls}static get DATETIME_MED_WITH_WEEKDAY(){return il}static get DATETIME_FULL(){return Ds}static get DATETIME_FULL_WITH_SECONDS(){return Ns}static get DATETIME_HUGE(){return Is}static get DATETIME_HUGE_WITH_SECONDS(){return Ps}}function ot(t){if(p.isDateTime(t))return t;if(t&&t.valueOf&&ke(t.valueOf()))return p.fromJSDate(t);if(t&&typeof t=="object")return p.fromObject(t);throw new H(`Unknown datetime argument: ${t}, of type ${typeof t}`)}function dr(t){const e=p.fromObject(Ja(t,["timezone"]),{zone:t.timezone});if(!e.isValid)throw new Error(e.invalidExplanation??void 0);return e}function Xc(t,e){if(!t.isValid)throw new Error(`Invalid input: '${t.toISO()}'`);return{day:t.day,month:t.month,year:t.year,hour:t.hour,minute:t.minute,second:t.second,millisecond:t.millisecond,timezone:e??t.zoneName}}const eu=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ht(t,e){return t?eu.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function Me(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function tu(t){return Me(t).map(e=>t[e])}function nu(t,e){return t.includes(e)}function ru(t){return!!t}var vi;(function(t){t.Upper="upper",t.Lower="lower"})(vi||(vi={}));var bi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(bi||(bi={}));function iu(t){return t?t.map(fr).filter(ru).join(`
`):""}function fr(t){return t?t instanceof Error?t.message:ht(t,"message")?String(t.message):String(t):""}function su(t){return t instanceof Error?t:new Error(fr(t))}function ou(t,e){const n=su(t);return n.message=`${e}: ${n.message}`,n}function wo(t,e){let n=!1;const r=Me(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Me(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function au(t,e){try{return lu(t,e),!0}catch{return!1}}function lu(t,e,n){if(t.length<e)throw new Error(n?`'${n}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function qe(t){return!!t&&typeof t=="object"}function cu(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}cu();function uu(t,e){var a;const n=e==null?void 0:e.constructor,r=(a=t==null?void 0:t.constructor)==null?void 0:a.prototype,i=(t==null?void 0:t.constructor)===n,s=n&&r?r instanceof n:!1,o=i||s;return Ge(t)===Ge(e)&&o}const go="__vir__shape__definition__key__do__not__use__in__actual__objects";function yo(t){return ht(t,go)}const hr=Symbol("and"),vo=Symbol("instance"),bo=Symbol("enum"),Eo=Symbol("exact"),mr=Symbol("indexed-keys"),To=Symbol("or"),pr=Symbol("unknown"),du=[hr,bo,Eo,mr,vo,To,pr],$o="__vir__shape__specifier__key__do__not__use__in__actual__objects";function fu(...t){return wr(t,hr)}function hu(...t){return wr(t,mr)}function mu(t){return wr([t],pr)}function on(t){return Le(t,hr)}function an(t){return Le(t,vo)}function ln(t){return Le(t,bo)}function cn(t){return Le(t,Eo)}function un(t){return Le(t,mr)}function kt(t){return Le(t,To)}function dn(t){return Le(t,pr)}function Le(t,e){const n=Mt(t);return!!n&&n.specifierType===e}function wr(t,e){return{[$o]:!0,specifierType:e,parts:t}}function Ee(t,e,n,r){const i=Mt(e);if(i){if(an(i))return t instanceof i.parts[0];if(on(i))return i.parts.every(s=>Ee(t,s));if(kt(i))return i.parts.some(s=>Ee(t,s));if(cn(i))return qe(t)?Ee(t,i.parts[0]):t===i.parts[0];if(ln(i))return Object.values(i.parts[0]).some(s=>s===t);if(un(i))return qe(t)?pu(t,i,!!n)&&tu(t).every(s=>Ee(s,i.parts[0].values)):!1;if(dn(i))return!0}return r?e===t:uu(t,e)}function pu(t,e,n){const r=e.parts[0].required,i=e.parts[0].keys;if(n)if(r){const s=gr(e);return k(s,"boolean")?s:s.every(o=>Me(t).some(a=>Ee(a,o,!1,!0)))}else return!0;else return Me(t).every(s=>Ee(s,i))}function gr(t){const e=t.parts[0].keys,n=Mt(e);if(vn(e))return[e];if(n){if(an(n))return!1;if(on(n))return!1;if(kt(n)){const r=n.parts.map(s=>gr(hu({...t.parts[0],keys:s})));let i;return r.forEach(s=>{k(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),k(i,"boolean")?i:r.flat().filter(vn)}else if(cn(n)){const r=n.parts.filter(vn);return r.length!==n.parts.length?!1:r}else{if(ln(n))return Object.values(n.parts[0]);if(un(n))return!1;if(dn(n))return!0}}return!1}function Mt(t){if(qe(t)&&ht(t,$o)){if(!ht(t,"parts")||!k(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!ht(t,"specifierType")||!nu(du,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Ei extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function zn(t,e=!1){return ut(t)}function ut(t){const e=Mt(t);if(e)if(an(e)){const n=e.parts[0];try{return new n}catch(r){throw new Ei(`Failed to create default value for classShape for class '${n.name}': ${fr(r)}`)}}else{if(kt(e)||cn(e))return ut(e.parts[0]);if(on(e))return e.parts.reduce((n,r)=>Object.assign(n,ut(r)),{});if(ln(e))return Object.values(e.parts[0])[0];if(un(e)){const n=gr(e);return!e.parts[0].required||k(n,"boolean")?{}:Object.fromEntries(n.map(r=>[r,ut(e.parts[0].values)]))}else{if(dn(e))return e.parts[0]??{};throw new Ei(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return yo(t)?zn(t.shape):t instanceof RegExp?t:k(t,"array")?t.map(ut):qe(t)?wo(t,(n,r)=>zn(r)):t}function fn(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return zn(t)},[go]:!0}}class R extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function wu(t,e,n={}){try{return So(t,e,n),!0}catch{return!1}}function So(t,e,n={},r=""){try{te({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?ou(i,r):i}}function Gn(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function te({subject:t,shape:e,keys:n,options:r}){if(dn(e))return!0;if(yo(e))return te({subject:t,shape:e.shape,keys:n,options:r});const i=Gn(n);if(Mt(t))throw new R(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!Ee(t,e,!r.ignoreExtraKeys))throw new R(`Subject does not match shape definition at key ${i}`);if(k(e,"function"))return k(t,"function");if(an(e))return t instanceof e.parts[0];if(qe(t)){const o=t,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(u=>[u,!1])),l=[];let c=!1;if(kt(e)){const u=[];c=e.parts.some(d=>{try{const f=te({subject:t,shape:d,keys:n,options:{...r}});return Object.assign(a,f),!0}catch(f){if(f instanceof R)return u.push(f),!1;throw f}}),!c&&au(u,1)&&l.push(u[0])}else if(on(e))c=e.parts.every(u=>{try{const d=te({subject:t,shape:u,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,d),!0}catch(d){if(d instanceof R)return l.push(d),!1;throw d}});else if(cn(e)){const u=te({subject:t,shape:e.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,u),c=!0}else{if(ln(e))throw new R(`Cannot compare an enum specifier to an object at ${i}`);if(k(e,"array")&&k(o,"array"))c=o.every((u,d)=>{const f=e.some(h=>{try{return te({subject:u,shape:h,keys:[...n,d],options:r}),!0}catch(v){if(v instanceof R)return l.push(v),!1;throw v}});return a[d]=f,f});else if(un(e)){const u=wo(t,(d,f)=>(r.ignoreExtraKeys||te({shape:e.parts[0].keys,subject:d,keys:[...n,d],options:r}),te({shape:e.parts[0].values,subject:f,keys:[...n,d],options:r}),!0));Object.assign(a,u),c=!0}else{const u=gu({keys:n,options:r,shape:e,subject:t});Object.assign(a,u),c=!0}}if(l.length)throw new R(iu(l));if(!c){const d=`Failed on key(s): ${Object.keys(a).filter(f=>!a[f]).map(f=>Gn([...n,f])).join(",")}`;throw new R(d)}return r.ignoreExtraKeys||Object.entries(a).forEach(([u,d])=>{if(!d)throw new R(`subject as extra key '${u}' in ${i}.`)}),a}else if(r.exactValues)return t===e;return!0}function gu({keys:t,options:e,shape:n,subject:r}){const i=Gn(t),s={};if(qe(n)){const o=new Set(Me(n)),a=new Set(Me(r));o.forEach(l=>{l in r&&a.add(l)}),e.ignoreExtraKeys||a.forEach(l=>{if(!o.has(l))throw new R(`Subject has extra key '${String(l)}' in ${i}`)}),o.forEach(l=>{var f;const c=n[l],u=kt(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!d)throw new R(`Subject missing key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=r[l];if(e.ignoreExtraKeys&&!o.has(l))return;const u=n[l];te({subject:c,shape:u,keys:[...t,l],options:e}),s[l]=!0})}else throw new R(`shape definition at ${i} was not an object.`);return s}const yu=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],vu=yu.reduce((t,e)=>(t[e]=e,t),{}),bu=x.defaultZone.name,yr=vu.UTC;var ne;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(ne||(ne={}));const Eu=["hour","minute","second","millisecond"],Tu=fn({hour:14,minute:19,second:7,millisecond:877,timezone:yr}),$u=fn({year:2023,month:6,day:5,timezone:yr}),Su=fn(fu($u,Tu));var b;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(b||(b={}));b.Milliseconds+"",b.Seconds+"",b.Minutes+"",b.Hours+"",b.Days+"",b.Weeks+"",b.Months+"",b.Quarters+"",b.Years+"";b.Milliseconds,b.Seconds,b.Minutes,b.Hours,b.Days,b.Weeks,b.Months,b.Quarters,b.Years;b.Years+"",b.Quarters+"",b.Months+"",b.Weeks+"",b.Days+"",b.Hours+"",b.Minutes+"",b.Seconds+"",b.Milliseconds+"";var Ti;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(Ti||(Ti={}));function $i(t,e){const n=[];if(e.forEach(r=>{t[r]==null&&n.push(r)}),n.length)throw new Error(`Missing required FullDate key(s): ${n.join(", ")}`)}function Au(t){if(!ct.isValidIANAZone(t))throw new Error(`'${t}' is not a valid time zone`)}function ku(t){So(t,Su),Au(t.timezone),dr(t)}function Mu(t){try{return ku(t),!0}catch{return!1}}const xu=["L-y","LLL-y","LLLL-y"];function Cu(t,e){const n=p.fromISO(t,{zone:e});if(n.isValid)return n;let r;return xu.some(i=>{const s=p.fromFormat(t,i,{zone:e});return s.isValid?(r=s,!0):!1}),r}function Ou(t,e){const n=Du(t,e);if(!n||!n.isValid)throw new Error(`Failed to parse date input '${t}'`);return Xc(n,e)}function Lu(t){const e=p.fromJSDate(new Date(t));if(e.isValid)return e}function Du(t,e){if(Mu(t)&&(t=dr(t).toMillis()),p.isDateTime(t))return t.setZone(e);if(k(t,"number"))return p.fromMillis(t,{zone:yr}).setZone(e);if(k(t,"string")){const n=Cu(t,e);if(n)return n}else if(t instanceof Date)return p.fromJSDate(t).setZone(e);return Lu(t)}function Nu(t){return Ou(Date.now(),t)}function Si(){return Nu(bu)}const Iu={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Qa(Iu,Eu);const Pu=x.defaultLocale;function _u(t){return t.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function Hu(t,e){const n=dr(t).toLocaleString({...e},{locale:(e==null?void 0:e.locale)??Pu});return _u(n)}function Vu(t){return[String(Math.abs(t.year)).padStart(4,"0"),String(Math.abs(t.month)).padStart(2,"0"),String(Math.abs(t.day)).padStart(2,"0")].join("-")}function Fu(t,e){const n=qa(t,"second")&&e?String(Math.abs(t.second)).padStart(2,"0"):void 0;return[String(Math.abs(t.hour)).padStart(2,"0"),String(Math.abs(t.minute)).padStart(2,"0"),n].filter(Za).join(":")}function Bn(t,e,n){const r=t;if(e===ne.Date)return $i(r,["year","month","day"]),Vu(r);if(e===ne.Time){if(n&&r.second==null)throw new Error("Tried to include seconds in the time string but no seconds were provided.");return $i(r,["hour","minute"]),Fu(r,!!n)}else if(e===ne.DateTime){const i=Bn(t,ne.Date),s=Bn(t,ne.Time,n);return`${i}T${s}`}else throw new Error(`Unexpected inputTyped: '${e}'. Expected usage of FullDatePartEnum or one of ${Ya(ne).join(", ")}.`)}b.Milliseconds+"",b.Seconds+"",b.Minutes+"",b.Hours+"",b.Days+"",b.Weeks+"",b.Months+"",b.Quarters+"",b.Years+"";const Wu={DateShort:p.DATE_SHORT,DateMed:p.DATE_MED,DateMedWithWeekday:p.DATE_MED_WITH_WEEKDAY,DateFull:p.DATE_FULL,DateHuge:p.DATE_HUGE,TimeSimple:p.TIME_SIMPLE,TimeWithSeconds:p.TIME_WITH_SECONDS,TimeWithShortOffset:p.TIME_WITH_SHORT_OFFSET,TimeWithLongOffset:p.TIME_WITH_LONG_OFFSET,Time24Simple:p.TIME_24_SIMPLE,Time24WithSeconds:p.TIME_24_WITH_SECONDS,Time24WithShortOffset:p.TIME_24_WITH_SHORT_OFFSET,Time24WithLongOffset:p.TIME_24_WITH_LONG_OFFSET,DatetimeShort:p.DATETIME_SHORT,DatetimeShortWithSeconds:p.DATETIME_SHORT_WITH_SECONDS,DatetimeMed:p.DATETIME_MED,DatetimeMedWithSeconds:p.DATETIME_MED_WITH_SECONDS,DatetimeMedWithWeekday:p.DATETIME_MED_WITH_WEEKDAY,DatetimeFull:p.DATETIME_FULL,DatetimeFullWithSeconds:p.DATETIME_FULL_WITH_SECONDS,DatetimeHuge:p.DATETIME_HUGE,DatetimeHugeWithSeconds:p.DATETIME_HUGE_WITH_SECONDS};class Ru extends Ua{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e.defaultValue,this.equalityCheck=e.equalityCheck||za}setValue(e){return super.setValue(e)}listen(e,n){return super.listen(e,n)}removeListener(e){return super.removeListener(e)}}const Uu=fn({listen(t,e){return()=>!1},destroy(){},removeListener(t){return!1},value:mu()});function On(t){return wu(t,Uu,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=globalThis,vr=Rt.ShadowRoot&&(Rt.ShadyCSS===void 0||Rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,br=Symbol(),Ai=new WeakMap;let Ao=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==br)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(vr&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Ai.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ai.set(n,e))}return e}toString(){return this.cssText}};const I=t=>new Ao(typeof t=="string"?t:t+"",void 0,br),Ut=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Ao(n,t,br)},ju=(t,e)=>{if(vr)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=Rt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},ki=vr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return I(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zu,defineProperty:Gu,getOwnPropertyDescriptor:Bu,getOwnPropertyNames:qu,getOwnPropertySymbols:Zu,getPrototypeOf:Ku}=Object,me=globalThis,Mi=me.trustedTypes,Yu=Mi?Mi.emptyScript:"",Ln=me.reactiveElementPolyfillSupport,mt=(t,e)=>t,Zt={toAttribute(t,e){switch(e){case Boolean:t=t?Yu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Er=(t,e)=>!zu(t,e),xi={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Er};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);class He extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=xi){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Gu(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){const{get:i,set:s}=Bu(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xi}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;const e=Ku(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){const n=this.properties,r=[...qu(n),...Zu(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(ki(i))}else e!==void 0&&n.push(ki(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ju(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var s;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Zt).toAttribute(n,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,n){var s;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Zt;this._$Em=i,this[i]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(e,n,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Er)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}He.elementStyles=[],He.shadowRootOptions={mode:"open"},He[mt("elementProperties")]=new Map,He[mt("finalized")]=new Map,Ln==null||Ln({ReactiveElement:He}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,Kt=pt.trustedTypes,Ci=Kt?Kt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ko="$lit$",de=`lit$${Math.random().toFixed(9).slice(2)}$`,Mo="?"+de,Ju=`<${Mo}>`,xe=document,yt=()=>xe.createComment(""),vt=t=>t===null||typeof t!="object"&&typeof t!="function",xo=Array.isArray,Qu=t=>xo(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Dn=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Li=/>/g,ve=RegExp(`>|${Dn}(?:([^\\s"'>=/]+)(${Dn}*=${Dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Di=/'/g,Ni=/"/g,Co=/^(?:script|style|textarea|title)$/i,Xu=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),ed=Xu(1),G=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Ii=new WeakMap,Te=xe.createTreeWalker(xe,129);function Oo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ci!==void 0?Ci.createHTML(e):e}const td=(t,e)=>{const n=t.length-1,r=[];let i,s=e===2?"<svg>":"",o=at;for(let a=0;a<n;a++){const l=t[a];let c,u,d=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===at?u[1]==="!--"?o=Oi:u[1]!==void 0?o=Li:u[2]!==void 0?(Co.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=ve):u[3]!==void 0&&(o=ve):o===ve?u[0]===">"?(o=i??at,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?ve:u[3]==='"'?Ni:Di):o===Ni||o===Di?o=ve:o===Oi||o===Li?o=at:(o=ve,i=void 0);const h=o===ve&&t[a+1].startsWith("/>")?" ":"";s+=o===at?l+Ju:d>=0?(r.push(c),l.slice(0,d)+ko+l.slice(d)+de+h):l+de+(d===-2?a:h)}return[Oo(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class bt{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,u]=td(e,n);if(this.el=bt.createElement(c,r),Te.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Te.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(ko)){const f=u[o++],h=i.getAttribute(d).split(de),v=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:v[2],strings:h,ctor:v[1]==="."?rd:v[1]==="?"?id:v[1]==="@"?sd:hn}),i.removeAttribute(d)}else d.startsWith(de)&&(l.push({type:6,index:s}),i.removeAttribute(d));if(Co.test(i.tagName)){const d=i.textContent.split(de),f=d.length-1;if(f>0){i.textContent=Kt?Kt.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],yt()),Te.nextNode(),l.push({type:2,index:++s});i.append(d[f],yt())}}}else if(i.nodeType===8)if(i.data===Mo)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(de,d+1))!==-1;)l.push({type:7,index:s}),d+=de.length-1}s++}}static createElement(e,n){const r=xe.createElement("template");return r.innerHTML=e,r}}function Ze(t,e,n=t,r){var o,a;if(e===G)return e;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=vt(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(e=Ze(t,i._$AS(t,e.values),i,r)),e}class nd{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??xe).importNode(n,!0);Te.currentNode=i;let s=Te.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new xt(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new od(s,this,e)),this._$AV.push(c),l=r[++a]}o!==(l==null?void 0:l.index)&&(s=Te.nextNode(),o++)}return Te.currentNode=xe,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class xt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Ze(this,e,n),vt(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qu(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==C&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=bt.createElement(Oo(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new nd(i,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(e){let n=Ii.get(e.strings);return n===void 0&&Ii.set(e.strings,n=new bt(e)),n}k(e){xo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of e)i===n.length?n.push(r=new xt(this.S(yt()),this.S(yt()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class hn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=C}_$AI(e,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)e=Ze(this,e,n,0),o=!vt(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Ze(this,a[r+l],n,l),c===G&&(c=this._$AH[l]),o||(o=!vt(c)||c!==this._$AH[l]),c===C?e=C:e!==C&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class rd extends hn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class id extends hn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}class sd extends hn{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){if((e=Ze(this,e,n,0)??C)===G)return;const r=this._$AH,i=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==C&&(r===C||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class od{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ze(this,e)}}const Nn=pt.litHtmlPolyfillSupport;Nn==null||Nn(bt,xt),(pt.litHtmlVersions??(pt.litHtmlVersions=[])).push("3.1.4");const ad=(t,e,n)=>{const r=(n==null?void 0:n.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new xt(e.insertBefore(yt(),s),s,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wt extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ad(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return G}}var us;wt._$litElement$=!0,wt.finalized=!0,(us=globalThis.litElementHydrateSupport)==null||us.call(globalThis,{LitElement:wt});const In=globalThis.litElementPolyfillSupport;In==null||In({LitElement:wt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},et=t=>(...e)=>({_$litDirective$:t,values:e});class De{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ld={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Er},cd=(t=ld,e,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,t),r==="accessor"){const{name:o}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t)},init(a){return a!==void 0&&this.P(o,void 0,t),a}}}if(r==="setter"){const{name:o}=n;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,t)}}throw Error("Unsupported decorator location: "+r)};function ud(t){return(e,n)=>typeof n=="object"?cd(t,e,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=et(class extends De{constructor(t){var e;if(super(t),t.type!==Tr.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(e)}const n=t.element.classList;for(const s of this.st)s in e||(n.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(o?(n.add(s),this.st.add(s)):(n.remove(s),this.st.delete(s)))}return G}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=t=>t??C;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qn extends De{constructor(e){if(super(e),this.it=C,e.type!==Tr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===G)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}qn.directiveName="unsafeHTML",qn.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi extends qn{}Pi.directiveName="unsafeSVG",Pi.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dd(t,e,n){return t?e(t):n==null?void 0:n(t)}class Do extends wt{}function fd(t,e,n){if(e in t)return t[e];{const r=n();return Ea(r)?new Promise(async(i,s)=>{try{const o=await r;t[e]=o,i(o)}catch(o){s(o)}}):(t[e]=r,r)}}const hd=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function $r(t,e){return t?hd.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function pe(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function md(t,e,n){return t.reduce((r,i,s,o)=>{const a=e(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function No(t){return!!t}const pd={capitalizeFirstLetter:!1};function wd(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function gd(t,e){return e.capitalizeFirstLetter?wd(t):t}function yd(t,e=pd){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return gd(r,e)}var _i;(function(t){t.Upper="upper",t.Lower="lower"})(_i||(_i={}));var Hi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Hi||(Hi={}));function Io(t){return t?t instanceof Error?t.message:$r(t,"message")?String(t.message):String(t):""}function vd(t){return t instanceof Error?t:new Error(Io(t))}function bd(t,e){const n=vd(t);return n.message=`${e}: ${n.message}`,n}function Po(t,e){let n=!1;const r=pe(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(pe(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function Ed(t){return!!t&&typeof t=="object"}function Td(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Td();function Vi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Ke;(function(t){t.Upper="upper",t.Lower="lower"})(Ke||(Ke={}));function $d(t){return t.toLowerCase()!==t.toUpperCase()}function Fi(t,e,n){if(!t&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<t.length;r++){const i=t[r]||"";if(!$d(i)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(e===Ke.Upper&&i!==i.toUpperCase())return!1;if(e===Ke.Lower&&i!==i.toLowerCase())return!1}return!0}function Sd(t){return t.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",l=Fi(o,Ke.Lower,{blockNoCaseCharacters:!0})||Fi(a,Ke.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}var Wi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Wi||(Wi={}));function Ad(t){return!!t&&typeof t=="object"}function kd(t,e){let n=!1;const r=Vi(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Vi(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function Md(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Md();function Ne(t){if(Ad(t))return kd(t,(n,r)=>{if(!k(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Sd(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?I(n):n.startsWith("-")?Ut`-${I(n)}`:Ut`--${I(n)}`;return{name:o,value:Ut`var(${o}, ${I(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${Ne.name}' function.`)}function xd(t,e,n){const r=!e.length&&!n.length,i=t.length?!1:!e.filter(a=>!!a.index).length;if(r||i)return[...t];const s=t.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<t.length&&(s[a]=[])}),e.forEach(a=>{const l=s[a.index];l&&l.splice(0,0,...a.values)}),s.flat()}function jt(t){return $r(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function Sr(t){return $r(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function _o(t){return md(t,e=>{if(jt(e))return e.definition;if(Sr(e))return e.tagInterpolationKey||e},No)}const Ho=new WeakMap;function Cd(t,e){var i;const n=_o(e);return(i=Vo(Ho,[t,...n]).value)==null?void 0:i.template}function Od(t,e,n){const r=_o(e);return Wo(Ho,[t,...r],n)}function Vo(t,e,n=0){const{currentTemplateAndNested:r,reason:i}=Fo(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Vo(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Fo(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=t.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function Wo(t,e,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Fo(t,e,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||t.set(s,a),r===e.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),Wo(l,e,n,r+1)}const Ld=new WeakMap;function Ro(t,e,n){const r=Cd(t,e),i=r??n();if(!r){const a=Od(t,e,i);if(a.result)Ld.set(t,i);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(e),o=xd(e,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Uo(t,e,n,r){const i=[],s=[],o=[],a=[];return t.forEach((c,u)=>{const d=i.length-1,f=i[d],h=u-1,v=e[h];r&&r(c);let S,N=[];if(typeof f=="string"&&(S=n(f,c,v),S)){i[d]=f+S.replacement,o.push(h);const J=S.getExtraValues;N=J?J(v):[],N.length&&J?(i[d]+=" ",N.forEach((tt,nt)=>{nt&&i.push(" ")}),a.push(tt=>{const nt=tt[h],Ot=J(nt);return{index:h,values:Ot}}),i.push(c)):i[d]+=c}S||i.push(c);const ee=t.raw[u];S?(s[d]=s[d]+S.replacement+ee,N.length&&N.forEach(()=>{s.push("")})):s.push(ee)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const u=a.map(d=>d(c)).flat();return{valueIndexDeletions:o,valueInsertions:u}}}}function Dd(...[t,e,n]){if(Sr(n))return{replacement:n.tagName,getExtraValues:void 0}}function Nd(t,e){return Uo(t,e,Dd)}function T(t,...e){const n=Ro(t,e,()=>Nd(t,e));return Ut(n.strings,...n.values)}const Id={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function jo(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof Do?!0:jo(n)}function zo(t,e){const n=t.instanceState;pe(e).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[r]=e[r]:t[r]=e[r]}),"instanceInputs"in t&&pe(t.instanceInputs).forEach(r=>{r in e||(t.instanceInputs[r]=void 0)}),Pd(t)}function Pd(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function Ri(t,e){const n=[t,"-"].join("");Object.keys(e).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${t}': CSS property names must begin with the element's tag name.`)})}class _d extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function Go(){return t=>{var e;return e=class extends _d{constructor(n){super(t,n),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function we(){return Go()}function Hd(t,e){return e?Object.keys(e).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=Go()([t,r].join("-"));return n[r]=i,n},{}):{}}function Vd(t){return t?Po(t,e=>e):{}}const Ar=Symbol("element-vir-state-setup");function Fd(t){return Ed(t)?Ar in t:!1}function Bo(t,e){e in t||ud()(t,e)}function Wd(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Ui(t,e){const n=t;function r(o){e?Wd(o,t,t.tagName):Bo(t,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,l){const c=Fd(l)?l[Ar]():l;r(a);const u=n[a];function d(v){o[a]=v,n[a]=v}const f=t.observablePropertyListenerMap[a];if(u!==c&&On(u)&&f&&u.removeListener(f),On(c))if(f)c.listen(!1,f);else{let v=function(){t.requestUpdate()};var h=v;t.observablePropertyListenerMap[a]=v,c.listen(!1,v)}else On(u)&&(t.observablePropertyListenerMap[a]=void 0);return d(c),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function Rd({hostClassNames:t,cssVars:e}){return{hostClasses:Po(t,(n,r)=>({name:I(r),selector:I(`:host(.${r})`)})),cssVars:e}}function Ud({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:i}){e&&pe(e).forEach(s=>{const o=e[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?t.classList.add(a):t.classList.remove(a))})}function jd({element:t,eventsMap:e,cssVars:n,slotNamesMap:r}){function i(o){pe(o).forEach(a=>{const l=o[a];t.instanceState[a]=l})}return{cssVars:n,slotNames:r,dispatch:o=>t.dispatchEvent(o),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:i}}function zd(t){return t?t.reduce((n,r)=>(n[r]=r,n),{}):{}}var Gd=globalThis&&globalThis.__setFunctionName||function(t,e,n){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})};function Ct(t){var e;const n=t;if(!k(n,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!k(n.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!n.renderCallback||typeof n.renderCallback=="string")throw new Error(`Failed to define element '${n.tagName}': renderCallback is not a function`);const r={...Id,...n.options},i=Hd(n.tagName,n.events),s=Vd(n.hostClasses);n.hostClasses&&Ri(n.tagName,n.hostClasses),n.cssVars&&Ri(n.tagName,n.cssVars);const o=n.cssVars?Ne(n.cssVars):{},a=zd(n.slotNames),l=typeof n.styles=="function"?n.styles(Rd({hostClassNames:s,cssVars:o})):n.styles||T``,c=n.renderCallback;function u(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(e=class extends Do{createRenderParams(){return jd({element:this,eventsMap:i,cssVars:o,slotNamesMap:a})}get instanceType(){throw new Error(`"instanceType" was called on ${n.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${n.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${n.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{jo(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${n.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Ct.name}' to define ${n.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&n.initCallback&&(this._initCalled=!0,n.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ud({host:f.host,hostClassesInit:n.hostClasses,hostClassNames:s,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=bd(f,`Failed to render ${n.tagName}`);return console.error(h),this._lastRenderError=h,Io(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&n.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(n.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${n.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{ba(f,"destroy")&&k(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),n.cleanupCallback){const f=this.createRenderParams();if(n.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${n.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){zo(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Ui(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Ui(this,!r.allowPolymorphicState)});const f=n.stateInitStatic||{};pe(f).forEach(h=>{Bo(this,h),this.instanceState[h]=f[h]}),this.definition=d}},Gd(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:n.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:n.stateInitStatic}),e);return Object.defineProperties(d,{name:{value:yd(n.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(n.tagName)?console.warn(`Tried to define custom element '${n.tagName}' but it is already defined.`):window.customElements.define(n.tagName,d),d}function kr(){return t=>{const e=t;if(!k(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Ct({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function mn(t,e){return Zn(t,e),t.element}function Bd(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function Zn(t,e){const n=Bd(t),r=n?`: in ${n}`:"";if(t.type!==Tr.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${r}.`);if(!t.element)throw new Error(`${e} directive found no element${r}.`)}function qd(t){const e=et(class extends De{constructor(n){super(n),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mn(n,t)}render(n){return this.element.setAttribute(t,n),G}});return{attributeSelector(n){return`[${t}="${n}"]`},attributeDirective(n){return e(n)},attributeName:t}}function M(t,e){return Zd(t,e)}const Zd=et(class extends De{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mn(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),G}}),Pn="onResize",qo=et(class extends De{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Zn(t,Pn)}fireCallback(t){var n;const e=t[0];if(!e)throw console.error(t),new Error(`${Pn} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){Zn(t,Pn),this.callback=e;const n=t.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(e)}render(t){}});function $e(t,e,n){return dd(t,()=>e,()=>n)}const{attributeDirective:dt,attributeSelector:ah,attributeName:lh}=qd("data-test-id");pe({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function Zo(t){return{[Ar]:t}}function Kd(t){const{assertInputs:e,transformInputs:n}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(r=>r)};return{defineElement:()=>r=>(e(r),kr()(n(r))),defineElementNoInputs:r=>(e(r),Ct(n(r)))}}function Yd(t,e){return e?ji(t,e):ji(void 0,t)}const ji=et(class extends De{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mn(t,"assign")}render(t,e){return zo(this.element,e),G}}),Jd={};function Qd(t,e){return e.map((n,r)=>{const i=t[r],s=t[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=Ko(i,s);if(o&&k(n,"string"))return{tagName:n,tagInterpolationKey:fd(Jd,n,()=>({tagName:n}))}}return n})}function Ko(t,e){const n=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),r=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function Xd(...[t,e,n]){var l,c,u;const r=jt(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=Ko(t,e),o=Sr(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(r==null?void 0:r.tagName)||((c=(l=r==null?void 0:r.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((u=r==null?void 0:r.constructor)==null?void 0:u.name)}'`);if(!s||!o)return;if(i&&r.elementOptions&&!r.elementOptions.ignoreUnsetInputs&&!jt(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(d){const f=jt(d)?d.inputs:void 0;return[i&&f?Yd(f):void 0].filter(No)}}}function ef(t){}function tf(t){return Uo(t.strings,t.values,Xd,ef)}function g(t,...e){const n=Qd(t,e),r=ed(t,...n),i=Ro(t,n,()=>tf(r));return{...r,strings:i.strings,values:i.values}}function nf(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function _n(t){return nf(t).map(e=>[e,t[e]])}var zi;(function(t){t.Upper="upper",t.Lower="lower"})(zi||(zi={}));var Gi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Gi||(Gi={}));function rf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}rf();const Yo={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},sf=Object.keys(Yo),Jo={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},of=Object.keys(Jo),Qo={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},af=Object.keys(Qo),lf=[_n(Yo).map(([t,e])=>[e,t]),_n(Jo).map(([t,e])=>[e,t]),_n(Qo).map(([t,e])=>[e,t])].flat();new Map(lf);Array.from(new Set([...sf,...af,...of].sort()));function Bi(t,e,n={}){const r=n.useOriginalTarget?t.target:t.currentTarget;if(!(r instanceof e)){const i=e.name,s=r==null?void 0:r.constructor.name,o=n.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}const qi="vira-",{defineElement:se,defineElementNoInputs:ch}=Kd({assertInputs:t=>{if(!t.tagName.startsWith(qi))throw new Error(`Tag name should start with '${qi}' but got '${t.tagName}'`)}}),w=Ne({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function Zi(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cf(t,e="and"){if(t.length<2)return t.join("");const n=t.length>2?", ":" ";return`${t.slice(0,-1).join(n)}${n}${e} ${t[t.length-1]}`}var Ki;(function(t){t.Upper="upper",t.Lower="lower"})(Ki||(Ki={}));var Yi;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Yi||(Yi={}));function Ji(t,e){let n=!1;const r=Zi(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(n=!0),{...i,[s]:o}},{});return n?new Promise(async(i,s)=>{try{await Promise.all(Zi(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(o)}}):r}function Xo(){let t,e,n=!1;const r=new Promise((i,s)=>{t=o=>(n=!0,i(o)),e=o=>{n=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Xo.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function Qi(t){const e=Xo();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function uf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}uf();const df="px";function ff(t){return hf({value:t,suffix:df})}function hf({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}function F({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}const mf=F({name:"Check24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Q=Ne({"vira-form-input-radius":"8px"}),pn=T`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,X=Ne({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ce=Ne({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":T`calc(${Q["vira-form-input-radius"].value} + 4px)`});function Mr({selector:t,elementBorderSize:e,outlineGap:n=2,outlineWidth:r=2}){const i=I(ff(r+n+e));return T`
        ${I(t)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Ce["vira-focus-outline-color"].value};
            border-radius: ${Ce["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const he=Ne({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Ce["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),wn=T`
    padding: 0;
    margin: 0;
`,fe=T`
    ${wn};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Xi=T`#e2e2e2`,ea={menuShadow:T`
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
    `},Et=T`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,L=se()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>T`
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
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}}),Hn=se()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:t})=>t.selected},styles:({hostClasses:t})=>T`
        :host {
            display: flex;
            ${Et};
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
    `,renderCallback({inputs:t}){return g`
            <div class="option">
                <${L.assign({icon:mf})}></${L}>
                <slot>${t.label}</slot>
            </div>
        `}});function pf(t,e){return[t,e].filter(n=>n!==void 0).join(",")||""}function wf(t){const e=t.split(",");return fs(e,2)?{type:"2d",xCord:Nr(e[0]),yCord:Nr(e[1])}:{type:"1d"}}function gf(t,e){Object.entries(e).forEach(([n,r])=>{k(r,"boolean")&&r?t.setAttribute(n,""):k(r,"boolean")&&!r||r==null?t.removeAttribute(n):t.setAttribute(n,String(r))})}const yf=et(class extends De{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mn(t,"modifyElement")}render(t,e){return t!==this.lastKey&&(e(this.element),this.lastKey=t),G}}),je={name:"data-nav",selector(t){return t===""?`[${je.name}]`:`[${je.name}*="${String(t).replace(/"/g,"'")}"]`},css(t){return T`
            ${I(je.selector(t))}
        `}},Ve="nav-activated",Kn={selector:{click(t){return`${t}.${Ve}`},selected(t){return`${t}:focus`}},css:{click(t){return T`
                ${I(Kn.selector.click(t))}
            `},selected(t){return T`
                ${I(Kn.selector.selected(t))}
            `}}},vf={activateKeys:["Space","Return","Enter"]};function bf(){ta=Ca(vf)}let ta;bf();function es(t){return ta.activateKeys.some(e=>{const n=e.toLowerCase();return n===t.key.toLowerCase()||n===t.code.toLowerCase()})}function Ef(t,e){const n=pf(t,e);return yf(`${t}-${e}`,r=>{const i=r.hasAttribute("tabindex")?{}:{tabindex:0},s={[je.name]:n,...i};Xn(r,HTMLElement),gf(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(Ve)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(Ve)},!0),r.addEventListener("blur",()=>{r.classList.remove(Ve)},!0),r.addEventListener("keydown",o=>{o.target===r&&es(o)&&r.classList.add(Ve)},!0),r.addEventListener("keyup",o=>{o.target===r&&es(o)&&r.classList.remove(Ve)},!0)})}function Tf(t,e){return na([],t,e)}function na(t,e,n){return!e||e.type==="child"?!1:e.type==="1d"?ts(e.children,e,0,t,n):e.children.some((r,i)=>ts(r,e,i,t,n))}function ts(t,e,n,r,i){return t.some((s,o)=>{const a=ds(e,"isRoot")?r:r.concat(e);return i(a,s,{x:o,y:n})?!0:na(a,s,i)})}function gn(t){if(!t)return;let e,n,r;Tf(t,(s,o,a)=>o.element.matches(":focus")?(e=s,n=o,r=a,!0):!1);const i=e?(e==null?void 0:e.slice(-1)[0])||t:void 0;if(!(!n||!i||!r))return{node:n,parent:i,coords:r}}function Jt(t){t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()}function $f(t){var r;if(!t)return{success:!1,reason:"no nav tree"};const e=gn(t);if(!e)return{success:!1,reason:"no focused node to enter into"};if(e.node.type==="child"||!e.node.children.length)return{success:!1,reason:"no children to enter into"};const n=e.node.type==="1d"?e.node.children[0]:(r=e.node.children[0])==null?void 0:r[0];return n?(Jt(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}):{success:!1,reason:"failed to find first child to enter into"}}function Sf(t){if(!t)return{success:!1,reason:"no nav tree"};const e=gn(t);if(!e)return{success:!1,reason:"no focused node to exit out of"};if(ds(e.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const n=e.parent;return Jt(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}}function ra(t){const e=[];return La(t).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=ra(n),i=n.hasAttribute(je.name)?wf(n.getAttribute(je.name)||""):void 0;if(!i){e.push(...r);return}e.push({children:r,element:n,navValue:i})}),e}function Af(t){const e=ra(t);return ia(e)}function ia(t){if(!fs(t,1))return;const e=t[0].navValue.type,n={type:e,children:[],isRoot:!0};return t.forEach(r=>{const i=r.children.length?ia(r.children):void 0,s=i?{element:r.element,children:i.children,type:i.type}:{element:r.element,type:"child"};if(r.navValue.type==="2d"&&n.type==="2d"){n.children[r.navValue.xCord]||(n.children[r.navValue.xCord]=[]);const o=n.children[r.navValue.xCord];if(o[r.navValue.yCord])throw new Error(`Parent already has child at ${r.navValue.xCord},${r.navValue.yCord}`);o[r.navValue.yCord]=s}else if(r.navValue.type==="1d"&&n.type==="1d")n.children.push(s);else if(e!==r.navValue.type){const o=new Error("child nav does not match parent nav type");throw console.error(o,r),o}}),n}function ns(t,e){return t>e}function rs(t,e){return t<e}var U;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(U||(U={}));function kf(t,e,n){var a;if(!t)return{success:!1,reason:"no nav tree"};const r=gn(t);if(!r){const l=t.type==="1d"?t.children[0]:(a=t.children[0])==null?void 0:a[0];return l?(Jt(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Mf(r.parent,e,r),o=n?!0:!s;return(i==null?void 0:i.element)===r.node.element?{success:!1,reason:"no other nodes to navigate to"}:i&&o?(Jt(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function Mf(t,e,n){var i,s;if(e===U.Down||e===U.Up){const o=e===U.Down?rs:ns,a=e===U.Down?1:-1,l=t.type==="1d"?0:bn({value:n.coords.y+a,min:0,max:t.children.length-1}),c=t.type==="2d"?t.children[l]:void 0,u={x:t.type==="1d"?bn({value:n.coords.x+a,min:0,max:t.children.length-1}):c&&n.coords.x>=c.length?c.length-1:n.coords.x,y:l},d=t.type==="1d"?t.children[u.x]:(i=t.children[u.y])==null?void 0:i[u.x],f=t.type==="1d"?o(u.x,n.coords.x):o(u.y,n.coords.y);return{nextNode:d,requiresWrapping:f}}else{const o=e===U.Right?rs:ns,a=e===U.Right?1:-1,l=t.type==="1d"?t.children:t.children[n.coords.y];_e(l,`No current row found at y index: '${n.coords.y}'`);const c={x:bn({value:n.coords.x+a,min:0,max:l.length-1}),y:n.coords.y},u=o(c.x,n.coords.x);return{nextNode:t.type==="1d"?t.children[c.x]:(s=t.children[c.y])==null?void 0:s[c.x],requiresWrapping:u}}}class sa{constructor(e){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:e})}getCurrentlyFocused(){return gn(this.buildNavTree())}buildNavTree(){return Af(this.rootElement)}navigate({direction:e,allowWrapping:n}){return kf(this.buildNavTree(),e,n)}enterInto(){return $f(this.buildNavTree())}exitOutOf(){return Sf(this.buildNavTree())}navigatePibling(e){const n=this.exitOutOf();if(!n.success)return n;const r=this.navigate(e);if(!r.success)return r;const i=this.enterInto();return i.success?i:r}}const xf={option:"dropdown-option"},Ht=se()({tagName:"vira-dropdown-options",events:{selectionChange:we()},styles:T`
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
            background-color: ${he["vira-form-background-color"].value};
            border: 1px solid ${he["vira-form-border-color"].value};
            color: ${he["vira-form-foreground-color"].value};
            ${ea.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Kn.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${he["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Hn} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${pn};
            pointer-events: auto;
        }
    `,renderCallback({inputs:t,dispatch:e,events:n}){const r=t.options.map(i=>{const s=i.template||g`
                    <${Hn.assign({label:i.label,selected:t.selectedOptions.includes(i)})}></${Hn}>
                `;return g`
                <div
                    class="dropdown-item ${Yt({disabled:!!i.disabled})}"
                    ${dt(xf.option)}
                    title=${Lo(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?C:Ef()}
                    ${M("mousedown",o=>{o.stopPropagation()})}
                    ${M("mouseup",o=>{o.stopPropagation(),i.disabled||e(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return g`
            <slot>${r}</slot>
        `}}),Cf=F({name:"ChevronUp24Icon",svgTemplate:g`
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
    `}),Of=F({name:"CloseX24Icon",svgTemplate:g`
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
    `});F({name:"Element16Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});F({name:"Element24Icon",svgTemplate:g`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${w["vira-icon-stroke-color"].value}
                stroke-width=${w["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const Lf=F({name:"EyeClosed24Icon",svgTemplate:g`
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
    `}),Df=F({name:"EyeOpen24Icon",svgTemplate:g`
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
    `}),Nf=F({name:"Loader24Icon",svgTemplate:g`
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
    `}),If=T`
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
`,Pf=F({name:"LoaderAnimated24Icon",svgTemplate:g`
        <style>
            ${If}
        </style>
        ${Nf.svgTemplate}
    `});F({name:"Options24Icon",svgTemplate:g`
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
    `});const _f=F({name:"StatusFailure24Icon",svgTemplate:g`
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
    `});F({name:"StatusInProgress24Icon",svgTemplate:g`
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
    `});F({name:"StatusSuccess24Icon",svgTemplate:g`
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
    `});function Qt(t){if(t instanceof ShadowRoot)return Qt(t.host);const e=t.parentNode;if(e)return e instanceof Element?e:Qt(e)}function oa(t,e){if(e(t))return t;const n=Qt(t);if(n)return oa(n,e)}function Hf(t){const e=Qt(t);return e&&oa(e,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}function Vf(t,e,n={}){const r=n.useOriginalTarget?t.target:t.currentTarget;if(!(r instanceof e)){const i=e.name,s=r==null?void 0:r.constructor.name,o=n.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}class Ff extends Ru{constructor(){super({defaultValue:document.hidden,equalityCheck:er}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const e=n=>this.updateVisibility(n);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e){const n=Rf.includes(e.type),r=Wf.includes(e.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const Wf=["blur","focusout","pagehide"],Rf=["focus","focusin","pageshow"],Uf=new Ff;function jf(t,e){return Uf.listen(t,e)}const is={top:0,left:0,right:0,bottom:0};class aa extends tr("hide-pop-up"){}class la extends Y()("nav-select"){}class zf{constructor(e){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new nr}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0}}),Object.defineProperty(this,"cleanupCallbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"lastRootElement",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.options={...this.options,...e}}attachGlobalListeners(e){const n=new sa(e);this.cleanupCallbacks=[jf(!1,r=>{r||this.removePopUp()}),Vr("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Vr("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:U.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:U.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:U.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:U.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new la({detail:s.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(e,n,r){return this.listenTarget.listen(e,n,r)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new aa)}showPopUp(e,n){this.lastRootElement=e;const r={...this.options,...n},i=Hf(e);Xn(i,HTMLElement);const s=e.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-l},u=Ji(is,h=>s[h]),d=Ji(is,h=>{const v=c[h],S=u[h];return Math.abs(v-S)}),f=d.top>d.bottom+r.verticalDiffThreshold&&d.bottom<r.minDownSpace;return this.attachGlobalListeners(e),{popDown:!f,positions:{container:c,root:u,diff:d}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function Gf({selected:t,options:e,isMultiSelect:n}){if(t.length&&e.length){const r=e.filter(i=>t.includes(i.id));return r.length>1&&!n?(console.error(`${qf.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),r.slice(0,1)):r}else return[]}function Bf(t){const e=new Set,n=[];if(t.forEach(r=>{e.has(r.id)?n.push(r.id):e.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${cf(n)}`)}function ss(t,e,n){return n?e.includes(t)?e.filter(r=>r!==t):[...e,t]:[t]}function os({open:t,emitEvent:e},{updateState:n,popUpManager:r,dispatch:i,host:s}){t?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),e&&i(t)}const Vt={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},qf=se()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:t})=>!!t.isDisabled},styles:({hostClasses:t})=>T`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Ce["vira-focus-outline-color"].name}: ${he["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${fe};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Q["vira-form-input-radius"].value};
            transition: border-radius
                ${X["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Mr({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

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
            border: 1px solid ${he["vira-form-border-color"].value};
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
            ${Et};
            border-radius: inherit;
            background-color: ${he["vira-form-background-color"].value};
            color: ${he["vira-form-foreground-color"].value};
        }

        .open-upwards ${Ht} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${ea.menuShadowReversed}
        }

        ${t["vira-dropdown-disabled"].selector} {
            ${pn}
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
    `,events:{selectedChange:we(),openChange:we()},stateInitStatic:{showPopUpResult:void 0,popUpManager:Zo(()=>new zf),navController:void 0},cleanupCallback({state:t,updateState:e}){e({showPopUpResult:void 0}),t.popUpManager.destroy()},initCallback({state:t,updateState:e,host:n,inputs:r,dispatch:i,events:s}){t.popUpManager.listen(aa,()=>{if(e({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");Xn(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),t.popUpManager.listen(la,o=>{const a=o.detail.x,l=r.options[a];if(!l)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||os({emitEvent:!0,open:!1},{dispatch:c=>{i(new s.openChange(c))},host:n,popUpManager:t.popUpManager,updateState:e}),i(new s.selectedChange(ss(l.id,r.selected,!!r.isMultiSelect)))}),e({navController:new sa(n)})},renderCallback({dispatch:t,events:e,state:n,inputs:r,updateState:i,host:s}){var v;Bf(r.options);function o(S){os(S,{dispatch:N=>{t(new e.openChange(N))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=Gf(r),l=r.icon?g`
                  <${L.assign({icon:r.icon})}
                      ${dt(Vt.icon)}
                  ></${L}>
              `:"",c=n.showPopUpResult?n.showPopUpResult.popDown?T`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:T`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function u(){o({emitEvent:!0,open:!n.showPopUpResult})}const d=!a.length,f=r.selectionPrefix&&!d?g`
                      <span class="selected-label-prefix" ${dt(Vt.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",h=d?r.placeholder||"":a.map(S=>S.label).join(", ");return g`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${Yt({open:!!n.showPopUpResult,"open-upwards":!((v=n.showPopUpResult)!=null&&v.popDown)})}"
                ${dt(Vt.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${M("keydown",S=>{!n.showPopUpResult&&S.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${M("click",S=>{S.detail===0&&u()})}
                ${M("mousedown",S=>{S.button===0&&u()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${Yt({"using-placeholder":d})}"
                        title=${Lo(d?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${L.assign({icon:Cf})}
                            class="trigger-icon"
                        ></${L}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${$e(!!n.showPopUpResult,g`
                            <${Ht.assign({options:r.options,selectedOptions:a})}
                                ${M(Ht.events.selectionChange,S=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),t(new e.selectedChange(ss(S.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${dt(Vt.options)}
                            ></${Ht}>
                        `)}
                </div>
            </button>
        `}});var Se;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(Se||(Se={}));const re=se()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===Se.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>T`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Et};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Ce["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
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
            ${pn};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${fe};
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

        ${Mr({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${L} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?g`
                  <${L.assign({icon:t.icon})}></${L}>
              `:"",n=t.text?g`
                  <span class="text-template">${t.text}</span>
              `:"";return g`
            <button ?disabled=${t.disabled}>${e} ${n}</button>
        `}});se()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},slotNames:["header"],styles:({hostClasses:t})=>T`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${fe};
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
    `,events:{expandChange:we()},stateInitStatic:{contentHeight:0},renderCallback({state:t,slotNames:e,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?T`
                  height: ${t.contentHeight}px;
              `:T`
                  height: 0;
              `;return g`
            <button
                class="header-wrapper"
                ${M("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${e.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${qo(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var Xt;(function(t){t.Loading="loading",t.Error="error"})(Xt||(Xt={}));se()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:we(),imageError:we()},styles:({hostClasses:t})=>T`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:n,dispatch:r,events:i}){const s=t.imageUrl,o=e.erroredUrls[s]?g`
                  <slot class="status-wrapper" name=${Xt.Error}>
                      <${L.assign({icon:_f})} class="error"></${L}>
                  </slot>
              `:e.loadedUrls[s]?void 0:g`
                    <slot class="status-wrapper" name=${Xt.Loading}>
                        <${L.assign({icon:Pf})}></${L}>
                    </slot>
                `;return g`
            ${$e(!!o,o)}
            <img
                class=${Yt({hidden:!!o})}
                ${M("load",async()=>{t._debugLoadDelay&&await Qi(t._debugLoadDelay.milliseconds),n({loadedUrls:{...e.loadedUrls,[s]:!0}}),r(new i.imageLoad)})}
                ${M("error",async a=>{t._debugLoadDelay&&await Qi(t._debugLoadDelay.milliseconds),n({erroredUrls:{...e.erroredUrls,[s]:!0}}),r(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function Yn({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(n=>Yn({input:n,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function ca({value:t,allowed:e,blocked:n}){const r=e?Yn({input:t,matcher:e}):!0,i=n?Yn({input:t,matcher:n}):!1;return r&&!i}function ua(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:n}=t.value.split("").reduce((r,i)=>(ca({...t,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:n.join("")}}function Zf({inputs:t,filteredValue:e,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=Vf(n,HTMLInputElement),o=n.data,a=e;let l=s.value??"";if(o)if(o.length===1)ca({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=a,r(o));else{const{filtered:c,blocked:u}=ua({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,r(u)}s.value!==l&&(s.value=l),a!==l&&i(l)}var ze;(function(t){t.Default="text",t.Password="password",t.Email="email"})(ze||(ze={}));const Ae=se()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Ce["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:we(),inputBlocked:we()},styles:({hostClasses:t,cssVars:e})=>T`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ce["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${pn};
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
                ${fe};
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
                ${Et};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${fe};
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
                ${fe};
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

            ${Mr({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${fe};
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
                ${Et};
            }

            button {
                ${fe};
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
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:n,updateState:r,events:i})=>{const{filtered:s}=ua({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),o=t.icon?g`
                  <${L.assign({icon:t.icon})} class="left-side-icon"></${L}>
              `:"",a=t.fitText?T`
                  width: ${n.forcedInputWidth}px;
              `:"";return g`
            <label>
                ${o}
                ${$e(!!t.fitText,g`
                        <span
                            class="size-span"
                            ${qo(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${Kf(t.type,n.showPassword)}
                    style=${a}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${s}
                    ${M("input",l=>{Zf({inputs:t,filteredValue:s,event:l,inputBlockedCallback(c){e(new i.inputBlocked(c))},newValueCallback(c){e(new i.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${$e(!!(t.showClearButton&&t.value),g`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${M("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new i.valueChange(""))})}
                        >
                            <${L.assign({icon:Of})}></${L}>
                        </button>
                    `)}
                ${$e(t.type===ze.Password,g`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${M("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${L.assign({icon:n.showPassword?Df:Lf})}></${L}>
                        </button>
                    `)}
                ${$e(!!t.suffix,g`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Kf(t,e){return t===ze.Password&&e?ze.Default:t||ze.Default}se()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>T`
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
    `,renderCallback({inputs:t}){var n,r;function e(i){t.route&&t.route.router.setRouteOnDirectNavigation(t.route.route,i)&&t.route.scrollToTop&&window.scrollTo(0,0)}if((n=t.link)!=null&&n.newTab)return g`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=t.link?t.link.url:(r=t.route)==null?void 0:r.router.createRouteUrl(t.route.route);return g`
                <a href=${i} rel="noopener noreferrer" ${M("click",e)}>
                    <slot></slot>
                </a>
            `}}});class xr extends Y()("peer-message-received"){}class da extends Y()("peer-message-sent"){}var le=(t=>(t.Connecting="connecting",t.Connected="connected",t.Closing="closing",t.Closed="closed",t))(le||{});class We extends Y()("peer-connection-status"){}class Yf extends nr{constructor(){super(...arguments);it(this,"offer");it(this,"answer");it(this,"dataChannel");it(this,"connection")}async createOffer(){if(this.offer||this.dataChannel||this.connection)throw new Error("offer already created");const n=hs(),r=s=>{_e(this.connection),s.candidate||(n.resolve(),this.connection.removeEventListener("icecandidate",r))};this.connection=new RTCPeerConnection,this.connection.addEventListener("icecandidate",r),this.handleDataChannel(this.connection.createDataChannel("chat")),await this.connection.setLocalDescription(await this.connection.createOffer()),await n.promise;const i=this.connection.localDescription;return _e(i),this.offer=i,this.offer}async acceptAnswer(n){this.answer=k(n,"string")?JSON.parse(n):n,_e(this.connection),_e(this.answer),this.connection.setRemoteDescription(this.answer)}async createAnswer(n){if(this.offer||this.answer||this.dataChannel)throw new Error("offer already accepted");const r=k(n,"string")?JSON.parse(n):n;this.connection=new RTCPeerConnection,this.connection.addEventListener("datachannel",s=>{this.handleDataChannel(s.channel)}),await this.connection.setRemoteDescription(r);const i=await this.connection.createAnswer();return await this.connection.setLocalDescription(i),this.offer=r,this.answer=i,i}sendMessage(n){_e(this.dataChannel),this.dataChannel.send(n),this.dispatch(new da({detail:n}))}handleDataChannel(n){if(this.dataChannel)throw new Error("data channel already created");this.dataChannel=n,this.dispatch(new We({detail:"connecting"})),this.dataChannel.addEventListener("open",()=>{this.dispatch(new We({detail:"connected"}))}),this.dataChannel.addEventListener("closing",()=>{this.dispatch(new We({detail:"closing"}))}),this.dataChannel.addEventListener("close",()=>{this.dispatch(new We({detail:"closed"}))}),this.dataChannel.addEventListener("message",r=>{this.dispatch(new xr({detail:r.data}))})}}var Jn=(t=>(t.Sent="sent",t.Received="received",t))(Jn||{});const as=kr()({tagName:"vir-chat-message",hostClasses:{"vir-chat-message-self":({inputs:t})=>t.message.direction==="sent"},styles:({hostClasses:t})=>T`
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
            ${wn};
        }

        ${t["vir-chat-message-self"].selector} {
            align-items: flex-end;

            padding-right: 0;
            padding-left: 24px;
        }
    `,renderCallback({inputs:t}){const e=Hu(t.message.time,Wu.DatetimeShortWithSeconds);return g`
            <time
                datetime=${Bn(t.message.time,ne.DateTime,!0)}
            >
                ${e}
            </time>
            <p class="message">${t.message.text}</p>
        `}}),ls=kr()({tagName:"vir-chat",styles:T`
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

        .connection-status-indicator.${I(le.Closed)} {
            background-color: red;
        }
        .connection-status-indicator.${I(le.Closing)},
            .connection-status-indicator.${I(le.Connecting)} {
            background-color: orange;
        }
        .connection-status-indicator.${I(le.Closing)},
            .connection-status-indicator.${I(le.Connected)} {
            background-color: lightseagreen;
        }

        ${Ae} {
            width: 100%;
        }

        ${re} {
            align-self: flex-end;
        }
    `,stateInitStatic:{cleanup:void 0,connectionStatus:void 0,chatHistory:[],currentMessage:""},initCallback({inputs:t,state:e,updateState:n}){if(!e.cleanup){const r=[t.connectionController.listen(We,i=>{n({connectionStatus:i.detail})}),t.connectionController.listen(xr,i=>{n({chatHistory:[...e.chatHistory,{direction:Jn.Received,time:Si(),text:i.detail}]})}),t.connectionController.listen(da,i=>{n({chatHistory:[...e.chatHistory,{direction:Jn.Sent,time:Si(),text:i.detail}]})})];n({cleanup(){r.forEach(i=>i())}})}},cleanupCallback({state:t,updateState:e}){var n;(n=t.cleanup)==null||n.call(t),e({cleanup:void 0})},renderCallback({inputs:t,state:e,updateState:n}){var s;const r=e.chatHistory.map(o=>g`
                <${as.assign({message:o})}></${as}>
            `);function i(){const o=e.currentMessage;n({currentMessage:""}),t.connectionController.sendMessage(o)}return g`
            <header>
                Chat
                <div class="connection-status">
                    <div class="connection-status-indicator ${e.connectionStatus}"></div>
                    ${((s=e.connectionStatus)==null?void 0:s.toLowerCase())||"no connection"}
                </div>
            </header>
            <div class="chat-history">${r}</div>
            <${Ae.assign({value:e.currentMessage,disabled:e.connectionStatus!==le.Connected})}
                ${M(Ae.events.valueChange,o=>{n({currentMessage:o.detail})})}
                ${M("keyup",o=>{["Enter","Return","NumpadEnter"].includes(o.code)&&i()})}
            ></${Ae}>
            <${re.assign({text:"send",disabled:e.connectionStatus!==le.Connected})}
                ${M("click",i)}
            ></${re}>
        `}}),cs=Ct({tagName:"vir-how",styles:T`
        :host {
            display: block;
            max-width: 100%;
        }
        h4 {
            ${wn};
        }
    `,renderCallback(){return g`
            <h4>How it works</h4>
            <ol>
                <li>After clicking "host", the host computer generates an "offer" JSON string.</li>
                <li>The host user copies the offer string and sends it to a client user.</li>
                <li>The client user clicks "join" and pastes the offer string.</li>
                <li>The client computer then immediately generates an "answer" JSON string.</li>
                <li>The client user copies this answer string and sends it to the host user.</li>
                <li>The host user pastes the answer string.</li>
                <li>The connection is now established.</li>
                <li>Sending messages back and forth is now possible!</li>
            </ol>
        `}});Ct({tagName:"vir-no-server-app",styles:T`
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
            ${wn};
        }

        textarea {
            width: 300px;
            max-width: 100%;
            height: 150px;
        }
    `,stateInitStatic:{connectionController:Zo(()=>new Yf),connectionMode:void 0,offer:void 0,answer:void 0,connectionStatus:void 0,messageToSend:"",copied:!1,copiedTimeout:void 0},initCallback({state:t,updateState:e}){t.connectionController.listen(xr,n=>{console.log("message",n.detail)}),t.connectionController.listen(We,n=>{e({connectionStatus:n.detail}),console.log("status",n.detail)})},renderCallback({state:t,updateState:e}){const n=g`
            <section class="offer-wrapper host">
                Copy the following "offer" and send it to a client so they can join you:
                <div>
                    <p class="offer">${JSON.stringify(t.offer)}</p>
                    <button
                        ${M("click",async()=>{await window.navigator.clipboard.writeText(JSON.stringify(t.offer)),e({copied:!0}),t.copiedTimeout&&window.clearTimeout(t.copiedTimeout),e({copiedTimeout:window.setTimeout(()=>{e({copied:!1,copiedTimeout:void 0})},2e3)})})}
                    >
                        ${t.copied?"copied":"copy"}
                    </button>
                </div>
                <p>
                    After pasting your offer, the client should provide you with an "answer". Paste
                    the client's answer below:
                </p>
                <textarea
                    ${M("input",async i=>{const s=Bi(i,HTMLTextAreaElement);await t.connectionController.acceptAnswer(s.value)})}
                ></textarea>
            </section>
        `,r=g`
            <section class="offer-wrapper join">
                Paste the host's offer:
                <br />
                <textarea
                    ${M("input",async i=>{const s=Bi(i,HTMLTextAreaElement),o=await t.connectionController.createAnswer(s.value);e({answer:o})})}
                ></textarea>
                ${$e(!!t.answer,g`
                        <br />
                        Copy the following "answer" and send it to the host:
                        <div>
                            <p class="offer">${JSON.stringify(t.answer)}</p>
                            <button
                                ${M("click",async()=>{await window.navigator.clipboard.writeText(JSON.stringify(t.answer)),e({copied:!0}),t.copiedTimeout&&window.clearTimeout(t.copiedTimeout),e({copiedTimeout:window.setTimeout(()=>{e({copied:!1,copiedTimeout:void 0})},2e3)})})}
                            >
                                ${t.copied?"copied":"copy"}
                            </button>
                        </div>
                    `)}
            </section>
        `;return g`
            <${Ae.assign({value:t.messageToSend})}
                ${M(Ae.events.valueChange,i=>{e({messageToSend:i.detail})})}
            ></${Ae}>
            <${re.assign({text:"Send"})}
                ${M("click",()=>{t.messageToSend&&(t.connectionController.sendMessage(t.messageToSend),e({messageToSend:""}))})}
            ></${re}>
        `,g`
            <main>
                <${cs}></${cs}>
                <section class="buttons">
                    <${re.assign({text:"Host",buttonStyle:t.connectionMode==="host"?Se.Default:Se.Outline})}
                        ${M("click",async()=>{if(e({connectionMode:"host"}),!t.offer){const i=await t.connectionController.createOffer();e({offer:i})}})}
                    ></${re}>
                    <${re.assign({text:"Join",buttonStyle:t.connectionMode==="join"?Se.Default:Se.Outline})}
                        ${M("click",()=>{e({connectionMode:"join"})})}
                    ></${re}>
                </section>
                ${t.connectionMode==="host"?n:t.connectionMode==="join"?r:C}
            </main>
            <${ls.assign({connectionController:t.connectionController})}></${ls}>
        `}});
