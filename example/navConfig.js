export const navItems = [
  { index: 1, label: "A股市盈率" },
  { index: 2, label: "A股市净率" },
  { index: 12, label: "申万行业" },
  { index: 13, label: "规模指数/行业代表" },
  { index: 4, label: "沪深港通/融资融券" },
  { index: 7, label: "底部研究" },
  { index: 15, label: "市场宽度" },
  { index: 16, label: "景气度/拥挤度研究" },
  { index: 9, label: "宏观数据" },
  { index: 17, label: "券商十大金股" },
  { index: 5, label: "美股/港股" },
  { index: 11, label: "基金" },
  { index: 14, label: "综合" },
];

export const panelConfigs = {
  1: {
    groups: [
      {
        title: "A股主要板块市盈率",
        links: [
          { href: "/stockdata/market_pe", label: "A股平均市盈率" },
          { href: "/stockdata/shanghaiPE", label: "上证平均市盈率" },
          { href: "/stockdata/shenzhenPE", label: "深圳平均市盈率", highlight: true },
          { href: "/stockdata/cybPE", label: "创业板平均市盈率", highlight: true },
          { href: "/stockdata/ke-chuang-ban-pe", label: "科创板平均市盈率" },
          { href: "/stockdata/a-pe", label: "全部A股(沪深)市盈率" },
          { href: "/stockdata/a-ttm-lyr", label: "全部A股市盈率 平均数 中位数", highlight: true, large: true },
        ],
      },
      {
        title: "A股指数市盈率",
        links: [
          { href: "/stockdata/indices", label: "指数最新市盈率", highlight: true },
          { href: "/stockdata/hs300-ttm-lyr", label: "沪深300市盈率", highlight: true },
          { href: "/stockdata/sz50-ttm-lyr", label: "上证50市盈率" },
          { href: "/stockdata/sz000015-ttm-lyr", label: "上证红利市盈率", highlight: true },
          { href: "/stockdata/sz399324-ttm-lyr", label: "深证红利市盈率", highlight: true },
          { href: "/stockdata/sz180-ttm-lyr", label: "上证180市盈率" },
          { href: "/stockdata/sz380-ttm-lyr", label: "上证380市盈率" },
          { href: "/stockdata/zz100-ttm-lyr", label: "中证100市盈率" },
          { href: "/stockdata/zz500-ttm-lyr", label: "中证500市盈率" },
          { href: "/stockdata/zz800-ttm-lyr", label: "中证800市盈率" },
          { href: "/stockdata/zz1000-ttm-lyr", label: "中证1000市盈率" },
          { href: "/stockdata/sz399673-ttm-lyr", label: "创业板50市盈率" },
          { href: "/stockdata/sz399330-ttm-lyr", label: "深证100市盈率" },
          { href: "/stockdata/gz2000-ttm-lyr", label: "国证2000市盈率" },
          { href: "/stockdata/index-ttm-lyr-pe?indexCode=930050.CSI", label: "中证A50市盈率" },
          { href: "/stockdata/index-ttm-lyr-pe?indexCode=000510.CSI", label: "中证A500市盈率" },
          { href: "/stockdata/index-ttm-lyr-pe?indexCode=932365.CSI", label: "自由现金流市盈率" },
        ],
      },
      {
        title: "指数市盈率",
        links: [
          { href: "/stockdata/weight-pe?marketId=399006.SZ", label: "创业板指市盈率" },
          { href: "/stockdata/weight-pe?marketId=399001.SZ", label: "深证成指市盈率" },
          { href: "/stockdata/weight-pe?marketId=000001.SH", label: "上证指数市盈率" },
        ],
      },
    ],
  },
  2: {
    groups: [
      {
        title: "A股主要板块市净率",
        links: [
          { href: "/stockdata/market_pb", label: "A股平均市净率" },
          { href: "/stockdata/shanghaiPB", label: "上证A股市净率" },
          { href: "/stockdata/shenzhenPB", label: "深圳A股市净率", highlight: true },
          { href: "/stockdata/cybPB", label: "创业板市净率" },
          { href: "/stockdata/ke-chuang-ban-pb", label: "科创板市净率" },
          { href: "/stockdata/a-add-pb", label: "全部A股(沪深)市净率" },
          { href: "/stockdata/all-pb", label: "全部A股市净率 平均数 中位数", highlight: true, style: { width: "300px" } },
        ],
      },
      {
        title: "A股指数市净率",
        links: [
          { href: "/stockdata/indices", label: "指数最新市净率", highlight: true },
          { href: "/stockdata/hs300-pb", label: "沪深300市净率", highlight: true },
          { href: "/stockdata/sz50-pb", label: "上证50市净率" },
          { href: "/stockdata/sz000015-pb", label: "上证红利市净率", highlight: true },
          { href: "/stockdata/sz399324-pb", label: "深证红利市净率", highlight: true },
          { href: "/stockdata/sz180-pb", label: "上证180市净率" },
          { href: "/stockdata/sz380-pb", label: "上证380市净率" },
          { href: "/stockdata/zz100-pb", label: "中证100市净率" },
          { href: "/stockdata/zz500-pb", label: "中证500市净率" },
          { href: "/stockdata/zz800-pb", label: "中证800市净率" },
          { href: "/stockdata/zz1000-pb", label: "中证1000市净率" },
          { href: "/stockdata/sz399673-pb", label: "创业板50市净率" },
          { href: "/stockdata/sz399330-pb", label: "深证100市净率" },
          { href: "/stockdata/gz2000-pb", label: "国证2000市净率" },
          { href: "/stockdata/index-pb?indexCode=930050.CSI", label: "中证A50市净率" },
          { href: "/stockdata/index-pb?indexCode=000510.CSI", label: "中证A500市净率" },
          { href: "/stockdata/index-pb?indexCode=932365.CSI", label: "自由现金流市净率" },
        ],
      },
      {
        title: "指数市净率",
        links: [
          { href: "/stockdata/weight-pb?marketId=399006.SZ", label: "创业板指市净率" },
          { href: "/stockdata/weight-pb?marketId=399001.SZ", label: "深证成指市净率" },
          { href: "/stockdata/weight-pb?marketId=000001.SH", label: "上证指数市净率" },
        ],
      },
    ],
  },
  4: {
    groups: [
      {
        title: "沪深港通",
        links: [
          { href: "/stockdata/hk-to-a", label: "北向资金", large: true },
          { href: "/stockdata/hk-to-a-acc", label: "北向资金累计", large: true },
          { href: "/stockdata/hu-shen-gang-tong", label: "*沪深港通资金流向", highlight: true, large: true },
          { href: "/stockdata/hu-gu-tong", label: "沪股通", large: true },
          { href: "/stockdata/shen-gu-tong", label: "深股通", large: true },
          { href: "/stockdata/gang-gu-tong-hu", label: "港股通（沪）", large: true },
          { href: "/stockdata/gang-gu-tong-shen", label: "港股通（深）", large: true },
        ],
      },
      {
        title: "融资融券",
        links: [
          { href: "/stockdata/margin-trading", label: "*融资融券变动" },
          { href: "/stockdata/rzrqye", label: "*融资融券余额" },
        ],
      },
    ],
  },
  5: {
    groups: [
      {
        title: "美股",
        links: [
          { href: "/stockdata/market/sandp", label: "标普500市盈率", large: true },
          { href: "/stockdata/charts/627", label: "标普500席勒市盈率", large: true },
          { href: "/stockdata/charts/628", label: "标普500股息率", large: true },
          { href: "/stockdata/charts/630", label: "标普500市盈率", large: true },
          { href: "/stockdata/charts/651", label: "CNN 恐慌贪心指标", large: true },
          { href: "/stockdata/charts/629", label: "标普500股债利差", large: true },
          { href: "/stockdata/us-stock-research-nav", label: "其他所有美股数据", large: true },
        ],
      },
      {
        title: "港股市盈率",
        links: [
          { href: "/stockdata/market/hsi", label: "恒生指数市盈率" },
          { href: "/stockdata/market/hsf", label: "恒生金融指数" },
          { href: "/stockdata/market/hsp", label: "恒生地产指数" },
          { href: "/stockdata/market/hsu", label: "恒生公共指数" },
          { href: "/stockdata/market/hsci", label: "恒生工商指数" },
          { href: "/stockdata/market/hscei", label: "恒生中国企业指数" },
          { href: "/stockdata/hsi-overview", label: "其他恒生主题指数" },
        ],
      },
      {
        title: "港股股息率",
        links: [
          { href: "/stockdata/market/hk/dv/hsi", label: "恒生指数股息率" },
          { href: "/stockdata/market/hk/dv/hsf", label: "恒生金融指数" },
          { href: "/stockdata/market/hk/dv/hsp", label: "恒生地产指数" },
          { href: "/stockdata/market/hk/dv/hsu", label: "恒生公共指数" },
          { href: "/stockdata/market/hk/dv/hsci", label: "恒生工商指数" },
          { href: "/stockdata/market/hk/dv/hscei", label: "恒生中国企业指数" },
          { href: "/stockdata/hsi-overview", label: "其他恒生主题指数" },
        ],
      },
    ],
  },
  7: {
    groups: [
      {
        links: [
          { href: "/stockdata/below-net-asset-statistics?marketId=1", label: "全部A股 破净股统计", large: true },
          { href: "/stockdata/below-net-asset-statistics?marketId=000300.XSHG", label: "沪深300 破净股统计", large: true },
          { href: "/stockdata/below-net-asset-statistics?marketId=000016.SH", label: "上证50 破净股统计", large: true },
          { href: "/stockdata/below-net-asset-statistics?marketId=000905.SH", label: "中证500 破净股统计", large: true },
          { href: "/stockdata/market-turn-over-ratio-statistics", label: "换手率占比统计", large: true },
          { href: "/stockdata/marketcap-gdp", label: "总市值比GDP", highlight: true, large: true },
          { href: "/stockdata/equity-bond-spread", label: "股债利差", highlight: true, large: true },
          { href: "/stockdata/ma-statistics", label: "5/20/50日均线统计", highlight: true, large: true },
          { href: "/stockdata/kdj-statistics", label: "KDJ指标平均值", large: true },
          { href: "/stockdata/high-low-statistics", label: "创新高、新低数量统计", large: true },
          { href: "/stockdata/stock-day-limit", label: "沪深A股涨停板特征统计", large: true },
          { href: "/stockdata/market-style?indexCode=1", label: "恐慌&贪心指标", large: true },
          { href: "/stockdata/a-risk-premium", label: "A股风险溢价", large: true, highlight: true },
          { href: "/stockdata/hsi-risk-premium", label: "港股风险溢价", large: true, highlight: true },
          { href: "/stockdata/hs300-risk-premium", label: "沪深300风险溢价", large: true },
          { href: "/stockdata/hs300-tcjr-risk-premium", label: "沪深300(剔除金融)风险溢价", large: true },
          { href: "/stockdata/sz50-risk-premium", label: "上证50风险溢价", large: true },
          { href: "/stockdata/market-style-rotation", label: "价值vs小盘风格轮动(沪深300vs中证500)", large: true },
          { href: "/stockdata/market-style-rotation-hs300-gz2000", label: "价值vs小盘风格轮动(沪深300vs国证2000)", large: true, highlight: true },
          { href: "/stockdata/market-style-rotation/gz2000-divided-by-hs300", label: "国证2000/沪深300", large: true, highlight: true },
          { href: "/stockdata/china-10-year-bond-yield", label: "股债轮动指标(十年国债倒数与PE)", large: true },
        ],
      },
    ],
  },
  9: {
    groups: [
      {
        title: "央行统计",
        links: [
          { href: "/stockdata/aggregate-financing-to-the-real-economy-vs-a", label: "社会融资规模增速", middle: true },
          { href: "/stockdata/aggregate-financing-to-the-real-economy-vs-m2", label: "社会融资规模增速与M2", middle: true },
          { href: "/stockdata/mid-long-loans", label: "中长期贷款增速", middle: true },
          { href: "/stockdata/enterprise-mid-long-loans", label: "企业端中长期贷款增速", middle: true },
          { href: "/stockdata/residents-mid-long-loans", label: "居民端中长期贷款增速", middle: true },
          { href: "/stockdata/m1m2", label: "M1M2总量", middle: true },
          { href: "/stockdata/broadmoney", label: "M1-M2剪刀差", middle: true },
          { href: "/stockdata/m1-yoy", label: "M1同比", middle: true },
          { href: "/stockdata/m2-yoy", label: "M2同比", middle: true },
          { href: "/stockdata/m2-gdp", label: "M2/GDP", middle: true },
          { href: "/stockdata/m1-ppi", label: "M1-PPI", middle: true },
          { href: "/stockdata/m2yoy-gdp", label: "M2同比与名义GDP之差", middle: true },
          { href: "/stockdata/aggregate-financing-to-the-real-economy-m2", label: "M2与社融剪刀差", middle: true },
          { href: "/stockdata/charts/1882", label: "住户存款/沪深300市值", middle: true },
        ],
      },
      {
        title: "经济总量",
        links: [
          { href: "/stockdata/gdp-yoy-normal-gdp-quarter", label: "中国实际GDP", middle: true },
          { href: "/stockdata/gdpyoy-vs-m2yoy", label: "中国名义GDP当年累计同比", middle: true },
          { href: "/stockdata/power-generation", label: "中国发电量", middle: true },
          { href: "/stockdata/good-transported", label: "货运量", middle: true },
          { href: "/stockdata/railway-freight-volume", label: "铁路货运量", middle: true },
          { href: "/stockdata/rscg", label: "社会消费品零售", middle: true },
          { href: "/stockdata/urban-unemployment-rate", label: "城镇调查失业率", middle: true },
          { href: "/stockdata/fixed-investments", label: "固定资产投资累计增速", middle: true },
        ],
      },
      {
        title: "物价",
        links: [
          { href: "/stockdata/cpi", label: "CPI同比", middle: true },
          { href: "/stockdata/ppi", label: "PPI同比", middle: true },
          { href: "/stockdata/ppi-cpi", label: "PPI与CPI之差", middle: true },
          { href: "/stockdata/ppi-ppirm", label: "PPI与PPIRM之差", middle: true },
        ],
      },
      {
        title: "外贸",
        links: [
          { href: "/stockdata/customs-import-export-volume", label: "进出口总值同比增长", middle: true },
          { href: "/stockdata/customs-export-volume", label: "出口总值同比增长", middle: true },
          { href: "/stockdata/customs-import-volume", label: "进口总值同比增长", middle: true },
          { href: "/stockdata/customs-dif-volume", label: "进出口差额 累计差额", middle: true },
        ],
      },
      {
        title: "制造服务",
        links: [
          { href: "/stockdata/industrial-enterprise-profit", label: "工业企业利润总额累计增长", max: true },
          { href: "/stockdata/industrial-enterprise-stock", label: "工业企业产成品存货累计增长", max: true },
          { href: "/stockdata/industrial-enterprise-loss", label: "工业亏损企业亏损累计增长", max: true },
          { href: "/stockdata/pmi", label: "PMI和股市同期", middle: true },
          { href: "/stockdata/cn-pmi-xdd-kc", label: "中国官方PMI-新订单&库存", middle: true },
          { href: "/stockdata/cn-pmi-cyryzs", label: "中国官方PMI-从业人员指数", middle: true },
        ],
      },
      {
        title: "宏观Beta因子",
        links: [
          { href: "/stockdata/treasury-yield-stock-market", label: "美债收益率与A股同期走势图", middle: true },
          { href: "/stockdata/treasury-yield-spread-vs-cyb", label: "美债期限利差与创业板的同期", middle: true },
          { href: "/stockdata/treasury-yield-spread-vs-gzcz", label: "美债期限利差与国证成长指数同期", middle: true },
          { href: "/stockdata/treasury-yield-cn-us-spread-vs-hs300", label: "中美利差与沪深300同期", middle: true },
          { href: "/stockdata/cn10y-us10y-spread-vs-hs300", label: "中美10年期国债利差与沪深300同期", middle: true },
          { href: "/stockdata/us-dollar-index-vs-a", label: "美元指数", middle: true },
          { href: "/stockdata/rmb-us-dollar-exchange-vs-a", label: "美元人民币中间价", middle: true },
          { href: "/stockdata/US-10-year-bond-yield-vs-a", label: "美国国债收益率:10年", middle: true },
          { href: "/stockdata/US-real-rate-of-return-vs-a", label: "美国国债实际收益率:10年", middle: true },
          { href: "/stockdata/china-bond-tb-ytm-10Y", label: "中国国债到期收益率:10年", middle: true },
          { href: "/stockdata/charts/212", label: "中美10年国债利差 vs 美元人民币汇率中间价", middle: true },
          { href: "/stockdata/us-dollar-index-vs-gold", label: "现货黄金 vs 美元指数", middle: true },
          { href: "/stockdata/fed-interest-rate-and-us-treasury-yield", label: "联邦基金利率和美债同期", middle: true },
        ],
      },
    ],
  },
  11: {
    groups: [
      {
        title: "基金仓位走势图",
        links: [
          { href: "/stockdata/fund-position/pos-stock", label: "股票型基金仓位走势图", style: { width: "200px" } },
          { href: "/stockdata/fund-position/pos-pingheng", label: "平衡混合型基金仓位走势图", style: { width: "200px" } },
          { href: "/stockdata/fund-position/pos-linghuo", label: "灵活配置型基金仓位走势图", style: { width: "200px" } },
        ],
      },
      {
        title: "排名",
        links: [
          { href: "/stockdata/fund-sw-industry-holding?level=1&endDate=20230331", label: "基金重仓行业排名-申万1级", style: { width: "200px" } },
          { href: "/stockdata/fund-sw-industry-holding?level=2&endDate=20230331", label: "基金重仓行业排名-申万2级", style: { width: "200px" } },
          { href: "/stockdata/fund-shareholding-rankings", label: "基金重仓股排名", style: { width: "200px" } },
        ],
      },
      {
        title: "仓位",
        links: [
          { href: "/stockdata/fund-holding-rate-history?industryCode=主动型基金仓位(Top10)&keys=fund_sw_主动型基金仓位(Top10),hs300", label: "主动型基金仓位-披露仓位计算版", style: { width: "220px", paddingRight: "20px" } },
          { href: "/stockdata/fund-holding-rate-history?industryCode=股票型仓位(Top10)&keys=fund_sw_股票型仓位(Top10),hs300", label: "股票型仓位-披露仓位计算版", style: { width: "200px" } },
          { href: "/stockdata/fund-holding-rate-history?industryCode=混合型仓位(Top10)&keys=fund_sw_混合型仓位(Top10),hs300", label: "混合型仓位-披露仓位计算版", style: { width: "200px" } },
          { href: "/stockdata/fund-holding-rate-history?industryCode=灵活型仓位(Top10)&keys=fund_sw_灵活型仓位(Top10),hs300", label: "灵活型仓位-披露仓位计算版", style: { width: "200px" } },
        ],
      },
      {
        title: "基金重仓指数",
        links: [
          { href: "/stockdata/index-basic?indexCode=800200.LG", label: "基金重仓前200名" },
          { href: "/stockdata/index-basic?indexCode=800100.LG", label: "基金重仓前100名" },
          { href: "/stockdata/index-basic?indexCode=800050.LG", label: "基金重仓前50名" },
          { href: "/stockdata/index-basic?indexCode=800020.LG", label: "基金重仓前20名" },
        ],
      },
    ],
  },
  14: {
    groups: [
      {
        title: "波段分析",
        links: [
          { href: "/stockdata/market-analysis-shanghai", label: "上证指数波段分析" },
          { href: "/stockdata/market-analysis-szcz", label: "深证成指波段分析" },
          { href: "/stockdata/market-analysis-hs300", label: "沪深300波段分析" },
          { href: "/stockdata/market-analysis-chuangye", label: "创业板波段分析" },
          { href: "/stockdata/market-analysis-average-price", label: "A股平均股价" },
        ],
      },
      {
        title: "热度分析",
        links: [
          { href: "/stockdata/market-activity", label: "赚钱效应分析" },
          { href: "/stockdata/market-activity-trend", label: "赚钱效应日内趋势" },
          { href: "/stockdata/holder-trade-count", label: "A股股东增持、减持统计数据", style: { width: "200px" } },
        ],
      },
      {
        title: "基本面分析",
        links: [
          { href: "/stockdata/guxilv", label: "A股股息率统计" },
          { href: "/stockdata/companynum", label: "A股上市公司家数" },
          { href: "/stockdata/shenzhenguben", label: "深圳A股总股本" },
        ],
      },
      {
        title: "情绪指标",
        links: [
          { href: "/stockdata/averageposition", label: "平均持仓与股市同期", style: { width: "200px" } },
          { href: "/stockdata/a_shares_new_account", label: "A股新增开户数（周数据）", style: { width: "200px" } },
          { href: "/stockdata/new-investors", label: "A股新增开户数（月数据）", style: { width: "200px" } },
        ],
      },
      {
        title: "追涨情绪",
        links: [
          { href: "/stockdata/emotion-daily?emotionType=limitUp", label: "昨日涨停指数", style: { width: "200px" } },
          { href: "/stockdata/emotion-daily?emotionType=hotStock", label: "TOP100指数", style: { width: "200px" } },
        ],
      },
    ],
  },
  15: {
    groups: [
      {
        links: [
          { href: "/stockdata/sw-market-width", label: "市场宽度(申万行业1级)", style: { width: "200px" } },
          { href: "/stockdata/sw-market-width/sec-level", label: "市场宽度(申万行业2级)", style: { width: "200px" } },
        ],
      },
    ],
  },
  16: {
    groups: [
      {
        title: "景气度",
        links: [
          { href: "/stockdata/middle-avg-indicator?indicatorCode=netProfitYoy", label: "净利润增长率" },
          { href: "/stockdata/middle-avg-indicator?indicatorCode=orYoy", label: "营业收入增长率" },
          { href: "/stockdata/middle-avg-indicator?indicatorCode=opYoy", label: "营业利润增长率" },
          { href: "/stockdata/middle-avg-indicator?indicatorCode=trYoy", label: "营业总收入增长率" },
          { href: "/stockdata/middle-avg-indicator?indicatorCode=ebtYoy", label: "利润总额增长率" },
          { href: "/stockdata/middle-avg-indicator?indicatorCode=roeYoy", label: "ROE增长率" },
        ],
      },
      {
        title: "拥挤度",
        links: [
          { href: "/stockdata/ashares-congestion", label: "大盘拥挤度(逃顶利器)", style: { width: "180px" } },
          { href: "https://legulegu.com/stockdata/charts/426", label: "融资买入/成交额(逃顶利器)", style: { width: "200px" } },
          { href: "/stockdata/sw-congestion", label: "行业拥挤度(申万一级)", style: { width: "200px" } },
          { href: "/stockdata/sw-congestion/sec-level", label: "行业拥挤度(申万二级)", style: { width: "200px" } },
        ],
      },
      {
        title: "小市值",
        links: [
          { href: "/stockdata/low-market-cap", label: "小市值因子拥挤度和因子估值", style: { width: "200px" } },
        ],
      },
    ],
  },
  17: {
    groups: [
      {
        links: [
          { href: "/stockdata/broker-recommend-monthly-regression", label: "券商十大金股组合（当月）", large: true },
          { href: "/stockdata/broker-recommend-monthly-regression/statistics", label: "往期券商金股统计" },
        ],
      },
    ],
  },
};

