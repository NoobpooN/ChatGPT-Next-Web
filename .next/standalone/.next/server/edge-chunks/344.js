"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[344],{

/***/ 5577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9579);
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5045);
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7736);



function getIP(req) {
    let ip = req.ip ?? req.headers.get("x-real-ip");
    const forwardedFor = req.headers.get("x-forwarded-for");
    if (!ip && forwardedFor) {
        ip = forwardedFor.split(",").at(0) ?? "";
    }
    return ip;
}
function parseApiKey(bearToken) {
    const token = bearToken.trim().replaceAll("Bearer ", "").trim();
    const isApiKey = !token.startsWith(_constant__WEBPACK_IMPORTED_MODULE_2__/* .ACCESS_CODE_PREFIX */ .TW);
    return {
        accessCode: isApiKey ? "" : token.slice(_constant__WEBPACK_IMPORTED_MODULE_2__/* .ACCESS_CODE_PREFIX */ .TW.length),
        apiKey: isApiKey ? token : ""
    };
}
function auth(req, modelProvider) {
    const authToken = req.headers.get("Authorization") ?? "";
    // check if it is openai api key or user token
    const { accessCode, apiKey } = parseApiKey(authToken);
    const hashedCode = spark_md5__WEBPACK_IMPORTED_MODULE_1___default().hash(accessCode ?? "").trim();
    const serverConfig = (0,_config_server__WEBPACK_IMPORTED_MODULE_0__/* .getServerSideConfig */ .g)();
    console.log("[Auth] allowed hashed codes: ", [
        ...serverConfig.codes
    ]);
    console.log("[Auth] got access code:", accessCode);
    console.log("[Auth] hashed access code:", hashedCode);
    console.log("[User IP] ", getIP(req));
    console.log("[Time] ", new Date().toLocaleString());
    if (serverConfig.needCode && !serverConfig.codes.has(hashedCode) && !apiKey) {
        return {
            error: true,
            msg: !accessCode ? "empty access code" : "wrong access code"
        };
    }
    if (serverConfig.hideUserApiKey && !!apiKey) {
        return {
            error: true,
            msg: "you are not allowed to access with your own api key"
        };
    }
    // if user does not provide an api key, inject system api key
    if (!apiKey) {
        const serverConfig = (0,_config_server__WEBPACK_IMPORTED_MODULE_0__/* .getServerSideConfig */ .g)();
        // const systemApiKey =
        //   modelProvider === ModelProvider.GeminiPro
        //     ? serverConfig.googleApiKey
        //     : serverConfig.isAzure
        //     ? serverConfig.azureApiKey
        //     : serverConfig.apiKey;
        let systemApiKey;
        switch(modelProvider){
            case _constant__WEBPACK_IMPORTED_MODULE_2__/* .ModelProvider */ .k8.GeminiPro:
                systemApiKey = serverConfig.googleApiKey;
                break;
            case _constant__WEBPACK_IMPORTED_MODULE_2__/* .ModelProvider */ .k8.Claude:
                systemApiKey = serverConfig.anthropicApiKey;
                break;
            case _constant__WEBPACK_IMPORTED_MODULE_2__/* .ModelProvider */ .k8.GPT:
            default:
                if (req.nextUrl.pathname.includes("azure/deployments")) {
                    systemApiKey = serverConfig.azureApiKey;
                } else {
                    systemApiKey = serverConfig.apiKey;
                }
        }
        if (systemApiKey) {
            console.log("[Auth] use system api key");
            req.headers.set("Authorization", `Bearer ${systemApiKey}`);
        } else {
            console.log("[Auth] admin did not provide an api key");
        }
    } else {
        console.log("[Auth] use user api key");
    }
    return {
        error: false
    };
}


/***/ }),

/***/ 6718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ requestOpenai)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);
/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9579);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7736);
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(413);




