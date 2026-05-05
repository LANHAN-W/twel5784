const COLOR_STORAGE_KEY = "ai-dev-color-cards";

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

renderColorGrid();
renderMemoryBoard();
updateSetup();
resetHandShadowGame();
