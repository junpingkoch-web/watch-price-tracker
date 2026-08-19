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
 *
 * Manual check-in (2026-08-18): added one interim "2026-08" point per watch
 * by re-checking public aggregators (WatchCharts model pages, Chrono24 ref
 * pages, Loupe market-value pages) — USD converted to CHF at ~0.811 (Aug 18
 * 2026 spot). Cross-checked against the 2026-07 anchors: Patek, Cartier and
 * AP lined up closely with the prior estimates; GMT-Master II Pepsi is
 * essentially flat (post-discontinuation-rally prices have eased since the
 * April 2026 Watches & Wonders announcement); Daytona Panda continues
 * climbing. Still public-data estimates, not confirmed trade prices.
 *
 * Coverage expansion (2026-08-19): added 9 more references (5 more Rolex,
 * 1 each Omega/AP/Patek/Cartier) after user feedback that 3 Rolex refs
 * under-represented real-world demand breadth. Full 2024-01→2026-08
 * quarterly history estimated the same way as above (WatchCharts/Chrono24/
 * Loupe current-value + reported 1yr/5yr trend %, USD→CHF at ~0.811),
 * hand-smoothed between anchors. Aquanaut 5167A-001 and Royal Oak Offshore
 * 26420ST had noticeably wider/noisier public listing ranges than the other
 * refs — treat those two estimates as lower-confidence than the rest.
 *
 * Grail-tier expansion (2026-08-19, same day): added 4 new brands at the
 * user's explicit request for genuinely scarce/allocation-only watches —
 * Vacheron Constantin, A. Lange & Söhne, Richard Mille, F.P. Journe — as
 * opposed to merely-popular entry brands. Same USD→CHF@~0.811 estimation
 * method. These four have thinner/lower-liquidity secondary markets than
 * everything else in this file, so treat the price estimates as directional
 * rather than precise — especially Richard Mille RM 65-01, whose public
 * listings ranged from ~$341k (titanium) to ~$487k (rose gold) depending on
 * material; the titanium figure was used here.
 *
 * Entry-luxury expansion (2026-08-19, same day): added the other half of
 * the scarcity spectrum discussed with the grail-tier batch above — Tudor,
 * IWC, Breitling, Panerai, Jaeger-LeCoultre, Grand Seiko — accessible,
 * regularly-in-stock brands with genuine demand, as opposed to the
 * allocation-only grails. Same USD→CHF@~0.811 method; these six have
 * normal, liquid secondary markets like the original 7 refs.
 */
