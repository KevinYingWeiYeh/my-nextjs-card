(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3756:function(e,r,t){Promise.resolve().then(t.bind(t,3755))},3755:function(e,r,t){"use strict";t.d(r,{Avatar:function(){return h},AvatarImage:function(){return y}});var n=t(2265),o=t(7437),l=globalThis?.document?n.useLayoutEffect:()=>{};function i(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}t(4887);var u=n.forwardRef((e,r)=>{let{children:t,...l}=e,i=n.Children.toArray(t),u=i.find(f);if(u){let e=u.props.children,t=i.map(r=>r!==u?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,o.jsx)(a,{...l,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,o.jsx)(a,{...l,ref:r,children:t})});u.displayName="Slot";var a=n.forwardRef((e,r)=>{let{children:t,...o}=e;if(n.isValidElement(t)){let e,l;let u=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n];/^on[A-Z]/.test(n)?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:r?function(...e){return r=>{let t=!1,n=e.map(e=>{let n=i(e,r);return t||"function"!=typeof n||(t=!0),n});if(t)return()=>{for(let r=0;r<n.length;r++){let t=n[r];"function"==typeof t?t():i(e[r],null)}}}}(r,u):u})}return n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";var s=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function f(e){return n.isValidElement(e)&&e.type===s}var c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...l}=e,i=n?u:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(i,{...l,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),d="Avatar",[p,m]=function(e,r=[]){let t=[],l=()=>{let r=t.map(e=>n.createContext(e));return function(t){let o=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return l.scopeName=e,[function(r,l){let i=n.createContext(l),u=t.length;t=[...t,l];let a=r=>{let{scope:t,children:l,...a}=r,s=t?.[e]?.[u]||i,f=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:f,children:l})};return a.displayName=r+"Provider",[a,function(t,o){let a=o?.[e]?.[u]||i,s=n.useContext(a);if(s)return s;if(void 0!==l)return l;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e)[`__scope${n}`];return{...r,...o}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(l,...r)]}(d),[g,v]=p(d),h=n.forwardRef((e,r)=>{let{__scopeAvatar:t,...l}=e,[i,u]=n.useState("idle");return(0,o.jsx)(g,{scope:t,imageLoadingStatus:i,onImageLoadingStatusChange:u,children:(0,o.jsx)(c.span,{...l,ref:r})})});h.displayName=d;var w="AvatarImage",y=n.forwardRef((e,r)=>{let{__scopeAvatar:t,src:i,onLoadingStatusChange:u=()=>{},...a}=e,s=v(w,t),f=function(e,r){let[t,o]=n.useState("idle");return l(()=>{if(!e){o("error");return}let t=!0,n=new window.Image,l=e=>()=>{t&&o(e)};return o("loading"),n.onload=l("loaded"),n.onerror=l("error"),n.src=e,r&&(n.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(i,a.referrerPolicy),d=function(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}(e=>{u(e),s.onImageLoadingStatusChange(e)});return l(()=>{"idle"!==f&&d(f)},[f,d]),"loaded"===f?(0,o.jsx)(c.img,{...a,ref:r,src:i}):null});y.displayName=w;var N="AvatarFallback";n.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:l,...i}=e,u=v(N,t),[a,s]=n.useState(void 0===l);return n.useEffect(()=>{if(void 0!==l){let e=window.setTimeout(()=>s(!0),l);return()=>window.clearTimeout(e)}},[l]),a&&"loaded"!==u.imageLoadingStatus?(0,o.jsx)(c.span,{...i,ref:r}):null}).displayName=N}},function(e){e.O(0,[971,117,744],function(){return e(e.s=3756)}),_N_E=e.O()}]);