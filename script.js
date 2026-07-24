(function () {
  "use strict";

  const LANG_KEY = "watchPriceTracker.lang";
  const DATA = window.WATCH_PRICE_DATA || { updatedAt: "", sampleData: false, currency: "CHF", watches: [] };

  const i18n = {
    zh: {
      appTitle: "腕表行情",
      searchLabel: "搜索品牌 / 型号 / 参考号",
      searchPlaceholder: "例如 Submariner、劳力士、126610…",
      updatedLabel: "数据更新于",
      noResults: "没有找到匹配的表款。",
      backBtn: "返回列表",
      dateCol: "日期",
      priceCol: "价格",
      disclaimer: "数据为作者根据一线奢侈表零售从业经验整理，仅供参考，非实时报价，实际成交价格以市场为准。",
      adLabel: "广告",
      coffeeBtn: "请我喝杯咖啡",
      coffeeTooltip: "喜欢这个工具？请我喝杯咖啡",
      helpTitle: "使用说明",
      helpTip1: "搜索或点击品牌 / 类别标签筛选表款。",
      helpTip2: "点击任意卡片查看完整价格走势图与历史数据表。",
      helpTip3: "右上角可随时切换 中文 / EN / DE。",
      helpTip4: "所有数据均为人工整理，非实时市场报价，仅供参考。",
      allChip: "全部",
      categorySport: "运动款",
      categoryDress: "正装款",
      periodChange: "区间涨跌",
      latestPrice: "最新价格"
    },
    en: {
      appTitle: "Watch Price Trends",
      searchLabel: "Search brand / model / reference",
      searchPlaceholder: "e.g. Submariner, Rolex, 126610…",
      updatedLabel: "Data updated",
      noResults: "No matching watches found.",
      backBtn: "Back to list",
      dateCol: "Date",
      priceCol: "Price",
      disclaimer: "Data compiled by the author from first-hand luxury watch retail experience. For reference only, not a live quote — actual transaction prices depend on the market.",
      adLabel: "Advertisement",
      coffeeBtn: "Buy me a coffee",
      coffeeTooltip: "Enjoyed this tool? Buy me a coffee",
      helpTitle: "How to use",
      helpTip1: "Search, or click a brand / category chip to filter.",
      helpTip2: "Click any card to see the full price chart and history table.",
      helpTip3: "Switch 中文 / EN / DE anytime in the top right.",
      helpTip4: "All data is compiled by hand, not a live market feed — for reference only.",
      allChip: "All",
      categorySport: "Sport",
      categoryDress: "Dress",
      periodChange: "Change over period",
      latestPrice: "Latest price"
    },
    de: {
      appTitle: "Uhren-Preistrends",
      searchLabel: "Marke / Modell / Referenz suchen",
      searchPlaceholder: "z. B. Submariner, Rolex, 126610…",
      updatedLabel: "Daten aktualisiert am",
      noResults: "Keine passenden Uhren gefunden.",
      backBtn: "Zurück zur Liste",
      dateCol: "Datum",
      priceCol: "Preis",
      disclaimer: "Die Daten wurden vom Autor aus eigener Erfahrung im Luxusuhren-Einzelhandel zusammengestellt. Nur zur Orientierung, kein Echtzeit-Kurs — der tatsächliche Marktpreis kann abweichen.",
      adLabel: "Anzeige",
      coffeeBtn: "Spendier einen Kaffee",
      coffeeTooltip: "Hat dir das Tool geholfen? Spendier einen Kaffee",
      helpTitle: "Bedienung",
      helpTip1: "Suchen oder per Marken- / Kategorie-Chip filtern.",
      helpTip2: "Auf eine Karte klicken zeigt den vollständigen Preisverlauf und die Datentabelle.",
      helpTip3: "Oben rechts jederzeit zwischen 中文 / EN / DE wechseln.",
      helpTip4: "Alle Daten sind manuell gepflegt, kein Live-Marktfeed — nur zur Orientierung.",
      allChip: "Alle",
      categorySport: "Sport",
      categoryDress: "Dress",
      periodChange: "Veränderung im Zeitraum",
      latestPrice: "Aktueller Preis"
    }
  };

  const LOCALE_MAP = { zh: "zh-CN", en: "en-US", de: "de-DE" };

  let currentLang = localStorage.getItem(LANG_KEY) || "zh";
  let searchQuery = "";
  let selectedBrand = null;
  let selectedCategory = null;
  let selectedWatchId = null;

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.zh[key] || key;
  }

  function localeText(field) {
    return field[currentLang] || field.en || field.zh || "";
  }

  function formatPrice(value) {
    try {
      return new Intl.NumberFormat(LOCALE_MAP[currentLang], {
        style: "currency",
        currency: DATA.currency,
        maximumFractionDigits: 0
      }).format(value);
    } catch (e) {
      return DATA.currency + " " + value.toLocaleString();
    }
  }

  function formatMonth(dateStr) {
    const [y, m] = dateStr.split("-").map(Number);
    const d = new Date(y, m - 1, 1);
    return d.toLocaleDateString(LOCALE_MAP[currentLang], { year: "numeric", month: "short" });
  }

  // ---------- Elements ----------
  const searchInput = document.getElementById("searchInput");
  const brandChipsEl = document.getElementById("brandChips");
  const categoryChipsEl = document.getElementById("categoryChips");
  const watchGrid = document.getElementById("watchGrid");
  const listEmptyState = document.getElementById("listEmptyState");
  const updatedDateEl = document.getElementById("updatedDate");
  const sampleBanner = document.getElementById("sampleBanner");
  const viewList = document.getElementById("viewList");
  const viewDetail = document.getElementById("viewDetail");
  const backBtn = document.getElementById("backBtn");

  // ---------- Language ----------
  function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
    buildChips();
    renderGrid();
    if (selectedWatchId) renderDetail(selectedWatchId);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem(LANG_KEY, currentLang);
      applyLanguage();
    });
  });

  // ---------- Help modal ----------
  const helpModal = document.getElementById("helpModal");
  const helpToggle = document.getElementById("helpToggle");
  const helpClose = document.getElementById("helpClose");
  helpToggle.addEventListener("click", () => { helpModal.hidden = false; });
  helpClose.addEventListener("click", () => { helpModal.hidden = true; });
  helpModal.addEventListener("click", (e) => { if (e.target === helpModal) helpModal.hidden = true; });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !helpModal.hidden) helpModal.hidden = true;
  });

  // ---------- Chips ----------
  function buildChips() {
    const brandKeys = [];
    const brandSeen = new Set();
    DATA.watches.forEach((w) => {
      const key = w.brand.en;
      if (!brandSeen.has(key)) {
        brandSeen.add(key);
        brandKeys.push({ key, label: localeText(w.brand) });
      }
    });

    brandChipsEl.innerHTML = "";
    brandChipsEl.appendChild(makeChip(t("allChip"), selectedBrand === null, () => {
      selectedBrand = null;
      buildChips();
      renderGrid();
    }));
    brandKeys.forEach(({ key, label }) => {
      brandChipsEl.appendChild(makeChip(label, selectedBrand === key, () => {
        selectedBrand = selectedBrand === key ? null : key;
        buildChips();
        renderGrid();
      }));
    });

    const categories = [];
    const catSeen = new Set();
    DATA.watches.forEach((w) => {
      if (!catSeen.has(w.category)) {
        catSeen.add(w.category);
        categories.push(w.category);
      }
    });

    categoryChipsEl.innerHTML = "";
    categoryChipsEl.appendChild(makeChip(t("allChip"), selectedCategory === null, () => {
      selectedCategory = null;
      buildChips();
      renderGrid();
    }));
    categories.forEach((cat) => {
      const label = t("category" + cat.charAt(0).toUpperCase() + cat.slice(1)) || cat;
      categoryChipsEl.appendChild(makeChip(label, selectedCategory === cat, () => {
        selectedCategory = selectedCategory === cat ? null : cat;
        buildChips();
        renderGrid();
      }));
    });
  }

  function makeChip(label, active, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (active ? " active" : "");
    btn.textContent = label;
    btn.addEventListener("click", onClick);
    return btn;
  }

  // ---------- Search ----------
  searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderGrid();
  });

  function matchesSearch(w) {
    if (!searchQuery) return true;
    const haystack = [
      w.brand.zh, w.brand.en, w.brand.de,
      w.model.zh, w.model.en, w.model.de,
      w.ref
    ].join(" ").toLowerCase();
    return haystack.includes(searchQuery);
  }

  function filteredWatches() {
    return DATA.watches.filter((w) => {
      if (selectedBrand && w.brand.en !== selectedBrand) return false;
      if (selectedCategory && w.category !== selectedCategory) return false;
      if (!matchesSearch(w)) return false;
      return true;
    });
  }

  // ---------- Sparkline ----------
  function buildSparklineSvg(history) {
    const w = 84, h = 32, pad = 3;
    const prices = history.map((p) => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = max - min || 1;
    const stepX = (w - pad * 2) / (history.length - 1 || 1);
    const points = history.map((p, i) => {
      const x = pad + i * stepX;
      const y = h - pad - ((p.price - min) / range) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `<svg class="spark-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${points.join(" ")}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function periodDelta(history) {
    const first = history[0].price;
    const last = history[history.length - 1].price;
    const pct = ((last - first) / first) * 100;
    return { first, last, pct };
  }

  // ---------- Grid ----------
  function renderGrid() {
    const list = filteredWatches();
    watchGrid.innerHTML = "";
    listEmptyState.hidden = list.length !== 0;

    list.forEach((w) => {
      const { last, pct } = periodDelta(w.history);
      const trendClass = pct > 0.05 ? "up" : pct < -0.05 ? "down" : "flat";
      const arrow = pct > 0.05 ? "▲" : pct < -0.05 ? "▼" : "–";
      const card = document.createElement("button");
      card.type = "button";
      card.className = "watch-card";
      card.innerHTML = `
        <p class="card-brand">${escapeHtml(localeText(w.brand))}</p>
        <p class="card-model">${escapeHtml(localeText(w.model))}</p>
        <p class="card-ref">${escapeHtml(w.ref)}</p>
        <div class="card-bottom">
          <div>
            <div class="card-price">${formatPrice(last)}</div>
            <div class="card-delta ${trendClass}">${arrow} ${Math.abs(pct).toFixed(1)}%</div>
          </div>
          ${buildSparklineSvg(w.history)}
        </div>
      `;
      card.addEventListener("click", () => openDetail(w.id));
      watchGrid.appendChild(card);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Detail / Chart ----------
  function openDetail(id) {
    selectedWatchId = id;
    renderDetail(id);
    viewList.classList.remove("active");
    viewDetail.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  backBtn.addEventListener("click", () => {
    viewDetail.classList.remove("active");
    viewList.classList.add("active");
    selectedWatchId = null;
  });

  function renderDetail(id) {
    const w = DATA.watches.find((x) => x.id === id);
    if (!w) return;

    document.getElementById("detailBrand").textContent = localeText(w.brand);
    document.getElementById("detailModel").textContent = localeText(w.model);
    document.getElementById("detailRef").textContent = w.ref;
    document.getElementById("detailNote").textContent = localeText(w.note);

    const { last, pct } = periodDelta(w.history);
    document.getElementById("detailPrice").textContent = formatPrice(last);
    const deltaEl = document.getElementById("detailDelta");
    const trendClass = pct > 0.05 ? "up" : pct < -0.05 ? "down" : "flat";
    const arrow = pct > 0.05 ? "▲" : pct < -0.05 ? "▼" : "–";
    deltaEl.className = "price-delta " + trendClass;
    deltaEl.textContent = `${arrow} ${Math.abs(pct).toFixed(1)}% · ${t("periodChange")}`;

    buildChart(w.history);

    const tbody = document.getElementById("historyTableBody");
    tbody.innerHTML = "";
    w.history.slice().reverse().forEach((p) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${formatMonth(p.date)}</td><td>${formatPrice(p.price)}</td>`;
      tbody.appendChild(tr);
    });
  }

  function buildChart(history) {
    const svg = document.getElementById("detailChart");
    const W = 640, H = 260;
    const padL = 56, padR = 16, padT = 16, padB = 34;
    const innerW = W - padL - padR;
    const innerH = H - padT - padB;

    const prices = history.map((p) => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = (max - min) || 1;
    const yPad = range * 0.12;
    const yMin = min - yPad;
    const yMax = max + yPad;

    const stepX = innerW / (history.length - 1 || 1);
    const xy = history.map((p, i) => {
      const x = padL + i * stepX;
      const y = padT + innerH - ((p.price - yMin) / (yMax - yMin)) * innerH;
      return { x, y, p };
    });

    const linePoints = xy.map((pt) => `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(" ");
    const areaPoints = `${padL.toFixed(1)},${(padT + innerH).toFixed(1)} ` + linePoints + ` ${(padL + innerW).toFixed(1)},${(padT + innerH).toFixed(1)}`;

    const gridLines = 4;
    let gridSvg = "";
    let yLabels = "";
    for (let i = 0; i <= gridLines; i++) {
      const y = padT + (innerH / gridLines) * i;
      const value = yMax - ((yMax - yMin) / gridLines) * i;
      gridSvg += `<line class="chart-grid-line" x1="${padL}" y1="${y.toFixed(1)}" x2="${padL + innerW}" y2="${y.toFixed(1)}"/>`;
      yLabels += `<text class="chart-axis-text" x="${padL - 8}" y="${(y + 3).toFixed(1)}" text-anchor="end">${Math.round(value).toLocaleString(LOCALE_MAP[currentLang])}</text>`;
    }

    const xLabelEvery = Math.ceil(history.length / 6);
    let xLabels = "";
    xy.forEach((pt, i) => {
      if (i % xLabelEvery === 0 || i === xy.length - 1) {
        xLabels += `<text class="chart-axis-text" x="${pt.x.toFixed(1)}" y="${H - 10}" text-anchor="middle">${formatMonth(pt.p.date)}</text>`;
      }
    });

    const dots = xy.map((pt) => `<circle class="chart-dot" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.2"><title>${formatMonth(pt.p.date)}: ${formatPrice(pt.p.price)}</title></circle>`).join("");

    svg.innerHTML = `
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${gridSvg}
      ${yLabels}
      ${xLabels}
      <polygon class="chart-area" points="${areaPoints}"/>
      <polyline class="chart-line" points="${linePoints}"/>
      ${dots}
    `;
  }

  // ---------- Init ----------
  if (updatedDateEl) updatedDateEl.textContent = DATA.updatedAt || "";
  if (DATA.sampleData) sampleBanner.hidden = false;
  applyLanguage();
})();
