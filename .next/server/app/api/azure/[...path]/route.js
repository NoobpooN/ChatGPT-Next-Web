(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{2067:e=>{"use strict";e.exports=require("node:async_hooks")},6195:e=>{"use strict";e.exports=require("node:buffer")},4850:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ComponentMod:()=>U,default:()=>P});var a={};r.r(a),r.d(a,{GET:()=>f,POST:()=>m,preferredRegion:()=>z,runtime:()=>y});var o={};r.r(o),r.d(o,{headerHooks:()=>I,originalPathname:()=>T,patchFetch:()=>k,requestAsyncStorage:()=>A,routeModule:()=>O,serverHooks:()=>w,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>b});var n=r(7875),s=r(8381),i=r(2251),l=r(9845),u=r(7736),p=r(1480),d=r(572),c=r(5577),h=r(6718);async function g(e,{params:t}){if(console.log("[Azure Route] params ",t),"OPTIONS"===e.method)return d.xk.json({body:"OK"},{status:200});t.path.join("/");let r=(0,c.I)(e,u.k8.GPT);if(r.error)return d.xk.json(r,{status:401});try{return await (0,h.L)(e)}catch(e){return console.error("[Azure] ",e),d.xk.json((0,p.B)(e))}}let f=g,m=g,y="edge",z=["arn1","bom1","cdg1","cle1","cpt1","dub1","fra1","gru1","hnd1","iad1","icn1","kix1","lhr1","pdx1","sfo1","sin1","syd1"],O=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/azure/[...path]/route",pathname:"/api/azure/[...path]",filename:"route",bundlePath:"app/api/azure/[...path]/route"},resolvedPagePath:"/Volumes/D/github/ChatGPT-Next-Web/app/api/azure/[...path]/route.ts",nextConfigOutput:"standalone",userland:a}),{requestAsyncStorage:A,staticGenerationAsyncStorage:x,serverHooks:w,headerHooks:I,staticGenerationBailout:b}=O,T="/api/azure/[...path]/route";function k(){return(0,l.XH)({serverHooks:w,staticGenerationAsyncStorage:x})}let U=o,P=n.a.wrap(O)},6718:(e,t,r)=>{"use strict";r.d(t,{L:()=>u});var a=r(572),o=r(9579),n=r(7736),s=r(413),i=r(752);let l=(0,o.g)();async function u(e){let t=new AbortController,r=e.nextUrl.pathname.includes("azure/deployments");var o,u="";r?(o=e.headers.get("Authorization")?.trim().replaceAll("Bearer ","").trim()??"",u="api-key"):(o=e.headers.get("Authorization")??"",u="Authorization");let p=`${e.nextUrl.pathname}${e.nextUrl.search}`.replaceAll("/api/openai/",""),d=(r?l.azureUrl:l.baseUrl)||n.Bi;d.startsWith("http")||(d=`https://${d}`),d.endsWith("/")&&(d=d.slice(0,-1)),console.log("[Proxy] ",p),console.log("[Base Url]",d);let c=setTimeout(()=>{t.abort()},6e5);if(r){let t=e?.nextUrl?.searchParams?.get("api-version")||l.azureApiVersion;if(d=d.split("/deployments").shift(),p=`${e.nextUrl.pathname.replaceAll("/api/azure/","")}?api-version=${t}`,l.customModels&&l.azureUrl){let e=p.split("/")[1],t="";l.customModels.split(",").filter(t=>!!t&&!t.startsWith("-")&&t.includes(e)).forEach(e=>{let[r,a]=e.split("="),[o,n]=r.split("@");if("azure"===n&&!a){let[e,r]=(l?.azureUrl??"").split("deployments/");r&&(t=r)}}),t&&(console.log("[Replace with DeployId",t),p=p.replaceAll(e,t))}}let h=(0,i.z)(`${d}/${p}`);console.log("fetchUrl",h);let g={headers:{"Content-Type":"application/json","Cache-Control":"no-store",[u]:o,...l.openaiOrgId&&{"OpenAI-Organization":l.openaiOrgId}},method:e.method,body:e.body,redirect:"manual",duplex:"half",signal:t.signal};if(l.customModels&&e.body)try{let t=await e.text();g.body=t;let r=JSON.parse(t);if((0,s.pw)(l.customModels,r?.model,n.UT.OpenAI)||(0,s.pw)(l.customModels,r?.model,n.UT.Azure))return a.xk.json({error:!0,message:`you are not allowed to use ${r?.model} model`},{status:403})}catch(e){console.error("[OpenAI] gpt4 filter",e)}try{let e=await fetch(h,g),t=e.headers.get("OpenAI-Organization");l.openaiOrgId&&""!==l.openaiOrgId.trim()?console.log("[Org ID]",t):console.log("[Org ID] is not set up.");let r=new Headers(e.headers);return r.delete("www-authenticate"),r.set("X-Accel-Buffering","no"),l.openaiOrgId&&""!==l.openaiOrgId.trim()||r.delete("OpenAI-Organization"),r.delete("content-encoding"),new Response(e.body,{status:e.status,statusText:e.statusText,headers:r})}finally{clearTimeout(c)}}},752:(e,t,r)=>{"use strict";function a(e){let t=e.split("/");if("gateway.ai.cloudflare.com"==t[2]){if("azure-openai"==t[6])return t.slice(0,8).concat(t.slice(-3)).join("/");if("openai"==t[6]||"anthropic"==t[6])return t.slice(0,7).concat(t.slice(-2)).join("/")}return e}r.d(t,{z:()=>a})}},e=>{var t=t=>e(e.s=t);e.O(0,[297,45,744],()=>t(4850));var r=e.O();(_ENTRIES="undefined"==typeof _ENTRIES?{}:_ENTRIES)["middleware_app/api/azure/[...path]/route"]=r}]);
//# sourceMappingURL=route.js.map