const serverConfig = (0,_config_server__WEBPACK_IMPORTED_MODULE_1__/* .getServerSideConfig */ .g)();
async function requestOpenai(req) {
    const controller = new AbortController();
    const isAzure = req.nextUrl.pathname.includes("azure/deployments");
    var authValue, authHeaderName = "";
    if (isAzure) {
        authValue = req.headers.get("Authorization")?.trim().replaceAll("Bearer ", "").trim() ?? "";
        authHeaderName = "api-key";
    } else {
        authValue = req.headers.get("Authorization") ?? "";
        authHeaderName = "Authorization";
    }
    let path = `${req.nextUrl.pathname}${req.nextUrl.search}`.replaceAll("/api/openai/", "");
    let baseUrl = serverConfig.azureUrl || serverConfig.baseUrl || _constant__WEBPACK_IMPORTED_MODULE_2__/* .OPENAI_BASE_URL */ .Bi;
    if (!baseUrl.startsWith("http")) {
        baseUrl = `https://${baseUrl}`;
    }
    if (baseUrl.endsWith("/")) {
        baseUrl = baseUrl.slice(0, -1);
    }
    console.log("[Proxy] ", path);
    console.log("[Base Url]", baseUrl);
    const timeoutId = setTimeout(()=>{
        controller.abort();
    }, 10 * 60 * 1000);
    if (isAzure) {
        const azureApiVersion = req?.nextUrl?.searchParams?.get("api-version") || serverConfig.azureApiVersion;
        baseUrl = baseUrl.split("/deployments").shift();
        path = `${req.nextUrl.pathname.replaceAll("/api/azure/", "")}?api-version=${azureApiVersion}`;
    }
    const fetchUrl = `${baseUrl}/${path}`;
    const fetchOptions = {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            [authHeaderName]: authValue,
            ...serverConfig.openaiOrgId && {
                "OpenAI-Organization": serverConfig.openaiOrgId
            }
        },
        method: req.method,
        body: req.body,
        // to fix #2485: https://stackoverflow.com/questions/55920957/cloudflare-worker-typeerror-one-time-use-body
        redirect: "manual",
        // @ts-ignore
        duplex: "half",
        signal: controller.signal
    };
    // #1815 try to refuse gpt4 request
    if (serverConfig.customModels && req.body) {
        try {
            const clonedBody = await req.text();
            fetchOptions.body = clonedBody;
            const jsonBody = JSON.parse(clonedBody);
            // not undefined and is false
            if ((0,_utils_model__WEBPACK_IMPORTED_MODULE_3__/* .isModelAvailableInServer */ .pw)(serverConfig.customModels, jsonBody?.model, _constant__WEBPACK_IMPORTED_MODULE_2__/* .ServiceProvider */ .UT.OpenAI) || (0,_utils_model__WEBPACK_IMPORTED_MODULE_3__/* .isModelAvailableInServer */ .pw)(serverConfig.customModels, jsonBody?.model, _constant__WEBPACK_IMPORTED_MODULE_2__/* .ServiceProvider */ .UT.Azure)) {
                return next_server__WEBPACK_IMPORTED_MODULE_0__/* .NextResponse */ .xk.json({
                    error: true,
                    message: `you are not allowed to use ${jsonBody?.model} model`
                }, {
                    status: 403
                });
            }
        } catch (e) {
            console.error("[OpenAI] gpt4 filter", e);
        }
    }
    try {
        const res = await fetch(fetchUrl, fetchOptions);
        // Extract the OpenAI-Organization header from the response
        const openaiOrganizationHeader = res.headers.get("OpenAI-Organization");
        // Check if serverConfig.openaiOrgId is defined and not an empty string
        if (serverConfig.openaiOrgId && serverConfig.openaiOrgId.trim() !== "") {
            // If openaiOrganizationHeader is present, log it; otherwise, log that the header is not present
            console.log("[Org ID]", openaiOrganizationHeader);
        } else {
            console.log("[Org ID] is not set up.");
        }
        // to prevent browser prompt for credentials
        const newHeaders = new Headers(res.headers);
        newHeaders.delete("www-authenticate");
        // to disable nginx buffering
        newHeaders.set("X-Accel-Buffering", "no");
        // Conditionally delete the OpenAI-Organization header from the response if [Org ID] is undefined or empty (not setup in ENV)
        // Also, this is to prevent the header from being sent to the client
        if (!serverConfig.openaiOrgId || serverConfig.openaiOrgId.trim() === "") {
            newHeaders.delete("OpenAI-Organization");
        }
        // The latest version of the OpenAI API forced the content-encoding to be "br" in json response
        // So if the streaming is disabled, we need to remove the content-encoding header
        // Because Vercel uses gzip to compress the response, if we don't remove the content-encoding header
        // The browser will try to decode the response with brotli and fail
        newHeaders.delete("content-encoding");
        return new Response(res.body, {
            status: res.status,
            statusText: res.statusText,
            headers: newHeaders
        });
    } finally{
        clearTimeout(timeoutId);
    }
}


