/*
 * Watch price data — edit this file to update prices.
 *
 * This is the ONLY file you need to touch to keep the tool current. It is
 * loaded as a plain <script>, not fetched as JSON, so it also works when you
 * just double-click index.html (no local server needed).
 *
 * - Set `sampleData` to false once every `history` array below holds real
 *   figures. While it's true, the site shows a "placeholder data" warning
 *   banner in all three languages so nobody mistakes it for real quotes.
 * - `currency` applies to every price in the file (keep one market/currency
 *   per file to keep this simple — CHF by default).
 * - Each watch needs a unique `id`, localized `brand`/`model`/`note` text
 *   (zh/en/de), a `category` ("sport" or "dress" — used for the filter
 *   chips, add new category strings freely), and a `history` array of
 *   { date: "YYYY-MM", price: number } sorted oldest to newest.
 * - To add a watch: copy an existing object inside the `watches` array,
 *   give it a new unique `id`, and fill in the fields.
 * - To add a price point: append { date: "YYYY-MM", price: number } to the
 *   end of that watch's `history` array.
 *
 * Data provenance (2026-07-24 fill-in): quarterly series below are estimated
 * from public secondary-market aggregator data (WatchCharts model/variant
 * overview pages, brand market indices) — current price points and 1yr/2yr/
 * Q1 2026 trend percentages are sourced from there, USD converted to CHF at
 * ~0.815 (approx. July 2026 USD/CHF spot). Quarters between known anchor
 * points are smoothed by hand to match the reported trend direction, NOT
 * pulled from an exact quarterly transaction record. Treat this as a
 * reasonable public-data estimate, not verified trade data — please correct
 * with real observed transaction prices where you have them.
 */
