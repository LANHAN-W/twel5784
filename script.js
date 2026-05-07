const COLOR_STORAGE_KEY = "ai-dev-color-cards";
const CUSTOM_GUESS_STORAGE_KEY = "ai-dev-custom-guess-items";

const defaultColorCards = [
  {
    name: "霧 sage",
    color: "#849884",
    textColor: "#ffffff",
    title: "穩定拆解",
    meaning: "把大任務拆成可驗證的小步驟，讓智能工具每一次輸出都有明確方向。",
  },
  {
    name: "煙藍",
    color: "#73889c",
    textColor: "#ffffff",
    title: "資料感知",
    meaning: "先看清脈絡、限制與素材，再決定模型、提示與工作流程。",
  },
  {
    name: "陶土",
    color: "#b79177",
    textColor: "#ffffff",
    title: "快速原型",
    meaning: "用最短路徑做出可試玩的版本，讓想法早一點碰到真實回饋。",
  },
  {
    name: "灰玫瑰",
    color: "#a99090",
    textColor: "#ffffff",
    title: "同理體驗",
    meaning: "從學生或使用者的角度設計互動，讓工具不只聰明，也好理解。",
  },
  {
    name: "石墨綠",
    color: "#5f6e68",
    textColor: "#ffffff",
    title: "自動化流程",
    meaning: "把重複步驟交給系統處理，保留人的判斷力在關鍵選擇上。",
  },
  {
    name: "芥末金",
    color: "#b9a163",
    textColor: "#ffffff",
    title: "評估迭代",
    meaning: "每次產出都要有檢查標準，讓修正不靠感覺，而是靠證據。",
  },
  {
    name: "粉灰紫",
    color: "#9d91a3",
    textColor: "#ffffff",
    title: "創意轉譯",
    meaning: "把抽象概念轉成畫面、規則、故事或任務，讓學習變得可操作。",
  },
  {
    name: "暖米灰",
    color: "#aaa190",
    textColor: "#ffffff",
    title: "協作溝通",
    meaning: "把需求、限制與回饋說清楚，讓人與智能工具形成順暢接力。",
  },
  {
    name: "霧松黑",
    color: "#56615d",
    textColor: "#ffffff",
    title: "安全邊界",
    meaning: "辨識風險、保護資料、尊重來源，讓智能開發能被安心使用。",
  },
];

const handShadowItems = [
  {
    answer: "松鼠",
    shadow: "./assets/手影/松鼠-剪影.png",
    gesture: "./assets/手勢/松鼠-手勢.png",
  },
  {
    answer: "印地安",
    shadow: "./assets/手影/印地安-剪影.png",
    gesture: "./assets/手勢/印地安-手勢.png",
  },
  {
    answer: "蝸牛",
    shadow: "./assets/手影/蝸牛-剪影.png",
    gesture: "./assets/手勢/蝸牛-手勢.png",
  },
  {
    answer: "鹿",
    shadow: "./assets/手影/鹿-剪影.png",
    gesture: "./assets/手勢/鹿-手勢.png",
  },
  {
    answer: "螃蟹",
    shadow: "./assets/手影/螃蟹-剪影.png",
    gesture: "./assets/手勢/螃蟹-手勢.png",
  },
  {
    answer: "兔子",
    shadow: "./assets/手影/兔子-剪影.png",
    gesture: "./assets/手勢/兔-手勢.png",
  },
  {
    answer: "鴿子",
    shadow: "./assets/手影/鴿子-剪影.png",
    gesture: "./assets/手勢/鴿子-手勢.png",
  },
  {
    answer: "狗",
    shadow: "./assets/手影/狗-剪影.png",
    gesture: "./assets/手勢/狗-手勢.png",
  },
  {
    answer: "鱷魚",
    shadow: "./assets/手影/鱷魚-剪影.png",
    gesture: "./assets/手勢/鱷魚-手勢.png",
  },
];

const defaultBombTopics = [
  "會讓人想到春天的東西",
  "可以在廚房看到的物品",
  "適合送禮的東西",
  "圓形的食物",
  "需要兩個人一起做的事",
  "會發出聲音的東西",
  "搭車時會看到的景物",
  "讓人放鬆的活動",
];

const defaultBombPenalties = [
  "分享一個今天想到的好點子",
  "用三個詞形容剛剛的題目",
  "做一個簡短的手勢讓大家猜",
  "說出一個和題目相反的答案",
  "邀請下一位同學接續回答",
];

const defaultCountdownQuestions = [
  "水果名稱",
  "交通工具",
  "日常用品",
  "節慶活動",
  "可以運動的地方",
  "常見職業",
  "會用到電的物品",
  "讓人開心的事情",
];

