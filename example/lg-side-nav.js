import React from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";
import NavItem from "../side-nav/NavItem";
import NavPanelGroup from "../side-nav/NavPanelGroup";
import Link from "../side-nav/Link";
import NavPanel from "../side-nav/NavPanel";

import classNames from "classnames";

import "./lg-side-nav.scss";
import LinkGroup from "../side-nav/LinkGroup";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import getUrl from "./url";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      level1SwData: [],
      level2SwData: [],
      level3SwData: []
    }
  }

  componentDidMount() {
    axios.get(getUrl())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          let level1SwData = response.data.filter(function (item) {
            return item.level == 1;
          });
          let level2SwData = response.data.filter(function (item) {
            return item.level == 2;
          });
          let level3SwData = response.data.filter(function (item) {
            return item.level == 3;
          });
          this.setState({
            level1SwData,
            level2SwData,
            level3SwData
          })
        }
      });
  }

  handleMouseOver(e, index) {
    this.setState({
      selectedIndex: index
    });
  }

  handleMouseLeave(e) {
    this.setState({
      selectedIndex: -1
    });
  }

  render() {
    return (
      <div className={classNames('lg-side-nav-container')} onMouseLeave={this.handleMouseLeave}>
        <Nav title="全部分类">
          <NavItem index={1} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 1}>
            A股市盈率
          </NavItem>
          <NavItem index={2} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 2}>
            A股市净率
          </NavItem>
          <NavItem index={3} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 3}>
            中证行业
          </NavItem>
          <NavItem index={12} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 12}>
            申万行业
          </NavItem>
          <NavItem index={13} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 13}>
            规模指数/行业代表
          </NavItem>
          <NavItem index={4} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 4}>
            沪深港通/融资融券
          </NavItem>
          <NavItem index={7} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 7}>
            底部研究
          </NavItem>
          <NavItem index={15} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 15}>
            市场宽度
          </NavItem>
          <NavItem index={16} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 16}>
            景气度/拥挤度研究
          </NavItem>
          <NavItem index={9} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 9}>
            宏观数据
          </NavItem>
          <NavItem index={17} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 17}>
            券商十大金股
          </NavItem>
          <NavItem index={5} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 5}>
            美股/港股
          </NavItem>
          <NavItem index={11} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 11}>
            基金
          </NavItem>
          <NavItem index={14} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 14}>
            综合
          </NavItem>
        </Nav>
        <NavPanelGroup show={this.state.selectedIndex > 0}>
          <NavPanel show={this.state.selectedIndex === 1}>
            <LinkGroup title="A股主要板块市盈率">
              <Link href="/stockdata/market_pe">A股平均市盈率</Link>
              <Link href="/stockdata/shanghaiPE">上证平均市盈率</Link>
              <Link href="/stockdata/shenzhenPE" highlight>深圳平均市盈率</Link>
              <Link href="/stockdata/cybPE" highlight>创业板平均市盈率</Link>
              <Link href="/stockdata/ke-chuang-ban-pe">科创板平均市盈率</Link>
              <Link href="/stockdata/a-ttm-lyr" highlight large>全部A股市盈率 平均数 中位数</Link>
            </LinkGroup>
            <LinkGroup title="A股指数市盈率">
              <Link href="/stockdata/indices" highlight>指数最新市盈率</Link>
              <Link href="/stockdata/hs300-ttm-lyr" highlight>沪深300市盈率</Link>
              <Link href="/stockdata/sz50-ttm-lyr">上证50市盈率</Link>
              <Link href="/stockdata/sz000015-ttm-lyr" highlight>上证红利市盈率</Link>
              <Link href="/stockdata/sz399324-ttm-lyr" highlight>深证红利市盈率</Link>
              <Link href="/stockdata/sz180-ttm-lyr">上证180市盈率</Link>
              <Link href="/stockdata/sz380-ttm-lyr">上证380市盈率</Link>
              <Link href="/stockdata/zz100-ttm-lyr">中证100市盈率</Link>
              <Link href="/stockdata/zz500-ttm-lyr">中证500市盈率</Link>
              <Link href="/stockdata/zz800-ttm-lyr">中证800市盈率</Link>
              <Link href="/stockdata/zz1000-ttm-lyr">中证1000市盈率</Link>
            </LinkGroup>
            <LinkGroup title="指数市盈率">
              <Link href="/stockdata/weight-pe?marketId=399006.SZ">创业板指市盈率</Link>
              <Link href="/stockdata/weight-pe?marketId=399001.SZ">深证成指市盈率</Link>
              <Link href="/stockdata/weight-pe?marketId=000001.SH">上证指数市盈率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 2}>
            <LinkGroup title="A股主要板块市净率">
              <Link href="/stockdata/market_pb">A股平均市净率</Link>
              <Link href="/stockdata/shanghaiPB">上证A股市净率</Link>
              <Link href="/stockdata/shenzhenPB" highlight>深圳A股市净率</Link>
              <Link href="/stockdata/cybPB">创业板市净率</Link>
              <Link href="/stockdata/ke-chuang-ban-pb">科创板市净率</Link>
              <Link href="/stockdata/all-pb" highlight style={{ width: '300px' }}>全部A股市净率 平均数 中位数</Link>
            </LinkGroup>
            <LinkGroup title="A股指数市净率">
              <Link href="/stockdata/indices" highlight>指数最新市净率</Link>
              <Link href="/stockdata/hs300-pb" highlight>沪深300市净率</Link>
              <Link href="/stockdata/sz50-pb">上证50市净率</Link>
              <Link href="/stockdata/sz000015-pb" highlight>上证红利市净率</Link>
              <Link href="/stockdata/sz399324-pb" highlight>深证红利市净率</Link>
              <Link href="/stockdata/sz180-pb">上证180市净率</Link>
              <Link href="/stockdata/sz380-pb">上证380市净率</Link>
              <Link href="/stockdata/zz100-pb">中证100市净率</Link>
              <Link href="/stockdata/zz500-pb">中证500市净率</Link>
              <Link href="/stockdata/zz800-pb">中证800市净率</Link>
              <Link href="/stockdata/zz1000-pb">中证1000市净率</Link>
            </LinkGroup>
            <LinkGroup title="指数市净率">
              <Link href="/stockdata/weight-pb?marketId=399006.SZ">创业板指市净率</Link>
              <Link href="/stockdata/weight-pb?marketId=399001.SZ">深证成指市净率</Link>
              <Link href="/stockdata/weight-pb?marketId=000001.SH">上证指数市净率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 3}>
            <LinkGroup title="证监会分类">
              <Link href="/stockdata/industry#zjh" large>数据总览*</Link>
              <Link href="/stockdata/industry/zjh/A" large>农、林、牧、渔业</Link>
              <Link href="/stockdata/industry/zjh/B" large>采矿业</Link>
              <Link href="/stockdata/industry/zjh/C" large>制造业</Link>
              <Link href="/stockdata/industry/zjh/D" large>电力、热力、燃气及水业</Link>
              <Link href="/stockdata/industry/zjh/E" large>建筑业</Link>
              <Link href="/stockdata/industry/zjh/F" large>批发和零售业</Link>
              <Link href="/stockdata/industry/zjh/G" large>交通运输、仓储和邮政业</Link>
              <Link href="/stockdata/industry/zjh/H" large>住宿和餐饮业</Link>
              <Link href="/stockdata/industry/zjh/I" large>信息传输、软件和信息业</Link>
              <Link href="/stockdata/industry/zjh/J" large>金融业</Link>
              <Link href="/stockdata/industry/zjh/K" large>房地产业</Link>
              <Link href="/stockdata/industry/zjh/L" large>租赁和商务服务业</Link>
              <Link href="/stockdata/industry/zjh/M" large>科学研究和技术服务业</Link>
              <Link href="/stockdata/industry/zjh/N" large>水利、环境和公共设施</Link>
              <Link href="/stockdata/industry/zjh/O" large>居民服务、修理行业</Link>
              <Link href="/stockdata/industry/zjh/P" large>教育</Link>
              <Link href="/stockdata/industry/zjh/Q" large>卫生和社会工作业</Link>
              <Link href="/stockdata/industry/zjh/R" large>文化、体育和娱乐业</Link>
              <Link href="/stockdata/industry/zjh/S" large>综合</Link>
            </LinkGroup>
            <LinkGroup title="中证分类">
              <Link href="/stockdata/industry#zz">数据总览*</Link>
              <Link href="/stockdata/industry/zz/10">能源</Link>
              <Link href="/stockdata/industry/zz/15">原材料</Link>
              <Link href="/stockdata/industry/zz/20">工业</Link>
              <Link href="/stockdata/industry/zz/25">可选消费</Link>
              <Link href="/stockdata/industry/zz/30">主要消费</Link>
              <Link href="/stockdata/industry/zz/35">医药卫生</Link>
              <Link href="/stockdata/industry/zz/45">信息技术</Link>
              <Link href="/stockdata/industry/zz/50">通信服务</Link>
              <Link href="/stockdata/industry/zz/55">公用事业</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 13}>
            <LinkGroup title="规模指数">
              <Link href="/stockdata/index-basic?indexCode=000016.SH" large>上证50指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000300.SH" large>沪深300指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000688.SH" large>上证科创板50指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000905.SH" large>中证500指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000015.SH" large>上证红利指数</Link>
              <Link href="/stockdata/index-basic?indexCode=399324.SZ" large>深证红利指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000010.SH" large>上证180指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000009.SH" large>上证380指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000903.SH" large>中证100指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000906.SH" large>中证800指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000852.SH" large>中证1000指数</Link>
            </LinkGroup>
            <LinkGroup title="制造业">
              <Link href="/stockdata/index-basic?indexCode=H30531.CSI" >精工制造</Link>
              <Link href="/stockdata/index-basic?indexCode=930599.CSI" >中证高装</Link>
              <Link href="/stockdata/index-basic?indexCode=930820.CSI" >CS高端装</Link>
              <Link href="/stockdata/index-basic?indexCode=399967.SZ" >中证军工</Link>
              <Link href="/stockdata/index-basic?indexCode=399967.SZ" >国证军工</Link>
              <Link href="/stockdata/index-basic?indexCode=399417.SZ" >国证新能源车</Link>
              <Link href="/stockdata/index-basic?indexCode=931151.CSI" >中证光伏产业</Link>
            </LinkGroup>
            <LinkGroup title="主题指数">
              <Link href="/stockdata/index-basic?indexCode=h00121.SH" large>上证医药主题全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=000159.SH" large>上证沪股通指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000998.SH" large>中证TMT产业主题</Link>
              <Link href="/stockdata/index-basic?indexCode=930901.SH" large>中证动漫游戏</Link>
              <Link href="/stockdata/index-basic?indexCode=399997.SZ" large>中证白酒</Link>
              <Link href="/stockdata/index-basic?indexCode=h21081.CSI" large>中证半导全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=921441.CSI" large>中证人工智能50全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=930743.CSI" large>中证生物科技主题</Link>
              <Link href="/stockdata/index-basic?indexCode=930742.CSI" large>中证电商</Link>
              <Link href="/stockdata/index-basic?indexCode=931151.CSI" large>中证光伏产业</Link>
              <Link href="/stockdata/index-basic?indexCode=930706.CSI" large>中证水泥</Link>
              <Link href="/stockdata/index-basic?indexCode=000827.SH" large>中证环保</Link>
              <Link href="/stockdata/index-basic?indexCode=399989.SZ" large>中证医疗</Link>
              <Link href="/stockdata/index-basic?indexCode=399971.SZ" large>中证传媒</Link>
              <Link href="/stockdata/index-basic?indexCode=399967.SZ" large>中证军工</Link>
              <Link href="/stockdata/index-basic?indexCode=000819.SH" large>中证有色金属</Link>
              <Link href="/stockdata/index-basic?indexCode=000991.SH" large>全指医药</Link>
              <Link href="/stockdata/index-basic?indexCode=000992.SH" large>全指金融</Link>
              <Link href="/stockdata/index-basic?indexCode=000990.SH" large>全指消费</Link>
              <Link href="/stockdata/index-basic?indexCode=000993.SH" large>全指信息</Link>
              <Link href="/stockdata/index-basic?indexCode=399812.SZ" large>养老产业</Link>
              <Link href="/stockdata/index-basic?indexCode=399417.SZ" large>国证新能源车</Link>
              <Link href="/stockdata/index-basic?indexCode=399440.SZ" large>国证钢铁</Link>
              <Link href="/stockdata/index-basic?indexCode=399438.SZ" large>国证电力</Link>
              <Link href="/stockdata/index-basic?indexCode=399412.SZ" large>国证新能</Link>
              <Link href="/stockdata/index-basic?indexCode=399394.SZ" large>国证医药</Link>
              <Link href="/stockdata/index-basic?indexCode=399365.SZ" large>国证农业</Link>
              <Link href="/stockdata/index-basic?indexCode=399368.SZ" large>国证军工</Link>
              <Link href="/stockdata/index-basic?indexCode=000820.CSI" large>煤炭指数</Link>
            </LinkGroup >
            <LinkGroup title="策略指数">
              <Link href="/stockdata/index-basic?indexCode=399354.SZ">分析师指数</Link>
            </LinkGroup>
            <LinkGroup title="雪球指数">
              <Link href="/stockdata/index-basic?indexCode=930759.CSI">雪球100</Link>
              <Link href="/stockdata/index-basic?indexCode=930760.CSI">雪球智选</Link>
            </LinkGroup>
          </NavPanel >
          <NavPanel show={this.state.selectedIndex === 12}>
            <Tabs>
              <TabList>
                <Tab>一级</Tab>
                <Tab>二级</Tab>
                <Tab>三级</Tab>
              </TabList>
              <TabPanel>
                {
                  this.state.level1SwData.map(function (swItem) {
                    return <Link key={swItem.industryCode} href={`/stockdata/sw-industry-2021?industryCode=${swItem.industryCode}`}>{swItem.industryName}</Link>
                  })
                }
              </TabPanel>
              <TabPanel>
                {
                  this.state.level2SwData.map(function (swItem) {
                    return <Link key={swItem.industryCode} href={`/stockdata/sw-industry-2021?industryCode=${swItem.industryCode}`}>{swItem.industryName}</Link>
                  })
                }
              </TabPanel>
              <TabPanel>
                {
                  this.state.level3SwData.map(function (swItem) {
                    return <Link key={swItem.industryCode} href={`/stockdata/sw-industry-2021?industryCode=${swItem.industryCode}`}>{swItem.industryName}</Link>
                  })
                }
              </TabPanel>
            </Tabs>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 4}>
            <LinkGroup title="沪深港通">
              <Link href="/stockdata/hk-hold-sort" highlight>*北向资金买入排名</Link>
              <Link href="/stockdata/hu-shen-gang-tong" highlight>*沪深港通资金流向</Link>
              <Link href="/stockdata/hu-gu-tong">沪股通</Link>
              <Link href="/stockdata/shen-gu-tong">深股通</Link>
              <Link href="/stockdata/gang-gu-tong-hu">港股通（沪）</Link>
              <Link href="/stockdata/gang-gu-tong-shen">港股通（深）</Link>
            </LinkGroup>
            <LinkGroup title="融资融券">
              <Link href="/stockdata/margin-trading" highlight>*融资融券变动</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 5}>
            <LinkGroup title="美股">
              <Link href="/stockdata/market/nasdaq">纳斯达克市盈率</Link>
              <Link href="/stockdata/market/dow">道琼斯市盈率</Link>
              <Link href="/stockdata/market/sandp" highlight>普标500市盈率</Link>
            </LinkGroup>
            <LinkGroup title="港股市盈率">
              <Link href="/stockdata/market/hsi" >恒生指数市盈率</Link>
              <Link href="/stockdata/market/hsf" >恒生金融指数</Link>
              <Link href="/stockdata/market/hsp" >恒生地产指数</Link>
              <Link href="/stockdata/market/hsu" >恒生公共指数</Link>
              <Link href="/stockdata/market/hsci">恒生工商指数</Link>
              <Link href="/stockdata/market/hscei">恒生中国企业指数</Link>
            </LinkGroup>
            <LinkGroup title="港股股息率">
              <Link href="/stockdata/market/hk/dv/hsi" >恒生指数股息率</Link>
              <Link href="/stockdata/market/hk/dv/hsf" >恒生金融指数</Link>
              <Link href="/stockdata/market/hk/dv/hsp" >恒生地产指数</Link>
              <Link href="/stockdata/market/hk/dv/hsu" >恒生公共指数</Link>
              <Link href="/stockdata/market/hk/dv/hsci">恒生工商指数</Link>
              <Link href="/stockdata/market/hk/dv/hscei">恒生中国企业指数</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 7}>
            <LinkGroup>
              <Link href="/stockdata/below-net-asset-statistics?marketId=1">全部A股 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000300.XSHG" >沪深300 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000016.SH" >上证50 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000905.SH" >中证500 破净股统计</Link>
              <Link href="/stockdata/china-10-year-bond-yield" style={{ width: '250px' }}>股债轮动指标(十年国债倒数与PE)</Link>
              <Link href="/stockdata/market-turn-over-ratio-statistics">换手率占比统计</Link>
              <Link href="/stockdata/marketcap-gdp" highlight>总市值比GDP</Link>
              <Link href="/stockdata/equity-bond-spread" highlight>股债利差</Link>
              <Link href="/stockdata/ma-statistics" highlight>5/20/50日均线统计</Link>
              <Link href="/stockdata/kdj-statistics">KDJ指标平均值</Link>
              <Link href="/stockdata/high-low-statistics" large>创新高、新低数量统计</Link>
              <Link href="/stockdata/stock-day-limit" large>沪深A股涨停板特征统计</Link>
              <Link href="/stockdata/market-style?indexCode=1" large>恐慌&贪心指标</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 9}>
            <LinkGroup>
              <Link href="/stockdata/pmi">PMI走势</Link>
              <Link href="/stockdata/m1m2">M1M2走势图</Link>
              <Link href="/stockdata/m1m2-mom">M1M2和指数走势</Link>
              <Link href="/stockdata/broadmoney" highlight>M1-M2剪刀差</Link>
              <Link href="/stockdata/m2-gdp" highlight large>M2/GDP</Link>
              <Link href="/stockdata/m1-ppi" highlight large>M1-PPI</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 11}>
            <LinkGroup>
              <Link href="/stockdata/fund-position/pos-stock" style={{ width: '200px' }}>股票型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-pingheng" style={{ width: '200px' }}>平衡混合型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-linghuo" style={{ width: '200px' }}>灵活配置型基金仓位走势图</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 15}>
            <LinkGroup>
              <Link href="/stockdata/sw-market-width" style={{ width: '200px' }}>市场宽度（申万行业）</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 16}>
            <LinkGroup title="景气度">
              <Link href="/stockdata/middle-avg-indicator?indicatorCode=netProfitYoy">净利润增长率</Link>
              <Link href="/stockdata/middle-avg-indicator?indicatorCode=orYoy">营业收入增长率</Link>
              <Link href="/stockdata/middle-avg-indicator?indicatorCode=opYoy">营业利润增长率</Link>
              <Link href="/stockdata/middle-avg-indicator?indicatorCode=trYoy">营业总收入增长率</Link>
              <Link href="/stockdata/middle-avg-indicator?indicatorCode=ebtYoy">利润总额增长率</Link>
              <Link href="/stockdata/middle-avg-indicator?indicatorCode=roeYoy">ROE增长率</Link>
            </LinkGroup>
            <LinkGroup title="拥挤度">
              <Link href="/stockdata/ashares-congestion" style={{ width: '200px' }}>大盘拥挤度(逃顶利器)</Link>
              <Link href="/stockdata/sw-congestion" style={{ width: '200px' }}>行业拥挤度</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 17}>
            <LinkGroup>
              <Link href="/stockdata/broker-recommend-monthly-regression" large >券商十大金股组合（当月）</Link>
              <Link href="/stockdata/broker-recommend-monthly-regression/statistics">往期券商金股统计</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 14}>
            <LinkGroup title="波段分析">
              <Link href="/stockdata/market-analysis-shanghai">上证指数波段分析</Link>
              <Link href="/stockdata/market-analysis-szcz">深证成指波段分析</Link>
              <Link href="/stockdata/market-analysis-hs300">沪深300波段分析</Link>
              <Link href="/stockdata/market-analysis-chuangye">创业板波段分析</Link>
              <Link href="/stockdata/market-analysis-average-price">A股平均股价</Link>
            </LinkGroup>
            <LinkGroup title="热度分析">
              <Link href="/stockdata/market-activity">赚钱效应分析</Link>
              <Link href="/stockdata/market-activity-trend">赚钱效应日内趋势</Link>
              <Link href="/stockdata/holder-trade-count" style={{ width: '200px' }}>A股股东增持、减持统计数据</Link>
            </LinkGroup>
            <LinkGroup title="基本面分析">
              <Link href="/stockdata/guxilv">A股股息率统计</Link>
              <Link href="/stockdata/companynum">A股上市公司家数</Link>
              <Link href="/stockdata/shenzhenguben">深圳A股总股本</Link>
            </LinkGroup>
            <LinkGroup title="情绪指标">
              <Link href="/stockdata/averageposition" style={{ width: '200px' }}>平均持仓与股市同期</Link>
              <Link href="/stockdata/a_shares_new_account" style={{ width: '200px' }}>A股新增开户数（周数据）</Link>
              <Link href="/stockdata/new-investors" style={{ width: '200px' }}>A股新增开户数（月数据）</Link>
            </LinkGroup>
            <LinkGroup title="追涨情绪">
              <Link href="/stockdata/emotion-daily?emotionType=limitUp" style={{ width: '200px' }}>昨日涨停指数</Link>
              <Link href="/stockdata/emotion-daily?emotionType=hotStock" style={{ width: '200px' }}>TOP100指数</Link>
            </LinkGroup>
          </NavPanel>
        </NavPanelGroup >
      </div >
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