window.WATCH_PRICE_DATA = {
  "updatedAt": "2026-07-24",
  "sampleData": false,
  "currency": "CHF",
  "watches": [
    {
      "id": "rolex-submariner-date-126610ln",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "水鬼日历型", "en": "Submariner Date", "de": "Submariner Date" },
      "ref": "126610LN",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 10500 },
        { "date": "2024-04", "price": 10400 },
        { "date": "2024-07", "price": 10350 },
        { "date": "2024-10", "price": 10400 },
        { "date": "2025-01", "price": 10600 },
        { "date": "2025-04", "price": 10750 },
        { "date": "2025-07", "price": 10850 },
        { "date": "2025-10", "price": 10900 },
        { "date": "2026-01", "price": 11000 },
        { "date": "2026-04", "price": 11100 },
        { "date": "2026-07", "price": 11150 }
      ]
    },
    {
      "id": "rolex-daytona-126500ln",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "迪通拿（熊猫盘）", "en": "Daytona (Panda dial)", "de": "Daytona (Panda-Zifferblatt)" },
      "ref": "126500LN",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 29300 },
        { "date": "2024-04", "price": 28500 },
        { "date": "2024-07", "price": 27300 },
        { "date": "2024-10", "price": 26500 },
        { "date": "2025-01", "price": 26100 },
        { "date": "2025-04", "price": 26250 },
        { "date": "2025-07", "price": 26500 },
        { "date": "2025-10", "price": 26700 },
        { "date": "2026-01", "price": 26900 },
        { "date": "2026-04", "price": 27050 },
        { "date": "2026-07", "price": 27300 }
      ]
    },
    {
      "id": "rolex-gmt-master-ii-126710blro",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "格林尼治II型（百事圈）", "en": "GMT-Master II (\"Pepsi\")", "de": "GMT-Master II („Pepsi\")" },
      "ref": "126710BLRO",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 15100 },
        { "date": "2024-04", "price": 14800 },
        { "date": "2024-07", "price": 14700 },
        { "date": "2024-10", "price": 14900 },
        { "date": "2025-01", "price": 15300 },
        { "date": "2025-04", "price": 15650 },
        { "date": "2025-07", "price": 16000 },
        { "date": "2025-10", "price": 16450 },
        { "date": "2026-01", "price": 17500 },
        { "date": "2026-04", "price": 18900 },
        { "date": "2026-07", "price": 18350 }
      ]
    },
    {
      "id": "omega-speedmaster-moonwatch-31030425001",
      "brand": { "zh": "欧米茄", "en": "Omega", "de": "Omega" },
      "model": { "zh": "超霸登月表专业版", "en": "Speedmaster Moonwatch Professional", "de": "Speedmaster Moonwatch Professional" },
      "ref": "310.30.42.50.01.001",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4250 },
        { "date": "2024-04", "price": 4100 },
        { "date": "2024-07", "price": 3950 },
        { "date": "2024-10", "price": 3900 },
        { "date": "2025-01", "price": 4000 },
        { "date": "2025-04", "price": 4100 },
        { "date": "2025-07", "price": 4300 },
        { "date": "2025-10", "price": 4400 },
        { "date": "2026-01", "price": 4500 },
        { "date": "2026-04", "price": 4550 },
        { "date": "2026-07", "price": 4600 }
      ]
    },
    {
      "id": "ap-royal-oak-15500st",
      "brand": { "zh": "爱彼", "en": "Audemars Piguet", "de": "Audemars Piguet" },
      "model": { "zh": "皇家橡树", "en": "Royal Oak", "de": "Royal Oak" },
      "ref": "15500ST",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 33400 },
        { "date": "2024-04", "price": 32200 },
        { "date": "2024-07", "price": 31000 },
        { "date": "2024-10", "price": 30150 },
        { "date": "2025-01", "price": 29750 },
        { "date": "2025-04", "price": 30300 },
        { "date": "2025-07", "price": 30800 },
        { "date": "2025-10", "price": 31300 },
        { "date": "2026-01", "price": 31700 },
        { "date": "2026-04", "price": 31950 },
        { "date": "2026-07", "price": 32200 }
      ]
    },
    {
      "id": "patek-philippe-nautilus-5711-1a-010",
      "brand": { "zh": "百达翡丽", "en": "Patek Philippe", "de": "Patek Philippe" },
      "model": { "zh": "鹦鹉螺（蓝盘，已停产）", "en": "Nautilus (blue dial, discontinued)", "de": "Nautilus (blaues Zifferblatt, eingestellt)" },
      "ref": "5711/1A-010",
      "category": "sport",
      "note": {
        "zh": "参考号已更正（原条目参考号对应的是橄榄绿盘而非蓝盘）；价格基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Reference number corrected (the old entry's ref was actually the olive-green dial, not blue); price estimated from public aggregator data, not exact transaction records",
        "de": "Referenznummer korrigiert (der alte Eintrag bezog sich tatsächlich auf das olivgrüne statt das blaue Zifferblatt); Preis geschätzt anhand öffentlicher Marktdaten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 106000 },
        { "date": "2024-04", "price": 93700 },
        { "date": "2024-07", "price": 81500 },
        { "date": "2024-10", "price": 75000 },
        { "date": "2025-01", "price": 71700 },
        { "date": "2025-04", "price": 69300 },
        { "date": "2025-07", "price": 70900 },
        { "date": "2025-10", "price": 75000 },
        { "date": "2026-01", "price": 79900 },
        { "date": "2026-04", "price": 85600 },
        { "date": "2026-07", "price": 91300 }
      ]
    },
    {
      "id": "cartier-santos-de-cartier-medium",
      "brand": { "zh": "卡地亚", "en": "Cartier", "de": "Cartier" },
      "model": { "zh": "山度士中号", "en": "Santos de Cartier Medium", "de": "Santos de Cartier Medium" },
      "ref": "WSSA0029",
      "category": "dress",
      "note": {
        "zh": "参考号已更正（原条目参考号 WSSA0018 对应的是大号而非中号）；价格基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Reference number corrected (the old entry's ref WSSA0018 was actually the Large model, not Medium); price estimated from public aggregator data, not exact transaction records",
        "de": "Referenznummer korrigiert (WSSA0018 im alten Eintrag war tatsächlich das große Modell, nicht Medium); Preis geschätzt anhand öffentlicher Marktdaten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4650 },
        { "date": "2024-04", "price": 4700 },
        { "date": "2024-07", "price": 4700 },
        { "date": "2024-10", "price": 4800 },
        { "date": "2025-01", "price": 4900 },
        { "date": "2025-04", "price": 4950 },
        { "date": "2025-07", "price": 5100 },
        { "date": "2025-10", "price": 5200 },
        { "date": "2026-01", "price": 5350 },
        { "date": "2026-04", "price": 5450 },
        { "date": "2026-07", "price": 5500 }
      ]
    }
  ]
};