const cityGuessItems = [
  {
    answer: "臺北市",
    region: "north",
    note: "臺北是臺灣首都圈核心，常被想到捷運、101 與豐富的藝文場館。",
    clues: [
      { icon: "樓", label: "101" },
      { icon: "捷", label: "捷運" },
      { icon: "館", label: "故宮" },
      { icon: "夜", label: "夜市" },
    ],
  },
  {
    answer: "新北市",
    region: "north",
    note: "新北環繞臺北市，山海景點很多，九份、淡水、平溪都很有代表性。",
    clues: [
      { icon: "山", label: "九份" },
      { icon: "河", label: "淡水" },
      { icon: "燈", label: "平溪" },
      { icon: "橋", label: "大橋" },
    ],
  },
  {
    answer: "桃園市",
    region: "north",
    note: "桃園有國際機場，也是北臺灣重要交通與產業城市。",
    clues: [
      { icon: "機", label: "機場" },
      { icon: "埤", label: "埤塘" },
      { icon: "客", label: "客庄" },
      { icon: "花", label: "花彩" },
    ],
  },
  {
    answer: "新竹市",
    region: "north",
    note: "新竹常被稱作風城，也以科學園區、玻璃工藝與米粉聞名。",
    clues: [
      { icon: "風", label: "風城" },
      { icon: "晶", label: "科學園區" },
      { icon: "粉", label: "米粉" },
      { icon: "玻", label: "玻璃" },
    ],
  },
  {
    answer: "臺中市",
    region: "central",
    note: "臺中位於中臺灣，歌劇院、高美濕地與珍珠奶茶都很常被聯想到。",
    clues: [
      { icon: "劇", label: "歌劇院" },
      { icon: "濕", label: "高美濕地" },
      { icon: "茶", label: "珍奶" },
      { icon: "花", label: "花博" },
    ],
  },
  {
    answer: "彰化縣",
    region: "central",
    note: "彰化以八卦山大佛、鹿港老街與扇形車庫等景點知名。",
    clues: [
      { icon: "佛", label: "大佛" },
      { icon: "鹿", label: "鹿港" },
      { icon: "扇", label: "車庫" },
      { icon: "肉", label: "肉圓" },
    ],
  },
  {
    answer: "南投縣",
    region: "central",
    note: "南投是臺灣唯一不靠海的縣，日月潭與清境農場都很有代表性。",
    clues: [
      { icon: "湖", label: "日月潭" },
      { icon: "羊", label: "清境" },
      { icon: "茶", label: "茶園" },
      { icon: "峰", label: "合歡山" },
    ],
  },
  {
    answer: "嘉義縣",
    region: "south",
    note: "嘉義縣有阿里山森林鐵路、日出與茶園，也是很經典的山林印象。",
    clues: [
      { icon: "山", label: "阿里山" },
      { icon: "鐵", label: "森林鐵路" },
      { icon: "日", label: "日出" },
      { icon: "茶", label: "高山茶" },
    ],
  },
  {
    answer: "臺南市",
    region: "south",
    note: "臺南是古都，以古蹟、小吃、鹽田與豐富廟宇文化聞名。",
    clues: [
      { icon: "城", label: "古都" },
      { icon: "吃", label: "小吃" },
      { icon: "鹽", label: "鹽田" },
      { icon: "廟", label: "廟宇" },
    ],
  },
  {
    answer: "高雄市",
    region: "south",
    note: "高雄是南臺灣大城，港口、捷運、愛河與駁二是常見線索。",
    clues: [
      { icon: "港", label: "港口" },
      { icon: "河", label: "愛河" },
      { icon: "駁", label: "駁二" },
      { icon: "捷", label: "捷運" },
    ],
  },
  {
    answer: "屏東縣",
    region: "south",
    note: "屏東位在臺灣最南端，墾丁、海洋、熱帶水果與落山風都很有代表性。",
    clues: [
      { icon: "海", label: "墾丁" },
      { icon: "果", label: "水果" },
      { icon: "燈", label: "鵝鑾鼻" },
      { icon: "風", label: "落山風" },
    ],
  },
  {
    answer: "宜蘭縣",
    region: "east",
    note: "宜蘭以蘭陽平原、溫泉、童玩節與龜山島等特色受到喜愛。",
    clues: [
      { icon: "泉", label: "溫泉" },
      { icon: "龜", label: "龜山島" },
      { icon: "雨", label: "多雨" },
      { icon: "玩", label: "童玩節" },
    ],
  },
  {
    answer: "花蓮縣",
    region: "east",
    note: "花蓮有壯麗山海景觀，太魯閣、七星潭與石材都是常見印象。",
    clues: [
      { icon: "峽", label: "太魯閣" },
      { icon: "海", label: "七星潭" },
      { icon: "石", label: "石材" },
      { icon: "山", label: "山海" },
    ],
  },
  {
    answer: "臺東縣",
    region: "east",
    note: "臺東有熱氣球、稻田、海岸與多元原民文化，是東臺灣慢活代表。",
    clues: [
      { icon: "球", label: "熱氣球" },
      { icon: "稻", label: "池上" },
      { icon: "浪", label: "海岸" },
      { icon: "舞", label: "原民文化" },
    ],
  },
  {
    answer: "澎湖縣",
    region: "island",
    note: "澎湖以海島風景、花火節、玄武岩與跨海大橋聞名。",
    clues: [
      { icon: "島", label: "群島" },
      { icon: "火", label: "花火節" },
      { icon: "岩", label: "玄武岩" },
      { icon: "橋", label: "跨海大橋" },
    ],
  },
  {
    answer: "金門縣",
    region: "island",
    note: "金門有戰地文化、風獅爺、高粱與閩南聚落等特色。",
    clues: [
      { icon: "堡", label: "戰地" },
      { icon: "獅", label: "風獅爺" },
      { icon: "酒", label: "高粱" },
      { icon: "厝", label: "古厝" },
    ],
  },
];

const themedGuessItems = [
  {
    answer: "長頸鹿",
    theme: "animal",
    note: "長頸鹿有很長的脖子，常用來吃高處的樹葉，也是辨識度很高的草食動物。",
    clues: [
      { icon: "頸", label: "長脖子" },
      { icon: "斑", label: "斑紋" },
      { icon: "葉", label: "吃樹葉" },
      { icon: "高", label: "很高" },
    ],
  },
  {
    answer: "企鵝",
    theme: "animal",
    note: "企鵝不會飛，但很會游泳，黑白外型與搖擺走路是常見特色。",
    clues: [
      { icon: "冰", label: "寒冷" },
      { icon: "黑", label: "黑白" },
      { icon: "游", label: "游泳" },
      { icon: "搖", label: "搖擺走路" },
    ],
  },
  {
    answer: "蝴蝶",
    theme: "animal",
    note: "蝴蝶有漂亮翅膀，從毛毛蟲蛻變而來，也常出現在花叢間。",
    clues: [
      { icon: "翼", label: "翅膀" },
      { icon: "花", label: "花叢" },
      { icon: "變", label: "蛻變" },
      { icon: "粉", label: "鱗粉" },
    ],
  },
  {
    answer: "海豚",
    theme: "animal",
    note: "海豚生活在海中，會跳出水面，也常被認為聰明且善於互動。",
    clues: [
      { icon: "海", label: "海洋" },
      { icon: "躍", label: "跳躍" },
      { icon: "聲", label: "聲音溝通" },
      { icon: "智", label: "聰明" },
    ],
  },
  {
    answer: "醫師",
    theme: "job",
    note: "醫師會診斷疾病、提供治療建議，也常和護理師及其他專業人員合作。",
    clues: [
      { icon: "聽", label: "聽診器" },
      { icon: "診", label: "診斷" },
      { icon: "院", label: "醫院" },
      { icon: "藥", label: "藥物" },
    ],
  },
  {
    answer: "廚師",
    theme: "job",
    note: "廚師負責料理食物，常使用鍋具、刀具和各種食材創造菜色。",
    clues: [
      { icon: "鍋", label: "鍋具" },
      { icon: "刀", label: "刀工" },
      { icon: "菜", label: "食材" },
      { icon: "香", label: "香味" },
    ],
  },
  {
    answer: "消防員",
    theme: "job",
    note: "消防員會救災、救護與滅火，需要快速反應並保護民眾安全。",
    clues: [
      { icon: "火", label: "滅火" },
      { icon: "車", label: "消防車" },
      { icon: "帽", label: "安全帽" },
      { icon: "救", label: "救援" },
    ],
  },
  {
    answer: "老師",
    theme: "job",
    note: "老師陪伴學生學習，會設計課程、引導討論並協助理解知識。",
    clues: [
      { icon: "書", label: "課本" },
      { icon: "板", label: "黑板" },
      { icon: "問", label: "提問" },
      { icon: "學", label: "學習" },
    ],
  },
  {
    answer: "雨傘",
    theme: "object",
    note: "雨傘可以遮雨也能遮陽，是日常生活中很常見的外出用品。",
    clues: [
      { icon: "雨", label: "下雨" },
      { icon: "遮", label: "遮蔽" },
      { icon: "柄", label: "握把" },
      { icon: "開", label: "撐開" },
    ],
  },
  {
    answer: "鬧鐘",
    theme: "object",
    note: "鬧鐘會在設定時間提醒人起床或做事，是時間管理的日常物品。",
    clues: [
      { icon: "時", label: "時間" },
      { icon: "鈴", label: "鈴聲" },
      { icon: "醒", label: "起床" },
      { icon: "設", label: "設定" },
    ],
  },
  {
    answer: "鑰匙",
    theme: "object",
    note: "鑰匙用來開鎖，常和門、家、保管與安全感連在一起。",
    clues: [
      { icon: "門", label: "開門" },
      { icon: "鎖", label: "鎖孔" },
      { icon: "家", label: "回家" },
      { icon: "串", label: "鑰匙圈" },
    ],
  },
  {
    answer: "眼鏡",
    theme: "object",
    note: "眼鏡能幫助看得更清楚，也可以保護眼睛或成為造型配件。",
    clues: [
      { icon: "眼", label: "眼睛" },
      { icon: "鏡", label: "鏡片" },
      { icon: "清", label: "清楚" },
      { icon: "框", label: "鏡框" },
    ],
  },
];

