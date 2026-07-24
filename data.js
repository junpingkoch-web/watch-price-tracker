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
 */
window.WATCH_PRICE_DATA = {
  "updatedAt": "2026-07-24",
  "sampleData": true,
  "currency": "CHF",
  "watches": [
    {
      "id": "rolex-submariner-date-126610ln",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "水鬼日历型", "en": "Submariner Date", "de": "Submariner Date" },
      "ref": "126610LN",
      "category": "sport",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 10500 },
        { "date": "2024-04", "price": 10200 },
        { "date": "2024-07", "price": 9900 },
        { "date": "2024-10", "price": 9800 },
        { "date": "2025-01", "price": 10000 },
        { "date": "2025-04", "price": 10300 },
        { "date": "2025-07", "price": 10600 },
        { "date": "2025-10", "price": 10800 },
        { "date": "2026-01", "price": 11000 },
        { "date": "2026-04", "price": 11200 },
        { "date": "2026-07", "price": 11400 }
      ]
    },
    {
      "id": "rolex-daytona-126500ln",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "迪通拿（熊猫盘）", "en": "Daytona (Panda dial)", "de": "Daytona (Panda-Zifferblatt)" },
      "ref": "126500LN",
      "category": "sport",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 32000 },
        { "date": "2024-04", "price": 30500 },
        { "date": "2024-07", "price": 28500 },
        { "date": "2024-10", "price": 27000 },
        { "date": "2025-01", "price": 26500 },
        { "date": "2025-04", "price": 25800 },
        { "date": "2025-07", "price": 25000 },
        { "date": "2025-10", "price": 24800 },
        { "date": "2026-01", "price": 24500 },
        { "date": "2026-04", "price": 24200 },
        { "date": "2026-07", "price": 24000 }
      ]
    },
    {
      "id": "rolex-gmt-master-ii-126710blro",
      "brand": { "zh": "劳力士", "en": "Rolex", "de": "Rolex" },
      "model": { "zh": "格林尼治II型（百事圈）", "en": "GMT-Master II (\"Pepsi\")", "de": "GMT-Master II („Pepsi\")" },
      "ref": "126710BLRO",
      "category": "sport",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 18500 },
        { "date": "2024-04", "price": 17800 },
        { "date": "2024-07", "price": 16500 },
        { "date": "2024-10", "price": 15800 },
        { "date": "2025-01", "price": 15200 },
        { "date": "2025-04", "price": 14800 },
        { "date": "2025-07", "price": 14500 },
        { "date": "2025-10", "price": 14200 },
        { "date": "2026-01", "price": 14000 },
        { "date": "2026-04", "price": 13800 },
        { "date": "2026-07", "price": 13600 }
      ]
    },
    {
      "id": "omega-speedmaster-moonwatch-31030425001",
      "brand": { "zh": "欧米茄", "en": "Omega", "de": "Omega" },
      "model": { "zh": "超霸登月表专业版", "en": "Speedmaster Moonwatch Professional", "de": "Speedmaster Moonwatch Professional" },
      "ref": "310.30.42.50.01.001",
      "category": "sport",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 5800 },
        { "date": "2024-04", "price": 5700 },
        { "date": "2024-07", "price": 5600 },
        { "date": "2024-10", "price": 5650 },
        { "date": "2025-01", "price": 5700 },
        { "date": "2025-04", "price": 5750 },
        { "date": "2025-07", "price": 5800 },
        { "date": "2025-10", "price": 5850 },
        { "date": "2026-01", "price": 5900 },
        { "date": "2026-04", "price": 5950 },
        { "date": "2026-07", "price": 6000 }
      ]
    },
    {
      "id": "ap-royal-oak-15500st",
      "brand": { "zh": "爱彼", "en": "Audemars Piguet", "de": "Audemars Piguet" },
      "model": { "zh": "皇家橡树", "en": "Royal Oak", "de": "Royal Oak" },
      "ref": "15500ST",
      "category": "sport",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 52000 },
        { "date": "2024-04", "price": 48000 },
        { "date": "2024-07", "price": 44000 },
        { "date": "2024-10", "price": 41000 },
        { "date": "2025-01", "price": 39000 },
        { "date": "2025-04", "price": 37500 },
        { "date": "2025-07", "price": 36000 },
        { "date": "2025-10", "price": 35000 },
        { "date": "2026-01", "price": 34500 },
        { "date": "2026-04", "price": 34000 },
        { "date": "2026-07", "price": 33500 }
      ]
    },
    {
      "id": "patek-philippe-nautilus-5711-1a-014",
      "brand": { "zh": "百达翡丽", "en": "Patek Philippe", "de": "Patek Philippe" },
      "model": { "zh": "鹦鹉螺（蓝盘，已停产）", "en": "Nautilus (blue dial, discontinued)", "de": "Nautilus (blaues Zifferblatt, eingestellt)" },
      "ref": "5711/1A-014",
      "category": "sport",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 145000 },
        { "date": "2024-04", "price": 135000 },
        { "date": "2024-07", "price": 128000 },
        { "date": "2024-10", "price": 122000 },
        { "date": "2025-01", "price": 118000 },
        { "date": "2025-04", "price": 115000 },
        { "date": "2025-07", "price": 113000 },
        { "date": "2025-10", "price": 112000 },
        { "date": "2026-01", "price": 111000 },
        { "date": "2026-04", "price": 110500 },
        { "date": "2026-07", "price": 110000 }
      ]
    },
    {
      "id": "cartier-santos-de-cartier-medium",
      "brand": { "zh": "卡地亚", "en": "Cartier", "de": "Cartier" },
      "model": { "zh": "山度士中号", "en": "Santos de Cartier Medium", "de": "Santos de Cartier Medium" },
      "ref": "WSSA0018",
      "category": "dress",
      "note": {
        "zh": "示例价格，待作者填入真实二手行情",
        "en": "Placeholder price, pending real market figures",
        "de": "Platzhalterpreis, echte Marktdaten folgen"
      },
      "history": [
        { "date": "2024-01", "price": 5200 },
        { "date": "2024-04", "price": 5100 },
        { "date": "2024-07", "price": 5000 },
        { "date": "2024-10", "price": 4950 },
        { "date": "2025-01", "price": 4900 },
        { "date": "2025-04", "price": 4950 },
        { "date": "2025-07", "price": 5000 },
        { "date": "2025-10", "price": 5050 },
        { "date": "2026-01", "price": 5100 },
        { "date": "2026-04", "price": 5150 },
        { "date": "2026-07", "price": 5200 }
      ]
    }
  ]
};
