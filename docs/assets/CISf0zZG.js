import{b4 as X,v as _,a2 as ye,r as B,W as We,j as ee,h as O,a4 as oe,ac as je,aO as He,u as _e,aR as Me,T as pe,s as V,b5 as Ae,aD as Ue,x as m,ai as I,Z as Ce,b6 as le,b7 as Xe,b8 as Ye,b9 as qe,aC as W,G as h,I as Ge,A as te,B as ne,ba as Ke,F as Y,bb as Qe,bc as Ze,b as o,a6 as $,bd as ae,C as Se,K as Je,$ as ue,be as et,bf as ce,f as tt,av as nt,O as at,y as de,M as rt,H as st,z as it,Q as ot,o as lt,S as ut,w as ve,a as ct,af as dt,_ as vt}from"./DOGchhY9.js";const we=["top","bottom"],mt=["start","end","left","right"];function ft(e,t){let[n,a]=e.split(" ");return a||(a=X(we,n)?"start":X(mt,n)?"top":"center"),{side:me(n,t),align:me(a,t)}}function me(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Ht(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Mt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function At(e){return{side:e.align,align:e.side}}function Ut(e){return X(we,e.side)?"y":"x"}const j=_({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function H(e){const t=ye("useRender");t.render=e}function gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=B(),a=B();if(We){const s=new ResizeObserver(r=>{r.length&&(t==="content"?a.value=r[0].contentRect:a.value=r[0].target.getBoundingClientRect())});ee(()=>{s.disconnect()}),O(n,(r,i)=>{i&&(s.unobserve(oe(i)),a.value=void 0),r&&s.observe(oe(r))},{flush:"post"})}return{resizeRef:n,contentRect:je(a)}}const ht=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),A=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:s,group:r,...i}=e,{component:d=r?Me:pe,...u}=typeof a=="object"?a:{};return He(d,_e(typeof a=="string"?{name:s?"":a}:u,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:r}).filter(l=>{let[c,f]=l;return f!==void 0})),i),n)},bt=_({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Xt=V(!1)({name:"VDefaultsProvider",props:bt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:r,root:i,scoped:d}=Ae(e);return Ue(a,{reset:r,root:i,scoped:d,disabled:s}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});function ke(e){return Ce(()=>{const t=[],n={};if(e.value.background)if(le(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Xe(e.value.background)){const a=Ye(e.value.background);if(a.a==null||a.a===1){const s=qe(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(le(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function q(e,t){const n=m(()=>({text:I(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=ke(n);return{textColorClasses:a,textColorStyles:s}}function U(e,t){const n=m(()=>({background:I(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=ke(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const yt=["x-small","small","default","large","x-large"],xe=_({size:{type:[String,Number],default:"default"}},"size");function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return Ce(()=>{let n,a;return X(yt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const re=_({tag:{type:String,default:"div"}},"tag"),_t=_({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Ge,...j(),...xe(),...re({tag:"i"}),...te()},"VIcon"),Yt=V()({name:"VIcon",props:_t(),setup(e,t){let{attrs:n,slots:a}=t;const s=B(),{themeClasses:r}=ne(e),{iconData:i}=Ke(m(()=>s.value||e.icon)),{sizeClasses:d}=Te(e),{textColorClasses:u,textColorStyles:l}=q(Y(e,"color"));return H(()=>{var b,g;const c=(b=a.default)==null?void 0:b.call(a);c&&(s.value=(g=Qe(c).filter(C=>C.type===Ze&&C.children&&typeof C.children=="string")[0])==null?void 0:g.children);const f=!!(n.onClick||n.onClickOnce);return o(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,d.value,u.value,{"v-icon--clickable":f,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},l.value,e.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?e.disabled?-1:0:void 0},{default:()=>[c]})}),{}}});function Ee(e,t){const n=B(),a=$(!1);if(ae){const s=new IntersectionObserver(r=>{a.value=!!r.find(i=>i.isIntersecting)},t);ee(()=>{s.disconnect()}),O(n,(r,i)=>{i&&(s.unobserve(i),a.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const fe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},pt=_({location:String},"location");function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Se();return{locationStyles:m(()=>{if(!e.location)return{};const{side:r,align:i}=ft(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function d(l){return n?n(l):0}const u={};return r!=="center"&&(t?u[fe[r]]=`calc(100% - ${d(r)}px)`:u[r]=0),i!=="center"?t?u[fe[i]]=`calc(100% - ${d(i)}px)`:u[i]=0:(r==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),u})}}const Re=_({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{roundedClasses:m(()=>{const a=I(e)?e.value:e.rounded,s=I(e)?e.value:e.tile,r=[];if(a===!0||a==="")r.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))r.push(`rounded-${i}`);else(s||a===!1)&&r.push("rounded-0");return r})}}const St=_({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...j(),...pt({location:"top"}),...Re(),...re(),...te()},"VProgressLinear"),wt=V()({name:"VProgressLinear",props:St(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Je(e,"modelValue"),{isRtl:s,rtlClasses:r}=Se(),{themeClasses:i}=ne(e),{locationStyles:d}=Ct(e),{textColorClasses:u,textColorStyles:l}=q(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:f}=U(m(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:g}=U(m(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:C,backgroundColorStyles:E}=U(e,"color"),{roundedClasses:z}=ze(e),{intersectionRef:w,isIntersecting:R}=Ee(),k=m(()=>parseFloat(e.max)),p=m(()=>parseFloat(e.height)),T=m(()=>ue(parseFloat(e.bufferValue)/k.value*100,0,100)),N=m(()=>ue(parseFloat(a.value)/k.value*100,0,100)),L=m(()=>s.value!==e.reverse),K=m(()=>e.indeterminate?"fade-transition":"slide-x-transition");function Q(P){if(!w.value)return;const{left:M,right:v,width:y}=w.value.getBoundingClientRect(),x=L.value?y-P.clientX+(v-y):P.clientX-M;a.value=Math.round(x/y*k.value)}return H(()=>o(e.tag,{ref:w,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&R.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},z.value,i.value,r.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(p.value):0,"--v-progress-linear-height":h(p.value),...e.absolute?d.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:N.value,onClick:e.clickable&&Q},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...l.value,[L.value?"left":"right"]:h(-p.value),borderTop:`${h(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(p.value/4)})`,width:h(100-T.value,"%"),"--v-progress-linear-stream-to":h(p.value*(L.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",c.value],style:[f.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),o("div",{class:["v-progress-linear__buffer",b.value],style:[g.value,{opacity:parseFloat(e.bufferOpacity),width:h(T.value,"%")}]},null),o(pe,{name:K.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(P=>o("div",{key:P,class:["v-progress-linear__indeterminate",P,C.value],style:E.value},null))]):o("div",{class:["v-progress-linear__determinate",C.value],style:[E.value,{width:h(N.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:N.value,buffer:T.value})])]})),{}}}),qt=_({loading:[Boolean,String]},"loader");function Gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{loaderClasses:m(()=>({[`${t}--loading`]:e.loading}))}}function Kt(e,t){var a;let{slots:n}=t;return o("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||o(wt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const kt=[null,"default","comfortable","compact"],Qt=_({density:{type:String,default:"default",validator:e=>kt.includes(e)}},"density");function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{densityClasses:m(()=>`${t}--density-${e.density}`)}}const xt=_({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Tt(e){return{dimensionStyles:m(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function Et(e,t){if(!ae)return;const n=t.modifiers||{},a=t.value,{handler:s,options:r}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var f;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const l=(f=e._observe)==null?void 0:f[t.instance.$.uid];if(!l)return;const c=d.some(b=>b.isIntersecting);s&&(!n.quiet||l.init)&&(!n.once||c||l.init)&&s(c,d,u),c&&n.once?Ne(e,t):l.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ne(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Rt={mounted:Et,unmounted:Ne},Z=Symbol("rippleStop"),zt=80;function ge(e,t){e.style.transform=t,e.style.webkitTransform=t}function J(e){return e.constructor.name==="TouchEvent"}function Pe(e){return e.constructor.name==="KeyboardEvent"}const Nt=function(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Pe(e)){const b=t.getBoundingClientRect(),g=J(e)?e.touches[e.touches.length-1]:e;a=g.clientX-b.left,s=g.clientY-b.top}let r=0,i=.3;(f=t._ripple)!=null&&f.circle?(i=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((a-r)**2+(s-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-r*2)/2}px`,u=`${(t.clientHeight-r*2)/2}px`,l=n.center?d:`${a-r}px`,c=n.center?u:`${s-r}px`;return{radius:r,scale:i,x:l,y:c,centerX:d,centerY:u}},G={show(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((g=t==null?void 0:t._ripple)!=null&&g.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:r,scale:i,x:d,y:u,centerX:l,centerY:c}=Nt(e,t,n),f=`${r*2}px`;s.className="v-ripple__animation",s.style.width=f,s.style.height=f,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ge(s,`translate(${d}, ${u}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ge(s,`translate(${l}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=n.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Be(e){return typeof e>"u"||!!e}function D(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Z])){if(e[Z]=!0,J(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Pe(e),n._ripple.class&&(t.class=n._ripple.class),J(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{G.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},zt)}else G.show(e,n,t)}}function he(e){e[Z]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),G.hide(t)}}function Le(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let F=!1;function $e(e){!F&&(e.keyCode===ce.enter||e.keyCode===ce.space)&&(F=!0,D(e))}function Ie(e){F=!1,S(e)}function Ve(e){F&&(F=!1,S(e))}function Oe(e,t,n){const{value:a,modifiers:s}=t,r=Be(a);if(r||G.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=s.center,e._ripple.circle=s.circle,et(a)&&a.class&&(e._ripple.class=a.class),r&&!n){if(s.stop){e.addEventListener("touchstart",he,{passive:!0}),e.addEventListener("mousedown",he);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Le,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",D),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",$e),e.addEventListener("keyup",Ie),e.addEventListener("blur",Ve),e.addEventListener("dragstart",S,{passive:!0})}else!r&&n&&De(e)}function De(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Le),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",$e),e.removeEventListener("keyup",Ie),e.removeEventListener("dragstart",S),e.removeEventListener("blur",Ve)}function Pt(e,t){Oe(e,t,!1)}function Bt(e){delete e._ripple,De(e)}function Lt(e,t){if(t.value===t.oldValue)return;const n=Be(t.oldValue);Oe(e,t,n)}const Jt={mounted:Pt,unmounted:Bt,updated:Lt},en=_({border:[Boolean,Number,String]},"border");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{borderClasses:m(()=>{const a=I(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`border-${r}`);return s})}}const nn=_({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function an(e){return{elevationClasses:m(()=>{const n=I(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const $t=_({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...j(),...xe(),...re({tag:"div"}),...te()},"VProgressCircular"),It=V()({name:"VProgressCircular",props:$t(),setup(e,t){let{slots:n}=t;const a=20,s=2*Math.PI*a,r=B(),{themeClasses:i}=ne(e),{sizeClasses:d,sizeStyles:u}=Te(e),{textColorClasses:l,textColorStyles:c}=q(Y(e,"color")),{textColorClasses:f,textColorStyles:b}=q(Y(e,"bgColor")),{intersectionRef:g,isIntersecting:C}=Ee(),{resizeRef:E,contentRect:z}=gt(),w=m(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),R=m(()=>Number(e.width)),k=m(()=>u.value?Number(e.size):z.value?z.value.width:Math.max(R.value,32)),p=m(()=>a/(1-R.value/k.value)*2),T=m(()=>R.value/k.value*p.value),N=m(()=>h((100-w.value)/100*s));return tt(()=>{g.value=r.value,E.value=r.value}),H(()=>o(e.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,d.value,l.value,e.class],style:[u.value,c.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:w.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${p.value} ${p.value}`},[o("circle",{class:["v-progress-circular__underlay",f.value],style:b.value,fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":N.value},null)]),n.default&&o("div",{class:"v-progress-circular__content"},[n.default({value:w.value})])]})),{}}});function Vt(e){return{aspectStyles:m(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Fe=_({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...j(),...xt()},"VResponsive"),be=V()({name:"VResponsive",props:Fe(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=Vt(e),{dimensionStyles:s}=Tt(e);return H(()=>{var r;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:a.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ot=_({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Fe(),...j(),...Re(),...ht()},"VImg"),Dt=V()({name:"VImg",directives:{intersect:Rt},props:Ot(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:r}=U(Y(e,"color")),{roundedClasses:i}=ze(e),d=ye("VImg"),u=$(""),l=B(),c=$(e.eager?"loading":"idle"),f=$(),b=$(),g=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),C=m(()=>g.value.aspect||f.value/b.value||0);O(()=>e.src,()=>{E(c.value!=="idle")}),O(C,(v,y)=>{!v&&y&&l.value&&p(l.value)}),nt(()=>E());function E(v){if(!(e.eager&&v)&&!(ae&&!v&&!e.eager)){if(c.value="loading",g.value.lazySrc){const y=new Image;y.src=g.value.lazySrc,p(y,null)}g.value.src&&at(()=>{var y;n("loadstart",((y=l.value)==null?void 0:y.currentSrc)||g.value.src),setTimeout(()=>{var x;if(!d.isUnmounted)if((x=l.value)!=null&&x.complete){if(l.value.naturalWidth||w(),c.value==="error")return;C.value||p(l.value,null),c.value==="loading"&&z()}else C.value||p(l.value),R()})})}}function z(){var v;d.isUnmounted||(R(),p(l.value),c.value="loaded",n("load",((v=l.value)==null?void 0:v.currentSrc)||g.value.src))}function w(){var v;d.isUnmounted||(c.value="error",n("error",((v=l.value)==null?void 0:v.currentSrc)||g.value.src))}function R(){const v=l.value;v&&(u.value=v.currentSrc||v.src)}let k=-1;ee(()=>{clearTimeout(k)});function p(v){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const x=()=>{if(clearTimeout(k),d.isUnmounted)return;const{naturalHeight:se,naturalWidth:ie}=v;se||ie?(f.value=ie,b.value=se):!v.complete&&c.value==="loading"&&y!=null?k=window.setTimeout(x,y):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,b.value=1)};x()}const T=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var x;if(!g.value.src||c.value==="idle")return null;const v=o("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:g.value.src,srcset:g.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:z,onError:w},null),y=(x=a.sources)==null?void 0:x.call(a);return o(A,{transition:e.transition,appear:!0},{default:()=>[de(y?o("picture",{class:"v-img__picture"},[y,v]):v,[[it,c.value==="loaded"]])]})},L=()=>o(A,{transition:e.transition},{default:()=>[g.value.lazySrc&&c.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:g.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),K=()=>a.placeholder?o(A,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,Q=()=>a.error?o(A,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,P=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,M=$(!1);{const v=O(C,y=>{y&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{M.value=!0})}),v())})}return H(()=>{const v=be.filterProps(e);return de(o(be,_e({class:["v-img",{"v-img--booting":!M.value},s.value,i.value,e.class],style:[{width:h(e.width==="auto"?f.value:e.width)},r.value,e.style]},v,{aspectRatio:C.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(st,null,[o(N,null,null),o(L,null,null),o(P,null,null),o(K,null,null),o(Q,null,null)]),default:a.default}),[[rt("intersect"),{handler:E,options:e.options},null,{once:!0}]])}),{currentSrc:u,image:l,state:c,naturalWidth:f,naturalHeight:b}}}),Ft={class:"d-flex align-center justify-center fill-height"},Wt=ot({__name:"BaseImg",props:{src:{},alt:{}},emits:["error"],setup(e,{emit:t}){const n=t,a=B(!1);function s(){n("error"),a.value=!0}return(r,i)=>(lt(),ut(Dt,{class:"img",height:"140",src:r.src,alt:r.alt,onError:s},{placeholder:ve(()=>[ct("div",Ft,[o(It,{color:"light-darken-2",indeterminate:""})])]),error:ve(()=>[dt(r.$slots,"error",{},void 0,!0)]),_:3},8,["src","alt"]))}}),rn=vt(Wt,[["__scopeId","data-v-44edbe77"]]);export{xe as A,Ct as B,Te as C,It as D,Dt as E,gt as F,Rt as I,Kt as L,A as M,Jt as R,Xt as V,rn as _,ht as a,qt as b,Re as c,Gt as d,ze as e,U as f,q as g,Ht as h,Mt as i,At as j,Ut as k,xt as l,j as m,Tt as n,Yt as o,ft as p,ke as q,en as r,Qt as s,nn as t,H as u,re as v,Zt as w,tn as x,an as y,pt as z};