const state = {
  colorCards: loadColorCards(),
  selectedColorIndex: 0,
  uploadedImages: [],
  deck: [],
  firstCard: null,
  secondCard: null,
  lockBoard: false,
  isPeeking: false,
  peekTimerId: null,
  peekIntervalId: null,
  matches: 0,
  attempts: 0,
  shadowCurrent: null,
  shadowScore: 0,
  shadowRound: 0,
  shadowAnswered: false,
  bombTopic: "",
  bombTimerId: null,
  bombIntervalId: null,
  bombRunning: false,
  bombDuration: 0,
  bombStartedAt: 0,
  countdownQuestions: [],
  countdownQueue: [],
  countdownSeenCount: 0,
  countdownDuration: 15,
  countdownTimerId: null,
  countdownStartedAt: 0,
  countdownRunning: false,
  countdownCurrentQuestion: "",
  countdownTargetNumber: 5,
  cityCurrent: null,
  cityScore: 0,
  cityRound: 0,
  cityAnswered: false,
  customGuessRaw: loadCustomGuessText(),
  customGuessItems: [],
};

const tabs = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".game-panel");
const colorGrid = document.querySelector("#colorGrid");
const resetColors = document.querySelector("#resetColors");
const toggleColorSettings = document.querySelector("#toggleColorSettings");
const colorSettings = document.querySelector("#colorSettings");
const colorSaveState = document.querySelector("#colorSaveState");
const colorCardPicker = document.querySelector("#colorCardPicker");
const cardNameInput = document.querySelector("#cardNameInput");
const cardColorInput = document.querySelector("#cardColorInput");
const cardHexInput = document.querySelector("#cardHexInput");
const cardTextColorInput = document.querySelector("#cardTextColorInput");
const cardTextHexInput = document.querySelector("#cardTextHexInput");
const cardTitleInput = document.querySelector("#cardTitleInput");
const cardMeaningInput = document.querySelector("#cardMeaningInput");
const colorSettingsForm = document.querySelector("#colorSettingsForm");
const restoreDefaultColors = document.querySelector("#restoreDefaultColors");
const closeColorSettings = document.querySelector("#closeColorSettings");
const imageUpload = document.querySelector("#imageUpload");
const imageCount = document.querySelector("#imageCount");
const matchCount = document.querySelector("#matchCount");
const pairRange = document.querySelector("#pairRange");
const pairOutput = document.querySelector("#pairOutput");
const previewGrid = document.querySelector("#previewGrid");
const startMemory = document.querySelector("#startMemory");
const peekMemory = document.querySelector("#peekMemory");
const resetMemory = document.querySelector("#resetMemory");
const memoryBoard = document.querySelector("#memoryBoard");
const memoryStatus = document.querySelector("#memoryStatus");
const attemptCount = document.querySelector("#attemptCount");
const nextShadowQuestion = document.querySelector("#nextShadowQuestion");
const resetShadowGame = document.querySelector("#resetShadowGame");
const shadowFlipCard = document.querySelector("#shadowFlipCard");
const shadowImage = document.querySelector("#shadowImage");
const shadowPrompt = document.querySelector("#shadowPrompt");
const gestureImage = document.querySelector("#gestureImage");
const gestureCaption = document.querySelector("#gestureCaption");
const shadowOptions = document.querySelector("#shadowOptions");
const shadowFeedback = document.querySelector("#shadowFeedback");
const shadowScore = document.querySelector("#shadowScore");
const shadowRound = document.querySelector("#shadowRound");
const bombNewTopic = document.querySelector("#bombNewTopic");
const bombReset = document.querySelector("#bombReset");
const bombStage = document.querySelector("#bombStage");
const bombStatus = document.querySelector("#bombStatus");
const bombDebugTime = document.querySelector("#bombDebugTime");
const bombTopicText = document.querySelector("#bombTopicText");
const bombStart = document.querySelector("#bombStart");
const bombResult = document.querySelector("#bombResult");
const bombPenaltyText = document.querySelector("#bombPenaltyText");
const bombTopicsInput = document.querySelector("#bombTopicsInput");
const bombMinInput = document.querySelector("#bombMinInput");
const bombMaxInput = document.querySelector("#bombMaxInput");
const bombPenaltiesInput = document.querySelector("#bombPenaltiesInput");
const countdownStartSet = document.querySelector("#countdownStartSet");
const countdownResetAll = document.querySelector("#countdownResetAll");
const countdownQuestionsInput = document.querySelector("#countdownQuestionsInput");
const countdownSecondsInput = document.querySelector("#countdownSecondsInput");
const countdownOrderInput = document.querySelector("#countdownOrderInput");
const countdownTargetMin = document.querySelector("#countdownTargetMin");
const countdownTargetMax = document.querySelector("#countdownTargetMax");
const countdownRepeatInput = document.querySelector("#countdownRepeatInput");
const countdownStage = document.querySelector("#countdownStage");
const countdownProgress = document.querySelector("#countdownProgress");
const countdownTimer = document.querySelector("#countdownTimer");
const countdownMeterFill = document.querySelector("#countdownMeterFill");
const countdownQuestion = document.querySelector("#countdownQuestion");
const countdownTarget = document.querySelector("#countdownTarget");
const countdownRun = document.querySelector("#countdownRun");
const countdownDone = document.querySelector("#countdownDone");
const countdownNext = document.querySelector("#countdownNext");
const countdownRetry = document.querySelector("#countdownRetry");
const countdownFeedback = document.querySelector("#countdownFeedback");
const nextCityQuestion = document.querySelector("#nextCityQuestion");
const resetCityGuess = document.querySelector("#resetCityGuess");
const cityRegionLabel = document.querySelector("#cityRegionLabel");
const cityRoundLabel = document.querySelector("#cityRoundLabel");
const cityMysteryTitle = document.querySelector("#cityMysteryTitle");
const cityHintText = document.querySelector("#cityHintText");
const cityClues = document.querySelector("#cityClues");
const cityReveal = document.querySelector("#cityReveal");
const cityAnswerName = document.querySelector("#cityAnswerName");
const cityAnswerNote = document.querySelector("#cityAnswerNote");
const cityScore = document.querySelector("#cityScore");
const cityRound = document.querySelector("#cityRound");
const cityRegionSelect = document.querySelector("#cityRegionSelect");
const customGuessInput = document.querySelector("#customGuessInput");
const saveCustomGuess = document.querySelector("#saveCustomGuess");
const clearCustomGuess = document.querySelector("#clearCustomGuess");
const customGuessStatus = document.querySelector("#customGuessStatus");
const cityOptions = document.querySelector("#cityOptions");
const cityFeedback = document.querySelector("#cityFeedback");

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadColorCards() {
  try {
    const saved = JSON.parse(localStorage.getItem(COLOR_STORAGE_KEY));
    if (!Array.isArray(saved)) {
      return cloneDefaultColors();
    }

    return defaultColorCards.map((fallback, index) => sanitizeColorCard(saved[index], fallback));
  } catch {
    return cloneDefaultColors();
  }
}

