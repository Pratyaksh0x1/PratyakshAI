(()=>{var _d=Object.create;var tl=Object.defineProperty;var bd=Object.getOwnPropertyDescriptor;var Sd=Object.getOwnPropertyNames;var Ed=Object.getPrototypeOf,Cd=Object.prototype.hasOwnProperty;var Fe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Rd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Sd(t))!Cd.call(e,o)&&o!==n&&tl(e,o,{get:()=>t[o],enumerable:!(r=bd(t,o))||r.enumerable});return e};var Xe=(e,t,n)=>(n=e!=null?_d(Ed(e)):{},Rd(t||!e||!e.__esModule?tl(n,"default",{value:e,enumerable:!0}):n,e));var fl=Fe(C=>{"use strict";var hn=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Md=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),nl=Symbol.iterator;function Bd(e){return e===null||typeof e!="object"?null:(e=nl&&e[nl]||e["@@iterator"],typeof e=="function"?e:null)}var al={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},il=Object.assign,ll={};function Ot(e,t,n){this.props=e,this.context=t,this.refs=ll,this.updater=n||al}Ot.prototype.isReactComponent={};Ot.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sl(){}sl.prototype=Ot.prototype;function Io(e,t,n){this.props=e,this.context=t,this.refs=ll,this.updater=n||al}var Do=Io.prototype=new sl;Do.constructor=Io;il(Do,Ot.prototype);Do.isPureReactComponent=!0;var rl=Array.isArray,ul=Object.prototype.hasOwnProperty,Oo={current:null},cl={key:!0,ref:!0,__self:!0,__source:!0};function dl(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)ul.call(t,r)&&!cl.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:hn,type:e,key:a,ref:i,props:o,_owner:Oo.current}}function Fd(e,t){return{$$typeof:hn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===hn}function qd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ol=/\/+/g;function Ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qd(""+e.key):t.toString(36)}function sr(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case hn:case Td:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ao(i,0):r,rl(o)?(n="",e!=null&&(n=e.replace(ol,"$&/")+"/"),sr(o,t,n,"",function(c){return c})):o!=null&&(Bo(o)&&(o=Fd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ol,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",rl(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ao(a,l);i+=sr(a,t,n,s,o)}else if(s=Bd(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ao(a,l++),i+=sr(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function lr(e,t,n){if(e==null)return e;var r=[],o=0;return sr(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Hd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var re={current:null},ur={transition:null},Ud={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:ur,ReactCurrentOwner:Oo};function pl(){throw Error("act(...) is not supported in production builds of React.")}C.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!Bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};C.Component=Ot;C.Fragment=Md;C.Profiler=zd;C.PureComponent=Io;C.StrictMode=Pd;C.Suspense=Id;C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ud;C.act=pl;C.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=il({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=Oo.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ul.call(t,s)&&!cl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:hn,type:e.type,key:o,ref:a,props:r,_owner:i}};C.createContext=function(e){return e={$$typeof:Ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nd,_context:e},e.Consumer=e};C.createElement=dl;C.createFactory=function(e){var t=dl.bind(null,e);return t.type=e,t};C.createRef=function(){return{current:null}};C.forwardRef=function(e){return{$$typeof:Ad,render:e}};C.isValidElement=Bo;C.lazy=function(e){return{$$typeof:Od,_payload:{_status:-1,_result:e},_init:Hd}};C.memo=function(e,t){return{$$typeof:Dd,type:e,compare:t===void 0?null:t}};C.startTransition=function(e){var t=ur.transition;ur.transition={};try{e()}finally{ur.transition=t}};C.unstable_act=pl;C.useCallback=function(e,t){return re.current.useCallback(e,t)};C.useContext=function(e){return re.current.useContext(e)};C.useDebugValue=function(){};C.useDeferredValue=function(e){return re.current.useDeferredValue(e)};C.useEffect=function(e,t){return re.current.useEffect(e,t)};C.useId=function(){return re.current.useId()};C.useImperativeHandle=function(e,t,n){return re.current.useImperativeHandle(e,t,n)};C.useInsertionEffect=function(e,t){return re.current.useInsertionEffect(e,t)};C.useLayoutEffect=function(e,t){return re.current.useLayoutEffect(e,t)};C.useMemo=function(e,t){return re.current.useMemo(e,t)};C.useReducer=function(e,t,n){return re.current.useReducer(e,t,n)};C.useRef=function(e){return re.current.useRef(e)};C.useState=function(e){return re.current.useState(e)};C.useSyncExternalStore=function(e,t,n){return re.current.useSyncExternalStore(e,t,n)};C.useTransition=function(){return re.current.useTransition()};C.version="18.3.1"});var cr=Fe((Zf,hl)=>{"use strict";hl.exports=fl()});var Sl=Fe(N=>{"use strict";function Uo(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<dr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Ee(e){return e.length===0?null:e[0]}function fr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,c=e[s];if(0>dr(l,n))s<o&&0>dr(c,l)?(e[r]=c,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>dr(c,n))e[r]=c,e[s]=n,r=s;else break e}}return t}function dr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(gl=performance,N.unstable_now=function(){return gl.now()}):(Fo=Date,ml=Fo.now(),N.unstable_now=function(){return Fo.now()-ml});var gl,Fo,ml,Le=[],Ze=[],Wd=1,ye=null,Z=3,hr=!1,wt=!1,mn=!1,wl=typeof setTimeout=="function"?setTimeout:null,kl=typeof clearTimeout=="function"?clearTimeout:null,vl=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Wo(e){for(var t=Ee(Ze);t!==null;){if(t.callback===null)fr(Ze);else if(t.startTime<=e)fr(Ze),t.sortIndex=t.expirationTime,Uo(Le,t);else break;t=Ee(Ze)}}function jo(e){if(mn=!1,Wo(e),!wt)if(Ee(Le)!==null)wt=!0,$o(Go);else{var t=Ee(Ze);t!==null&&Vo(jo,t.startTime-e)}}function Go(e,t){wt=!1,mn&&(mn=!1,kl(vn),vn=-1),hr=!0;var n=Z;try{for(Wo(t),ye=Ee(Le);ye!==null&&(!(ye.expirationTime>t)||e&&!bl());){var r=ye.callback;if(typeof r=="function"){ye.callback=null,Z=ye.priorityLevel;var o=r(ye.expirationTime<=t);t=N.unstable_now(),typeof o=="function"?ye.callback=o:ye===Ee(Le)&&fr(Le),Wo(t)}else fr(Le);ye=Ee(Le)}if(ye!==null)var a=!0;else{var i=Ee(Ze);i!==null&&Vo(jo,i.startTime-t),a=!1}return a}finally{ye=null,Z=n,hr=!1}}var gr=!1,pr=null,vn=-1,xl=5,_l=-1;function bl(){return!(N.unstable_now()-_l<xl)}function qo(){if(pr!==null){var e=N.unstable_now();_l=e;var t=!0;try{t=pr(!0,e)}finally{t?gn():(gr=!1,pr=null)}}else gr=!1}var gn;typeof vl=="function"?gn=function(){vl(qo)}:typeof MessageChannel<"u"?(Ho=new MessageChannel,yl=Ho.port2,Ho.port1.onmessage=qo,gn=function(){yl.postMessage(null)}):gn=function(){wl(qo,0)};var Ho,yl;function $o(e){pr=e,gr||(gr=!0,gn())}function Vo(e,t){vn=wl(function(){e(N.unstable_now())},t)}N.unstable_IdlePriority=5;N.unstable_ImmediatePriority=1;N.unstable_LowPriority=4;N.unstable_NormalPriority=3;N.unstable_Profiling=null;N.unstable_UserBlockingPriority=2;N.unstable_cancelCallback=function(e){e.callback=null};N.unstable_continueExecution=function(){wt||hr||(wt=!0,$o(Go))};N.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xl=0<e?Math.floor(1e3/e):5};N.unstable_getCurrentPriorityLevel=function(){return Z};N.unstable_getFirstCallbackNode=function(){return Ee(Le)};N.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};N.unstable_pauseExecution=function(){};N.unstable_requestPaint=function(){};N.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};N.unstable_scheduleCallback=function(e,t,n){var r=N.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Wd++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Uo(Ze,e),Ee(Le)===null&&e===Ee(Ze)&&(mn?(kl(vn),vn=-1):mn=!0,Vo(jo,n-r))):(e.sortIndex=o,Uo(Le,e),wt||hr||(wt=!0,$o(Go))),e};N.unstable_shouldYield=bl;N.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var Cl=Fe((eh,El)=>{"use strict";El.exports=Sl()});var Pc=Fe(ve=>{"use strict";var jd=cr(),ge=Cl();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ls=new Set,Fn={};function Nt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Fn[e]=t,e=0;e<t.length;e++)Ls.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=Object.prototype.hasOwnProperty,Gd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rl={},Tl={};function $d(e){return ma.call(Tl,e)?!0:ma.call(Rl,e)?!1:Gd.test(e)?Tl[e]=!0:(Rl[e]=!0,!1)}function Vd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Vd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){X[e]=new ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){X[e]=new ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){X[e]=new ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){X[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var si=/[\-:]([a-z])/g;function ui(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(si,ui);X[t]=new ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(si,ui);X[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(si,ui);X[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){X[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)});X.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){X[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function ci(e,t,n,r){var o=X.hasOwnProperty(t)?X[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,o,r)&&(n=null),r||o===null?$d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),di=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),As=Symbol.for("react.provider"),Is=Symbol.for("react.context"),pi=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),wa=Symbol.for("react.suspense_list"),fi=Symbol.for("react.memo"),et=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ds=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ml=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ko;function Cn(e){if(Ko===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ko=t&&t[1]||""}return`
`+Ko+e}var Yo=!1;function Qo(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function Yd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case qt:return"Portal";case va:return"Profiler";case di:return"StrictMode";case ya:return"Suspense";case wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Is:return(e.displayName||"Context")+".Consumer";case As:return(e._context.displayName||"Context")+".Provider";case pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fi:return t=e.displayName||null,t!==null?t:ka(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return ka(e(t))}catch{}}return null}function Qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(t);case 8:return t===di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Os(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=Os(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=Xd(e))}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Os(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xa(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fs(e,t){t=t.checked,t!=null&&ci(e,"checked",t,!1)}function _a(e,t){Fs(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ba(e,t.type,n):t.hasOwnProperty("defaultValue")&&ba(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ba(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(Rn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function qs(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ll(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Us=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zd=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){Zd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pn[t]=Pn[e]})});function Ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+t).trim():t+"px"}function js(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(e,t){if(t){if(Jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function Ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ta=null;function hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,Jt=null,en=null;function Al(e){if(e=or(e)){if(typeof Ma!="function")throw Error(v(280));var t=e.stateNode;t&&(t=ko(t),Ma(e.stateNode,e.type,t))}}function Gs(e){Jt?en?en.push(e):en=[e]:Jt=e}function $s(){if(Jt){var e=Jt,t=en;if(en=Jt=null,Al(e),t)for(e=0;e<t.length;e++)Al(t[e])}}function Vs(e,t){return e(t)}function Ks(){}var Xo=!1;function Ys(e,t,n){if(Xo)return e(t,n);Xo=!0;try{return Vs(e,t,n)}finally{Xo=!1,(Jt!==null||en!==null)&&(Ks(),$s())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var Pa=!1;if(Ge)try{Bt={},Object.defineProperty(Bt,"passive",{get:function(){Pa=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{Pa=!1}var Bt;function ep(e,t,n,r,o,a,i,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var zn=!1,$r=null,Vr=!1,za=null,tp={onError:function(e){zn=!0,$r=e}};function np(e,t,n,r,o,a,i,l,s){zn=!1,$r=null,ep.apply(tp,arguments)}function rp(e,t,n,r,o,a,i,l,s){if(np.apply(this,arguments),zn){if(zn){var c=$r;zn=!1,$r=null}else throw Error(v(198));Vr||(Vr=!0,za=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(Lt(e)!==e)throw Error(v(188))}function op(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Il(o),e;if(a===r)return Il(o),t;a=a.sibling}throw Error(v(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Xs(e){return e=op(e),e!==null?Zs(e):null}function Zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zs(e);if(t!==null)return t;e=e.sibling}return null}var Js=ge.unstable_scheduleCallback,Dl=ge.unstable_cancelCallback,ap=ge.unstable_shouldYield,ip=ge.unstable_requestPaint,U=ge.unstable_now,lp=ge.unstable_getCurrentPriorityLevel,gi=ge.unstable_ImmediatePriority,eu=ge.unstable_UserBlockingPriority,Kr=ge.unstable_NormalPriority,sp=ge.unstable_LowPriority,tu=ge.unstable_IdlePriority,mo=null,Oe=null;function up(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:pp,cp=Math.log,dp=Math.LN2;function pp(e){return e>>>=0,e===0?32:31-(cp(e)/dp|0)|0}var wr=64,kr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=Tn(l):(a&=i,a!==0&&(r=Tn(a)))}else i=n&~o,i!==0?r=Tn(i):a!==0&&(r=Tn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pe(t),o=1<<n,r|=e[n],t&=~o;return r}function fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Pe(a),l=1<<i,s=o[i];s===-1?((l&n)===0||(l&r)!==0)&&(o[i]=fp(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=wr;return wr<<=1,(wr&4194240)===0&&(wr=64),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pe(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Pe(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function mi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var P=0;function ru(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ou,vi,au,iu,lu,La=!1,xr=[],it=null,lt=null,st=null,Un=new Map,Wn=new Map,nt=[],mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function wn(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=or(t),t!==null&&vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vp(e,t,n,r,o){switch(t){case"focusin":return it=wn(it,e,t,n,r,o),!0;case"dragenter":return lt=wn(lt,e,t,n,r,o),!0;case"mouseover":return st=wn(st,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Un.set(a,wn(Un.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Wn.set(a,wn(Wn.get(a)||null,e,t,n,r,o)),!0}return!1}function su(e){var t=_t(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qs(n),t!==null){e.blockedOn=t,lu(e.priority,function(){au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ta=r,n.target.dispatchEvent(r),Ta=null}else return t=or(n),t!==null&&vi(t),e.blockedOn=n,!1;t.shift()}return!0}function Bl(e,t,n){Ir(e)&&n.delete(t)}function yp(){La=!1,it!==null&&Ir(it)&&(it=null),lt!==null&&Ir(lt)&&(lt=null),st!==null&&Ir(st)&&(st=null),Un.forEach(Bl),Wn.forEach(Bl)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,La||(La=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,yp)))}function jn(e){function t(o){return kn(o,e)}if(0<xr.length){kn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&kn(it,e),lt!==null&&kn(lt,e),st!==null&&kn(st,e),Un.forEach(t),Wn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)su(n),n.blockedOn===null&&nt.shift()}var tn=Ye.ReactCurrentBatchConfig,Qr=!0;function wp(e,t,n,r){var o=P,a=tn.transition;tn.transition=null;try{P=1,yi(e,t,n,r)}finally{P=o,tn.transition=a}}function kp(e,t,n,r){var o=P,a=tn.transition;tn.transition=null;try{P=4,yi(e,t,n,r)}finally{P=o,tn.transition=a}}function yi(e,t,n,r){if(Qr){var o=Aa(e,t,n,r);if(o===null)aa(e,t,r,Xr,n),Ol(e,r);else if(vp(o,e,t,n,r))r.stopPropagation();else if(Ol(e,r),t&4&&-1<mp.indexOf(e)){for(;o!==null;){var a=or(o);if(a!==null&&ou(a),a=Aa(e,t,n,r),a===null&&aa(e,t,r,Xr,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var Xr=null;function Aa(e,t,n,r){if(Xr=null,e=hi(r),e=_t(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case gi:return 1;case eu:return 4;case Kr:case sp:return 16;case tu:return 536870912;default:return 16}default:return 16}}var ot=null,wi=null,Dr=null;function cu(){if(Dr)return Dr;var e,t=wi,n=t.length,r,o="value"in ot?ot.value:ot.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Dr=o.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Fl(){return!1}function me(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_r:Fl,this.isPropagationStopped=Fl,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=me(pn),rr=q({},pn,{view:0,detail:0}),xp=me(rr),Jo,ea,xn,vo=q({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Jo=e.screenX-xn.screenX,ea=e.screenY-xn.screenY):ea=Jo=0,xn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),ql=me(vo),_p=q({},vo,{dataTransfer:0}),bp=me(_p),Sp=q({},rr,{relatedTarget:0}),ta=me(Sp),Ep=q({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=me(Ep),Rp=q({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=me(Rp),Mp=q({},pn,{data:0}),Hl=me(Mp),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function xi(){return Lp}var Ap=q({},rr,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xi,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ip=me(Ap),Dp=q({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ul=me(Dp),Op=q({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xi}),Bp=me(Op),Fp=q({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=me(Fp),Hp=q({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=me(Hp),Wp=[9,13,27,32],_i=Ge&&"CompositionEvent"in window,Nn=null;Ge&&"documentMode"in document&&(Nn=document.documentMode);var jp=Ge&&"TextEvent"in window&&!Nn,du=Ge&&(!_i||Nn&&8<Nn&&11>=Nn),Wl=" ",jl=!1;function pu(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function Gp(e,t){switch(e){case"compositionend":return fu(t);case"keypress":return t.which!==32?null:(jl=!0,Wl);case"textInput":return e=t.data,e===Wl&&jl?null:e;default:return null}}function $p(e,t){if(Ut)return e==="compositionend"||!_i&&pu(e,t)?(e=cu(),Dr=wi=ot=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return du&&t.locale!=="ko"?null:t.data;default:return null}}var Vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vp[e.type]:t==="textarea"}function hu(e,t,n,r){Gs(r),t=Zr(t,"onChange"),0<t.length&&(n=new ki("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Gn=null;function Kp(e){Eu(e,0)}function yo(e){var t=Gt(e);if(Bs(t))return e}function Yp(e,t){if(e==="change")return t}var gu=!1;Ge&&(Ge?(Sr="oninput"in document,Sr||(na=document.createElement("div"),na.setAttribute("oninput","return;"),Sr=typeof na.oninput=="function"),br=Sr):br=!1,gu=br&&(!document.documentMode||9<document.documentMode));var br,Sr,na;function $l(){Ln&&(Ln.detachEvent("onpropertychange",mu),Gn=Ln=null)}function mu(e){if(e.propertyName==="value"&&yo(Gn)){var t=[];hu(t,Gn,e,hi(e)),Ys(Kp,t)}}function Qp(e,t,n){e==="focusin"?($l(),Ln=t,Gn=n,Ln.attachEvent("onpropertychange",mu)):e==="focusout"&&$l()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(Gn)}function Zp(e,t){if(e==="click")return yo(t)}function Jp(e,t){if(e==="input"||e==="change")return yo(t)}function e0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:e0;function $n(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ma.call(t,o)||!Ne(e[o],t[o]))return!1}return!0}function Vl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kl(e,t){var n=Vl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vl(n)}}function vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yu(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t0(e){var t=yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vu(n.ownerDocument.documentElement,n)){if(r!==null&&bi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Kl(n,a);var i=Kl(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n0=Ge&&"documentMode"in document&&11>=document.documentMode,Wt=null,Ia=null,An=null,Da=!1;function Yl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Da||Wt==null||Wt!==Gr(r)||(r=Wt,"selectionStart"in r&&bi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&$n(An,r)||(An=r,r=Zr(Ia,"onSelect"),0<r.length&&(t=new ki("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jt={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},ra={},wu={};Ge&&(wu=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function wo(e){if(ra[e])return ra[e];if(!jt[e])return e;var t=jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wu)return ra[e]=t[n];return e}var ku=wo("animationend"),xu=wo("animationiteration"),_u=wo("animationstart"),bu=wo("transitionend"),Su=new Map,Ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Su.set(e,t),Nt(t,[e])}for(Cr=0;Cr<Ql.length;Cr++)Rr=Ql[Cr],Xl=Rr.toLowerCase(),Zl=Rr[0].toUpperCase()+Rr.slice(1),mt(Xl,"on"+Zl);var Rr,Xl,Zl,Cr;mt(ku,"onAnimationEnd");mt(xu,"onAnimationIteration");mt(_u,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(bu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Jl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function Eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Jl(o,l,c),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,c=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Jl(o,l,c),a=s}}}if(Vr)throw e=za,Vr=!1,za=null,e}function A(e,t){var n=t[Ha];n===void 0&&(n=t[Ha]=new Set);var r=e+"__bubble";n.has(r)||(Cu(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),Cu(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[Tr]){e[Tr]=!0,Ls.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,oa("selectionchange",!1,t))}}function Cu(e,t,n,r){switch(uu(t)){case 1:var o=wp;break;case 4:o=kp;break;default:o=yi}n=o.bind(null,t,n,e),o=void 0,!Pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=_t(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Ys(function(){var c=a,f=hi(n),g=[];e:{var h=Su.get(e);if(h!==void 0){var y=ki,w=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":y=Ip;break;case"focusin":w="focus",y=ta;break;case"focusout":w="blur",y=ta;break;case"beforeblur":case"afterblur":y=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Bp;break;case ku:case xu:case _u:y=Cp;break;case bu:y=qp;break;case"scroll":y=xp;break;case"wheel":y=Up;break;case"copy":case"cut":case"paste":y=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ul}var x=(t&4)!==0,O=!x&&e==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var u=c,p;u!==null;){p=u;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,d!==null&&(m=Hn(u,d),m!=null&&x.push(Kn(u,m,p)))),O)break;u=u.return}0<x.length&&(h=new y(h,w,null,n,f),g.push({event:h,listeners:x}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Ta&&(w=n.relatedTarget||n.fromElement)&&(_t(w)||w[$e]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?_t(w):null,w!==null&&(O=Lt(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(x=ql,m="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ul,m="onPointerLeave",d="onPointerEnter",u="pointer"),O=y==null?h:Gt(y),p=w==null?h:Gt(w),h=new x(m,u+"leave",y,n,f),h.target=O,h.relatedTarget=p,m=null,_t(f)===c&&(x=new x(d,u+"enter",w,n,f),x.target=p,x.relatedTarget=O,m=x),O=m,y&&w)t:{for(x=y,d=w,u=0,p=x;p;p=Ft(p))u++;for(p=0,m=d;m;m=Ft(m))p++;for(;0<u-p;)x=Ft(x),u--;for(;0<p-u;)d=Ft(d),p--;for(;u--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ft(x),d=Ft(d)}x=null}else x=null;y!==null&&es(g,h,y,x,!1),w!==null&&O!==null&&es(g,O,w,x,!0)}}e:{if(h=c?Gt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var _=Yp;else if(Gl(h))if(gu)_=Jp;else{_=Xp;var S=Qp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=Zp);if(_&&(_=_(e,c))){hu(g,_,n,f);break e}S&&S(e,h,c),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ba(h,"number",h.value)}switch(S=c?Gt(c):window,e){case"focusin":(Gl(S)||S.contentEditable==="true")&&(Wt=S,Ia=c,An=null);break;case"focusout":An=Ia=Wt=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,Yl(g,n,f);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":Yl(g,n,f)}var b;if(_i)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ut?pu(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(du&&n.locale!=="ko"&&(Ut||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ut&&(b=cu()):(ot=f,wi="value"in ot?ot.value:ot.textContent,Ut=!0)),S=Zr(c,E),0<S.length&&(E=new Hl(E,e,null,n,f),g.push({event:E,listeners:S}),b?E.data=b:(b=fu(n),b!==null&&(E.data=b)))),(b=jp?Gp(e,n):$p(e,n))&&(c=Zr(c,"onBeforeInput"),0<c.length&&(f=new Hl("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:c}),f.data=b))}Eu(g,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Hn(e,n),a!=null&&r.unshift(Kn(e,a,o)),a=Hn(e,t),a!=null&&r.push(Kn(e,a,o))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function es(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Hn(n,a),s!=null&&i.unshift(Kn(n,s,l))):o||(s=Hn(n,a),s!=null&&i.push(Kn(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function ts(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(a0,"")}function Mr(e,t,n){if(t=ts(t),ts(e)!==t&&n)throw Error(v(425))}function Jr(){}var Oa=null,Ba=null;function Fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,ns=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof ns<"u"?function(e){return ns.resolve(null).then(e).catch(s0)}:qa;function s0(e){setTimeout(function(){throw e})}function ia(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);jn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),De="__reactFiber$"+fn,Yn="__reactProps$"+fn,$e="__reactContainer$"+fn,Ha="__reactEvents$"+fn,u0="__reactListeners$"+fn,c0="__reactHandles$"+fn;function _t(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rs(e);e!==null;){if(n=e[De])return n;e=rs(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[De]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ko(e){return e[Yn]||null}var Ua=[],$t=-1;function vt(e){return{current:e}}function I(e){0>$t||(e.current=Ua[$t],Ua[$t]=null,$t--)}function L(e,t){$t++,Ua[$t]=e.current,e.current=t}var gt={},ne=vt(gt),ue=vt(!1),Rt=gt;function an(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ce(e){return e=e.childContextTypes,e!=null}function eo(){I(ue),I(ne)}function os(e,t,n){if(ne.current!==gt)throw Error(v(168));L(ne,t),L(ue,n)}function Ru(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(v(108,Qd(e)||"Unknown",o));return q({},n,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Rt=ne.current,L(ne,e),L(ue,ue.current),!0}function as(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=Ru(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,I(ue),I(ne),L(ne,e)):I(ue),L(ue,n)}var He=null,xo=!1,la=!1;function Tu(e){He===null?He=[e]:He.push(e)}function d0(e){xo=!0,Tu(e)}function yt(){if(!la&&He!==null){la=!0;var e=0,t=P;try{var n=He;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,xo=!1}catch(o){throw He!==null&&(He=He.slice(e+1)),Js(gi,yt),o}finally{P=t,la=!1}}return null}var Vt=[],Kt=0,no=null,ro=0,we=[],ke=0,Tt=null,Ue=1,We="";function kt(e,t){Vt[Kt++]=ro,Vt[Kt++]=no,no=e,ro=t}function Mu(e,t,n){we[ke++]=Ue,we[ke++]=We,we[ke++]=Tt,Tt=e;var r=Ue;e=We;var o=32-Pe(r)-1;r&=~(1<<o),n+=1;var a=32-Pe(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ue=1<<32-Pe(t)+o|n<<o|r,We=a+e}else Ue=1<<a|n<<o|r,We=e}function Si(e){e.return!==null&&(kt(e,1),Mu(e,1,0))}function Ei(e){for(;e===no;)no=Vt[--Kt],Vt[Kt]=null,ro=Vt[--Kt],Vt[Kt]=null;for(;e===Tt;)Tt=we[--ke],we[ke]=null,We=we[--ke],we[ke]=null,Ue=we[--ke],we[ke]=null}var he=null,fe=null,D=!1,Me=null;function Pu(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function is(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,fe=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ue,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,fe=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ja(e){if(D){var t=fe;if(t){var n=t;if(!is(e,t)){if(Wa(e))throw Error(v(418));t=ut(n.nextSibling);var r=he;t&&is(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,D=!1,he=e)}}else{if(Wa(e))throw Error(v(418));e.flags=e.flags&-4097|2,D=!1,he=e}}}function ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function Pr(e){if(e!==he)return!1;if(!D)return ls(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fa(e.type,e.memoizedProps)),t&&(t=fe)){if(Wa(e))throw zu(),Error(v(418));for(;t;)Pu(e,t),t=ut(t.nextSibling)}if(ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fe=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fe=null}}else fe=he?ut(e.stateNode.nextSibling):null;return!0}function zu(){for(var e=fe;e;)e=ut(e.nextSibling)}function ln(){fe=he=null,D=!1}function Ci(e){Me===null?Me=[e]:Me.push(e)}var p0=Ye.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ss(e){var t=e._init;return t(e._payload)}function Nu(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=ft(d,u),d.index=0,d.sibling=null,d}function a(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,u,p,m){return u===null||u.tag!==6?(u=ha(p,d.mode,m),u.return=d,u):(u=o(u,p),u.return=d,u)}function s(d,u,p,m){var _=p.type;return _===Ht?f(d,u,p.props.children,m,p.key):u!==null&&(u.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===et&&ss(_)===u.type)?(m=o(u,p.props),m.ref=_n(d,u,p),m.return=d,m):(m=jr(p.type,p.key,p.props,null,d.mode,m),m.ref=_n(d,u,p),m.return=d,m)}function c(d,u,p,m){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ga(p,d.mode,m),u.return=d,u):(u=o(u,p.children||[]),u.return=d,u)}function f(d,u,p,m,_){return u===null||u.tag!==7?(u=Ct(p,d.mode,m,_),u.return=d,u):(u=o(u,p),u.return=d,u)}function g(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ha(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case mr:return p=jr(u.type,u.key,u.props,null,d.mode,p),p.ref=_n(d,null,u),p.return=d,p;case qt:return u=ga(u,d.mode,p),u.return=d,u;case et:var m=u._init;return g(d,m(u._payload),p)}if(Rn(u)||yn(u))return u=Ct(u,d.mode,p,null),u.return=d,u;zr(d,u)}return null}function h(d,u,p,m){var _=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:l(d,u,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:return p.key===_?s(d,u,p,m):null;case qt:return p.key===_?c(d,u,p,m):null;case et:return _=p._init,h(d,u,_(p._payload),m)}if(Rn(p)||yn(p))return _!==null?null:f(d,u,p,m,null);zr(d,p)}return null}function y(d,u,p,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return d=d.get(p)||null,l(u,d,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mr:return d=d.get(m.key===null?p:m.key)||null,s(u,d,m,_);case qt:return d=d.get(m.key===null?p:m.key)||null,c(u,d,m,_);case et:var S=m._init;return y(d,u,p,S(m._payload),_)}if(Rn(m)||yn(m))return d=d.get(p)||null,f(u,d,m,_,null);zr(u,m)}return null}function w(d,u,p,m){for(var _=null,S=null,b=u,E=u=0,j=null;b!==null&&E<p.length;E++){b.index>E?(j=b,b=null):j=b.sibling;var T=h(d,b,p[E],m);if(T===null){b===null&&(b=j);break}e&&b&&T.alternate===null&&t(d,b),u=a(T,u,E),S===null?_=T:S.sibling=T,S=T,b=j}if(E===p.length)return n(d,b),D&&kt(d,E),_;if(b===null){for(;E<p.length;E++)b=g(d,p[E],m),b!==null&&(u=a(b,u,E),S===null?_=b:S.sibling=b,S=b);return D&&kt(d,E),_}for(b=r(d,b);E<p.length;E++)j=y(b,d,E,p[E],m),j!==null&&(e&&j.alternate!==null&&b.delete(j.key===null?E:j.key),u=a(j,u,E),S===null?_=j:S.sibling=j,S=j);return e&&b.forEach(function(Qe){return t(d,Qe)}),D&&kt(d,E),_}function x(d,u,p,m){var _=yn(p);if(typeof _!="function")throw Error(v(150));if(p=_.call(p),p==null)throw Error(v(151));for(var S=_=null,b=u,E=u=0,j=null,T=p.next();b!==null&&!T.done;E++,T=p.next()){b.index>E?(j=b,b=null):j=b.sibling;var Qe=h(d,b,T.value,m);if(Qe===null){b===null&&(b=j);break}e&&b&&Qe.alternate===null&&t(d,b),u=a(Qe,u,E),S===null?_=Qe:S.sibling=Qe,S=Qe,b=j}if(T.done)return n(d,b),D&&kt(d,E),_;if(b===null){for(;!T.done;E++,T=p.next())T=g(d,T.value,m),T!==null&&(u=a(T,u,E),S===null?_=T:S.sibling=T,S=T);return D&&kt(d,E),_}for(b=r(d,b);!T.done;E++,T=p.next())T=y(b,d,E,T.value,m),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?E:T.key),u=a(T,u,E),S===null?_=T:S.sibling=T,S=T);return e&&b.forEach(function(xd){return t(d,xd)}),D&&kt(d,E),_}function O(d,u,p,m){if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:e:{for(var _=p.key,S=u;S!==null;){if(S.key===_){if(_=p.type,_===Ht){if(S.tag===7){n(d,S.sibling),u=o(S,p.props.children),u.return=d,d=u;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===et&&ss(_)===S.type){n(d,S.sibling),u=o(S,p.props),u.ref=_n(d,S,p),u.return=d,d=u;break e}n(d,S);break}else t(d,S);S=S.sibling}p.type===Ht?(u=Ct(p.props.children,d.mode,m,p.key),u.return=d,d=u):(m=jr(p.type,p.key,p.props,null,d.mode,m),m.ref=_n(d,u,p),m.return=d,d=m)}return i(d);case qt:e:{for(S=p.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=o(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ga(p,d.mode,m),u.return=d,d=u}return i(d);case et:return S=p._init,O(d,u,S(p._payload),m)}if(Rn(p))return w(d,u,p,m);if(yn(p))return x(d,u,p,m);zr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,p),u.return=d,d=u):(n(d,u),u=ha(p,d.mode,m),u.return=d,d=u),i(d)):n(d,u)}return O}var sn=Nu(!0),Lu=Nu(!1),oo=vt(null),ao=null,Yt=null,Ri=null;function Ti(){Ri=Yt=ao=null}function Mi(e){var t=oo.current;I(oo),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){ao=e,Ri=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(se=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(Ri!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(ao===null)throw Error(v(308));Yt=e,ao.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var bt=null;function Pi(e){bt===null?bt=[e]:bt.push(e)}function Au(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Pi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ve(e,r)}function Ve(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ve(e,n)}return o=r.interleaved,o===null?(t.next=t,Pi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ve(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mi(e,n)}}function us(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var o=e.updateQueue;tt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,i===null?a=c:i.next=c,i=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(a!==null){var g=o.baseState;i=0,f=c=s=null,l=a;do{var h=l.lane,y=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,x=l;switch(h=t,y=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){g=w.call(y,g,h);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(y,g,h):w,h==null)break e;g=q({},g,h);break e;case 2:tt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=y,s=g):f=f.next=y,i|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(s=g),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Pt|=i,e.lanes=i,e.memoizedState=g}}function cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var ar={},Be=vt(ar),Qn=vt(ar),Xn=vt(ar);function St(e){if(e===ar)throw Error(v(174));return e}function Ni(e,t){switch(L(Xn,t),L(Qn,e),L(Be,ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ea(t,e)}I(Be),L(Be,t)}function un(){I(Be),I(Qn),I(Xn)}function Du(e){St(Xn.current);var t=St(Be.current),n=Ea(t,e.type);t!==n&&(L(Qn,e),L(Be,n))}function Li(e){Qn.current===e&&(I(Be),I(Qn))}var B=vt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function Ai(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var Fr=Ye.ReactCurrentDispatcher,ua=Ye.ReactCurrentBatchConfig,Mt=0,F=null,G=null,V=null,so=!1,In=!1,Zn=0,f0=0;function J(){throw Error(v(321))}function Ii(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ne(e[n],t[n]))return!1;return!0}function Di(e,t,n,r,o,a){if(Mt=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?v0:y0,e=n(r,o),In){a=0;do{if(In=!1,Zn=0,25<=a)throw Error(v(301));a+=1,V=G=null,t.updateQueue=null,Fr.current=w0,e=n(r,o)}while(In)}if(Fr.current=uo,t=G!==null&&G.next!==null,Mt=0,V=G=F=null,so=!1,t)throw Error(v(300));return e}function Oi(){var e=Zn!==0;return Zn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return V===null?F.memoizedState=V=e:V=V.next=e,V}function Se(){if(G===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=V===null?F.memoizedState:V.next;if(t!==null)V=t,G=e;else{if(e===null)throw Error(v(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},V===null?F.memoizedState=V=e:V=V.next=e}return V}function Jn(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=Se(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=G,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,c=a;do{var f=c.lane;if((Mt&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=g,i=r):s=s.next=g,F.lanes|=f,Pt|=f}c=c.next}while(c!==null&&c!==a);s===null?i=r:s.next=l,Ne(r,t.memoizedState)||(se=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,F.lanes|=a,Pt|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function da(e){var t=Se(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Ne(a,t.memoizedState)||(se=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ou(){}function Bu(e,t){var n=F,r=Se(),o=t(),a=!Ne(r.memoizedState,o);if(a&&(r.memoizedState=o,se=!0),r=r.queue,Bi(Hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||V!==null&&V.memoizedState.tag&1){if(n.flags|=2048,er(9,qu.bind(null,n,r,o,t),void 0,null),K===null)throw Error(v(349));(Mt&30)!==0||Fu(n,t,o)}return o}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qu(e,t,n,r){t.value=n,t.getSnapshot=r,Uu(t)&&Wu(e)}function Hu(e,t,n){return n(function(){Uu(t)&&Wu(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ne(e,n)}catch{return!0}}function Wu(e){var t=Ve(e,1);t!==null&&ze(t,e,1,-1)}function ds(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,F,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ju(){return Se().memoizedState}function qr(e,t,n,r){var o=Ie();F.flags|=e,o.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function _o(e,t,n,r){var o=Se();r=r===void 0?null:r;var a=void 0;if(G!==null){var i=G.memoizedState;if(a=i.destroy,r!==null&&Ii(r,i.deps)){o.memoizedState=er(t,n,a,r);return}}F.flags|=e,o.memoizedState=er(1|t,n,a,r)}function ps(e,t){return qr(8390656,8,e,t)}function Bi(e,t){return _o(2048,8,e,t)}function Gu(e,t){return _o(4,2,e,t)}function $u(e,t){return _o(4,4,e,t)}function Vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,n){return n=n!=null?n.concat([e]):null,_o(4,4,Vu.bind(null,t,e),n)}function Fi(){}function Yu(e,t){var n=Se();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ii(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=Se();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ii(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xu(e,t,n){return(Mt&21)===0?(e.baseState&&(e.baseState=!1,se=!0),e.memoizedState=n):(Ne(n,t)||(n=nu(),F.lanes|=n,Pt|=n,e.baseState=!0),t)}function h0(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{P=n,ua.transition=r}}function Zu(){return Se().memoizedState}function g0(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ju(e))ec(t,n);else if(n=Au(e,t,n,r),n!==null){var o=ae();ze(n,e,r,o),tc(n,t,r)}}function m0(e,t,n){var r=pt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))ec(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,Ne(l,i)){var s=t.interleaved;s===null?(o.next=o,Pi(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Au(e,t,o,r),n!==null&&(o=ae(),ze(n,e,r,o),tc(n,t,r))}}function Ju(e){var t=e.alternate;return e===F||t!==null&&t===F}function ec(e,t){In=so=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mi(e,n)}}var uo={readContext:be,useCallback:J,useContext:J,useEffect:J,useImperativeHandle:J,useInsertionEffect:J,useLayoutEffect:J,useMemo:J,useReducer:J,useRef:J,useState:J,useDebugValue:J,useDeferredValue:J,useTransition:J,useMutableSource:J,useSyncExternalStore:J,useId:J,unstable_isNewReconciler:!1},v0={readContext:be,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:ps,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qr(4194308,4,Vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return qr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=g0.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:ds,useDebugValue:Fi,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=ds(!1),t=e[0];return e=h0.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,o=Ie();if(D){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),K===null)throw Error(v(349));(Mt&30)!==0||Fu(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,ps(Hu.bind(null,r,a,e),[e]),r.flags|=2048,er(9,qu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ie(),t=K.identifierPrefix;if(D){var n=We,r=Ue;n=(r&~(1<<32-Pe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y0={readContext:be,useCallback:Yu,useContext:be,useEffect:Bi,useImperativeHandle:Ku,useInsertionEffect:Gu,useLayoutEffect:$u,useMemo:Qu,useReducer:ca,useRef:ju,useState:function(){return ca(Jn)},useDebugValue:Fi,useDeferredValue:function(e){var t=Se();return Xu(t,G.memoizedState,e)},useTransition:function(){var e=ca(Jn)[0],t=Se().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Bu,useId:Zu,unstable_isNewReconciler:!1},w0={readContext:be,useCallback:Yu,useContext:be,useEffect:Bi,useImperativeHandle:Ku,useInsertionEffect:Gu,useLayoutEffect:$u,useMemo:Qu,useReducer:da,useRef:ju,useState:function(){return da(Jn)},useDebugValue:Fi,useDeferredValue:function(e){var t=Se();return G===null?t.memoizedState=e:Xu(t,G.memoizedState,e)},useTransition:function(){var e=da(Jn)[0],t=Se().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Bu,useId:Zu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $a(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bo={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),o=pt(e),a=je(r,o);a.payload=t,n!=null&&(a.callback=n),t=ct(e,a,o),t!==null&&(ze(t,e,o,r),Br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),o=pt(e),a=je(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ct(e,a,o),t!==null&&(ze(t,e,o,r),Br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=pt(e),o=je(n,r);o.tag=2,t!=null&&(o.callback=t),t=ct(e,o,r),t!==null&&(ze(t,e,r,n),Br(t,e,r))}};function fs(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(o,a):!0}function nc(e,t,n){var r=!1,o=gt,a=t.contextType;return typeof a=="object"&&a!==null?a=be(a):(o=ce(t)?Rt:ne.current,r=t.contextTypes,a=(r=r!=null)?an(e,o):gt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zi(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=be(a):(a=ce(t)?Rt:ne.current,o.context=an(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&($a(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&bo.enqueueReplaceState(o,o.state,null),io(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Yd(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ka(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function rc(e,t,n){n=je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){po||(po=!0,oi=r),Ka(e,t)},n}function oc(e,t,n){n=je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ka(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ka(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function gs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new k0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=A0.bind(null,e,t,n),t.then(e,e))}function ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vs(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=je(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var x0=Ye.ReactCurrentOwner,se=!1;function oe(e,t,n,r){t.child=e===null?Lu(t,null,n,r):sn(t,e.child,n,r)}function ys(e,t,n,r,o){n=n.render;var a=t.ref;return nn(t,o),r=Di(e,t,n,r,a,o),n=Oi(),e!==null&&!se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(D&&n&&Si(t),t.flags|=1,oe(e,t,r,o),t.child)}function ws(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Vi(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ac(e,t,a,r,o)):(e=jr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(i,r)&&e.ref===t.ref)return Ke(e,t,o)}return t.flags|=1,e=ft(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if($n(a,r)&&e.ref===t.ref)if(se=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(se=!0);else return t.lanes=e.lanes,Ke(e,t,o)}return Ya(e,t,n,r,o)}function ic(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Xt,pe),pe|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(Xt,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,L(Xt,pe),pe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,L(Xt,pe),pe|=r;return oe(e,t,o,n),t.child}function lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ya(e,t,n,r,o){var a=ce(n)?Rt:ne.current;return a=an(t,a),nn(t,o),n=Di(e,t,n,r,a,o),r=Oi(),e!==null&&!se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(D&&r&&Si(t),t.flags|=1,oe(e,t,n,o),t.child)}function ks(e,t,n,r,o){if(ce(n)){var a=!0;to(t)}else a=!1;if(nn(t,o),t.stateNode===null)Hr(e,t),nc(t,n,r),Va(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=ce(n)?Rt:ne.current,c=an(t,c));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==c)&&hs(t,i,r,c),tt=!1;var h=t.memoizedState;i.state=h,io(t,r,i,o),s=t.memoizedState,l!==r||h!==s||ue.current||tt?(typeof f=="function"&&($a(t,n,f,r),s=t.memoizedState),(l=tt||fs(t,n,l,r,h,s,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Iu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Re(t.type,l),i.props=c,g=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=be(s):(s=ce(n)?Rt:ne.current,s=an(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==g||h!==s)&&hs(t,i,r,s),tt=!1,h=t.memoizedState,i.state=h,io(t,r,i,o);var w=t.memoizedState;l!==g||h!==w||ue.current||tt?(typeof y=="function"&&($a(t,n,y,r),w=t.memoizedState),(c=tt||fs(t,n,c,r,h,w,s)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Qa(e,t,n,r,a,o)}function Qa(e,t,n,r,o,a){lc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&as(t,n,!1),Ke(e,t,a);r=t.stateNode,x0.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=sn(t,e.child,null,a),t.child=sn(t,null,l,a)):oe(e,t,l,a),t.memoizedState=r.state,o&&as(t,n,!0),t.child}function sc(e){var t=e.stateNode;t.pendingContext?os(e,t.pendingContext,t.pendingContext!==t.context):t.context&&os(e,t.context,!1),Ni(e,t.containerInfo)}function xs(e,t,n,r,o){return ln(),Ci(o),t.flags|=256,oe(e,t,n,r),t.child}var Xa={dehydrated:null,treeContext:null,retryLane:0};function Za(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,t,n){var r=t.pendingProps,o=B.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),L(B,o&1),e===null)return ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Co(i,r,0,null),e=Ct(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Za(n),t.memoizedState=Xa,e):qi(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return _0(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ft(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=ft(l,a):(a=Ct(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Za(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Xa,r}return a=e.child,e=a.sibling,r=ft(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qi(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&Ci(r),sn(t,e.child,null,n),e=qi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _0(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=pa(Error(v(422))),Nr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Co({mode:"visible",children:r.children},o,0,null),a=Ct(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&sn(t,e.child,null,i),t.child.memoizedState=Za(i),t.memoizedState=Xa,a);if((t.mode&1)===0)return Nr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(v(419)),r=pa(a,r,void 0),Nr(e,t,i,r)}if(l=(i&e.childLanes)!==0,se||l){if(r=K,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ve(e,o),ze(r,e,o,-1))}return $i(),r=pa(Error(v(421))),Nr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=I0.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,fe=ut(o.nextSibling),he=t,D=!0,Me=null,e!==null&&(we[ke++]=Ue,we[ke++]=We,we[ke++]=Tt,Ue=e.id,We=e.overflow,Tt=t),t=qi(t,r.children),t.flags|=4096,t)}function _s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function fa(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function cc(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(oe(e,t,r.children,n),r=B.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_s(e,n,t);else if(e.tag===19)_s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(B,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fa(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fa(t,!0,n,null,a);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b0(e,t,n){switch(t.tag){case 3:sc(t),ln();break;case 5:Du(t);break;case 1:ce(t.type)&&to(t);break;case 4:Ni(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;L(oo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(B,B.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?uc(e,t,n):(L(B,B.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);L(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return cc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),L(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,ic(e,t,n)}return Ke(e,t,n)}var dc,Ja,pc,fc;dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ja=function(){};pc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,St(Be.current);var a=null;switch(n){case"input":o=xa(e,o),r=xa(e,r),a=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":o=Sa(e,o),r=Sa(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}Ca(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var s=r[c];if(l=o?.[c],r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&A("scroll",e),a||l===s||(a=[])):(a=a||[]).push(c,s))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function S0(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(t),null;case 1:return ce(t.type)&&eo(),ee(t),null;case 3:return r=t.stateNode,un(),I(ue),I(ne),Ai(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Me!==null&&(li(Me),Me=null))),Ja(e,t),ee(t),null;case 5:Li(t);var o=St(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)pc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ee(t),null}if(e=St(Be.current),Pr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[De]=t,r[Yn]=a,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(o=0;o<Mn.length;o++)A(Mn[o],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Pl(r,a),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},A("invalid",r);break;case"textarea":Nl(r,a),A("invalid",r)}Ca(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Mr(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Mr(r.textContent,l,e),o=["children",""+l]):Fn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&A("scroll",r)}switch(n){case"input":vr(r),zl(r,a,!0);break;case"textarea":vr(r),Ll(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Jr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[De]=t,e[Yn]=r,dc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ra(n,r),n){case"dialog":A("cancel",e),A("close",e),o=r;break;case"iframe":case"object":case"embed":A("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mn.length;o++)A(Mn[o],e);o=r;break;case"source":A("error",e),o=r;break;case"img":case"image":case"link":A("error",e),A("load",e),o=r;break;case"details":A("toggle",e),o=r;break;case"input":Pl(e,r),o=xa(e,r),A("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),A("invalid",e);break;case"textarea":Nl(e,r),o=Sa(e,r),A("invalid",e);break;default:o=r}Ca(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?js(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Us(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qn(e,s):typeof s=="number"&&qn(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Fn.hasOwnProperty(a)?s!=null&&a==="onScroll"&&A("scroll",e):s!=null&&ci(e,a,s,i))}switch(n){case"input":vr(e),zl(e,r,!1);break;case"textarea":vr(e),Ll(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Zt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ee(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=St(Xn.current),St(Be.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(a=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return ee(t),null;case 13:if(I(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&fe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zu(),ln(),t.flags|=98560,a=!1;else if(a=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(v(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(v(317));a[De]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ee(t),a=!1}else Me!==null&&(li(Me),Me=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(B.current&1)!==0?$===0&&($=3):$i())),t.updateQueue!==null&&(t.flags|=4),ee(t),null);case 4:return un(),Ja(e,t),e===null&&Vn(t.stateNode.containerInfo),ee(t),null;case 10:return Mi(t.type._context),ee(t),null;case 17:return ce(t.type)&&eo(),ee(t),null;case 19:if(I(B),a=t.memoizedState,a===null)return ee(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)bn(a,!1);else{if($!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=lo(e),i!==null){for(t.flags|=128,bn(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(B,B.current&1|2),t.child}e=e.sibling}a.tail!==null&&U()>dn&&(t.flags|=128,r=!0,bn(a,!1),t.lanes=4194304)}else{if(!r)if(e=lo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!D)return ee(t),null}else 2*U()-a.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,bn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=U(),t.sibling=null,n=B.current,L(B,r?n&1|2:n&1),t):(ee(t),null);case 22:case 23:return Gi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(pe&1073741824)!==0&&(ee(t),t.subtreeFlags&6&&(t.flags|=8192)):ee(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function E0(e,t){switch(Ei(t),t.tag){case 1:return ce(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),I(ue),I(ne),Ai(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Li(t),null;case 13:if(I(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(B),null;case 4:return un(),null;case 10:return Mi(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var Lr=!1,te=!1,C0=typeof WeakSet=="function"?WeakSet:Set,k=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function ei(e,t,n){try{n()}catch(r){H(e,t,r)}}var bs=!1;function R0(e,t){if(Oa=Qr,e=yu(),bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,c=0,f=0,g=e,h=null;t:for(;;){for(var y;g!==n||o!==0&&g.nodeType!==3||(l=i+o),g!==a||r!==0&&g.nodeType!==3||(s=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===e)break t;if(h===n&&++c===o&&(l=i),h===a&&++f===r&&(s=i),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ba={focusedElem:e,selectionRange:n},Qr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,O=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?x:Re(t.type,x),O);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(m){H(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=bs,bs=!1,w}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ei(t,n,a)}o=o.next}while(o!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[Yn],delete t[Ha],delete t[u0],delete t[c0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function Ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(ni(e,t,n),e=e.sibling;e!==null;)ni(e,t,n),e=e.sibling}function ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ri(e,t,n),e=e.sibling;e!==null;)ri(e,t,n),e=e.sibling}var Y=null,Te=!1;function Je(e,t,n){for(n=n.child;n!==null;)mc(e,t,n),n=n.sibling}function mc(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:te||Qt(n,t);case 6:var r=Y,o=Te;Y=null,Je(e,t,n),Y=r,Te=o,Y!==null&&(Te?(e=Y,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Y.removeChild(n.stateNode));break;case 18:Y!==null&&(Te?(e=Y,n=n.stateNode,e.nodeType===8?ia(e.parentNode,n):e.nodeType===1&&ia(e,n),jn(e)):ia(Y,n.stateNode));break;case 4:r=Y,o=Te,Y=n.stateNode.containerInfo,Te=!0,Je(e,t,n),Y=r,Te=o;break;case 0:case 11:case 14:case 15:if(!te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&ei(n,t,i),o=o.next}while(o!==r)}Je(e,t,n);break;case 1:if(!te&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){H(n,t,l)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(te=(r=te)||n.memoizedState!==null,Je(e,t,n),te=r):Je(e,t,n);break;default:Je(e,t,n)}}function Es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C0),t.forEach(function(r){var o=D0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ce(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Y=l.stateNode,Te=!1;break e;case 3:Y=l.stateNode.containerInfo,Te=!0;break e;case 4:Y=l.stateNode.containerInfo,Te=!0;break e}l=l.return}if(Y===null)throw Error(v(160));mc(a,i,o),Y=null,Te=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){H(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vc(t,e),t=t.sibling}function vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(t,e),Ae(e),r&4){try{Dn(3,e,e.return),So(3,e)}catch(x){H(e,e.return,x)}try{Dn(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:Ce(t,e),Ae(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Ce(t,e),Ae(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var o=e.stateNode;try{qn(o,"")}catch(x){H(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Fs(o,a),Ra(l,i);var c=Ra(l,a);for(i=0;i<s.length;i+=2){var f=s[i],g=s[i+1];f==="style"?js(o,g):f==="dangerouslySetInnerHTML"?Us(o,g):f==="children"?qn(o,g):ci(o,f,g,c)}switch(l){case"input":_a(o,a);break;case"textarea":qs(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Zt(o,!!a.multiple,y,!1):h!==!!a.multiple&&(a.defaultValue!=null?Zt(o,!!a.multiple,a.defaultValue,!0):Zt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Yn]=a}catch(x){H(e,e.return,x)}}break;case 6:if(Ce(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(x){H(e,e.return,x)}}break;case 3:if(Ce(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:Ce(t,e),Ae(e);break;case 13:Ce(t,e),Ae(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Wi=U())),r&4&&Es(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(te=(c=te)||f,Ce(t,e),te=c):Ce(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&(e.mode&1)!==0)for(k=e,f=e.child;f!==null;){for(g=k=f;k!==null;){switch(h=k,y=h.child,h.tag){case 0:case 11:case 14:case 15:Dn(4,h,h.return);break;case 1:Qt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){H(r,n,x)}}break;case 5:Qt(h,h.return);break;case 22:if(h.memoizedState!==null){Rs(g);continue}}y!==null?(y.return=h,k=y):Rs(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{o=g.stateNode,c?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=g.stateNode,s=g.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ws("display",i))}catch(x){H(e,e.return,x)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(x){H(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ce(t,e),Ae(e),r&4&&Es(e);break;case 21:break;default:Ce(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qn(o,""),r.flags&=-33);var a=Ss(e);ri(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Ss(e);ni(e,l,i);break;default:throw Error(v(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T0(e,t,n){k=e,yc(e,t,n)}function yc(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var o=k,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Lr;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||te;l=Lr;var c=te;if(Lr=i,(te=s)&&!c)for(k=o;k!==null;)i=k,s=i.child,i.tag===22&&i.memoizedState!==null?Ts(o):s!==null?(s.return=i,k=s):Ts(o);for(;a!==null;)k=a,yc(a,t,n),a=a.sibling;k=o,Lr=l,te=c}Cs(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,k=a):Cs(e,t,n)}}function Cs(e){for(;k!==null;){var t=k;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:te||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&cs(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cs(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&jn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}te||t.flags&512&&ti(t)}catch(h){H(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Rs(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Ts(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){H(t,o,s)}}var a=t.return;try{ti(t)}catch(s){H(t,a,s)}break;case 5:var i=t.return;try{ti(t)}catch(s){H(t,i,s)}}}catch(s){H(t,t.return,s)}if(t===e){k=null;break}var l=t.sibling;if(l!==null){l.return=t.return,k=l;break}k=t.return}}var M0=Math.ceil,co=Ye.ReactCurrentDispatcher,Hi=Ye.ReactCurrentOwner,_e=Ye.ReactCurrentBatchConfig,R=0,K=null,W=null,Q=0,pe=0,Xt=vt(0),$=0,tr=null,Pt=0,Eo=0,Ui=0,On=null,le=null,Wi=0,dn=1/0,qe=null,po=!1,oi=null,dt=null,Ar=!1,at=null,fo=0,Bn=0,ai=null,Ur=-1,Wr=0;function ae(){return(R&6)!==0?U():Ur!==-1?Ur:Ur=U()}function pt(e){return(e.mode&1)===0?1:(R&2)!==0&&Q!==0?Q&-Q:p0.transition!==null?(Wr===0&&(Wr=nu()),Wr):(e=P,e!==0||(e=window.event,e=e===void 0?16:uu(e.type)),e)}function ze(e,t,n,r){if(50<Bn)throw Bn=0,ai=null,Error(v(185));nr(e,n,r),((R&2)===0||e!==K)&&(e===K&&((R&2)===0&&(Eo|=n),$===4&&rt(e,Q)),de(e,r),n===1&&R===0&&(t.mode&1)===0&&(dn=U()+500,xo&&yt()))}function de(e,t){var n=e.callbackNode;hp(e,t);var r=Yr(e,e===K?Q:0);if(r===0)n!==null&&Dl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dl(n),t===1)e.tag===0?d0(Ms.bind(null,e)):Tu(Ms.bind(null,e)),l0(function(){(R&6)===0&&yt()}),n=null;else{switch(ru(r)){case 1:n=gi;break;case 4:n=eu;break;case 16:n=Kr;break;case 536870912:n=tu;break;default:n=Kr}n=Cc(n,wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wc(e,t){if(Ur=-1,Wr=0,(R&6)!==0)throw Error(v(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Yr(e,e===K?Q:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ho(e,r);else{t=r;var o=R;R|=2;var a=xc();(K!==e||Q!==t)&&(qe=null,dn=U()+500,Et(e,t));do try{N0();break}catch(l){kc(e,l)}while(!0);Ti(),co.current=a,R=o,W!==null?t=0:(K=null,Q=0,t=$)}if(t!==0){if(t===2&&(o=Na(e),o!==0&&(r=o,t=ii(e,o))),t===1)throw n=tr,Et(e,0),rt(e,r),de(e,U()),n;if(t===6)rt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!P0(o)&&(t=ho(e,r),t===2&&(a=Na(e),a!==0&&(r=a,t=ii(e,a))),t===1))throw n=tr,Et(e,0),rt(e,r),de(e,U()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:xt(e,le,qe);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Wi+500-U(),10<t)){if(Yr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qa(xt.bind(null,e,le,qe),t);break}xt(e,le,qe);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Pe(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=U()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){e.timeoutHandle=qa(xt.bind(null,e,le,qe),r);break}xt(e,le,qe);break;case 5:xt(e,le,qe);break;default:throw Error(v(329))}}}return de(e,U()),e.callbackNode===n?wc.bind(null,e):null}function ii(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=ho(e,t),e!==2&&(t=le,le=n,t!==null&&li(t)),e}function li(e){le===null?le=e:le.push.apply(le,e)}function P0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Ne(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ui,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pe(t),r=1<<n;e[n]=-1,t&=~r}}function Ms(e){if((R&6)!==0)throw Error(v(327));rn();var t=Yr(e,0);if((t&1)===0)return de(e,U()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=Na(e);r!==0&&(t=r,n=ii(e,r))}if(n===1)throw n=tr,Et(e,0),rt(e,t),de(e,U()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,le,qe),de(e,U()),null}function ji(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(dn=U()+500,xo&&yt())}}function zt(e){at!==null&&at.tag===0&&(R&6)===0&&rn();var t=R;R|=1;var n=_e.transition,r=P;try{if(_e.transition=null,P=1,e)return e()}finally{P=r,_e.transition=n,R=t,(R&6)===0&&yt()}}function Gi(){pe=Xt.current,I(Xt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,i0(n)),W!==null)for(n=W.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:un(),I(ue),I(ne),Ai();break;case 5:Li(r);break;case 4:un();break;case 13:I(B);break;case 19:I(B);break;case 10:Mi(r.type._context);break;case 22:case 23:Gi()}n=n.return}if(K=e,W=e=ft(e.current,null),Q=pe=t,$=0,tr=null,Ui=Eo=Pt=0,le=On=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}bt=null}return e}function kc(e,t){do{var n=W;try{if(Ti(),Fr.current=uo,so){for(var r=F.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}so=!1}if(Mt=0,V=G=F=null,In=!1,Zn=0,Hi.current=null,n===null||n.return===null){$=1,tr=t,W=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Q,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,g=f.tag;if((f.mode&1)===0&&(g===0||g===11||g===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ms(i);if(y!==null){y.flags&=-257,vs(y,i,l,a,t),y.mode&1&&gs(a,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(s),t.updateQueue=x}else w.add(s);break e}else{if((t&1)===0){gs(a,c,t),$i();break e}s=Error(v(426))}}else if(D&&l.mode&1){var O=ms(i);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),vs(O,i,l,a,t),Ci(cn(s,l));break e}}a=s=cn(s,l),$!==4&&($=2),On===null?On=[a]:On.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=rc(a,s,t);us(a,d);break e;case 1:l=s;var u=a.type,p=a.stateNode;if((a.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var m=oc(a,l,t);us(a,m);break e}}a=a.return}while(a!==null)}bc(n)}catch(_){t=_,W===n&&n!==null&&(W=n=n.return);continue}break}while(!0)}function xc(){var e=co.current;return co.current=uo,e===null?uo:e}function $i(){($===0||$===3||$===2)&&($=4),K===null||(Pt&268435455)===0&&(Eo&268435455)===0||rt(K,Q)}function ho(e,t){var n=R;R|=2;var r=xc();(K!==e||Q!==t)&&(qe=null,Et(e,t));do try{z0();break}catch(o){kc(e,o)}while(!0);if(Ti(),R=n,co.current=r,W!==null)throw Error(v(261));return K=null,Q=0,$}function z0(){for(;W!==null;)_c(W)}function N0(){for(;W!==null&&!ap();)_c(W)}function _c(e){var t=Ec(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?bc(e):W=t,Hi.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=S0(n,t,pe),n!==null){W=n;return}}else{if(n=E0(n,t),n!==null){n.flags&=32767,W=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,W=null;return}}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);$===0&&($=5)}function xt(e,t,n){var r=P,o=_e.transition;try{_e.transition=null,P=1,L0(e,t,n,r)}finally{_e.transition=o,P=r}return null}function L0(e,t,n,r){do rn();while(at!==null);if((R&6)!==0)throw Error(v(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(gp(e,a),e===K&&(W=K=null,Q=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ar||(Ar=!0,Cc(Kr,function(){return rn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=_e.transition,_e.transition=null;var i=P;P=1;var l=R;R|=4,Hi.current=null,R0(e,n),vc(n,e),t0(Ba),Qr=!!Oa,Ba=Oa=null,e.current=n,T0(n,e,o),ip(),R=l,P=i,_e.transition=a}else e.current=n;if(Ar&&(Ar=!1,at=e,fo=o),a=e.pendingLanes,a===0&&(dt=null),up(n.stateNode,r),de(e,U()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(po)throw po=!1,e=oi,oi=null,e;return(fo&1)!==0&&e.tag!==0&&rn(),a=e.pendingLanes,(a&1)!==0?e===ai?Bn++:(Bn=0,ai=e):Bn=0,yt(),null}function rn(){if(at!==null){var e=ru(fo),t=_e.transition,n=P;try{if(_e.transition=null,P=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,fo=0,(R&6)!==0)throw Error(v(331));var o=R;for(R|=4,k=e.current;k!==null;){var a=k,i=a.child;if((k.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(k=c;k!==null;){var f=k;switch(f.tag){case 0:case 11:case 15:Dn(8,f,a)}var g=f.child;if(g!==null)g.return=f,k=g;else for(;k!==null;){f=k;var h=f.sibling,y=f.return;if(hc(f),f===c){k=null;break}if(h!==null){h.return=y,k=h;break}k=y}}}var w=a.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}k=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,k=i;else e:for(;k!==null;){if(a=k,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Dn(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,k=d;break e}k=a.return}}var u=e.current;for(k=u;k!==null;){i=k;var p=i.child;if((i.subtreeFlags&2064)!==0&&p!==null)p.return=i,k=p;else e:for(i=u;k!==null;){if(l=k,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:So(9,l)}}catch(_){H(l,l.return,_)}if(l===i){k=null;break e}var m=l.sibling;if(m!==null){m.return=l.return,k=m;break e}k=l.return}}if(R=o,yt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{P=n,_e.transition=t}}return!1}function Ps(e,t,n){t=cn(n,t),t=rc(e,t,1),e=ct(e,t,1),t=ae(),e!==null&&(nr(e,1,t),de(e,t))}function H(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=cn(n,e),e=oc(t,e,1),t=ct(t,e,1),e=ae(),t!==null&&(nr(t,1,e),de(t,e));break}}t=t.return}}function A0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,K===e&&(Q&n)===n&&($===4||$===3&&(Q&130023424)===Q&&500>U()-Wi?Et(e,0):Ui|=n),de(e,t)}function Sc(e,t){t===0&&((e.mode&1)===0?t=1:(t=kr,kr<<=1,(kr&130023424)===0&&(kr=4194304)));var n=ae();e=Ve(e,t),e!==null&&(nr(e,t,n),de(e,n))}function I0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sc(e,n)}function D0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Sc(e,n)}var Ec;Ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)se=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return se=!1,b0(e,t,n);se=(e.flags&131072)!==0}else se=!1,D&&(t.flags&1048576)!==0&&Mu(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var o=an(t,ne.current);nn(t,n),o=Di(null,t,r,e,o,n);var a=Oi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ce(r)?(a=!0,to(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zi(t),o.updater=bo,t.stateNode=o,o._reactInternals=t,Va(t,r,e,n),t=Qa(null,t,r,!0,a,n)):(t.tag=0,D&&a&&Si(t),oe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=B0(r),e=Re(r,e),o){case 0:t=Ya(null,t,r,e,n);break e;case 1:t=ks(null,t,r,e,n);break e;case 11:t=ys(null,t,r,e,n);break e;case 14:t=ws(null,t,r,Re(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Ya(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),ks(e,t,r,o,n);case 3:e:{if(sc(t),e===null)throw Error(v(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Iu(e,t),io(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=cn(Error(v(423)),t),t=xs(e,t,r,n,o);break e}else if(r!==o){o=cn(Error(v(424)),t),t=xs(e,t,r,n,o);break e}else for(fe=ut(t.stateNode.containerInfo.firstChild),he=t,D=!0,Me=null,n=Lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ln(),r===o){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&ja(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Fa(r,o)?i=null:a!==null&&Fa(r,a)&&(t.flags|=32),lc(e,t),oe(e,t,i,n),t.child;case 6:return e===null&&ja(t),null;case 13:return uc(e,t,n);case 4:return Ni(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),ys(e,t,r,o,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,L(oo,r._currentValue),r._currentValue=i,a!==null)if(Ne(a.value,i)){if(a.children===o.children&&!ue.current){t=Ke(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=je(-1,n&-n),s.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ga(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(v(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ga(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,nn(t,n),o=be(o),r=r(o),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),ws(e,t,r,o,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Hr(e,t),t.tag=1,ce(r)?(e=!0,to(t)):e=!1,nn(t,n),nc(t,r,o),Va(t,r,o,n),Qa(null,t,r,!0,e,n);case 19:return cc(e,t,n);case 22:return ic(e,t,n)}throw Error(v(156,t.tag))};function Cc(e,t){return Js(e,t)}function O0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new O0(e,t,n,r)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function B0(e){if(typeof e=="function")return Vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pi)return 11;if(e===fi)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jr(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Vi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ht:return Ct(n.children,o,a,t);case di:i=8,o|=8;break;case va:return e=xe(12,n,t,o|2),e.elementType=va,e.lanes=a,e;case ya:return e=xe(13,n,t,o),e.elementType=ya,e.lanes=a,e;case wa:return e=xe(19,n,t,o),e.elementType=wa,e.lanes=a,e;case Ds:return Co(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case As:i=10;break e;case Is:i=9;break e;case pi:i=11;break e;case fi:i=14;break e;case et:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=xe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Ct(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=xe(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function ha(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function ga(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ki(e,t,n,r,o,a,i,l,s){return e=new F0(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=xe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(a),e}function q0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return gt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(ce(n))return Ru(e,n,t)}return t}function Tc(e,t,n,r,o,a,i,l,s){return e=Ki(n,r,!0,e,o,a,i,l,s),e.context=Rc(null),n=e.current,r=ae(),o=pt(n),a=je(r,o),a.callback=t??null,ct(n,a,o),e.current.lanes=o,nr(e,o,r),de(e,r),e}function Ro(e,t,n,r){var o=t.current,a=ae(),i=pt(o);return n=Rc(n),t.context===null?t.context=n:t.pendingContext=n,t=je(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(o,t,i),e!==null&&(ze(e,o,i,a),Br(e,o,i)),i}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yi(e,t){zs(e,t),(e=e.alternate)&&zs(e,t)}function H0(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qi(e){this._internalRoot=e}To.prototype.render=Qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));Ro(e,t,null,null)};To.prototype.unmount=Qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){Ro(null,e,null,null)}),t[$e]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&su(e)}};function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ns(){}function U0(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var c=go(i);a.call(c)}}var i=Tc(t,r,e,0,null,!1,!1,"",Ns);return e._reactRootContainer=i,e[$e]=i.current,Vn(e.nodeType===8?e.parentNode:e),zt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=go(s);l.call(c)}}var s=Ki(e,0,!1,null,null,!1,!1,"",Ns);return e._reactRootContainer=s,e[$e]=s.current,Vn(e.nodeType===8?e.parentNode:e),zt(function(){Ro(t,s,n,r)}),s}function Po(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=go(i);l.call(s)}}Ro(t,i,e,o)}else i=U0(n,t,e,o,r);return go(i)}ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(mi(t,n|1),de(t,U()),(R&6)===0&&(dn=U()+500,yt()))}break;case 13:zt(function(){var r=Ve(e,1);if(r!==null){var o=ae();ze(r,e,1,o)}}),Yi(e,1)}};vi=function(e){if(e.tag===13){var t=Ve(e,134217728);if(t!==null){var n=ae();ze(t,e,134217728,n)}Yi(e,134217728)}};au=function(e){if(e.tag===13){var t=pt(e),n=Ve(e,t);if(n!==null){var r=ae();ze(n,e,t,r)}Yi(e,t)}};iu=function(){return P};lu=function(e,t){var n=P;try{return P=e,t()}finally{P=n}};Ma=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(v(90));Bs(r),_a(r,o)}}}break;case"textarea":qs(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Vs=ji;Ks=zt;var W0={usingClientEntryPoint:!1,Events:[or,Gt,ko,Gs,$s,ji]},Sn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xs(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(En=__REACT_DEVTOOLS_GLOBAL_HOOK__,!En.isDisabled&&En.supportsFiber))try{mo=En.inject(j0),Oe=En}catch{}var En;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W0;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xi(t))throw Error(v(200));return q0(e,t,null,n)};ve.createRoot=function(e,t){if(!Xi(e))throw Error(v(299));var n=!1,r="",o=Mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ki(e,1,!1,null,null,n,!1,r,o),e[$e]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Qi(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Xs(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return zt(e)};ve.hydrate=function(e,t,n){if(!Mo(t))throw Error(v(200));return Po(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Xi(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Mc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Tc(t,null,e,1,n??null,o,!1,a,i),e[$e]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new To(t)};ve.render=function(e,t,n){if(!Mo(t))throw Error(v(200));return Po(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(v(40));return e._reactRootContainer?(zt(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};ve.unstable_batchedUpdates=ji;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Po(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426"});var Lc=Fe((nh,Nc)=>{"use strict";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),Nc.exports=Pc()});var Ic=Fe(Zi=>{"use strict";var Ac=Lc();Zi.createRoot=Ac.createRoot,Zi.hydrateRoot=Ac.hydrateRoot;var rh});var pd=Fe(zo=>{"use strict";var _f=cr(),bf=Symbol.for("react.element"),Sf=Symbol.for("react.fragment"),Ef=Object.prototype.hasOwnProperty,Cf=_f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rf={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ef.call(t,r)&&!Rf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:bf,type:e,key:a,ref:i,props:o,_owner:Cf.current}}zo.Fragment=Sf;zo.jsx=dd;zo.jsxs=dd});var At=Fe((Dh,fd)=>{"use strict";fd.exports=pd()});var wd=Xe(Ic());var Dt=Xe(cr());var Dc="<div></div>";var Oc="<div></div>";var Bc="<div></div>";var Fc="<div></div>";var qc="<div></div>";var Hc="<div></div>";var Uc="<div></div>";var Wc="<div></div>";var jc="<div></div>";var Gc="<div></div>";var $c="<div></div>";var Vc="<div></div>";var Kc="<div></div>";var Yc="<div></div>";var Qc="<div></div>";var Xc="<div></div>";var Zc="<div></div>";var Jc="<div></div>";var ed="<div></div>";var td="<div></div>";var nd="<div></div>";var rd="<div></div>";var ir=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Performance Diagnostics</title>\r
    <script src="https://cdn.tailwindcss.com"><\/script>\r
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>\r
    <style>\r
        :root {\r
            color-scheme: dark;\r
\r
            /* procedural noise fields, generated inline so the document stays self-contained.\r
               fractal noise for print grain, anisotropic noise for brushed metal,\r
               and a low-frequency field for smudge and dust on the cover glass. */\r
            --tex-grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23g)'/%3E%3C/svg%3E");\r
            --tex-metal: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008 1.5' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23m)'/%3E%3C/svg%3E");\r
            --tex-dust: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='d'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.6'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23d)'/%3E%3C/svg%3E");\r
        }\r
\r
        /* every dimension inside a gauge is expressed against the card width,\r
           so one instrument reads identically at 300px and at 900px */\r
        .gauge-card { container-type: inline-size; }\r
\r
        /* ---------- mounting plate ---------- */\r
        .plate {\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 11.5cqw;\r
            background: radial-gradient(120% 100% at 30% 0%, #121215 0%, #09090A 55%, #060607 100%);\r
            border: 1px solid rgba(255,255,255,.03);\r
            box-shadow:\r
                0px 1px 1px -0.5px rgba(0,0,0,.5),\r
                0px 3px 3px -1.5px rgba(0,0,0,.4),\r
                0px 6px 6px -3px rgba(0,0,0,.35),\r
                0px 12px 12px -6px rgba(0,0,0,.3),\r
                0px 24px 24px -12px rgba(0,0,0,.25);\r
            transition: border-color .5s;\r
        }\r
        /* fine anodised tooth so the plate is not a flat fill */\r
        .plate::before {\r
            content: "";\r
            position: absolute;\r
            inset: 0;\r
            border-radius: inherit;\r
            background-image: var(--tex-grain), var(--tex-dust);\r
            background-size: 34cqw 34cqw, 170% 170%;\r
            background-blend-mode: soft-light, normal;\r
            mix-blend-mode: screen;\r
            opacity: .07;\r
            pointer-events: none;\r
        }\r
        .gauge-card:hover .plate { border-color: rgba(255,255,255,.08); }\r
\r
        /* ---------- instrument shell ---------- */\r
        .shell {\r
            position: absolute;\r
            inset: 13cqw;\r
            border-radius: 50%;\r
            padding: 2.2%;\r
            background:\r
                var(--tex-metal),\r
                conic-gradient(from 210deg, #3a3a3d 0deg, #17171a 60deg, #2c2c30 130deg, #0d0d0f 200deg, #313135 280deg, #131316 340deg, #3a3a3d 360deg);\r
            background-size: 100% 100%, auto;\r
            background-blend-mode: overlay, normal;\r
            box-shadow:\r
                0 18px 40px -12px rgba(0,0,0,.9),\r
                0 2px 0 rgba(255,255,255,.05),\r
                inset 0 2px 6px rgba(255,255,255,.10),\r
                inset 0 -6px 14px rgba(0,0,0,.65);\r
        }\r
        .bezel {\r
            position: relative;\r
            width: 100%;\r
            height: 100%;\r
            border-radius: 50%;\r
            padding: 3.4%;\r
            background: radial-gradient(closest-side, #0b0b0d 76%, #212125 92%, #08080a 100%);\r
            box-shadow: inset 0 1px 1px rgba(255,255,255,.10), inset 0 -3px 8px rgba(0,0,0,.8);\r
        }\r
        /* knurled grip ring milled into the bezel edge */\r
        .bezel::before {\r
            content: "";\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 50%;\r
            background: repeating-conic-gradient(from 0deg, rgba(255,255,255,.16) 0deg 0.5deg, rgba(0,0,0,0) 0.5deg 2.2deg);\r
            -webkit-mask-image: radial-gradient(closest-side, transparent 92%, #000 93.5%, #000 99%, transparent 100%);\r
            mask-image: radial-gradient(closest-side, transparent 92%, #000 93.5%, #000 99%, transparent 100%);\r
            opacity: .45;\r
            pointer-events: none;\r
        }\r
        /* brushed tooling marks across the bezel ring */\r
        .bezel::after {\r
            content: "";\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 50%;\r
            background-image: var(--tex-metal);\r
            background-size: 100% 100%;\r
            -webkit-mask-image: radial-gradient(closest-side, transparent 95%, #000 96.5%, #000 100%);\r
            mask-image: radial-gradient(closest-side, transparent 95%, #000 96.5%, #000 100%);\r
            mix-blend-mode: overlay;\r
            opacity: .55;\r
            pointer-events: none;\r
        }\r
        /* a turned stainless pan head sunk into a counterbored well */\r
        .screw {\r
            position: absolute;\r
            width: 5cqw;\r
            aspect-ratio: 1;\r
            border-radius: 50%;\r
            background:\r
                radial-gradient(circle at 34% 26%, rgba(255,255,255,.55) 0%, rgba(255,255,255,.08) 26%, rgba(255,255,255,0) 46%),\r
                radial-gradient(closest-side, rgba(0,0,0,0) 58%, rgba(0,0,0,.45) 84%, rgba(0,0,0,.7) 100%),\r
                conic-gradient(from calc(var(--a, 0deg) - 52deg),\r
                    #9a9ba1 0deg, #43444a 34deg, #c3c4ca 74deg, #4d4e55 118deg,\r
                    #a7a8ae 168deg, #37383d 214deg, #b2b3b9 262deg, #45464c 312deg, #9a9ba1 360deg);\r
            box-shadow:\r
                0 0 0 .16cqw rgba(0,0,0,.6),\r
                0 .12cqw 0 .16cqw rgba(255,255,255,.05),\r
                0 .3cqw .6cqw rgba(0,0,0,.75),\r
                inset 0 -.16cqw .32cqw rgba(0,0,0,.6),\r
                inset 0 .12cqw .24cqw rgba(255,255,255,.4);\r
        }\r
        /* cross drive: dark recess with a lit lower lip so it reads as cut, not printed */\r
        .screw::before {\r
            content: "";\r
            position: absolute;\r
            inset: 22%;\r
            transform: rotate(var(--a, 0deg));\r
            background:\r
                linear-gradient(#050506, #1e1e23) center / 100% 20% no-repeat,\r
                linear-gradient(#050506, #1e1e23) center / 20% 100% no-repeat,\r
                linear-gradient(rgba(255,255,255,.62), rgba(255,255,255,.62)) center calc(50% + .11cqw) / 100% 20% no-repeat,\r
                linear-gradient(rgba(255,255,255,.62), rgba(255,255,255,.62)) calc(50% + .11cqw) center / 20% 100% no-repeat;\r
        }\r
        /* turning marks on the head */\r
        .screw::after {\r
            content: "";\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 50%;\r
            background-image: var(--tex-metal);\r
            background-size: 100% 100%;\r
            mix-blend-mode: overlay;\r
            opacity: .45;\r
        }\r
\r
        /* ---------- dial face ---------- */\r
        .face {\r
            container-type: inline-size;\r
            position: relative;\r
            width: 100%;\r
            height: 100%;\r
            border-radius: 50%;\r
            overflow: hidden;\r
            box-shadow: inset 0 5px 16px rgba(0,0,0,.5), inset 0 -2px 9px rgba(0,0,0,.4);\r
        }\r
        .layer { position: absolute; inset: 0; pointer-events: none; }\r
\r
        /* a full-bleed square rotated about its centre carries its child around the dial */\r
        .spoke { position: absolute; inset: 0; }\r
\r
        .tick {\r
            position: absolute;\r
            left: 50%;\r
            transform: translateX(-50%);\r
            border-radius: 1px;\r
        }\r
        .tick.minor { top: 9%; width: 0.9%; height: 2.8%; opacity: .5; }\r
        .tick.major { top: 8%; width: 1.8%; height: 6.4%; }\r
\r
        .numeral {\r
            position: absolute;\r
            left: 50%;\r
            top: 17.5%;\r
            line-height: 1;\r
            white-space: nowrap;\r
            font-variant-numeric: tabular-nums;\r
        }\r
\r
        /* ---------- needle ---------- */\r
        .needle {\r
            position: absolute;\r
            inset: 0;\r
            transform: rotate(var(--angle, 0deg));\r
            transition: transform var(--needle-duration, 1200ms) var(--needle-ease, cubic-bezier(.2,.9,.25,1));\r
            will-change: transform;\r
        }\r
        .flutter { position: absolute; inset: 0; }\r
        .blade {\r
            position: absolute;\r
            left: 50%;\r
            top: 11.5%;\r
            bottom: 50%;\r
            width: 3.2%;\r
            transform: translateX(-50%);\r
            clip-path: polygon(41% 0, 59% 0, 100% 97%, 100% 100%, 0 100%, 0 97%);\r
            filter: drop-shadow(0 3px 6px rgba(0,0,0,.55));\r
        }\r
        .blade::after {\r
            content: "";\r
            position: absolute;\r
            inset: 7% 40% 20% 40%;\r
            border-radius: 999px;\r
            background: linear-gradient(rgba(255,255,255,.34), rgba(255,255,255,0));\r
        }\r
        .tail {\r
            position: absolute;\r
            left: 50%;\r
            top: 50%;\r
            width: 2%;\r
            height: 9.5%;\r
            transform: translateX(-50%);\r
            border-radius: 0 0 999px 999px;\r
            filter: drop-shadow(0 2px 4px rgba(0,0,0,.5));\r
        }\r
        .hub {\r
            position: absolute;\r
            left: 50%;\r
            top: 50%;\r
            transform: translate(-50%, -50%);\r
            border-radius: 50%;\r
            background: radial-gradient(circle at 34% 30%, #5c5c63, #1b1b1f 60%, #050506);\r
            box-shadow: 0 3px 8px rgba(0,0,0,.75), inset 0 1px 2px rgba(255,255,255,.35);\r
            display: grid;\r
            place-items: center;\r
        }\r
\r
        /* ---------- glass ---------- */\r
        .glass {\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 50%;\r
            background:\r
                radial-gradient(120% 78% at 22% 6%, rgba(255,255,255,.20) 0%, rgba(255,255,255,.05) 32%, rgba(255,255,255,0) 56%),\r
                linear-gradient(148deg, rgba(255,255,255,.12) 0%, rgba(255,255,255,0) 40%);\r
            mix-blend-mode: screen;\r
            pointer-events: none;\r
        }\r
        .glass::after {\r
            content: "";\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 50%;\r
            box-shadow: inset 0 0 20px rgba(0,0,0,.5), inset 0 1px 1px rgba(255,255,255,.2);\r
        }\r
        /* smudge and settled dust caught by the raking highlight */\r
        .glass-dust {\r
            position: absolute;\r
            inset: 0;\r
            border-radius: 50%;\r
            background-image: var(--tex-dust), var(--tex-grain);\r
            background-size: 130% 130%, 30.03cqw 30.03cqw;\r
            mix-blend-mode: soft-light;\r
            opacity: .3;\r
            pointer-events: none;\r
        }\r
\r
        /* printed-dial tooth, held under the ticks and numerals */\r
        .face-grain {\r
            position: absolute;\r
            inset: 0;\r
            background-image: var(--tex-grain);\r
            background-size: 25.4cqw 25.4cqw;\r
            mix-blend-mode: overlay;\r
            opacity: .13;\r
            pointer-events: none;\r
        }\r
\r
        /* ---------- centre stack typography ---------- */\r
        .stack { position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; }\r
        .cap { font-size: 2.89cqw; letter-spacing: .42em; text-indent: .42em; line-height: 1; }\r
        .cap-sm { font-size: 2.43cqw; letter-spacing: .3em; text-indent: .3em; line-height: 1; }\r
        .readout { font-size: 8.55cqw; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }\r
\r
        /* ---------- motion ---------- */\r
        @keyframes flutter { 0%, 100% { transform: rotate(-.4deg); } 50% { transform: rotate(.4deg); } }\r
        .flutter[data-live] { animation: flutter 2.6s ease-in-out infinite; }\r
\r
        @keyframes pulse-soft { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }\r
        .pulse { animation: pulse-soft 1.4s ease-in-out infinite; }\r
\r
        @media (prefers-reduced-motion: reduce) {\r
            .needle, [data-peak], [data-soc] { transition: none !important; }\r
            .flutter[data-live], .pulse { animation: none !important; }\r
            [data-anim] { transition: none !important; }\r
        }\r
    </style>\r
</head>\r
<body class="bg-black min-h-screen text-white font-sans flex flex-col items-center justify-center p-6 sm:p-12 selection:bg-[#E26226] selection:text-white">\r
\r
    <!-- Header Section -->\r
    <div data-anim="true" class="max-w-4xl w-full mb-16 text-center" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);">\r
        <h1 class="text-3xl sm:text-5xl font-extralight tracking-tight mb-4 text-white/90" id="hero-title">\r
            Performance Diagnostics\r
        </h1>\r
        <p class="text-white/40 text-sm sm:text-base max-w-xl mx-auto font-extralight" id="hero-subtitle">\r
            Advanced tracking interfaces engineered for extreme conditions. Analyze vital statistics instantly with unmatched precision.\r
        </p>\r
    </div>\r
\r
    <!-- Dashboard Container -->\r
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl justify-items-center">\r
\r
        <!-- Card 1: Tachometer -->\r
        <div id="gauge-tachometer" data-anim="true" data-gauge="tachometer" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 100ms;">\r
            <div class="plate">\r
                <span class="screw" style="--a:26deg;top:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:-15deg;top:6.4cqw;right:6.4cqw"></span>\r
                <span class="screw" style="--a:42deg;bottom:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:7deg;bottom:6.4cqw;right:6.4cqw"></span>\r
                <div class="shell">\r
                    <div class="bezel">\r
                        <div class="face" style="background: radial-gradient(closest-side at 50% 32%, #F58135 0%, #E76A2A 44%, #D0541B 74%, #B94512 100%);">\r
                            <!-- machined sunburst -->\r
                            <div class="layer" style="background: repeating-conic-gradient(from 0deg, rgba(255,255,255,.055) 0deg 1.2deg, rgba(0,0,0,.05) 1.2deg 2.4deg); -webkit-mask-image: radial-gradient(closest-side, #000 0%, #000 58%, transparent 66%); mask-image: radial-gradient(closest-side, #000 0%, #000 58%, transparent 66%); opacity:.6;"></div>\r
                            <!-- scale band with redline -->\r
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>\r
\r
                            <div class="layer" data-ticks></div>\r
                            <div class="layer" data-numerals></div>\r
\r
                            <div class="stack" style="top:27%">\r
                                <span data-clock-digital class="font-mono text-black font-extrabold tracking-wider" style="font-size:3.9cqw; background: rgba(255,255,255,0.55); padding: 0.5cqw 2.2cqw; border-radius: 4px; border: 1px solid rgba(0,0,0,.22); box-shadow: 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.6); text-shadow: 0 1px 0 rgba(255,255,255,0.7);">--:--:--</span>\r
                                <span class="cap-sm text-black/65 font-bold" style="margin-top:0.6cqw; font-size:2.0cqw; letter-spacing:.25em">GHAZIABAD &middot; LIVE</span>\r
                            </div>\r
\r
                            <!-- seconds sub-dial -->\r
                            <div class="absolute left-1/2 top-[69%] -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-square rounded-full overflow-hidden border border-black/45 shadow-[inset_0_3px_8px_rgba(0,0,0,.55)]" style="background: radial-gradient(closest-side at 50% 30%, #8C3A11, #6E2A08);">\r
                                <div class="layer" data-subticks></div>\r
                                <span class="absolute left-1/2 bottom-[12%] -translate-x-1/2 text-white/75 whitespace-nowrap font-medium" style="font-size:1.8cqw;letter-spacing:.2em;text-indent:.2em">SECONDS</span>\r
                                <div class="needle" data-subneedle style="--needle-duration:0ms">\r
                                    <i class="blade" style="top:19%;width:5.5%;background:linear-gradient(#FCA5A5,#B91C1C)"></i>\r
                                </div>\r
                                <div class="hub" style="width:15%"></div>\r
                            </div>\r
\r
                            <!-- Hour Hand -->\r
                            <div class="needle" data-needle-hour style="--needle-duration:0ms; z-index:2;">\r
                                <i class="blade" style="top:25%; width:4.2%; background:linear-gradient(#262626,#171717 60%,#000); border-radius:2px; box-shadow:0 3px 8px rgba(0,0,0,.65);">\r
                                    <span style="position:absolute; top:20%; left:25%; right:25%; bottom:20%; background:#FEF08A; border-radius:1px; box-shadow:0 0 3px rgba(254,240,138,.8);"></span>\r
                                </i>\r
                                <i class="tail" style="top:50%; height:11%; width:4.2%; background:#171717; border-radius:1px;"></i>\r
                            </div>\r
\r
                            <!-- Minute Hand -->\r
                            <div class="needle" data-needle-minute style="--needle-duration:0ms; z-index:3;">\r
                                <i class="blade" style="top:14%; width:3.4%; background:linear-gradient(#262626,#171717 60%,#000); border-radius:2px; box-shadow:0 3px 8px rgba(0,0,0,.65);">\r
                                    <span style="position:absolute; top:15%; left:25%; right:25%; bottom:15%; background:#FEF08A; border-radius:1px; box-shadow:0 0 3px rgba(254,240,138,.8);"></span>\r
                                </i>\r
                                <i class="tail" style="top:50%; height:13%; width:3.4%; background:#171717; border-radius:1px;"></i>\r
                            </div>\r
\r
                            <!-- Second Hand (Red Counterweighted Needle) -->\r
                            <div class="needle" data-needle style="--needle-duration:0ms; z-index:4;">\r
                                <div class="flutter" data-live>\r
                                    <i class="blade" style="background:linear-gradient(#F87171,#DC2626 50%,#991B1B)"></i>\r
                                    <i class="tail" style="background:linear-gradient(#7F1D1D,#450A0A)"></i>\r
                                </div>\r
                            </div>\r
                            <div class="hub" style="width:9%; z-index:5;">\r
                                <span class="block w-[40%] aspect-square rounded-full bg-[#DC2626] shadow-[0_0_6px_rgba(220,38,38,.85)]"></span>\r
                            </div>\r
                            <div class="face-grain"></div>\r
                            <div class="glass"></div>\r
                            <div class="glass-dust"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Card 2: Speedometer -->\r
        <div id="gauge-speedometer" data-anim="true" data-gauge="speedometer" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 300ms;">\r
            <div class="plate">\r
                <span class="screw" style="--a:-33deg;top:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:18deg;top:6.4cqw;right:6.4cqw"></span>\r
                <span class="screw" style="--a:5deg;bottom:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:-48deg;bottom:6.4cqw;right:6.4cqw"></span>\r
                <div class="shell">\r
                    <div class="bezel">\r
                        <div class="face" style="background: radial-gradient(closest-side at 50% 28%, #1d1d21 0%, #141416 50%, #0a0a0b 100%);">\r
                            <!-- filled travel: a soft inner wash plus a bright rim arc -->\r
                            <div class="layer" data-progress-wash style="-webkit-mask-image: radial-gradient(closest-side, transparent 66%, #000 80%, #000 86%, transparent 89%); mask-image: radial-gradient(closest-side, transparent 66%, #000 80%, #000 86%, transparent 89%); opacity:.11;"></div>\r
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>\r
                            <div class="layer" data-progress-arc style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>\r
\r
                            <div class="layer" data-ticks></div>\r
                            <div class="layer" data-numerals></div>\r
\r
                            <!-- peak-hold marker -->\r
                            <div class="spoke" data-peak style="transition: transform 900ms cubic-bezier(.2,.9,.25,1)">\r
                                <i class="absolute left-1/2 top-[7.4%] -translate-x-1/2 w-[1.3%] h-[4%] bg-white/85 rounded-[1px] shadow-[0_0_7px_rgba(255,255,255,.7)]"></i>\r
                            </div>\r
\r
                            <div class="stack" style="top:29%">\r
                                <iconify-icon icon="solar:shield-star-linear" class="text-white/25" style="font-size:6.24cqw"></iconify-icon>\r
                                <span class="cap-sm text-white/30" style="margin-top:1.39cqw">km/h</span>\r
                            </div>\r
\r
                            <div class="stack" style="top:58%">\r
                                <span data-readout class="readout text-[#E26226]" style="text-shadow:0 0 12px rgba(226,98,38,.45)">0</span>\r
                            </div>\r
\r
                            <!-- odometer -->\r
                            <div class="stack items-center" style="top:77%">\r
                                <div class="bg-black/85 border border-white/10 rounded shadow-[inset_0_1px_3px_rgba(0,0,0,.9)] flex flex-col items-center" style="padding:0.92cqw 1.85cqw">\r
                                    <div class="text-[#E26226] font-mono flex items-center" style="font-size:3.93cqw;letter-spacing:.14em;gap:0.58cqw">\r
                                        <span>3</span><span>1</span><span>5</span><span>9</span><span class="bg-[#E26226] text-black rounded-[2px]" style="padding:0 0.81cqw">5</span>\r
                                    </div>\r
                                    <span class="text-white/30 uppercase" style="font-size:2.08cqw;letter-spacing:.28em;margin-top:0.81cqw">km total</span>\r
                                </div>\r
                            </div>\r
\r
                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">\r
                                <div class="flutter">\r
                                    <i class="blade" style="background:linear-gradient(#6EE7A0,#22C55E 50%,#15803D); filter: drop-shadow(0 0 7px rgba(74,222,128,.6))"></i>\r
                                    <i class="tail" style="background:linear-gradient(#166534,#052E16)"></i>\r
                                </div>\r
                            </div>\r
                            <div class="hub" style="width:8.5%">\r
                                <span class="block w-[38%] aspect-square rounded-full bg-[#4ADE80]/85 shadow-[0_0_6px_rgba(74,222,128,.75)]"></span>\r
                            </div>\r
                            <div class="face-grain"></div>\r
                            <div class="glass"></div>\r
                            <div class="glass-dust"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Card 3: Turbo Boost -->\r
        <div id="gauge-boost" data-anim="true" data-gauge="boost" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 500ms;">\r
            <div class="plate">\r
                <span class="screw" style="--a:12deg;top:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:-40deg;top:6.4cqw;right:6.4cqw"></span>\r
                <span class="screw" style="--a:29deg;bottom:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:-6deg;bottom:6.4cqw;right:6.4cqw"></span>\r
                <div class="shell">\r
                    <div class="bezel">\r
                        <div class="face" style="background: radial-gradient(closest-side at 50% 26%, #17324F 0%, #0F172A 48%, #030816 100%);">\r
                            <div class="layer" style="background: repeating-conic-gradient(from 0deg, rgba(56,189,248,.06) 0deg 1.4deg, rgba(0,0,0,0) 1.4deg 2.8deg); -webkit-mask-image: radial-gradient(closest-side, #000 0%, #000 56%, transparent 64%); mask-image: radial-gradient(closest-side, #000 0%, #000 56%, transparent 64%);"></div>\r
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>\r
\r
                            <div class="layer" data-ticks></div>\r
                            <div class="layer" data-numerals></div>\r
\r
                            <div class="stack" style="top:30%">\r
                                <iconify-icon icon="solar:wind-linear" class="text-cyan-400/80" style="font-size:6.47cqw"></iconify-icon>\r
                                <span class="cap text-white/45" style="margin-top:1.62cqw">BOOST</span>\r
                            </div>\r
\r
                            <div class="stack" style="top:57%">\r
                                <span data-readout class="readout text-cyan-300" style="text-shadow:0 0 12px rgba(34,211,238,.5)">0.00</span>\r
                                <span class="cap text-cyan-500/70" style="margin-top:1.85cqw">BAR</span>\r
                            </div>\r
\r
                            <div class="stack" style="top:79%">\r
                                <div class="flex items-center text-white/35" style="gap:1.62cqw;font-size:2.19cqw;letter-spacing:.26em">\r
                                    <span class="rounded-full bg-red-500 pulse" style="width:1.85cqw;height:1.85cqw" data-overboost hidden></span>\r
                                    <span>WASTEGATE 1.20</span>\r
                                </div>\r
                            </div>\r
\r
                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.32,.4,1)">\r
                                <div class="flutter">\r
                                    <i class="blade" style="background:linear-gradient(#4DD9F0,#0EB8D7 50%,#0E7490); filter: drop-shadow(0 0 8px rgba(34,211,238,.65))"></i>\r
                                    <i class="tail" style="background:linear-gradient(#155E75,#083344)"></i>\r
                                </div>\r
                            </div>\r
                            <div class="hub" style="width:9%">\r
                                <span class="block w-[38%] aspect-square rounded-full bg-cyan-400/85 shadow-[0_0_6px_rgba(34,211,238,.85)]"></span>\r
                            </div>\r
                            <div class="face-grain"></div>\r
                            <div class="glass"></div>\r
                            <div class="glass-dust"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Card 4: EV Power / Charge -->\r
        <div id="gauge-power" data-anim="true" data-gauge="power" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 700ms;">\r
            <div class="plate">\r
                <span class="screw" style="--a:47deg;top:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:3deg;top:6.4cqw;right:6.4cqw"></span>\r
                <span class="screw" style="--a:-21deg;bottom:6.4cqw;left:6.4cqw"></span>\r
                <span class="screw" style="--a:35deg;bottom:6.4cqw;right:6.4cqw"></span>\r
                <div class="shell">\r
                    <div class="bezel">\r
                        <div class="face" style="background: radial-gradient(closest-side at 50% 28%, #191624 0%, #111016 50%, #08070B 100%);">\r
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>\r
                            <div class="layer" data-progress-arc style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>\r
\r
                            <div class="layer" data-ticks></div>\r
                            <div class="layer" data-numerals></div>\r
\r
                            <div class="stack" style="top:29%">\r
                                <iconify-icon icon="solar:bolt-linear" class="text-purple-400/90" style="font-size:6.47cqw"></iconify-icon>\r
                                <span class="cap text-white/45" style="margin-top:1.62cqw">POWER</span>\r
                            </div>\r
\r
                            <div class="stack" style="top:57%">\r
                                <span data-readout class="readout text-purple-200" style="text-shadow:0 0 12px rgba(192,132,252,.45)">0</span>\r
                                <span class="cap text-purple-400/70" style="margin-top:1.85cqw">KW</span>\r
                            </div>\r
\r
                            <!-- battery state of charge -->\r
                            <div class="stack" style="top:76%">\r
                                <div class="rounded-full bg-white/10 overflow-hidden border border-white/10" style="width:23.1cqw;height:1.96cqw">\r
                                    <div data-soc class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-[width] duration-[1400ms] ease-out" style="width:0%"></div>\r
                                </div>\r
                                <span class="text-white/35" style="font-size:2.19cqw;letter-spacing:.28em;margin-top:1.39cqw">SOC 72%</span>\r
                            </div>\r
\r
                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">\r
                                <div class="flutter">\r
                                    <i class="blade" style="background:linear-gradient(#C88CFA,#9333EA 50%,#6B21A8); filter: drop-shadow(0 0 8px rgba(168,85,247,.6))"></i>\r
                                    <i class="tail" style="background:linear-gradient(#581C87,#2E1065)"></i>\r
                                </div>\r
                            </div>\r
                            <div class="hub" style="width:9%">\r
                                <span class="block w-[38%] aspect-square rounded-full bg-purple-400/85 shadow-[0_0_6px_rgba(168,85,247,.85)]"></span>\r
                            </div>\r
                            <div class="face-grain"></div>\r
                            <div class="glass"></div>\r
                            <div class="glass-dust"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
    </div>\r
\r
    <!-- Script for dial construction, reveal, and instrument motion -->\r
    <script>\r
        document.addEventListener('DOMContentLoaded', () => {\r
            const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;\r
\r
            /* ---------- dial specifications ---------- */\r
            const SPECS = {\r
                tachometer: {\r
                    start: 0, sweep: 360, min: 0, max: 12,\r
                    majorStep: 1, minorPerMajor: 5,\r
                    numeral: (v) => (v === 0 || v === 12 ? '12' : String(v)),\r
                    numeralStyle: 'font-size:7.2cqw;font-weight:400;color:rgba(0,0,0,.82);font-family:system-ui,-apple-system,sans-serif;',\r
                    tickColor: (v) => (v >= 10 || v === 0 ? '#7F1D1D' : 'rgba(0,0,0,.75)'),\r
                    zones: [\r
                        { from: 0, to: 10, color: 'rgba(0,0,0,.18)' },\r
                        { from: 10, to: 12, color: 'rgba(185,28,28,.95)' },\r
                    ],\r
                    idle: 0, value: 0,\r
                    sub: { start: -110, sweep: 220, min: 0, max: 60, majorStep: 15, minorPerMajor: 3, value: 0 },\r
                },\r
                speedometer: {\r
                    start: -135, sweep: 270, min: 0, max: 160,\r
                    majorStep: 20, minorPerMajor: 4,\r
                    numeral: (v) => String(v),\r
                    numeralStyle: 'font-size:5.31cqw;font-weight:300;color:rgba(255,255,255,.72)',\r
                    tickColor: (v) => (v >= 140 ? 'rgba(248,113,113,.95)' : 'rgba(255,255,255,.6)'),\r
                    zones: [\r
                        { from: 0, to: 140, color: 'rgba(255,255,255,.09)' },\r
                        { from: 140, to: 160, color: 'rgba(220,38,38,.6)' },\r
                    ],\r
                    progress: '#E26226', wash: '#E26226',\r
                    idle: 0, value: 118, peak: 143,\r
                    readout: (v) => String(Math.round(v)),\r
                },\r
                boost: {\r
                    start: -135, sweep: 270, min: -1, max: 1.5,\r
                    majorStep: 0.5, minorPerMajor: 5,\r
                    numeral: (v) => v.toFixed(1),\r
                    numeralStyle: 'font-size:4.85cqw;font-weight:300;color:rgba(255,255,255,.7)',\r
                    tickColor: (v) => (v >= 1.2 ? 'rgba(248,113,113,.95)' : v < 0 ? 'rgba(148,163,184,.65)' : 'rgba(103,232,249,.85)'),\r
                    zones: [\r
                        { from: -1, to: 0, color: 'rgba(148,163,184,.55)' },\r
                        { from: 0, to: 1.2, color: 'rgba(34,211,238,.6)' },\r
                        { from: 1.2, to: 1.5, color: 'rgba(220,38,38,.9)' },\r
                    ],\r
                    idle: -0.85, value: 0.92,\r
                    readout: (v) => (v >= 0 ? '+' : '\u2212') + Math.abs(v).toFixed(2),\r
                },\r
                power: {\r
                    start: -135, sweep: 270, min: -30, max: 120,\r
                    majorStep: 30, minorPerMajor: 3,\r
                    numeral: (v) => (v === -30 ? 'CHG' : String(v)),\r
                    numeralStyle: 'font-size:4.85cqw;font-weight:300;color:rgba(255,255,255,.68)',\r
                    tickColor: (v) => (v < 0 ? 'rgba(52,211,153,.85)' : 'rgba(216,180,254,.75)'),\r
                    zones: [\r
                        { from: -30, to: 0, color: 'rgba(16,185,129,.7)' },\r
                        { from: 0, to: 120, color: 'rgba(168,85,247,.3)' },\r
                    ],\r
                    progress: '#C084FC', progressFrom: 0,\r
                    idle: -22, value: 78, soc: 72,\r
                    readout: (v) => String(Math.round(v)),\r
                },\r
            };\r
\r
            /* ---------- polar helpers ---------- */\r
            const angleFor = (spec, value) => spec.start + ((value - spec.min) / (spec.max - spec.min)) * spec.sweep;\r
\r
            const spoke = (angle) => {\r
                const wrap = document.createElement('div');\r
                wrap.className = 'spoke';\r
                wrap.style.transform = \`rotate(\${angle}deg)\`;\r
                return wrap;\r
            };\r
\r
            const arcGradient = (spec, segments) => segments.map((segment) => {\r
                const from = angleFor(spec, segment.from);\r
                const span = ((segment.to - segment.from) / (spec.max - spec.min)) * spec.sweep;\r
                return \`conic-gradient(from \${from}deg, \${segment.color} 0deg, \${segment.color} \${span}deg, transparent \${span}deg)\`;\r
            }).join(', ');\r
\r
            function buildTicks(host, spec, options) {\r
                if (!host) return;\r
                const settings = options || {};\r
                const step = spec.majorStep / spec.minorPerMajor;\r
                const count = Math.round((spec.max - spec.min) / step);\r
                for (let index = 0; index <= count; index += 1) {\r
                    if (spec.sweep === 360 && index === count) continue;\r
                    const value = spec.min + index * step;\r
                    const isMajor = index % spec.minorPerMajor === 0;\r
                    const wrap = spoke(angleFor(spec, value));\r
                    const tick = document.createElement('i');\r
                    tick.className = \`tick \${isMajor ? 'major' : 'minor'}\`;\r
                    tick.style.background = (settings.color || spec.tickColor)(value);\r
                    if (settings.scale) {\r
                        tick.style.top = isMajor ? '9%' : '10.5%';\r
                        tick.style.height = isMajor ? '10%' : '5%';\r
                        tick.style.width = isMajor ? '3.6%' : '2.2%';\r
                    }\r
                    wrap.appendChild(tick);\r
                    host.appendChild(wrap);\r
                }\r
            }\r
\r
            function buildNumerals(host, spec) {\r
                if (!host) return;\r
                const count = Math.round((spec.max - spec.min) / spec.majorStep);\r
                for (let index = 0; index <= count; index += 1) {\r
                    const value = Math.round((spec.min + index * spec.majorStep) * 1000) / 1000;\r
                    if (spec.sweep === 360 && (index === 0 || value === 0)) continue;\r
                    const angle = angleFor(spec, value);\r
                    const wrap = spoke(angle);\r
                    const numeral = document.createElement('span');\r
                    numeral.className = 'numeral';\r
                    numeral.setAttribute('style', spec.numeralStyle);\r
                    numeral.textContent = spec.numeral(value);\r
                    numeral.style.transform = \`translateX(-50%) rotate(\${-angle}deg)\`;\r
                    wrap.appendChild(numeral);\r
                    host.appendChild(wrap);\r
                }\r
            }\r
\r
            /* ---------- build every dial ---------- */\r
            document.querySelectorAll('[data-gauge]').forEach((card) => {\r
                const spec = SPECS[card.dataset.gauge];\r
                if (!spec) return;\r
\r
                buildTicks(card.querySelector('[data-ticks]'), spec);\r
                buildNumerals(card.querySelector('[data-numerals]'), spec);\r
\r
                const band = card.querySelector('[data-zone-band]');\r
                if (band && spec.zones) band.style.background = arcGradient(spec, spec.zones);\r
\r
                if (spec.sub) {\r
                    buildTicks(card.querySelector('[data-subticks]'), spec.sub, {\r
                        scale: true,\r
                        color: (value) => (value >= 50 ? 'rgba(248,113,113,.95)' : 'rgba(255,255,255,.55)'),\r
                    });\r
                    const subNeedle = card.querySelector('[data-subneedle]');\r
                    if (subNeedle) subNeedle.style.setProperty('--angle', \`\${angleFor(spec.sub, spec.sub.min)}deg\`);\r
                }\r
\r
                const needle = card.querySelector('[data-needle]');\r
                if (needle) needle.style.setProperty('--angle', \`\${angleFor(spec, spec.idle)}deg\`);\r
            });\r
\r
            /* ---------- instrument sequence ---------- */\r
            function setArc(card, selector, spec, value, color) {\r
                const arc = card.querySelector(selector);\r
                if (!arc || !color) return;\r
                const from = spec.progressFrom != null ? spec.progressFrom : spec.min;\r
                arc.style.background = arcGradient(spec, [{ from, to: Math.max(from, value), color }]);\r
            }\r
\r
            function countTo(element, spec, from, to, duration) {\r
                if (!element || !spec.readout) return;\r
                if (reduceMotion || duration === 0) { element.textContent = spec.readout(to); return; }\r
                const started = performance.now();\r
                const step = (now) => {\r
                    const progress = Math.min(1, (now - started) / duration);\r
                    const eased = 1 - Math.pow(1 - progress, 3);\r
                    element.textContent = spec.readout(from + (to - from) * eased);\r
                    if (progress < 1) requestAnimationFrame(step);\r
                };\r
                requestAnimationFrame(step);\r
            }\r
\r
            function sweepTo(card, spec, value, duration) {\r
                const needle = card.querySelector('[data-needle]');\r
                if (needle) {\r
                    needle.style.setProperty('--needle-duration', \`\${duration}ms\`);\r
                    needle.style.setProperty('--angle', \`\${angleFor(spec, value)}deg\`);\r
                }\r
                setArc(card, '[data-progress-arc]', spec, value, spec.progress);\r
                setArc(card, '[data-progress-wash]', spec, value, spec.wash);\r
\r
                const overboost = card.querySelector('[data-overboost]');\r
                if (overboost) overboost.hidden = value < 1.2;\r
            }\r
\r
            function runInstrument(card) {\r
                const gaugeType = card.dataset.gauge;\r
                const spec = SPECS[gaugeType];\r
                if (!spec) return;\r
\r
                if (gaugeType === 'tachometer') {\r
                    // LIVE CLOCK MODE\r
                    const hourHand = card.querySelector('[data-needle-hour]');\r
                    const minHand = card.querySelector('[data-needle-minute]');\r
                    const secHand = card.querySelector('[data-needle]');\r
                    const subNeedle = card.querySelector('[data-subneedle]');\r
                    const digitalTime = card.querySelector('[data-clock-digital]');\r
\r
                    function tickClock() {\r
                        const now = new Date();\r
                        const h = now.getHours();\r
                        const m = now.getMinutes();\r
                        const s = now.getSeconds();\r
                        const ms = now.getMilliseconds();\r
\r
                        const hourAngle = ((h % 12) + m / 60 + s / 3600) * 30;\r
                        const minAngle = (m + s / 60) * 6;\r
                        const secAngle = (s + ms / 1000) * 6;\r
\r
                        if (hourHand) hourHand.style.setProperty('--angle', \`\${hourAngle}deg\`);\r
                        if (minHand) minHand.style.setProperty('--angle', \`\${minAngle}deg\`);\r
                        if (secHand) {\r
                            secHand.style.setProperty('--needle-duration', '0ms');\r
                            secHand.style.setProperty('--needle-ease', 'linear');\r
                            secHand.style.setProperty('--angle', \`\${secAngle}deg\`);\r
                        }\r
                        if (subNeedle && spec.sub) {\r
                            const subAngle = spec.sub.start + (s / 60) * spec.sub.sweep;\r
                            subNeedle.style.setProperty('--needle-duration', '0ms');\r
                            subNeedle.style.setProperty('--angle', \`\${subAngle}deg\`);\r
                        }\r
                        if (digitalTime) {\r
                            const hh = String(h % 12 || 12).padStart(2, '0');\r
                            const mm = String(m).padStart(2, '0');\r
                            const ss = String(s).padStart(2, '0');\r
                            const ampm = h >= 12 ? 'PM' : 'AM';\r
                            digitalTime.textContent = \`\${hh}:\${mm}:\${ss} \${ampm}\`;\r
                        }\r
\r
                        requestAnimationFrame(tickClock);\r
                    }\r
\r
                    tickClock();\r
                    return;\r
                }\r
\r
                const readout = card.querySelector('[data-readout]');\r
                const flutter = card.querySelector('[data-needle] .flutter');\r
                const peak = card.querySelector('[data-peak]');\r
                const soc = card.querySelector('[data-soc]');\r
                const subNeedle = card.querySelector('[data-subneedle]');\r
                const peakTo = (value) => { if (peak && spec.peak != null) peak.style.transform = \`rotate(\${angleFor(spec, value)}deg)\`; };\r
\r
                if (soc && spec.soc != null) soc.style.width = \`\${spec.soc}%\`;\r
                if (subNeedle && spec.sub) subNeedle.style.setProperty('--angle', \`\${angleFor(spec.sub, spec.sub.value)}deg\`);\r
\r
                if (reduceMotion) {\r
                    sweepTo(card, spec, spec.value, 0);\r
                    countTo(readout, spec, spec.value, spec.value, 0);\r
                    peakTo(spec.peak);\r
                    return;\r
                }\r
\r
                const cycle = () => {\r
                    if (flutter) flutter.removeAttribute('data-live');\r
\r
                    /* instrument self-test: full-scale sweep, fall back to rest, settle on the live reading */\r
                    sweepTo(card, spec, spec.max, 1100);\r
                    countTo(readout, spec, spec.idle, spec.max, 1100);\r
                    peakTo(spec.max);\r
\r
                    setTimeout(() => {\r
                        sweepTo(card, spec, spec.idle, 900);\r
                        countTo(readout, spec, spec.max, spec.idle, 900);\r
                        peakTo(spec.idle);\r
                    }, 1350);\r
\r
                    setTimeout(() => {\r
                        sweepTo(card, spec, spec.value, 1200);\r
                        countTo(readout, spec, spec.idle, spec.value, 1200);\r
                        peakTo(spec.peak);\r
                    }, 2500);\r
\r
                    setTimeout(() => { if (flutter) flutter.setAttribute('data-live', ''); }, 3900);\r
                };\r
\r
                cycle();\r
                setInterval(cycle, 8000);\r
            }\r
\r
            /* ---------- heading word reveal ---------- */\r
            const wrapWords = (elementId) => {\r
                const el = document.getElementById(elementId);\r
                if (!el) return;\r
                const text = el.innerText.trim().replace(/\\s+/g, ' ');\r
                el.innerHTML = '';\r
                const words = text.split(' ');\r
                words.forEach((word, index) => {\r
                    const wordWrap = document.createElement('span');\r
                    wordWrap.style.display = 'inline-block';\r
                    wordWrap.style.overflow = 'hidden';\r
                    wordWrap.style.paddingBottom = '4px';\r
\r
                    const wordSpan = document.createElement('span');\r
                    wordSpan.className = 'word';\r
                    wordSpan.style.display = 'inline-block';\r
                    wordSpan.style.opacity = '0';\r
                    wordSpan.style.transform = 'translateY(100%)';\r
                    wordSpan.style.filter = 'blur(4px)';\r
                    wordSpan.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';\r
                    wordSpan.style.transitionDelay = \`\${index * 40}ms\`;\r
                    wordSpan.innerHTML = word + '&nbsp;';\r
\r
                    wordWrap.appendChild(wordSpan);\r
                    el.appendChild(wordWrap);\r
                });\r
            };\r
\r
            wrapWords('hero-title');\r
            wrapWords('hero-subtitle');\r
\r
            const observer = new IntersectionObserver((entries, self) => {\r
                entries.forEach((entry) => {\r
                    if (!entry.isIntersecting) return;\r
\r
                    entry.target.style.opacity = '1';\r
                    entry.target.style.transform = 'translateY(0)';\r
                    entry.target.style.filter = 'blur(0)';\r
\r
                    entry.target.querySelectorAll('.word').forEach((word) => {\r
                        word.style.opacity = '1';\r
                        word.style.transform = 'translateY(0)';\r
                        word.style.filter = 'blur(0)';\r
                    });\r
\r
                    if (entry.target.dataset.gauge) setTimeout(() => runInstrument(entry.target), 500);\r
\r
                    self.unobserve(entry.target);\r
                });\r
            }, { root: null, rootMargin: '0px', threshold: 0.1 });\r
\r
            document.querySelectorAll('[data-anim="true"]').forEach((el) => observer.observe(el));\r
        });\r
    <\/script>\r
</body>\r
</html>\r
`;var od="<div></div>";var ad="<div></div>";var id="<div></div>";var ld="<div></div>";var sd="<div></div>";var ud="<div></div>";var cd="<div></div>";var No=Xe(At()),Tf=`<svg viewBox="0 0 512 512" aria-hidden="true">
  <defs>
    <mask id="threeui-intro-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <rect width="512" height="512" fill="#000"/>
      <circle cx="256" cy="256" r="208" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="28">
        <path d="M36 178C112 252 184 264 260 196C336 128 404 114 482 180"/>
        <path d="M36 292C112 366 184 378 260 310C336 242 404 228 482 294"/>
      </g>
    </mask>
  </defs>
  <rect width="512" height="512" fill="#f5f5f7" mask="url(#threeui-intro-cut)"/>
</svg>`,Mf=`<svg width="1600" height="300" viewBox="0 0 1600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="800" y="235" text-anchor="middle" fill="#F4F4F0" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="240" font-weight="900" letter-spacing="-8">SHADERS</text>
</svg>`,It={mode:"dark",hue:0,saturation:1,brightness:1},Pf={"rising-diagonal":{title:"Twelve Works in Slow Orbit",headline:["TWELVE WORKS","IN SLOW ORBIT"],headlineWidths:[1846,2e3],axis:25.5,phase:93,direction:1,field:"matte",palette:["#e9e5dd","#20232a","#c25a43","#2f5b4e","#d6cfc2","#3a4763","#dda45c","#14161a","#a7b3a4","#f3f1ec","#5a6670","#8c4b3f"],ink:{dark:["#8d949c","#ffffff","#20232a"],light:["#6b7280","#111827","#e9e5dd"]},type:{font:"sans",weight:"400",headlineSize:1.15,tracking:.1},motion:{spring:!0,ease:.42}},"falling-diagonal":{title:"Signal Lost, Image Holding",headline:["SIGNAL LOST","IMAGE HOLDING"],headlineWidths:[1622,1917],axis:-25.5,phase:87,direction:-1,field:"glitch",palette:["#0b0b12","#ff2f6d","#00e6ff","#13f28a","#f2f2f8","#7a1bff","#101018","#ff7a1a","#141a2e","#e01f52","#1a1a26","#0ac2d8"],ink:{dark:["#ff2f6d","#f2f2f8","#0b0b12"],light:["#c81049","#111827","#f2f2f8"]},type:{font:"sans",weight:"700",headlineSize:1.2,tracking:0},motion:{spring:!1,ease:.12}},"horizontal-sweep":{title:"Prints from the Flat Files",headline:["PRINTS FROM","THE FLAT FILES"],headlineWidths:[1506,1917],axis:0,phase:90,direction:1,field:"riso",palette:["#e0b64a","#b1512a","#6d7638","#ecdfc2","#2f6b66","#8a3a2b","#d69b3e","#3c4630","#c06e3a","#e6d3a8","#546d76","#7a4726"],ink:{dark:["#e0b64a","#f4e9d2","#6d2a16"],light:["#8a3a2b","#2b2018","#e0b64a"]},type:{font:"oldstyle",weight:"700",headlineSize:1.2,tracking:.03},motion:{spring:!1,ease:.9}},"vertical-loop":{title:"One Wall, Twelve Plates",headline:["ONE WALL","TWELVE PLATES"],headlineWidths:[1132,1840],axis:90,phase:0,direction:-1,field:"halftone",palette:["#12110f","#f2efe8","#1c1b18","#e4e0d7","#2b2a26","#d6d1c6","#0a0a09","#faf8f3","#1f1e1a","#eae6dd","#161513","#c0402c"],ink:{dark:["#c0402c","#f2efe8","#12110f"],light:["#c0402c","#12110f","#e4e0d7"]},type:{font:"didone",weight:"400",headlineSize:1.25,tracking:.06},motion:{spring:!1,ease:.55}}},zf={serif:'"Times New Roman",Times,"Liberation Serif","Nimbus Roman",serif',didone:'Didot,"Bodoni 72","Bodoni MT","Playfair Display",Georgia,serif',oldstyle:'"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif',sans:'"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif'};var Nf={...It,variant:"rising-diagonal"};function Lf(e,t){let n=t==="light"?"#f4f7fb":"#111318",r=t==="light"?["#60a5fa","#3b82f6","#2563eb"]:["#2563eb","#1d4ed8","#1e40af"];return e.replace("<title>Uploading \u2014 glowing border microinteraction</title>","<title>Thinking \u2014 glowing border microinteraction</title>").replace("<style>",`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
<style>`).replaceAll("#1d1d1d",n).replace("var word = 'Uploading'","var word = 'Thinking'").replace(`var FONT = '300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif';`,`var FONT = '300 100px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';`).replace(`      if(glyphs[i].ch === 'g') doubleStoreyG(c);
      else{`,"      {").replace("grd.addColorStop(0, '#2e3242');",`grd.addColorStop(0, '${r[0]}');`).replace("grd.addColorStop(0.55, '#2b2f3c');",`grd.addColorStop(0.55, '${r[1]}');`).replace("grd.addColorStop(1, '#272c36');",`grd.addColorStop(1, '${r[2]}');`).replaceAll("rgb(83,92,135)","rgb(219,234,254)").replaceAll("rgb(97,106,150)","rgb(239,246,255)").replace("rgb(133,141,189)","rgb(255,255,255)").replace("  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */",`  var SCL = 0.49;                          /* hero button -> normal button */
  var CX = (1024 - 22)/SCL, CY = (1024 + 11.5)/SCL;`).replace("    k = S*dpr/REF;","    k = S*dpr/REF*SCL;").replace("  var PW = 976, PH = 345, PR = 100;","  var PW = 1010, PH = 345, PR = 100;").replace("  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;",`  var TXT_W = 450, TXT_CAP = 79, TXT_BASE = CY + 38;
  var BR_R = 13, BR_SP = 40, BR_GAP = 78;   /* braille dot radius, cell pitch, gap to label */
  var BR_W = BR_SP + 2*BR_R, BR_SHIFT = (BR_W + BR_GAP)/2;
  /* the terminal 'dots' spinner, as raised-dot masks: bit 0..2 = left column top->bottom, 3..5 = right */
  var BRAILLE = [0x0B,0x19,0x39,0x38,0x3C,0x34,0x26,0x27,0x07,0x0F];
  var BR_STEPS = 30;                        /* three full spinner cycles per lap, so the loop still joins */`).replace("  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;","  var glyphs = [], fontPx = 169, tracking = 0, textX = 0, brailleX = 0;").replace("    textX = (CX + 4)*k - TXT_W*k/2 + lead;",`    textX = (CX + 4)*k - TXT_W*k/2 + lead + BR_SHIFT*k;
    brailleX = (CX + 4)*k - (BR_W + BR_GAP + TXT_W)*k/2 + BR_R*k;`).replace("  function label(c, ph){",`  /* the spinner is drawn as dots rather than braille glyphs, so it never depends
     on a system face carrying the U+28xx block */
  function braille(c, ph){
    var mask = BRAILLE[Math.floor(ph*BR_STEPS) % BRAILLE.length];
    var cy = (CY - 1.5)*k, r = BR_R*k, sp = BR_SP*k;
    for(var b=0;b<6;b++){
      var on = (mask >> b) & 1;
      c.beginPath();
      c.arc(brailleX + (b < 3 ? 0 : sp), cy + ((b % 3) - 1)*sp, on ? r : r*0.7, 0, Math.PI*2);
      c.fillStyle = on ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.16)';
      c.fill();
    }
  }

  function label(c, ph){`).replace(`    plate(ctx);
    label(ctx, ph);`,`    plate(ctx);
    braille(ctx, ph);
    label(ctx, ph);`)}function Af(e,t){return t!=="dark"?e:e.replace("from-black/10 via-black/20 to-black/10","from-white/[0.16] via-white/[0.07] to-white/[0.16]").replace("text-black/60","text-white/70").replace("text-slate-600","text-slate-200").replace('stroke="#666"','stroke="#e5e7eb"').replace("hover:bg-slate-50","hover:bg-white/10")}function If(e,t){return t!=="light"?e:e.replaceAll("#fffa","#111a").replaceAll("#fffd","#111d").replaceAll("#fff4","#1114").replaceAll("#fff3","#1113").replaceAll("#fff2","#1112")}var Df=/function buildLabels\(\)\{[\s\S]*?\n\}\n\nfunction resize/,Of=/function buildHead\(\)\{[\s\S]*?\n\}\n\nfunction buildLabels/,Bf=/function lin\(x,x0,y0,x1,y1,stops\)\{[\s\S]*?\n\];\n\nfunction roundRectPath/,Ff=/    \/\* film grain \*\/\n[\s\S]*?\n    x\.restore\(\);\n    front\.push\(c\);/,qf=/var t0 = performance\.now\(\), tNow = 0, playing = true;[\s\S]*?window\.__play = function\(\)\{ t0 = performance\.now\(\) - tNow\*1000; playing = true; \};/,Hf=`function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  if (x.letterSpacing !== undefined) x.letterSpacing = (HEAD_TRACK*HEAD_CAP*HEAD_SIZE*K).toFixed(2)+'px';
  if (HEAD_STYLE === 'riso'){
    var off = 0.055*HEAD_CAP*HEAD_SIZE*K;
    headPass(x, off, off, HEAD_SHADOW);
  }
  headPass(x, 0, 0, null);
  if (HEAD_STYLE === 'glitch') headGlitch(x);
}

/* one setting of the two headline lines, optionally displaced and forced to
   a single colour, so a style can stack passes into its treatment */
function headPass(x, dx, dy, tint){
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, HEAD_WEIGHT, HEAD_CAP*HEAD_SIZE*K, d2sx(1481) + dx,
            d2sy(HEAD_MID + (h.top - HEAD_MID)*HEAD_SIZE) + dy, h.w*HEAD_SIZE*K, tint || h.fill);
  }
}

/* the headline as a picture that lost its signal: a few rows slip sideways
   and two colour channels sit out of register behind the letterforms */
function headGlitch(x){
  var w = headLayer.width, h = headLayer.height, i;
  var snap = mkc(w,h);
  snap.getContext('2d').drawImage(headLayer,0,0);
  var r = rng(0x2E51);
  var top = d2sy(HEAD_MID) - HEAD_CAP*HEAD_SIZE*K*2.1, span = HEAD_CAP*HEAD_SIZE*K*4.2;
  for (i=0;i<7;i++){
    var sy = Math.round(top + r()*span);
    var sh = Math.round((0.03 + r()*0.11)*HEAD_CAP*HEAD_SIZE*K);
    var dx = Math.round((r()-0.5)*0.08*w);
    x.clearRect(0,sy,w,sh);
    x.drawImage(snap, 0,sy,w,sh, dx,sy,w,sh);
  }
  var ghost = function(color){
    var g = mkc(w,h), gx = g.getContext('2d');
    gx.drawImage(snap,0,0);
    gx.globalCompositeOperation = 'source-in';
    gx.fillStyle = color; gx.fillRect(0,0,w,h);
    return g;
  };
  var off = 0.05*HEAD_CAP*HEAD_SIZE*K;
  x.save();
  /* the ghosts go under the letterforms, so the headline stays readable */
  x.globalCompositeOperation = 'destination-over';
  x.globalAlpha = 0.9;
  x.drawImage(ghost(HEAD_GHOST[0]), -off, 0);
  x.drawImage(ghost(HEAD_GHOST[1]), off, 0);
  x.restore();
}

function buildLabels`,Uf=`function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

function rgbOf(hex){
  var v = parseInt(hex.slice(1),16);
  return [(v>>16)&255,(v>>8)&255,v&255];
}
function mixRGB(a,b,t){
  return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
}
function cssRGB(c){
  return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';
}
function luma(c){ return (c[0]*0.299 + c[1]*0.587 + c[2]*0.114)/255; }

/* value noise on a 64x64 lattice, smoothstep-interpolated and wrapped */
function noiseField(seed){
  var g = new Float32Array(4096), r = rng(seed), i;
  for (i=0;i<4096;i++) g[i] = r();
  return function(x,y){
    var x0 = Math.floor(x), y0 = Math.floor(y);
    var fx = x - x0, fy = y - y0;
    fx = fx*fx*(3-2*fx); fy = fy*fy*(3-2*fy);
    var ra = (y0 & 63)*64, rb = ((y0+1) & 63)*64, ca = x0 & 63, cb = (x0+1) & 63;
    var a = g[ra+ca], b = g[ra+cb], c = g[rb+ca], d = g[rb+cb];
    return a + (b-a)*fx + (c-a)*fy + (a-b-c+d)*fx*fy;
  };
}
function fbm(n,x,y,oct){
  var v = 0, amp = 0.5, f = 1, tot = 0, i;
  for (i=0;i<oct;i++){ v += amp*n(x*f,y*f); tot += amp; amp *= 0.5; f *= 2; }
  return v/tot;
}
function grain(x, alpha){
  x.save();
  x.globalCompositeOperation = 'overlay';
  x.globalAlpha = alpha;
  x.fillStyle = x.createPattern(grainTile,'repeat');
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* paint a low-resolution field, then blow it up over the whole tile: smooth
   for a matte plate, nearest wherever the noise has to keep its edges */
function fieldBuffer(N, shade){
  var buf = mkc(N,N), bx = buf.getContext('2d'), d = bx.createImageData(N,N), px, py, o, c;
  for (py=0;py<N;py++){
    for (px=0;px<N;px++){
      c = shade((px+0.5)/N, (py+0.5)/N, px, py);
      o = (py*N+px)*4;
      d.data[o] = c[0]|0; d.data[o+1] = c[1]|0; d.data[o+2] = c[2]|0;
      d.data[o+3] = c.length > 3 ? c[3]|0 : 255;
    }
  }
  bx.putImageData(d,0,0);
  return buf;
}
function blowUp(x, buf, smooth, alpha){
  x.save();
  x.imageSmoothingEnabled = smooth;
  if (alpha !== undefined) x.globalAlpha = alpha;
  x.drawImage(buf, 0, 0, TS, TS);
  x.restore();
}

/* matte \u2014 a museum plate: flat colour, one slow rise of noise across it,
   and grain fine enough to read as the surface rather than as an effect */
function paintMatte(x, base, i){
  var n = noiseField(0x2C41 + i*9176);
  var hi = mixRGB(base,[255,255,255],0.13), lo = mixRGB(base,[0,0,0],0.15);
  blowUp(x, fieldBuffer(160, function(u,v){
    var s = 0.5 + (fbm(n, u*6.5, v*6.5, 5) - 0.5)*1.9 + (v - 0.5)*0.07;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    return s < 0.5 ? mixRGB(lo, base, s*2) : mixRGB(base, hi, (s-0.5)*2);
  }), true);
  grain(x, 0.1);
}

/* glitch \u2014 a plate that lost the signal: flat blocks torn out of the
   neighbouring colours, rows slipped sideways, two channels off register */
function paintGlitch(x, base, i){
  var r = rng(0x51B7 + i*30011), k;
  fill(x, cssRGB(base));
  for (k=0;k<4;k++){
    x.fillStyle = cssRGB(rgbOf(PLATES[(i + 1 + ((r()*5)|0)) % PLATES.length]));
    x.fillRect(Math.round((r()-0.2)*TS), Math.round(r()*TS),
               Math.round((0.2 + r()*0.55)*TS), Math.round((0.04 + r()*0.2)*TS));
  }
  blowUp(x, fieldBuffer(64, function(){
    var w = r() < 0.5 ? 250 : 6;
    return [w,w,w, r() < 0.2 ? 200 : 0];
  }), false, 0.5);
  /* rows slip sideways, each one wrapped so no edge is ever left empty */
  var snap = mkc(TS,TS);
  snap.getContext('2d').drawImage(x.canvas,0,0);
  for (k=0;k<11;k++){
    var y0 = Math.round(r()*TS), h = Math.round((0.01 + r()*0.06)*TS);
    var dx = Math.round((r()-0.5)*0.36*TS);
    x.clearRect(0,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx + (dx < 0 ? TS : -TS),y0,TS,h);
  }
  var channel = function(color){
    var g = mkc(TS,TS), gx = g.getContext('2d');
    gx.drawImage(x.canvas,0,0);
    gx.globalCompositeOperation = 'multiply';
    gx.fillStyle = color; gx.fillRect(0,0,TS,TS);
    return g;
  };
  var red = channel('#ff3050'), cyan = channel('#30e0ff');
  x.save();
  x.globalCompositeOperation = 'lighter';
  x.globalAlpha = 0.3;
  x.drawImage(red, -0.022*TS, 0);
  x.drawImage(cyan, 0.022*TS, 0);
  x.restore();
  x.save();
  x.fillStyle = 'rgba(0,0,0,0.22)';
  for (k=0;k<TS;k+=4) x.fillRect(0,k,TS,1);
  x.restore();
  grain(x, 0.24);
}

/* riso \u2014 the printed plate: a lit corner and a noise field quantised to
   three tones through an ordered dither, then scanlines and heavy grain */
var BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function paintRiso(x, base, i){
  var n = noiseField(0x77A3 + i*15731), k;
  var lo = mixRGB(base,[24,14,6],0.66), hi = mixRGB(base,[255,238,196],0.5);
  var cx = 0.22 + (i % 3)*0.28, cy = 0.2 + ((i/3)|0)*0.2;
  blowUp(x, fieldBuffer(100, function(u,v,px,py){
    var d = Math.sqrt((u-cx)*(u-cx) + (v-cy)*(v-cy));
    var s = (1 - d*1.25)*0.72 + fbm(n, u*3.2, v*3.2, 3)*0.52 - 0.1;
    var band = Math.floor(s*2.4 + (BAYER[(py & 3)*4 + (px & 3)] + 0.5)/16);
    return band <= 0 ? lo : band === 1 ? base : hi;
  }), false);
  x.save();
  x.fillStyle = 'rgba(28,14,4,0.18)';
  for (k=0;k<TS;k+=6) x.fillRect(0,k,TS,2);
  x.restore();
  grain(x, 0.22);
}

/* halftone \u2014 one ink on one stock, shaded only by the size of the dots on
   a screen rotated a few degrees further for every tile */
function paintHalftone(x, base, i){
  var n = noiseField(0x3F19 + i*21467), gx, gy;
  fill(x, cssRGB(base));
  var dot = luma(base) > 0.5 ? mixRGB(base,[0,0,0],0.88) : mixRGB(base,[255,255,255],0.9);
  var pitch = TS/30, a = (17 + (i % 4)*9)*Math.PI/180;
  var ca = Math.cos(a), sa = Math.sin(a), span = Math.ceil(TS/pitch);
  x.save();
  x.fillStyle = cssRGB(dot);
  x.translate(TS/2, TS/2);
  x.rotate(a);
  for (gy=-span;gy<=span;gy++){
    for (gx=-span;gx<=span;gx++){
      var wx = gx*pitch, wy = gy*pitch;
      var u = (wx*ca - wy*sa)/TS + 0.5, v = (wx*sa + wy*ca)/TS + 0.5;
      if (u < -0.1 || u > 1.1 || v < -0.1 || v > 1.1) continue;
      var s = fbm(n, u*2.7, v*2.7, 4)*0.95 + (0.55 - v)*0.5;
      var rad = pitch*0.66*(s < 0 ? 0 : s > 1 ? 1 : s);
      if (rad < 0.4) continue;
      x.beginPath(); x.arc(wx, wy, rad, 0, Math.PI*2); x.fill();
    }
  }
  x.restore();
  grain(x, 0.12);
}

var PAINTERS = { matte: paintMatte, glitch: paintGlitch, riso: paintRiso, halftone: paintHalftone };
var ART = (function(){
  var painter = PAINTERS[FIELD] || paintMatte, list = [], i;
  for (i=0;i<PLATES.length;i++){
    list.push((function(index){
      return function(x){ painter(x, rgbOf(PLATES[index]), index); };
    })(i));
  }
  return list;
})();

function roundRectPath`,Wf=`var tNow = 0, playing = true, hovering = false, rate = 0, vel = 0, settled = false, last = performance.now();

function setHover(state){
  if (hovering === state) return;
  hovering = state; settled = false;
  /* the host cannot see the pointer arrive over this frame, so tell it \u2014 it is
     the one that will see the pointer leave again */
  if (state && window.parent !== window){
    try { window.parent.postMessage({ threeuiPointerOver: true }, '*'); } catch (error) {}
  }
}
var root = document.documentElement;
root.addEventListener('pointerenter', function(){ setHover(true); });
root.addEventListener('pointermove',  function(){ setHover(true); });
root.addEventListener('pointerdown',  function(){ setHover(true); });
root.addEventListener('pointerleave', function(){ setHover(false); });
root.addEventListener('pointercancel',function(){ setHover(false); });
window.addEventListener('blur', function(){ setHover(false); });

function frame(now){
  var dt = Math.min(0.05, Math.max(0, (now - last)/1000));
  last = now;
  if (playing){
    if (SPRING){
      vel += (((hovering ? 1 : 0) - rate)*SPRING_K - vel*SPRING_D)*dt;
      rate += vel*dt;
    } else {
      rate += ((hovering ? 1 : 0) - rate) * (1 - Math.exp(-dt/EASE));
    }
    if (Math.abs(rate) > 0.0004 || Math.abs(vel) > 0.0004){
      tNow = ((tNow + dt*rate) % DUR + DUR) % DUR;
      render(tNow); settled = false;
    } else if (!settled){
      rate = 0; vel = 0; render(tNow); settled = true;
    }
  }
  requestAnimationFrame(frame);
}

/* font family, weight, and headline size arrive live so a control tick never
   rebuilds the document and repaints the twelve tile textures */
window.addEventListener('message', function(event){
  var runtime = event.data && event.data.threeuiRuntime;
  if (!runtime) return;
  if (typeof runtime.font === 'string') SANS = runtime.font;
  if (typeof runtime.weight === 'string') HEAD_WEIGHT = runtime.weight;
  if (typeof runtime.headlineSize === 'number' && runtime.headlineSize > 0){
    HEAD_SIZE = Math.max(0.6, Math.min(1.8, runtime.headlineSize));
  }
  if (typeof runtime.hover === 'number') setHover(runtime.hover > 0);
  buildHead(); settled = false; render(tNow);
});

window.addEventListener('resize', function(){ resize(); settled = false; render(tNow); });
resize();
render(tNow);
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ last = performance.now(); playing = true; settled = false; };`;function jf(e,t,n){let r=t==="light"?"#f4f7fb":"#000000",o=t==="light"?n.ink.light:n.ink.dark,a=zf[n.type.font];return e.replace("<title>New Grainient Collection Added \u2014 motion</title>",`<title>${n.title} \u2014 motion</title>`).replace("html,body{margin:0;height:100%;background:#000;overflow:hidden}",`html,body{margin:0;height:100%;background:${r};overflow:hidden}`).replace("axis: 25.5,",`axis: ${n.axis},`).replace("phase: 93",`phase: ${n.phase}`).replace("  tile: 346,            /* tile side in ring units (R = a)               */",`  tile: 346,            /* tile width in ring units (R = a)              */
  aspect: 0.75,         /* tile height / width \u2014 a 4:3 landscape crop    */`).replace("  roundRectPath(ctx, TS, TS, TS*RING.radius);","  roundRectPath(ctx, TS, TS*RING.aspect, TS*RING.aspect*RING.radius);").replace(`var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */`,`var HEAD_CAP = 142;     /* authored headline cap height */
var HEAD_MID = 1093;    /* authored vertical centre of the two-line block */
var HEAD_SIZE = ${n.type.headlineSize};   /* headline size multiplier */
var HEAD_WEIGHT = '${n.type.weight}'; /* headline weight */
var HEAD_TRACK = ${n.type.tracking};   /* headline tracking, in cap heights */
var HEAD_STYLE = '${n.field}';
var HEAD_SHADOW = '${o[2]}';  /* riso: the plate under the ink */
var HEAD_GHOST = ['#ff2f6d','#00e6ff'];  /* glitch: the two channel ghosts */
var PLATES = ${JSON.stringify(n.palette)};
var FIELD = '${n.field}';       /* which painter shades the plates */
var EASE = ${n.motion.ease};        /* seconds for the orbit to reach hover speed */
var SPRING = ${n.motion.spring?1:0}, SPRING_K = 26, SPRING_D = 5.7;`).replace(`var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';`,`var SANS = '${a}';`).replace("{ s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' }",`{ s:'${n.headline[0]}', top:930,  w:${n.headlineWidths[0]}, fill:'${o[0]}' }`).replace("{ s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }",`{ s:'${n.headline[1]}', top:1114, w:${n.headlineWidths[1]}, fill:'${o[1]}' }`).replace(' * Tile artwork \u2014 eleven grainy gradient "wallpapers"'," * Tile artwork \u2014 twelve flat plates under a procedural noise field").replace(Bf,Uf).replace(Ff,`    /* each field painter lays its own grain, at the weight its style wants */
    front.push(c);`).replace("y.fillStyle = 'rgba(6,8,18,0.75)';","y.fillStyle = 'rgba(10,12,24,0.45)';").replace(Of,Hf).replace(Df,`function buildLabels(){
  /* the launch poster's corner marks and flanking notes are dropped; the
     layer stays so the compositing order below is untouched */
  labelLayer = mkc(1,1);
}

function resize`).replace("var spin = (t/DUR)*Math.PI*2;",`var spin = (t/DUR)*Math.PI*2*${n.direction};`).replace(`ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);`,`ctx.fillStyle = '${r}';
  ctx.fillRect(0,0,W,H);`).replace(qf,Wf)}var fg={...It,variant:"sphere",speed:1,pointSize:1,wavelength:1};function Gf(e,t){let n=t==="light"?"[[8, 10, 15], [40, 48, 62], [85, 96, 116]]":"[[255, 255, 255], [226, 232, 240], [191, 205, 225]]";return e.replace("<title>Epilude \u2014 Footer</title>","<title>Shaders Particle Wordmark</title>").replace("aspect-ratio: 8.541554959785524;","aspect-ratio: 5.333333333333333;").replace(/var WORDMARK =[\s\S]*?"<\/svg>";/,`var WORDMARK = ${JSON.stringify(Mf)};`).replace("var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];",`var PALETTE = ${n};`).replace("a: 0.04 + 0.95 * band * Math.pow(flake, 1.8)","a: 0.14 + 0.86 * band * Math.pow(flake, 1.8)")}function $f(e,t){let n=t==="light"?"#f4f7fb":"#000",r=t==="light"?"#172033":"#E8EEE9",o=t==="light"?"#536076":"#c9d4cc",a=t==="light"?"#315efb":"#7080ff";return e.replace("<title>Supreme Radio \u2014 Graphic Identity</title>","<title>ThreeUI \u2014 Audio Wordmark</title>").replaceAll("supreme radio","ThreeUI").replaceAll("#EA3927",a).replaceAll("#E8EEE9",r).replaceAll("#E3EDE5",r).replaceAll("#c9d4cc",o).replaceAll("#000",n).replace("var DUR = 20;","var DUR = 4.7;")}var M={expanse:{title:"Expanse Field shader background",source:Hc,background:"#07080b",targets:[{selector:"#glcanvas",role:"background"}]},starfield:{title:"Imaginie star portal",source:Xc,background:"#0d0a12",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#0d0a12",invertBackground:!0},targets:[{selector:"#ambient-starfield",role:"background"},{selector:"#portal-stars",role:"background"},{selector:".holo-btn",role:"button"}]},particleOrb:{title:"Synthesis autonomous orb",source:id,background:"#050505",targets:[{selector:"#orbCanvas",role:"background"}]},performanceGaugesTachometer:{title:"Tachometer diagnostic gauge",source:ir,background:"#000000",targets:[{selector:"#gauge-tachometer",role:"visual",fit:"contain-square"}]},performanceGaugesSpeedometer:{title:"Speedometer diagnostic gauge",source:ir,background:"#000000",targets:[{selector:"#gauge-speedometer",role:"visual",fit:"contain-square"}]},performanceGaugesBoost:{title:"Turbo boost diagnostic gauge",source:ir,background:"#000000",targets:[{selector:"#gauge-boost",role:"visual",fit:"contain-square"}]},performanceGaugesPower:{title:"EV power diagnostic gauge",source:ir,background:"#000000",targets:[{selector:"#gauge-power",role:"visual",fit:"contain-square"}]},logicCore:{title:"Logic Core isometric field",source:od,background:"#050505",targets:[{selector:"#three-canvas-container",role:"background"}]},ignition:{title:"Ignition Button shader button",source:Yc,background:"#f0ede7",theme:{nativeMode:"light",lightBackground:"#f0ede7",darkBackground:"#121316",invertBackground:!0},targets:[{selector:"#bg-gl",role:"background"},{selector:"#btn",role:"button"}]},induction:{title:"Induction Button kinetic button",source:ld,background:"#050505",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#050505",invertBackground:!0},targets:[{selector:"#bg-canvas",role:"background"},{selector:"#btn",role:"button"}]},aetherisLabs:{title:"Aetheris Labs plasma button",source:Dc,background:"#020614",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#020614",invertBackground:!0},targets:[{selector:"#bg-gl",role:"background"},{selector:"#btn",role:"button"}]},tactile:{title:"Nexus tactile fluidics button",source:Zc,background:"#03090d",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#03090d",invertBackground:!0},targets:[{selector:"#bg-canvas",role:"background"},{selector:"#btn",role:"button"}]},thinking:{title:"Thinking Button canvas animation",source:rd,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:Lf,targets:[{selector:"#stage",role:"button"}]},slidingTextCta:{title:"Sliding Text CTA button",source:td,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},floatingDotsCta:{title:"Floating Dots CTA button",source:Uc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},launchButton:{title:"Gradient Launch button",source:Qc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},dotBorderButton:{title:"Dot Border button",source:Bc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:If,targets:[{selector:".component-wrapper .btn-wrapper",role:"button",preserveTransform:!0}]},gradientCta:{title:"Gradient CTA button",source:Vc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},spinningBorderButton:{title:"Spinning Border button",source:nd,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},glassmorphismCta:{title:"Glassmorphism CTA button",source:Gc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper a",role:"button",preserveTransform:!0}]},generateButton:{title:"Generate button",source:jc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper .btn-wrapper",role:"button",preserveTransform:!0}]},gradientPillButton:{title:"Gradient Pill button",source:Kc,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:Af,targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},gradientBeamCta:{title:"Gradient Beam CTA button",source:$c,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},recursiveErosion:{title:"Recursive Erosion particle sphere background",source:ed,background:"#0a0908",theme:{lightBackground:"#f4f3f1",darkBackground:"#0a0908"},targets:[{selector:"#stage",role:"background"}],hiddenTargets:["#badge",".sr"]},threeUIIntro:{title:"ThreeUI chromatic wordmark intro",source:Fc,background:"#000000",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#000000",invertBackground:!0},targets:[{selector:"#stage",role:"background"}],hiddenTargets:[".sr"],introWordmark:{sceneSelector:"#comp .scene:first-child",text:"ThreeUI",fontSize:130,endTime:1.7,holdTime:1.1,logoSvg:Tf}},particleWordmark:{title:"Shaders particle wordmark",source:qc,background:"#0c0c0d",theme:{lightBackground:"#f4f7fb",darkBackground:"#0c0c0d"},transformSource:Gf,targets:[{selector:"#storm",role:"visual",fit:"wide-wordmark"}]},audioWordmark:{title:"ThreeUI audio wordmark",source:Oc,background:"#000000",theme:{lightBackground:"#f4f7fb",darkBackground:"#000000"},transformSource:$f,targets:[{selector:"#stage",role:"visual",fit:"portrait-stage",preserveTransform:!0}]},galleryHeading:{title:"Gallery Heading canvas animation",source:Wc,background:"#000000",theme:{lightBackground:"#f4f7fb",darkBackground:"#000000"},transformSource:(e,t)=>jf(e,t,Pf[Nf.variant]),targets:[{selector:"#stage",role:"background"}]},dimensional:{title:"Vanguard dimensional architecture",source:sd,background:"#050608",targets:[{selector:"#webgl-canvas",role:"background"}]},cloud:{title:"Strata cloud migration field",source:ad,background:"#071010",targets:[{selector:"#c",role:"background"}]},vertex9:{title:"Vertex 9 global data field",source:ud,background:"#050505",targets:[{selector:"#webgl-canvas",role:"background"}]},topology:{title:"Nexus topology field",source:Jc,background:"#070707",targets:[{selector:"#animationCanvas",role:"background"}]},voidField:{title:"Void Field shader background",source:cd,background:"#030305",targets:[{selector:"#webgl-canvas",role:"background"}]}};function Ji(e,t,n){return Math.min(n,Math.max(t,e))}function gd(e,t){return e.theme?.[`${t}Background`]??e.background}function Vf(e,t){let n=gd(e,t),r=e.theme?.invertBackground===!0&&e.theme.nativeMode!==t,o=e.transformSource?.(e.source,t)??e.source,a=JSON.stringify(e.targets).replace(/</g,"\\u003c"),i=JSON.stringify(e.hiddenTargets??[]).replace(/</g,"\\u003c"),l=JSON.stringify(e.introWordmark??null).replace(/</g,"\\u003c"),s=JSON.stringify(t),c=r?"filter: invert(1) hue-rotate(180deg) saturate(.92) brightness(1.02) !important;":"",f=e.introWordmark?`${e.introWordmark.sceneSelector} .tx { font-size: ${e.introWordmark.fontSize}px !important; }`:"",g=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${n} !important; color-scheme: ${t} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; ${c} }
[data-threeui-role="background"][data-threeui-fit="contain-square"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: min(100vw, 100vh) !important; height: min(100vw, 100vh) !important; aspect-ratio: 1 / 1 !important; transform: translate(-50%, -50%) !important; }
[data-threeui-role="button"] { position: relative !important; z-index: 2 !important; opacity: 1 !important; flex: none !important; }
[data-threeui-role="button"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"] { position: relative !important; z-index: 1 !important; width: min(100%, 1040px) !important; max-width: 1040px !important; max-height: 100% !important; margin: auto !important; padding: 24px !important; overflow: auto !important; opacity: 1 !important; filter: none !important; }
[data-threeui-role="visual"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"][data-threeui-fit="contain-square"] { flex: none !important; width: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-width: none !important; height: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-height: none !important; aspect-ratio: 1 / 1 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="wide-wordmark"] { width: min(calc(100vw - 48px), 1180px) !important; max-width: calc(100vw - 48px) !important; height: auto !important; max-height: none !important; aspect-ratio: 16 / 3 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="portrait-stage"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: 1080px !important; max-width: none !important; height: 1350px !important; max-height: none !important; padding: 0 !important; overflow: hidden !important; transform-origin: center !important; }
${f}
</style>`,h=`<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${s};
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${a};
    var hiddenSelectors = ${i};
    var introWordmark = ${l};
    var roots = [];
    hiddenSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute('data-threeui-hidden', '');
        element.setAttribute('aria-hidden', 'true');
        if ('inert' in element) element.inert = true;
      });
    });
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.fit) element.setAttribute('data-threeui-fit', spec.fit);
      if (spec.preserveTransform) element.setAttribute('data-threeui-preserve-transform', '');
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (introWordmark) {
      var introScene = document.querySelector(introWordmark.sceneSelector);
      var introText = introScene && introScene.querySelector('.tx');
      var introMark = introText && introText.querySelector('.mark');
      if (introText && introMark) {
        introMark.innerHTML = introWordmark.logoSvg;
        var introCharacters = Array.from(introText.children).filter(function (element) { return element !== introMark; });
        introCharacters.forEach(function (element, index) {
          element.textContent = introWordmark.text[index] === ' ' ? '\xA0' : (introWordmark.text[index] || '');
          element.style.display = index < introWordmark.text.length ? 'inline-block' : 'none';
        });
      }
      var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var introStartedAt = performance.now();
      function renderIntroWordmark(now) {
        if (typeof window.__seek !== 'function') return;
        if (introReducedMotion) {
          window.__seek(introWordmark.endTime);
          return;
        }
        var introCycle = introWordmark.endTime + introWordmark.holdTime;
        var introTime = ((now - introStartedAt) / 1000) % introCycle;
        window.__seek(Math.min(introTime, introWordmark.endTime));
        requestAnimationFrame(renderIntroWordmark);
      }
      requestAnimationFrame(renderIntroWordmark);
    }
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) {
      var placeholderLink = root.matches('a[href="#"]') ? root : root.querySelector('a[href="#"]');
      if (placeholderLink) placeholderLink.addEventListener('click', function (event) { event.preventDefault(); });
      document.body.appendChild(root);
    });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return o.replace(/<\/head>/i,`${g}</head>`).replace(/<\/body>/i,`${h}</body>`)}function md({definition:e,mode:t=It.mode,hue:n=It.hue,saturation:r=It.saturation,brightness:o=It.brightness,runtime:a,trackPointerHover:i,className:l,style:s}){let c=(0,Dt.useRef)(null),f=t==="light"?"light":"dark",g=gd(e,f),h=(0,Dt.useMemo)(()=>Vf(e,f),[e,f]),y=Ji(n,-180,180),w=Ji(r,0,2),x=Ji(o,.35,1.65),O=y===0&&w===1&&x===1?void 0:`hue-rotate(${y}deg) saturate(${w}) brightness(${x})`;(0,Dt.useEffect)(()=>{let u=c.current;if(!i||!u)return;let p=!1,m=()=>{p&&(p=!1,u.contentWindow?.postMessage({threeuiRuntime:{hover:0}},"*"))},_=b=>{b.source===u.contentWindow&&b.data?.threeuiPointerOver&&(p=!0)},S=b=>{if(!p)return;let E=u.getBoundingClientRect();(b.clientX<E.left||b.clientX>E.right||b.clientY<E.top||b.clientY>E.bottom)&&m()};return window.addEventListener("message",_),window.addEventListener("pointermove",S,!0),u.addEventListener("pointerleave",m),document.addEventListener("mouseleave",m),window.addEventListener("blur",m),()=>{window.removeEventListener("message",_),window.removeEventListener("pointermove",S,!0),u.removeEventListener("pointerleave",m),document.removeEventListener("mouseleave",m),window.removeEventListener("blur",m)}},[i]);let d=a?JSON.stringify(a):null;return(0,Dt.useEffect)(()=>{let u=c.current;if(!u||!d)return;let p=()=>u.contentWindow?.postMessage({threeuiRuntime:JSON.parse(d)},"*");return p(),u.addEventListener("load",p),()=>u.removeEventListener("load",p)},[d,h]),(0,No.jsx)("iframe",{ref:c,className:l,"data-mode":f,title:e.title,srcDoc:h,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:g,filter:O,...s}})}function z(e){return function(n){return(0,No.jsx)(md,{...n,definition:e})}}var hg=z(M.expanse),gg=z(M.starfield),mg=z(M.particleOrb),hd={tachometer:M.performanceGaugesTachometer,speedometer:M.performanceGaugesSpeedometer,boost:M.performanceGaugesBoost,power:M.performanceGaugesPower},Kf={...It,variant:"tachometer"};function vd({variant:e=Kf.variant,...t}){let n=hd[e]??hd.tachometer;return(0,No.jsx)(md,{...t,definition:n})}var vg=z(M.logicCore),yg=z(M.ignition),wg=z(M.induction),kg=z(M.aetherisLabs),xg=z(M.tactile),_g=z(M.thinking);var bg=z(M.slidingTextCta),Sg=z(M.floatingDotsCta),Eg=z(M.launchButton),Cg=z(M.dotBorderButton),Rg=z(M.gradientCta),Tg=z(M.spinningBorderButton),Mg=z(M.glassmorphismCta),Pg=z(M.generateButton),zg=z(M.gradientPillButton),Ng=z(M.gradientBeamCta);var Lg=z(M.threeUIIntro),Ag=z(M.particleWordmark),Ig=z(M.audioWordmark);var Dg=z(M.dimensional),Og=z(M.cloud),Bg=z(M.vertex9),Fg=z(M.topology),qg=z(M.voidField);var el=Xe(At());function Yf(){return(0,el.jsx)("div",{className:"shader-frame",children:(0,el.jsx)(vd,{variant:"tachometer",hue:0,saturation:1,brightness:1})})}var yd=Yf;var kd=Xe(At());function Lo(e="projects-gauge-clock"){let t=document.getElementById(e);if(!t)return;let n=(0,wd.createRoot)(t);return n.render((0,kd.jsx)(yd,{})),n}if(typeof window<"u"){let e=()=>{let t=document.getElementById("projects-gauge-clock");t&&!t.dataset.gaugesMounted&&(t.dataset.gaugesMounted="true",Lo("projects-gauge-clock"));let n=document.getElementById("projects-performance-gauge");n&&!n.dataset.gaugesMounted&&(n.dataset.gaugesMounted="true",Lo("projects-performance-gauge"))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e(),window.mountPerformanceGauges=Lo,window.mountSketchbook=Lo}})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=sketchbook.bundle.js.map
