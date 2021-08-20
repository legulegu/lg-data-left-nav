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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
            中证行业数据
          </NavItem>
          <NavItem index={12} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 12}>
            申万行业数据
          </NavItem>
          <NavItem index={4} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 4}>
            沪深港通/融资融券
          </NavItem>
          <NavItem index={5} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 5}>
            美股/港股
          </NavItem>
          <NavItem index={6} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 6}>
            技术面分析
          </NavItem>
          <NavItem index={7} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 7}>
            底部研究
          </NavItem>
          <NavItem index={8} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 8}>
            基本面数据
          </NavItem>
          <NavItem index={9} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 9}>
            宏观数据
          </NavItem>
          <NavItem index={10} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 10}>
            情绪指标
          </NavItem>
          <NavItem index={11} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 11}>
            基金
          </NavItem>
        </Nav>
        <NavPanelGroup show={this.state.selectedIndex > 0}>
          <NavPanel show={this.state.selectedIndex === 1}>
            <LinkGroup title="A股主要板块市盈率">
              <Link href="/stockdata/market_pe">A股平均市盈率</Link>
              <Link href="/stockdata/shanghaiPE">上证平均市盈率</Link>
              <Link href="/stockdata/shenzhenPE" highlight>深圳A股市盈率</Link>
              <Link href="/stockdata/zxbPE">中小板市盈率</Link>
              <Link href="/stockdata/cybPE" highlight>创业板市盈率</Link>
              <Link href="/stockdata/ke-chuang-ban-pe">科创板市盈率</Link>
              <Link href="/stockdata/a-ttm-lyr" highlight large>全部A股市盈率 平均数 中位数</Link>
            </LinkGroup>
            <LinkGroup title="A股指数市盈率(等权/中位数)">
              <Link href="/stockdata/hs300-ttm-lyr" highlight>沪深300市盈率</Link>
              <Link href="/stockdata/sz50-ttm-lyr">上证50市盈率</Link>
              <Link href="/stockdata/sz000015-ttm-lyr" highlight>上证红利市盈率</Link>
              <Link href="/stockdata/sz399324-ttm-lyr" highlight>深证红利市盈率</Link>
              <Link href="/stockdata/sz180-ttm-lyr">上证180市盈率</Link>
              <Link href="/stockdata/sz380-ttm-lyr">上证380市盈率</Link>
              <Link href="/stockdata/zzlt-ttm-lyr">中证流通市盈率</Link>
              <Link href="/stockdata/zz100-ttm-lyr">中证100市盈率</Link>
              <Link href="/stockdata/zz500-ttm-lyr">中证500市盈率</Link>
              <Link href="/stockdata/zz800-ttm-lyr">中证800市盈率</Link>
              <Link href="/stockdata/zz1000-ttm-lyr">中证1000市盈率</Link>
            </LinkGroup>
            <LinkGroup title="A股指数市盈率(加权)">
              <Link href="/stockdata/weight-pe?marketId=000300.SH">沪深300</Link>
              <Link href="/stockdata/weight-pe?marketId=000016.SH">上证50</Link>
              <Link href="/stockdata/weight-pe?marketId=000905.SH">中证500</Link>
              <Link href="/stockdata/weight-pe?marketId=399006.SZ">创业板指</Link>
              <Link href="/stockdata/weight-pe?marketId=399001.SZ">深证成指</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 2}>
            <LinkGroup title="A股主要板块市净率">
              <Link href="/stockdata/market_pb">A股平均市净率</Link>
              <Link href="/stockdata/shanghaiPB">上证A股市净率</Link>
              <Link href="/stockdata/shenzhenPB" highlight>深圳A股市净率</Link>
              <Link href="/stockdata/zxbPB">中小板市净率</Link>
              <Link href="/stockdata/cybPB">创业板市净率</Link>
              <Link href="/stockdata/all-pb" highlight style={{ width: '300px' }}>全部A股市净率 平均数 中位数</Link>
            </LinkGroup>
            <LinkGroup title="A股指数市净率(等权/中位数)">
              <Link href="/stockdata/hs300-pb" highlight>沪深300市净率</Link>
              <Link href="/stockdata/sz50-pb">上证50市净率</Link>
              <Link href="/stockdata/sz000015-pb" highlight>上证红利市净率</Link>
              <Link href="/stockdata/sz399324-pb" highlight>深证红利市净率</Link>
              <Link href="/stockdata/sz180-pb">上证180市净率</Link>
              <Link href="/stockdata/sz380-pb">上证380市净率</Link>
              <Link href="/stockdata/zzlt-pb">中证流通市净率</Link>
              <Link href="/stockdata/zz100-pb">中证100市净率</Link>
              <Link href="/stockdata/zz500-pb">中证500市净率</Link>
              <Link href="/stockdata/zz800-pb">中证800市净率</Link>
              <Link href="/stockdata/zz1000-pb">中证1000市净率</Link>
            </LinkGroup>
            <LinkGroup title="A股指数市净率(加权)">
              <Link href="/stockdata/weight-pb?marketId=000300.SH">沪深300</Link>
              <Link href="/stockdata/weight-pb?marketId=000016.SH">上证50</Link>
              <Link href="/stockdata/weight-pb?marketId=000905.SH">中证500</Link>
              <Link href="/stockdata/weight-pb?marketId=399006.SZ">创业板指</Link>
              <Link href="/stockdata/weight-pb?marketId=399001.SZ">深证成指</Link>
              <Link href="/stockdata/weight-pb?marketId=000001.SH">上证指数</Link>
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
              <Link href="/stockdata/industry/zz/00">能源</Link>
              <Link href="/stockdata/industry/zz/01">原材料</Link>
              <Link href="/stockdata/industry/zz/02">工业</Link>
              <Link href="/stockdata/industry/zz/03">可选消费</Link>
              <Link href="/stockdata/industry/zz/04">主要消费</Link>
              <Link href="/stockdata/industry/zz/05">医药卫生</Link>
              <Link href="/stockdata/industry/zz/06">金融地产</Link>
              <Link href="/stockdata/industry/zz/07">信息技术</Link>
              <Link href="/stockdata/industry/zz/08">电信业务</Link>
              <Link href="/stockdata/industry/zz/09">公用事业</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 12}>
            <LinkGroup title="一级">
              <Link href="/stockdata/sw-industry?industryCode=801020.SI" >采掘</Link>
              <Link href="/stockdata/sw-industry?industryCode=801030.SI" >化工</Link>
              <Link href="/stockdata/sw-industry?industryCode=801040.SI" >钢铁</Link>
              <Link href="/stockdata/sw-industry?industryCode=801050.SI" >有色金属</Link>
              <Link href="/stockdata/sw-industry?industryCode=801710.SI" >建筑材料</Link>
              <Link href="/stockdata/sw-industry?industryCode=801720.SI" >建筑装饰</Link>
              <Link href="/stockdata/sw-industry?industryCode=801730.SI" >电气设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801890.SI" >机械设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801740.SI" >国防军工</Link>
              <Link href="/stockdata/sw-industry?industryCode=801880.SI" >汽车</Link>
              <Link href="/stockdata/sw-industry?industryCode=801110.SI" >家用电器</Link>
              <Link href="/stockdata/sw-industry?industryCode=801130.SI" >纺织服装</Link>
              <Link href="/stockdata/sw-industry?industryCode=801140.SI" >轻工制造</Link>
              <Link href="/stockdata/sw-industry?industryCode=801200.SI" >商业贸易</Link>
              <Link href="/stockdata/sw-industry?industryCode=801010.SI" >农林牧渔</Link>
              <Link href="/stockdata/sw-industry?industryCode=801120.SI" >食品饮料</Link>
              <Link href="/stockdata/sw-industry?industryCode=801210.SI" >休闲服务</Link>
              <Link href="/stockdata/sw-industry?industryCode=801150.SI" >医药生物</Link>
              <Link href="/stockdata/sw-industry?industryCode=801160.SI" >公用事业</Link>
              <Link href="/stockdata/sw-industry?industryCode=801170.SI" >交通运输</Link>
              <Link href="/stockdata/sw-industry?industryCode=801180.SI" >房地产</Link>
              <Link href="/stockdata/sw-industry?industryCode=801080.SI" >电子</Link>
              <Link href="/stockdata/sw-industry?industryCode=801750.SI" >计算机</Link>
              <Link href="/stockdata/sw-industry?industryCode=801760.SI" >传媒</Link>
              <Link href="/stockdata/sw-industry?industryCode=801770.SI" >通信</Link>
              <Link href="/stockdata/sw-industry?industryCode=801780.SI" >银行</Link>
              <Link href="/stockdata/sw-industry?industryCode=801790.SI" >非银金融</Link>
              <Link href="/stockdata/sw-industry?industryCode=801230.SI" >综合</Link>
            </LinkGroup>
            <LinkGroup title="二级">
              <Link href="/stockdata/sw-industry?industryCode=801023.SI">石油开采</Link>
              <Link href="/stockdata/sw-industry?industryCode=801021.SI">煤炭开采</Link>
              <Link href="/stockdata/sw-industry?industryCode=801022.SI">其他采掘</Link>
              <Link href="/stockdata/sw-industry?industryCode=801024.SI">采掘服务</Link>
              <Link href="/stockdata/sw-industry?industryCode=801035.SI">石油化工</Link>
              <Link href="/stockdata/sw-industry?industryCode=801033.SI">化学原料</Link>
              <Link href="/stockdata/sw-industry?industryCode=801034.SI">化学制品</Link>
              <Link href="/stockdata/sw-industry?industryCode=801032.SI">化学纤维</Link>
              <Link href="/stockdata/sw-industry?industryCode=801036.SI">塑料</Link>
              <Link href="/stockdata/sw-industry?industryCode=801037.SI">橡胶</Link>
              <Link href="/stockdata/sw-industry?industryCode=801041.SI">钢铁</Link>
              <Link href="/stockdata/sw-industry?industryCode=801055.SI">工业金属</Link>
              <Link href="/stockdata/sw-industry?industryCode=801053.SI">黄金</Link>
              <Link href="/stockdata/sw-industry?industryCode=801054.SI">稀有金属</Link>
              <Link href="/stockdata/sw-industry?industryCode=801051.SI">金属非金属新材料</Link>
              <Link href="/stockdata/sw-industry?industryCode=801711.SI">水泥制造</Link>
              <Link href="/stockdata/sw-industry?industryCode=801712.SI">玻璃制造</Link>
              <Link href="/stockdata/sw-industry?industryCode=801713.SI">其他建材</Link>
              <Link href="/stockdata/sw-industry?industryCode=801721.SI">房屋建设</Link>
              <Link href="/stockdata/sw-industry?industryCode=801722.SI">装修装饰</Link>
              <Link href="/stockdata/sw-industry?industryCode=801725.SI">园林工程</Link>
              <Link href="/stockdata/sw-industry?industryCode=801723.SI">基础建设</Link>
              <Link href="/stockdata/sw-industry?industryCode=801724.SI">专业工程</Link>
              <Link href="/stockdata/sw-industry?industryCode=801731.SI">电机</Link>
              <Link href="/stockdata/sw-industry?industryCode=801732.SI">电气自动化设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801733.SI">电源设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801734.SI">高低压设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801072.SI">通用机械</Link>
              <Link href="/stockdata/sw-industry?industryCode=801074.SI">专用设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801073.SI">仪器仪表</Link>
              <Link href="/stockdata/sw-industry?industryCode=801075.SI">金属制品</Link>
              <Link href="/stockdata/sw-industry?industryCode=801076.SI">运输设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801741.SI">航天装备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801742.SI">航空装备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801743.SI">地面兵装</Link>
              <Link href="/stockdata/sw-industry?industryCode=801743.SI">地面兵装</Link>
              <Link href="/stockdata/sw-industry?industryCode=801744.SI">船舶制造</Link>
              <Link href="/stockdata/sw-industry?industryCode=801094.SI">汽车整车</Link>
              <Link href="/stockdata/sw-industry?industryCode=801093.SI">汽车零部件</Link>
              <Link href="/stockdata/sw-industry?industryCode=801092.SI">汽车服务</Link>
              <Link href="/stockdata/sw-industry?industryCode=801881.SI">其他交运设备</Link>
              <Link href="/stockdata/sw-industry?industryCode=801111.SI">白色家电</Link>
              <Link href="/stockdata/sw-industry?industryCode=801112.SI">视听器材</Link>
              <Link href="/stockdata/sw-industry?industryCode=801131.SI">纺织制造</Link>
            </LinkGroup>
            <LinkGroup title="三级">
              <Link href="/stockdata/industry#zz">数据总览*</Link>
              <Link href="/stockdata/industry/zz/00">能源</Link>
              <Link href="/stockdata/industry/zz/01">原材料</Link>
              <Link href="/stockdata/industry/zz/02">工业</Link>
              <Link href="/stockdata/industry/zz/03">可选消费</Link>
              <Link href="/stockdata/industry/zz/04">主要消费</Link>
              <Link href="/stockdata/industry/zz/05">医药卫生</Link>
              <Link href="/stockdata/industry/zz/06">金融地产</Link>
              <Link href="/stockdata/industry/zz/07">信息技术</Link>
              <Link href="/stockdata/industry/zz/08">电信业务</Link>
              <Link href="/stockdata/industry/zz/09">公用事业</Link>
            </LinkGroup>
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
            <LinkGroup title="港股">
              <Link href="/stockdata/market/hsi" highlight>恒生指数市盈率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 6}>
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
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 7}>
            <LinkGroup>
              <Link href="/stockdata/below-net-asset-statistics?marketId=1">全部A股 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000300.XSHG" highlight>沪深300 破净股统计</Link>
              <Link href="/stockdata/china-10-year-bond-yield" style={{ width: '250px' }} highlight>股债轮动指标(十年国债倒数与PE)</Link>
              <Link href="/stockdata/market-turn-over-ratio-statistics">换手率占比统计</Link>
              <Link href="/stockdata/marketcap-gdp" highlight>总市值比GDP</Link>
              <Link href="/stockdata/ma-statistics" highlight>5/20/50日均线统计</Link>
              <Link href="/stockdata/kdj-statistics">KDJ指标平均值</Link>
              <Link href="/stockdata/high-low-statistics" large>创新高、新低数量统计</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 8}>
            <LinkGroup>
              <Link href="/stockdata/guxilv">A股股息率统计</Link>
              <Link href="/stockdata/companynum">A股上市公司家数</Link>
              <Link href="/stockdata/shenzhenguben">深圳A股总股本</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 9}>
            <LinkGroup>
              <Link href="/stockdata/pmi">PMI走势</Link>
              <Link href="/stockdata/m1m2">M1M2走势图</Link>
              <Link href="/stockdata/m1m2-mom">M1M2和指数走势</Link>
              <Link href="/stockdata/broadmoney" highlight>M1-M2剪刀差</Link>
              <Link href="/stockdata/m2-gdp" highlight large>M2/GDP</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 10}>
            <LinkGroup>
              <Link href="/stockdata/averageposition" style={{ width: '200px' }}>平均持仓与股市同期</Link>
              <Link href="/stockdata/a_shares_new_account" style={{ width: '200px' }}>A股新增开户数（周数据）</Link>
              <Link href="/stockdata/new-investors" style={{ width: '200px' }}>A股新增开户数（月数据）</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 11}>
            <LinkGroup>
              <Link href="/stockdata/fund-position/pos-stock" style={{ width: '200px' }}>股票型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-pingheng" style={{ width: '200px' }}>平衡混合型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-linghuo" style={{ width: '200px' }}>灵活配置型基金仓位走势图</Link>
            </LinkGroup>
          </NavPanel>
        </NavPanelGroup>
      </div>
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