function loadCustomGuessText() {
  try {
    return localStorage.getItem(CUSTOM_GUESS_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function cloneDefaultColors() {
  return defaultColorCards.map((card) => ({ ...card }));
}

function sanitizeColorCard(card, fallback) {
  return {
    name: sanitizeText(card?.name, fallback.name),
    color: normalizeHex(card?.color) ?? fallback.color,
    textColor: normalizeHex(card?.textColor) ?? fallback.textColor,
    title: sanitizeText(card?.title, fallback.title),
    meaning: sanitizeText(card?.meaning, fallback.meaning),
  };
}

function sanitizeText(value, fallback) {
  const text = String(value ?? "").trim();
  return text || fallback;
}

function normalizeHex(value) {
  const text = String(value ?? "").trim();
  const withHash = text.startsWith("#") ? text : `#${text}`;
  return /^#[0-9a-fA-F]{6}$/.test(withHash) ? withHash.toLowerCase() : null;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === target));
  });
});

function renderColorGrid() {
  colorGrid.innerHTML = "";

  state.colorCards.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "flip-card";
    article.style.setProperty("--card-color", card.color);
    article.style.setProperty("--card-text-color", card.textColor);

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${card.name}：${card.title}`);

    const inner = document.createElement("div");
    inner.className = "flip-inner";

    const front = document.createElement("div");
    front.className = "card-face card-front";

    const frontNumber = document.createElement("span");
    frontNumber.className = "card-number";
    frontNumber.textContent = String(index + 1).padStart(2, "0");

    const colorName = document.createElement("strong");
    colorName.className = "color-name";
    colorName.textContent = card.name;

    const back = document.createElement("div");
    back.className = "card-face card-back";

    const backContent = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "meaning-title";
    title.textContent = card.title;

    const meaning = document.createElement("p");
    meaning.className = "meaning-text";
    meaning.textContent = card.meaning;

    const backNumber = document.createElement("span");
    backNumber.className = "card-number";
    backNumber.textContent = card.name;
    backNumber.style.color = card.textColor;

    front.append(frontNumber, colorName);
    backContent.append(title, meaning);
    back.append(backContent, backNumber);
    inner.append(front, back);
    button.append(inner);

    button.addEventListener("click", () => {
      article.classList.toggle("flipped");
    });

    article.append(button);
    colorGrid.append(article);
  });
}

function renderColorSettings() {
  colorCardPicker.innerHTML = "";

  state.colorCards.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "picker-card";
    button.type = "button";
    button.style.setProperty("--picker-color", card.color);
    button.style.color = card.textColor;
    button.classList.toggle("active", index === state.selectedColorIndex);
    button.setAttribute("aria-label", `編輯第 ${index + 1} 張：${card.name}`);

    const number = document.createElement("span");
    number.className = "picker-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const name = document.createElement("span");
    name.className = "picker-name";
    name.textContent = card.name;

    button.append(number, name);
    button.addEventListener("click", () => {
      state.selectedColorIndex = index;
      renderColorSettings();
      syncColorForm();
    });

    colorCardPicker.append(button);
  });
}

function syncColorForm() {
  const card = state.colorCards[state.selectedColorIndex];
  cardNameInput.value = card.name;
  cardColorInput.value = card.color;
  cardHexInput.value = card.color;
  cardTextColorInput.value = card.textColor;
  cardTextHexInput.value = card.textColor;
  cardTitleInput.value = card.title;
  cardMeaningInput.value = card.meaning;
}

function updateSelectedColorCard(changes) {
  const current = state.colorCards[state.selectedColorIndex];
  state.colorCards[state.selectedColorIndex] = {
    ...current,
    ...changes,
  };
  renderColorGrid();
  renderColorSettings();
  saveColorCards();
}

function saveColorCards() {
  try {
    localStorage.setItem(COLOR_STORAGE_KEY, JSON.stringify(state.colorCards));
    colorSaveState.textContent = "已自動儲存";
  } catch {
    colorSaveState.textContent = "本次無法儲存";
  }
  window.clearTimeout(saveColorCards.timeoutId);
  saveColorCards.timeoutId = window.setTimeout(() => {
    colorSaveState.textContent = "自動儲存";
  }, 1100);
}

function setSettingsOpen(isOpen) {
  colorSettings.hidden = !isOpen;
  toggleColorSettings.setAttribute("aria-expanded", String(isOpen));
  toggleColorSettings.classList.toggle("active", isOpen);
  if (isOpen) {
    renderColorSettings();
    syncColorForm();
  }
}

function resetColorCards() {
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.classList.remove("flipped");
  });
}

function restoreDefaultColorCards() {
  state.colorCards = cloneDefaultColors();
  state.selectedColorIndex = 0;
  try {
    localStorage.removeItem(COLOR_STORAGE_KEY);
  } catch {
    colorSaveState.textContent = "已恢復，未寫入儲存";
  }
  renderColorGrid();
  renderColorSettings();
  syncColorForm();
  colorSaveState.textContent = "已恢復預設";
}

function updateSetup() {
  const total = state.uploadedImages.length;
  const maxPairs = Math.max(2, Math.min(12, total));

  pairRange.max = maxPairs;
  pairRange.min = Math.min(2, maxPairs);

  if (total < 2) {
    pairRange.value = 2;
    pairRange.disabled = true;
    startMemory.disabled = true;
    memoryStatus.textContent = "加入至少 2 張圖片";
  } else {
    pairRange.disabled = false;
    if (Number(pairRange.value) > maxPairs) {
      pairRange.value = maxPairs;
    }
    startMemory.disabled = false;
    memoryStatus.textContent = `${pairRange.value} 組圖卡待開始`;
  }

  imageCount.textContent = total;
  pairOutput.value = pairRange.value;
  renderPreviews();
  updatePeekButton();
}

function renderPreviews() {
  previewGrid.innerHTML = "";

  if (!state.uploadedImages.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "等待圖片";
    previewGrid.append(empty);
    return;
  }

  state.uploadedImages.forEach((image, index) => {
    const card = document.createElement("div");
    card.className = "preview-card";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.name;

    const remove = document.createElement("button");
    remove.className = "remove-button";
    remove.type = "button";
    remove.setAttribute("aria-label", `移除 ${image.name}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => removeImage(index));

    card.append(img, remove);
    previewGrid.append(card);
  });
}

