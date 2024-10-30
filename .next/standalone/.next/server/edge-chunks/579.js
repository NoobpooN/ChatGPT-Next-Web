"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[579],{

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
        customModels += _constant__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_MODELS */ .Fv.filter((m)=>(m.name.startsWith("gpt-4") || m.name.startsWith("chatgpt-4o")) && !m.name.startsWith("gpt-4o-mini")).map((m)=>"-" + m.name).join(",");
        if ((defaultModel.startsWith("gpt-4") || defaultModel.startsWith("chatgpt-4o")) && !defaultModel.startsWith("gpt-4o-mini")) defaultModel = "";
    }
    const isStability = !!process.env.STABILITY_API_KEY;
    const isAzure = !!process.env.AZURE_URL;
    const isGoogle = !!process.env.GOOGLE_API_KEY;
    const isAnthropic = !!process.env.ANTHROPIC_API_KEY;
    const isTencent = !!process.env.TENCENT_API_KEY;
    const isBaidu = !!process.env.BAIDU_API_KEY;
    const isBytedance = !!process.env.BYTEDANCE_API_KEY;
    const isAlibaba = !!process.env.ALIBABA_API_KEY;
    const isMoonshot = !!process.env.MOONSHOT_API_KEY;
    const isIflytek = !!process.env.IFLYTEK_API_KEY;
    const isXAI = !!process.env.XAI_API_KEY;
    // const apiKeyEnvVar = process.env.OPENAI_API_KEY ?? "";
    // const apiKeys = apiKeyEnvVar.split(",").map((v) => v.trim());
    // const randomIndex = Math.floor(Math.random() * apiKeys.length);
    // const apiKey = apiKeys[randomIndex];
    // console.log(
    //   `[Server Config] using ${randomIndex + 1} of ${apiKeys.length} api key`,
    // );
    const allowedWebDavEndpoints = (process.env.WHITE_WEBDAV_ENDPOINTS ?? "").split(",");
    return {
        baseUrl: process.env.BASE_URL,
        apiKey: getApiKey(process.env.OPENAI_API_KEY),
        openaiOrgId: process.env.OPENAI_ORG_ID,
        isStability,
        stabilityUrl: process.env.STABILITY_URL,
        stabilityApiKey: getApiKey(process.env.STABILITY_API_KEY),
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
        isTencent,
        tencentUrl: process.env.TENCENT_URL,
        tencentSecretKey: getApiKey(process.env.TENCENT_SECRET_KEY),
        tencentSecretId: process.env.TENCENT_SECRET_ID,
        isMoonshot,
        moonshotUrl: process.env.MOONSHOT_URL,
        moonshotApiKey: getApiKey(process.env.MOONSHOT_API_KEY),
        isIflytek,
        iflytekUrl: process.env.IFLYTEK_URL,
        iflytekApiKey: process.env.IFLYTEK_API_KEY,
        iflytekApiSecret: process.env.IFLYTEK_API_SECRET,
        isXAI,
        xaiUrl: process.env.XAI_URL,
        xaiApiKey: getApiKey(process.env.XAI_API_KEY),
        cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        cloudflareKVNamespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID,
        cloudflareKVApiKey: getApiKey(process.env.CLOUDFLARE_KV_API_KEY),
        cloudflareKVTTL: process.env.CLOUDFLARE_KV_TTL,
        gtmId: process.env.GTM_ID,
        gaId: process.env.GA_ID || _constant__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_GA_ID */ .Mq,
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
        allowedWebDavEndpoints
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
/* harmony export */   Mo: () => (/* binding */ TENCENT_BASE_URL),
/* harmony export */   Mq: () => (/* binding */ DEFAULT_GA_ID),
/* harmony export */   NU: () => (/* binding */ internalAllowedWebDavEndpoints),
/* harmony export */   TW: () => (/* binding */ ACCESS_CODE_PREFIX),
/* harmony export */   UT: () => (/* binding */ ServiceProvider),
/* harmony export */   Uf: () => (/* binding */ STORAGE_KEY),
/* harmony export */   YU: () => (/* binding */ Anthropic),
/* harmony export */   bP: () => (/* binding */ MOONSHOT_BASE_URL),
/* harmony export */   eE: () => (/* binding */ XAI_BASE_URL),
/* harmony export */   ik: () => (/* binding */ BYTEDANCE_BASE_URL),
/* harmony export */   k8: () => (/* binding */ ModelProvider),
/* harmony export */   mX: () => (/* binding */ OpenaiPath),
/* harmony export */   n9: () => (/* binding */ BAIDU_BASE_URL),
/* harmony export */   pG: () => (/* binding */ IFLYTEK_BASE_URL),
/* harmony export */   rT: () => (/* binding */ STABILITY_BASE_URL),
/* harmony export */   x5: () => (/* binding */ ALIBABA_BASE_URL),
/* harmony export */   y3: () => (/* binding */ ANTHROPIC_BASE_URL)
/* harmony export */ });
/* unused harmony exports OWNER, REPO, REPO_URL, PLUGINS_REPO_URL, ISSUE_URL, UPDATE_URL, RELEASE_URL, FETCH_COMMIT_URL, FETCH_TAG_URL, RUNTIME_CONFIG_DOM, CACHE_URL_PREFIX, UPLOAD_URL, Path, SlotID, FileName, StoreKey, DEFAULT_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, LAST_INPUT_KEY, UNFINISHED_INPUT, REQUEST_TIMEOUT_MS, EXPORT_MESSAGE_CLASS_NAME, GoogleSafetySettingsThreshold, Stability, Azure, Google, Baidu, ByteDance, Alibaba, Tencent, Moonshot, Iflytek, XAI, DEFAULT_INPUT_TEMPLATE, DEFAULT_SYSTEM_TEMPLATE, SUMMARIZE_MODEL, GEMINI_SUMMARIZE_MODEL, KnowledgeCutOffDate, DEFAULT_TTS_ENGINE, DEFAULT_TTS_ENGINES, DEFAULT_TTS_MODEL, DEFAULT_TTS_VOICE, DEFAULT_TTS_MODELS, DEFAULT_TTS_VOICES, CHAT_PAGE_SIZE, MAX_RENDER_MSG_COUNT, PLUGINS, SAAS_CHAT_URL, SAAS_CHAT_UTM_URL */
const OWNER = "ChatGPTNextWeb";
const REPO = "ChatGPT-Next-Web";
const REPO_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/${REPO}`));
const PLUGINS_REPO_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/NextChat-Awesome-Plugins`));
const ISSUE_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/${REPO}/issues`));
const UPDATE_URL = (/* unused pure expression or super */ null && (`${REPO_URL}#keep-updated`));
const RELEASE_URL = (/* unused pure expression or super */ null && (`${REPO_URL}/releases`));
const FETCH_COMMIT_URL = (/* unused pure expression or super */ null && (`https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`));
const FETCH_TAG_URL = (/* unused pure expression or super */ null && (`https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`));
const RUNTIME_CONFIG_DOM = "danger-runtime-config";
const STABILITY_BASE_URL = "https://api.stability.ai";
const OPENAI_BASE_URL = "https://api.openai.com";
const ANTHROPIC_BASE_URL = "https://api.anthropic.com";
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
const BAIDU_BASE_URL = "https://aip.baidubce.com";
const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;
const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";
const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";
const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";
const MOONSHOT_BASE_URL = "https://api.moonshot.cn";
const IFLYTEK_BASE_URL = "https://spark-api-open.xf-yun.com";
const XAI_BASE_URL = "https://api.x.ai";
const CACHE_URL_PREFIX = "/api/cache";
const UPLOAD_URL = (/* unused pure expression or super */ null && (`${CACHE_URL_PREFIX}/upload`));
var Path;
(function(Path) {
    Path["Home"] = "/";
    Path["Chat"] = "/chat";
    Path["Settings"] = "/settings";
    Path["NewChat"] = "/new-chat";
    Path["Masks"] = "/masks";
    Path["Plugins"] = "/plugins";
    Path["Auth"] = "/auth";
    Path["Sd"] = "/sd";
    Path["SdNew"] = "/sd-new";
    Path["Artifacts"] = "/artifacts";
    Path["SearchChat"] = "/search-chat";
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
    ApiPath["Tencent"] = "/api/tencent";
    ApiPath["Moonshot"] = "/api/moonshot";
    ApiPath["Iflytek"] = "/api/iflytek";
    ApiPath["Stability"] = "/api/stability";
    ApiPath["Artifacts"] = "/api/artifacts";
    ApiPath["XAI"] = "/api/xai";
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
    StoreKey["Plugin"] = "chat-next-web-plugin";
    StoreKey["Access"] = "access-control";
    StoreKey["Config"] = "app-config";
    StoreKey["Mask"] = "mask-store";
    StoreKey["Prompt"] = "prompt-store";
    StoreKey["Update"] = "chat-update";
    StoreKey["Sync"] = "sync";
    StoreKey["SdList"] = "sd-list";
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
    ServiceProvider["Tencent"] = "Tencent";
    ServiceProvider["Moonshot"] = "Moonshot";
    ServiceProvider["Stability"] = "Stability";
    ServiceProvider["Iflytek"] = "Iflytek";
    ServiceProvider["XAI"] = "XAI";
})(ServiceProvider || (ServiceProvider = {}));
var GoogleSafetySettingsThreshold;
(function(GoogleSafetySettingsThreshold) {
    GoogleSafetySettingsThreshold["BLOCK_NONE"] = "BLOCK_NONE";
    GoogleSafetySettingsThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    GoogleSafetySettingsThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    GoogleSafetySettingsThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
})(GoogleSafetySettingsThreshold || (GoogleSafetySettingsThreshold = {}));
var ModelProvider;
(function(ModelProvider) {
    ModelProvider["Stability"] = "Stability";
    ModelProvider["GPT"] = "GPT";
    ModelProvider["GeminiPro"] = "GeminiPro";
    ModelProvider["Claude"] = "Claude";
    ModelProvider["Ernie"] = "Ernie";
    ModelProvider["Doubao"] = "Doubao";
    ModelProvider["Qwen"] = "Qwen";
    ModelProvider["Hunyuan"] = "Hunyuan";
    ModelProvider["Moonshot"] = "Moonshot";
    ModelProvider["Iflytek"] = "Iflytek";
    ModelProvider["XAI"] = "XAI";
})(ModelProvider || (ModelProvider = {}));
const Stability = {
    GeneratePath: "v2beta/stable-image/generate",
    ExampleEndpoint: "https://api.stability.ai"
};
const Anthropic = {
    ChatPath: "v1/messages",
    ChatPath1: "v1/complete",
    ExampleEndpoint: "https://api.anthropic.com",
    Vision: "2023-06-01"
};
const OpenaiPath = {
    ChatPath: "v1/chat/completions",
    SpeechPath: "v1/audio/speech",
    ImagePath: "v1/images/generations",
    UsagePath: "dashboard/billing/usage",
    SubsPath: "dashboard/billing/subscription",
    ListModelPath: "v1/models"
};
const Azure = {
    ChatPath: (deployName, apiVersion)=>`deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
    // https://<your_resource_name>.openai.azure.com/openai/deployments/<your_deployment_name>/images/generations?api-version=<api_version>
    ImagePath: (deployName, apiVersion)=>`deployments/${deployName}/images/generations?api-version=${apiVersion}`,
    ExampleEndpoint: "https://{resource-url}/openai"
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
const Tencent = {
    ExampleEndpoint: TENCENT_BASE_URL
};
const Moonshot = {
    ExampleEndpoint: MOONSHOT_BASE_URL,
    ChatPath: "v1/chat/completions"
};
const Iflytek = {
    ExampleEndpoint: IFLYTEK_BASE_URL,
    ChatPath: "v1/chat/completions"
};
const XAI = {
    ExampleEndpoint: XAI_BASE_URL,
    ChatPath: "v1/chat/completions"
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
const SUMMARIZE_MODEL = "gpt-4o-mini";
const GEMINI_SUMMARIZE_MODEL = "gemini-pro";
const KnowledgeCutOffDate = {
    default: "2021-09",
    "gpt-4-turbo": "2023-12",
    "gpt-4-turbo-2024-04-09": "2023-12",
    "gpt-4-turbo-preview": "2023-12",
    "gpt-4o": "2023-10",
    "gpt-4o-2024-05-13": "2023-10",
    "gpt-4o-2024-08-06": "2023-10",
    "chatgpt-4o-latest": "2023-10",
    "gpt-4o-mini": "2023-10",
    "gpt-4o-mini-2024-07-18": "2023-10",
    "gpt-4-vision-preview": "2023-04",
    "o1-mini": "2023-10",
    "o1-preview": "2023-10",
    // After improvements,
    // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
    "gemini-pro": "2023-12",
    "gemini-pro-vision": "2023-12"
};
const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
const DEFAULT_TTS_ENGINES = (/* unused pure expression or super */ null && ([
    "OpenAI-TTS",
    "Edge-TTS"
]));
const DEFAULT_TTS_MODEL = "tts-1";
const DEFAULT_TTS_VOICE = "alloy";
const DEFAULT_TTS_MODELS = (/* unused pure expression or super */ null && ([
    "tts-1",
    "tts-1-hd"
]));
const DEFAULT_TTS_VOICES = (/* unused pure expression or super */ null && ([
    "alloy",
    "echo",
    "fable",
    "onyx",
    "nova",
    "shimmer"
]));
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
    "gpt-4o-2024-08-06",
    "chatgpt-4o-latest",
    "gpt-4o-mini",
    "gpt-4o-mini-2024-07-18",
    "gpt-4-vision-preview",
    "gpt-4-turbo-2024-04-09",
    "gpt-4-1106-preview",
    "dall-e-3",
    "o1-mini",
    "o1-preview"
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
const tencentModels = [
    "hunyuan-pro",
    "hunyuan-standard",
    "hunyuan-lite",
    "hunyuan-role",
    "hunyuan-functioncall",
    "hunyuan-code",
    "hunyuan-vision"
];
const moonshotModes = [
    "moonshot-v1-8k",
    "moonshot-v1-32k",
    "moonshot-v1-128k"
];
const iflytekModels = [
    "general",
    "generalv3",
    "pro-128k",
    "generalv3.5",
    "4.0Ultra"
];
const xAIModes = [
    "grok-beta"
];
let seq = 1000; // 内置的模型序号生成器从1000开始
const DEFAULT_MODELS = [
    ...openaiModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "openai",
                providerName: "OpenAI",
                providerType: "openai",
                sorted: 1
            }
        })),
    ...openaiModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "azure",
                providerName: "Azure",
                providerType: "azure",
                sorted: 2
            }
        })),
    ...googleModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "google",
                providerName: "Google",
                providerType: "google",
                sorted: 3
            }
        })),
    ...anthropicModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "anthropic",
                providerName: "Anthropic",
                providerType: "anthropic",
                sorted: 4
            }
        })),
    ...baiduModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "baidu",
                providerName: "Baidu",
                providerType: "baidu",
                sorted: 5
            }
        })),
    ...bytedanceModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "bytedance",
                providerName: "ByteDance",
                providerType: "bytedance",
                sorted: 6
            }
        })),
    ...alibabaModes.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "alibaba",
                providerName: "Alibaba",
                providerType: "alibaba",
                sorted: 7
            }
        })),
    ...tencentModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "tencent",
                providerName: "Tencent",
                providerType: "tencent",
                sorted: 8
            }
        })),
    ...moonshotModes.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "moonshot",
                providerName: "Moonshot",
                providerType: "moonshot",
                sorted: 9
            }
        })),
    ...iflytekModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "iflytek",
                providerName: "Iflytek",
                providerType: "iflytek",
                sorted: 10
            }
        })),
    ...xAIModes.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "xai",
                providerName: "XAI",
                providerType: "xai",
                sorted: 11
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
const DEFAULT_GA_ID = "G-89WN60ZK2E";
const PLUGINS = [
    {
        name: "Plugins",
        path: "/plugins"
    },
    {
        name: "Stable Diffusion",
        path: "/sd"
    },
    {
        name: "Search Chat",
        path: "/search-chat"
    }
];
const SAAS_CHAT_URL = "https://nextchat.dev/chat";
const SAAS_CHAT_UTM_URL = "https://nextchat.dev/chat?utm=github";


/***/ })

}]);
//# sourceMappingURL=579.js.map