window.WATCH_PRICE_DATA = {
  "updatedAt": "2026-08-19",
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
        { "date": "2026-07", "price": 11150 },
        { "date": "2026-08", "price": 11350 }
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
        { "date": "2026-07", "price": 27300 },
        { "date": "2026-08", "price": 29360 }
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
        { "date": "2026-07", "price": 18350 },
        { "date": "2026-08", "price": 18250 }
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
        { "date": "2026-07", "price": 4600 },
        { "date": "2026-08", "price": 4620 }
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
        { "date": "2026-07", "price": 32200 },
        { "date": "2026-08", "price": 32450 }
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
        { "date": "2026-07", "price": 91300 },
        { "date": "2026-08", "price": 93300 }
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
        { "date": "2026-07", "price": 5500 },
        { "date": "2026-08", "price": 5550 }
      ]
    },
    {
      "id": "rolex-datejust-41-126334",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "日志型41", "en": "Datejust 41", "de": "Datejust 41" },
      "ref": "126334",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 10200 },
        { "date": "2024-04", "price": 10100 },
        { "date": "2024-07", "price": 10050 },
        { "date": "2024-10", "price": 10150 },
        { "date": "2025-01", "price": 10400 },
        { "date": "2025-04", "price": 10600 },
        { "date": "2025-07", "price": 10900 },
        { "date": "2025-10", "price": 11100 },
        { "date": "2026-01", "price": 11400 },
        { "date": "2026-04", "price": 11550 },
        { "date": "2026-07", "price": 11700 },
        { "date": "2026-08", "price": 11800 }
      ]
    },
    {
      "id": "rolex-explorer-ii-226570",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "探险家II型", "en": "Explorer II", "de": "Explorer II" },
      "ref": "226570",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 8900 },
        { "date": "2024-04", "price": 8700 },
        { "date": "2024-07", "price": 8500 },
        { "date": "2024-10", "price": 8350 },
        { "date": "2025-01", "price": 8250 },
        { "date": "2025-04", "price": 8300 },
        { "date": "2025-07", "price": 8400 },
        { "date": "2025-10", "price": 8500 },
        { "date": "2026-01", "price": 8650 },
        { "date": "2026-04", "price": 8750 },
        { "date": "2026-07", "price": 8850 },
        { "date": "2026-08", "price": 8900 }
      ]
    },
    {
      "id": "rolex-sea-dweller-126600",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "海使型", "en": "Sea-Dweller", "de": "Sea-Dweller" },
      "ref": "126600",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 10600 },
        { "date": "2024-04", "price": 10300 },
        { "date": "2024-07", "price": 10000 },
        { "date": "2024-10", "price": 9800 },
        { "date": "2025-01", "price": 9650 },
        { "date": "2025-04", "price": 9550 },
        { "date": "2025-07", "price": 9550 },
        { "date": "2025-10", "price": 9600 },
        { "date": "2026-01", "price": 9650 },
        { "date": "2026-04", "price": 9680 },
        { "date": "2026-07", "price": 9700 },
        { "date": "2026-08", "price": 9700 }
      ]
    },
    {
      "id": "rolex-yacht-master-126622",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "游艇名仕型40", "en": "Yacht-Master 40", "de": "Yacht-Master 40" },
      "ref": "126622",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 10300 },
        { "date": "2024-04", "price": 10350 },
        { "date": "2024-07", "price": 10400 },
        { "date": "2024-10", "price": 10500 },
        { "date": "2025-01", "price": 10600 },
        { "date": "2025-04", "price": 10700 },
        { "date": "2025-07", "price": 10800 },
        { "date": "2025-10", "price": 10900 },
        { "date": "2026-01", "price": 11000 },
        { "date": "2026-04", "price": 11080 },
        { "date": "2026-07", "price": 11150 },
        { "date": "2026-08", "price": 11200 }
      ]
    },
    {
      "id": "rolex-sky-dweller-336934",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "天行者型", "en": "Sky-Dweller", "de": "Sky-Dweller" },
      "ref": "336934",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 15800 },
        { "date": "2024-04", "price": 16100 },
        { "date": "2024-07", "price": 16500 },
        { "date": "2024-10", "price": 16900 },
        { "date": "2025-01", "price": 17300 },
        { "date": "2025-04", "price": 17700 },
        { "date": "2025-07", "price": 18100 },
        { "date": "2025-10", "price": 18500 },
        { "date": "2026-01", "price": 18800 },
        { "date": "2026-04", "price": 18950 },
        { "date": "2026-07", "price": 19050 },
        { "date": "2026-08", "price": 19100 }
      ]
    },
    {
      "id": "omega-seamaster-diver-300m-21030422001",
      "brand": { "zh": "欧米茄", "en": "Omega", "de": "Omega" },
      "model": { "zh": "海马300米潜水表", "en": "Seamaster Diver 300M", "de": "Seamaster Diver 300M" },
      "ref": "210.30.42.20.01.001",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4300 },
        { "date": "2024-04", "price": 4250 },
        { "date": "2024-07", "price": 4200 },
        { "date": "2024-10", "price": 4250 },
        { "date": "2025-01", "price": 4350 },
        { "date": "2025-04", "price": 4400 },
        { "date": "2025-07", "price": 4420 },
        { "date": "2025-10", "price": 4450 },
        { "date": "2026-01", "price": 4480 },
        { "date": "2026-04", "price": 4520 },
        { "date": "2026-07", "price": 4550 },
        { "date": "2026-08", "price": 4570 }
      ]
    },
    {
      "id": "ap-royal-oak-offshore-26420st",
      "brand": { "zh": "爱彼", "en": "Audemars Piguet", "de": "Audemars Piguet" },
      "model": { "zh": "皇家橡树离岸型计时码表", "en": "Royal Oak Offshore Chronograph", "de": "Royal Oak Offshore Chronograph" },
      "ref": "26420ST",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录；此型号在各渠道的挂牌价差异较大，置信度低于其他条目",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records; listing prices for this ref vary widely across channels, lower confidence than other entries",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten; die Angebotspreise für diese Referenz streuen stark, geringere Konfidenz als bei den übrigen Einträgen"
      },
      "history": [
        { "date": "2024-01", "price": 37500 },
        { "date": "2024-04", "price": 36200 },
        { "date": "2024-07", "price": 34800 },
        { "date": "2024-10", "price": 33800 },
        { "date": "2025-01", "price": 33200 },
        { "date": "2025-04", "price": 33800 },
        { "date": "2025-07", "price": 34500 },
        { "date": "2025-10", "price": 35200 },
        { "date": "2026-01", "price": 35800 },
        { "date": "2026-04", "price": 36100 },
        { "date": "2026-07", "price": 36350 },
        { "date": "2026-08", "price": 36500 }
      ]
    },
    {
      "id": "patek-philippe-aquanaut-5167a-001",
      "brand": { "zh": "百达翡丽", "en": "Patek Philippe", "de": "Patek Philippe" },
      "model": { "zh": "Aquanaut（复合表带款）", "en": "Aquanaut (composite strap)", "de": "Aquanaut (Kautschukband)" },
      "ref": "5167A-001",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录；该型号挂牌价区间较宽，置信度低于其他条目",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records; listing prices for this ref span an unusually wide range, lower confidence than other entries",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten; die Angebotspreise für diese Referenz streuen ungewöhnlich stark, geringere Konfidenz als bei den übrigen Einträgen"
      },
      "history": [
        { "date": "2024-01", "price": 42000 },
        { "date": "2024-04", "price": 39500 },
        { "date": "2024-07", "price": 37000 },
        { "date": "2024-10", "price": 35500 },
        { "date": "2025-01", "price": 34500 },
        { "date": "2025-04", "price": 34000 },
        { "date": "2025-07", "price": 34800 },
        { "date": "2025-10", "price": 36200 },
        { "date": "2026-01", "price": 37500 },
        { "date": "2026-04", "price": 38200 },
        { "date": "2026-07", "price": 38700 },
        { "date": "2026-08", "price": 39000 }
      ]
    },
    {
      "id": "cartier-tank-must-xl-wsta0053",
      "brand": { "zh": "卡地亚", "en": "Cartier", "de": "Cartier" },
      "model": { "zh": "坦克Must大号", "en": "Tank Must, Extra-Large", "de": "Tank Must, Extra-Large" },
      "ref": "WSTA0053",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 3250 },
        { "date": "2024-04", "price": 3280 },
        { "date": "2024-07", "price": 3300 },
        { "date": "2024-10", "price": 3330 },
        { "date": "2025-01", "price": 3360 },
        { "date": "2025-04", "price": 3390 },
        { "date": "2025-07", "price": 3420 },
        { "date": "2025-10", "price": 3450 },
        { "date": "2026-01", "price": 3470 },
        { "date": "2026-04", "price": 3490 },
        { "date": "2026-07", "price": 3500 },
        { "date": "2026-08", "price": 3510 }
      ]
    },
    {
      "id": "vacheron-constantin-overseas-4500v-110ab128",
      "brand": { "zh": "江诗丹顿", "en": "Vacheron Constantin", "de": "Vacheron Constantin" },
      "model": { "zh": "纵横四海（不锈钢，蓝盘）", "en": "Overseas (steel, blue dial)", "de": "Overseas (Stahl, blaues Zifferblatt)" },
      "ref": "4500V/110A-B128",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录；此价位段流动性低于主流品牌，估算区间可能更宽",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records; secondary-market liquidity at this tier is thinner than mainstream brands, so treat as directional",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten; die Liquidität in diesem Segment ist geringer als bei den gängigen Marken, daher eher als Richtwert zu verstehen"
      },
      "history": [
        { "date": "2024-01", "price": 20800 },
        { "date": "2024-04", "price": 21000 },
        { "date": "2024-07", "price": 21200 },
        { "date": "2024-10", "price": 21500 },
        { "date": "2025-01", "price": 21800 },
        { "date": "2025-04", "price": 22000 },
        { "date": "2025-07", "price": 22200 },
        { "date": "2025-10", "price": 22350 },
        { "date": "2026-01", "price": 22420 },
        { "date": "2026-04", "price": 22460 },
        { "date": "2026-07", "price": 22480 },
        { "date": "2026-08", "price": 22500 }
      ]
    },
    {
      "id": "alange-sohne-lange-1-191032",
      "brand": { "zh": "朗格", "en": "A. Lange & Söhne", "de": "A. Lange & Söhne" },
      "model": { "zh": "朗格1号（玫瑰金）", "en": "Lange 1 (pink gold)", "de": "Lange 1 (Roségold)" },
      "ref": "191.032",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录；此价位段流动性低于主流品牌，估算区间可能更宽",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records; secondary-market liquidity at this tier is thinner than mainstream brands, so treat as directional",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten; die Liquidität in diesem Segment ist geringer als bei den gängigen Marken, daher eher als Richtwert zu verstehen"
      },
      "history": [
        { "date": "2024-01", "price": 19800 },
        { "date": "2024-04", "price": 20200 },
        { "date": "2024-07", "price": 20600 },
        { "date": "2024-10", "price": 21100 },
        { "date": "2025-01", "price": 21600 },
        { "date": "2025-04", "price": 22000 },
        { "date": "2025-07", "price": 22400 },
        { "date": "2025-10", "price": 23200 },
        { "date": "2026-01", "price": 23900 },
        { "date": "2026-04", "price": 24400 },
        { "date": "2026-07", "price": 24800 },
        { "date": "2026-08", "price": 25100 }
      ]
    },
    {
      "id": "richard-mille-rm-65-01",
      "brand": { "zh": "里查德米尔", "en": "Richard Mille", "de": "Richard Mille" },
      "model": { "zh": "自动上链双追针计时（钛金属）", "en": "RM 65-01 Split-Seconds Chronograph (titanium)", "de": "RM 65-01 Schleppzeiger-Chronograph (Titan)" },
      "ref": "RM 65-01",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录；同款不同材质（钛金属/碳纤维/玫瑰金）成交价差异极大，此处以钛金属版本为准，置信度低于其他条目",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records; prices vary hugely by case material (titanium/carbon TPT/rose gold) — the titanium version is used here, lower confidence than other entries",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten; die Preise variieren je nach Gehäusematerial (Titan/Carbon TPT/Roségold) stark — hier wird die Titanversion verwendet, geringere Konfidenz als bei den übrigen Einträgen"
      },
      "history": [
        { "date": "2024-01", "price": 255000 },
        { "date": "2024-04", "price": 258000 },
        { "date": "2024-07", "price": 262000 },
        { "date": "2024-10", "price": 266000 },
        { "date": "2025-01", "price": 269000 },
        { "date": "2025-04", "price": 271000 },
        { "date": "2025-07", "price": 273000 },
        { "date": "2025-10", "price": 274500 },
        { "date": "2026-01", "price": 275500 },
        { "date": "2026-04", "price": 276000 },
        { "date": "2026-07", "price": 276300 },
        { "date": "2026-08", "price": 276500 }
      ]
    },
    {
      "id": "fp-journe-chronometre-bleu-tantale",
      "brand": { "zh": "F.P.Journe", "en": "F.P. Journe", "de": "F.P. Journe" },
      "model": { "zh": "蓝色天文台表（钽金属）", "en": "Chronomètre Bleu (tantalum)", "de": "Chronomètre Bleu (Tantal)" },
      "ref": "CB Tantale",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录；独立制表品牌年产量极低（全品牌约800枚/年），此价位段流动性低于主流品牌，估算区间可能更宽",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records; this independent brand's total annual output is tiny (~800 pieces/year across all models), so secondary-market liquidity is thinner than mainstream brands — treat as directional",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten; die jährliche Gesamtproduktion dieser unabhängigen Manufaktur ist sehr gering (ca. 800 Stück/Jahr über alle Modelle), daher geringere Liquidität als bei den gängigen Marken — eher als Richtwert zu verstehen"
      },
      "history": [
        { "date": "2024-01", "price": 78000 },
        { "date": "2024-04", "price": 75000 },
        { "date": "2024-07", "price": 72000 },
        { "date": "2024-10", "price": 70000 },
        { "date": "2025-01", "price": 68500 },
        { "date": "2025-04", "price": 67500 },
        { "date": "2025-07", "price": 67000 },
        { "date": "2025-10", "price": 66500 },
        { "date": "2026-01", "price": 66300 },
        { "date": "2026-04", "price": 66500 },
        { "date": "2026-07", "price": 66800 },
        { "date": "2026-08", "price": 66900 }
      ]
    },
    {
      "id": "tudor-black-bay-58-79030n",
      "brand": { "zh": "帝舵", "en": "Tudor", "de": "Tudor" },
      "model": { "zh": "黑湾58", "en": "Black Bay 58", "de": "Black Bay 58" },
      "ref": "79030N",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 2050 },
        { "date": "2024-04", "price": 2100 },
        { "date": "2024-07", "price": 2150 },
        { "date": "2024-10", "price": 2180 },
        { "date": "2025-01", "price": 2220 },
        { "date": "2025-04", "price": 2250 },
        { "date": "2025-07", "price": 2280 },
        { "date": "2025-10", "price": 2300 },
        { "date": "2026-01", "price": 2320 },
        { "date": "2026-04", "price": 2340 },
        { "date": "2026-07", "price": 2350 },
        { "date": "2026-08", "price": 2360 }
      ]
    },
    {
      "id": "iwc-portugieser-chronograph-iw371617",
      "brand": { "zh": "万国", "en": "IWC", "de": "IWC" },
      "model": { "zh": "葡萄牙系列计时腕表", "en": "Portugieser Chronograph", "de": "Portugieser Chronograph" },
      "ref": "IW371617",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4700 },
        { "date": "2024-04", "price": 4750 },
        { "date": "2024-07", "price": 4800 },
        { "date": "2024-10", "price": 4820 },
        { "date": "2025-01", "price": 4850 },
        { "date": "2025-04", "price": 4880 },
        { "date": "2025-07", "price": 4900 },
        { "date": "2025-10", "price": 4930 },
        { "date": "2026-01", "price": 4950 },
        { "date": "2026-04", "price": 4970 },
        { "date": "2026-07", "price": 4985 },
        { "date": "2026-08", "price": 4990 }
      ]
    },
    {
      "id": "breitling-navitimer-b01-43-ab0138",
      "brand": { "zh": "百年灵", "en": "Breitling", "de": "Breitling" },
      "model": { "zh": "航空计时B01 43", "en": "Navitimer B01 Chronograph 43", "de": "Navitimer B01 Chronograph 43" },
      "ref": "AB0138",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4750 },
        { "date": "2024-04", "price": 4800 },
        { "date": "2024-07", "price": 4830 },
        { "date": "2024-10", "price": 4860 },
        { "date": "2025-01", "price": 4880 },
        { "date": "2025-04", "price": 4900 },
        { "date": "2025-07", "price": 4930 },
        { "date": "2025-10", "price": 4950 },
        { "date": "2026-01", "price": 4970 },
        { "date": "2026-04", "price": 4985 },
        { "date": "2026-07", "price": 4995 },
        { "date": "2026-08", "price": 5000 }
      ]
    },
    {
      "id": "panerai-luminor-marina-pam01312",
      "brand": { "zh": "沛纳海", "en": "Panerai", "de": "Panerai" },
      "model": { "zh": "Luminor Marina 44毫米", "en": "Luminor Marina 44mm", "de": "Luminor Marina 44mm" },
      "ref": "PAM01312",
      "category": "sport",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4100 },
        { "date": "2024-04", "price": 4020 },
        { "date": "2024-07", "price": 3950 },
        { "date": "2024-10", "price": 3900 },
        { "date": "2025-01", "price": 3870 },
        { "date": "2025-04", "price": 3850 },
        { "date": "2025-07", "price": 3840 },
        { "date": "2025-10", "price": 3850 },
        { "date": "2026-01", "price": 3860 },
        { "date": "2026-04", "price": 3870 },
        { "date": "2026-07", "price": 3875 },
        { "date": "2026-08", "price": 3880 }
      ]
    },
    {
      "id": "jlc-reverso-classic-medium-q2438520",
      "brand": { "zh": "积家", "en": "Jaeger-LeCoultre", "de": "Jaeger-LeCoultre" },
      "model": { "zh": "Reverso翻转系列中号", "en": "Reverso Classic Medium", "de": "Reverso Classic Medium" },
      "ref": "Q2438520",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 4400 },
        { "date": "2024-04", "price": 4450 },
        { "date": "2024-07", "price": 4500 },
        { "date": "2024-10", "price": 4530 },
        { "date": "2025-01", "price": 4560 },
        { "date": "2025-04", "price": 4590 },
        { "date": "2025-07", "price": 4620 },
        { "date": "2025-10", "price": 4650 },
        { "date": "2026-01", "price": 4670 },
        { "date": "2026-04", "price": 4685 },
        { "date": "2026-07", "price": 4695 },
        { "date": "2026-08", "price": 4700 }
      ]
    },
    {
      "id": "grand-seiko-snowflake-sbga211",
      "brand": { "zh": "冠蓝狮", "en": "Grand Seiko", "de": "Grand Seiko" },
      "model": { "zh": "雪花（Spring Drive）", "en": "Snowflake (Spring Drive)", "de": "Snowflake (Spring Drive)" },
      "ref": "SBGA211",
      "category": "dress",
      "note": {
        "zh": "基于公开二手行情平台数据估算，非精确成交记录",
        "en": "Estimated from public secondhand-market aggregator data, not exact transaction records",
        "de": "Geschätzt anhand öffentlicher Gebrauchtmarkt-Daten, keine exakten Transaktionsdaten"
      },
      "history": [
        { "date": "2024-01", "price": 3500 },
        { "date": "2024-04", "price": 3600 },
        { "date": "2024-07", "price": 3700 },
        { "date": "2024-10", "price": 3780 },
        { "date": "2025-01", "price": 3850 },
        { "date": "2025-04", "price": 3900 },
        { "date": "2025-07", "price": 3950 },
        { "date": "2025-10", "price": 3980 },
        { "date": "2026-01", "price": 4000 },
        { "date": "2026-04", "price": 4020 },
        { "date": "2026-07", "price": 4040 },
        { "date": "2026-08", "price": 4050 }
      ]
    }
  ]
};
