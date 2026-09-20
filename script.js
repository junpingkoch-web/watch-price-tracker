(function () {
  "use strict";

  const LANG_KEY = "watchPriceTracker.lang";
  const DATA = window.WATCH_PRICE_DATA || { updatedAt: "", sampleData: false, currency: "CHF", watches: [] };

  // Group entries by brand (each brand's first-appearance order) so the grid
  // stays organized by brand even as new refs get appended to data.js later,
  // regardless of where in the array they were inserted.
  (function groupByBrand() {
    const order = [];
    const seen = new Set();
    DATA.watches.forEach((w) => {
      if (!seen.has(w.brand.en)) {
        seen.add(w.brand.en);
        order.push(w.brand.en);
      }
    });
    DATA.watches.sort((a, b) => order.indexOf(a.brand.en) - order.indexOf(b.brand.en));
  })();

  const i18n = {
    zh: {
      appTitle: "腕表行情",
      searchLabel: "搜索品牌 / 型号 / 参考号",
      searchPlaceholder: "例如 Submariner、劳力士、126610…",
      updatedLabel: "数据更新于",
      noResults: "没有找到匹配的表款。",
      resultsCount: "展示 {n} 项结果",
      backBtn: "返回列表",
      dateCol: "日期",
      priceCol: "价格",
      disclaimer: "数据为作者根据公开二手市场数据估算整理，仅供参考，非实时报价，实际成交价格以市场为准。",
      adLabel: "广告",
      coffeeBtn: "请我喝杯咖啡",
      coffeeTooltip: "喜欢这个工具？请我喝杯咖啡",
      helpTitle: "使用说明",
      helpTip1: "搜索或点击品牌 / 类别标签筛选表款。",
      helpTip2: "点击任意卡片查看完整价格走势图与历史数据表。",
      helpTip3: "右上角可随时切换 中文 / EN / DE。",
      helpTip4: "价格是根据公开市场数据估算的，并非实时市场报价，仅供参考。",
      allChip: "全部",
      categorySport: "运动款",
      categoryDress: "正装款",
      periodChange: "区间涨跌",
      latestPrice: "最新价格",
      explainTitle: "这些价格数据是怎么来的？",
      explainP1: "本工具里的价格是根据公开的二手市场聚合数据（如 WatchCharts、Chrono24 的型号页面和 Loupe 的市场价值页面）估算整理的，并按当时的大致汇率从美元换算成瑞士法郎。已知数据点之间的季度数值是按公开报告的趋势方向手工平滑得到的，所以不是精确的成交记录。本工具不接入任何拍卖行、二手表交易平台或经销商的实时API，也不做自动抓取。",
      explainP2: "页面上方「数据更新于」标注的是最近一次人工核对和更新价格的时间，不代表实时行情——腕表二级市场价格本身波动就比股票、加密货币更慢，按周或按月观察趋势通常更有参考意义，而不是追踪逐秒波动。",
      explainP3: "同一型号在不同渠道看到的价格出现差异很正常：受地区、成色、原盒原证是否齐全、经销商加价策略，以及查询的具体时间点影响，实际成交价可能高于或低于本工具展示的参考区间。把这里的数字当作「大致方向」和「谈判起点」，而不是精确报价。",
      caseTitle: "案例观察：百达翡丽鹦鹉螺 5711/1A-010 的价格过山车",
      caseP1: "这只蓝盘鹦鹉螺是个很好的例子，能说明二手表价格为什么会剧烈波动，而不只是缓慢涨跌。2021年百达翡丽官方停产5711系列后，市场一度陷入抢购狂潮，行情在停产消息刚出的那一两年被炒到远超发行价的水平。表格里能看到的最早数据点（2024年1月，CHF 106,000）其实已经是从更早的历史高点回落之后的价格。",
      caseP2: "随后的十五个月里，价格几乎腰斩：到2025年4月跌到CHF 69,300，累计跌幅约35%。这背后是整个高端二手表市场在2023–2024年经历的普遍降温——疫情期间被炒热的「停产即涨价」逻辑退潮，加上大量早期获得配货的买家开始集中出手套现，供给一下子变多，价格自然承压。",
      caseP3: "但从2025年年中开始，价格又开始稳步回升，到2026年7月已经回到CHF 91,300，一年多时间涨回了约32%。这种「暴涨—腰斩—企稳回升」的过山车走势，在停产的高需求表款上并不罕见——短期投机情绪退去后，真正由稀缺性支撑的表款通常还是能找到新的价格平衡点，只是这个过程可能要一两年，而不是几周。",
      caseP4: "这也是为什么本工具坚持展示完整的历史走势图，而不只是一个当前价格数字——只看某个月的价格，很容易误判一只表到底是「稳定」，还是刚好处在周期的高点或低点。",
      guideTitle: "看懂腕表价格走势图的实用指南",
      guideS1: "官方零售价与二手市场价",
      guideB1: "一块表其实有两个价格：品牌在零售端的标价，以及买家在二手市场上愿意付的价格。当需求超过零售渠道能供应的数量时，二手价会高于官方价；当供应充足或潮流转向时，则会低于官方价。本工具里的价格是以瑞士法郎计的二手市场价，不是官方标价，所以看到高于官方价的数字，那是溢价，不是错误。",
      guideS2: "每张卡片上的百分比到底衡量什么",
      guideB2: "每张卡片上显示的涨跌幅，比较的是这块表历史记录里的第一个点和最后一个点，也就是从 2024 年 1 月到最新一条记录：（最新价格－最初价格）÷ 最初价格。所以它描述的是整个时间段，而不是近期的势头。一块先跌了三分之一、后来又回升的表，净变化可能很小，掩盖了中间的起伏；而一块现在正在快速上涨的表，也可能仍然显示为负数。请把百分比和走势图、历史表格放在一起看。",
      guideS3: "以季度为主的历史记录能看到什么、看不到什么",
      guideB3: "大多数历史记录点是每季度一个价格（1 月、4 月、7 月、10 月），最近几个月则改为按月记录。这足以显示一个周期的方向和幅度，但只持续几周的暴涨或急跌可能恰好落在两个记录点之间，根本不会出现在图上。请把图表当作趋势的示意，而在据此行动之前，先向经销商确认当前的实际报价。",
      guideS4: "是什么在推动二手价格",
      guideB4: "推动二手价格的因素有好几个，而且常常同时起作用：某个型号即将停产的消息、品牌放到市场上的供货量、社交媒体上一波又一波的关注、利率和整体奢侈品消费意愿，以及品牌自己的官方涨价——它抬高了二手市场用来对比的基准。由于本工具以瑞士法郎显示价格，法郎相对美元的强弱变化，也可能让一条走势线出现波动，即使这块表在其他货币下的价格并没有变。",
      guideS5: "买入或卖出时怎么用价格历史",
      guideB5: "把今天的价格和图上的整个区间对比，而不只是和上个月对比。在急剧上涨的高点买入，风险比在一段平稳期之后买入要大，而长期下跌也不一定意味着捡到便宜。请记住这里的数字是市场水平，而不是报价：成色、原盒原证、保修，以及经销商自己的利润，都会影响你实际付出或收到的价格。另外，这里的条目是根据公开二手市场数据估算的，并不是精确的成交记录。",
      faqTitle: "常见问题",
      faq: [
        { q: "这些价格数据是从实时市场API或拍卖行抓取的吗？", a: "不是。所有价格都是根据公开的二手市场聚合数据估算的（详见上文说明），并由人工不定期核对；不接入任何自动抓取或第三方实时API，也不是精确的成交记录。" },
        { q: "数据多久更新一次？", a: "没有固定周期，我会不定期根据市场变化人工核对和更新。每个页面顶部的「数据更新于」标注的就是最近一次更新时间。" },
        { q: "为什么我在别的平台看到的价格和这里不一样？", a: "很正常。价格会受地区、成色、原盒原证是否齐全、具体经销商的加价策略以及查询时间点影响，本工具展示的是一个粗略的参考区间，不是某个具体渠道当下的实时报价。" },
        { q: "这里显示的是官方零售价还是二手市场价？", a: "是二级/二手市场的参考价格趋势，用于观察热门型号的溢价或折价走势，不代表品牌官方零售价。" },
        { q: "我可以拿这个价格去跟经销商砍价吗？", a: "可以作为谈判前的心理参考，帮你判断大致的市场区间，但不建议直接当作报价单——具体成交价最终取决于你联系的那家经销商或卖家。" },
        { q: "这个工具会保存我的搜索记录或个人信息吗？", a: "不会。所有搜索和筛选都在你的浏览器本地完成，只有语言偏好会保存在本地，不会发送到任何服务器，也不需要注册。" }
      ]
    },
    en: {
      appTitle: "Watch Price Trends",
      searchLabel: "Search brand / model / reference",
      searchPlaceholder: "e.g. Submariner, Rolex, 126610…",
      updatedLabel: "Data updated",
      noResults: "No matching watches found.",
      resultsCount: "Showing {n} results",
      backBtn: "Back to list",
      dateCol: "Date",
      priceCol: "Price",
      disclaimer: "Estimates compiled by the author from public secondary-market data. For reference only, not a live quote — actual transaction prices depend on the market.",
      adLabel: "Advertisement",
      coffeeBtn: "Buy me a coffee",
      coffeeTooltip: "Enjoyed this tool? Buy me a coffee",
      helpTitle: "How to use",
      helpTip1: "Search, or click a brand / category chip to filter.",
      helpTip2: "Click any card to see the full price chart and history table.",
      helpTip3: "Switch 中文 / EN / DE anytime in the top right.",
      helpTip4: "Prices are estimates from public market data, not a live market feed — for reference only.",
      allChip: "All",
      categorySport: "Sport",
      categoryDress: "Dress",
      periodChange: "Change over period",
      latestPrice: "Latest price",
      explainTitle: "Where does this price data actually come from?",
      explainP1: "The prices in this tool are estimates compiled from public secondary-market aggregator data (such as WatchCharts, Chrono24 reference pages and Loupe market-value pages), converted from US dollars to Swiss francs at approximate spot rates. Between the known data points, the quarterly values are smoothed by hand to follow the reported trend, so they are not exact transaction records. There is no connection to any auction house, resale platform or dealer API, and nothing is scraped automatically.",
      explainP2: "The \"data updated\" date at the top of the page marks the last time the figures were manually reviewed and refreshed — it isn't a live feed. Secondary-market watch prices move far more slowly than stocks or crypto, so tracking weekly or monthly trends is more meaningful than chasing second-by-second moves.",
      explainP3: "It's completely normal to see different prices for the same reference elsewhere: region, condition, whether box and papers are complete, individual dealer markup, and the exact timing you check all play a role, so the real transaction price can land above or below the range shown here. Treat these figures as a rough direction and a negotiation starting point, not a precise quote.",
      caseTitle: "Case study: the price rollercoaster of the Patek Philippe Nautilus 5711/1A-010",
      caseP1: "This blue-dial Nautilus is a good example of why secondhand watch prices can swing dramatically, not just drift slowly up or down. After Patek Philippe officially discontinued the 5711 line in 2021, the market went into a buying frenzy, and prices were bid up far above retail in the year or two right after the discontinuation announcement. The earliest data point shown here (January 2024, CHF 106,000) is already a pullback from an even higher historical peak.",
      caseP2: "Over the following fifteen months, the price nearly halved: by April 2025 it had fallen to CHF 69,300, a decline of about 35%. That drop reflects the broader cooling of the high-end secondhand watch market through 2023–2024 — the \"discontinued means it only goes up\" logic that took hold during the pandemic era faded, and a wave of early allocation holders started cashing out around the same time, pushing supply up just as demand softened.",
      caseP3: "But starting in mid-2025, the price began climbing steadily again, reaching CHF 91,300 by July 2026 — roughly a 32% recovery in a little over a year. This \"spike, crash, stabilize and recover\" pattern isn't unusual for discontinued, high-demand references: once short-term speculation fades, watches with genuine scarcity behind them tend to find a new price floor eventually, though that process typically takes a year or two, not a few weeks.",
      caseP4: "That's also why this tool shows the full historical chart instead of just a single current price — looking at any one month in isolation makes it easy to mistake a watch that's simply at a cyclical high or low for one that's \"stable.\"",
      guideTitle: "A Practical Guide to Reading Watch Price Charts",
      guideS1: "Retail price versus secondary-market price",
      guideB1: "A watch has two prices: what the brand charges at retail and what buyers pay on the secondary market. When demand is higher than the supply a retailer can deliver, the secondary price rises above retail; when supply is plentiful or fashion moves on, it falls below. The prices in this tool are secondary-market prices in Swiss francs, not list prices, so a figure above the official price is a premium, not an error.",
      guideS2: "What the percentage on each card actually measures",
      guideB2: "The change shown on each card compares the first and the last point in that watch's history, from January 2024 to the latest entry: last price minus first price, divided by first price. It therefore describes the whole period, not recent momentum. A watch that fell by a third and then recovered can show a small net change that hides the ride, and one that is rising fast today can still show a negative number. Read the chart and the history table alongside the percentage.",
      guideS3: "What a mostly quarterly history can and cannot show",
      guideB3: "Most history points are one price per quarter (January, April, July and October), with monthly points added for the latest months. That is enough to show the direction and size of a cycle, but a spike or dip that lasts only a few weeks can fall between two points and never appear. Treat the chart as a picture of the trend, and check current asking prices with dealers before acting on it.",
      guideS4: "What moves secondary-market prices",
      guideB4: "Several things move these prices, and they often act together: news that a model is being discontinued, the supply a brand allows onto the market, waves of attention on social media, interest rates and the general appetite for luxury goods, and the brand's own retail price increases, which raise the level the secondary market is measured against. Because this tool shows prices in Swiss francs, a stronger or weaker franc against the dollar can also move a series even when the watch's price in other currencies stays flat.",
      guideS5: "Using price history when buying or selling",
      guideB5: "Compare today's price with the whole range on the chart, not just with last month. Buying into a sharp spike carries more risk than buying after a period of stability, and a long decline does not automatically mean a bargain either. Remember that the figure is a market level, not a quote: condition, box and papers, warranty and the dealer's own margin all move the price you actually pay or receive. Note also that the entries here are estimates from public secondhand-market data, not exact transaction records.",
      faqTitle: "Frequently Asked Questions",
      faq: [
        { q: "Is this data pulled from a live market API or auction feed?", a: "No. Every figure is an estimate based on public secondary-market aggregator data and is checked by hand from time to time — there's no automated scraping or third-party live API involved, and the figures are not exact transaction records." },
        { q: "How often is the data updated?", a: "There's no fixed schedule — figures are reviewed and updated manually as the market shifts. The \"data updated\" date at the top of each page tells you exactly how current the numbers are." },
        { q: "Why do prices I see elsewhere differ from what's shown here?", a: "That's expected. Region, condition, whether box and papers are complete, individual dealer markup, and the exact timing all affect price — this tool shows a rough reference range, not a live quote from any specific channel." },
        { q: "Is this the official retail price or the secondhand market price?", a: "It's a secondary/resale-market reference, meant to show whether a popular reference is trading at a premium or discount — not the brand's official retail price." },
        { q: "Can I use this price to negotiate with a dealer?", a: "You can use it as a rough mental benchmark going into a conversation, but not as an actual quote — the real transaction price ultimately depends on the specific dealer or seller you talk to." },
        { q: "Does this tool save my search history or personal info?", a: "No. All searching and filtering happens entirely in your browser; only your language preference is saved locally. No sign-up is required." }
      ]
    },
    de: {
      appTitle: "Uhren-Preistrends",
      searchLabel: "Marke / Modell / Referenz suchen",
      searchPlaceholder: "z. B. Submariner, Rolex, 126610…",
      updatedLabel: "Daten aktualisiert am",
      noResults: "Keine passenden Uhren gefunden.",
      resultsCount: "{n} Ergebnisse angezeigt",
      backBtn: "Zurück zur Liste",
      dateCol: "Datum",
      priceCol: "Preis",
      disclaimer: "Schätzungen des Autors auf Basis öffentlicher Zweitmarktdaten. Nur zur Orientierung, kein Echtzeit-Kurs — der tatsächliche Marktpreis kann abweichen.",
      adLabel: "Anzeige",
      coffeeBtn: "Spendier einen Kaffee",
      coffeeTooltip: "Hat dir das Tool geholfen? Spendier einen Kaffee",
      helpTitle: "Bedienung",
      helpTip1: "Suchen oder per Marken- / Kategorie-Chip filtern.",
      helpTip2: "Auf eine Karte klicken zeigt den vollständigen Preisverlauf und die Datentabelle.",
      helpTip3: "Oben rechts jederzeit zwischen 中文 / EN / DE wechseln.",
      helpTip4: "Die Preise sind Schätzungen aus öffentlichen Marktdaten, kein Live-Marktfeed — nur zur Orientierung.",
      allChip: "Alle",
      categorySport: "Sport",
      categoryDress: "Elegant",
      periodChange: "Veränderung im Zeitraum",
      latestPrice: "Aktueller Preis",
      explainTitle: "Woher stammen diese Preisdaten eigentlich?",
      explainP1: "Die Preise in diesem Tool sind Schätzungen auf Basis öffentlicher Zweitmarkt-Aggregatordaten (etwa Modellseiten von WatchCharts und Chrono24 sowie Marktwertseiten von Loupe), die zu ungefähren Tageskursen von US-Dollar in Schweizer Franken umgerechnet wurden. Zwischen den bekannten Datenpunkten sind die Quartalswerte von Hand geglättet, damit sie dem berichteten Trend folgen; es handelt sich also nicht um exakte Transaktionsdaten. Es gibt keine Anbindung an Auktionshäuser, Wiederverkaufsplattformen oder Händler-APIs, und nichts wird automatisiert abgegriffen.",
      explainP2: "Das Datum „Daten aktualisiert am\" oben auf der Seite zeigt, wann die Zahlen zuletzt manuell überprüft und aktualisiert wurden — kein Live-Feed. Preise auf dem Zweitmarkt für Uhren bewegen sich ohnehin viel langsamer als Aktien oder Kryptowährungen, daher ist die Beobachtung wöchentlicher oder monatlicher Trends sinnvoller als das Verfolgen von Sekundenbewegungen.",
      explainP3: "Es ist völlig normal, für dieselbe Referenz anderswo andere Preise zu sehen: Region, Zustand, Vollständigkeit von Box & Papieren, individuelle Aufschläge einzelner Händler und der genaue Abfragezeitpunkt spielen alle eine Rolle — der tatsächliche Transaktionspreis kann daher über oder unter der hier gezeigten Spanne liegen. Verstehe diese Zahlen als grobe Richtung und Verhandlungsausgangspunkt, nicht als präzises Angebot.",
      caseTitle: "Fallbeispiel: die Preis-Achterbahn der Patek Philippe Nautilus 5711/1A-010",
      caseP1: "Diese blaue Nautilus ist ein gutes Beispiel dafür, warum Gebrauchtuhrenpreise stark schwanken können, statt nur langsam zu steigen oder zu fallen. Nachdem Patek Philippe die 5711er-Serie 2021 offiziell eingestellt hatte, geriet der Markt in einen regelrechten Kaufrausch, und die Preise wurden in den ein bis zwei Jahren nach der Einstellung weit über den Ladenpreis hinaus nach oben getrieben. Der früheste hier gezeigte Datenpunkt (Januar 2024, 106.000 CHF) ist bereits ein Rückgang von einem noch höheren historischen Höchststand.",
      caseP2: "In den folgenden fünfzehn Monaten halbierte sich der Preis fast: Bis April 2025 fiel er auf 69.300 CHF, ein Rückgang von rund 35%. Dieser Einbruch spiegelt die allgemeine Abkühlung des High-End-Gebrauchtuhrenmarkts in den Jahren 2023–2024 wider — die während der Pandemie verbreitete Logik „eingestellt heißt nur noch teurer\" verlor an Kraft, und gleichzeitig begannen viele frühe Käufer mit Zuteilung, ihre Uhren zu Geld zu machen, was das Angebot gerade dann erhöhte, als die Nachfrage nachließ.",
      caseP3: "Ab Mitte 2025 begann der Preis jedoch wieder stetig zu steigen und erreichte im Juli 2026 91.300 CHF — eine Erholung von rund 32% in etwas mehr als einem Jahr. Dieses Muster aus „Höhenflug, Absturz, Stabilisierung und Erholung\" ist bei eingestellten, stark nachgefragten Referenzen nicht ungewöhnlich: Sobald die kurzfristige Spekulation abklingt, finden Uhren mit echter Seltenheit meist irgendwann einen neuen Preisboden — dieser Prozess dauert aber typischerweise ein bis zwei Jahre, nicht ein paar Wochen.",
      caseP4: "Genau deshalb zeigt dieses Tool den vollständigen Preisverlauf und nicht nur eine einzelne aktuelle Zahl — wer nur einen einzelnen Monat betrachtet, verwechselt leicht eine Uhr, die gerade an einem zyklischen Hoch- oder Tiefpunkt steht, mit einer wirklich „stabilen\" Uhr.",
      guideTitle: "Praxisleitfaden: Uhren-Preisdiagramme richtig lesen",
      guideS1: "Listenpreis und Zweitmarktpreis",
      guideB1: "Eine Uhr hat zwei Preise: den Listenpreis, den die Marke im Einzelhandel verlangt, und den Preis, den Käufer auf dem Zweitmarkt zahlen. Übersteigt die Nachfrage das Angebot, das der Handel liefern kann, steigt der Zweitmarktpreis über den Listenpreis; ist das Angebot reichlich oder wendet sich die Mode ab, fällt er darunter. Die Preise in diesem Tool sind Zweitmarktpreise in Schweizer Franken und keine Listenpreise – ein Wert über dem offiziellen Preis ist also ein Aufschlag und kein Fehler.",
      guideS2: "Was die Prozentangabe auf jeder Karte misst",
      guideB2: "Die Veränderung auf jeder Karte vergleicht den ersten und den letzten Punkt der Preishistorie dieser Uhr, von Januar 2024 bis zum neuesten Eintrag: letzter Preis minus erster Preis, geteilt durch den ersten Preis. Sie beschreibt also den gesamten Zeitraum und nicht die jüngste Dynamik. Eine Uhr, die um ein Drittel gefallen und dann wieder gestiegen ist, kann eine kleine Nettoveränderung zeigen, die die Achterbahnfahrt verdeckt, und eine Uhr, die heute schnell steigt, kann trotzdem eine negative Zahl anzeigen. Lesen Sie die Prozentangabe deshalb immer zusammen mit dem Diagramm und der Verlaufstabelle.",
      guideS3: "Was eine überwiegend vierteljährliche Historie zeigt – und was nicht",
      guideB3: "Die meisten Historienpunkte sind ein Preis pro Quartal (Januar, April, Juli und Oktober), für die letzten Monate kommen monatliche Punkte hinzu. Das reicht, um Richtung und Größe eines Zyklus zu erkennen, aber ein Ausschlag nach oben oder unten, der nur wenige Wochen dauert, kann zwischen zwei Punkte fallen und nie im Diagramm erscheinen. Verstehen Sie das Diagramm als Bild des Trends, und fragen Sie bei Händlern nach aktuellen Angebotspreisen, bevor Sie danach handeln.",
      guideS4: "Was Zweitmarktpreise bewegt",
      guideB4: "Mehrere Faktoren bewegen diese Preise, und sie wirken oft gleichzeitig: die Nachricht, dass ein Modell eingestellt wird, die Menge, die eine Marke auf den Markt lässt, Aufmerksamkeitswellen in sozialen Medien, Zinsen und die allgemeine Kauflust für Luxusgüter sowie die eigenen Preiserhöhungen der Marke, die das Niveau anheben, an dem sich der Zweitmarkt misst. Da dieses Tool die Preise in Schweizer Franken zeigt, kann außerdem ein stärkerer oder schwächerer Franken gegenüber dem Dollar eine Kurve bewegen, selbst wenn der Preis der Uhr in anderen Währungen unverändert bleibt.",
      guideS5: "Preisverläufe beim Kaufen und Verkaufen nutzen",
      guideB5: "Vergleichen Sie den heutigen Preis mit der gesamten Spanne im Diagramm und nicht nur mit dem letzten Monat. Wer auf einem steilen Ausschlag kauft, geht ein höheres Risiko ein als nach einer ruhigen Phase, und ein langer Rückgang bedeutet nicht automatisch ein Schnäppchen. Bedenken Sie, dass die Zahl ein Marktniveau und kein Angebot ist: Zustand, Box und Papiere, Garantie und die Marge des Händlers beeinflussen den Preis, den Sie tatsächlich zahlen oder erhalten. Beachten Sie außerdem, dass die Einträge hier Schätzungen auf Basis öffentlicher Gebrauchtmarktdaten sind und keine exakten Transaktionsdaten.",
      faqTitle: "Häufig gestellte Fragen",
      faq: [
        { q: "Stammen diese Daten aus einer Live-Markt-API oder einem Auktions-Feed?", a: "Nein. Jede Zahl ist eine Schätzung auf Basis öffentlicher Zweitmarkt-Aggregatordaten und wird von Zeit zu Zeit manuell geprüft – kein automatisiertes Scraping, keine Live-API von Drittanbietern, und es handelt sich nicht um exakte Transaktionsdaten." },
        { q: "Wie oft werden die Daten aktualisiert?", a: "Es gibt keinen festen Rhythmus — die Zahlen werden manuell geprüft und aktualisiert, wenn sich der Markt verändert. Das Datum „Daten aktualisiert am\" oben auf jeder Seite zeigt genau, wie aktuell die Werte sind." },
        { q: "Warum weichen Preise, die ich anderswo sehe, von denen hier ab?", a: "Das ist normal. Region, Zustand, Vollständigkeit von Box & Papieren, individuelle Händleraufschläge und der genaue Zeitpunkt beeinflussen alle den Preis — dieses Tool zeigt eine grobe Referenzspanne, kein Live-Angebot eines bestimmten Anbieters." },
        { q: "Ist das der offizielle Ladenpreis oder der Preis auf dem Gebrauchtmarkt?", a: "Es handelt sich um eine Referenz für den Zweitmarkt, die zeigt, ob eine gefragte Referenz mit Auf- oder Abschlag gehandelt wird — nicht um den offiziellen Ladenpreis der Marke." },
        { q: "Kann ich diesen Preis nutzen, um mit einem Händler zu verhandeln?", a: "Du kannst ihn als groben gedanklichen Richtwert vor einem Gespräch nutzen, aber nicht als tatsächliches Angebot — der reale Transaktionspreis hängt letztlich vom jeweiligen Händler oder Verkäufer ab." },
        { q: "Speichert dieses Tool meinen Suchverlauf oder persönliche Daten?", a: "Nein. Die gesamte Suche und Filterung läuft vollständig im Browser ab; nur die Sprachpräferenz wird lokal gespeichert. Eine Anmeldung ist nicht nötig." }
      ]
    }
  };

  const LOCALE_MAP = { zh: "zh-CN", en: "en-US", de: "de-DE" };

  let currentLang = localStorage.getItem(LANG_KEY) || "de";
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
  const resultsStatus = document.getElementById("resultsStatus");
  const updatedDateEl = document.getElementById("updatedDate");
  const sampleBanner = document.getElementById("sampleBanner");
  const viewList = document.getElementById("viewList");
  const viewDetail = document.getElementById("viewDetail");
  const backBtn = document.getElementById("backBtn");

  // ---------- Language ----------
  const faqListEl = document.getElementById("faqList");
  function renderFAQ() {
    if (!faqListEl) return;
    const faq = (i18n[currentLang] && i18n[currentLang].faq) || [];
    faqListEl.innerHTML = "";
    faq.forEach((item) => {
      const details = document.createElement("details");
      details.className = "faq-item";
      const summary = document.createElement("summary");
      summary.innerHTML = '<span class="chev">▶</span> <span>' + item.q + "</span>";
      const body = document.createElement("div");
      body.className = "faq-a";
      body.textContent = item.a;
      details.appendChild(summary);
      details.appendChild(body);
      faqListEl.appendChild(details);
    });
  }

  function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    renderFAQ();
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
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
  const helpModalBox = helpModal.querySelector(".modal");

  function getFocusable(container) {
    return Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ));
  }

  function openHelpModal() {
    helpModal.hidden = false;
    helpClose.focus();
  }

  function closeHelpModal() {
    helpModal.hidden = true;
    helpToggle.focus();
  }

  helpToggle.addEventListener("click", openHelpModal);
  helpClose.addEventListener("click", closeHelpModal);
  helpModal.addEventListener("click", (e) => { if (e.target === helpModal) closeHelpModal(); });
  document.addEventListener("keydown", (e) => {
    if (helpModal.hidden) return;
    if (e.key === "Escape") { closeHelpModal(); return; }
    if (e.key !== "Tab") return;
    const focusable = getFocusable(helpModalBox);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
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
    btn.setAttribute("aria-pressed", active ? "true" : "false");
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
    if (resultsStatus) {
      resultsStatus.textContent = list.length === 0
        ? t("noResults")
        : t("resultsCount").replace("{n}", list.length);
    }

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
    if (typeof gtag === "function") gtag("event", "tool_result_generated", { tool_name: "watch-price-tracker" });
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
