if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-6c6482ed"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"cljs-out/prod-main.js",revision:"a3a6557876af7df9f538eacb1b75efbd"},{url:"images/logoimagem-consultoria.png",revision:"f5437d12a5a987aed21f48f8ccee58f2"},{url:"images/manifest/android-icon-192x192.png",revision:"754fc9f127cc623083e4433394d3b803"},{url:"images/manifest/icon-512x512.png",revision:"754fc9f127cc623083e4433394d3b803"},{url:"index.html",revision:"ee3fe613ceb188dbf8b5bd37e555f094"},{url:"manifest.json",revision:"990390e36d240905fec1d726b3cdbb48"}],{})}));
//# sourceMappingURL=sw.js.map
