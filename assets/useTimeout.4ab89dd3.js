import{ab as t,aV as a,h as e,aa as n}from"./index.8a947221.js";function o(o,r,s=!1){if(!t(o))throw new Error("handle is not Function!");const{readyRef:i,stop:u,start:f}=function(t){const a=e(!1);let o;function r(){a.value=!1,o&&window.clearTimeout(o)}function s(){r(),o=setTimeout((()=>{a.value=!0}),t)}return s(),n(r),{readyRef:a,stop:r,start:s}}(r);return s?o():a(i,(t=>{t&&o()}),{immediate:!1}),{readyRef:i,stop:u,start:f}}export{o as u};