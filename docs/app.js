const translations = {
  en: {
    brandCompany: "銀銦釱科技股份有限公司",
    navPlatform: "Lab OS",
    navSystems: "Systems",
    navFlow: "AgInTiFlow",
    navContact: "Contact",
    githubTop: "AgInTiFlow GitHub",
    languageLabel: "Language",
    eyebrow: "Autonomous laboratory intelligence",
    heroTitle: "Autonomous lab systems for chemistry and biomedicine.",
    heroLead:
      "AgInTi builds high-control AI infrastructure for scientific teams: agents that reason over protocols, operate digital tools, preserve experimental context, and keep humans in command.",
    primaryCta: "Discuss a lab workflow",
    secondaryCta: "View AgInTiFlow",
    cardLabel: "Lab automation stack",
    cardHeadline: "AI controlled. Human governed.",
    signalOne: "Chemistry workflows",
    signalTwo: "Biomedical research ops",
    signalThree: "Guarded agent tools",
    platformEyebrow: "Lab operating layer",
    platformTitle: "From scientific intent to repeatable autonomous execution.",
    platformText:
      "We design agent systems for protocol planning, literature and data operations, instrument-adjacent workflows, and high-trust review loops across chemistry, biology, and biomedicine.",
    productEyebrow: "Open product",
    productTitle: "AgInTiFlow",
    productText:
      "AgInTiFlow is the first public layer of our agent stack: browser automation, persistent chat, resumable runs, provider selection, and guarded local tools.",
    productLink: "View AgInTiFlow on GitHub",
    cardOneTitle: "Protocol Agents",
    cardOneText:
      "Agents that turn scientific goals into auditable workflow plans with clear assumptions, checkpoints, and approval gates.",
    cardTwoTitle: "Research Operations",
    cardTwoText:
      "Tool-using systems for literature review, data handling, documentation, and repeatable scientific operations.",
    cardThreeTitle: "Lab Interfaces",
    cardThreeText:
      "Refined web interfaces with model selection, persisted settings, run history, session memory, and operator visibility.",
    promiseEyebrow: "Control principle",
    promiseTitle: "Autonomy must be inspectable before it is trusted.",
    promiseOne: "Explicit permission boundaries before sensitive tool or lab-adjacent actions.",
    promiseTwo: "Readable logs, snapshots, resumable sessions, and durable experimental context.",
    promiseThree:
      "Model-provider flexibility for teams that need speed, privacy, cost control, or frontier reasoning.",
    footerCompany: "銀銦釱科技股份有限公司",
    footerContact: "hello@aginti.ai",
  },
  "zh-Hant": {
    brandCompany: "銀銦釱科技股份有限公司",
    navPlatform: "實驗室 OS",
    navSystems: "系統",
    navFlow: "AgInTiFlow",
    navContact: "聯絡",
    githubTop: "AgInTiFlow GitHub",
    languageLabel: "語言",
    eyebrow: "自主實驗室智能",
    heroTitle: "面向化學與生物醫學的自主實驗室系統。",
    heroLead:
      "AgInTi 為科研團隊打造高可控 AI 基礎設施：智能體能理解實驗流程、操作數位工具、保留實驗上下文，並讓人始終掌握決策權。",
    primaryCta: "討論實驗室流程",
    secondaryCta: "查看 AgInTiFlow",
    cardLabel: "實驗室自動化堆疊",
    cardHeadline: "AI 控制，人類治理。",
    signalOne: "化學工作流",
    signalTwo: "生物醫學研究營運",
    signalThree: "受防護的智能體工具",
    platformEyebrow: "實驗室操作層",
    platformTitle: "從科研意圖到可重複的自主執行。",
    platformText:
      "我們設計面向化學、生物學與生物醫學的智能體系統，涵蓋流程規劃、文獻與數據操作、儀器鄰近工作流，以及高信任度審核迴路。",
    productEyebrow: "開放產品",
    productTitle: "AgInTiFlow",
    productText:
      "AgInTiFlow 是我們智能體堆疊的第一個公開層：支援瀏覽器自動化、持久對話、可恢復執行、模型供應商選擇與受防護的本地工具。",
    productLink: "在 GitHub 查看 AgInTiFlow",
    cardOneTitle: "實驗流程智能體",
    cardOneText: "把科研目標轉化為可稽核的流程計畫，保留假設、檢查點與核准閘門。",
    cardTwoTitle: "研究營運",
    cardTwoText: "用工具完成文獻回顧、數據處理、文件整理與可重複的科研營運流程。",
    cardThreeTitle: "實驗室介面",
    cardThreeText: "高質感網頁介面，支援模型選擇、設定保存、執行歷史、會話記憶與操作者可視性。",
    promiseEyebrow: "控制原則",
    promiseTitle: "自主能力必須先可檢查，才值得信任。",
    promiseOne: "在敏感工具或實驗室鄰近動作前設定明確權限邊界。",
    promiseTwo: "提供可閱讀日誌、快照、可恢復會話與持久實驗上下文。",
    promiseThree: "保留模型供應商彈性，支援速度、隱私、成本與前沿推理需求。",
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
