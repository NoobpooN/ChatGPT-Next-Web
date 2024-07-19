"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[744],{

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
            case _constant__WEBPACK_IMPORTED_MODULE_2__/* .ModelProvider */ .k8.Doubao:
                systemApiKey = serverConfig.bytedanceApiKey;
                break;
            case _constant__WEBPACK_IMPORTED_MODULE_2__/* .ModelProvider */ .k8.Ernie:
                systemApiKey = serverConfig.baiduApiKey;
                break;
            case _constant__WEBPACK_IMPORTED_MODULE_2__/* .ModelProvider */ .k8.Qwen:
                systemApiKey = serverConfig.alibabaApiKey;
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
    const isBaidu = !!process.env.BAIDU_API_KEY;
    const isBytedance = !!process.env.BYTEDANCE_API_KEY;
    const isAlibaba = !!process.env.ALIBABA_API_KEY;
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
        isBaidu,
        baiduUrl: process.env.BAIDU_URL,
        baiduApiKey: getApiKey(process.env.BAIDU_API_KEY),
        baiduSecretKey: process.env.BAIDU_SECRET_KEY,
        isBytedance,
        bytedanceApiKey: getApiKey(process.env.BYTEDANCE_API_KEY),
        bytedanceUrl: process.env.BYTEDANCE_URL,
        isAlibaba,
        alibabaUrl: process.env.ALIBABA_URL,
        alibabaApiKey: getApiKey(process.env.ALIBABA_API_KEY),
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
/* harmony export */   FR: () => (/* binding */ BAIDU_OATUH_URL),
/* harmony export */   Fv: () => (/* binding */ DEFAULT_MODELS),
/* harmony export */   Hm: () => (/* binding */ GEMINI_BASE_URL),
/* harmony export */   L: () => (/* binding */ ApiPath),
/* harmony export */   NU: () => (/* binding */ internalAllowedWebDavEndpoints),
/* harmony export */   TW: () => (/* binding */ ACCESS_CODE_PREFIX),
/* harmony export */   UT: () => (/* binding */ ServiceProvider),
/* harmony export */   Uf: () => (/* binding */ STORAGE_KEY),
/* harmony export */   YU: () => (/* binding */ Anthropic),
/* harmony export */   ik: () => (/* binding */ BYTEDANCE_BASE_URL),
/* harmony export */   k8: () => (/* binding */ ModelProvider),
/* harmony export */   mX: () => (/* binding */ OpenaiPath),
/* harmony export */   n9: () => (/* binding */ BAIDU_BASE_URL),
/* harmony export */   x5: () => (/* binding */ ALIBABA_BASE_URL),
/* harmony export */   y3: () => (/* binding */ ANTHROPIC_BASE_URL)
/* harmony export */ });
/* unused harmony exports OWNER, REPO, REPO_URL, ISSUE_URL, UPDATE_URL, RELEASE_URL, FETCH_COMMIT_URL, FETCH_TAG_URL, RUNTIME_CONFIG_DOM, DEFAULT_API_HOST, Path, SlotID, FileName, StoreKey, DEFAULT_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, LAST_INPUT_KEY, UNFINISHED_INPUT, REQUEST_TIMEOUT_MS, EXPORT_MESSAGE_CLASS_NAME, Azure, Google, Baidu, ByteDance, Alibaba, DEFAULT_INPUT_TEMPLATE, DEFAULT_SYSTEM_TEMPLATE, SUMMARIZE_MODEL, GEMINI_SUMMARIZE_MODEL, KnowledgeCutOffDate, CHAT_PAGE_SIZE, MAX_RENDER_MSG_COUNT */
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
const BAIDU_BASE_URL = "https://aip.baidubce.com";
const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;
const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";
const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";
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
    ApiPath["Google"] = "/api/google";
    ApiPath["Baidu"] = "/api/baidu";
    ApiPath["ByteDance"] = "/api/bytedance";
    ApiPath["Alibaba"] = "/api/alibaba";
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
    ServiceProvider["Baidu"] = "Baidu";
    ServiceProvider["ByteDance"] = "ByteDance";
    ServiceProvider["Alibaba"] = "Alibaba";
})(ServiceProvider || (ServiceProvider = {}));
var ModelProvider;
(function(ModelProvider) {
    ModelProvider["GPT"] = "GPT";
    ModelProvider["GeminiPro"] = "GeminiPro";
    ModelProvider["Claude"] = "Claude";
    ModelProvider["Ernie"] = "Ernie";
    ModelProvider["Doubao"] = "Doubao";
    ModelProvider["Qwen"] = "Qwen";
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
    ChatPath: (modelName)=>`v1beta/models/${modelName}:streamGenerateContent`
};
const Baidu = {
    ExampleEndpoint: BAIDU_BASE_URL,
    ChatPath: (modelName)=>{
        let endpoint = modelName;
        if (modelName === "ernie-4.0-8k") {
            endpoint = "completions_pro";
        }
        if (modelName === "ernie-4.0-8k-preview-0518") {
            endpoint = "completions_adv_pro";
        }
        if (modelName === "ernie-3.5-8k") {
            endpoint = "completions";
        }
        if (modelName === "ernie-speed-128k") {
            endpoint = "ernie-speed-128k";
        }
        if (modelName === "ernie-speed-8k") {
            endpoint = "ernie_speed";
        }
        return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
    }
};
const ByteDance = {
    ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
    ChatPath: "api/v3/chat/completions"
};
const Alibaba = {
    ExampleEndpoint: ALIBABA_BASE_URL,
    ChatPath: "v1/services/aigc/text-generation/generation"
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
    "gpt-4o-mini": "2023-10",
    "gpt-4o-mini-2024-07-18": "2023-10",
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
    "gpt-4o-mini",
    "gpt-4o-mini-2024-07-18",
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
const baiduModels = [
    "ernie-4.0-turbo-8k",
    "ernie-4.0-8k",
    "ernie-4.0-8k-preview",
    "ernie-4.0-8k-preview-0518",
    "ernie-4.0-8k-latest",
    "ernie-3.5-8k",
    "ernie-3.5-8k-0205",
    "ernie-speed-128k",
    "ernie-speed-8k",
    "ernie-lite-8k",
    "ernie-tiny-8k"
];
const bytedanceModels = [
    "Doubao-lite-4k",
    "Doubao-lite-32k",
    "Doubao-lite-128k",
    "Doubao-pro-4k",
    "Doubao-pro-32k",
    "Doubao-pro-128k"
];
const alibabaModes = [
    "qwen-turbo",
    "qwen-plus",
    "qwen-max",
    "qwen-max-0428",
    "qwen-max-0403",
    "qwen-max-0107",
    "qwen-max-longcontext"
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
        })),
    ...baiduModels.map((name)=>({
            name,
            available: true,
            provider: {
                id: "baidu",
                providerName: "Baidu",
                providerType: "baidu"
            }
        })),
    ...bytedanceModels.map((name)=>({
            name,
            available: true,
            provider: {
                id: "bytedance",
                providerName: "ByteDance",
                providerType: "bytedance"
            }
        })),
    ...alibabaModes.map((name)=>({
            name,
            available: true,
            provider: {
                id: "alibaba",
                providerName: "Alibaba",
                providerType: "alibaba"
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

const customProvider = (providerName)=>({
        id: providerName.toLowerCase(),
        providerName: providerName,
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
        let [name, displayName] = nameConfig.split("=");
        // enable or disable all models
        if (name === "all") {
            Object.values(modelTable).forEach((model)=>model.available = available);
        } else {
            // 1. find model by name, and set available value
            const [customModelName, customProviderName] = name.split("@");
            let count = 0;
            for(const fullName in modelTable){
                const [modelName, providerName] = fullName.split("@");
                if (customModelName == modelName && (customProviderName === undefined || customProviderName === providerName)) {
                    count += 1;
                    modelTable[fullName]["available"] = available;
                    // swap name and displayName for bytedance
                    if (providerName === "bytedance") {
                        [name, displayName] = [
                            displayName,
                            modelName
                        ];
                        modelTable[fullName]["name"] = name;
                    }
                    if (displayName) {
                        modelTable[fullName]["displayName"] = displayName;
                    }
                }
            }
            // 2. if model not exists, create new model with available value
            if (count === 0) {
                let [customModelName, customProviderName] = name.split("@");
                const provider = customProvider(customProviderName || customModelName);
                // swap name and displayName for bytedance
                if (displayName && provider.providerName == "ByteDance") {
                    [customModelName, displayName] = [
                        displayName,
                        customModelName
                    ];
                }
                modelTable[`${customModelName}@${provider?.id}`] = {
                    name: customModelName,
                    displayName: displayName || customModelName,
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
//# sourceMappingURL=744.js.map