/***/ }),

/***/ 9579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getServerSideConfig)
/* harmony export */ });
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5045);
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);


const ACCESS_CODES = function getAccessCodes() {
    const code = process.env.CODE;
    try {
        const codes = (code?.split(",") ?? []).filter((v)=>!!v).map((v)=>spark_md5__WEBPACK_IMPORTED_MODULE_0___default().hash(v.trim()));
        return new Set(codes);
    } catch (e) {
        return new Set();
    }
}();
function getApiKey(keys) {
    const apiKeyEnvVar = keys ?? "";
    const apiKeys = apiKeyEnvVar.split(",").map((v)=>v.trim());
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    const apiKey = apiKeys[randomIndex];
    if (apiKey) {
        console.log(`[Server Config] using ${randomIndex + 1} of ${apiKeys.length} api key - ${apiKey}`);
    }
    return apiKey;
}
const getServerSideConfig = ()=>{
    if (typeof process === "undefined") {
        throw Error("[Server Config] you are importing a nodejs-only module outside of nodejs");
    }
    const disableGPT4 = !!process.env.DISABLE_GPT4;
    let customModels = process.env.CUSTOM_MODELS ?? "";
    let defaultModel = process.env.DEFAULT_MODEL ?? "";
    if (disableGPT4) {
        if (customModels) customModels += ",";
        customModels += _constant__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_MODELS */ .Fv.filter((m)=>m.name.startsWith("gpt-4")).map((m)=>"-" + m.name).join(",");
        if (defaultModel.startsWith("gpt-4")) defaultModel = "";
    }
    const isAzure = !!process.env.AZURE_URL;
    const isGoogle = !!process.env.GOOGLE_API_KEY;
    const isAnthropic = !!process.env.ANTHROPIC_API_KEY;
    // const apiKeyEnvVar = process.env.OPENAI_API_KEY ?? "";
    // const apiKeys = apiKeyEnvVar.split(",").map((v) => v.trim());
    // const randomIndex = Math.floor(Math.random() * apiKeys.length);
    // const apiKey = apiKeys[randomIndex];
    // console.log(
    //   `[Server Config] using ${randomIndex + 1} of ${apiKeys.length} api key`,
    // );
    const allowedWebDevEndpoints = (process.env.WHITE_WEBDEV_ENDPOINTS ?? "").split(",");
    return {
        baseUrl: process.env.BASE_URL,
        apiKey: getApiKey(process.env.OPENAI_API_KEY),
        openaiOrgId: process.env.OPENAI_ORG_ID,
        isAzure,
        azureUrl: process.env.AZURE_URL,
        azureApiKey: getApiKey(process.env.AZURE_API_KEY),
        azureApiVersion: process.env.AZURE_API_VERSION,
        isGoogle,
        googleApiKey: getApiKey(process.env.GOOGLE_API_KEY),
        googleUrl: process.env.GOOGLE_URL,
        isAnthropic,
        anthropicApiKey: getApiKey(process.env.ANTHROPIC_API_KEY),
        anthropicApiVersion: process.env.ANTHROPIC_API_VERSION,
        anthropicUrl: process.env.ANTHROPIC_URL,
        gtmId: process.env.GTM_ID,
        needCode: ACCESS_CODES.size > 0,
        code: process.env.CODE,
        codes: ACCESS_CODES,
        proxyUrl: process.env.PROXY_URL,
        isVercel: !!process.env.VERCEL,
        hideUserApiKey: !!process.env.HIDE_USER_API_KEY,
        disableGPT4,
        hideBalanceQuery: !process.env.ENABLE_BALANCE_QUERY,
        disableFastLink: !!process.env.DISABLE_FAST_LINK,
        customModels,
        defaultModel,
        allowedWebDevEndpoints
    };
};