function removeImage(index) {
  const [removed] = state.uploadedImages.splice(index, 1);
  if (removed?.src) {
    URL.revokeObjectURL(removed.src);
  }
  resetBoardOnly();
  updateSetup();
}

function loadImages(files) {
  const images = Array.from(files)
    .filter((file) => file.type.startsWith("image/"))
    .map((file) => ({
      id: createId(),
      name: file.name,
      src: URL.createObjectURL(file),
    }));

  state.uploadedImages.push(...images);
  pairRange.value = Math.min(12, state.uploadedImages.length);
  imageUpload.value = "";
  resetBoardOnly();
  updateSetup();
}

function buildDeck() {
  const pairTotal = Math.min(Number(pairRange.value), state.uploadedImages.length);
  const selected = shuffle([...state.uploadedImages]).slice(0, pairTotal);

  state.deck = shuffle(
    selected.flatMap((image) => [
      { ...image, cardId: createId(), pairId: image.id },
      { ...image, cardId: createId(), pairId: image.id },
    ]),
  );
}

function renderMemoryBoard() {
  memoryBoard.innerHTML = "";

  if (!state.deck.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "圖卡區";
    memoryBoard.append(empty);
    return;
  }

  state.deck.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "memory-card";
    article.dataset.cardId = card.cardId;
    article.dataset.pairId = card.pairId;

    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `第 ${index + 1} 張圖卡`);

    const inner = document.createElement("div");
    inner.className = "memory-inner";

    const front = document.createElement("div");
    front.className = "memory-face memory-front";

    const number = document.createElement("span");
    number.textContent = index + 1;

    const back = document.createElement("div");
    back.className = "memory-face memory-back";

    const img = document.createElement("img");
    img.src = card.src;
    img.alt = card.name;

    front.append(number);
    back.append(img);
    inner.append(front, back);
    button.append(inner);

    button.addEventListener("click", () => revealCard(article));
    article.append(button);
    memoryBoard.append(article);
  });

  updatePeekButton();
}

function revealCard(card) {
  if (
    state.lockBoard ||
    state.isPeeking ||
    card.classList.contains("revealed") ||
    card.classList.contains("matched")
  ) {
    return;
  }

  card.classList.add("revealed");

  if (!state.firstCard) {
    state.firstCard = card;
    return;
  }

  state.secondCard = card;
  state.lockBoard = true;
  state.attempts += 1;
  attemptCount.textContent = `${state.attempts} 次翻牌`;

  const isMatch = state.firstCard.dataset.pairId === state.secondCard.dataset.pairId;
  window.setTimeout(() => {
    isMatch ? markMatched() : hidePair();
  }, isMatch ? 360 : 850);
}

function markMatched() {
  state.firstCard.classList.add("matched");
  state.secondCard.classList.add("matched");
  state.matches += 1;
  matchCount.textContent = state.matches;

  clearSelection();

  const pairTotal = state.deck.length / 2;
  if (state.matches === pairTotal) {
    memoryStatus.textContent = `完成 ${pairTotal} 組配對`;
  }
  updatePeekButton();
}

function hidePair() {
  state.firstCard.classList.remove("revealed");
  state.secondCard.classList.remove("revealed");
  clearSelection();
}

function clearSelection() {
  state.firstCard = null;
  state.secondCard = null;
  state.lockBoard = false;
}

function startGame() {
  stopPeek();
  resetBoardOnly();
  buildDeck();
  renderMemoryBoard();
  memoryStatus.textContent = `${state.deck.length / 2} 組圖卡進行中`;
  updatePeekButton();
}

function resetBoardOnly() {
  stopPeek();
  state.deck = [];
  state.firstCard = null;
  state.secondCard = null;
  state.lockBoard = false;
  state.matches = 0;
  state.attempts = 0;
  matchCount.textContent = "0";
  attemptCount.textContent = "0 次翻牌";
  renderMemoryBoard();
  updatePeekButton();
}

function resetMemoryGame() {
  resetBoardOnly();
  updateSetup();
}

function peekAllCards() {
  if (!state.deck.length || state.isPeeking || state.matches === state.deck.length / 2) {
    return;
  }

  let remainingSeconds = 10;
  state.isPeeking = true;
  state.lockBoard = true;
  state.firstCard = null;
  state.secondCard = null;
  updatePeekButton(remainingSeconds);

  document.querySelectorAll(".memory-card:not(.matched)").forEach((card) => {
    card.classList.add("revealed");
  });

  memoryStatus.textContent = `偷看時間：${remainingSeconds} 秒`;

  state.peekIntervalId = window.setInterval(() => {
    remainingSeconds -= 1;
    memoryStatus.textContent = `偷看時間：${remainingSeconds} 秒`;
    updatePeekButton(remainingSeconds);
  }, 1000);

  state.peekTimerId = window.setTimeout(() => {
    document.querySelectorAll(".memory-card:not(.matched)").forEach((card) => {
      card.classList.remove("revealed");
    });
    stopPeek();
    memoryStatus.textContent = `${state.deck.length / 2} 組圖卡進行中`;
  }, 10000);
}

function stopPeek() {
  window.clearTimeout(state.peekTimerId);
  window.clearInterval(state.peekIntervalId);
  state.peekTimerId = null;
  state.peekIntervalId = null;
  state.isPeeking = false;
  state.lockBoard = false;
  updatePeekButton();
}

function updatePeekButton(remainingSeconds = 10) {
  const hasActiveDeck = state.deck.length > 0;
  const isComplete = hasActiveDeck && state.matches === state.deck.length / 2;
  peekMemory.disabled = !hasActiveDeck || state.isPeeking || isComplete;
  peekMemory.textContent = state.isPeeking ? `偷看 ${remainingSeconds} 秒` : "偷看 10 秒";
}

function showNextShadowQuestion() {
  const previousAnswer = state.shadowCurrent?.answer;
  const candidates = handShadowItems.filter((item) => item.answer !== previousAnswer);
  state.shadowCurrent = shuffle(candidates.length ? candidates : handShadowItems)[0];
  state.shadowRound += 1;
  state.shadowAnswered = false;

  renderShadowQuestion();
}

function renderShadowQuestion() {
  const current = state.shadowCurrent;
  const options = buildShadowOptions(current.answer);

  shadowFlipCard.classList.remove("revealed");
  shadowImage.src = current.shadow;
  shadowImage.alt = `${current.answer}手影`;
  shadowPrompt.textContent = "這是什麼手影？";
  gestureImage.src = current.gesture;
  gestureImage.alt = `${current.answer}手勢`;
  gestureCaption.textContent = `${current.answer}的手勢`;
  shadowScore.textContent = state.shadowScore;
  shadowRound.textContent = state.shadowRound;
  shadowFeedback.textContent = "請選一個答案";

  shadowOptions.innerHTML = "";
  options.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkShadowAnswer(button, answer));
    shadowOptions.append(button);
  });
}

