const translations = {
  en: {
    brandCompany: "銀銦釱科技股份有限公司",
    navPlatform: "Platform",
    navSystems: "Systems",
    navContact: "Contact",
    languageLabel: "Language",
    eyebrow: "AI automation product lab",
    heroTitle: "Liquid intelligence for browser work, agents, and operations.",
    heroLead:
      "AgInTi designs practical AI systems that control websites, operate tools, and turn repeatable digital work into reliable agent flows.",
    primaryCta: "Start a conversation",
    secondaryCta: "Explore the platform",
    signalOne: "Browser control",
    signalTwo: "Workflow memory",
    signalThree: "Guarded tools",
    platformEyebrow: "What we build",
    platformTitle: "Agent products with visible control and durable memory.",
    platformText:
      "We focus on automation that can be inspected, resumed, and trusted: browser agents, shell-assisted workflows, human-in-the-loop dashboards, and productized AI tools.",
    productEyebrow: "Featured product",
    productTitle: "AgInTiFlow",
    productText:
      "AgInTiFlow is AgInTi's website-control agent for browser automation, persistent chat, resumable runs, provider selection, and guarded local tools.",
    productLink: "View AgInTiFlow on GitHub",
    cardOneTitle: "Website Control",
    cardOneText:
      "Agents that navigate pages, collect context, and complete web tasks while respecting domain and action guardrails.",
    cardTwoTitle: "Operational Agents",
    cardTwoText:
      "Tool-using systems for common terminal work, research, documentation, and repeatable business processes.",
    cardThreeTitle: "Product Interfaces",
    cardThreeText:
      "Clean web applications with provider selection, persisted settings, run history, and conversation continuity.",
    promiseEyebrow: "Design principle",
    promiseTitle: "Automation should feel powerful, but never uncontrolled.",
    promiseOne: "Explicit tool permissions before sensitive actions.",
    promiseTwo: "Readable logs, snapshots, and resumable sessions.",
    promiseThree: "Provider flexibility across OpenAI-compatible model APIs.",
    footerCompany: "銀銦釱科技股份有限公司",
    footerContact: "hello@aginti.ai",
  },
  "zh-Hant": {
    brandCompany: "銀銦釱科技股份有限公司",
    navPlatform: "平台",
    navSystems: "系統",
    navContact: "聯絡",
    languageLabel: "語言",
    eyebrow: "AI 自動化產品實驗室",
    heroTitle: "為網站操作、智能體與營運流程注入流動智慧。",
    heroLead:
      "AgInTi 打造可落地的 AI 系統，讓智能體能控制網站、操作工具，並把重複性的數位工作轉化為可靠的自動化流程。",
    primaryCta: "開始聯絡",
    secondaryCta: "了解平台",
    signalOne: "網站控制",
    signalTwo: "流程記憶",
    signalThree: "工具防護",
    platformEyebrow: "我們打造什麼",
    platformTitle: "可觀察、可延續、具備長期記憶的智能體產品。",
    platformText:
      "我們專注於能被檢查、能被恢復、能被信任的自動化：瀏覽器智能體、Shell 輔助流程、人機協作儀表板，以及產品化 AI 工具。",
    productEyebrow: "精選產品",
    productTitle: "AgInTiFlow",
    productText:
      "AgInTiFlow 是 AgInTi 的網站控制智能體，支援瀏覽器自動化、持久對話、可恢復執行、模型供應商選擇與受防護的本地工具。",
    productLink: "在 GitHub 查看 AgInTiFlow",
    cardOneTitle: "網站控制",
    cardOneText: "智能體可瀏覽頁面、收集上下文並完成網站任務，同時遵守網域與動作防護規則。",
    cardTwoTitle: "營運智能體",
    cardTwoText: "用工具完成常見終端操作、研究、文件整理與可重複的商業流程。",
    cardThreeTitle: "產品介面",
    cardThreeText: "提供模型選擇、設定保存、執行歷史與對話延續能力的清晰網頁應用。",
    promiseEyebrow: "設計原則",
    promiseTitle: "自動化應該強大，但不應失控。",
    promiseOne: "敏感動作前保留明確的工具權限。",
    promiseTwo: "提供可閱讀的日誌、快照與可恢復會話。",
    promiseThree: "支援 OpenAI 相容模型 API 的多供應商彈性。",
    footerCompany: "銀銦釱科技股份有限公司",
    footerContact: "hello@aginti.ai",
  },
};

const languageSelect = document.querySelector("#language-select");
const translatableNodes = [...document.querySelectorAll("[data-i18n]")];

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.body.dataset.lang = language;
  languageSelect.value = language;

  for (const node of translatableNodes) {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  }

  localStorage.setItem("aginti-language", language);
}

const savedLanguage = localStorage.getItem("aginti-language");
const browserLanguage = navigator.language?.startsWith("zh") ? "zh-Hant" : "en";
applyLanguage(savedLanguage || browserLanguage);

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});
