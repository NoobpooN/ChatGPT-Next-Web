(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6303],{2901:function(e,t,r){"use strict";r.r(t),r.d(t,{Artifacts:function(){return S},ArtifactsShareButton:function(){return b},HTMLPreview:function(){return C}});var n=r(57437),o=r(2265),s=r(59208),i=r(35499),a=r(84065),l=r(12637),c=r(84193),u=r(72495),d=r(59566),f=r(49111),h=r(98829),m=r(13894),x=r(65878),v=r(92944),g=r(75591),p=r(42188),j=r(99164),w=r.n(j);let C=(0,o.forwardRef)(function(e,t){let r=(0,o.useRef)(null),[s,i]=(0,o.useState)((0,a.x0)()),[l,c]=(0,o.useState)(600),[u,d]=(0,o.useState)("");(0,o.useEffect)(()=>{let e=e=>{let{id:t,height:r,title:n}=e.data;d(n),t==s&&c(r)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[s]),(0,o.useImperativeHandle)(t,()=>({reload:()=>{i((0,a.x0)())}}));let f=(0,o.useMemo)(()=>{if(!e.autoHeight)return e.height||600;if("string"==typeof e.height)return e.height;let t=e.height||600;return l+40>t?t:l+40},[e.autoHeight,e.height,l]),h=(0,o.useMemo)(()=>{let t='<script>window.addEventListener("DOMContentLoaded", () => new ResizeObserver((entries) => parent.postMessage({id: \''.concat(s,"', height: entries[0].target.clientHeight}, '*')).observe(document.body))</script>");return e.code.includes("<!DOCTYPE html>")&&e.code.replace("<!DOCTYPE html>","<!DOCTYPE html>"+t),t+e.code},[e.code,s]);return(0,n.jsx)("iframe",{className:w()["artifacts-iframe"],ref:r,sandbox:"allow-forms allow-modals allow-scripts",style:{height:f},srcDoc:h,onLoad:()=>{(null==e?void 0:e.onLoad)&&e.onLoad(u)}},s)});function b(e){let{getCode:t,id:r,style:s,fileName:a}=e,[d,h]=(0,o.useState)(!1),[p,j]=(0,o.useState)(r),[w,C]=(0,o.useState)(!1),b=(0,o.useMemo)(()=>[location.origin,"#",g.y$.Artifacts,"/",p].join(""),[p]),S=e=>r?Promise.resolve({id:r}):fetch(g.L.Artifacts,{method:"POST",body:e}).then(e=>e.json()).then(e=>{let{id:t}=e;if(t)return{id:t};throw Error()}).catch(e=>{(0,x.CF)(m.ZP.Export.Artifacts.Error)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"window-action-button",style:s,children:(0,n.jsx)(i.h,{icon:d?(0,n.jsx)(f.Z,{}):(0,n.jsx)(l.Z,{}),bordered:!0,title:m.ZP.Export.Artifacts.Title,onClick:()=>{d||(h(!0),S(t()).then(e=>{(null==e?void 0:e.id)&&(C(!0),j(null==e?void 0:e.id))}).finally(()=>h(!1)))}})}),w&&(0,n.jsx)("div",{className:"modal-mask",children:(0,n.jsx)(x.u_,{title:m.ZP.Export.Artifacts.Title,onClose:()=>C(!1),actions:[(0,n.jsx)(i.h,{icon:(0,n.jsx)(u.Z,{}),bordered:!0,text:m.ZP.Export.Download,onClick:()=>{(0,v.CP)(t(),"".concat(a||p,".html")).then(()=>C(!1))}},"download"),(0,n.jsx)(i.h,{icon:(0,n.jsx)(c.Z,{}),bordered:!0,text:m.ZP.Chat.Actions.Copy,onClick:()=>{(0,v.vQ)(b).then(()=>C(!1))}},"copy")],children:(0,n.jsx)("div",{children:(0,n.jsx)("a",{target:"_blank",href:b,children:b})})})})]})}function S(){let{id:e}=(0,s.UO)(),[t,r]=(0,o.useState)(""),[a,l]=(0,o.useState)(!0),[c,u]=(0,o.useState)(""),f=(0,o.useRef)(null);return(0,o.useEffect)(()=>{e&&fetch("".concat(g.L.Artifacts,"?id=").concat(e)).then(e=>{if(e.status>300)throw Error("can not get content");return e}).then(e=>e.text()).then(r).catch(e=>{(0,x.CF)(m.ZP.Export.Artifacts.Error)})},[e]),(0,n.jsxs)("div",{className:w().artifacts,children:[(0,n.jsxs)("div",{className:w()["artifacts-header"],children:[(0,n.jsx)("a",{href:g.Bv,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(i.h,{bordered:!0,icon:(0,n.jsx)(d.Z,{}),shadow:!0})}),(0,n.jsx)(i.h,{bordered:!0,style:{marginLeft:20},icon:(0,n.jsx)(h.Z,{}),shadow:!0,onClick:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.reload()}}),(0,n.jsx)("div",{className:w()["artifacts-title"],children:"NextChat Artifacts"}),(0,n.jsx)(b,{id:e,getCode:()=>t,fileName:c})]}),(0,n.jsxs)("div",{className:w()["artifacts-content"],children:[a&&(0,n.jsx)(p.Loading,{}),t&&(0,n.jsx)(C,{code:t,ref:f,autoHeight:!1,height:"100%",onLoad:e=>{u(e),l(!1)}})]})]})}},42896:function(e,t,r){"use strict";r.r(t),r.d(t,{Markdown:function(){return Z},MarkdownContent:function(){return k},Mermaid:function(){return S},PreCode:function(){return y}});var n=r(57437),o=r(28993);r(68128);var s=r(28105),i=r(32794),a=r(69418),l=r(11303),c=r(49264),u=r(2265),d=r(92944),f=r(51893),h=r(13894),m=r(24053),x=r(98829),v=r(38648),g=r(65878),p=r(2901),j=r(44922),w=r(35499),C=r(3289),b=r(75504);function S(e){let t=(0,u.useRef)(null),[r,o]=(0,u.useState)(!1);return((0,u.useEffect)(()=>{e.code&&t.current&&f.L.run({nodes:[t.current],suppressErrors:!0}).catch(e=>{o(!0),console.error("[Mermaid] ",e.message)})},[e.code]),r)?null:(0,n.jsx)("div",{className:(0,b.Z)("no-dark","mermaid"),style:{cursor:"pointer",overflow:"auto"},ref:t,onClick:()=>(function(){var e;let r=null===(e=t.current)||void 0===e?void 0:e.querySelector("svg");if(!r)return;let n=new XMLSerializer().serializeToString(r),o=new Blob([n],{type:"image/svg+xml"});(0,g.vi)(URL.createObjectURL(o))})(),children:e.code})}function y(e){var t;let r=(0,u.useRef)(null),o=(0,u.useRef)(null),[s,i]=(0,u.useState)(""),[a,l]=(0,u.useState)(""),{height:c}=(0,d.iP)(),f=(0,j.aK)().currentSession(),h=(0,v.y1)(()=>{var e;if(!r.current)return;let t=r.current.querySelector("code.language-mermaid");t&&i(t.innerText);let n=r.current.querySelector("code.language-html"),o=null===(e=r.current.querySelector("code"))||void 0===e?void 0:e.innerText;n?l(n.innerText):((null==o?void 0:o.startsWith("<!DOCTYPE"))||(null==o?void 0:o.startsWith("<svg"))||(null==o?void 0:o.startsWith("<?xml")))&&l(o)},600),m=(0,C.MG)(),b=(null===(t=f.mask)||void 0===t?void 0:t.enableArtifacts)!==!1&&m.enableArtifacts;return(0,u.useEffect)(()=>{if(r.current){let e=r.current.querySelectorAll("code"),t=["","md","markdown","text","txt","plaintext","tex","latex"];e.forEach(e=>{let r=e.className.match(/language-(\w+)/),n=r?r[1]:"";t.includes(n)&&(e.style.whiteSpace="pre-wrap")}),setTimeout(h,1)}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("pre",{ref:r,children:[(0,n.jsx)("span",{className:"copy-code-button",onClick:()=>{if(r.current){var e,t;(0,d.vQ)(null!==(t=null===(e=r.current.querySelector("code"))||void 0===e?void 0:e.innerText)&&void 0!==t?t:"")}}}),e.children]}),s.length>0&&(0,n.jsx)(S,{code:s},s),a.length>0&&b&&(0,n.jsxs)(g.IT,{className:"no-dark html",right:70,children:[(0,n.jsx)(p.ArtifactsShareButton,{style:{position:"absolute",right:20,top:10},getCode:()=>a}),(0,n.jsx)(w.h,{style:{position:"absolute",right:120,top:10},bordered:!0,icon:(0,n.jsx)(x.Z,{}),shadow:!0,onClick:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.reload()}}),(0,n.jsx)(p.HTMLPreview,{ref:o,code:a,autoHeight:!document.fullscreenElement,height:document.fullscreenElement?c:600})]})]})}function E(e){var t;let r=(0,j.aK)().currentSession(),o=(0,C.MG)(),s=(null===(t=r.mask)||void 0===t?void 0:t.enableCodeFold)!==!1&&o.enableCodeFold,i=(0,u.useRef)(null),[a,l]=(0,u.useState)(!0),[c,d]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{i.current&&(d(i.current.scrollHeight>400),i.current.scrollTop=i.current.scrollHeight)},[e.children]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("code",{className:(0,b.Z)(null==e?void 0:e.className),ref:i,style:{maxHeight:s&&a?"400px":"none",overflowY:"hidden"},children:e.children}),c&&s&&a?(0,n.jsx)("div",{className:(0,b.Z)("show-hide-button",{collapsed:a,expanded:!a}),children:(0,n.jsx)("button",{onClick:()=>{l(e=>!e)},children:h.ZP.NewChat.More})}):null]})}let k=u.memo(function(e){let t=(0,u.useMemo)(()=>{var t;return(t=e.content.replace(/(```[\s\S]*?```|`.*?`)|\\\[([\s\S]*?[^\\])\\\]|\\\((.*?)\\\)/g,(e,t,r,n)=>t||(r?"$$".concat(r,"$$"):n?"$".concat(n,"$"):e))).includes("```")?t:t.replace(/([`]*?)(\w*?)([\n\r]*?)(<!DOCTYPE html>)/g,(e,t,r,n,o)=>t?e:"\n```html\n"+o).replace(/(<\/body>)([\r\n\s]*?)(<\/html>)([\n\r]*)([`]*)([\n\r]*?)/g,(e,t,r,n,o,s)=>s?e:t+r+n+"\n```\n")},[e.content]);return(0,n.jsx)(o.D,{remarkPlugins:[s.Z,l.Z,i.Z],rehypePlugins:[a.Z,[c.Z,{detect:!1,ignoreMissing:!0}]],components:{pre:y,code:E,p:e=>(0,n.jsx)("p",{...e,dir:"auto"}),a:e=>{var t;let r=e.href||"";if(/\.(aac|mp3|opus|wav)$/.test(r))return(0,n.jsx)("figure",{children:(0,n.jsx)("audio",{controls:!0,src:r})});if(/\.(3gp|3g2|webm|ogv|mpeg|mp4|avi)$/.test(r))return(0,n.jsx)("video",{controls:!0,width:"99.9%",children:(0,n.jsx)("source",{src:r})});let o=/^\/#/i.test(r)?"_self":null!==(t=e.target)&&void 0!==t?t:"_blank";return(0,n.jsx)("a",{...e,target:o})}},children:t})});function Z(e){var t;let r=(0,u.useRef)(null);return(0,n.jsx)("div",{className:"markdown-body",style:{fontSize:"".concat(null!==(t=e.fontSize)&&void 0!==t?t:14,"px"),fontFamily:e.fontFamily||"inherit"},ref:r,onContextMenu:e.onContextMenu,onDoubleClickCapture:e.onDoubleClickCapture,dir:"auto",children:e.loading?(0,n.jsx)(m.Z,{}):(0,n.jsx)(k,{content:e.content})})}},99164:function(e){e.exports={artifacts:"artifacts_artifacts__J06vB","artifacts-header":"artifacts_artifacts-header__s7Cdi","artifacts-title":"artifacts_artifacts-title__UXZs9","artifacts-content":"artifacts_artifacts-content__3pFba","artifacts-iframe":"artifacts_artifacts-iframe__mjsdx"}}}]);