function buildShadowOptions(correctAnswer) {
  const distractors = handShadowItems
    .filter((item) => item.answer !== correctAnswer)
    .map((item) => item.answer);
  return shuffle([correctAnswer, ...shuffle(distractors).slice(0, 2)]);
}

function checkShadowAnswer(button, answer) {
  if (state.shadowAnswered) {
    return;
  }

  if (answer !== state.shadowCurrent.answer) {
    button.classList.add("wrong");
    button.disabled = true;
    shadowFeedback.textContent = "再猜一次";
    return;
  }

  state.shadowAnswered = true;
  state.shadowScore += 1;
  shadowScore.textContent = state.shadowScore;
  shadowFeedback.textContent = "答對了";
  shadowFlipCard.classList.add("revealed");

  document.querySelectorAll(".answer-button").forEach((item) => {
    item.disabled = true;
    item.classList.toggle("correct", item.textContent === answer);
  });
}

function resetHandShadowGame() {
  state.shadowScore = 0;
  state.shadowRound = 0;
  showNextShadowQuestion();
}

function initBombGame() {
  bombTopicsInput.value = defaultBombTopics.join("\n");
  bombPenaltiesInput.value = defaultBombPenalties.join("\n");
  resetBombGame();
}

function getFlexibleList(value, fallback) {
  const items = String(value ?? "")
    .split(/[\n,，]+/)
    .map((item) => item.trim())
    .filter(Boolean);
  return items.length ? items : fallback;
}

function getNumber(value, fallback, min, max = Number.POSITIVE_INFINITY) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, number));
}

function randomInt(min, max) {
  const floorMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - floorMin + 1)) + floorMin;
}

function pickBombTopic() {
  if (state.bombRunning) {
    return;
  }

  const topics = getFlexibleList(bombTopicsInput.value, defaultBombTopics);
  state.bombTopic = shuffle(topics)[0];
  bombTopicText.textContent = state.bombTopic;
  bombStatus.textContent = "題目準備好了";
  bombDebugTime.textContent = "-- 秒";
  bombResult.hidden = true;
  bombStage.classList.remove("running", "urgent", "exploded");
  bombStart.disabled = false;
}

function startBombGame() {
  if (state.bombRunning) {
    return;
  }

  if (!state.bombTopic) {
    pickBombTopic();
  }

  const minSeconds = getNumber(bombMinInput.value, 15, 3);
  const maxSeconds = Math.max(getNumber(bombMaxInput.value, 35, 4), minSeconds);
  state.bombDuration = randomInt(minSeconds, maxSeconds) * 1000;
  state.bombStartedAt = Date.now();
  state.bombRunning = true;

  bombResult.hidden = true;
  bombStart.disabled = true;
  bombNewTopic.disabled = true;
  bombStatus.textContent = "炸彈倒數中";
  bombStage.classList.remove("exploded");
  bombStage.classList.add("running");
  updateBombTimer();

  state.bombIntervalId = window.setInterval(updateBombTimer, 100);
  state.bombTimerId = window.setTimeout(explodeBomb, state.bombDuration);
}

function updateBombTimer() {
  const elapsed = Date.now() - state.bombStartedAt;
  const remaining = Math.max(0, state.bombDuration - elapsed);
  const remainingSeconds = Math.ceil(remaining / 1000);
  bombDebugTime.textContent = `${remainingSeconds} 秒`;
  bombStage.classList.toggle("urgent", state.bombRunning && remainingSeconds <= 5);
}

function explodeBomb() {
  if (!state.bombRunning) {
    return;
  }

  window.clearTimeout(state.bombTimerId);
  window.clearInterval(state.bombIntervalId);
  state.bombTimerId = null;
  state.bombIntervalId = null;
  state.bombRunning = false;

  const penalties = getFlexibleList(bombPenaltiesInput.value, defaultBombPenalties);
  bombPenaltyText.textContent = shuffle(penalties)[0];
  bombStatus.textContent = "Boom";
  bombDebugTime.textContent = "0 秒";
  bombResult.hidden = false;
  bombStage.classList.remove("running", "urgent");
  bombStage.classList.add("exploded");
  bombNewTopic.disabled = false;
}

function resetBombGame() {
  window.clearTimeout(state.bombTimerId);
  window.clearInterval(state.bombIntervalId);
  state.bombTimerId = null;
  state.bombIntervalId = null;
  state.bombRunning = false;
  state.bombTopic = "";
  bombTopicText.textContent = "請點擊隨機出題";
  bombStatus.textContent = "Ready";
  bombDebugTime.textContent = "-- 秒";
  bombResult.hidden = true;
  bombStart.disabled = true;
  bombNewTopic.disabled = false;
  bombStage.classList.remove("running", "urgent", "exploded");
}

function initCountdownGame() {
  countdownQuestionsInput.value = defaultCountdownQuestions.join("\n");
  resetCountdownAll();
}

function prepareCountdownChallenge() {
  stopCountdownTimer();
  state.countdownQuestions = getFlexibleList(countdownQuestionsInput.value, defaultCountdownQuestions);
  state.countdownQueue = buildCountdownQueue();
  state.countdownSeenCount = 0;
  countdownFeedback.textContent = "題庫已準備好";
  showNextCountdownQuestion();
}

function buildCountdownQueue() {
  const indices = state.countdownQuestions.map((_, index) => index);
  return countdownOrderInput.value === "random" ? shuffle(indices) : indices;
}

function showNextCountdownQuestion() {
  stopCountdownTimer();

  if (!state.countdownQueue.length) {
    if (!countdownRepeatInput.checked && state.countdownSeenCount > 0) {
      finishCountdownSet();
      return;
    }
    state.countdownQueue = buildCountdownQueue();
  }

  const nextIndex = countdownOrderInput.value === "random" ? state.countdownQueue.pop() : state.countdownQueue.shift();
  state.countdownCurrentQuestion = state.countdownQuestions[nextIndex];
  state.countdownSeenCount += 1;
  state.countdownDuration = getNumber(countdownSecondsInput.value, 15, 5, 600);
  state.countdownTargetNumber = getCountdownTargetNumber();

  countdownStage.classList.remove("urgent");
  countdownQuestion.textContent = state.countdownCurrentQuestion;
  countdownTarget.textContent = state.countdownTargetNumber;
  countdownTimer.textContent = `${state.countdownDuration.toFixed(1)} 秒`;
  countdownMeterFill.style.width = "100%";
  countdownProgress.textContent = countdownRepeatInput.checked
    ? `第 ${state.countdownSeenCount} 題`
    : `${state.countdownSeenCount} / ${state.countdownQuestions.length}`;
  countdownFeedback.textContent = "準備好後按開始";
  setCountdownButtons("ready");
}

function getCountdownTargetNumber() {
  const minTarget = getNumber(countdownTargetMin.value, 3, 1, 99);
  const maxTarget = Math.max(getNumber(countdownTargetMax.value, 5, 1, 99), minTarget);
  return randomInt(minTarget, maxTarget);
}