/***/ }),

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ OPENAI_BASE_URL),
/* harmony export */   Fv: () => (/* binding */ DEFAULT_MODELS),
/* harmony export */   Hm: () => (/* binding */ GEMINI_BASE_URL),
/* harmony export */   L: () => (/* binding */ ApiPath),
/* harmony export */   NU: () => (/* binding */ internalAllowedWebDavEndpoints),
/* harmony export */   TW: () => (/* binding */ ACCESS_CODE_PREFIX),
/* harmony export */   UT: () => (/* binding */ ServiceProvider),
/* harmony export */   Uf: () => (/* binding */ STORAGE_KEY),
/* harmony export */   YU: () => (/* binding */ Anthropic),
/* harmony export */   k8: () => (/* binding */ ModelProvider),
/* harmony export */   mX: () => (/* binding */ OpenaiPath),
/* harmony export */   y3: () => (/* binding */ ANTHROPIC_BASE_URL)
/* harmony export */ });
/* unused harmony exports OWNER, REPO, REPO_URL, ISSUE_URL, UPDATE_URL, RELEASE_URL, FETCH_COMMIT_URL, FETCH_TAG_URL, RUNTIME_CONFIG_DOM, DEFAULT_API_HOST, Path, SlotID, FileName, StoreKey, DEFAULT_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, LAST_INPUT_KEY, UNFINISHED_INPUT, REQUEST_TIMEOUT_MS, EXPORT_MESSAGE_CLASS_NAME, Azure, Google, DEFAULT_INPUT_TEMPLATE, DEFAULT_SYSTEM_TEMPLATE, SUMMARIZE_MODEL, GEMINI_SUMMARIZE_MODEL, KnowledgeCutOffDate, CHAT_PAGE_SIZE, MAX_RENDER_MSG_COUNT */
const OWNER = "Yidadaa";
const REPO = "ChatGPT-Next-Web";
const REPO_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/${REPO}`));
const ISSUE_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/${REPO}/issues`));
const UPDATE_URL = (/* unused pure expression or super */ null && (`${REPO_URL}#keep-updated`));
const RELEASE_URL = (/* unused pure expression or super */ null && (`${REPO_URL}/releases`));
const FETCH_COMMIT_URL = (/* unused pure expression or super */ null && (`https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`));
const FETCH_TAG_URL = (/* unused pure expression or super */ null && (`https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`));
const RUNTIME_CONFIG_DOM = "danger-runtime-config";
const DEFAULT_API_HOST = "https://api.nextchat.dev";
const OPENAI_BASE_URL = "https://api.openai.com";
const ANTHROPIC_BASE_URL = "https://api.anthropic.com";
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
var Path;
(function(Path) {
    Path["Home"] = "/";
    Path["Chat"] = "/chat";
    Path["Settings"] = "/settings";
    Path["NewChat"] = "/new-chat";
    Path["Masks"] = "/masks";
    Path["Auth"] = "/auth";
})(Path || (Path = {}));
var ApiPath;
(function(ApiPath) {
    ApiPath["Cors"] = "";
    ApiPath["Azure"] = "/api/azure";
    ApiPath["OpenAI"] = "/api/openai";
    ApiPath["Anthropic"] = "/api/anthropic";
})(ApiPath || (ApiPath = {}));
var SlotID;
(function(SlotID) {
    SlotID["AppBody"] = "app-body";
    SlotID["CustomModel"] = "custom-model";
})(SlotID || (SlotID = {}));
var FileName;
(function(FileName) {
    FileName["Masks"] = "masks.json";
    FileName["Prompts"] = "prompts.json";
})(FileName || (FileName = {}));
var StoreKey;
(function(StoreKey) {
    StoreKey["Chat"] = "chat-next-web-store";
    StoreKey["Access"] = "access-control";
    StoreKey["Config"] = "app-config";
    StoreKey["Mask"] = "mask-store";
    StoreKey["Prompt"] = "prompt-store";
    StoreKey["Update"] = "chat-update";
    StoreKey["Sync"] = "sync";
})(StoreKey || (StoreKey = {}));
const DEFAULT_SIDEBAR_WIDTH = 300;
const MAX_SIDEBAR_WIDTH = 500;
const MIN_SIDEBAR_WIDTH = 230;
const NARROW_SIDEBAR_WIDTH = 100;
const ACCESS_CODE_PREFIX = "nk-";
const LAST_INPUT_KEY = "last-input";
const UNFINISHED_INPUT = (id)=>"unfinished-input-" + id;
const STORAGE_KEY = "chatgpt-next-web";
const REQUEST_TIMEOUT_MS = 60000;
const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";
var ServiceProvider;
(function(ServiceProvider) {
    ServiceProvider["OpenAI"] = "OpenAI";
    ServiceProvider["Azure"] = "Azure";
    ServiceProvider["Google"] = "Google";
    ServiceProvider["Anthropic"] = "Anthropic";
})(ServiceProvider || (ServiceProvider = {}));
var ModelProvider;
(function(ModelProvider) {
    ModelProvider["GPT"] = "GPT";
    ModelProvider["GeminiPro"] = "GeminiPro";
    ModelProvider["Claude"] = "Claude";
})(ModelProvider || (ModelProvider = {}));
const Anthropic = {
    ChatPath: "v1/messages",
    ChatPath1: "v1/complete",
    ExampleEndpoint: "https://api.anthropic.com",
    Vision: "2023-06-01"
};
const OpenaiPath = {
    ChatPath: "v1/chat/completions",
    UsagePath: "dashboard/billing/usage",
    SubsPath: "dashboard/billing/subscription",
    ListModelPath: "v1/models"
};
const Azure = {
    ChatPath: (deployName, apiVersion)=>`deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
    ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}"
};
const Google = {
    ExampleEndpoint: "https://generativelanguage.googleapis.com/",
    ChatPath: (modelName)=>`v1beta/models/${modelName}:generateContent`
};
const DEFAULT_INPUT_TEMPLATE = (/* unused pure expression or super */ null && (`{{input}}`)); // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
const DEFAULT_SYSTEM_TEMPLATE = (/* unused pure expression or super */ null && (`
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`));
const SUMMARIZE_MODEL = "gpt-3.5-turbo";
const GEMINI_SUMMARIZE_MODEL = "gemini-pro";
const KnowledgeCutOffDate = {
    default: "2021-09",
    "gpt-4-turbo": "2023-12",
    "gpt-4-turbo-2024-04-09": "2023-12",
    "gpt-4-turbo-preview": "2023-12",
    "gpt-4o": "2023-10",
    "gpt-4o-2024-05-13": "2023-10",
    "gpt-4-vision-preview": "2023-04",
    // After improvements,
    // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
    "gemini-pro": "2023-12",
    "gemini-pro-vision": "2023-12"
};
const openaiModels = [
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-1106",
    "gpt-3.5-turbo-0125",
    "gpt-4",
    "gpt-4-0613",
    "gpt-4-32k",
    "gpt-4-32k-0613",
    "gpt-4-turbo",
    "gpt-4-turbo-preview",
    "gpt-4o",
    "gpt-4o-2024-05-13",
    "gpt-4-vision-preview",
    "gpt-4-turbo-2024-04-09",
    "gpt-4-1106-preview"
];
const googleModels = [
    "gemini-1.0-pro",
    "gemini-1.5-pro-latest",
    "gemini-1.5-flash-latest",
    "gemini-pro-vision"
];
const anthropicModels = [
    "claude-instant-1.2",
    "claude-2.0",
    "claude-2.1",
    "claude-3-sonnet-20240229",
    "claude-3-opus-20240229",
    "claude-3-haiku-20240307",
    "claude-3-5-sonnet-20240620"
];
const DEFAULT_MODELS = [
    ...openaiModels.map((name)=>({
            name,
            available: true,
            provider: {
                id: "openai",
                providerName: "OpenAI",
                providerType: "openai"
            }
        })),
    ...openaiModels.map((name)=>({
            name,
            available: true,
            provider: {
                id: "azure",
                providerName: "Azure",
                providerType: "azure"
            }
        })),
    ...googleModels.map((name)=>({
            name,
            available: true,
            provider: {
                id: "google",
                providerName: "Google",
                providerType: "google"
            }
        })),
    ...anthropicModels.map((name)=>({
            name,
            available: true,
            provider: {
                id: "anthropic",
                providerName: "Anthropic",
                providerType: "anthropic"
            }
        }))
];
const CHAT_PAGE_SIZE = 15;
const MAX_RENDER_MSG_COUNT = 45;
// some famous webdav endpoints
const internalAllowedWebDavEndpoints = [
    "https://dav.jianguoyun.com/dav/",
    "https://dav.dropdav.com/",
    "https://dav.box.com/dav",
    "https://nanao.teracloud.jp/dav/",
    "https://bora.teracloud.jp/dav/",
    "https://webdav.4shared.com/",
    "https://dav.idrivesync.com",
    "https://webdav.yandex.com",
    "https://app.koofr.net/dav/Koofr"
];


/***/ }),

/***/ 1480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ prettyObject)
/* harmony export */ });
/* unused harmony export chunks */
function prettyObject(msg) {
    const obj = msg;
    if (typeof msg !== "string") {
        msg = JSON.stringify(msg, null, "  ");
    }
    if (msg === "{}") {
        return obj.toString();
    }
    if (msg.startsWith("```json")) {
        return msg;
    }
    return [
        "```json",
        msg,
        "```"
    ].join("\n");
}
function* chunks(s, maxBytes = 1000 * 1000) {
    const decoder = new TextDecoder("utf-8");
    let buf = new TextEncoder().encode(s);
    while(buf.length){
        let i = buf.lastIndexOf(32, maxBytes + 1);
        // If no space found, try forward search
        if (i < 0) i = buf.indexOf(32, maxBytes);
        // If there's no space at all, take all
        if (i < 0) i = buf.length;
        // This is a safe cut-off point; never half-way a multi-byte
        yield decoder.decode(buf.slice(0, i));
        buf = buf.slice(i + 1); // Skip space (if any)
    }
}