export const verticalGroupConfig = {
  13: [
    {
      title: "规模指数",
      links: [
        { href: "/stockdata/index-basic?indexCode=000016.SH", label: "上证50指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000300.SH", label: "沪深300指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000688.SH", label: "上证科创板50指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000905.SH", label: "中证500指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000015.SH", label: "上证红利指数", large: true },
        { href: "/stockdata/index-basic?indexCode=399324.SZ", label: "深证红利指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000010.SH", label: "上证180指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000009.SH", label: "上证380指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000903.SH", label: "中证100指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000906.SH", label: "中证800指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000852.SH", label: "中证1000指数", large: true },
        { href: "/stockdata/index-basic?indexCode=399673.SZ", label: "创业板50指数", large: true },
        { href: "/stockdata/index-basic?indexCode=399330.SZ", label: "深证100指数", large: true },
        { href: "/stockdata/index-basic?indexCode=399303.SZ", label: "国证2000指数", large: true },
        { href: "/stockdata/index-basic?indexCode=930050.CSI", label: "中证A50指数", large: true },
        { href: "/stockdata/index-basic?indexCode=000510.CSI", label: "中证A500指数", large: true },
        { href: "/stockdata/index-basic?indexCode=932365.CSI", label: "自由现金流指数", large: true },
      ],
    },
    {
      vertical: true,
      groups: [
        {
          title: "制造业",
          links: [
            { href: "/stockdata/index-basic?indexCode=H30531.CSI", label: "精工制造" },
            { href: "/stockdata/index-basic?indexCode=930599.CSI", label: "中证高装" },
            { href: "/stockdata/index-basic?indexCode=930820.CSI", label: "CS高端装" },
            { href: "/stockdata/index-basic?indexCode=399967.SZ", label: "中证军工" },
            { href: "/stockdata/index-basic?indexCode=399368.SZ", label: "国证军工" },
            { href: "/stockdata/index-basic?indexCode=399417.SZ", label: "国证新能源车" },
            { href: "/stockdata/index-basic?indexCode=931151.CSI", label: "中证光伏产业" },
          ],
        },
        {
          title: "医药/医疗",
          links: [
            { href: "/stockdata/index-basic?indexCode=000991.SH", label: "全指医药" },
            { href: "/stockdata/index-basic?indexCode=930791.CSI", label: "CS医药TI" },
            { href: "/stockdata/index-basic?indexCode=000933.SH", label: "中证医药" },
            { href: "/stockdata/index-basic?indexCode=399394.SZ", label: "国证医药" },
            { href: "/stockdata/index-basic?indexCode=h00121.SH", label: "上证医药主题全收益" },
            { href: "/stockdata/index-basic?indexCode=930743.CSI", label: "中证生物科技主题" },
            { href: "/stockdata/index-basic?indexCode=399989.SZ", label: "中证医疗" },
          ],
        },
        {
          title: "消费",
          links: [
            { href: "/stockdata/index-basic?indexCode=931139.CSI", label: "CS消费50" },
            { href: "/stockdata/index-basic?indexCode=000990.SH", label: "全指消费" },
            { href: "/stockdata/index-basic?indexCode=931068.CSI", label: "消费龙头" },
            { href: "/stockdata/index-basic?indexCode=000932.SH", label: "中证消费" },
            { href: "/stockdata/index-basic?indexCode=399997.SZ", label: "中证白酒" },
            { href: "/stockdata/index-basic?indexCode=399365.SZ", label: "国证农业" },
          ],
        },
        {
          title: "金融",
          links: [
            { href: "/stockdata/index-basic?indexCode=000914.SH", label: "300金融" },
            { href: "/stockdata/index-basic?indexCode=000934.SH", label: "中证金融" },
            { href: "/stockdata/index-basic?indexCode=000992.SH", label: "全指金融" },
            { href: "/stockdata/index-basic?indexCode=399986.CSI", label: "中证银行" },
          ],
        },
        {
          title: "资源",
          links: [
            { href: "/stockdata/index-basic?indexCode=000944.CSI", label: "内地资源" },
            { href: "/stockdata/index-basic?indexCode=000805.CSI", label: "A股资源" },
            { href: "/stockdata/index-basic?indexCode=000979.CSI", label: "大宗商品" },
            { href: "/stockdata/index-basic?indexCode=399440.SZ", label: "国证钢铁" },
            { href: "/stockdata/index-basic?indexCode=000820.CSI", label: "煤炭指数" },
            { href: "/stockdata/index-basic?indexCode=000819.SH", label: "中证有色金属" },
            { href: "/stockdata/index-basic?indexCode=399998.SZ", label: "中证煤炭" },
          ],
        },
        {
          title: "科技",
          links: [
            { href: "/stockdata/index-basic?indexCode=931186.CSI", label: "中证科技" },
            { href: "/stockdata/index-basic?indexCode=000998.CSI", label: "中证TMT" },
            { href: "/stockdata/index-basic?indexCode=000993.SH", label: "全指信息" },
            { href: "/stockdata/index-basic?indexCode=h21081.CSI", label: "中证半导全收益" },
            { href: "/stockdata/index-basic?indexCode=921441.CSI", label: "中证人工智能50全收益", large: true },
          ],
        },
      ],
    },
    {
      title: "红利指数",
      links: [
        { href: "/stockdata/index-basic?indexCode=000922.CSI", label: "中证红利" },
        { href: "/stockdata/index-basic?indexCode=h30269.CSI", label: "中证红利低波" },
        { href: "/stockdata/index-basic?indexCode=931468.CSI", label: "中证红利质量" },
        { href: "/stockdata/index-basic?indexCode=H30089.CSI", label: "中证红利潜力" },
        { href: "/stockdata/index-basic?indexCode=H30094.CSI", label: "中证消费红利" },
        { href: "/stockdata/index-basic?indexCode=000824.SH", label: "中证国企红利" },
        { href: "/stockdata/index-basic?indexCode=000015.SH", label: "上证红利" },
        { href: "/stockdata/index-basic?indexCode=399324.SZ", label: "深证红利" },
      ],
    },
    {
      title: "其他主题指数",
      links: [
        { href: "/stockdata/index-basic?indexCode=000159.SH", label: "上证沪股通指数" },
        { href: "/stockdata/index-basic?indexCode=930901.SH", label: "中证动漫游戏" },
        { href: "/stockdata/index-basic?indexCode=930742.CSI", label: "中证电商" },
        { href: "/stockdata/index-basic?indexCode=930706.CSI", label: "中证水泥" },
        { href: "/stockdata/index-basic?indexCode=000827.SH", label: "中证环保" },
        { href: "/stockdata/index-basic?indexCode=399989.SZ", label: "中证医疗" },
        { href: "/stockdata/index-basic?indexCode=399971.SZ", label: "中证传媒" },
        { href: "/stockdata/index-basic?indexCode=399812.SZ", label: "养老产业" },
        { href: "/stockdata/index-basic?indexCode=399438.SZ", label: "国证电力" },
        { href: "/stockdata/index-basic?indexCode=399412.SZ", label: "国证新能" },
        { href: "/stockdata/index-basic?indexCode=399354.SZ", label: "分析师指数" },
        { href: "/stockdata/index-basic?indexCode=930759.CSI", label: "雪球100" },
        { href: "/stockdata/index-basic?indexCode=930760.CSI", label: "雪球智选" },
      ],
    },
  ],
};
