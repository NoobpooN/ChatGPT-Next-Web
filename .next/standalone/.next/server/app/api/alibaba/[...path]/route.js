(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{2067:e=>{"use strict";e.exports=require("node:async_hooks")},6195:e=>{"use strict";e.exports=require("node:buffer")},6354:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ComponentMod:()=>N,default:()=>v});var o={};a.r(o),a.d(o,{GET:()=>g,POST:()=>y,preferredRegion:()=>w,runtime:()=>x});var r={};a.r(r),a.d(r,{headerHooks:()=>P,originalPathname:()=>O,patchFetch:()=>R,requestAsyncStorage:()=>S,routeModule:()=>A,serverHooks:()=>E,staticGenerationAsyncStorage:()=>T,staticGenerationBailout:()=>_});var s=a(7875),n=a(8381),l=a(2251),i=a(9845),u=a(9579),d=a(7736),p=a(1480),c=a(572),h=a(5577),b=a(413);let f=(0,u.g)();async function m(e,{params:t}){if(console.log("[Alibaba Route] params ",t),"OPTIONS"===e.method)return c.xk.json({body:"OK"},{status:200});let a=(0,h.I)(e,d.k8.Qwen);if(a.error)return c.xk.json(a,{status:401});try{return await k(e)}catch(e){return console.error("[Alibaba] ",e),c.xk.json((0,p.B)(e))}}let g=m,y=m,x="edge",w=["arn1","bom1","cdg1","cle1","cpt1","dub1","fra1","gru1","hnd1","iad1","icn1","kix1","lhr1","pdx1","sfo1","sin1","syd1"];async function k(e){let t=new AbortController,a=`${e.nextUrl.pathname}`.replaceAll(d.L.Alibaba,""),o=f.alibabaUrl||d.x5;o.startsWith("http")||(o=`https://${o}`),o.endsWith("/")&&(o=o.slice(0,-1)),console.log("[Proxy] ",a),console.log("[Base Url]",o);let r=setTimeout(()=>{t.abort()},6e5),s=`${o}${a}`,n={headers:{"Content-Type":"application/json",Authorization:e.headers.get("Authorization")??"","X-DashScope-SSE":e.headers.get("X-DashScope-SSE")??"disable"},method:e.method,body:e.body,redirect:"manual",duplex:"half",signal:t.signal};if(f.customModels&&e.body)try{let t=await e.text();n.body=t;let a=JSON.parse(t);if((0,b.pw)(f.customModels,a?.model,d.UT.Alibaba))return c.xk.json({error:!0,message:`you are not allowed to use ${a?.model} model`},{status:403})}catch(e){console.error("[Alibaba] filter",e)}try{let e=await fetch(s,n),t=new Headers(e.headers);return t.delete("www-authenticate"),t.set("X-Accel-Buffering","no"),new Response(e.body,{status:e.status,statusText:e.statusText,headers:t})}finally{clearTimeout(r)}}let A=new n.AppRouteRouteModule({definition:{kind:l.x.APP_ROUTE,page:"/api/alibaba/[...path]/route",pathname:"/api/alibaba/[...path]",filename:"route",bundlePath:"app/api/alibaba/[...path]/route"},resolvedPagePath:"/Volumes/D/github/ChatGPT-Next-Web/app/api/alibaba/[...path]/route.ts",nextConfigOutput:"standalone",userland:o}),{requestAsyncStorage:S,staticGenerationAsyncStorage:T,serverHooks:E,headerHooks:P,staticGenerationBailout:_}=A,O="/api/alibaba/[...path]/route";function R(){return(0,i.XH)({serverHooks:E,staticGenerationAsyncStorage:T})}let N=r,v=s.a.wrap(A)}},e=>{var t=t=>e(e.s=t);e.O(0,[297,45,744],()=>t(6354));var a=e.O();(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_app/api/alibaba/[...path]/route"]=a}]);
//# sourceMappingURL=route.js.map