function startCountdownTimer() {
  if (state.countdownRunning || !state.countdownCurrentQuestion) {
    return;
  }

  state.countdownRunning = true;
  state.countdownStartedAt = Date.now();
  countdownFeedback.textContent = "開始聯想";
  countdownStage.classList.remove("urgent");
  setCountdownButtons("running");
  updateCountdownTimer();
  state.countdownTimerId = window.setInterval(updateCountdownTimer, 80);
}

function updateCountdownTimer() {
  const elapsedSeconds = (Date.now() - state.countdownStartedAt) / 1000;
  const remaining = Math.max(0, state.countdownDuration - elapsedSeconds);
  const percent = Math.max(0, (remaining / state.countdownDuration) * 100);
  countdownTimer.textContent = `${remaining.toFixed(1)} 秒`;
  countdownMeterFill.style.width = `${percent}%`;
  countdownStage.classList.toggle("urgent", remaining <= 5);

  if (remaining <= 0) {
    finishCountdownRound(false);
  }
}

function finishCountdownRound(isSuccess) {
  if (!state.countdownRunning && !isSuccess) {
    return;
  }

  stopCountdownTimer();
  countdownFeedback.textContent = isSuccess ? "完成了，換下一題" : "時間到，可以重來或換題";
  countdownTimer.textContent = isSuccess ? countdownTimer.textContent : "0.0 秒";
  countdownMeterFill.style.width = isSuccess ? countdownMeterFill.style.width : "0%";
  countdownStage.classList.toggle("urgent", !isSuccess);
  setCountdownButtons("finished");
}

function stopCountdownTimer() {
  window.clearInterval(state.countdownTimerId);
  state.countdownTimerId = null;
  state.countdownRunning = false;
}

function retryCountdownQuestion() {
  stopCountdownTimer();
  state.countdownDuration = getNumber(countdownSecondsInput.value, 15, 5, 600);
  countdownStage.classList.remove("urgent");
  countdownTimer.textContent = `${state.countdownDuration.toFixed(1)} 秒`;
  countdownMeterFill.style.width = "100%";
  countdownFeedback.textContent = "再挑戰一次";
  setCountdownButtons("ready");
}

function finishCountdownSet() {
  state.countdownCurrentQuestion = "";
  countdownQuestion.textContent = "完成";
  countdownTarget.textContent = "-";
  countdownTimer.textContent = "0.0 秒";
  countdownMeterFill.style.width = "0%";
  countdownFeedback.textContent = "這組題目已全部完成";
  countdownStage.classList.remove("urgent");
  setCountdownButtons("complete");
}

function resetCountdownAll() {
  stopCountdownTimer();
  state.countdownQuestions = getFlexibleList(countdownQuestionsInput.value, defaultCountdownQuestions);
  state.countdownQueue = [];
  state.countdownSeenCount = 0;
  state.countdownCurrentQuestion = "";
  state.countdownDuration = getNumber(countdownSecondsInput.value, 15, 5, 600);
  countdownProgress.textContent = "1 / 1";
  countdownTimer.textContent = `${state.countdownDuration.toFixed(1)} 秒`;
  countdownMeterFill.style.width = "100%";
  countdownQuestion.textContent = "準備";
  countdownTarget.textContent = getCountdownTargetNumber();
  countdownFeedback.textContent = "設定完成後開始挑戰";
  countdownStage.classList.remove("urgent");
  setCountdownButtons("idle");
}

function setCountdownButtons(mode) {
  countdownRun.hidden = !["ready", "idle"].includes(mode);
  countdownRun.disabled = mode === "idle";
  countdownDone.hidden = mode !== "running";
  countdownNext.hidden = mode !== "finished";
  countdownRetry.hidden = mode !== "finished";
}

function showNextCityQuestion() {
  const pool = getCityPool();
  if (!pool.length) {
    cityFeedback.textContent = "請先儲存至少一題自訂題庫";
    return;
  }

  const previousAnswer = state.cityCurrent?.answer;
  const candidates = pool.filter((item) => item.answer !== previousAnswer);
  state.cityCurrent = shuffle(candidates.length ? candidates : pool)[0];
  state.cityRound += 1;
  state.cityAnswered = false;
  renderCityQuestion();
}

function getCityPool() {
  const theme = cityRegionSelect.value;
  const builtInItems = getBuiltInGuessItems();
  if (theme === "custom") {
    return state.customGuessItems;
  }
  if (theme === "all") {
    return [...builtInItems, ...state.customGuessItems];
  }
  return builtInItems.filter((item) => item.theme === theme);
}

function getBuiltInGuessItems() {
  return [
    ...cityGuessItems.map((item) => ({ ...item, theme: "city" })),
    ...themedGuessItems,
  ];
}

function renderCityQuestion() {
  const current = state.cityCurrent;
  const options = buildCityOptions(current.answer);

  cityRegionLabel.textContent = getCityRegionLabel(cityRegionSelect.value);
  cityRoundLabel.textContent = `第 ${state.cityRound} 題`;
  cityMysteryTitle.textContent = "猜猜我是誰";
  cityHintText.textContent = "觀察四個線索，選出最可能的答案。";
  cityScore.textContent = state.cityScore;
  cityRound.textContent = state.cityRound;
  cityFeedback.textContent = "請選一個答案";
  cityReveal.hidden = true;
  cityAnswerName.textContent = "";
  cityAnswerNote.textContent = "";

  cityClues.innerHTML = "";
  current.clues.forEach((clue) => {
    const card = document.createElement("div");
    card.className = "city-clue-card";

    const icon = document.createElement("span");
    icon.className = "city-clue-icon";
    icon.textContent = clue.icon;

    const label = document.createElement("strong");
    label.textContent = clue.label;

    card.append(icon, label);
    cityClues.append(card);
  });

  cityOptions.innerHTML = "";
  options.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "city-option-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkCityAnswer(button, answer));
    cityOptions.append(button);
  });
}

function buildCityOptions(correctAnswer) {
  const regionPool = getCityPool()
    .filter((item) => item.answer !== correctAnswer)
    .map((item) => item.answer);
  const fallbackPool = [...getBuiltInGuessItems(), ...state.customGuessItems]
    .filter((item) => item.answer !== correctAnswer && !regionPool.includes(item.answer))
    .map((item) => item.answer);
  return shuffle([correctAnswer, ...shuffle([...regionPool, ...fallbackPool]).slice(0, 3)]);
}

function checkCityAnswer(button, answer) {
  if (state.cityAnswered) {
    return;
  }

  if (answer !== state.cityCurrent.answer) {
    button.classList.add("wrong");
    button.disabled = true;
    cityFeedback.textContent = "再觀察線索，還可以再猜";
    return;
  }

  state.cityAnswered = true;
  state.cityScore += 1;
  cityScore.textContent = state.cityScore;
  cityFeedback.textContent = "答對了";
  cityMysteryTitle.textContent = state.cityCurrent.answer;
  cityHintText.textContent = "線索全部對上了。";
  cityAnswerName.textContent = state.cityCurrent.answer;
  cityAnswerNote.textContent = state.cityCurrent.note;
  cityReveal.hidden = false;

  document.querySelectorAll(".city-option-button").forEach((item) => {
    item.disabled = true;
    item.classList.toggle("correct", item.textContent === answer);
  });
}