/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pw: () => (/* binding */ isModelAvailableInServer)
/* harmony export */ });
/* unused harmony exports collectModelTable, collectModelTableWithDefaultModel, collectModels, collectModelsWithDefaultModel */
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7736);

const customProvider = (modelName)=>({
        id: modelName,
        providerName: "Custom",
        providerType: "custom"
    });
function collectModelTable(models, customModels) {
    const modelTable = {};
    // default models
    models.forEach((m)=>{
        // using <modelName>@<providerId> as fullName
        modelTable[`${m.name}@${m?.provider?.id}`] = {
            ...m,
            displayName: m.name
        };
    });
    // server custom models
    customModels.split(",").filter((v)=>!!v && v.length > 0).forEach((m)=>{
        const available = !m.startsWith("-");
        const nameConfig = m.startsWith("+") || m.startsWith("-") ? m.slice(1) : m;
        const [name, displayName] = nameConfig.split("=");
        // enable or disable all models
        if (name === "all") {
            Object.values(modelTable).forEach((model)=>model.available = available);
        } else {
            // 1. find model by name(), and set available value
            let count = 0;
            for(const fullName in modelTable){
                if (fullName.split("@").shift() == name) {
                    count += 1;
                    modelTable[fullName]["available"] = available;
                    if (displayName) {
                        modelTable[fullName]["displayName"] = displayName;
                    }
                }
            }
            // 2. if model not exists, create new model with available value
            if (count === 0) {
                const provider = customProvider(name);
                modelTable[`${name}@${provider?.id}`] = {
                    name,
                    displayName: displayName || name,
                    available,
                    provider
                };
            }
        }
    });
    return modelTable;
}
function collectModelTableWithDefaultModel(models, customModels, defaultModel) {
    let modelTable = collectModelTable(models, customModels);
    if (defaultModel && defaultModel !== "") {
        modelTable[defaultModel] = {
            ...modelTable[defaultModel],
            name: defaultModel,
            available: true,
            isDefault: true
        };
    }
    return modelTable;
}
/**
 * Generate full model table.
 */ function collectModels(models, customModels) {
    const modelTable = collectModelTable(models, customModels);
    const allModels = Object.values(modelTable);
    return allModels;
}
function collectModelsWithDefaultModel(models, customModels, defaultModel) {
    const modelTable = collectModelTableWithDefaultModel(models, customModels, defaultModel);
    const allModels = Object.values(modelTable);
    return allModels;
}
function isModelAvailableInServer(customModels, modelName, providerName) {
    const fullName = `${modelName}@${providerName}`;
    const modelTable = collectModelTable(_constant__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_MODELS */ .Fv, customModels);
    return modelTable[fullName]?.available === false;
}


/***/ })

}]);
//# sourceMappingURL=344.js.map