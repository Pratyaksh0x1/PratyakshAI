(()=>{var rx=Object.create;var Sm=Object.defineProperty;var sx=Object.getOwnPropertyDescriptor;var ox=Object.getOwnPropertyNames;var ax=Object.getPrototypeOf,lx=Object.prototype.hasOwnProperty;var xi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var cx=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ox(e))!lx.call(t,r)&&r!==n&&Sm(t,r,{get:()=>e[r],enumerable:!(i=sx(e,r))||i.enumerable});return t};var fs=(t,e,n)=>(n=t!=null?rx(ax(t)):{},cx(e||!t||!t.__esModule?Sm(n,"default",{value:t,enumerable:!0}):n,t));var Dm=xi(je=>{"use strict";var bo=Symbol.for("react.element"),ux=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),fx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),_x=Symbol.for("react.lazy"),Mm=Symbol.iterator;function xx(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var Tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Am=Object.assign,bm={};function ps(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Tm}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cm(){}Cm.prototype=ps.prototype;function Du(t,e,n){this.props=t,this.context=e,this.refs=bm,this.updater=n||Tm}var Nu=Du.prototype=new Cm;Nu.constructor=Du;Am(Nu,ps.prototype);Nu.isPureReactComponent=!0;var Em=Array.isArray,Rm=Object.prototype.hasOwnProperty,Uu={current:null},Pm={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rm.call(e,i)&&!Pm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bo,type:t,key:s,ref:o,props:r,_owner:Uu.current}}function Sx(t,e){return{$$typeof:bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===bo}function Mx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wm=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mx(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bo:case ux:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lu(o,0):i,Em(r)?(n="",t!=null&&(n=t.replace(wm,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(Fu(r)&&(r=Sx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Em(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lu(s,a);o+=el(s,e,n,l,r)}else if(l=xx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lu(s,a++),o+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ex(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},tl={transition:null},wx={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Uu};function Lm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=ps;je.Fragment=hx;je.Profiler=fx;je.PureComponent=Du;je.StrictMode=dx;je.Suspense=vx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;je.act=Lm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Am({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rm.call(e,l)&&!Pm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:bo,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:px,_context:t},t.Consumer=t};je.createElement=Im;je.createFactory=function(t){var e=Im.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:gx,render:t}};je.isValidElement=Fu;je.lazy=function(t){return{$$typeof:_x,_payload:{_status:-1,_result:t},_init:Ex}};je.memo=function(t,e){return{$$typeof:yx,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};je.unstable_act=Lm;je.useCallback=function(t,e){return rn.current.useCallback(t,e)};je.useContext=function(t){return rn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};je.useEffect=function(t,e){return rn.current.useEffect(t,e)};je.useId=function(){return rn.current.useId()};je.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return rn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};je.useRef=function(t){return rn.current.useRef(t)};je.useState=function(t){return rn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return rn.current.useTransition()};je.version="18.3.1"});var nl=xi((bC,Nm)=>{"use strict";Nm.exports=Dm()});var Wm=xi(ct=>{"use strict";function Bu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<il(r,e))t[i]=e,t[n]=r,n=i;else break e}}function qn(t){return t.length===0?null:t[0]}function sl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>il(a,n))l<r&&0>il(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>il(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function il(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Um=performance,ct.unstable_now=function(){return Um.now()}):(Ou=Date,Fm=Ou.now(),ct.unstable_now=function(){return Ou.now()-Fm});var Um,Ou,Fm,li=[],Zi=[],Tx=1,Dn=null,$t=3,ol=!1,Ir=!1,Ro=!1,km=typeof setTimeout=="function"?setTimeout:null,Bm=typeof clearTimeout=="function"?clearTimeout:null,Om=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Vu(t){for(var e=qn(Zi);e!==null;){if(e.callback===null)sl(Zi);else if(e.startTime<=t)sl(Zi),e.sortIndex=e.expirationTime,Bu(li,e);else break;e=qn(Zi)}}function Hu(t){if(Ro=!1,Vu(t),!Ir)if(qn(li)!==null)Ir=!0,Wu(Gu);else{var e=qn(Zi);e!==null&&Xu(Hu,e.startTime-t)}}function Gu(t,e){Ir=!1,Ro&&(Ro=!1,Bm(Po),Po=-1),ol=!0;var n=$t;try{for(Vu(e),Dn=qn(li);Dn!==null&&(!(Dn.expirationTime>e)||t&&!Gm());){var i=Dn.callback;if(typeof i=="function"){Dn.callback=null,$t=Dn.priorityLevel;var r=i(Dn.expirationTime<=e);e=ct.unstable_now(),typeof r=="function"?Dn.callback=r:Dn===qn(li)&&sl(li),Vu(e)}else sl(li);Dn=qn(li)}if(Dn!==null)var s=!0;else{var o=qn(Zi);o!==null&&Xu(Hu,o.startTime-e),s=!1}return s}finally{Dn=null,$t=n,ol=!1}}var al=!1,rl=null,Po=-1,Vm=5,Hm=-1;function Gm(){return!(ct.unstable_now()-Hm<Vm)}function zu(){if(rl!==null){var t=ct.unstable_now();Hm=t;var e=!0;try{e=rl(!0,t)}finally{e?Co():(al=!1,rl=null)}}else al=!1}var Co;typeof Om=="function"?Co=function(){Om(zu)}:typeof MessageChannel<"u"?(ku=new MessageChannel,zm=ku.port2,ku.port1.onmessage=zu,Co=function(){zm.postMessage(null)}):Co=function(){km(zu,0)};var ku,zm;function Wu(t){rl=t,al||(al=!0,Co())}function Xu(t,e){Po=km(function(){t(ct.unstable_now())},e)}ct.unstable_IdlePriority=5;ct.unstable_ImmediatePriority=1;ct.unstable_LowPriority=4;ct.unstable_NormalPriority=3;ct.unstable_Profiling=null;ct.unstable_UserBlockingPriority=2;ct.unstable_cancelCallback=function(t){t.callback=null};ct.unstable_continueExecution=function(){Ir||ol||(Ir=!0,Wu(Gu))};ct.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vm=0<t?Math.floor(1e3/t):5};ct.unstable_getCurrentPriorityLevel=function(){return $t};ct.unstable_getFirstCallbackNode=function(){return qn(li)};ct.unstable_next=function(t){switch($t){case 1:case 2:case 3:var e=3;break;default:e=$t}var n=$t;$t=e;try{return t()}finally{$t=n}};ct.unstable_pauseExecution=function(){};ct.unstable_requestPaint=function(){};ct.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=$t;$t=t;try{return e()}finally{$t=n}};ct.unstable_scheduleCallback=function(t,e,n){var i=ct.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:Tx++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Bu(Zi,t),qn(li)===null&&t===qn(Zi)&&(Ro?(Bm(Po),Po=-1):Ro=!0,Xu(Hu,n-i))):(t.sortIndex=r,Bu(li,t),Ir||ol||(Ir=!0,Wu(Gu))),t};ct.unstable_shouldYield=Gm;ct.unstable_wrapCallback=function(t){var e=$t;return function(){var n=$t;$t=e;try{return t.apply(this,arguments)}finally{$t=n}}}});var Ym=xi((RC,Xm)=>{"use strict";Xm.exports=Wm()});var Jv=xi(bn=>{"use strict";var Ax=nl(),Tn=Ym();function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,jo={};function Wr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(jo[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qm={},$m={};function Cx(t){return ph.call($m,t)?!0:ph.call(qm,t)?!1:bx.test(t)?$m[t]=!0:(qm[t]=!0,!1)}function Rx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Px(t,e,n,i){if(e===null||typeof e>"u"||Rx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);Xt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);Xt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);Xt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Px(e,n,r,i)&&(n=null),i||r===null?Cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),vs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),e0=Symbol.for("react.provider"),t0=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var n0=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Zm=Symbol.iterator;function Io(t){return t===null||typeof t!="object"?null:(t=Zm&&t[Zm]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Yu;function ko(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var qu=!1;function $u(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function Ix(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=$u(t.type,!1),t;case 11:return t=$u(t.type.render,!1),t;case 1:return t=$u(t.type,!0),t;default:return""}}function yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case vs:return"Portal";case mh:return"Profiler";case cd:return"StrictMode";case gh:return"Suspense";case vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case t0:return(t.displayName||"Context")+".Consumer";case e0:return(t._context.displayName||"Context")+".Provider";case ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:yh(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return yh(t(e))}catch{}}return null}function Lx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dx(t){var e=i0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=Dx(t))}function r0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=i0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _h(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s0(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function xh(t,e){s0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Bo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function o0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,l0=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nx=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){Nx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function c0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=c0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ux=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wh(t,e){if(e){if(Ux[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bh=null,Ps=null,Is=null;function eg(t){if(t=va(t)){if(typeof bh!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=hc(e),bh(t.stateNode,t.type,e))}}function h0(t){Ps?Is?Is.push(t):Is=[t]:Ps=t}function d0(){if(Ps){var t=Ps,e=Is;if(Is=Ps=null,eg(t),e)for(t=0;t<e.length;t++)eg(e[t])}}function f0(t,e){return t(e)}function p0(){}var Zu=!1;function m0(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return f0(t,e,n)}finally{Zu=!1,(Ps!==null||Is!==null)&&(p0(),d0())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ch=!1;if(Ai)try{ms={},Object.defineProperty(ms,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Ch=!1}var ms;function Fx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Wo=!1,zl=null,kl=!1,Rh=null,Ox={onError:function(t){Wo=!0,zl=t}};function zx(t,e,n,i,r,s,o,a,l){Wo=!1,zl=null,Fx.apply(Ox,arguments)}function kx(t,e,n,i,r,s,o,a,l){if(zx.apply(this,arguments),Wo){if(Wo){var c=zl;Wo=!1,zl=null}else throw Error(ne(198));kl||(kl=!0,Rh=c)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function g0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tg(t){if(Xr(t)!==t)throw Error(ne(188))}function Bx(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tg(r),t;if(s===i)return tg(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function v0(t){return t=Bx(t),t!==null?y0(t):null}function y0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y0(t);if(e!==null)return e;t=t.sibling}return null}var _0=Tn.unstable_scheduleCallback,ng=Tn.unstable_cancelCallback,Vx=Tn.unstable_shouldYield,Hx=Tn.unstable_requestPaint,Tt=Tn.unstable_now,Gx=Tn.unstable_getCurrentPriorityLevel,fd=Tn.unstable_ImmediatePriority,x0=Tn.unstable_UserBlockingPriority,Bl=Tn.unstable_NormalPriority,Wx=Tn.unstable_LowPriority,S0=Tn.unstable_IdlePriority,ac=null,di=null;function Xx(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:$x,Yx=Math.log,qx=Math.LN2;function $x(t){return t>>>=0,t===0?32:31-(Yx(t)/qx|0)|0}var hl=64,dl=4194304;function Vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vo(a):(s&=o,s!==0&&(i=Vo(s)))}else o=n&~r,o!==0?i=Vo(o):s!==0&&(i=Vo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function Zx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=Zx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function M0(){var t=hl;return hl<<=1,(hl&4194240)===0&&(hl=64),t}function Ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function Kx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function E0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var w0,md,T0,A0,b0,Ih=!1,fl=[],ir=null,rr=null,sr=null,ta=new Map,na=new Map,Qi=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ig(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&md(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qx(t,e,n,i,r){switch(e){case"focusin":return ir=Lo(ir,t,e,n,i,r),!0;case"dragenter":return rr=Lo(rr,t,e,n,i,r),!0;case"mouseover":return sr=Lo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,Lo(ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,Lo(na.get(s)||null,t,e,n,i,r)),!0}return!1}function C0(t){var e=Nr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=g0(n),e!==null){t.blockedOn=e,b0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ah=i,n.target.dispatchEvent(i),Ah=null}else return e=va(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function rg(t,e,n){bl(t)&&n.delete(e)}function eS(){Ih=!1,ir!==null&&bl(ir)&&(ir=null),rr!==null&&bl(rr)&&(rr=null),sr!==null&&bl(sr)&&(sr=null),ta.forEach(rg),na.forEach(rg)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,Ih||(Ih=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,eS)))}function ia(t){function e(r){return Do(r,t)}if(0<fl.length){Do(fl[0],t);for(var n=1;n<fl.length;n++){var i=fl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&Do(ir,t),rr!==null&&Do(rr,t),sr!==null&&Do(sr,t),ta.forEach(e),na.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&Qi.shift()}var Ls=Pi.ReactCurrentBatchConfig,Hl=!0;function tS(t,e,n,i){var r=ot,s=Ls.transition;Ls.transition=null;try{ot=1,gd(t,e,n,i)}finally{ot=r,Ls.transition=s}}function nS(t,e,n,i){var r=ot,s=Ls.transition;Ls.transition=null;try{ot=4,gd(t,e,n,i)}finally{ot=r,Ls.transition=s}}function gd(t,e,n,i){if(Hl){var r=Lh(t,e,n,i);if(r===null)ih(t,e,i,Gl,n),ig(t,i);else if(Qx(r,t,e,n,i))i.stopPropagation();else if(ig(t,i),e&4&&-1<jx.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&w0(s),s=Lh(t,e,n,i),s===null&&ih(t,e,i,Gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ih(t,e,i,null,n)}}var Gl=null;function Lh(t,e,n,i){if(Gl=null,t=dd(i),t=Nr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=g0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function R0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gx()){case fd:return 1;case x0:return 4;case Bl:case Wx:return 16;case S0:return 536870912;default:return 16}default:return 16}}var tr=null,vd=null,Cl=null;function P0(){if(Cl)return Cl;var t,e=vd,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function sg(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:sg,this.isPropagationStopped=sg,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=An(Hs),ga=St({},Hs,{view:0,detail:0}),iS=An(ga),Ku,ju,No,lc=St({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Ku=t.screenX-No.screenX,ju=t.screenY-No.screenY):ju=Ku=0,No=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),og=An(lc),rS=St({},lc,{dataTransfer:0}),sS=An(rS),oS=St({},ga,{relatedTarget:0}),Qu=An(oS),aS=St({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=An(aS),cS=St({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uS=An(cS),hS=St({},Hs,{data:0}),ag=An(hS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pS[t])?!!e[t]:!1}function _d(){return mS}var gS=St({},ga,{key:function(t){if(t.key){var e=dS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=An(gS),yS=St({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lg=An(yS),_S=St({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),xS=An(_S),SS=St({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=An(SS),ES=St({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=An(ES),TS=[9,13,27,32],xd=Ai&&"CompositionEvent"in window,Xo=null;Ai&&"documentMode"in document&&(Xo=document.documentMode);var AS=Ai&&"TextEvent"in window&&!Xo,I0=Ai&&(!xd||Xo&&8<Xo&&11>=Xo),cg=" ",ug=!1;function L0(t,e){switch(t){case"keyup":return TS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function bS(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(ug=!0,cg);case"textInput":return t=e.data,t===cg&&ug?null:t;default:return null}}function CS(t,e){if(_s)return t==="compositionend"||!xd&&L0(t,e)?(t=P0(),Cl=vd=tr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return I0&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function N0(t,e,n,i){h0(i),e=Wl(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Yo=null,ra=null;function PS(t){X0(t,0)}function cc(t){var e=Ms(t);if(r0(e))return t}function IS(t,e){if(t==="change")return e}var U0=!1;Ai&&(Ai?(gl="oninput"in document,gl||(eh=document.createElement("div"),eh.setAttribute("oninput","return;"),gl=typeof eh.oninput=="function"),ml=gl):ml=!1,U0=ml&&(!document.documentMode||9<document.documentMode));var ml,gl,eh;function dg(){Yo&&(Yo.detachEvent("onpropertychange",F0),ra=Yo=null)}function F0(t){if(t.propertyName==="value"&&cc(ra)){var e=[];N0(e,ra,t,dd(t)),m0(PS,e)}}function LS(t,e,n){t==="focusin"?(dg(),Yo=e,ra=n,Yo.attachEvent("onpropertychange",F0)):t==="focusout"&&dg()}function DS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(ra)}function NS(t,e){if(t==="click")return cc(e)}function US(t,e){if(t==="input"||t==="change")return cc(e)}function FS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:FS;function sa(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ph.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,e){var n=fg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function z0(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function Sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OS(t){var e=z0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(i!==null&&Sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pg(n,s);var o=pg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zS=Ai&&"documentMode"in document&&11>=document.documentMode,xs=null,Dh=null,qo=null,Nh=!1;function mg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nh||xs==null||xs!==Ol(i)||(i=xs,"selectionStart"in i&&Sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&sa(qo,i)||(qo=i,i=Wl(Dh,"onSelect"),0<i.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},th={},k0={};Ai&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function uc(t){if(th[t])return th[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return th[t]=e[n];return t}var B0=uc("animationend"),V0=uc("animationiteration"),H0=uc("animationstart"),G0=uc("transitionend"),W0=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){W0.set(t,e),Wr(e,[t])}for(yl=0;yl<gg.length;yl++)_l=gg[yl],vg=_l.toLowerCase(),yg=_l[0].toUpperCase()+_l.slice(1),fr(vg,"on"+yg);var _l,vg,yg,yl;fr(B0,"onAnimationEnd");fr(V0,"onAnimationIteration");fr(H0,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(G0,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function _g(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,kx(i,e,void 0,t),t.currentTarget=null}function X0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;_g(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;_g(r,a,c),s=l}}}if(kl)throw t=Rh,kl=!1,Rh=null,t}function ft(t,e){var n=e[kh];n===void 0&&(n=e[kh]=new Set);var i=t+"__bubble";n.has(i)||(Y0(e,t,2,!1),n.add(i))}function nh(t,e,n){var i=0;e&&(i|=4),Y0(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[xl]){t[xl]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(kS.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,nh("selectionchange",!1,e))}}function Y0(t,e,n,i){switch(R0(e)){case 1:var r=tS;break;case 4:r=nS;break;default:r=gd}n=r.bind(null,e,n,t),r=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ih(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}m0(function(){var c=s,u=dd(n),f=[];e:{var d=W0.get(t);if(d!==void 0){var p=yd,g=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=vS;break;case"focusin":g="focus",p=Qu;break;case"focusout":g="blur",p=Qu;break;case"beforeblur":case"afterblur":p=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xS;break;case B0:case V0:case H0:p=lS;break;case G0:p=MS;break;case"scroll":p=iS;break;case"wheel":p=wS;break;case"copy":case"cut":case"paste":p=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lg}var S=(e&4)!==0,m=!S&&t==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var v=c,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,h!==null&&(_=ea(v,h),_!=null&&S.push(aa(v,_,y)))),m)break;v=v.return}0<S.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:S}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ah&&(g=n.relatedTarget||n.fromElement)&&(Nr(g)||g[bi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Nr(g):null,g!==null&&(m=Xr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=og,_="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=lg,_="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Ms(p),y=g==null?d:Ms(g),d=new S(_,v+"leave",p,n,u),d.target=m,d.relatedTarget=y,_=null,Nr(u)===c&&(S=new S(h,v+"enter",g,n,u),S.target=y,S.relatedTarget=m,_=S),m=_,p&&g)t:{for(S=p,h=g,v=0,y=S;y;y=gs(y))v++;for(y=0,_=h;_;_=gs(_))y++;for(;0<v-y;)S=gs(S),v--;for(;0<y-v;)h=gs(h),y--;for(;v--;){if(S===h||h!==null&&S===h.alternate)break t;S=gs(S),h=gs(h)}S=null}else S=null;p!==null&&xg(f,d,p,S,!1),g!==null&&m!==null&&xg(f,m,g,S,!0)}}e:{if(d=c?Ms(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var I=IS;else if(hg(d))if(U0)I=US;else{I=DS;var C=LS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=NS);if(I&&(I=I(t,c))){N0(f,I,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Sh(d,"number",d.value)}switch(C=c?Ms(c):window,t){case"focusin":(hg(C)||C.contentEditable==="true")&&(xs=C,Dh=c,qo=null);break;case"focusout":qo=Dh=xs=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,mg(f,n,u);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":mg(f,n,u)}var b;if(xd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _s?L0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(I0&&n.locale!=="ko"&&(_s||P!=="onCompositionStart"?P==="onCompositionEnd"&&_s&&(b=P0()):(tr=u,vd="value"in tr?tr.value:tr.textContent,_s=!0)),C=Wl(c,P),0<C.length&&(P=new ag(P,t,null,n,u),f.push({event:P,listeners:C}),b?P.data=b:(b=D0(n),b!==null&&(P.data=b)))),(b=AS?bS(t,n):CS(t,n))&&(c=Wl(c,"onBeforeInput"),0<c.length&&(u=new ag("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=b))}X0(f,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(t,n),s!=null&&i.unshift(aa(t,s,r)),s=ea(t,e),s!=null&&i.push(aa(t,s,r))),t=t.return}return i}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ea(n,s),l!=null&&o.unshift(aa(n,l,a))):r||(l=ea(n,s),l!=null&&o.push(aa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function Sg(t){return(typeof t=="string"?t:""+t).replace(BS,`
`).replace(VS,"")}function Sl(t,e,n){if(e=Sg(e),Sg(t)!==e&&n)throw Error(ne(425))}function Xl(){}var Uh=null,Fh=null;function Oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(t){return Mg.resolve(null).then(t).catch(WS)}:zh;function WS(t){setTimeout(function(){throw t})}function rh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ia(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),hi="__reactFiber$"+Gs,la="__reactProps$"+Gs,bi="__reactContainer$"+Gs,kh="__reactEvents$"+Gs,XS="__reactListeners$"+Gs,YS="__reactHandles$"+Gs;function Nr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Eg(t);t!==null;){if(n=t[hi])return n;t=Eg(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[hi]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function hc(t){return t[la]||null}var Bh=[],Es=-1;function pr(t){return{current:t}}function pt(t){0>Es||(t.current=Bh[Es],Bh[Es]=null,Es--)}function ut(t,e){Es++,Bh[Es]=t.current,t.current=e}var dr={},jt=pr(dr),pn=pr(!1),kr=dr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Yl(){pt(pn),pt(jt)}function wg(t,e,n){if(jt.current!==dr)throw Error(ne(168));ut(jt,e),ut(pn,n)}function q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Lx(t)||"Unknown",r));return St({},n,i)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,kr=jt.current,ut(jt,t),ut(pn,pn.current),!0}function Tg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=q0(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,pt(pn),pt(jt),ut(jt,t)):pt(pn),ut(pn,n)}var Mi=null,dc=!1,sh=!1;function $0(t){Mi===null?Mi=[t]:Mi.push(t)}function qS(t){dc=!0,$0(t)}function mr(){if(!sh&&Mi!==null){sh=!0;var t=0,e=ot;try{var n=Mi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,dc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),_0(fd,mr),r}finally{ot=e,sh=!1}}return null}var ws=[],Ts=0,$l=null,Zl=0,Nn=[],Un=0,Br=null,Ei=1,wi="";function Lr(t,e){ws[Ts++]=Zl,ws[Ts++]=$l,$l=t,Zl=e}function Z0(t,e,n){Nn[Un++]=Ei,Nn[Un++]=wi,Nn[Un++]=Br,Br=t;var i=Ei;t=wi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-jn(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function Md(t){t.return!==null&&(Lr(t,1),Z0(t,1,0))}function Ed(t){for(;t===$l;)$l=ws[--Ts],ws[Ts]=null,Zl=ws[--Ts],ws[Ts]=null;for(;t===Br;)Br=Nn[--Un],Nn[Un]=null,wi=Nn[--Un],Nn[Un]=null,Ei=Nn[--Un],Nn[Un]=null}var wn=null,En=null,vt=!1,Kn=null;function J0(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function Vh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(vt){var e=En;if(e){var n=e;if(!Ag(t,e)){if(Vh(t))throw Error(ne(418));e=or(n.nextSibling);var i=wn;e&&Ag(t,e)?J0(i,n):(t.flags=t.flags&-4097|2,vt=!1,wn=t)}}else{if(Vh(t))throw Error(ne(418));t.flags=t.flags&-4097|2,vt=!1,wn=t}}}function bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Ml(t){if(t!==wn)return!1;if(!vt)return bg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oh(t.type,t.memoizedProps)),e&&(e=En)){if(Vh(t))throw K0(),Error(ne(418));for(;e;)J0(t,e),e=or(e.nextSibling)}if(bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?or(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=En;t;)t=or(t.nextSibling)}function Os(){En=wn=null,vt=!1}function wd(t){Kn===null?Kn=[t]:Kn.push(t)}var $S=Pi.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cg(t){var e=t._init;return e(t._payload)}function j0(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ur(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,_){return v===null||v.tag!==6?(v=dh(y,h.mode,_),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,_){var I=y.type;return I===ys?u(h,v,y.props.children,_,y.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ki&&Cg(I)===v.type)?(_=r(v,y.props),_.ref=Uo(h,v,y),_.return=h,_):(_=Fl(y.type,y.key,y.props,null,h.mode,_),_.ref=Uo(h,v,y),_.return=h,_)}function c(h,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=fh(y,h.mode,_),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,_,I){return v===null||v.tag!==7?(v=zr(y,h.mode,_,I),v.return=h,v):(v=r(v,y),v.return=h,v)}function f(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dh(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:return y=Fl(v.type,v.key,v.props,null,h.mode,y),y.ref=Uo(h,null,v),y.return=h,y;case vs:return v=fh(v,h.mode,y),v.return=h,v;case Ki:var _=v._init;return f(h,_(v._payload),y)}if(Bo(v)||Io(v))return v=zr(v,h.mode,y,null),v.return=h,v;El(h,v)}return null}function d(h,v,y,_){var I=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(h,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return y.key===I?l(h,v,y,_):null;case vs:return y.key===I?c(h,v,y,_):null;case Ki:return I=y._init,d(h,v,I(y._payload),_)}if(Bo(y)||Io(y))return I!==null?null:u(h,v,y,_,null);El(h,y)}return null}function p(h,v,y,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(y)||null,a(v,h,""+_,I);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ll:return h=h.get(_.key===null?y:_.key)||null,l(v,h,_,I);case vs:return h=h.get(_.key===null?y:_.key)||null,c(v,h,_,I);case Ki:var C=_._init;return p(h,v,y,C(_._payload),I)}if(Bo(_)||Io(_))return h=h.get(y)||null,u(v,h,_,I,null);El(v,_)}return null}function g(h,v,y,_){for(var I=null,C=null,b=v,P=v=0,w=null;b!==null&&P<y.length;P++){b.index>P?(w=b,b=null):w=b.sibling;var x=d(h,b,y[P],_);if(x===null){b===null&&(b=w);break}t&&b&&x.alternate===null&&e(h,b),v=s(x,v,P),C===null?I=x:C.sibling=x,C=x,b=w}if(P===y.length)return n(h,b),vt&&Lr(h,P),I;if(b===null){for(;P<y.length;P++)b=f(h,y[P],_),b!==null&&(v=s(b,v,P),C===null?I=b:C.sibling=b,C=b);return vt&&Lr(h,P),I}for(b=i(h,b);P<y.length;P++)w=p(b,h,P,y[P],_),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?P:w.key),v=s(w,v,P),C===null?I=w:C.sibling=w,C=w);return t&&b.forEach(function(A){return e(h,A)}),vt&&Lr(h,P),I}function S(h,v,y,_){var I=Io(y);if(typeof I!="function")throw Error(ne(150));if(y=I.call(y),y==null)throw Error(ne(151));for(var C=I=null,b=v,P=v=0,w=null,x=y.next();b!==null&&!x.done;P++,x=y.next()){b.index>P?(w=b,b=null):w=b.sibling;var A=d(h,b,x.value,_);if(A===null){b===null&&(b=w);break}t&&b&&A.alternate===null&&e(h,b),v=s(A,v,P),C===null?I=A:C.sibling=A,C=A,b=w}if(x.done)return n(h,b),vt&&Lr(h,P),I;if(b===null){for(;!x.done;P++,x=y.next())x=f(h,x.value,_),x!==null&&(v=s(x,v,P),C===null?I=x:C.sibling=x,C=x);return vt&&Lr(h,P),I}for(b=i(h,b);!x.done;P++,x=y.next())x=p(b,h,P,x.value,_),x!==null&&(t&&x.alternate!==null&&b.delete(x.key===null?P:x.key),v=s(x,v,P),C===null?I=x:C.sibling=x,C=x);return t&&b.forEach(function(Y){return e(h,Y)}),vt&&Lr(h,P),I}function m(h,v,y,_){if(typeof y=="object"&&y!==null&&y.type===ys&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:e:{for(var I=y.key,C=v;C!==null;){if(C.key===I){if(I=y.type,I===ys){if(C.tag===7){n(h,C.sibling),v=r(C,y.props.children),v.return=h,h=v;break e}}else if(C.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ki&&Cg(I)===C.type){n(h,C.sibling),v=r(C,y.props),v.ref=Uo(h,C,y),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}y.type===ys?(v=zr(y.props.children,h.mode,_,y.key),v.return=h,h=v):(_=Fl(y.type,y.key,y.props,null,h.mode,_),_.ref=Uo(h,v,y),_.return=h,h=_)}return o(h);case vs:e:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=fh(y,h.mode,_),v.return=h,h=v}return o(h);case Ki:return C=y._init,m(h,v,C(y._payload),_)}if(Bo(y))return g(h,v,y,_);if(Io(y))return S(h,v,y,_);El(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=dh(y,h.mode,_),v.return=h,h=v),o(h)):n(h,v)}return m}var zs=j0(!0),Q0=j0(!1),Jl=pr(null),Kl=null,As=null,Td=null;function Ad(){Td=As=Kl=null}function bd(t){var e=Jl.current;pt(Jl),t._currentValue=e}function Gh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Kl=t,Td=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(fn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Td!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(Kl===null)throw Error(ne(308));As=t,Kl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Ur=null;function Cd(t){Ur===null?Ur=[t]:Ur.push(t)}function ev(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}function Rg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,S=a;switch(d=e,p=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=St({},f,d);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=f}}function Pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ya={},fi=pr(ya),ca=pr(ya),ua=pr(ya);function Fr(t){if(t===ya)throw Error(ne(174));return t}function Pd(t,e){switch(ut(ua,e),ut(ca,t),ut(fi,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eh(e,t)}pt(fi),ut(fi,e)}function ks(){pt(fi),pt(ca),pt(ua)}function nv(t){Fr(ua.current);var e=Fr(fi.current),n=Eh(e,t.type);e!==n&&(ut(ca,t),ut(fi,n))}function Id(t){ca.current===t&&(pt(fi),pt(ca))}var _t=pr(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function Ld(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var Il=Pi.ReactCurrentDispatcher,ah=Pi.ReactCurrentBatchConfig,Vr=0,xt=null,Lt=null,Ot=null,ec=!1,$o=!1,ha=0,ZS=0;function Zt(){throw Error(ne(321))}function Dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Nd(t,e,n,i,r,s){if(Vr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?QS:eM,t=n(i,r),$o){s=0;do{if($o=!1,ha=0,25<=s)throw Error(ne(301));s+=1,Ot=Lt=null,e.updateQueue=null,Il.current=tM,t=n(i,r)}while($o)}if(Il.current=tc,e=Lt!==null&&Lt.next!==null,Vr=0,Ot=Lt=xt=null,ec=!1,e)throw Error(ne(300));return t}function Ud(){var t=ha!==0;return ha=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?xt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function kn(){if(Lt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ot===null?xt.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=t;else{if(t===null)throw Error(ne(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?xt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function da(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,xt.lanes|=u,Hr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function iv(){}function rv(t,e){var n=xt,i=kn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Fd(av.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,fa(9,ov.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ne(349));(Vr&30)!==0||sv(n,e,r)}return r}function sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ov(t,e,n,i){e.value=n,e.getSnapshot=i,lv(e)&&cv(t)}function av(t,e,n){return n(function(){lv(e)&&cv(t)})}function lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function cv(t){var e=Ci(t,1);e!==null&&Qn(e,t,1,-1)}function Ig(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=jS.bind(null,xt,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function uv(){return kn().memoizedState}function Ll(t,e,n,i){var r=ui();xt.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Dd(i,o.deps)){r.memoizedState=fa(e,n,s,i);return}}xt.flags|=t,r.memoizedState=fa(1|e,n,s,i)}function Lg(t,e){return Ll(8390656,8,t,e)}function Fd(t,e){return fc(2048,8,t,e)}function hv(t,e){return fc(4,2,t,e)}function dv(t,e){return fc(4,4,t,e)}function fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pv(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,fv.bind(null,e,t),n)}function Od(){}function mv(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gv(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vv(t,e,n){return(Vr&21)===0?(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n):(ei(n,e)||(n=M0(),xt.lanes|=n,Hr|=n,t.baseState=!0),e)}function JS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=ah.transition;ah.transition={};try{t(!1),e()}finally{ot=n,ah.transition=i}}function yv(){return kn().memoizedState}function KS(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))xv(e,n);else if(n=ev(t,e,n,i),n!==null){var r=on();Qn(n,t,i,r),Sv(n,e,i)}}function jS(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))xv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,Cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ev(t,e,r,i),n!==null&&(r=on(),Qn(n,t,i,r),Sv(n,e,i))}}function _v(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function xv(t,e){$o=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}var tc={readContext:zn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},QS={readContext:zn,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=KS.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ui();return t={current:t},e.memoizedState=t},useState:Ig,useDebugValue:Od,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=Ig(!1),e=t[0];return t=JS.bind(null,t[1]),ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ui();if(vt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),zt===null)throw Error(ne(349));(Vr&30)!==0||sv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lg(av.bind(null,i,s,t),[t]),i.flags|=2048,fa(9,ov.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ui(),e=zt.identifierPrefix;if(vt){var n=wi,i=Ei;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eM={readContext:zn,useCallback:mv,useContext:zn,useEffect:Fd,useImperativeHandle:pv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:gv,useReducer:lh,useRef:uv,useState:function(){return lh(da)},useDebugValue:Od,useDeferredValue:function(t){var e=kn();return vv(e,Lt.memoizedState,t)},useTransition:function(){var t=lh(da)[0],e=kn().memoizedState;return[t,e]},useMutableSource:iv,useSyncExternalStore:rv,useId:yv,unstable_isNewReconciler:!1},tM={readContext:zn,useCallback:mv,useContext:zn,useEffect:Fd,useImperativeHandle:pv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:gv,useReducer:ch,useRef:uv,useState:function(){return ch(da)},useDebugValue:Od,useDeferredValue:function(t){var e=kn();return Lt===null?e.memoizedState=t:vv(e,Lt.memoizedState,t)},useTransition:function(){var t=ch(da)[0],e=kn().memoizedState;return[t,e]},useMutableSource:iv,useSyncExternalStore:rv,useId:yv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=cr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Qn(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=cr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Qn(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=cr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Qn(e,t,i,n),Pl(e,t,i))}};function Dg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,i)||!sa(r,s):!0}function Mv(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=mn(e)?kr:jt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ng(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=mn(e)?kr:jt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pc.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=Ix(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nM=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ic||(ic=!0,nd=i),Yh(t,e)},n}function wv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yh(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ug(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gM.bind(null,t,e,n),e.then(t,t))}function Fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var iM=Pi.ReactCurrentOwner,fn=!1;function sn(t,e,n,i){e.child=t===null?Q0(e,null,n,i):zs(e,t.child,n,i)}function zg(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=Nd(t,e,n,i,s,r),n=Ud(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(vt&&n&&Md(e),e.flags|=1,sn(t,e,i,r),e.child)}function kg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tv(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(sa(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(fn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return qh(t,e,n,i,r)}function Av(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Cs,Mn),Mn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Cs,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Cs,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Cs,Mn),Mn|=i;return sn(t,e,r,n),e.child}function bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qh(t,e,n,i,r){var s=mn(n)?kr:jt.current;return s=Fs(e,s),Ds(e,r),n=Nd(t,e,n,i,s,r),i=Ud(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(vt&&i&&Md(e),e.flags|=1,sn(t,e,n,r),e.child)}function Bg(t,e,n,i,r){if(mn(n)){var s=!0;ql(e)}else s=!1;if(Ds(e,r),e.stateNode===null)Dl(t,e),Mv(e,n,i),Xh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=mn(n)?kr:jt.current,c=Fs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ng(e,o,i,c),ji=!1;var d=e.memoizedState;o.state=d,jl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||ji?(typeof u=="function"&&(Wh(e,n,u,i),l=e.memoizedState),(a=ji||Dg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=mn(n)?kr:jt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Ng(e,o,i,l),ji=!1,d=e.memoizedState,o.state=d,jl(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||pn.current||ji?(typeof p=="function"&&(Wh(e,n,p,i),g=e.memoizedState),(c=ji||Dg(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return $h(t,e,n,i,s,r)}function $h(t,e,n,i,r,s){bv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tg(e,n,!1),Ri(t,e,s);i=e.stateNode,iM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&Tg(e,n,!0),e.child}function Cv(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),Pd(t,e.containerInfo)}function Vg(t,e,n,i,r){return Os(),wd(r),e.flags|=256,sn(t,e,n,i),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function Jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rv(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jh(n),e.memoizedState=Zh,t):zd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zh,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,i){return i!==null&&wd(i),zs(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=uh(Error(ne(422))),wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&zs(e,t.child,null,o),e.child.memoizedState=Jh(o),e.memoizedState=Zh,s);if((e.mode&1)===0)return wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=uh(s,i,void 0),wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Qn(i,t,r,-1))}return Wd(),i=uh(Error(ne(421))),wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=or(r.nextSibling),wn=e,vt=!0,Kn=null,t!==null&&(Nn[Un++]=Ei,Nn[Un++]=wi,Nn[Un++]=Br,Ei=t.id,wi=t.overflow,Br=e),e=zd(e,i.children),e.flags|=4096,e)}function Hg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gh(t.return,e,n)}function hh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Pv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=_t.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hg(t,n,e);else if(t.tag===19)Hg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hh(e,!0,n,null,s);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sM(t,e,n){switch(e.tag){case 3:Cv(e),Os();break;case 5:nv(e);break;case 1:mn(e.type)&&ql(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Rv(t,e,n):(ut(_t,_t.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Pv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Av(t,e,n)}return Ri(t,e,n)}var Iv,Kh,Lv,Dv;Iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kh=function(){};Lv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(fi.current);var s=null;switch(n){case"input":r=_h(t,r),i=_h(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Mh(t,r),i=Mh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Xl)}wh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oM(t,e,n){var i=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return mn(e.type)&&Yl(),Jt(e),null;case 3:return i=e.stateNode,ks(),pt(pn),pt(jt),Ld(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Kn!==null&&(sd(Kn),Kn=null))),Kh(t,e),Jt(e),null;case 5:Id(e);var r=Fr(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Lv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Jt(e),null}if(t=Fr(fi.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[la]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)ft(Ho[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Jm(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":jm(i,s),ft("invalid",i)}wh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":cl(i),Km(i,s,!0);break;case"textarea":cl(i),Qm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[la]=i,Iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Th(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ho.length;r++)ft(Ho[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Jm(t,i),r=_h(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ft("invalid",t);break;case"textarea":jm(t,i),r=Mh(t,i),ft("invalid",t);break;default:r=i}wh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?u0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&l0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&ld(t,s,l,o))}switch(n){case"input":cl(t),Km(t,i,!1);break;case"textarea":cl(t),Qm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)Dv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Fr(ua.current),Fr(fi.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Jt(e),null;case 13:if(pt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&En!==null&&(e.mode&1)!==0&&(e.flags&128)===0)K0(),Os(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[hi]=e}else Os(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Kn!==null&&(sd(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(_t.current&1)!==0?Dt===0&&(Dt=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return ks(),Kh(t,e),t===null&&oa(e.stateNode.containerInfo),Jt(e),null;case 10:return bd(e.type._context),Jt(e),null;case 17:return mn(e.type)&&Yl(),Jt(e),null;case 19:if(pt(_t),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fo(s,!1);else{if(Dt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ql(t),o!==null){for(e.flags|=128,Fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Vs&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Jt(e),null}else 2*Tt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Gd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Mn&1073741824)!==0&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function aM(t,e){switch(Ed(e),e.tag){case 1:return mn(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),pt(pn),pt(jt),Ld(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(pt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(_t),null;case 4:return ks(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Tl=!1,Kt=!1,lM=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function jh(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Gg=!1;function cM(t,e){if(Uh=Hl,t=z0(),Sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},Hl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:Zn(e.type,S),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(_){Et(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return g=Gg,Gg=!1,g}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jh(e,n,s)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[la],delete e[kh],delete e[XS],delete e[YS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uv(t){return t.tag===5||t.tag===3||t.tag===4}function Wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var Gt=null,Jn=!1;function Ji(t,e,n){for(n=n.child;n!==null;)Fv(t,e,n),n=n.sibling}function Fv(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:Kt||bs(n,e);case 6:var i=Gt,r=Jn;Gt=null,Ji(t,e,n),Gt=i,Jn=r,Gt!==null&&(Jn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Jn?(t=Gt,n=n.stateNode,t.nodeType===8?rh(t.parentNode,n):t.nodeType===1&&rh(t,n),ia(t)):rh(Gt,n.stateNode));break;case 4:i=Gt,r=Jn,Gt=n.stateNode.containerInfo,Jn=!0,Ji(t,e,n),Gt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&jh(n,e,o),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!Kt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Ji(t,e,n),Kt=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function Xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lM),e.forEach(function(i){var r=yM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Jn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Gt===null)throw Error(ne(160));Fv(s,o,r),Gt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ci(t),i&4){try{Zo(3,t,t.return),mc(3,t)}catch(S){Et(t,t.return,S)}try{Zo(5,t,t.return)}catch(S){Et(t,t.return,S)}}break;case 1:$n(e,t),ci(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if($n(e,t),ci(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(S){Et(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&s0(r,s),Th(a,o);var c=Th(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?u0(r,f):u==="dangerouslySetInnerHTML"?l0(r,f):u==="children"?Qo(r,f):ld(r,u,f,c)}switch(a){case"input":xh(r,s);break;case"textarea":o0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(S){Et(t,t.return,S)}}break;case 6:if($n(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Et(t,t.return,S)}}break;case 3:if($n(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(S){Et(t,t.return,S)}break;case 4:$n(e,t),ci(t);break;case 13:$n(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=Tt())),i&4&&Xg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||u,$n(e,t),Kt=c):$n(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(Ae=t,u=t.child;u!==null;){for(f=Ae=u;Ae!==null;){switch(d=Ae,p=d.child,d.tag){case 0:case 11:case 14:case 15:Zo(4,d,d.return);break;case 1:bs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){Et(i,n,S)}}break;case 5:bs(d,d.return);break;case 22:if(d.memoizedState!==null){qg(f);continue}}p!==null?(p.return=d,Ae=p):qg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=c0("display",o))}catch(S){Et(t,t.return,S)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Et(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),ci(t),i&4&&Xg(t);break;case 21:break;default:$n(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=Wg(t);td(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wg(t);ed(t,a,o);break;default:throw Error(ne(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uM(t,e,n){Ae=t,zv(t,e,n)}function zv(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Tl;var c=Kt;if(Tl=o,(Kt=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?$g(r):l!==null?(l.return=o,Ae=l):$g(r);for(;s!==null;)Ae=s,zv(s,e,n),s=s.sibling;Ae=r,Tl=a,Kt=c}Yg(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Ae=s):Yg(t,e,n)}}function Yg(t){for(;Ae!==null;){var e=Ae;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Kt||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Kt||e.flags&512&&Qh(e)}catch(d){Et(e,e.return,d)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function qg(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function $g(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Qh(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Qh(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var hM=Math.ceil,nc=Pi.ReactCurrentDispatcher,kd=Pi.ReactCurrentOwner,On=Pi.ReactCurrentBatchConfig,tt=0,zt=null,bt=null,Wt=0,Mn=0,Cs=pr(0),Dt=0,pa=null,Hr=0,gc=0,Bd=0,Jo=null,dn=null,Vd=0,Vs=1/0,Si=null,ic=!1,nd=null,lr=null,Al=!1,nr=null,rc=0,Ko=0,id=null,Nl=-1,Ul=0;function on(){return(tt&6)!==0?Tt():Nl!==-1?Nl:Nl=Tt()}function cr(t){return(t.mode&1)===0?1:(tt&2)!==0&&Wt!==0?Wt&-Wt:$S.transition!==null?(Ul===0&&(Ul=M0()),Ul):(t=ot,t!==0||(t=window.event,t=t===void 0?16:R0(t.type)),t)}function Qn(t,e,n,i){if(50<Ko)throw Ko=0,id=null,Error(ne(185));ma(t,n,i),((tt&2)===0||t!==zt)&&(t===zt&&((tt&2)===0&&(gc|=n),Dt===4&&er(t,Wt)),gn(t,i),n===1&&tt===0&&(e.mode&1)===0&&(Vs=Tt()+500,dc&&mr()))}function gn(t,e){var n=t.callbackNode;Jx(t,e);var i=Vl(t,t===zt?Wt:0);if(i===0)n!==null&&ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ng(n),e===1)t.tag===0?qS(Zg.bind(null,t)):$0(Zg.bind(null,t)),GS(function(){(tt&6)===0&&mr()}),n=null;else{switch(E0(i)){case 1:n=fd;break;case 4:n=x0;break;case 16:n=Bl;break;case 536870912:n=S0;break;default:n=Bl}n=Yv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(Nl=-1,Ul=0,(tt&6)!==0)throw Error(ne(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Vl(t,t===zt?Wt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=sc(t,i);else{e=i;var r=tt;tt|=2;var s=Vv();(zt!==t||Wt!==e)&&(Si=null,Vs=Tt()+500,Or(t,e));do try{pM();break}catch(a){Bv(t,a)}while(!0);Ad(),nc.current=s,tt=r,bt!==null?e=0:(zt=null,Wt=0,e=Dt)}if(e!==0){if(e===2&&(r=Ph(t),r!==0&&(i=r,e=rd(t,r))),e===1)throw n=pa,Or(t,0),er(t,i),gn(t,Tt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,(i&30)===0&&!dM(r)&&(e=sc(t,i),e===2&&(s=Ph(t),s!==0&&(i=s,e=rd(t,s))),e===1))throw n=pa,Or(t,0),er(t,i),gn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Dr(t,dn,Si);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Vd+500-Tt(),10<e)){if(Vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zh(Dr.bind(null,t,dn,Si),e);break}Dr(t,dn,Si);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hM(i/1960))-i,10<i){t.timeoutHandle=zh(Dr.bind(null,t,dn,Si),i);break}Dr(t,dn,Si);break;case 5:Dr(t,dn,Si);break;default:throw Error(ne(329))}}}return gn(t,Tt()),t.callbackNode===n?kv.bind(null,t):null}function rd(t,e){var n=Jo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=sc(t,e),t!==2&&(e=dn,dn=n,e!==null&&sd(e)),t}function sd(t){dn===null?dn=t:dn.push.apply(dn,t)}function dM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Bd,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Zg(t){if((tt&6)!==0)throw Error(ne(327));Ns();var e=Vl(t,0);if((e&1)===0)return gn(t,Tt()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var i=Ph(t);i!==0&&(e=i,n=rd(t,i))}if(n===1)throw n=pa,Or(t,0),er(t,e),gn(t,Tt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,dn,Si),gn(t,Tt()),null}function Hd(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Vs=Tt()+500,dc&&mr())}}function Gr(t){nr!==null&&nr.tag===0&&(tt&6)===0&&Ns();var e=tt;tt|=1;var n=On.transition,i=ot;try{if(On.transition=null,ot=1,t)return t()}finally{ot=i,On.transition=n,tt=e,(tt&6)===0&&mr()}}function Gd(){Mn=Cs.current,pt(Cs)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HS(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:ks(),pt(pn),pt(jt),Ld();break;case 5:Id(i);break;case 4:ks();break;case 13:pt(_t);break;case 19:pt(_t);break;case 10:bd(i.type._context);break;case 22:case 23:Gd()}n=n.return}if(zt=t,bt=t=ur(t.current,null),Wt=Mn=e,Dt=0,pa=null,Bd=gc=Hr=0,dn=Jo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ur=null}return t}function Bv(t,e){do{var n=bt;try{if(Ad(),Il.current=tc,ec){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ec=!1}if(Vr=0,Ot=Lt=xt=null,$o=!1,ha=0,kd.current=null,n===null||n.return===null){Dt=1,pa=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Fg(o);if(p!==null){p.flags&=-257,Og(p,o,a,s,e),p.mode&1&&Ug(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if((e&1)===0){Ug(s,c,e),Wd();break e}l=Error(ne(426))}}else if(vt&&a.mode&1){var m=Fg(o);if(m!==null){(m.flags&65536)===0&&(m.flags|=256),Og(m,o,a,s,e),wd(Bs(l,a));break e}}s=l=Bs(l,a),Dt!==4&&(Dt=2),Jo===null?Jo=[s]:Jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Ev(s,l,e);Rg(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=wv(s,a,e);Rg(s,_);break e}}s=s.return}while(s!==null)}Gv(n)}catch(I){e=I,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Vv(){var t=nc.current;return nc.current=tc,t===null?tc:t}function Wd(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||(Hr&268435455)===0&&(gc&268435455)===0||er(zt,Wt)}function sc(t,e){var n=tt;tt|=2;var i=Vv();(zt!==t||Wt!==e)&&(Si=null,Or(t,e));do try{fM();break}catch(r){Bv(t,r)}while(!0);if(Ad(),tt=n,nc.current=i,bt!==null)throw Error(ne(261));return zt=null,Wt=0,Dt}function fM(){for(;bt!==null;)Hv(bt)}function pM(){for(;bt!==null&&!Vx();)Hv(bt)}function Hv(t){var e=Xv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Gv(t):bt=e,kd.current=null}function Gv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=oM(n,e,Mn),n!==null){bt=n;return}}else{if(n=aM(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,bt=null;return}}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Dr(t,e,n){var i=ot,r=On.transition;try{On.transition=null,ot=1,mM(t,e,n,i)}finally{On.transition=r,ot=i}return null}function mM(t,e,n,i){do Ns();while(nr!==null);if((tt&6)!==0)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kx(t,s),t===zt&&(bt=zt=null,Wt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Al||(Al=!0,Yv(Bl,function(){return Ns(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=On.transition,On.transition=null;var o=ot;ot=1;var a=tt;tt|=4,kd.current=null,cM(t,n),Ov(n,t),OS(Fh),Hl=!!Uh,Fh=Uh=null,t.current=n,uM(n,t,r),Hx(),tt=a,ot=o,On.transition=s}else t.current=n;if(Al&&(Al=!1,nr=t,rc=r),s=t.pendingLanes,s===0&&(lr=null),Xx(n.stateNode,i),gn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ic)throw ic=!1,t=nd,nd=null,t;return(rc&1)!==0&&t.tag!==0&&Ns(),s=t.pendingLanes,(s&1)!==0?t===id?Ko++:(Ko=0,id=t):Ko=0,mr(),null}function Ns(){if(nr!==null){var t=E0(rc),e=On.transition,n=ot;try{if(On.transition=null,ot=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,rc=0,(tt&6)!==0)throw Error(ne(331));var r=tt;for(tt|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if((Ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:Zo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ae=f;else for(;Ae!==null;){u=Ae;var d=u.sibling,p=u.return;if(Nv(u),u===c){Ae=null;break}if(d!==null){d.return=p,Ae=d;break}Ae=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ae=h;break e}Ae=s.return}}var v=t.current;for(Ae=v;Ae!==null;){o=Ae;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,Ae=y;else e:for(o=v;Ae!==null;){if(a=Ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(I){Et(a,a.return,I)}if(a===o){Ae=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Ae=_;break e}Ae=a.return}}if(tt=r,mr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{ot=n,On.transition=e}}return!1}function Jg(t,e,n){e=Bs(n,e),e=Ev(t,e,1),t=ar(t,e,1),e=on(),t!==null&&(ma(t,1,e),gn(t,e))}function Et(t,e,n){if(t.tag===3)Jg(t,t,n);else for(;e!==null;){if(e.tag===3){Jg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=Bs(n,t),t=wv(e,t,1),e=ar(e,t,1),t=on(),e!==null&&(ma(e,1,t),gn(e,t));break}}e=e.return}}function gM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Dt===4||Dt===3&&(Wt&130023424)===Wt&&500>Tt()-Vd?Or(t,0):Bd|=n),gn(t,e)}function Wv(t,e){e===0&&((t.mode&1)===0?e=1:(e=dl,dl<<=1,(dl&130023424)===0&&(dl=4194304)));var n=on();t=Ci(t,e),t!==null&&(ma(t,e,n),gn(t,n))}function vM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wv(t,n)}function yM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Wv(t,n)}var Xv;Xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return fn=!1,sM(t,e,n);fn=(t.flags&131072)!==0}else fn=!1,vt&&(e.flags&1048576)!==0&&Z0(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=Fs(e,jt.current);Ds(e,n),r=Nd(null,e,i,t,r,n);var s=Ud();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rd(e),r.updater=pc,e.stateNode=r,r._reactInternals=e,Xh(e,i,t,n),e=$h(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Md(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xM(i),t=Zn(i,t),r){case 0:e=qh(null,e,i,t,n);break e;case 1:e=Bg(null,e,i,t,n);break e;case 11:e=zg(null,e,i,t,n);break e;case 14:e=kg(null,e,i,Zn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),qh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Bg(t,e,i,r,n);case 3:e:{if(Cv(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tv(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(ne(423)),e),e=Vg(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(ne(424)),e),e=Vg(t,e,i,n,r);break e}else for(En=or(e.stateNode.containerInfo.firstChild),wn=e,vt=!0,Kn=null,n=Q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Ri(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return nv(e),t===null&&Hh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Oh(i,r)?o=null:s!==null&&Oh(i,s)&&(e.flags|=32),bv(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return Rv(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),zg(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Jl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!pn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=zn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),kg(t,e,i,r,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Dl(t,e),e.tag=1,mn(i)?(t=!0,ql(e)):t=!1,Ds(e,n),Mv(e,i,r),Xh(e,i,r,n),$h(null,e,i,!0,t,n);case 19:return Pv(t,e,n);case 22:return Av(t,e,n)}throw Error(ne(156,e.tag))};function Yv(t,e){return _0(t,e)}function _M(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new _M(t,e,n,i)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xM(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ud)return 11;if(t===hd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return zr(n.children,r,s,e);case cd:o=8,r|=8;break;case mh:return t=Fn(12,n,e,r|2),t.elementType=mh,t.lanes=s,t;case gh:return t=Fn(13,n,e,r),t.elementType=gh,t.lanes=s,t;case vh:return t=Fn(19,n,e,r),t.elementType=vh,t.lanes=s,t;case n0:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case e0:o=10;break e;case t0:o=9;break e;case ud:o=11;break e;case hd:o=14;break e;case Ki:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=n0,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,o,a,l){return t=new SM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(s),t}function MM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qv(t){if(!t)return dr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(mn(n))return q0(t,n,e)}return e}function $v(t,e,n,i,r,s,o,a,l){return t=Yd(n,i,!0,t,r,s,o,a,l),t.context=qv(null),n=t.current,i=on(),r=cr(n),s=Ti(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,ma(t,r,i),gn(t,i),t}function yc(t,e,n,i){var r=e.current,s=on(),o=cr(r);return n=qv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(Qn(t,r,o,s),Pl(t,r,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function EM(){return null}var Zv=typeof reportError=="function"?reportError:function(t){console.error(t)};function $d(t){this._internalRoot=t}_c.prototype.render=$d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));yc(t,e,null,null)};_c.prototype.unmount=$d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){yc(null,t,null,null)}),e[bi]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var e=A0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&C0(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function wM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=oc(o);s.call(c)}}var o=$v(e,i,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[bi]=o.current,oa(t.nodeType===8?t.parentNode:t),Gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=oc(l);a.call(c)}}var l=Yd(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=l,t[bi]=l.current,oa(t.nodeType===8?t.parentNode:t),Gr(function(){yc(e,l,n,i)}),l}function Sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=oc(o);a.call(l)}}yc(e,o,t,r)}else o=wM(n,e,t,r,i);return oc(o)}w0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vo(e.pendingLanes);n!==0&&(pd(e,n|1),gn(e,Tt()),(tt&6)===0&&(Vs=Tt()+500,mr()))}break;case 13:Gr(function(){var i=Ci(t,1);if(i!==null){var r=on();Qn(i,t,1,r)}}),qd(t,1)}};md=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=on();Qn(e,t,134217728,n)}qd(t,134217728)}};T0=function(t){if(t.tag===13){var e=cr(t),n=Ci(t,e);if(n!==null){var i=on();Qn(n,t,e,i)}qd(t,e)}};A0=function(){return ot};b0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};bh=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(ne(90));r0(i),xh(i,r)}}}break;case"textarea":o0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};f0=Hd;p0=Gr;var TM={usingClientEntryPoint:!1,Events:[va,Ms,hc,h0,d0,Hd]},Oo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AM={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v0(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||EM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(zo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zo.isDisabled&&zo.supportsFiber))try{ac=zo.inject(AM),di=zo}catch{}var zo;bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(ne(200));return MM(t,e,null,n)};bn.createRoot=function(t,e){if(!Zd(t))throw Error(ne(299));var n=!1,i="",r=Zv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,oa(t.nodeType===8?t.parentNode:t),new $d(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=v0(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Gr(t)};bn.hydrate=function(t,e,n){if(!xc(e))throw Error(ne(200));return Sc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Zv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _c(e)};bn.render=function(t,e,n){if(!xc(e))throw Error(ne(200));return Sc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!xc(t))throw Error(ne(40));return t._reactRootContainer?(Gr(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};bn.unstable_batchedUpdates=Hd;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Sc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426"});var Qv=xi((IC,jv)=>{"use strict";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(t){console.error(t)}}Kv(),jv.exports=Jv()});var ty=xi(Jd=>{"use strict";var ey=Qv();Jd.createRoot=ey.createRoot,Jd.hydrateRoot=ey.hydrateRoot;var LC});var O_=xi(Eu=>{"use strict";var Zb=nl(),Jb=Symbol.for("react.element"),Kb=Symbol.for("react.fragment"),jb=Object.prototype.hasOwnProperty,Qb=Zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eC={key:!0,ref:!0,__self:!0,__source:!0};function F_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jb.call(e,i)&&!eC.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jb,type:t,key:s,ref:o,props:r,_owner:Qb.current}}Eu.Fragment=Kb;Eu.jsx=F_;Eu.jsxs=F_});var Xa=xi((zC,z_)=>{"use strict";z_.exports=O_()});var nx=fs(ty());var us=fs(nl());var bM=0,ny=1,CM=2;var u_=1,RM=2,Fi=3,Ar=0,yn=1,Vn=2,Er=0,oo=1,iy=2,ry=3,sy=4,PM=5,Qr=100,IM=101,LM=102,DM=103,NM=104,UM=200,FM=201,OM=202,zM=203,Lf=204,Df=205,kM=206,BM=207,VM=208,HM=209,GM=210,WM=211,XM=212,YM=213,qM=214,Nf=0,Uf=1,Ff=2,uo=3,Of=4,zf=5,kf=6,Bf=7,h_=0,$M=1,ZM=2,wr=0,JM=1,KM=2,jM=3,QM=4,e1=5,t1=6,nm=7;var d_=300,ho=301,fo=302,Vf=303,Hf=304,_u=306,Wi=1e3,zi=1001,Gf=1002,Pn=1003,n1=1004;var Mc=1005;var Hn=1006,Kd=1007;var ki=1008;var Xi=1009,f_=1010,p_=1011,Ra=1012,im=1013,ns=1014,Bi=1015,Wa=1016,rm=1017,sm=1018,po=1020,m_=35902,g_=1021,v_=1022,ri=1023,y_=1024,__=1025,ao=1026,mo=1027,x_=1028,om=1029,S_=1030,am=1031;var lm=1033,qc=33776,$c=33777,Zc=33778,Jc=33779,Wf=35840,Xf=35841,Yf=35842,qf=35843,$f=36196,Zf=37492,Jf=37496,Kf=37808,jf=37809,Qf=37810,ep=37811,tp=37812,np=37813,ip=37814,rp=37815,sp=37816,op=37817,ap=37818,lp=37819,cp=37820,up=37821,Kc=36492,hp=36494,dp=36495,M_=36283,fp=36284,pp=36285,mp=36286;var jc=2300,gp=2301,jd=2302,oy=2400,ay=2401,ly=2402;var i1=3200,r1=3201;var E_=0,s1=1,Mr="",tn="srgb",Eo="srgb-linear",xu="linear",lt="srgb";var Ws=7680;var cy=519,o1=512,a1=513,l1=514,w_=515,c1=516,u1=517,h1=518,d1=519,uy=35044;var hy="300 es",Vi=2e3,Qc=2001,br=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qd=Math.PI/180,vp=180/Math.PI;function wo(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function f1(t,e){return(t%e+e)%e}function ef(t,e,n){return(1-n)*t+n*e}function _a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var he=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],S=r[0],m=r[3],h=r[6],v=r[1],y=r[4],_=r[7],I=r[2],C=r[5],b=r[8];return s[0]=o*S+a*v+l*I,s[3]=o*m+a*y+l*C,s[6]=o*h+a*_+l*b,s[1]=c*S+u*v+f*I,s[4]=c*m+u*y+f*C,s[7]=c*h+u*_+f*b,s[2]=d*S+p*v+g*I,s[5]=d*m+p*y+g*C,s[8]=d*h+p*_+g*b,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tf.makeScale(e,n)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,n){return this.premultiply(tf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tf=new Xe;function T_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function p1(){let t=eu("canvas");return t.style.display="block",t}var dy={};function wa(t){t in dy||(dy[t]=!0,console.warn(t))}function m1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function g1(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function v1(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nt={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===lt&&(t.r=Gi(t.r),t.g=Gi(t.g),t.b=Gi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===lt&&(t.r=lo(t.r),t.g=lo(t.g),t.b=lo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Mr?xu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var fy=[.64,.33,.3,.6,.15,.06],py=[.2126,.7152,.0722],my=[.3127,.329],gy=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vy=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Eo]:{primaries:fy,whitePoint:my,transfer:xu,toXYZ:gy,fromXYZ:vy,luminanceCoefficients:py,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:fy,whitePoint:my,transfer:lt,toXYZ:gy,fromXYZ:vy,luminanceCoefficients:py,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Xs,yp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=eu("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=eu("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y1=0,tu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nf(r[o].image)):s.push(nf(r[o]))}else s=nf(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _1=0,_n=class t extends br{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=zi,r=zi,s=Hn,o=ki,a=ri,l=Xi,c=t.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=wo(),this.name="",this.source=new tu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=d_;_n.DEFAULT_ANISOTROPY=1;var wt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,_=(p+1)/2,I=(h+1)/2,C=(u+d)/4,b=(f+S)/4,P=(g+m)/4;return y>_&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=b/i):_>I?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=P/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=b/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-S)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_p=class extends br{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new tu(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends _p{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},nu=class extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xp=class extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=S;return}if(f!==S||l!==d||c!==p||u!==g){let m=1-a,h=l*d+c*p+u*g+f*S,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){let I=Math.sqrt(y),C=Math.atan2(I,h*v);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}let _=a*v;if(l=l*m+d*_,c=c*m+p*_,u=u*m+g*_,f=f*m+S*_,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yy.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rf=new L,yy=new In,is=class{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ec.copy(i.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),wc.subVectors(this.max,xa),Ys.subVectors(e.a,xa),qs.subVectors(e.b,xa),$s.subVectors(e.c,xa),gr.subVectors(qs,Ys),vr.subVectors($s,qs),Yr.subVectors(Ys,$s);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Yr.z,Yr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Yr.z,0,-Yr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Yr.y,Yr.x,0];return!sf(n,Ys,qs,$s,wc)||(n=[1,0,0,0,1,0,0,0,1],!sf(n,Ys,qs,$s,wc))?!1:(Tc.crossVectors(gr,vr),n=[Tc.x,Tc.y,Tc.z],sf(n,Ys,qs,$s,wc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ii=[new L,new L,new L,new L,new L,new L,new L,new L],ti=new L,Ec=new is,Ys=new L,qs=new L,$s=new L,gr=new L,vr=new L,Yr=new L,xa=new L,wc=new L,Tc=new L,qr=new L;function sf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){qr.fromArray(t,s);let a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),c=n.dot(qr),u=i.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var x1=new is,Sa=new L,of=new L,Pa=class{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):x1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let n=Sa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(of)),this.expandByPoint(Sa.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new L,af=new L,Ac=new L,yr=new L,lf=new L,bc=new L,cf=new L,iu=class{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){af.copy(e).add(n).multiplyScalar(.5),Ac.copy(n).sub(e).normalize(),yr.copy(this.origin).sub(af);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Ac),a=yr.dot(this.direction),l=-yr.dot(Ac),c=yr.lengthSq(),u=Math.abs(1-o*o),f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){let S=1/u;f*=S,d*=S,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(af).addScaledVector(Ac,d),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){lf.subVectors(n,e),bc.subVectors(i,e),cf.crossVectors(lf,bc);let o=this.direction.dot(cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);let l=a*this.direction.dot(bc.crossVectors(yr,bc));if(l<0)return null;let c=a*this.direction.dot(lf.cross(yr));if(c<0||l+c>o)return null;let u=-a*yr.dot(cf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class t{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,S,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,S,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,S,m){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-S*c,n[9]=-a*l,n[2]=S-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*f,g=c*u,S=c*f;n[0]=d+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*f,g=c*u,S=c*f;n[0]=d-S*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=S-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+S,n[1]=l*f,n[5]=S*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=S-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-S*f}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+S,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=S*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S1,e,M1)}lookAt(e,n,i){let r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),_r.crossVectors(i,Cn),_r.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),_r.crossVectors(i,Cn)),_r.normalize(),Cc.crossVectors(Cn,_r),r[0]=_r.x,r[4]=Cc.x,r[8]=Cn.x,r[1]=_r.y,r[5]=Cc.y,r[9]=Cn.y,r[2]=_r.z,r[6]=Cc.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],S=i[6],m=i[10],h=i[14],v=i[3],y=i[7],_=i[11],I=i[15],C=r[0],b=r[4],P=r[8],w=r[12],x=r[1],A=r[5],Y=r[9],B=r[13],X=r[2],K=r[6],W=r[10],re=r[14],G=r[3],ce=r[7],fe=r[11],Te=r[15];return s[0]=o*C+a*x+l*X+c*G,s[4]=o*b+a*A+l*K+c*ce,s[8]=o*P+a*Y+l*W+c*fe,s[12]=o*w+a*B+l*re+c*Te,s[1]=u*C+f*x+d*X+p*G,s[5]=u*b+f*A+d*K+p*ce,s[9]=u*P+f*Y+d*W+p*fe,s[13]=u*w+f*B+d*re+p*Te,s[2]=g*C+S*x+m*X+h*G,s[6]=g*b+S*A+m*K+h*ce,s[10]=g*P+S*Y+m*W+h*fe,s[14]=g*w+S*B+m*re+h*Te,s[3]=v*C+y*x+_*X+I*G,s[7]=v*b+y*A+_*K+I*ce,s[11]=v*P+y*Y+_*W+I*fe,s[15]=v*w+y*B+_*re+I*Te,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],S=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+S*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],S=e[13],m=e[14],h=e[15],v=f*m*c-S*d*c+S*l*p-a*m*p-f*l*h+a*d*h,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,_=u*S*c-g*f*c+g*a*p-o*S*p-u*a*h+o*f*h,I=g*f*l-u*S*l-g*a*d+o*S*d+u*a*m-o*f*m,C=n*v+i*y+r*_+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=v*b,e[1]=(S*d*s-f*m*s-S*r*p+i*m*p+f*r*h-i*d*h)*b,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*b,e[4]=y*b,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*b,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*b,e[8]=_*b,e[9]=(g*f*s-u*S*s-g*i*p+n*S*p+u*i*h-n*f*h)*b,e[10]=(o*S*s-g*a*s+g*i*c-n*S*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*b,e[12]=I*b,e[13]=(u*S*r-g*f*r+g*i*d-n*S*d-u*i*m+n*f*m)*b,e[14]=(g*a*r-o*S*r-g*i*l+n*S*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,S=o*u,m=o*f,h=a*f,v=l*c,y=l*u,_=l*f,I=i.x,C=i.y,b=i.z;return r[0]=(1-(S+h))*I,r[1]=(p+_)*I,r[2]=(g-y)*I,r[3]=0,r[4]=(p-_)*C,r[5]=(1-(d+h))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+y)*b,r[9]=(m-v)*b,r[10]=(1-(d+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Zs.set(r[0],r[1],r[2]).length(),o=Zs.set(r[4],r[5],r[6]).length(),a=Zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);let c=1/s,u=1/o,f=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,n.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),p,g;if(a===Vi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){let l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u,g,S;if(a===Vi)g=(o+s)*f,S=-2*f;else if(a===Qc)g=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Zs=new L,ni=new mt,S1=new L(0,0,0),M1=new L(1,1,1),_r=new L,Cc=new L,Cn=new L,_y=new mt,xy=new In,mi=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _y.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_y,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xy.setFromEuler(this),this.setFromQuaternion(xy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},E1=0,Sy=new L,Js=new In,Di=new mt,Rc=new L,Ma=new L,w1=new L,T1=new In,My=new L(1,0,0),Ey=new L(0,1,0),wy=new L(0,0,1),Ty={type:"added"},A1={type:"removed"},Ks={type:"childadded",child:null},uf={type:"childremoved",child:null},xn=class t extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new L,n=new mi,i=new In,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,n){return Js.setFromAxisAngle(e,n),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(My,e)}rotateY(e){return this.rotateOnAxis(Ey,e)}rotateZ(e){return this.rotateOnAxis(wy,e)}translateOnAxis(e,n){return Sy.copy(e).applyQuaternion(this.quaternion),this.position.add(Sy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(My,e)}translateY(e){return this.translateOnAxis(Ey,e)}translateZ(e){return this.translateOnAxis(wy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rc.copy(e):Rc.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Ma,Rc,this.up):Di.lookAt(Rc,Ma,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Js.setFromRotationMatrix(Di),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ty),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(A1),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ty),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,w1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,T1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};xn.DEFAULT_UP=new L(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new L,Ni=new L,hf=new L,Ui=new L,js=new L,Qs=new L,Ay=new L,df=new L,ff=new L,pf=new L,mf=new wt,gf=new wt,vf=new wt,es=class t{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Ni.subVectors(i,n),hf.subVectors(e,n);let o=ii.dot(ii),a=ii.dot(Ni),l=ii.dot(hf),c=Ni.dot(Ni),u=Ni.dot(hf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return mf.setScalar(0),gf.setScalar(0),vf.setScalar(0),mf.fromBufferAttribute(e,n),gf.fromBufferAttribute(e,i),vf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(mf,s.x),o.addScaledVector(gf,s.y),o.addScaledVector(vf,s.z),o}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Ni.subVectors(e,n),ii.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;js.subVectors(r,i),Qs.subVectors(s,i),df.subVectors(e,i);let l=js.dot(df),c=Qs.dot(df);if(l<=0&&c<=0)return n.copy(i);ff.subVectors(e,r);let u=js.dot(ff),f=Qs.dot(ff);if(u>=0&&f<=u)return n.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(js,o);pf.subVectors(e,s);let p=js.dot(pf),g=Qs.dot(pf);if(g>=0&&p<=g)return n.copy(s);let S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Qs,a);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ay.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Ay,a);let h=1/(m+S+d);return o=S*h,a=d*h,n.copy(i).addScaledVector(js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},A_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function yf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=f1(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=yf(o,s,e+1/3),this.g=yf(o,s,e),this.b=yf(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tn){let i=A_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return nt.fromWorkingColorSpace(en.copy(this),e),Math.round(Yt(en.r*255,0,255))*65536+Math.round(Yt(en.g*255,0,255))*256+Math.round(Yt(en.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(en.copy(this),n);let i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=tn){nt.fromWorkingColorSpace(en.copy(this),e);let n=en.r,i=en.g,r=en.b;return e!==tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(Pc);let i=ef(xr.h,Pc.h,n),r=ef(xr.s,Pc.s,n),s=ef(xr.l,Pc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new qe;qe.NAMES=A_;var b1=0,rs=class extends br{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=wo(),this.name="",this.blending=oo,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=Df,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lf&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},go=class extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=h_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new L,Ic=new he,nn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uy,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ic.fromBufferAttribute(this,n),Ic.applyMatrix3(e),this.setXY(n,Ic.x,Ic.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_a(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_a(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_a(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_a(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uy&&(e.usage=this.usage),e}};var ru=class extends nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var su=class extends nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var qt=class extends nn{constructor(e,n,i){super(new Float32Array(e),n,i)}},C1=0,Bn=new mt,_f=new xn,eo=new L,Rn=new is,Ea=new is,kt=new L,Gn=class t extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T_(e)?su:ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{for(let i=0,r=n.count;i<r;i++){let s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Rn.min,Ea.min),Rn.expandByPoint(kt),kt.addVectors(Rn.max,Ea.max),Rn.expandByPoint(kt)):(Rn.expandByPoint(Ea.min),Rn.expandByPoint(Ea.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),kt.add(eo)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new L,l[P]=new L;let c=new L,u=new L,f=new L,d=new he,p=new he,g=new he,S=new L,m=new L;function h(P,w,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),p.sub(d),g.sub(d);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(A),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[P].add(S),a[w].add(S),a[x].add(S),l[P].add(m),l[w].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){let x=v[P],A=x.start,Y=x.count;for(let B=A,X=A+Y;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new L,_=new L,I=new L,C=new L;function b(P){I.fromBufferAttribute(r,P),C.copy(I);let w=a[P];y.copy(w),y.sub(I.multiplyScalar(I.dot(w))).normalize(),_.crossVectors(C,w);let A=_.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,A)}for(let P=0,w=v.length;P<w;++P){let x=v[P],A=x.start,Y=x.count;for(let B=A,X=A+Y;B<X;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},by=new mt,$r=new iu,Lc=new Pa,Cy=new L,Dc=new L,Nc=new L,Uc=new L,xf=new L,Fc=new L,Ry=new L,Oc=new L,Rt=class extends xn{constructor(e=new Gn,n=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(xf.fromBufferAttribute(f,e),o?Fc.addScaledVector(xf,u):Fc.addScaledVector(xf.sub(n),u))}n.add(Fc)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Lc.containsPoint($r.origin)===!1&&($r.intersectSphere(Lc,Cy)===null||$r.origin.distanceToSquared(Cy)>(e.far-e.near)**2))&&(by.copy(s).invert(),$r.copy(e.ray).applyMatrix4(by),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){let m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,I=y;_<I;_+=3){let C=a.getX(_),b=a.getX(_+1),P=a.getX(_+2);r=zc(this,h,e,i,c,u,f,C,b,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,h=S;m<h;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=zc(this,o,e,i,c,u,f,v,y,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){let m=d[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,I=y;_<I;_+=3){let C=_,b=_+1,P=_+2;r=zc(this,h,e,i,c,u,f,C,b,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,h=S;m<h;m+=3){let v=m,y=m+1,_=m+2;r=zc(this,o,e,i,c,u,f,v,y,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function R1(t,e,n,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;Oc.copy(a),Oc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Oc);return c<n.near||c>n.far?null:{distance:c,point:Oc.clone(),object:t}}function zc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Dc),t.getVertexPosition(l,Nc),t.getVertexPosition(c,Uc);let u=R1(t,e,n,i,Dc,Nc,Uc,Ry);if(u){let f=new L;es.getBarycoord(Ry,Dc,Nc,Uc,f),r&&(u.uv=es.getInterpolatedAttribute(r,a,l,c,f,new he)),s&&(u.uv1=es.getInterpolatedAttribute(s,a,l,c,f,new he)),o&&(u.normal=es.getInterpolatedAttribute(o,a,l,c,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};es.getNormal(Dc,Nc,Uc,d.normal),u.face=d,u.barycoord=f}return u}var La=class t extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function g(S,m,h,v,y,_,I,C,b,P,w){let x=_/b,A=I/P,Y=_/2,B=I/2,X=C/2,K=b+1,W=P+1,re=0,G=0,ce=new L;for(let fe=0;fe<W;fe++){let Te=fe*A-B;for(let ke=0;ke<K;ke++){let et=ke*x-Y;ce[S]=et*v,ce[m]=Te*y,ce[h]=X,c.push(ce.x,ce.y,ce.z),ce[S]=0,ce[m]=0,ce[h]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(ke/b),f.push(1-fe/P),re+=1}}for(let fe=0;fe<P;fe++)for(let Te=0;Te<b;Te++){let ke=d+Te+K*fe,et=d+Te+K*(fe+1),J=d+(Te+1)+K*(fe+1),ie=d+(Te+1)+K*fe;l.push(ke,et,ie),l.push(et,J,ie),G+=6}a.addGroup(p,G,w),p+=G,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vo(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ln(t){let e={};for(let n=0;n<t.length;n++){let i=vo(t[n]);for(let r in i)e[r]=i[r]}return e}function P1(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function b_(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var I1={clone:vo,merge:ln},L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=P1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ou=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Sr=new L,Py=new he,Iy=new he,cn=class extends ou{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,Py,Iy),n.subVectors(Iy,Py)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Qd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},to=-90,no=1,Sp=class extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new cn(to,no,e,n);r.layers=this.layers,this.add(r);let s=new cn(to,no,e,n);s.layers=this.layers,this.add(s);let o=new cn(to,no,e,n);o.layers=this.layers,this.add(o);let a=new cn(to,no,e,n);a.layers=this.layers,this.add(a);let l=new cn(to,no,e,n);l.layers=this.layers,this.add(l);let c=new cn(to,no,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},au=class extends _n{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ho,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mp=class extends Yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new au(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Er});s.uniforms.tEquirect.value=n;let o=new Rt(r,s),a=n.minFilter;return n.minFilter===ki&&(n.minFilter=Hn),new Sp(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},Sf=new L,N1=new L,U1=new Xe,Oi=class{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Sf.subVectors(i,n).cross(N1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||U1.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zr=new Pa,kc=new L,Da=class{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],S=r[10],m=r[11],h=r[12],v=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,d-c,m-p,_-h).normalize(),i[1].setComponents(l+s,d+c,m+p,_+h).normalize(),i[2].setComponents(l+o,d+u,m+g,_+v).normalize(),i[3].setComponents(l-o,d-u,m-g,_-v).normalize(),i[4].setComponents(l-a,d-f,m-S,_-y).normalize(),n===Vi)i[5].setComponents(l+a,d+f,m+S,_+y).normalize();else if(n===Qc)i[5].setComponents(a,f,S,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(kc.x=r.normal.x>0?e.max.x:e.min.x,kc.y=r.normal.y>0?e.max.y:e.min.y,kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function C_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function F1(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let S=f[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yo=class t extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],S=[],m=[];for(let h=0;h<u;h++){let v=h*d-o;for(let y=0;y<c;y++){let _=y*f-s;g.push(_,-v,0),S.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){let y=v+c*h,_=v+c*(h+1),I=v+1+c*(h+1),C=v+1+c*h;p.push(y,_,C),p.push(_,I,C)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(S,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},O1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:O1,alphahash_pars_fragment:z1,alphamap_fragment:k1,alphamap_pars_fragment:B1,alphatest_fragment:V1,alphatest_pars_fragment:H1,aomap_fragment:G1,aomap_pars_fragment:W1,batching_pars_vertex:X1,batching_vertex:Y1,begin_vertex:q1,beginnormal_vertex:$1,bsdfs:Z1,iridescence_fragment:J1,bumpmap_pars_fragment:K1,clipping_planes_fragment:j1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:eE,clipping_planes_vertex:tE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:rE,color_vertex:sE,common:oE,cube_uv_reflection_fragment:aE,defaultnormal_vertex:lE,displacementmap_pars_vertex:cE,displacementmap_vertex:uE,emissivemap_fragment:hE,emissivemap_pars_fragment:dE,colorspace_fragment:fE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:vE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:RE,envmap_vertex:_E,fog_vertex:xE,fog_pars_vertex:SE,fog_fragment:ME,fog_pars_fragment:EE,gradientmap_pars_fragment:wE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:bE,lights_pars_begin:CE,lights_toon_fragment:PE,lights_toon_pars_fragment:IE,lights_phong_fragment:LE,lights_phong_pars_fragment:DE,lights_physical_fragment:NE,lights_physical_pars_fragment:UE,lights_fragment_begin:FE,lights_fragment_maps:OE,lights_fragment_end:zE,logdepthbuf_fragment:kE,logdepthbuf_pars_fragment:BE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:HE,map_fragment:GE,map_pars_fragment:WE,map_particle_fragment:XE,map_particle_pars_fragment:YE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:$E,morphinstance_vertex:ZE,morphcolor_vertex:JE,morphnormal_vertex:KE,morphtarget_pars_vertex:jE,morphtarget_vertex:QE,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:lw,iridescence_pars_fragment:cw,opaque_fragment:uw,packing:hw,premultiplied_alpha_fragment:dw,project_vertex:fw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:_w,shadowmap_vertex:xw,shadowmask_pars_fragment:Sw,skinbase_vertex:Mw,skinning_pars_vertex:Ew,skinning_vertex:ww,skinnormal_vertex:Tw,specularmap_fragment:Aw,specularmap_pars_fragment:bw,tonemapping_fragment:Cw,tonemapping_pars_fragment:Rw,transmission_fragment:Pw,transmission_pars_fragment:Iw,uv_pars_fragment:Lw,uv_pars_vertex:Dw,uv_vertex:Nw,worldpos_vertex:Uw,background_vert:Fw,background_frag:Ow,backgroundCube_vert:zw,backgroundCube_frag:kw,cube_vert:Bw,cube_frag:Vw,depth_vert:Hw,depth_frag:Gw,distanceRGBA_vert:Ww,distanceRGBA_frag:Xw,equirect_vert:Yw,equirect_frag:qw,linedashed_vert:$w,linedashed_frag:Zw,meshbasic_vert:Jw,meshbasic_frag:Kw,meshlambert_vert:jw,meshlambert_frag:Qw,meshmatcap_vert:eT,meshmatcap_frag:tT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:rT,meshphong_frag:sT,meshphysical_vert:oT,meshphysical_frag:aT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:hT,shadow_vert:dT,shadow_frag:fT,sprite_vert:pT,sprite_frag:mT},me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},pi={basic:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ln([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ln([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ln([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:ln([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:ln([me.lights,me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};pi.physical={uniforms:ln([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Bc={r:0,b:0,g:0},Jr=new mi,gT=new mt;function vT(t,e,n,i,r,s,o){let a=new qe(0),l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function S(v){let y=!1,_=g(v);_===null?h(a,l):_&&_.isColor&&(h(_,1),y=!0);let I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===_u)?(u===void 0&&(u=new Rt(new La(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:vo(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jr.copy(y.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(Jr)),u.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,(f!==_||d!==_.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Rt(new yo(2,2),new gi({name:"BackgroundMaterial",uniforms:vo(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(Bc,b_(t)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:S,addToRenderList:m}}function yT(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(x,A,Y,B,X){let K=!1,W=f(B,Y,A);s!==W&&(s=W,c(s.object)),K=p(x,B,Y,X),K&&g(x,B,Y,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(x,A,Y,B),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,A,Y){let B=Y.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let K=X[A.id];K===void 0&&(K={},X[A.id]=K);let W=K[B];return W===void 0&&(W=d(l()),K[B]=W),W}function d(x){let A=[],Y=[],B=[];for(let X=0;X<n;X++)A[X]=0,Y[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:Y,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,A,Y,B){let X=s.attributes,K=A.attributes,W=0,re=Y.getAttributes();for(let G in re)if(re[G].location>=0){let fe=X[G],Te=K[G];if(Te===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),fe===void 0||fe.attribute!==Te||Te&&fe.data!==Te.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(x,A,Y,B){let X={},K=A.attributes,W=0,re=Y.getAttributes();for(let G in re)if(re[G].location>=0){let fe=K[G];fe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));let Te={};Te.attribute=fe,fe&&fe.data&&(Te.data=fe.data),X[G]=Te,W++}s.attributes=X,s.attributesNum=W,s.index=B}function S(){let x=s.newAttributes;for(let A=0,Y=x.length;A<Y;A++)x[A]=0}function m(x){h(x,0)}function h(x,A){let Y=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;Y[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),X[x]!==A&&(t.vertexAttribDivisor(x,A),X[x]=A)}function v(){let x=s.newAttributes,A=s.enabledAttributes;for(let Y=0,B=A.length;Y<B;Y++)A[Y]!==x[Y]&&(t.disableVertexAttribArray(Y),A[Y]=0)}function y(x,A,Y,B,X,K,W){W===!0?t.vertexAttribIPointer(x,A,Y,X,K):t.vertexAttribPointer(x,A,Y,B,X,K)}function _(x,A,Y,B){S();let X=B.attributes,K=Y.getAttributes(),W=A.defaultAttributeValues;for(let re in K){let G=K[re];if(G.location>=0){let ce=X[re];if(ce===void 0&&(re==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),re==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){let fe=ce.normalized,Te=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;let et=ke.buffer,J=ke.type,ie=ke.bytesPerElement,Ce=J===t.INT||J===t.UNSIGNED_INT||ce.gpuType===im;if(ce.isInterleavedBufferAttribute){let le=ce.data,De=le.stride,ze=ce.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<G.locationSize;Fe++)h(G.location+Fe,le.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)m(G.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,et);for(let Fe=0;Fe<G.locationSize;Fe++)y(G.location+Fe,Te/G.locationSize,J,fe,De*ie,(ze+Te/G.locationSize*Fe)*ie,Ce)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)h(G.location+le,ce.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);t.bindBuffer(t.ARRAY_BUFFER,et);for(let le=0;le<G.locationSize;le++)y(G.location+le,Te/G.locationSize,J,fe,Te*ie,Te/G.locationSize*le*ie,Ce)}}else if(W!==void 0){let fe=W[re];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(G.location,fe);break;case 3:t.vertexAttrib3fv(G.location,fe);break;case 4:t.vertexAttrib4fv(G.location,fe);break;default:t.vertexAttrib1fv(G.location,fe)}}}}v()}function I(){P();for(let x in i){let A=i[x];for(let Y in A){let B=A[Y];for(let X in B)u(B[X].object),delete B[X];delete A[Y]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;let A=i[x.id];for(let Y in A){let B=A[Y];for(let X in B)u(B[X].object),delete B[X];delete A[Y]}delete i[x.id]}function b(x){for(let A in i){let Y=i[A];if(Y[x.id]===void 0)continue;let B=Y[x.id];for(let X in B)u(B[X].object),delete B[X];delete Y[x.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function _T(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let S=0;S<f;S++)g+=u[S]*d[S];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ri&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let P=b===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Xi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Bi&&!P)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:C}}function ST(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Oi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let v=s?0:i,y=v*4,_=h.clippingState||null;l.value=_,_=u(g,d,y,p);for(let I=0;I!==y;++I)_[I]=n[I];h.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){let S=f!==null?f.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let h=p+S*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,_=p;y!==S;++y,_+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function MT(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=ho:a===Hf&&(o.mapping=fo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vf||a===Hf)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Mp(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var lu=class extends ou{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},ro=4,Ly=[.125,.215,.35,.446,.526,.582],ts=20,Mf=new lu,Dy=new qe,Ef=null,wf=0,Tf=0,Af=!1,jr=(1+Math.sqrt(5))/2,io=1/jr,Ny=[new L(-jr,io,0),new L(jr,io,0),new L(-io,0,jr),new L(io,0,jr),new L(0,jr,-io),new L(0,jr,io),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ef=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef,wf,Tf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ho||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Wa,format:ri,colorSpace:Eo,depthBuffer:!1},r=Uy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uy(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(s)),this._blurMaterial=wT(s,e,n)}return r}_compileMaterial(e){let n=new Rt(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,i,r){let a=new cn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Dy),u.toneMapping=wr,u.autoClear=!1;let p=new go({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Rt(new La,p),S=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(Dy),S=!0);for(let h=0;h<6;h++){let v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let y=this._cubeSize;Vc(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),S&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===ho||e.mapping===fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fy());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Vc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mf)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ny[(r-s-1)%Ny.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Rt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),S=s/g,m=isFinite(s)?1+Math.floor(u*S):ts;m>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);let h=[],v=0;for(let b=0;b<ts;++b){let P=b/S,w=Math.exp(-P*P/2);h.push(w),b===0?v+=w:b<m&&(v+=2*w)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let _=this._sizeLods[r],I=3*_*(r>y-ro?r-y+ro:0),C=4*(this._cubeSize-_);Vc(n,I,C,3*_,2*_),l.setRenderTarget(n),l.render(f,Mf)}};function ET(t){let e=[],n=[],i=[],r=t,s=t-ro+1+Ly.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ro?l=Ly[o-t+ro-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,S=3,m=2,h=1,v=new Float32Array(S*g*p),y=new Float32Array(m*g*p),_=new Float32Array(h*g*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,P=C>2?0:-1,w=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(w,S*g*C),y.set(d,m*g*C);let x=[C,C,C,C,C,C];_.set(x,h*g*C)}let I=new Gn;I.setAttribute("position",new nn(v,S)),I.setAttribute("uv",new nn(y,m)),I.setAttribute("faceIndex",new nn(_,h)),e.push(I),r>ro&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Uy(t,e,n){let i=new Yi(t,e,n);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wT(t,e,n){let i=new Float32Array(ts),r=new L(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Fy(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Oy(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function cm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vf||l===Hf,u=l===ho||l===fo;if(c||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new _o(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new _o(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AT(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&wa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bT(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let S=d.morphAttributes[g];for(let m=0,h=S.length;m<h;m++)e.remove(S[m])}d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)e.update(d[g],t.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let S=p[g];for(let m=0,h=S.length;m<h;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,g=f.attributes.position,S=0;if(p!==null){let v=p.array;S=p.version;for(let y=0,_=v.length;y<_;y+=3){let I=v[y+0],C=v[y+1],b=v[y+2];d.push(I,C,C,b,b,I)}}else if(g!==void 0){let v=g.array;S=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let I=y+0,C=y+1,b=y+2;d.push(I,C,C,b,b,I)}}else return;let m=new(T_(d)?su:ru)(d,1);m.version=S;let h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){let d=s.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function CT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,S){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v]*S[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function RT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PT(t,e,n){let i=new WeakMap,r=new wt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let w=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),S===!0&&(y=3);let _=a.attributes.position.count*y,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*I*4*f),b=new nu(C,_,I,f);b.type=Bi,b.needsUpdate=!0;let P=y*4;for(let x=0;x<f;x++){let A=m[x],Y=h[x],B=v[x],X=_*I*4*x;for(let K=0;K<A.count;K++){let W=K*P;p===!0&&(r.fromBufferAttribute(A,K),C[X+W+0]=r.x,C[X+W+1]=r.y,C[X+W+2]=r.z,C[X+W+3]=0),g===!0&&(r.fromBufferAttribute(Y,K),C[X+W+4]=r.x,C[X+W+5]=r.y,C[X+W+6]=r.z,C[X+W+7]=0),S===!0&&(r.fromBufferAttribute(B,K),C[X+W+8]=r.x,C[X+W+9]=r.y,C[X+W+10]=r.z,C[X+W+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new he(_,I)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function IT(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var cu=class extends _n{constructor(e,n,i,r,s,o,a,l,c,u=ao){if(u!==ao&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ao&&(i=ns),i===void 0&&u===mo&&(i=po),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},R_=new _n,zy=new cu(1,1),P_=new nu,I_=new xp,L_=new au,ky=[],By=[],Vy=new Float32Array(16),Hy=new Float32Array(9),Gy=new Float32Array(4);function To(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=ky[r];if(s===void 0&&(s=new Float32Array(r),ky[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Su(t,e){let n=By[e];n===void 0&&(n=new Int32Array(e),By[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function NT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function UT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function FT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Gy.set(i),t.uniformMatrix2fv(this.addr,!1,Gy),Ut(n,i)}}function OT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Hy.set(i),t.uniformMatrix3fv(this.addr,!1,Hy),Ut(n,i)}}function zT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Vy.set(i),t.uniformMatrix4fv(this.addr,!1,Vy),Ut(n,i)}}function kT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function VT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function HT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function GT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function XT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function YT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function qT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zy.compareFunction=w_,s=zy):s=R_,n.setTexture2D(e||s,r)}function $T(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||I_,r)}function ZT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||L_,r)}function JT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P_,r)}function KT(t){switch(t){case 5126:return LT;case 35664:return DT;case 35665:return NT;case 35666:return UT;case 35674:return FT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return kT;case 35667:case 35671:return BT;case 35668:case 35672:return VT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return WT;case 36295:return XT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return JT}}function jT(t,e){t.uniform1fv(this.addr,e)}function QT(t,e){let n=To(e,this.size,2);t.uniform2fv(this.addr,n)}function eA(t,e){let n=To(e,this.size,3);t.uniform3fv(this.addr,n)}function tA(t,e){let n=To(e,this.size,4);t.uniform4fv(this.addr,n)}function nA(t,e){let n=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iA(t,e){let n=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rA(t,e){let n=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sA(t,e){t.uniform1iv(this.addr,e)}function oA(t,e){t.uniform2iv(this.addr,e)}function aA(t,e){t.uniform3iv(this.addr,e)}function lA(t,e){t.uniform4iv(this.addr,e)}function cA(t,e){t.uniform1uiv(this.addr,e)}function uA(t,e){t.uniform2uiv(this.addr,e)}function hA(t,e){t.uniform3uiv(this.addr,e)}function dA(t,e){t.uniform4uiv(this.addr,e)}function fA(t,e,n){let i=this.cache,r=e.length,s=Su(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||R_,s[o])}function pA(t,e,n){let i=this.cache,r=e.length,s=Su(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||I_,s[o])}function mA(t,e,n){let i=this.cache,r=e.length,s=Su(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||L_,s[o])}function gA(t,e,n){let i=this.cache,r=e.length,s=Su(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||P_,s[o])}function vA(t){switch(t){case 5126:return jT;case 35664:return QT;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return hA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}var Ep=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=KT(n.type)}},wp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vA(n.type)}},Tp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},bf=/(\w+)(\])?(\[|\.)?/g;function Wy(t,e){t.seq.push(e),t.map[e.id]=e}function yA(t,e,n){let i=t.name,r=i.length;for(bf.lastIndex=0;;){let s=bf.exec(i),o=bf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wy(n,c===void 0?new Ep(a,t,e):new wp(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Tp(a),Wy(n,f)),n=f}}}var co=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);yA(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Xy(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var _A=37297,xA=0;function SA(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Yy=new Xe;function MA(t){nt._getMatrix(Yy,nt.workingColorSpace,t);let e=`mat3( ${Yy.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case xu:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qy(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+SA(t.getShaderSource(e),o)}else return r}function EA(t,e){let n=MA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wA(t,e){let n;switch(e){case JM:n="Linear";break;case KM:n="Reinhard";break;case jM:n="Cineon";break;case QM:n="ACESFilmic";break;case t1:n="AgX";break;case nm:n="Neutral";break;case e1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Hc=new L;function TA(){nt.getLuminanceCoefficients(Hc);let t=Hc.x.toFixed(4),e=Hc.y.toFixed(4),n=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function bA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ta(t){return t!==""}function $y(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(t){return t.replace(RA,IA)}var PA=new Map;function IA(t,e){let n=Ye[e];if(n===void 0){let i=PA.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ap(n)}var LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jy(t){return t.replace(LA,DA)}function DA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ky(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===u_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function UA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ho:case fo:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function OA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case h_:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function zA(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kA(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=NA(n),c=UA(n),u=FA(n),f=OA(n),d=zA(n),p=AA(n),g=bA(s),S=r.createProgram(),m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ta).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ta).join(`
`),h.length>0&&(h+=`
`)):(m=[Ky(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),h=[Ky(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==wr?wA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,EA("linearToOutputTexel",n.outputColorSpace),TA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Ap(o),o=$y(o,n),o=Zy(o,n),a=Ap(a),a=$y(a,n),a=Zy(a,n),o=Jy(o),a=Jy(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===hy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let y=v+m+o,_=v+h+a,I=Xy(r,r.VERTEX_SHADER,y),C=Xy(r,r.FRAGMENT_SHADER,_);r.attachShader(S,I),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(A){if(t.debug.checkShaderErrors){let Y=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(C).trim(),K=!0,W=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,I,C);else{let re=qy(r,I,"vertex"),G=qy(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Y+`
`+re+`
`+G)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(B===""||X==="")&&(W=!1);W&&(A.diagnostics={runnable:K,programLog:Y,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(I),r.deleteShader(C),P=new co(r,S),w=CA(r,S)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,_A)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=C,this}var BA=0,bp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Cp(e),n.set(e,i)),i}},Cp=class{constructor(e){this.id=BA++,this.code=e,this.usedTimes=0}};function VA(t,e,n,i,r,s,o){let a=new Ia,l=new bp,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,x,A,Y,B){let X=Y.fog,K=B.geometry,W=w.isMeshStandardMaterial?Y.environment:null,re=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),G=re&&re.mapping===_u?re.image.height:null,ce=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=fe!==void 0?fe.length:0,ke=0;K.morphAttributes.position!==void 0&&(ke=1),K.morphAttributes.normal!==void 0&&(ke=2),K.morphAttributes.color!==void 0&&(ke=3);let et,J,ie,Ce;if(ce){let it=pi[ce];et=it.vertexShader,J=it.fragmentShader}else et=w.vertexShader,J=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),Ce=l.getFragmentShaderID(w);let le=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,Ze=!!w.map,j=!!w.matcap,te=!!re,R=!!w.aoMap,Re=!!w.lightMap,ee=!!w.bumpMap,xe=!!w.normalMap,ae=!!w.displacementMap,Ue=!!w.emissiveMap,Me=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,q=w.dispersion>0,V=w.iridescence>0,$=w.sheen>0,Pe=w.transmission>0,de=M&&!!w.anisotropyMap,Ee=F&&!!w.clearcoatMap,Be=F&&!!w.clearcoatNormalMap,Q=F&&!!w.clearcoatRoughnessMap,ge=V&&!!w.iridescenceMap,Ne=V&&!!w.iridescenceThicknessMap,Oe=$&&!!w.sheenColorMap,we=$&&!!w.sheenRoughnessMap,Je=!!w.specularMap,He=!!w.specularColorMap,rt=!!w.specularIntensityMap,D=Pe&&!!w.transmissionMap,pe=Pe&&!!w.thicknessMap,H=!!w.gradientMap,Z=!!w.alphaMap,Se=w.alphaTest>0,ve=!!w.alphaHash,Ve=!!w.extensions,ht=wr;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ht=t.toneMapping);let Ft={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:J,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:Ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Eo,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:j,envMap:te,envMapMode:te&&re.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:Re,bumpMap:ee,normalMap:xe,displacementMap:d&&ae,emissiveMap:Ue,normalMapObjectSpace:xe&&w.normalMapType===s1,normalMapTangentSpace:xe&&w.normalMapType===E_,metalnessMap:Me,roughnessMap:T,anisotropy:M,anisotropyMap:de,clearcoat:F,clearcoatMap:Ee,clearcoatNormalMap:Be,clearcoatRoughnessMap:Q,dispersion:q,iridescence:V,iridescenceMap:ge,iridescenceThicknessMap:Ne,sheen:$,sheenColorMap:Oe,sheenRoughnessMap:we,specularMap:Je,specularColorMap:He,specularIntensityMap:rt,transmission:Pe,transmissionMap:D,thicknessMap:pe,gradientMap:H,opaque:w.transparent===!1&&w.blending===oo&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:Se,alphaHash:ve,combine:w.combine,mapUv:Ze&&S(w.map.channel),aoMapUv:R&&S(w.aoMap.channel),lightMapUv:Re&&S(w.lightMap.channel),bumpMapUv:ee&&S(w.bumpMap.channel),normalMapUv:xe&&S(w.normalMap.channel),displacementMapUv:ae&&S(w.displacementMap.channel),emissiveMapUv:Ue&&S(w.emissiveMap.channel),metalnessMapUv:Me&&S(w.metalnessMap.channel),roughnessMapUv:T&&S(w.roughnessMap.channel),anisotropyMapUv:de&&S(w.anisotropyMap.channel),clearcoatMapUv:Ee&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&S(w.sheenRoughnessMap.channel),specularMapUv:Je&&S(w.specularMap.channel),specularColorMapUv:He&&S(w.specularColorMap.channel),specularIntensityMapUv:rt&&S(w.specularIntensityMap.channel),transmissionMapUv:D&&S(w.transmissionMap.channel),thicknessMapUv:pe&&S(w.thicknessMap.channel),alphaMapUv:Z&&S(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(xe||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(Ze||Z),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:De,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function h(w){let x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(let A in w.defines)x.push(A),x.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(v(x,w),y(x,w),x.push(t.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function v(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function y(w,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let x=g[w.type],A;if(x){let Y=pi[x];A=I1.clone(Y.uniforms)}else A=w.uniforms;return A}function I(w,x){let A;for(let Y=0,B=u.length;Y<B;Y++){let X=u[Y];if(X.cacheKey===x){A=X,++A.usedTimes;break}}return A===void 0&&(A=new kA(t,x,w,s),u.push(A)),A}function C(w){if(--w.usedTimes===0){let x=u.indexOf(w);u[x]=u[u.length-1],u.pop(),w.destroy()}}function b(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:I,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:P}}function HA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function GA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qy(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,S,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:S,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=S,h.group=m),e++,h}function a(f,d,p,g,S,m){let h=o(f,d,p,g,S,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,S,m){let h=o(f,d,p,g,S,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||GA),i.length>1&&i.sort(d||jy),r.length>1&&r.sort(d||jy)}function u(){for(let f=e,d=t.length;f<d;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function WA(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Qy,t.set(i,[o])):r>=s.length?(o=new Qy,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function XA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new qe};break;case"SpotLight":n={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function YA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var qA=0;function $A(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZA(t){let e=new XA,n=YA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new mt,o=new mt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,S=0,m=0,h=0,v=0,y=0,_=0,I=0,C=0,b=0;c.sort($A);for(let w=0,x=c.length;w<x;w++){let A=c[w],Y=A.color,B=A.intensity,X=A.distance,K=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=Y.r*B,f+=Y.g*B,d+=Y.b*B;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],B);b++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let re=A.shadow,G=n.get(A);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=A.shadow.matrix,v++}i.directional[p]=W,p++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(Y).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[S]=W;let re=A.shadow;if(A.map&&(i.spotLightMap[I]=A.map,I++,re.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[S]=re.matrix,A.castShadow){let G=n.get(A);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,i.spotShadow[S]=G,i.spotShadowMap[S]=K,_++}S++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(Y).multiplyScalar(B),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=W,m++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let re=A.shadow,G=n.get(A);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,G.shadowCameraNear=re.camera.near,G.shadowCameraFar=re.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=A.shadow.matrix,y++}i.point[g]=W,g++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(B),W.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[h]=W,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==S||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=S,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=b,i.version=qA++)}function l(c,u){let f=0,d=0,p=0,g=0,S=0,m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){let y=c[h];if(y.isDirectionalLight){let _=i.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=i.hemi[S];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function e_(t){let e=new ZA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JA(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new e_(t),e.set(r,[a])):s>=o.length?(a=new e_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var Rp=class extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=i1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pp=class extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QA(t,e,n){let i=new Da,r=new he,s=new he,o=new wt,a=new Rp({depthPacking:r1}),l=new Pp,c={},u=n.maxTextureSize,f={[Ar]:yn,[yn]:Ar,[Vn]:Vn},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:KA,fragmentShader:jA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Gn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let h=this.type;this.render=function(C,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=t.getRenderTarget(),x=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Er),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let B=h!==Fi&&this.type===Fi,X=h===Fi&&this.type!==Fi;for(let K=0,W=C.length;K<W;K++){let re=C[K],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ce=G.getFrameExtents();if(r.multiply(ce),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,G.mapSize.y=s.y)),G.map===null||B===!0||X===!0){let Te=this.type!==Fi?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new Yi(r.x,r.y,Te),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();let fe=G.getViewportCount();for(let Te=0;Te<fe;Te++){let ke=G.getViewport(Te);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),Y.viewport(o),G.updateMatrices(re,Te),i=G.getFrustum(),_(b,P,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===Fi&&v(G,P),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,x,A)};function v(C,b){let P=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Yi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,P,d,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,P,p,S,null)}function y(C,b,P,w){let x=null,A=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)x=A;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let Y=x.uuid,B=b.uuid,X=c[Y];X===void 0&&(X={},c[Y]=X);let K=X[B];K===void 0&&(K=x.clone(),X[B]=K,b.addEventListener("dispose",I)),x=K}if(x.visible=b.visible,x.wireframe=b.wireframe,w===Fi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let Y=t.properties.get(x);Y.light=P}return x}function _(C,b,P,w,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let B=e.update(C),X=C.material;if(Array.isArray(X)){let K=B.groups;for(let W=0,re=K.length;W<re;W++){let G=K[W],ce=X[G.materialIndex];if(ce&&ce.visible){let fe=y(C,ce,w,x);C.onBeforeShadow(t,C,b,P,B,fe,G),t.renderBufferDirect(P,null,B,fe,C,G),C.onAfterShadow(t,C,b,P,B,fe,G)}}}else if(X.visible){let K=y(C,X,w,x);C.onBeforeShadow(t,C,b,P,B,K,null),t.renderBufferDirect(P,null,B,K,C,null),C.onAfterShadow(t,C,b,P,B,K,null)}}let Y=C.children;for(let B=0,X=Y.length;B<X;B++)_(Y[B],b,P,w,x)}function I(C){C.target.removeEventListener("dispose",I);for(let P in c){let w=c[P],x=C.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}var eb={[Nf]:Uf,[Ff]:kf,[Of]:Bf,[uo]:zf,[Uf]:Nf,[kf]:Ff,[Bf]:Of,[zf]:uo};function tb(t,e){function n(){let D=!1,pe=new wt,H=null,Z=new wt(0,0,0,0);return{setMask:function(Se){H!==Se&&!D&&(t.colorMask(Se,Se,Se,Se),H=Se)},setLocked:function(Se){D=Se},setClear:function(Se,ve,Ve,ht,Ft){Ft===!0&&(Se*=ht,ve*=ht,Ve*=ht),pe.set(Se,ve,Ve,ht),Z.equals(pe)===!1&&(t.clearColor(Se,ve,Ve,ht),Z.copy(pe))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,H=null,Z=null,Se=null;return{setReversed:function(ve){if(pe!==ve){let Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let ht=Se;Se=null,this.setClear(ht)}pe=ve},getReversed:function(){return pe},setTest:function(ve){ve?le(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ve){H!==ve&&!D&&(t.depthMask(ve),H=ve)},setFunc:function(ve){if(pe&&(ve=eb[ve]),Z!==ve){switch(ve){case Nf:t.depthFunc(t.NEVER);break;case Uf:t.depthFunc(t.ALWAYS);break;case Ff:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case Of:t.depthFunc(t.EQUAL);break;case zf:t.depthFunc(t.GEQUAL);break;case kf:t.depthFunc(t.GREATER);break;case Bf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ve}},setLocked:function(ve){D=ve},setClear:function(ve){Se!==ve&&(pe&&(ve=1-ve),t.clearDepth(ve),Se=ve)},reset:function(){D=!1,H=null,Z=null,Se=null,pe=!1}}}function r(){let D=!1,pe=null,H=null,Z=null,Se=null,ve=null,Ve=null,ht=null,Ft=null;return{setTest:function(it){D||(it?le(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(it){pe!==it&&!D&&(t.stencilMask(it),pe=it)},setFunc:function(it,Bt,Sn){(H!==it||Z!==Bt||Se!==Sn)&&(t.stencilFunc(it,Bt,Sn),H=it,Z=Bt,Se=Sn)},setOp:function(it,Bt,Sn){(ve!==it||Ve!==Bt||ht!==Sn)&&(t.stencilOp(it,Bt,Sn),ve=it,Ve=Bt,ht=Sn)},setLocked:function(it){D=it},setClear:function(it){Ft!==it&&(t.clearStencil(it),Ft=it)},reset:function(){D=!1,pe=null,H=null,Z=null,Se=null,ve=null,Ve=null,ht=null,Ft=null}}}let s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,p=[],g=null,S=!1,m=null,h=null,v=null,y=null,_=null,I=null,C=null,b=new qe(0,0,0),P=0,w=!1,x=null,A=null,Y=null,B=null,X=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=re>=1):G.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=re>=2);let ce=null,fe={},Te=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),et=new wt().fromArray(Te),J=new wt().fromArray(ke);function ie(D,pe,H,Z){let Se=new Uint8Array(4),ve=t.createTexture();t.bindTexture(D,ve),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<H;Ve++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(pe+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ve}let Ce={};Ce[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),Ce[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ce[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(uo),ee(!1),xe(ny),le(t.CULL_FACE),R(Er);function le(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function De(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function ze(D,pe){return f[D]!==pe?(t.bindFramebuffer(D,pe),f[D]=pe,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Fe(D,pe){let H=p,Z=!1;if(D){H=d.get(pe),H===void 0&&(H=[],d.set(pe,H));let Se=D.textures;if(H.length!==Se.length||H[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ve=Se.length;ve<Ve;ve++)H[ve]=t.COLOR_ATTACHMENT0+ve;H.length=Se.length,Z=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,Z=!0);Z&&t.drawBuffers(H)}function Ze(D){return g!==D?(t.useProgram(D),g=D,!0):!1}let j={[Qr]:t.FUNC_ADD,[IM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};j[DM]=t.MIN,j[NM]=t.MAX;let te={[UM]:t.ZERO,[FM]:t.ONE,[OM]:t.SRC_COLOR,[Lf]:t.SRC_ALPHA,[GM]:t.SRC_ALPHA_SATURATE,[VM]:t.DST_COLOR,[kM]:t.DST_ALPHA,[zM]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[HM]:t.ONE_MINUS_DST_COLOR,[BM]:t.ONE_MINUS_DST_ALPHA,[WM]:t.CONSTANT_COLOR,[XM]:t.ONE_MINUS_CONSTANT_COLOR,[YM]:t.CONSTANT_ALPHA,[qM]:t.ONE_MINUS_CONSTANT_ALPHA};function R(D,pe,H,Z,Se,ve,Ve,ht,Ft,it){if(D===Er){S===!0&&(De(t.BLEND),S=!1);return}if(S===!1&&(le(t.BLEND),S=!0),D!==PM){if(D!==m||it!==w){if((h!==Qr||_!==Qr)&&(t.blendEquation(t.FUNC_ADD),h=Qr,_=Qr),it)switch(D){case oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iy:t.blendFunc(t.ONE,t.ONE);break;case ry:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sy:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iy:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ry:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sy:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,I=null,C=null,b.set(0,0,0),P=0,m=D,w=it}return}Se=Se||pe,ve=ve||H,Ve=Ve||Z,(pe!==h||Se!==_)&&(t.blendEquationSeparate(j[pe],j[Se]),h=pe,_=Se),(H!==v||Z!==y||ve!==I||Ve!==C)&&(t.blendFuncSeparate(te[H],te[Z],te[ve],te[Ve]),v=H,y=Z,I=ve,C=Ve),(ht.equals(b)===!1||Ft!==P)&&(t.blendColor(ht.r,ht.g,ht.b,Ft),b.copy(ht),P=Ft),m=D,w=!1}function Re(D,pe){D.side===Vn?De(t.CULL_FACE):le(t.CULL_FACE);let H=D.side===yn;pe&&(H=!H),ee(H),D.blending===oo&&D.transparent===!1?R(Er):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){x!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),x=D)}function xe(D){D!==bM?(le(t.CULL_FACE),D!==A&&(D===ny?t.cullFace(t.BACK):D===CM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),A=D}function ae(D){D!==Y&&(W&&t.lineWidth(D),Y=D)}function Ue(D,pe,H){D?(le(t.POLYGON_OFFSET_FILL),(B!==pe||X!==H)&&(t.polygonOffset(pe,H),B=pe,X=H)):De(t.POLYGON_OFFSET_FILL)}function Me(D){D?le(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function T(D){D===void 0&&(D=t.TEXTURE0+K-1),ce!==D&&(t.activeTexture(D),ce=D)}function M(D,pe,H){H===void 0&&(ce===null?H=t.TEXTURE0+K-1:H=ce);let Z=fe[H];Z===void 0&&(Z={type:void 0,texture:void 0},fe[H]=Z),(Z.type!==D||Z.texture!==pe)&&(ce!==H&&(t.activeTexture(H),ce=H),t.bindTexture(D,pe||Ce[D]),Z.type=D,Z.texture=pe)}function F(){let D=fe[ce];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(D){et.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function we(D){J.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function Je(D,pe){let H=c.get(pe);H===void 0&&(H=new WeakMap,c.set(pe,H));let Z=H.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(pe,D.name),H.set(D,Z))}function He(D,pe){let Z=c.get(pe).get(D);l.get(pe)!==Z&&(t.uniformBlockBinding(pe,Z,D.__bindingPointIndex),l.set(pe,Z))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ce=null,fe={},f={},d=new WeakMap,p=[],g=null,S=!1,m=null,h=null,v=null,y=null,_=null,I=null,C=null,b=new qe(0,0,0),P=0,w=!1,x=null,A=null,Y=null,B=null,X=null,et.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:De,bindFramebuffer:ze,drawBuffers:Fe,useProgram:Ze,setBlending:R,setMaterial:Re,setFlipSided:ee,setCullFace:xe,setLineWidth:ae,setPolygonOffset:Ue,setScissorTest:Me,activeTexture:T,bindTexture:M,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:V,texImage2D:ge,texImage3D:Ne,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:Be,texStorage3D:Q,texSubImage2D:$,texSubImage3D:Pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ee,scissor:Oe,viewport:we,reset:rt}}function t_(t,e,n,i){let r=nb(i);switch(n){case g_:return t*e;case y_:return t*e;case __:return t*e*2;case x_:return t*e/r.components*r.byteLength;case om:return t*e/r.components*r.byteLength;case S_:return t*e*2/r.components*r.byteLength;case am:return t*e*2/r.components*r.byteLength;case v_:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case lm:return t*e*4/r.components*r.byteLength;case qc:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(t,16)*Math.max(e,8)/4;case Wf:case Yf:return Math.max(t,8)*Math.max(e,8)/2;case $f:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ep:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case np:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ip:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ap:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case up:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kc:case hp:case dp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case M_:case fp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case pp:case mp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nb(t){switch(t){case Xi:case f_:return{byteLength:1,components:1};case Ra:case p_:case Wa:return{byteLength:2,components:1};case rm:case sm:return{byteLength:2,components:4};case ns:case im:case Bi:return{byteLength:4,components:1};case m_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function ib(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):eu("canvas")}function S(T,M,F){let q=1,V=Me(T);if((V.width>F||V.height>F)&&(q=F/Math.max(V.width,V.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(q*V.width),Pe=Math.floor(q*V.height);f===void 0&&(f=g($,Pe));let de=M?g($,Pe):f;return de.width=$,de.height=Pe,de.getContext("2d").drawImage(T,0,0,$,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+$+"x"+Pe+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){t.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(T,M,F,q,V=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===t.RED&&(F===t.FLOAT&&($=t.R32F),F===t.HALF_FLOAT&&($=t.R16F),F===t.UNSIGNED_BYTE&&($=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.R8UI),F===t.UNSIGNED_SHORT&&($=t.R16UI),F===t.UNSIGNED_INT&&($=t.R32UI),F===t.BYTE&&($=t.R8I),F===t.SHORT&&($=t.R16I),F===t.INT&&($=t.R32I)),M===t.RG&&(F===t.FLOAT&&($=t.RG32F),F===t.HALF_FLOAT&&($=t.RG16F),F===t.UNSIGNED_BYTE&&($=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RG8UI),F===t.UNSIGNED_SHORT&&($=t.RG16UI),F===t.UNSIGNED_INT&&($=t.RG32UI),F===t.BYTE&&($=t.RG8I),F===t.SHORT&&($=t.RG16I),F===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RGB8UI),F===t.UNSIGNED_SHORT&&($=t.RGB16UI),F===t.UNSIGNED_INT&&($=t.RGB32UI),F===t.BYTE&&($=t.RGB8I),F===t.SHORT&&($=t.RGB16I),F===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RGBA8UI),F===t.UNSIGNED_SHORT&&($=t.RGBA16UI),F===t.UNSIGNED_INT&&($=t.RGBA32UI),F===t.BYTE&&($=t.RGBA8I),F===t.SHORT&&($=t.RGBA16I),F===t.INT&&($=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),M===t.RGBA){let Pe=V?xu:nt.getTransfer(q);F===t.FLOAT&&($=t.RGBA32F),F===t.HALF_FLOAT&&($=t.RGBA16F),F===t.UNSIGNED_BYTE&&($=Pe===lt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(T,M){let F;return T?M===null||M===ns||M===po?F=t.DEPTH24_STENCIL8:M===Bi?F=t.DEPTH32F_STENCIL8:M===Ra&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ns||M===po?F=t.DEPTH_COMPONENT24:M===Bi?F=t.DEPTH_COMPONENT32F:M===Ra&&(F=t.DEPTH_COMPONENT16),F}function I(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pn&&T.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function C(T){let M=T.target;M.removeEventListener("dispose",C),P(M),M.isVideoTexture&&u.delete(M)}function b(T){let M=T.target;M.removeEventListener("dispose",b),x(M)}function P(T){let M=i.get(T);if(M.__webglInit===void 0)return;let F=T.source,q=d.get(F);if(q){let V=q[M.__cacheKey];V.usedTimes--,V.usedTimes===0&&w(T),Object.keys(q).length===0&&d.delete(F)}i.remove(T)}function w(T){let M=i.get(T);t.deleteTexture(M.__webglTexture);let F=T.source,q=d.get(F);delete q[M.__cacheKey],o.memory.textures--}function x(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let V=0;V<M.__webglFramebuffer[q].length;V++)t.deleteFramebuffer(M.__webglFramebuffer[q][V]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=T.textures;for(let q=0,V=F.length;q<V;q++){let $=i.get(F[q]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(T)}let A=0;function Y(){A=0}function B(){let T=A;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),A+=1,T}function X(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function K(T,M){let F=i.get(T);if(T.isVideoTexture&&ae(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,T,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function W(T,M){let F=i.get(T);if(T.version>0&&F.__version!==T.version){J(F,T,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function re(T,M){let F=i.get(T);if(T.version>0&&F.__version!==T.version){J(F,T,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function G(T,M){let F=i.get(T);if(T.version>0&&F.__version!==T.version){ie(F,T,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}let ce={[Wi]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[Gf]:t.MIRRORED_REPEAT},fe={[Pn]:t.NEAREST,[n1]:t.NEAREST_MIPMAP_NEAREST,[Mc]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[Kd]:t.LINEAR_MIPMAP_NEAREST,[ki]:t.LINEAR_MIPMAP_LINEAR},Te={[o1]:t.NEVER,[d1]:t.ALWAYS,[a1]:t.LESS,[w_]:t.LEQUAL,[l1]:t.EQUAL,[h1]:t.GEQUAL,[c1]:t.GREATER,[u1]:t.NOTEQUAL};function ke(T,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===Kd||M.magFilter===Mc||M.magFilter===ki||M.minFilter===Hn||M.minFilter===Kd||M.minFilter===Mc||M.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ce[M.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ce[M.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ce[M.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,fe[M.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==Mc&&M.minFilter!==ki||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function et(T,M){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",C));let q=M.source,V=d.get(q);V===void 0&&(V={},d.set(q,V));let $=X(M);if($!==T.__cacheKey){V[$]===void 0&&(V[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),V[$].usedTimes++;let Pe=V[T.__cacheKey];Pe!==void 0&&(V[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(M)),T.__cacheKey=$,T.__webglTexture=V[$].texture}return F}function J(T,M,F){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);let V=et(T,M),$=M.source;n.bindTexture(q,T.__webglTexture,t.TEXTURE0+F);let Pe=i.get($);if($.version!==Pe.__version||V===!0){n.activeTexture(t.TEXTURE0+F);let de=nt.getPrimaries(nt.workingColorSpace),Ee=M.colorSpace===Mr?null:nt.getPrimaries(M.colorSpace),Be=M.colorSpace===Mr||de===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Q=S(M.image,!1,r.maxTextureSize);Q=Ue(M,Q);let ge=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Oe=y(M.internalFormat,ge,Ne,M.colorSpace,M.isVideoTexture);ke(q,M);let we,Je=M.mipmaps,He=M.isVideoTexture!==!0,rt=Pe.__version===void 0||V===!0,D=$.dataReady,pe=I(M,Q);if(M.isDepthTexture)Oe=_(M.format===mo,M.type),rt&&(He?n.texStorage2D(t.TEXTURE_2D,1,Oe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Oe,Q.width,Q.height,0,ge,Ne,null));else if(M.isDataTexture)if(Je.length>0){He&&rt&&n.texStorage2D(t.TEXTURE_2D,pe,Oe,Je[0].width,Je[0].height);for(let H=0,Z=Je.length;H<Z;H++)we=Je[H],He?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,we.width,we.height,ge,Ne,we.data):n.texImage2D(t.TEXTURE_2D,H,Oe,we.width,we.height,0,ge,Ne,we.data);M.generateMipmaps=!1}else He?(rt&&n.texStorage2D(t.TEXTURE_2D,pe,Oe,Q.width,Q.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,Ne,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,Q.width,Q.height,0,ge,Ne,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Oe,Je[0].width,Je[0].height,Q.depth);for(let H=0,Z=Je.length;H<Z;H++)if(we=Je[H],M.format!==ri)if(ge!==null)if(He){if(D)if(M.layerUpdates.size>0){let Se=t_(we.width,we.height,M.format,M.type);for(let ve of M.layerUpdates){let Ve=we.data.subarray(ve*Se/we.data.BYTES_PER_ELEMENT,(ve+1)*Se/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,ve,we.width,we.height,1,ge,Ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,we.width,we.height,Q.depth,ge,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Oe,we.width,we.height,Q.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,we.width,we.height,Q.depth,ge,Ne,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Oe,we.width,we.height,Q.depth,0,ge,Ne,we.data)}else{He&&rt&&n.texStorage2D(t.TEXTURE_2D,pe,Oe,Je[0].width,Je[0].height);for(let H=0,Z=Je.length;H<Z;H++)we=Je[H],M.format!==ri?ge!==null?He?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,we.width,we.height,ge,we.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,we.width,we.height,ge,Ne,we.data):n.texImage2D(t.TEXTURE_2D,H,Oe,we.width,we.height,0,ge,Ne,we.data)}else if(M.isDataArrayTexture)if(He){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Oe,Q.width,Q.height,Q.depth),D)if(M.layerUpdates.size>0){let H=t_(Q.width,Q.height,M.format,M.type);for(let Z of M.layerUpdates){let Se=Q.data.subarray(Z*H/Q.data.BYTES_PER_ELEMENT,(Z+1)*H/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ge,Ne,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ne,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,Q.width,Q.height,Q.depth,0,ge,Ne,Q.data);else if(M.isData3DTexture)He?(rt&&n.texStorage3D(t.TEXTURE_3D,pe,Oe,Q.width,Q.height,Q.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ne,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,Q.width,Q.height,Q.depth,0,ge,Ne,Q.data);else if(M.isFramebufferTexture){if(rt)if(He)n.texStorage2D(t.TEXTURE_2D,pe,Oe,Q.width,Q.height);else{let H=Q.width,Z=Q.height;for(let Se=0;Se<pe;Se++)n.texImage2D(t.TEXTURE_2D,Se,Oe,H,Z,0,ge,Ne,null),H>>=1,Z>>=1}}else if(Je.length>0){if(He&&rt){let H=Me(Je[0]);n.texStorage2D(t.TEXTURE_2D,pe,Oe,H.width,H.height)}for(let H=0,Z=Je.length;H<Z;H++)we=Je[H],He?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ge,Ne,we):n.texImage2D(t.TEXTURE_2D,H,Oe,ge,Ne,we);M.generateMipmaps=!1}else if(He){if(rt){let H=Me(Q);n.texStorage2D(t.TEXTURE_2D,pe,Oe,H.width,H.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ne,Q)}else n.texImage2D(t.TEXTURE_2D,0,Oe,ge,Ne,Q);m(M)&&h(q),Pe.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ie(T,M,F){if(M.image.length!==6)return;let q=et(T,M),V=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);let $=i.get(V);if(V.version!==$.__version||q===!0){n.activeTexture(t.TEXTURE0+F);let Pe=nt.getPrimaries(nt.workingColorSpace),de=M.colorSpace===Mr?null:nt.getPrimaries(M.colorSpace),Ee=M.colorSpace===Mr||Pe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Be=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!Be&&!Q?ge[Z]=S(M.image[Z],!0,r.maxCubemapSize):ge[Z]=Q?M.image[Z].image:M.image[Z],ge[Z]=Ue(M,ge[Z]);let Ne=ge[0],Oe=s.convert(M.format,M.colorSpace),we=s.convert(M.type),Je=y(M.internalFormat,Oe,we,M.colorSpace),He=M.isVideoTexture!==!0,rt=$.__version===void 0||q===!0,D=V.dataReady,pe=I(M,Ne);ke(t.TEXTURE_CUBE_MAP,M);let H;if(Be){He&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Je,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){H=ge[Z].mipmaps;for(let Se=0;Se<H.length;Se++){let ve=H[Se];M.format!==ri?Oe!==null?He?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,ve.width,ve.height,Oe,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Je,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,ve.width,ve.height,Oe,we,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,Je,ve.width,ve.height,0,Oe,we,ve.data)}}}else{if(H=M.mipmaps,He&&rt){H.length>0&&pe++;let Z=Me(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){He?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Oe,we,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,ge[Z].width,ge[Z].height,0,Oe,we,ge[Z].data);for(let Se=0;Se<H.length;Se++){let Ve=H[Se].image[Z].image;He?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Ve.width,Ve.height,Oe,we,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Je,Ve.width,Ve.height,0,Oe,we,Ve.data)}}else{He?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,we,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Je,Oe,we,ge[Z]);for(let Se=0;Se<H.length;Se++){let ve=H[Se];He?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Oe,we,ve.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,Je,Oe,we,ve.image[Z])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),$.__version=V.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ce(T,M,F,q,V,$){let Pe=s.convert(F.format,F.colorSpace),de=s.convert(F.type),Ee=y(F.internalFormat,Pe,de,F.colorSpace),Be=i.get(M),Q=i.get(F);if(Q.__renderTarget=M,!Be.__hasExternalTextures){let ge=Math.max(1,M.width>>$),Ne=Math.max(1,M.height>>$);V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?n.texImage3D(V,$,Ee,ge,Ne,M.depth,0,Pe,de,null):n.texImage2D(V,$,Ee,ge,Ne,0,Pe,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,V,Q.__webglTexture,0,ee(M)):(V===t.TEXTURE_2D||V>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,V,Q.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(T,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),M.depthBuffer){let q=M.depthTexture,V=q&&q.isDepthTexture?q.type:null,$=_(M.stencilBuffer,V),Pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=ee(M);xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,T)}else{let q=M.textures;for(let V=0;V<q.length;V++){let $=q[V],Pe=s.convert($.format,$.colorSpace),de=s.convert($.type),Ee=y($.internalFormat,Pe,de,$.colorSpace),Be=ee(M);F&&xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ee,M.width,M.height):xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,Ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let V=q.__webglTexture,$=ee(M);if(M.depthTexture.format===ao)xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,V,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,V,0);else if(M.depthTexture.format===mo)xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,V,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ze(T){let M=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let V=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",V)};q.addEventListener("dispose",V),M.__depthDisposeCallback=V}M.__boundDepthTexture=q}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");De(M.__webglFramebuffer,T)}else if(F){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),le(M.__webglDepthbuffer[q],T,!1);else{let V=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,V)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(T,M,F){let q=i.get(T);M!==void 0&&Ce(q.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&ze(T)}function Ze(T){let M=T.texture,F=i.get(T),q=i.get(M);T.addEventListener("dispose",b);let V=T.textures,$=T.isWebGLCubeRenderTarget===!0,Pe=V.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)F.__webglFramebuffer[de][Ee]=t.createFramebuffer()}else F.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)F.__webglFramebuffer[de]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let de=0,Ee=V.length;de<Ee;de++){let Be=i.get(V[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&xe(T)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<V.length;de++){let Ee=V[de];F.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[de]);let Be=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),ge=y(Ee.internalFormat,Be,Q,Ee.colorSpace,T.isXRRenderTarget===!0),Ne=ee(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ge,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,F.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),le(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ke(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Ce(F.__webglFramebuffer[de][Ee],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee);else Ce(F.__webglFramebuffer[de],T,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let de=0,Ee=V.length;de<Ee;de++){let Be=V[de],Q=i.get(Be);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),ke(t.TEXTURE_2D,Be),Ce(F.__webglFramebuffer,T,Be,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Be)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,q.__webglTexture),ke(de,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Ce(F.__webglFramebuffer[Ee],T,M,t.COLOR_ATTACHMENT0,de,Ee);else Ce(F.__webglFramebuffer,T,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&h(de),n.unbindTexture()}T.depthBuffer&&ze(T)}function j(T){let M=T.textures;for(let F=0,q=M.length;F<q;F++){let V=M[F];if(m(V)){let $=v(T),Pe=i.get(V).__webglTexture;n.bindTexture($,Pe),h($),n.unbindTexture()}}}let te=[],R=[];function Re(T){if(T.samples>0){if(xe(T)===!1){let M=T.textures,F=T.width,q=T.height,V=t.COLOR_BUFFER_BIT,$=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(T),de=M.length>1;if(de)for(let Ee=0;Ee<M.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(V|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(V|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);let Be=i.get(M[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,F,q,0,0,F,q,V,t.NEAREST),l===!0&&(te.length=0,R.length=0,te.push(t.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(te.push($),R.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<M.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);let Be=i.get(M[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ee(T){return Math.min(r.maxSamples,T.samples)}function xe(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(T){let M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ue(T,M){let F=T.colorSpace,q=T.format,V=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Eo&&F!==Mr&&(nt.getTransfer(F)===lt?(q!==ri||V!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=xe}function rb(t,e){function n(i,r=Mr){let s,o=nt.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===rm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===m_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===f_)return t.BYTE;if(i===p_)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===im)return t.INT;if(i===ns)return t.UNSIGNED_INT;if(i===Bi)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===g_)return t.ALPHA;if(i===v_)return t.RGB;if(i===ri)return t.RGBA;if(i===y_)return t.LUMINANCE;if(i===__)return t.LUMINANCE_ALPHA;if(i===ao)return t.DEPTH_COMPONENT;if(i===mo)return t.DEPTH_STENCIL;if(i===x_)return t.RED;if(i===om)return t.RED_INTEGER;if(i===S_)return t.RG;if(i===am)return t.RG_INTEGER;if(i===lm)return t.RGBA_INTEGER;if(i===qc||i===$c||i===Zc||i===Jc)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wf||i===Xf||i===Yf||i===qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$f||i===Zf||i===Jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$f||i===Zf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kf||i===jf||i===Qf||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===cp||i===up)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ep)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===np)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ip)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===op)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ap)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===up)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===hp||i===dp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kc)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===M_||i===fp||i===pp||i===mp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Ip=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Hi=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sb={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let m=n.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new _n,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new gi({vertexShader:ob,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rt(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dp=class extends br{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null,S=new Lp,m=n.getContextAttributes(),h=null,v=null,y=[],_=[],I=new he,C=null,b=new cn;b.viewport=new wt;let P=new cn;P.viewport=new wt;let w=[b,P],x=new Ip,A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=y[J];return ie===void 0&&(ie=new Aa,y[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=y[J];return ie===void 0&&(ie=new Aa,y[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=y[J];return ie===void 0&&(ie=new Aa,y[J]=ie),ie.getHandSpace()};function B(J){let ie=_.indexOf(J.inputSource);if(ie===-1)return;let Ce=y[ie];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,c||o),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let J=0;J<y.length;J++){let ie=_[J];ie!==null&&(_[J]=null,y[J].disconnect(ie))}A=null,Y=null,S.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Yi(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Ce=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?mo:ao,Ce=m.stencil?po:ns);let De={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Yi(d.textureWidth,d.textureHeight,{format:ri,type:Xi,depthTexture:new cu(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(J){for(let ie=0;ie<J.removed.length;ie++){let Ce=J.removed[ie],le=_.indexOf(Ce);le>=0&&(_[le]=null,y[le].disconnect(Ce))}for(let ie=0;ie<J.added.length;ie++){let Ce=J.added[ie],le=_.indexOf(Ce);if(le===-1){for(let ze=0;ze<y.length;ze++)if(ze>=_.length){_.push(Ce),le=ze;break}else if(_[ze]===null){_[ze]=Ce,le=ze;break}if(le===-1)break}let De=y[le];De&&De.connect(Ce)}}let W=new L,re=new L;function G(J,ie,Ce){W.setFromMatrixPosition(ie.matrixWorld),re.setFromMatrixPosition(Ce.matrixWorld);let le=W.distanceTo(re),De=ie.projectionMatrix.elements,ze=Ce.projectionMatrix.elements,Fe=De[14]/(De[10]-1),Ze=De[14]/(De[10]+1),j=(De[9]+1)/De[5],te=(De[9]-1)/De[5],R=(De[8]-1)/De[0],Re=(ze[8]+1)/ze[0],ee=Fe*R,xe=Fe*Re,ae=le/(-R+Re),Ue=ae*-R;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ue),J.translateZ(ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Me=Fe+ae,T=Ze+ae,M=ee-Ue,F=xe+(le-Ue),q=j*Ze/T*Me,V=te*Ze/T*Me;J.projectionMatrix.makePerspective(M,F,q,V,Me,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ie=J.near,Ce=J.far;S.texture!==null&&(S.depthNear>0&&(ie=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),x.near=P.near=b.near=ie,x.far=P.far=b.far=Ce,(A!==x.near||Y!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,Y=x.far),b.layers.mask=J.layers.mask|2,P.layers.mask=J.layers.mask|4,x.layers.mask=b.layers.mask|P.layers.mask;let le=J.parent,De=x.cameras;ce(x,le);for(let ze=0;ze<De.length;ze++)ce(De[ze],le);De.length===2?G(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),fe(J,x,le)};function fe(J,ie,Ce){Ce===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=vp*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let Te=null;function ke(J,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){let Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;Ce.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let ze=0;ze<Ce.length;ze++){let Fe=Ce[ze],Ze=null;if(p!==null)Ze=p.getViewport(Fe);else{let te=f.getViewSubImage(d,Fe);Ze=te.viewport,ze===0&&(e.setRenderTargetTextures(v,te.colorTexture,d.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(v))}let j=w[ze];j===void 0&&(j=new cn,j.layers.enable(ze),j.viewport=new wt,w[ze]=j),j.matrix.fromArray(Fe.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Fe.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ze===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(j)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){let ze=f.getDepthInformation(Ce[0]);ze&&ze.isValid&&ze.texture&&S.init(e,ze,r.renderState)}}for(let Ce=0;Ce<y.length;Ce++){let le=_[Ce],De=y[Ce];le!==null&&De!==void 0&&De.update(le,ie,c||o)}Te&&Te(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let et=new C_;et.setAnimationLoop(ke),this.setAnimationLoop=function(J){Te=J},this.dispose=function(){}}},Kr=new mi,lb=new mt;function cb(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,b_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v=e.get(h),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Kr.copy(_),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(Kr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){let v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ub(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;i.uniformBlockBinding(v,_)}function c(v,y){let _=r[v.id];_===void 0&&(g(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",m));let I=y.program;i.updateUBOMapping(v,I);let C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function u(v){let y=f();v.__bindingPointIndex=y;let _=t.createBuffer(),I=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,I,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,_),_}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=r[v.id],_=v.uniforms,I=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,b=_.length;C<b;C++){let P=Array.isArray(_[C])?_[C]:[_[C]];for(let w=0,x=P.length;w<x;w++){let A=P[w];if(p(A,C,w,I)===!0){let Y=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],X=0;for(let K=0;K<B.length;K++){let W=B[K],re=S(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,Y+X,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,_,I){let C=v.value,b=y+"_"+_;if(I[b]===void 0)return typeof C=="number"||typeof C=="boolean"?I[b]=C:I[b]=C.clone(),!0;{let P=I[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return I[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(v){let y=v.uniforms,_=0,I=16;for(let b=0,P=y.length;b<P;b++){let w=Array.isArray(y[b])?y[b]:[y[b]];for(let x=0,A=w.length;x<A;x++){let Y=w[x],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,K=B.length;X<K;X++){let W=B[X],re=S(W),G=_%I,ce=G%re.boundary,fe=G+ce;_+=ce,fe!==0&&I-fe<re.storage&&(_+=I-fe),Y.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=_,_+=re.storage}}}let C=_%I;return C>0&&(_+=I-C),v.__size=_,v.__cache={},this}function S(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(let v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var uu=class{constructor(e={}){let{canvas:n=p1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),S=new Int32Array(4),m=null,h=null,v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=wr,this.toneMappingExposure=1;let _=this,I=!1,C=0,b=0,P=null,w=-1,x=null,A=new wt,Y=new wt,B=null,X=new qe(0),K=0,W=n.width,re=n.height,G=1,ce=null,fe=null,Te=new wt(0,0,W,re),ke=new wt(0,0,W,re),et=!1,J=new Da,ie=!1,Ce=!1,le=new mt,De=new mt,ze=new L,Fe=new wt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function te(){return P===null?G:1}let R=i;function Re(E,N){return n.getContext(E,N)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r170"),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",ve,!1),R===null){let N="webgl2";if(R=Re(N,E),R===null)throw Re(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,xe,ae,Ue,Me,T,M,F,q,V,$,Pe,de,Ee,Be,Q,ge,Ne,Oe,we,Je,He,rt,D;function pe(){ee=new AT(R),ee.init(),He=new rb(R,ee),xe=new xT(R,ee,e,He),ae=new tb(R,ee),xe.reverseDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),Ue=new RT(R),Me=new HA,T=new ib(R,ee,ae,Me,xe,He,Ue),M=new MT(_),F=new TT(_),q=new F1(R),rt=new yT(R,q),V=new bT(R,q,Ue,rt),$=new IT(R,V,q,Ue),Oe=new PT(R,xe,T),Q=new ST(Me),Pe=new VA(_,M,F,ee,xe,rt,Q),de=new cb(_,Me),Ee=new WA,Be=new JA(ee),Ne=new vT(_,M,F,ae,$,p,l),ge=new QA(_,$,xe),D=new ub(R,Ue,xe,ae),we=new _T(R,ee,Ue),Je=new CT(R,ee,Ue),Ue.programs=Pe.programs,_.capabilities=xe,_.extensions=ee,_.properties=Me,_.renderLists=Ee,_.shadowMap=ge,_.state=ae,_.info=Ue}pe();let H=new Dp(_,R);this.xr=H,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,re,!1))},this.getSize=function(E){return E.set(W,re)},this.setSize=function(E,N,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,re=N,n.width=Math.floor(E*G),n.height=Math.floor(N*G),z===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(W*G,re*G).floor()},this.setDrawingBufferSize=function(E,N,z){W=E,re=N,G=z,n.width=Math.floor(E*z),n.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(Te)},this.setViewport=function(E,N,z,k){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,N,z,k),ae.viewport(A.copy(Te).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,N,z,k){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,N,z,k),ae.scissor(Y.copy(ke).multiplyScalar(G).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){ae.setScissorTest(et=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,N=!0,z=!0){let k=0;if(E){let U=!1;if(P!==null){let oe=P.texture.format;U=oe===lm||oe===am||oe===om}if(U){let oe=P.texture.type,ye=oe===Xi||oe===ns||oe===Ra||oe===po||oe===rm||oe===sm,Ie=Ne.getClearColor(),Le=Ne.getClearAlpha(),O=Ie.r,ue=Ie.g,se=Ie.b;ye?(g[0]=O,g[1]=ue,g[2]=se,g[3]=Le,R.clearBufferuiv(R.COLOR,0,g)):(S[0]=O,S[1]=ue,S[2]=se,S[3]=Le,R.clearBufferiv(R.COLOR,0,S))}else k|=R.COLOR_BUFFER_BIT}N&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Ee.dispose(),Be.dispose(),Me.dispose(),M.dispose(),F.dispose(),$.dispose(),rt.dispose(),D.dispose(),Pe.dispose(),H.dispose(),H.removeEventListener("sessionstart",Za),H.removeEventListener("sessionend",oi),vi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=Ue.autoReset,N=ge.enabled,z=ge.autoUpdate,k=ge.needsUpdate,U=ge.type;pe(),Ue.autoReset=E,ge.enabled=N,ge.autoUpdate=z,ge.needsUpdate=k,ge.type=U}function ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){let N=E.target;N.removeEventListener("dispose",Ve),ht(N)}function ht(E){Ft(E),Me.remove(E)}function Ft(E){let N=Me.get(E).programs;N!==void 0&&(N.forEach(function(z){Pe.releaseProgram(z)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,k,U,oe){N===null&&(N=Ze);let ye=U.isMesh&&U.matrixWorld.determinant()<0,Ie=_i(E,N,z,k,U);ae.setMaterial(k,ye);let Le=z.index,O=1;if(k.wireframe===!0){if(Le=V.getWireframeAttribute(z),Le===void 0)return;O=2}let ue=z.drawRange,se=z.attributes.position,be=ue.start*O,We=(ue.start+ue.count)*O;oe!==null&&(be=Math.max(be,oe.start*O),We=Math.min(We,(oe.start+oe.count)*O)),Le!==null?(be=Math.max(be,0),We=Math.min(We,Le.count)):se!=null&&(be=Math.max(be,0),We=Math.min(We,se.count));let Ge=We-be;if(Ge<0||Ge===1/0)return;rt.setup(U,k,Ie,z,Le);let gt,$e=we;if(Le!==null&&(gt=q.get(Le),$e=Je,$e.setIndex(gt)),U.isMesh)k.wireframe===!0?(ae.setLineWidth(k.wireframeLinewidth*te()),$e.setMode(R.LINES)):$e.setMode(R.TRIANGLES);else if(U.isLine){let _e=k.linewidth;_e===void 0&&(_e=1),ae.setLineWidth(_e*te()),U.isLineSegments?$e.setMode(R.LINES):U.isLineLoop?$e.setMode(R.LINE_LOOP):$e.setMode(R.LINE_STRIP)}else U.isPoints?$e.setMode(R.POINTS):U.isSprite&&$e.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let _e=U._multiDrawStarts,Vt=U._multiDrawCounts,Qe=U._multiDrawCount,Ht=Le?q.get(Le).bytesPerElement:1,Xn=Me.get(k).currentProgram.getUniforms();for(let dt=0;dt<Qe;dt++)Xn.setValue(R,"_gl_DrawID",dt),$e.render(_e[dt]/Ht,Vt[dt])}else if(U.isInstancedMesh)$e.renderInstances(be,Ge,U.count);else if(z.isInstancedBufferGeometry){let _e=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vt=Math.min(z.instanceCount,_e);$e.renderInstances(be,Ge,Vt)}else $e.render(be,Ge)};function it(E,N,z){E.transparent===!0&&E.side===Vn&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,Pr(E,N,z),E.side=Ar,E.needsUpdate=!0,Pr(E,N,z),E.side=Vn):Pr(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),h=Be.get(z),h.init(N),y.push(h),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),E!==z&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();let k=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let oe=U.material;if(oe)if(Array.isArray(oe))for(let ye=0;ye<oe.length;ye++){let Ie=oe[ye];it(Ie,z,U),k.add(Ie)}else it(oe,z,U),k.add(oe)}),y.pop(),h=null,k},this.compileAsync=function(E,N,z=null){let k=this.compile(E,N,z);return new Promise(U=>{function oe(){if(k.forEach(function(ye){Me.get(ye).currentProgram.isReady()&&k.delete(ye)}),k.size===0){U(E);return}setTimeout(oe,10)}ee.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Bt=null;function Sn(E){Bt&&Bt(E)}function Za(){vi.stop()}function oi(){vi.start()}let vi=new C_;vi.setAnimationLoop(Sn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(E){Bt=E,H.setAnimationLoop(E),E===null?vi.stop():vi.start()},H.addEventListener("sessionstart",Za),H.addEventListener("sessionend",oi),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(N),N=H.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,P),h=Be.get(E,y.length),h.init(N),y.push(h),De.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(De),Ce=this.localClippingEnabled,ie=Q.init(this.clippingPlanes,Ce),m=Ee.get(E,v.length),m.init(),v.push(m),H.enabled===!0&&H.isPresenting===!0){let oe=_.xr.getDepthSensingMesh();oe!==null&&hs(oe,N,-1/0,_.sortObjects)}hs(E,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ce,fe),j=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,j&&Ne.addToRenderList(m,E),this.info.render.frame++,ie===!0&&Q.beginShadows();let z=h.state.shadowsArray;ge.render(z,E,N),ie===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(h.setupLights(),N.isArrayCamera){let oe=N.cameras;if(U.length>0)for(let ye=0,Ie=oe.length;ye<Ie;ye++){let Le=oe[ye];Ao(k,U,E,Le)}j&&Ne.render(E);for(let ye=0,Ie=oe.length;ye<Ie;ye++){let Le=oe[ye];Ja(m,E,Le,Le.viewport)}}else U.length>0&&Ao(k,U,E,N),j&&Ne.render(E),Ja(m,E,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,N),rt.resetDefaultState(),w=-1,x=null,y.pop(),y.length>0?(h=y[y.length-1],ie===!0&&Q.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function hs(E,N,z,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){k&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(De);let ye=$.update(E),Ie=E.material;Ie.visible&&m.push(E,ye,Ie,z,Fe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let ye=$.update(E),Ie=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Fe.copy(ye.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(De)),Array.isArray(Ie)){let Le=ye.groups;for(let O=0,ue=Le.length;O<ue;O++){let se=Le[O],be=Ie[se.materialIndex];be&&be.visible&&m.push(E,ye,be,z,Fe.z,se)}}else Ie.visible&&m.push(E,ye,Ie,z,Fe.z,null)}}let oe=E.children;for(let ye=0,Ie=oe.length;ye<Ie;ye++)hs(oe[ye],N,z,k)}function Ja(E,N,z,k){let U=E.opaque,oe=E.transmissive,ye=E.transparent;h.setupLightsView(z),ie===!0&&Q.setGlobalState(_.clippingPlanes,z),k&&ae.viewport(A.copy(k)),U.length>0&&hn(U,N,z),oe.length>0&&hn(oe,N,z),ye.length>0&&hn(ye,N,z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ao(E,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Yi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Wa:Xi,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let oe=h.state.transmissionRenderTarget[k.id],ye=k.viewport||A;oe.setSize(ye.z,ye.w);let Ie=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(X),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),j&&Ne.render(z);let Le=_.toneMapping;_.toneMapping=wr;let O=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),ie===!0&&Q.setGlobalState(_.clippingPlanes,k),hn(E,z,k),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let se=0,be=N.length;se<be;se++){let We=N[se],Ge=We.object,gt=We.geometry,$e=We.material,_e=We.group;if($e.side===Vn&&Ge.layers.test(k.layers)){let Vt=$e.side;$e.side=yn,$e.needsUpdate=!0,Rr(Ge,z,k,gt,$e,_e),$e.side=Vt,$e.needsUpdate=!0,ue=!0}}ue===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}_.setRenderTarget(Ie),_.setClearColor(X,K),O!==void 0&&(k.viewport=O),_.toneMapping=Le}function hn(E,N,z){let k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=E.length;U<oe;U++){let ye=E[U],Ie=ye.object,Le=ye.geometry,O=k===null?ye.material:k,ue=ye.group;Ie.layers.test(z.layers)&&Rr(Ie,N,z,Le,O,ue)}}function Rr(E,N,z,k,U,oe){E.onBeforeRender(_,N,z,k,U,oe),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,N,z,k,E,oe),U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=yn,U.needsUpdate=!0,_.renderBufferDirect(z,N,k,U,E,oe),U.side=Ar,U.needsUpdate=!0,_.renderBufferDirect(z,N,k,U,E,oe),U.side=Vn):_.renderBufferDirect(z,N,k,U,E,oe),E.onAfterRender(_,N,z,k,U,oe)}function Pr(E,N,z){N.isScene!==!0&&(N=Ze);let k=Me.get(E),U=h.state.lights,oe=h.state.shadowsArray,ye=U.state.version,Ie=Pe.getParameters(E,U.state,oe,N,z),Le=Pe.getProgramCacheKey(Ie),O=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,O===void 0&&(E.addEventListener("dispose",Ve),O=new Map,k.programs=O);let ue=O.get(Le);if(ue!==void 0){if(k.currentProgram===ue&&k.lightsStateVersion===ye)return yi(E,Ie),ue}else Ie.uniforms=Pe.getUniforms(E),E.onBeforeCompile(Ie,_),ue=Pe.acquireProgram(Ie,Le),O.set(Le,ue),k.uniforms=Ie.uniforms;let se=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(se.clippingPlanes=Q.uniform),yi(E,Ie),k.needsLights=Ka(E),k.lightsStateVersion=ye,k.needsLights&&(se.ambientLightColor.value=U.state.ambient,se.lightProbe.value=U.state.probe,se.directionalLights.value=U.state.directional,se.directionalLightShadows.value=U.state.directionalShadow,se.spotLights.value=U.state.spot,se.spotLightShadows.value=U.state.spotShadow,se.rectAreaLights.value=U.state.rectArea,se.ltc_1.value=U.state.rectAreaLTC1,se.ltc_2.value=U.state.rectAreaLTC2,se.pointLights.value=U.state.point,se.pointLightShadows.value=U.state.pointShadow,se.hemisphereLights.value=U.state.hemi,se.directionalShadowMap.value=U.state.directionalShadowMap,se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,se.spotShadowMap.value=U.state.spotShadowMap,se.spotLightMatrix.value=U.state.spotLightMatrix,se.spotLightMap.value=U.state.spotLightMap,se.pointShadowMap.value=U.state.pointShadowMap,se.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=ue,k.uniformsList=null,ue}function ai(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=co.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function yi(E,N){let z=Me.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function _i(E,N,z,k,U){N.isScene!==!0&&(N=Ze),T.resetTextureUnits();let oe=N.fog,ye=k.isMeshStandardMaterial?N.environment:null,Ie=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Eo,Le=(k.isMeshStandardMaterial?F:M).get(k.envMap||ye),O=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ue=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),se=!!z.morphAttributes.position,be=!!z.morphAttributes.normal,We=!!z.morphAttributes.color,Ge=wr;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ge=_.toneMapping);let gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$e=gt!==void 0?gt.length:0,_e=Me.get(k),Vt=h.state.lights;if(ie===!0&&(Ce===!0||E!==x)){let At=E===x&&k.id===w;Q.setState(k,E,At)}let Qe=!1;k.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Vt.state.version||_e.outputColorSpace!==Ie||U.isBatchedMesh&&_e.batching===!1||!U.isBatchedMesh&&_e.batching===!0||U.isBatchedMesh&&_e.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_e.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_e.instancing===!1||!U.isInstancedMesh&&_e.instancing===!0||U.isSkinnedMesh&&_e.skinning===!1||!U.isSkinnedMesh&&_e.skinning===!0||U.isInstancedMesh&&_e.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_e.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_e.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_e.instancingMorph===!1&&U.morphTexture!==null||_e.envMap!==Le||k.fog===!0&&_e.fog!==oe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Q.numPlanes||_e.numIntersection!==Q.numIntersection)||_e.vertexAlphas!==O||_e.vertexTangents!==ue||_e.morphTargets!==se||_e.morphNormals!==be||_e.morphColors!==We||_e.toneMapping!==Ge||_e.morphTargetsCount!==$e)&&(Qe=!0):(Qe=!0,_e.__version=k.version);let Ht=_e.currentProgram;Qe===!0&&(Ht=Pr(k,N,U));let Xn=!1,dt=!1,$i=!1,Ke=Ht.getUniforms(),It=_e.uniforms;if(ae.useProgram(Ht.program)&&(Xn=!0,dt=!0,$i=!0),k.id!==w&&(w=k.id,dt=!0),Xn||x!==E){ae.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),g1(le),v1(le),Ke.setValue(R,"projectionMatrix",le)):Ke.setValue(R,"projectionMatrix",E.projectionMatrix),Ke.setValue(R,"viewMatrix",E.matrixWorldInverse);let Yn=Ke.map.cameraPosition;Yn!==void 0&&Yn.setValue(R,ze.setFromMatrixPosition(E.matrixWorld)),xe.logarithmicDepthBuffer&&Ke.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ke.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,dt=!0,$i=!0)}if(U.isSkinnedMesh){Ke.setOptional(R,U,"bindMatrix"),Ke.setOptional(R,U,"bindMatrixInverse");let At=U.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Ke.setValue(R,"boneTexture",At.boneTexture,T))}U.isBatchedMesh&&(Ke.setOptional(R,U,"batchingTexture"),Ke.setValue(R,"batchingTexture",U._matricesTexture,T),Ke.setOptional(R,U,"batchingIdTexture"),Ke.setValue(R,"batchingIdTexture",U._indirectTexture,T),Ke.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&Ke.setValue(R,"batchingColorTexture",U._colorsTexture,T));let st=z.morphAttributes;if((st.position!==void 0||st.normal!==void 0||st.color!==void 0)&&Oe.update(U,z,Ht),(dt||_e.receiveShadow!==U.receiveShadow)&&(_e.receiveShadow=U.receiveShadow,Ke.setValue(R,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(It.envMap.value=Le,It.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(It.envMapIntensity.value=N.environmentIntensity),dt&&(Ke.setValue(R,"toneMappingExposure",_.toneMappingExposure),_e.needsLights&&bu(It,$i),oe&&k.fog===!0&&de.refreshFogUniforms(It,oe),de.refreshMaterialUniforms(It,k,G,re,h.state.transmissionRenderTarget[E.id]),co.upload(R,ai(_e),It,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(co.upload(R,ai(_e),It,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ke.setValue(R,"center",U.center),Ke.setValue(R,"modelViewMatrix",U.modelViewMatrix),Ke.setValue(R,"normalMatrix",U.normalMatrix),Ke.setValue(R,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let At=k.uniformsGroups;for(let Yn=0,Ln=At.length;Yn<Ln;Yn++){let ja=At[Yn];D.update(ja,Ht),D.bind(ja,Ht)}}return Ht}function bu(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ka(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,z){Me.get(E.texture).__webglTexture=N,Me.get(E.depthTexture).__webglTexture=z;let k=Me.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let z=Me.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){P=E,C=N,b=z;let k=!0,U=null,oe=!1,ye=!1;if(E){let Le=Me.get(E);if(Le.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(Le.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Le.__hasExternalTextures)T.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let se=E.depthTexture;if(Le.__boundDepthTexture!==se){if(se!==null&&Me.has(se)&&(E.width!==se.image.width||E.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let O=E.texture;(O.isData3DTexture||O.isDataArrayTexture||O.isCompressedArrayTexture)&&(ye=!0);let ue=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ue[N])?U=ue[N][z]:U=ue[N],oe=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?U=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(ue)?U=ue[z]:U=ue,A.copy(E.viewport),Y.copy(E.scissor),B=E.scissorTest}else A.copy(Te).multiplyScalar(G).floor(),Y.copy(ke).multiplyScalar(G).floor(),B=et;if(ae.bindFramebuffer(R.FRAMEBUFFER,U)&&k&&ae.drawBuffers(E,U),ae.viewport(A),ae.scissor(Y),ae.setScissorTest(B),oe){let Le=Me.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Le.__webglTexture,z)}else if(ye){let Le=Me.get(E.texture),O=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Le.__webglTexture,z||0,O)}w=-1},this.readRenderTargetPixels=function(E,N,z,k,U,oe,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){ae.bindFramebuffer(R.FRAMEBUFFER,Ie);try{let Le=E.texture,O=Le.format,ue=Le.type;if(!xe.textureFormatReadable(O)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&z>=0&&z<=E.height-U&&R.readPixels(N,z,k,U,He.convert(O),He.convert(ue),oe)}finally{let Le=P!==null?Me.get(P).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,k,U,oe,ye){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){let Le=E.texture,O=Le.format,ue=Le.type;if(!xe.textureFormatReadable(O))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-k&&z>=0&&z<=E.height-U){ae.bindFramebuffer(R.FRAMEBUFFER,Ie);let se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),R.readPixels(N,z,k,U,He.convert(O),He.convert(ue),0);let be=P!==null?Me.get(P).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,be);let We=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await m1(R,We,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(se),R.deleteSync(We),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,z=0){E.isTexture!==!0&&(wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let k=Math.pow(2,-z),U=Math.floor(E.image.width*k),oe=Math.floor(E.image.height*k),ye=N!==null?N.x:0,Ie=N!==null?N.y:0;T.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ye,Ie,U,oe),ae.unbindTexture()},this.copyTextureToTexture=function(E,N,z=null,k=null,U=0){E.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,z=null);let oe,ye,Ie,Le,O,ue,se,be,We,Ge=E.isCompressedTexture?E.mipmaps[U]:E.image;z!==null?(oe=z.max.x-z.min.x,ye=z.max.y-z.min.y,Ie=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,O=z.min.y,ue=z.isBox3?z.min.z:0):(oe=Ge.width,ye=Ge.height,Ie=Ge.depth||1,Le=0,O=0,ue=0),k!==null?(se=k.x,be=k.y,We=k.z):(se=0,be=0,We=0);let gt=He.convert(N.format),$e=He.convert(N.type),_e;N.isData3DTexture?(T.setTexture3D(N,0),_e=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),_e=R.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),_e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let Vt=R.getParameter(R.UNPACK_ROW_LENGTH),Qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ht=R.getParameter(R.UNPACK_SKIP_PIXELS),Xn=R.getParameter(R.UNPACK_SKIP_ROWS),dt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ge.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ge.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,O),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ue);let $i=E.isDataArrayTexture||E.isData3DTexture,Ke=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let It=Me.get(E),st=Me.get(N),At=Me.get(It.__renderTarget),Yn=Me.get(st.__renderTarget);ae.bindFramebuffer(R.READ_FRAMEBUFFER,At.__webglFramebuffer),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ln=0;Ln<Ie;Ln++)$i&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,U,ue+Ln),E.isDepthTexture?(Ke&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,U,We+Ln),R.blitFramebuffer(Le,O,oe,ye,se,be,oe,ye,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ke?R.copyTexSubImage3D(_e,U,se,be,We+Ln,Le,O,oe,ye):R.copyTexSubImage2D(_e,U,se,be,We+Ln,Le,O,oe,ye);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ke?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(_e,U,se,be,We,oe,ye,Ie,gt,$e,Ge.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,U,se,be,We,oe,ye,Ie,gt,Ge.data):R.texSubImage3D(_e,U,se,be,We,oe,ye,Ie,gt,$e,Ge):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,se,be,oe,ye,gt,$e,Ge.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,se,be,Ge.width,Ge.height,gt,Ge.data):R.texSubImage2D(R.TEXTURE_2D,U,se,be,oe,ye,gt,$e,Ge);R.pixelStorei(R.UNPACK_ROW_LENGTH,Vt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ht),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,dt),U===0&&N.generateMipmaps&&R.generateMipmap(_e),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z=null,k=null,U=0){return E.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),wa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,z,k,U)},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){C=0,b=0,P=null,ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}};var Na=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var hu=class extends _n{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Pn,u=Pn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xo=class extends _n{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new he:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new L,r=[],s=[],o=[],a=new L,l=new mt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ua=class extends Wn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new he){let i=n,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Np=class extends Ua{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function um(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Gc=new L,Cf=new um,Rf=new um,Pf=new um,Fa=class extends Wn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new L){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Gc.subVectors(r[0],r[1]).add(r[0]),c=Gc);let f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Gc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Cf.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,S,m),Rf.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,S,m),Pf.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(Cf.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Rf.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Pf.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Cf.calc(l),Rf.calc(l),Pf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function n_(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function hb(t,e){let n=1-t;return n*n*e}function db(t,e){return 2*(1-t)*t*e}function fb(t,e){return t*t*e}function ba(t,e,n,i){return hb(t,e)+db(t,n)+fb(t,i)}function pb(t,e){let n=1-t;return n*n*n*e}function mb(t,e){let n=1-t;return 3*n*n*t*e}function gb(t,e){return 3*(1-t)*t*t*e}function vb(t,e){return t*t*t*e}function Ca(t,e,n,i,r){return pb(t,e)+mb(t,n)+gb(t,i)+vb(t,r)}var du=class extends Wn{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ca(e,r.x,s.x,o.x,a.x),Ca(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Up=class extends Wn{constructor(e=new L,n=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new L){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ca(e,r.x,s.x,o.x,a.x),Ca(e,r.y,s.y,o.y,a.y),Ca(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fu=class extends Wn{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fp=class extends Wn{constructor(e=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new L){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pu=class extends Wn{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ba(e,r.x,s.x,o.x),ba(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Op=class extends Wn{constructor(e=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new L){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ba(e,r.x,s.x,o.x),ba(e,r.y,s.y,o.y),ba(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){let i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(n_(a,l.x,c.x,u.x,f.x),n_(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new he().fromArray(r))}return this}},zp=Object.freeze({__proto__:null,ArcCurve:Np,CatmullRomCurve3:Fa,CubicBezierCurve:du,CubicBezierCurve3:Up,EllipseCurve:Ua,LineCurve:fu,LineCurve3:Fp,QuadraticBezierCurve:pu,QuadraticBezierCurve3:Op,SplineCurve:mu}),kp=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zp[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(new zp[r.type]().fromJSON(r))}return this}},So=class extends kp{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new fu(this.currentPoint.clone(),new he(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){let s=new pu(this.currentPoint.clone(),new he(e,n),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){let a=new du(this.currentPoint.clone(),new he(e,n),new he(i,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new mu(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){let c=new Ua(e,n,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ss=class extends So{constructor(e){super(e),this.uuid=wo(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(new So().fromJSON(r))}return this}},yb={triangulate:function(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=D_(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,d,p;if(i&&(s=Eb(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)f=t[g],d=t[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Oa(s,o,n,a,l,p,0),o}};function D_(t,e,n,i,r){let s,o;if(r===Nb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=i_(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=i_(s,t[s],t[s+1],o);return o&&Mu(o,o.next)&&(ka(o),o=o.next),o}function os(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Mu(n,n.next)||Mt(n.prev,n,n.next)===0)){if(ka(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Oa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Cb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?xb(t,i,r,s):_b(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ka(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Sb(os(t),e,n),Oa(t,e,n,i,r,s,2)):o===2&&Mb(t,e,n,i,r,s):Oa(os(t),e,n,i,r,s,1);break}}}function _b(t){let e=t.prev,n=t,i=t.next;if(Mt(e,n,i)>=0)return!1;let r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&so(r,a,s,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xb(t,e,n,i){let r=t.prev,s=t,o=t.next;if(Mt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<d?u:d:f<d?f:d,S=a>l?a>c?a:c:l>c?l:c,m=u>f?u>d?u:d:f>d?f:d,h=Bp(p,g,e,n,i),v=Bp(S,m,e,n,i),y=t.prevZ,_=t.nextZ;for(;y&&y.z>=h&&_&&_.z<=v;){if(y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&so(a,u,l,f,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=S&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&so(a,u,l,f,c,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=h;){if(y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&so(a,u,l,f,c,d,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=S&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&so(a,u,l,f,c,d,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sb(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!Mu(r,s)&&N_(r,i,i.next,s)&&za(r,s)&&za(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ka(i),ka(i.next),i=t=s),i=i.next}while(i!==t);return os(i)}function Mb(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ib(o,a)){let l=U_(o,a);o=os(o,o.next),l=os(l,l.next),Oa(o,e,n,i,r,s,0),Oa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Eb(t,e,n,i){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=D_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Pb(c));for(r.sort(wb),s=0;s<r.length;s++)n=Tb(r[s],n);return n}function wb(t,e){return t.x-e.x}function Tb(t,e){let n=Ab(t,e);if(!n)return e;let i=U_(n,t);return os(i,i.next),os(n,n.next)}function Ab(t,e){let n=e,i=-1/0,r,s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&so(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),za(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&bb(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function bb(t,e){return Mt(t.prev,t,e.prev)<0&&Mt(e.next,t,t.next)<0}function Cb(t,e,n,i){let r=t;do r.z===0&&(r.z=Bp(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Rb(r)}function Rb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Bp(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Pb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function so(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Ib(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Lb(t,e)&&(za(t,e)&&za(e,t)&&Db(t,e)&&(Mt(t.prev,t,e.prev)||Mt(t,e.prev,e))||Mu(t,e)&&Mt(t.prev,t,t.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Mu(t,e){return t.x===e.x&&t.y===e.y}function N_(t,e,n,i){let r=Xc(Mt(t,e,n)),s=Xc(Mt(t,e,i)),o=Xc(Mt(n,i,t)),a=Xc(Mt(n,i,e));return!!(r!==s&&o!==a||r===0&&Wc(t,n,e)||s===0&&Wc(t,i,e)||o===0&&Wc(n,t,i)||a===0&&Wc(n,e,i))}function Wc(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Xc(t){return t>0?1:t<0?-1:0}function Lb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&N_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function za(t,e){return Mt(t.prev,t,t.next)<0?Mt(t,e,t.next)>=0&&Mt(t,t.prev,e)>=0:Mt(t,e,t.prev)<0||Mt(t,t.next,e)<0}function Db(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function U_(t,e){let n=new Vp(t.i,t.x,t.y),i=new Vp(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function i_(t,e,n,i){let r=new Vp(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ka(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Vp(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Tr=class t{static area(e){let n=e.length,i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],r=[],s=[];r_(e),s_(i,e);let o=e.length;n.forEach(r_);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,s_(i,n[l]);let a=yb.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function r_(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function s_(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Ba=class t extends Gn{constructor(e=new ss([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,h=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:Ub,y,_=!1,I,C,b,P;h&&(y=h.getSpacedPoints(u),_=!0,d=!1,I=h.computeFrenetFrames(u,!1),C=new L,b=new L,P=new L),d||(m=0,p=0,g=0,S=0);let w=a.extractPoints(c),x=w.shape,A=w.holes;if(!Tr.isClockWise(x)){x=x.reverse();for(let j=0,te=A.length;j<te;j++){let R=A[j];Tr.isClockWise(R)&&(A[j]=R.reverse())}}let B=Tr.triangulateShape(x,A),X=x;for(let j=0,te=A.length;j<te;j++){let R=A[j];x=x.concat(R)}function K(j,te,R){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(te,R)}let W=x.length,re=B.length;function G(j,te,R){let Re,ee,xe,ae=j.x-te.x,Ue=j.y-te.y,Me=R.x-j.x,T=R.y-j.y,M=ae*ae+Ue*Ue,F=ae*T-Ue*Me;if(Math.abs(F)>Number.EPSILON){let q=Math.sqrt(M),V=Math.sqrt(Me*Me+T*T),$=te.x-Ue/q,Pe=te.y+ae/q,de=R.x-T/V,Ee=R.y+Me/V,Be=((de-$)*T-(Ee-Pe)*Me)/(ae*T-Ue*Me);Re=$+ae*Be-j.x,ee=Pe+Ue*Be-j.y;let Q=Re*Re+ee*ee;if(Q<=2)return new he(Re,ee);xe=Math.sqrt(Q/2)}else{let q=!1;ae>Number.EPSILON?Me>Number.EPSILON&&(q=!0):ae<-Number.EPSILON?Me<-Number.EPSILON&&(q=!0):Math.sign(Ue)===Math.sign(T)&&(q=!0),q?(Re=-Ue,ee=ae,xe=Math.sqrt(M)):(Re=ae,ee=Ue,xe=Math.sqrt(M/2))}return new he(Re/xe,ee/xe)}let ce=[];for(let j=0,te=X.length,R=te-1,Re=j+1;j<te;j++,R++,Re++)R===te&&(R=0),Re===te&&(Re=0),ce[j]=G(X[j],X[R],X[Re]);let fe=[],Te,ke=ce.concat();for(let j=0,te=A.length;j<te;j++){let R=A[j];Te=[];for(let Re=0,ee=R.length,xe=ee-1,ae=Re+1;Re<ee;Re++,xe++,ae++)xe===ee&&(xe=0),ae===ee&&(ae=0),Te[Re]=G(R[Re],R[xe],R[ae]);fe.push(Te),ke=ke.concat(Te)}for(let j=0;j<m;j++){let te=j/m,R=p*Math.cos(te*Math.PI/2),Re=g*Math.sin(te*Math.PI/2)+S;for(let ee=0,xe=X.length;ee<xe;ee++){let ae=K(X[ee],ce[ee],Re);le(ae.x,ae.y,-R)}for(let ee=0,xe=A.length;ee<xe;ee++){let ae=A[ee];Te=fe[ee];for(let Ue=0,Me=ae.length;Ue<Me;Ue++){let T=K(ae[Ue],Te[Ue],Re);le(T.x,T.y,-R)}}}let et=g+S;for(let j=0;j<W;j++){let te=d?K(x[j],ke[j],et):x[j];_?(b.copy(I.normals[0]).multiplyScalar(te.x),C.copy(I.binormals[0]).multiplyScalar(te.y),P.copy(y[0]).add(b).add(C),le(P.x,P.y,P.z)):le(te.x,te.y,0)}for(let j=1;j<=u;j++)for(let te=0;te<W;te++){let R=d?K(x[te],ke[te],et):x[te];_?(b.copy(I.normals[j]).multiplyScalar(R.x),C.copy(I.binormals[j]).multiplyScalar(R.y),P.copy(y[j]).add(b).add(C),le(P.x,P.y,P.z)):le(R.x,R.y,f/u*j)}for(let j=m-1;j>=0;j--){let te=j/m,R=p*Math.cos(te*Math.PI/2),Re=g*Math.sin(te*Math.PI/2)+S;for(let ee=0,xe=X.length;ee<xe;ee++){let ae=K(X[ee],ce[ee],Re);le(ae.x,ae.y,f+R)}for(let ee=0,xe=A.length;ee<xe;ee++){let ae=A[ee];Te=fe[ee];for(let Ue=0,Me=ae.length;Ue<Me;Ue++){let T=K(ae[Ue],Te[Ue],Re);_?le(T.x,T.y+y[u-1].y,y[u-1].x+R):le(T.x,T.y,f+R)}}}J(),ie();function J(){let j=r.length/3;if(d){let te=0,R=W*te;for(let Re=0;Re<re;Re++){let ee=B[Re];De(ee[2]+R,ee[1]+R,ee[0]+R)}te=u+m*2,R=W*te;for(let Re=0;Re<re;Re++){let ee=B[Re];De(ee[0]+R,ee[1]+R,ee[2]+R)}}else{for(let te=0;te<re;te++){let R=B[te];De(R[2],R[1],R[0])}for(let te=0;te<re;te++){let R=B[te];De(R[0]+W*u,R[1]+W*u,R[2]+W*u)}}i.addGroup(j,r.length/3-j,0)}function ie(){let j=r.length/3,te=0;Ce(X,te),te+=X.length;for(let R=0,Re=A.length;R<Re;R++){let ee=A[R];Ce(ee,te),te+=ee.length}i.addGroup(j,r.length/3-j,1)}function Ce(j,te){let R=j.length;for(;--R>=0;){let Re=R,ee=R-1;ee<0&&(ee=j.length-1);for(let xe=0,ae=u+m*2;xe<ae;xe++){let Ue=W*xe,Me=W*(xe+1),T=te+Re+Ue,M=te+ee+Ue,F=te+ee+Me,q=te+Re+Me;ze(T,M,F,q)}}}function le(j,te,R){l.push(j),l.push(te),l.push(R)}function De(j,te,R){Fe(j),Fe(te),Fe(R);let Re=r.length/3,ee=v.generateTopUV(i,r,Re-3,Re-2,Re-1);Ze(ee[0]),Ze(ee[1]),Ze(ee[2])}function ze(j,te,R,Re){Fe(j),Fe(te),Fe(Re),Fe(te),Fe(R),Fe(Re);let ee=r.length/3,xe=v.generateSideWallUV(i,r,ee-6,ee-3,ee-2,ee-1);Ze(xe[0]),Ze(xe[1]),Ze(xe[3]),Ze(xe[1]),Ze(xe[2]),Ze(xe[3])}function Fe(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Ze(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Fb(n,i,e)}static fromJSON(e,n){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=n[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zp[r.type]().fromJSON(r)),new t(i,e.options)}},Ub={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],S=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-f),new he(d,1-g),new he(S,1-h)]:[new he(a,1-l),new he(u,1-f),new he(p,1-g),new he(m,1-h)]}};function Fb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var gu=class t extends Gn{constructor(e=new ss([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(s,3)),this.setAttribute("uv",new qt(o,2));function c(u){let f=r.length/3,d=u.extractPoints(n),p=d.shape,g=d.holes;Tr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,h=g.length;m<h;m++){let v=g[m];Tr.isClockWise(v)===!0&&(g[m]=v.reverse())}let S=Tr.triangulateShape(p,g);for(let m=0,h=g.length;m<h;m++){let v=g[m];p=p.concat(v)}for(let m=0,h=p.length;m<h;m++){let v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,h=S.length;m<h;m++){let v=S[m],y=v[0]+f,_=v[1]+f,I=v[2]+f;i.push(y,_,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes;return Ob(n,e)}static fromJSON(e,n){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=n[e.shapes[r]];i.push(o)}return new t(i,e.curveSegments)}};function Ob(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Va=class t extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new L,f=new L,d=new L;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){let S=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(S),f.y=(e+n*Math.cos(m))*Math.sin(S),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){let S=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(S,m,v),o.push(m,h,v)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ha=class extends rs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E_,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},as=class extends Ha{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Yc(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function zb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Mo=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oy,endingEnd:oy}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ay:s=e,a=2*n-i;break;case ly:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ay:o=e,l=2*i-n;break;case ly:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),S=g*g,m=S*g,h=-d*m+2*d*S-d*g,v=(1+d)*m+(-1.5-2*d)*S+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*S+.5*g,_=p*m-p*S;for(let I=0;I!==a;++I)s[I]=h*o[u+I]+v*o[c+I]+y*o[l+I]+_*o[f+I];return s}},Gp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},Wp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yc(n,this.TimeBufferType),this.values=Yc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Yc(e.times,Array),values:Yc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case jc:n=this.InterpolantFactoryMethodDiscrete;break;case gp:n=this.InterpolantFactoryMethodLinear;break;case jd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jc;case this.InterpolantFactoryMethodLinear:return gp;case this.InterpolantFactoryMethodSmooth:return jd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&zb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===jd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){let S=n[f+g];if(S!==n[d+g]||S!==n[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=gp;var ls=class extends si{constructor(e,n,i){super(e,n,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=jc;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Xp=class extends si{};Xp.prototype.ValueTypeName="color";var Yp=class extends si{};Yp.prototype.ValueTypeName="number";var qp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)In.slerpFlat(s,0,o,c-a,o,c,l);return s}},vu=class extends si{InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}};vu.prototype.ValueTypeName="quaternion";vu.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends si{constructor(e,n,i){super(e,n,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=jc;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var $p=class extends si{};$p.prototype.ValueTypeName="vector";var Zp=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},kb=new Zp,Jp=class{constructor(e){this.manager=e!==void 0?e:kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jp.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kp=class extends xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var If=new mt,o_=new L,a_=new L,jp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;o_.setFromMatrixPosition(e.matrixWorld),n.position.copy(o_),a_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(a_),n.updateMatrixWorld(),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(If)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Qp=class extends jp{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ga=class extends Kp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var hm="\\[\\]\\.:\\/",Bb=new RegExp("["+hm+"]","g"),dm="[^"+hm+"]",Vb="[^"+hm.replace("\\.","")+"]",Hb=/((?:WC+[\/:])*)/.source.replace("WC",dm),Gb=/(WCOD+)?/.source.replace("WCOD",Vb),Wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dm),Xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dm),Yb=new RegExp("^"+Hb+Gb+Wb+Xb+"$"),qb=["material","materials","bones","map"],em=class{constructor(e,n,i){let r=i||yt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},yt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(e){let n=Yb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);qb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=em;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NC=new Float32Array(1);var l_=new mt,yu=class{constructor(e,n,i=0,r=1/0){this.ray=new iu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return l_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l_),this}intersectObject(e,n=!0,i=[]){return tm(e,this,i,n),i.sort(c_),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)tm(e[r],this,i,n);return i.sort(c_),i}};function c_(t,e){return t.distance-e.distance}function tm(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)tm(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ex=fs(Xa()),k_={portrait:[1.6,2.25],landscape:[2.25,1.6]},B_={left:.27,center:.5,right:.73},$a=.018,un=.007,Pt=4,V_=1/.05,tC=1/960,nC=2,qi=72,H_=24,fm=.36,Z_=.095,iC=.0135,wu=.036,qa=.15,G_=1024,W_={glossy:{roughness:.18,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},Tu=[0,.07,.93,1],rC=[-.95,-.28,.28,.95],sC=9,oC=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,aC=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,lC=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,cC=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,X_={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Cr=(t,e,n)=>Math.min(n,Math.max(e,t)),Ya=(t,e,n)=>t+(e-t)*n,pm=(t,e)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return e;n.fillStyle="#000000",n.fillStyle=t;let i=n.fillStyle;if(i.startsWith("#")){let s=parseInt(i.slice(1),16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}let r=i.match(/[\d.]+/g);return!r||r.length<3?e:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}catch{return e}},uC=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],Au=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,J_=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},ym=(t,e,n,i,r,s)=>{let o=Math.max(0,Math.min(s,i/2,r/2)),a=o*.4477;t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.bezierCurveTo(e+i-a,n,e+i,n+a,e+i,n+o),t.lineTo(e+i,n+r-o),t.bezierCurveTo(e+i,n+r-a,e+i-a,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.bezierCurveTo(e+a,n+r,e,n+r-a,e,n+r-o),t.lineTo(e,n+o),t.bezierCurveTo(e,n+a,e+a,n,e+o,n)},mm=(t,e)=>{if(!e)return Promise.resolve(null);let n=t.get(e);if(n)return n;let i=new Promise(r=>{let s=new Image;s.crossOrigin="anonymous",s.decoding="async",s.onload=()=>r(s),s.onerror=()=>r(null),s.src=e});return t.set(e,i),i},Y_=(t,e)=>{let[n,i]=k_[t]||k_.portrait,r=Ya(.03,Math.min(n,i)*.2,Cr(e,0,1)),s={width:.34,height:.07,y:i/2-.13},o=i/2-.055;return{width:n,height:i,radius:r,slot:s,ringY:o,hangY:o+Z_}},hC=t=>{let{width:e,height:n,radius:i,slot:r}=t,s=new ss;ym(s,-e/2+un,-n/2+un,e-un*2,n-un*2,Math.max(i-un,.005));let o=new So;ym(o,-r.width/2-un,r.y-r.height/2-un,r.width+un*2,r.height+un*2,r.height/2+un),s.holes.push(o);let a=new Ba(s,{depth:$a,bevelEnabled:!0,bevelThickness:un,bevelSize:un,bevelSegments:5,curveSegments:24});a.translate(0,0,-$a/2);let l=new gu(s,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let f=0;f<c.count;f++)u.setXY(f,(c.getX(f)+e/2)/e,(c.getY(f)+n/2)/n);return u.needsUpdate=!0,{body:a,face:l}},q_=t=>{let e=new ss,n=t*1.16;ym(e,-n/2+.014,-qa/2+.014,n-.028,qa-.028,.024);let i=new Ba(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},dC=t=>{let e=Tu.length,n=new Gn;n.setAttribute("position",new nn(new Float32Array(t*e*3),3)),n.setAttribute("normal",new nn(new Float32Array(t*e*3),3)),n.setAttribute("uv",new nn(new Float32Array(t*e*2),2));let i=[];for(let r=0;r<t-1;r++)for(let s=0;s<e-1;s++){let o=r*e+s;i.push(o,o+e,o+1,o+1,o+e,o+e+1)}return n.setIndex(i),n},fC=t=>{let e=new Na;e.background=new qe(.035,.035,.04);let n=new yo(1,1),i=[],r=(a,l,c,u=0)=>{let f=new go({color:new qe(a,a,a),side:Vn});i.push(f);let d=new Rt(n,f);d.position.set(...l),d.scale.set(c[0],c[1],1),d.lookAt(0,0,0),d.rotateZ(u),e.add(d)};r(2.6,[0,4.5,8],[9,4]),r(6,[-5.5,.5,7],[.9,14]),r(4,[5,-.5,8],[.6,14]),r(3.5,[0,-1,9],[24,.35],Math.PI/3),r(2.5,[1,2.5,9],[24,.2],Math.PI/3),r(1.4,[0,6,-6],[12,4]),r(.5,[0,-7,1],[16,6]),r(.9,[8,0,-2],[4,10]);let s=new _o(t),o=s.fromScene(e,.035);return s.dispose(),n.dispose(),i.forEach(a=>a.dispose()),o},gm=(t,e)=>{let n=new xo(t);return n.colorSpace=tn,n.anisotropy=e,n},pC=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");if(!n)return new xo(e);let i=J_(7),r=Float32Array.from({length:16384},()=>i()),s=(l,c)=>{let u=0;for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++)u+=r[(c+f+128)%128*128+(l+d+128)%128];return u/9*1.6},o=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=s((c-1+128)%128,l)-s((c+1)%128,l),f=s(c,(l-1+128)%128)-s(c,(l+1)%128),d=Math.hypot(u,f,1),p=(l*128+c)*4;o.data[p]=(u/d*.5+.5)*255,o.data[p+1]=(f/d*.5+.5)*255,o.data[p+2]=(1/d*.5+.5)*255,o.data[p+3]=255}n.putImageData(o,0,0);let a=new xo(e);return a.wrapS=Wi,a.wrapT=Wi,a.repeat.set(5,7),a},mC=()=>{let n=J_(19),i=Float32Array.from({length:16384},()=>n()),r=l=>Math.sqrt(Math.max(0,1-4*l*l)),s=(l,c)=>{let u=(l%128+128)%128,f=(c%128+128)%128,d=u/128*8,p=f/128*8,g=Math.floor(d),S=Math.floor(p),m=d-g-.5,h=p-S-.5,v=(g+S)%2===0,y=r(m)*(.55+.45*Math.cos(h*Math.PI*(v?1:.6))),_=r(h)*(.55+.45*Math.cos(m*Math.PI*(v?.6:1)));return(v?Math.max(y,_*.7):Math.max(_,y*.7))+i[f*128+u]*.08},o=new Uint8Array(16384*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(s(c-1,l)-s(c+1,l))*1.6,f=(s(c,l-1)-s(c,l+1))*1.6,d=Math.hypot(u,f,1),p=(l*128+c)*4;o[p]=(u/d*.5+.5)*255,o[p+1]=(f/d*.5+.5)*255,o[p+2]=(1/d*.5+.5)*255,o[p+3]=255}let a=new hu(o,128,128);return a.wrapS=Wi,a.wrapT=Wi,a.magFilter=Hn,a.minFilter=ki,a.generateMipmaps=!0,a.needsUpdate=!0,a},gC=(t,e,n,i,r)=>{let s=(r==="contain"?Math.min:Math.max)(n/e.width,i/e.height),o=e.width*s,a=e.height*s;t.drawImage(e,(n-o)/2,(i-a)/2,o,a)},$_=(t,e,n,i)=>{let r=t.getContext("2d");r&&(r.fillStyle=Au(n),r.fillRect(0,0,t.width,t.height),e&&gC(r,e,t.width,t.height,i))},vC=(t,e,n)=>{let r=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=r;let s=t.getContext("2d");if(!s)return r/192;if(s.fillStyle=Au(n),s.fillRect(0,0,192,r),e)return s.save(),s.translate(192,0),s.rotate(Math.PI/2),s.drawImage(e,0,0,r,192),s.restore(),r/192;let o=uC(n)>.5?[0,0,0]:[1,1,1];s.fillStyle=Au(o,.05);for(let a=0;a<r;a+=4)s.fillRect(0,a,192,1);s.fillStyle=Au(o,.2);for(let a=0;a<r;a+=14)s.fillRect(192*.075,a,2,8),s.fillRect(192*.925-2,a,2,8);return r/192},yC=()=>{let t=()=>Array.from({length:Pt+1},()=>new L);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(Pt),impulses:new Float64Array(Pt),rest:1,anchor:new L,body:{position:new L,previous:new L,velocity:new L,quaternion:new In,previousQuaternion:new In,angular:new L,mass:1,inverseInertia:new L(1,1,1),hang:new L},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},at={a:new L,b:new L,c:new L,d:new L,e:new L,f:new L,g:new L,pin:new L,q:new In,r:new In},_m=(t,e,n)=>(at.r.copy(t.quaternion).invert(),n.copy(e).applyQuaternion(at.r),n.set(n.x*t.inverseInertia.x,n.y*t.inverseInertia.y,n.z*t.inverseInertia.z),n.applyQuaternion(t.quaternion)),K_=(t,e)=>{let{x:n,y:i,z:r,w:s}=t;t.x+=.5*(e.x*s+e.y*r-e.z*i),t.y+=.5*(e.y*s+e.z*n-e.x*r),t.z+=.5*(e.z*s+e.x*i-e.y*n),t.w+=.5*(-e.x*n-e.y*i-e.z*r),t.normalize()},j_=(t,e,n)=>{let i=at.c.crossVectors(e,n);return 1/t.mass+i.dot(_m(t,i,at.d))},Q_=(t,e,n)=>{t.position.addScaledVector(n,1/t.mass),K_(t.quaternion,_m(t,at.e.crossVectors(e,n),at.f))},_C=(t,e,n,i)=>{let{nodes:r,body:s}=t,o=r[e],a=e===0?0:V_,l=e===Pt-1,c=at.g,u=r[e+1];l&&(c.copy(s.hang).applyQuaternion(s.quaternion),u=at.b.copy(s.position).add(c));let f=at.a.subVectors(u,o),d=f.length(),p=d-t.rest;if(p<=0||d<1e-9)return;let g=f.divideScalar(d),S=l?j_(s,c,g):V_,m=(d-t.lengths[e])/n,v=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,m))*n*n-t.impulses[e];if(v<=0)return;let y=Math.min(p/(a+S),v);t.impulses[e]+=y,a&&o.addScaledVector(g,y*a),l?Q_(s,c,g.multiplyScalar(-y)):u.addScaledVector(g,-y*S)},xC=(t,e,n)=>{let i=at.g.copy(e.local).applyQuaternion(t.quaternion),r=at.a.copy(n).sub(t.position).sub(i),s=r.length();if(s<1e-9)return;let o=r.divideScalar(s),a=s/j_(t,i,o);Q_(t,i,o.multiplyScalar(a))},vm=(t,e,n)=>{let{nodes:i,previous:r,velocities:s,body:o,anchor:a}=t;i[0].copy(a);for(let c=1;c<=Pt;c++)i[c].copy(i[c-1]),n?i[c].x+=t.rest:i[c].y-=t.rest;o.quaternion.identity(),n&&o.quaternion.setFromAxisAngle(new L(0,0,1),Math.PI/2),o.hang.set(0,e.hangY,0);let l=at.a.copy(o.hang).applyQuaternion(o.quaternion);o.position.copy(i[Pt]).sub(l),o.previous.copy(o.position),o.previousQuaternion.copy(o.quaternion),o.velocity.set(0,0,0),o.angular.set(0,0,0);for(let c=0;c<=Pt;c++)r[c].copy(i[c]),s[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},SC=(t,e,n)=>{t.rest=n/Pt;let{width:i,height:r}=e,s=t.body,o=$a+un*2;s.mass=1,s.inverseInertia.set(12/(r*r+o*o),12/(i*i+o*o),12/(i*i+r*r)),s.hang.set(0,e.hangY,0)},MC=(t,e,n,i)=>{let r=Math.max(1,Math.ceil(e/tC-1e-6)),s=e/r,{nodes:o,previous:a,velocities:l,body:c}=t,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,f=n.breeze*Math.sin(i*.37+.6)*2,d=t.grab,p=at.pin,g=Math.exp(-n.nodeDrag*s),S=Math.exp(-n.linearDrag*s),m=Math.exp(-n.angularDrag*s);for(let v=0;v<r;v++){for(let x=1;x<Pt;x++){let A=l[x];A.y-=n.gravity*s,A.x+=u*s,A.z+=f*s,a[x].copy(o[x]),o[x].addScaledVector(A,s)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let y=c.quaternion;if(d){let x=at.q.copy(d.rotation).multiply(at.r.copy(y).invert());x.w<0&&x.set(-x.x,-x.y,-x.z,-x.w);let A=at.a.set(x.x,x.y,x.z).multiplyScalar(2*n.grip);A.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(_m(c,A,at.b),s)}let _=at.a.set(0,1,0).applyQuaternion(y),I=at.b.set(-_.x*_.z,-_.y*_.z,1-_.z*_.z);if(I.lengthSq()>.001){let x=at.d.set(0,0,1).applyQuaternion(y),A=Math.atan2(at.e.crossVectors(I,x).dot(_),I.dot(x)),Y=A-t.twistRaw;Y>Math.PI?Y-=Math.PI*2:Y<-Math.PI&&(Y+=Math.PI*2),t.twist+=Y,t.twistRaw=A}if(!d){let x=c.angular.dot(_);c.angular.addScaledVector(_,(n.twist*(t.turn-t.twist)-n.twistDamping*x)*s)}c.velocity.y-=n.gravity*s,c.velocity.x+=u*.35*s,c.velocity.z+=f*.35*s,c.position.addScaledVector(c.velocity,s),K_(c.quaternion,at.f.copy(c.angular).multiplyScalar(s)),t.impulses.fill(0),d&&p.lerpVectors(d.from,d.target,(v+1)/r);for(let x=0;x<nC;x++){for(let A=0;A<Pt;A++)_C(t,A,s,n);d&&xC(c,d,p)}for(let x=1;x<Pt;x++){let A=l[x].subVectors(o[x],a[x]).divideScalar(s).multiplyScalar(g);A.multiplyScalar(1/(1+n.nodeAir*A.length()*s))}c.velocity.subVectors(c.position,c.previous).divideScalar(s);let C=at.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(C.x,C.y,C.z).multiplyScalar(2/s*(C.w<0?-1:1));let b=at.a.set(0,0,1).applyQuaternion(c.quaternion),P=c.velocity.dot(b),w=at.b.copy(c.velocity).addScaledVector(b,-P);w.multiplyScalar(1/(1+n.air*w.length()*s)),c.velocity.copy(w).addScaledVector(b,P/(1+n.broadside*Math.abs(P)*s)).multiplyScalar(S),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*s)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),o[Pt].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let x=0;x<Pt;x++)t.lengths[x]=o[x].distanceTo(o[x+1])}d&&d.from.copy(d.target);let h=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let v=1;v<Pt;v++)h+=l[v].lengthSq()*.05;t.calm=h<2e-4?t.calm+e:0},EC=({frontImage:t,backImage:e,imageFit:n="cover",cardColor:i="#ffffff",orientation:r="portrait",finish:s="glossy",cornerRadius:o=.3,size:a=.6,anchor:l="center",strapLength:c=.5,strapImage:u,strapColor:f="#111111",strapWidth:d=.65,metal:p="silver",gravity:g=1,damping:S=.5,elasticity:m=.5,breeze:h=.5,interactive:v=!0,intro:y=!0,className:_="",style:I})=>{let C=(0,us.useRef)(null),b=(0,us.useRef)(null),P=(0,us.useRef)(null);return b.current={frontImage:t,backImage:e,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:r==="landscape"?"landscape":"portrait",finish:s,cornerRadius:o,size:a,anchor:l,strapLength:c,strapImage:u,strapColor:f,strapWidth:d,metal:p,gravity:g,damping:S,elasticity:m,breeze:h,interactive:v,intro:y},(0,us.useEffect)(()=>{P.current?.()}),(0,us.useEffect)(()=>{let w=C.current;if(!w)return;let x;try{x=new uu({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}x.setClearColor(0,0),x.outputColorSpace=tn,x.toneMapping=nm,x.toneMappingExposure=1;let A=x.domElement;A.className="lanyard-canvas",A.setAttribute("aria-hidden","true"),w.appendChild(A);let Y=Math.min(8,x.capabilities.getMaxAnisotropy()),B=new Na,X=fC(x);B.environment=X.texture;let K=new cn(H_,1,.1,200),W=new Ga(16777215,1.6);W.position.set(-2.5,4,6);let re=new Ga(16777215,.35);re.position.set(3,-1,4),B.add(W,re);let G=new Map,ce={front:null,back:null,strap:null},fe=document.createElement("canvas"),Te=document.createElement("canvas"),ke=document.createElement("canvas"),et=gm(fe,Y),J=gm(Te,Y),ie=gm(ke,Y);ie.wrapS=zi,ie.wrapT=Wi;let Ce=pC(),le=mC(),De={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new L},foilFill:{value:new L},foilTop:{value:new L}},ze=O=>{Object.assign(O.uniforms,De),O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
${oC}`).replace("#include <project_vertex>",`#include <project_vertex>
${aC}`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
${lC}`).replace("#include <opaque_fragment>",`${cC}
#include <opaque_fragment>`)},Fe=new as({map:et,normalMap:Ce,normalScale:new he(.06,.06)}),Ze=new as({map:J,normalMap:Ce,normalScale:new he(.06,.06)});Fe.onBeforeCompile=ze,Ze.onBeforeCompile=ze;let j=new as,te=new Ha({metalness:1}),R=new as({map:ie,normalMap:le,normalScale:new he(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new qe(.32,.32,.34),side:Vn}),Re=new Hi,ee=new Rt(void 0,j),xe=new Rt(void 0,Fe),ae=new Rt(void 0,Ze),Ue=new Rt(new Va(Z_,iC,18,72),te);Ue.rotation.y=Math.PI/2-.7,Re.add(ee,xe,ae,Ue),B.add(Re);let Me=dC(qi),T=new Rt(Me,R);T.frustumCulled=!1,B.add(T);let M=new Hi,F=new Rt(q_(fm),te);F.position.y=wu+qa/2-.004;let q=new Rt(new Va(wu,.0105,14,40),te);M.add(F,q),B.add(M);let V=yC(),$=[],Pe=new L,de=new L,Ee=new Fa($,!1,"centripetal"),Be={width:1,height:1},Q=Y_("portrait",.3),ge={},Ne=fm,Oe=2,we=0,Je=performance.now(),He=0,rt=!0,D=!0,pe=!1,H=!1,Z=null,Se=0,ve=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Ve=()=>{let O=b.current,ue=pm(O.cardColor,[1,1,1]),se=G_,be=Math.round(G_*Q.height/Q.width);(fe.width!==se||fe.height!==be)&&(fe.width=se,fe.height=be,Te.width=se,Te.height=be,et.dispose(),J.dispose()),$_(fe,ce.front,ue,O.imageFit),$_(Te,ce.back||ce.front,ue,O.imageFit),et.needsUpdate=!0,J.needsUpdate=!0,hn()},ht=()=>{let O=b.current;Oe=vC(ke,ce.strap,pm(O.strapColor,[.07,.07,.07])),le.repeat.set(2,2*Oe),ie.dispose(),ie.needsUpdate=!0,hn()},Ft=()=>{let O=b.current,ue=Be.width/Be.height,se=Q.height/Cr(O.size,.15,.9),be=Q.width/.72;se*ue<be&&(se=be/ue);let We=se*ue;K.aspect=ue,K.position.set(0,0,se/2/Math.tan(H_*Math.PI/360)),K.lookAt(0,0,0),K.updateProjectionMatrix(),K.updateMatrixWorld(),De.foilKey.value.set(-2.5,4,6).normalize().transformDirection(K.matrixWorldInverse),De.foilFill.value.set(3,-1,4).normalize().transformDirection(K.matrixWorldInverse),De.foilTop.value.set(.5,4.5,8).normalize().transformDirection(K.matrixWorldInverse);let Ge=.5,gt=document.querySelector(".hero-card-spacer");if(gt&&w){let Xn=gt.getBoundingClientRect(),dt=w.getBoundingClientRect();dt.width>0&&(Ge=(Xn.left+Xn.width/2-dt.left)/dt.width)}else typeof O.anchor=="number"?Ge=O.anchor:B_[O.anchor]!==void 0&&(Ge=B_[O.anchor]);let $e=document.getElementById("lanyard-top-pin");$e&&($e.style.left=`${Ge*100}%`);let _e=(Ge-.5)*We,Vt=se/2+.15,Ht=se/2-se*Ya(.12,.42,Cr(O.strapLength,0,1))+(Q.hangY-Q.height/2);V.anchor.set(_e,Vt,0),SC(V,Q,Vt-Ht),V.nodes[0].copy(V.anchor),V.previous[0].copy(V.anchor)},it=()=>{let O=b.current,ue=`${O.orientation}|${O.cornerRadius}`;if(ue!==ge.layoutKey){Q=Y_(O.orientation,O.cornerRadius);let _e=hC(Q);ee.geometry.dispose(),xe.geometry.dispose(),ae.geometry.dispose(),ee.geometry=_e.body,xe.geometry=_e.face,ae.geometry=_e.face.clone(),xe.position.z=$a/2+un+6e-4,ae.rotation.y=Math.PI,ae.position.z=-($a/2+un+6e-4),Ue.position.set(0,Q.ringY,0),ge.framingKey=""}let se=`${ue}|${O.size}|${O.anchor}|${O.strapLength}|${Be.width}|${Be.height}`;se!==ge.framingKey&&(Ft(),pe?ue!==ge.layoutKey&&vm(V,Q,!1):(vm(V,Q,O.intro&&!ve),pe=!0));let be=`${O.frontImage}|${O.backImage}|${O.strapImage}`;if(be!==ge.imageKey){let _e=++Se;Promise.all([mm(G,O.frontImage),mm(G,O.backImage),mm(G,O.strapImage)]).then(([Vt,Qe,Ht])=>{!D||_e!==Se||(ce.front=Vt,ce.back=Qe,ce.strap=Ht,Ve(),ht())})}let We=`${ue}|${O.cardColor}|${O.imageFit}`;We!==ge.faceKey&&Ve(),O.strapColor!==ge.strapColor&&ht();let Ge=W_[O.finish]||W_.glossy,gt=pm(O.cardColor,[1,1,1]);[Fe,Ze].forEach(_e=>{_e.roughness=Ge.roughness,_e.metalness=Ge.metalness,_e.clearcoat=Ge.clearcoat,_e.clearcoatRoughness=Ge.clearcoatRoughness,_e.anisotropy=Ge.anisotropy}),De.foilStrength.value=Ge.foil,De.foilAspect.value=Q.height/Q.width,j.color.setRGB(gt[0]*.92,gt[1]*.92,gt[2]*.92,tn),j.roughness=Math.min(Ge.roughness,.35),j.metalness=Ge.metalness,j.clearcoat=1,j.clearcoatRoughness=.08;let $e=X_[O.metal]||X_.silver;te.color.set($e.color),te.roughness=$e.roughness,Ne=fm*Cr(O.strapWidth,.4,2),Ne!==ge.strapScale&&(F.geometry.dispose(),F.geometry=q_(Ne)),A.style.touchAction=O.interactive?"pan-y":"auto",ge={layoutKey:ue,framingKey:se,imageKey:be,faceKey:We,strapColor:O.strapColor,strapScale:Ne},hn()},Bt=Array.from({length:qi},()=>new L),Sn=Array.from({length:qi},()=>new L),Za=rC.map(O=>[Math.cos(O),Math.sin(O)]),oi={tangent:new L,toCamera:new L,basis:new mt,up:new L,across:new L,facing:new L,end:new L},vi=()=>{let O=V.nodes[Pt],ue=wu+qa+.05,se=Pt-1;for(;se>0&&V.nodes[se].distanceTo(O)<ue*1.1;)se--;let be=oi.up.subVectors(V.nodes[se],O);be.lengthSq()<1e-8&&be.set(0,1,0).applyQuaternion(V.body.quaternion),be.normalize(),Pe.copy(O).addScaledVector(be,ue),de.copy(O).addScaledVector(be,wu+qa*.35),$.length=0;for(let st=0;st<=se;st++)$.push(V.nodes[st]);$.push(Pe,de),Ee.updateArcLengths();for(let st=0;st<qi;st++)Ee.getPointAt(st/(qi-1),Bt[st]);let We=Ee.getLength(),Ge=1-Pe.distanceTo(de)/Math.max(We,.001),gt=Me.getAttribute("position"),$e=Me.getAttribute("normal"),_e=Me.getAttribute("uv"),Vt=Tu.length,Qe=V.rest*Pt,Ht=Qe/(Ne*Oe),Xn=Ne/Math.pow(Math.max(1,We/Math.max(Qe,.001)),.35),{tangent:dt,toCamera:$i,across:Ke,facing:It}=oi;for(let st=0;st<qi;st++){dt.subVectors(Bt[Math.min(qi-1,st+1)],Bt[Math.max(0,st-1)]),dt.lengthSq()<1e-12&&dt.set(0,-1,0),dt.normalize(),$i.subVectors(K.position,Bt[st]).normalize();let At=Sn[st].crossVectors($i,dt);At.lengthSq()<1e-10&&At.copy(st>0?Sn[st-1]:at.a.set(1,0,0)),At.normalize(),st>0&&At.dot(Sn[st-1])<0&&At.negate();let Yn=-V.twist*Math.pow(Math.min(1,st/(qi-1)/Ge),1.3);It.crossVectors(dt,At),Ke.copy(At).multiplyScalar(Math.cos(Yn)).addScaledVector(It,Math.sin(Yn)),It.crossVectors(dt,Ke);let Ln=Bt[st],ja=(1-st/(qi-1))*Ht;for(let ds=0;ds<Vt;ds++){let Cu=st*Vt+ds,Ru=(Tu[ds]-.5)*Xn,[Pu,Iu]=Za[ds];gt.setXYZ(Cu,Ln.x+Ke.x*Ru,Ln.y+Ke.y*Ru,Ln.z+Ke.z*Ru),$e.setXYZ(Cu,It.x*Pu+Ke.x*Iu,It.y*Pu+Ke.y*Iu,It.z*Pu+Ke.z*Iu),_e.setXY(Cu,Tu[ds],ja)}}oi.end.copy(Ke),gt.needsUpdate=!0,$e.needsUpdate=!0,_e.needsUpdate=!0,Ke.copy(oi.end).addScaledVector(be,-oi.end.dot(be)).normalize(),It.crossVectors(Ke,be).normalize(),oi.basis.makeBasis(Ke,be,It),M.quaternion.setFromRotationMatrix(oi.basis),M.position.copy(O)},hs=()=>{Re.position.copy(V.body.position),Re.quaternion.copy(V.body.quaternion),vi(),x.render(B,K)},Ja=()=>{let O=b.current,ue=40*Cr(O.gravity,0,3),se=Math.max(ue,20),be=Cr(O.elasticity,0,1),We=Cr(O.damping,0,1);return{gravity:ue,hold:se*Ya(2.2,5.5,be),stiffness:se*10*Pt,spring:se*Ya(.1,.4,be)*Pt,bandDamping:se*Ya(.3,.08,be)*Pt,linearDrag:.25*Math.pow(16,We),angularDrag:.5*Math.pow(12,We),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:ve?0:Cr(O.breeze,0,1)}},Ao=O=>{if(we=0,!D)return;let ue=Math.min(1/30,Math.max(1/240,(O-Je)/1e3));Je=O,He+=ue;let se=Ja();MC(V,ue,se,He);let be=V.body;Number.isFinite(be.position.x+be.position.y+be.position.z+be.quaternion.w)||(V.grab=null,vm(V,Q,!1)),hs();let We=V.calm>1.2&&!V.grab&&se.breeze===0;rt&&!We&&(we=requestAnimationFrame(Ao))},hn=()=>{we||!rt||!D||(V.calm=0,Je=performance.now(),we=requestAnimationFrame(Ao))},Rr=new yu,Pr=new he,ai=O=>{let ue=A.getBoundingClientRect();Pr.set((O.clientX-ue.left)/ue.width*2-1,-((O.clientY-ue.top)/ue.height)*2+1),Rr.setFromCamera(Pr,K)},yi=()=>(Re.updateMatrixWorld(),M.updateMatrixWorld(),Rr.intersectObjects([ee,xe,ae,Ue,F,q],!1)[0]||null),_i=O=>{A.style.cursor!==O&&(A.style.cursor=O)},bu=O=>{let ue=V.body,se=at.a.set(0,1,0).applyQuaternion(ue.quaternion),be=V.turn>0?-1:1;if(V.turn===0){let We=at.c.subVectors(O,K.position).normalize();be=at.b.subVectors(O,ue.position).cross(We).dot(se)<0?-1:1}V.turn=V.turn===0?Math.PI*be:0,ue.angular.addScaledVector(se,sC*be)},Ka=O=>{if(!b.current.interactive||O.button>0)return;ai(O);let ue=yi();ue&&(A.style.pointerEvents="auto",V.grab={local:ue.point.clone().sub(V.body.position).applyQuaternion(V.body.quaternion.clone().invert()),rotation:V.body.quaternion.clone(),reach:ue.distance,from:ue.point.clone(),target:ue.point.clone()},Z={x:O.clientX,y:O.clientY,time:performance.now(),point:ue.point.clone()},A.setPointerCapture?.(O.pointerId),_i("grabbing"),O.preventDefault(),hn())},E=O=>{if(b.current.interactive){if(ai(O),V.grab){Z&&Math.hypot(O.clientX-Z.x,O.clientY-Z.y)>6&&(Z=null),Rr.ray.at(V.grab.reach,V.grab.target),hn();return}O.pointerType!=="touch"&&(H=!!yi(),H?(A.style.pointerEvents="auto",_i("grab")):(A.style.pointerEvents="none",_i("")))}},N=O=>{if(!D||!b.current.interactive)return;if(V.grab){ai(O),Z&&Math.hypot(O.clientX-Z.x,O.clientY-Z.y)>6&&(Z=null),Rr.ray.at(V.grab.reach,V.grab.target),hn();return}if(O.pointerType==="touch")return;ai(O),yi()?(H=!0,A.style.pointerEvents="auto",_i("grab")):H&&(H=!1,A.style.pointerEvents="none",_i(""))},z=O=>{if(!V.grab)return;V.grab=null,Z&&O.type==="pointerup"&&performance.now()-Z.time<450&&bu(Z.point),Z=null,A.releasePointerCapture?.(O.pointerId),ai(O),H=!!yi(),H?(A.style.pointerEvents="auto",_i(O.pointerType!=="touch"?"grab":"")):(A.style.pointerEvents="none",_i("")),hn()},k=O=>{!b.current.interactive||O.touches.length!==1||(ai(O.touches[0]),yi()&&(A.style.pointerEvents="auto",O.preventDefault()))},U=O=>{!b.current.interactive||O.touches.length!==1||(ai(O.touches[0]),yi()&&(A.style.pointerEvents="auto"))};A.addEventListener("pointerdown",Ka),A.addEventListener("pointermove",E),A.addEventListener("pointerup",z),A.addEventListener("pointercancel",z),A.addEventListener("lostpointercapture",z),A.addEventListener("touchstart",k,{passive:!1}),window.addEventListener("pointermove",N,{passive:!0}),window.addEventListener("touchstart",U,{passive:!0});let oe=()=>{Be.width=Math.max(1,w.clientWidth),Be.height=Math.max(1,w.clientHeight),x.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),x.setSize(Be.width,Be.height,!1),it(),hs()},ye=new ResizeObserver(oe);ye.observe(w);let Ie=new IntersectionObserver(([O])=>{rt=O.isIntersecting,rt&&hn()});Ie.observe(w);let Le=()=>{document.hidden||hn()};return document.addEventListener("visibilitychange",Le),P.current=it,oe(),()=>{D=!1,cancelAnimationFrame(we),P.current=null,ye.disconnect(),Ie.disconnect(),document.removeEventListener("visibilitychange",Le),window.removeEventListener("pointermove",N),window.removeEventListener("touchstart",U),A.removeEventListener("pointerdown",Ka),A.removeEventListener("pointermove",E),A.removeEventListener("pointerup",z),A.removeEventListener("pointercancel",z),A.removeEventListener("lostpointercapture",z),A.removeEventListener("touchstart",k),[ee,xe,ae,Ue,F,q,T].forEach(O=>O.geometry?.dispose()),[Fe,Ze,j,te,R].forEach(O=>O.dispose()),[et,J,ie,Ce,le].forEach(O=>O.dispose()),X.dispose(),x.dispose(),A.parentNode&&A.parentNode.removeChild(A)}},[]),(0,ex.jsx)("div",{ref:C,className:`lanyard ${_}`.trim(),style:I})},xm=EC;var ix=fs(Xa()),wC={frontImage:"assets/card-front.png",backImage:"assets/card-back.png",strapImage:"assets/strap.png",strapColor:"#1e222d",strapWidth:.7,finish:"glossy",cardColor:"#ffffff",metal:"silver",orientation:"portrait",cornerRadius:.28,size:.52,anchor:"left",strapLength:.5,gravity:1,damping:.5,elasticity:.55,breeze:.45,interactive:!0,intro:!0};function tx(t="lanyard-card",e={}){let n=document.getElementById(t);if(!n){console.warn(`Lanyard mount target #${t} not found.`);return}let i={...wC,...e},r=(0,nx.createRoot)(n);return r.render((0,ix.jsx)(xm,{...i})),r}if(typeof window<"u"){let t=()=>{let e=document.getElementById("lanyard-card");e&&!e.dataset.mounted&&(e.dataset.mounted="true",tx("lanyard-card"))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t(),window.mountLanyard=tx,window.Lanyard=xm}})();
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

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=lanyard.bundle.js.map