function getCityRegionLabel(region) {
  const labels = {
    all: "全部主題",
    city: "臺灣縣市",
    animal: "動物主題",
    job: "職業主題",
    object: "生活用品",
    custom: "自訂題庫",
  };
  return labels[region] ?? labels.all;
}

function parseCustomGuessText(text) {
  return String(text ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [answerPart, cluesPart, notePart] = line.split(/[|｜]/).map((part) => part.trim());
      const answer = sanitizeText(answerPart, "");
      const clueLabels = String(cluesPart ?? "")
        .split(/[，,、]/)
        .map((clue) => clue.trim())
        .filter(Boolean)
        .slice(0, 4);

      if (!answer || clueLabels.length < 2) {
        return null;
      }

      const paddedClues = [...clueLabels];
      while (paddedClues.length < 4) {
        paddedClues.push("補充線索");
      }

      return {
        answer,
        theme: "custom",
        note: sanitizeText(notePart, "這是自訂題庫中的題目，可以依照課程需求調整說明。"),
        clues: paddedClues.map((label) => ({
          icon: label.slice(0, 1),
          label,
        })),
      };
    })
    .filter(Boolean);
}

function initCustomGuessSettings() {
  customGuessInput.value = state.customGuessRaw;
  state.customGuessItems = parseCustomGuessText(state.customGuessRaw);
  updateCustomGuessStatus();
}

function saveCustomGuessItems() {
  const raw = customGuessInput.value.trim();
  const items = parseCustomGuessText(raw);
  if (raw && !items.length) {
    customGuessStatus.textContent = "格式需為：答案｜線索1,線索2｜說明";
    return;
  }

  state.customGuessRaw = raw;
  state.customGuessItems = items;
  try {
    localStorage.setItem(CUSTOM_GUESS_STORAGE_KEY, raw);
  } catch {
    customGuessStatus.textContent = "本次無法儲存";
    return;
  }

  updateCustomGuessStatus();
  resetCityGuessGame();
}

function clearCustomGuessItems() {
  state.customGuessRaw = "";
  state.customGuessItems = [];
  customGuessInput.value = "";
  try {
    localStorage.removeItem(CUSTOM_GUESS_STORAGE_KEY);
  } catch {
    customGuessStatus.textContent = "已清除，未寫入儲存";
  }
  updateCustomGuessStatus();
  resetCityGuessGame();
}

function updateCustomGuessStatus() {
  customGuessStatus.textContent = state.customGuessItems.length
    ? `已建立 ${state.customGuessItems.length} 題自訂題庫`
    : "尚未建立自訂題庫";
}

function resetCityGuessGame() {
  state.cityScore = 0;
  state.cityRound = 0;
  state.cityCurrent = null;
  state.cityAnswered = false;
  cityScore.textContent = "0";
  cityRound.textContent = "0";
  cityRoundLabel.textContent = "第 1 題";
  cityRegionLabel.textContent = "請選擇挑戰主題";
  cityMysteryTitle.textContent = "猜猜我是誰";
  cityHintText.textContent = "按下抽一題後，觀察四個線索再選答案。";
  cityReveal.hidden = true;
  cityAnswerName.textContent = "";
  cityAnswerNote.textContent = "";
  cityFeedback.textContent = "先抽一題開始挑戰";
  cityClues.innerHTML = "";
  cityOptions.innerHTML = "";
}

function shuffle(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }
  return next;
}

resetColors.addEventListener("click", resetColorCards);
colorSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
toggleColorSettings.addEventListener("click", () => {
  setSettingsOpen(colorSettings.hidden);
});
closeColorSettings.addEventListener("click", () => {
  setSettingsOpen(false);
});
restoreDefaultColors.addEventListener("click", restoreDefaultColorCards);
cardNameInput.addEventListener("input", () => {
  updateSelectedColorCard({ name: cardNameInput.value.trim() || "未命名色卡" });
});
cardColorInput.addEventListener("input", () => {
  const color = normalizeHex(cardColorInput.value);
  if (!color) {
    return;
  }
  cardHexInput.value = color;
  updateSelectedColorCard({ color });
});
cardHexInput.addEventListener("input", () => {
  const color = normalizeHex(cardHexInput.value);
  if (!color) {
    colorSaveState.textContent = "色碼需為 #RRGGBB";
    return;
  }
  cardColorInput.value = color;
  updateSelectedColorCard({ color });
});
cardTextColorInput.addEventListener("input", () => {
  const textColor = normalizeHex(cardTextColorInput.value);
  if (!textColor) {
    return;
  }
  cardTextHexInput.value = textColor;
  updateSelectedColorCard({ textColor });
});
cardTextHexInput.addEventListener("input", () => {
  const textColor = normalizeHex(cardTextHexInput.value);
  if (!textColor) {
    colorSaveState.textContent = "文字色碼需為 #RRGGBB";
    return;
  }
  cardTextColorInput.value = textColor;
  updateSelectedColorCard({ textColor });
});
cardTitleInput.addEventListener("input", () => {
  updateSelectedColorCard({ title: cardTitleInput.value.trim() || "未命名主題" });
});
cardMeaningInput.addEventListener("input", () => {
  updateSelectedColorCard({ meaning: cardMeaningInput.value.trim() || "請輸入這張卡片的說明。" });
});
imageUpload.addEventListener("change", (event) => loadImages(event.target.files));
pairRange.addEventListener("input", () => {
  pairOutput.value = pairRange.value;
  if (state.uploadedImages.length >= 2) {
    memoryStatus.textContent = `${pairRange.value} 組圖卡待開始`;
  }
});
startMemory.addEventListener("click", startGame);
peekMemory.addEventListener("click", peekAllCards);
resetMemory.addEventListener("click", resetMemoryGame);
nextShadowQuestion.addEventListener("click", showNextShadowQuestion);
resetShadowGame.addEventListener("click", resetHandShadowGame);
bombNewTopic.addEventListener("click", pickBombTopic);
bombStart.addEventListener("click", startBombGame);
bombReset.addEventListener("click", resetBombGame);
countdownStartSet.addEventListener("click", prepareCountdownChallenge);
countdownResetAll.addEventListener("click", resetCountdownAll);
countdownRun.addEventListener("click", startCountdownTimer);
countdownDone.addEventListener("click", () => finishCountdownRound(true));
countdownNext.addEventListener("click", showNextCountdownQuestion);
countdownRetry.addEventListener("click", retryCountdownQuestion);
nextCityQuestion.addEventListener("click", showNextCityQuestion);
resetCityGuess.addEventListener("click", resetCityGuessGame);
cityRegionSelect.addEventListener("change", resetCityGuessGame);
saveCustomGuess.addEventListener("click", saveCustomGuessItems);
clearCustomGuess.addEventListener("click", clearCustomGuessItems);

renderColorGrid();
renderMemoryBoard();
updateSetup();
resetHandShadowGame();
initBombGame();
initCountdownGame();
initCustomGuessSettings();
resetCityGuessGame();
