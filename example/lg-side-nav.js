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
            中证行业
          </NavItem>
          <NavItem index={12} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 12}>
            申万行业
          </NavItem>
          <NavItem index={13} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 13}>
            主题指数/规模指数
          </NavItem>
          <NavItem index={4} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 4}>
            沪深港通/融资融券
          </NavItem>
          <NavItem index={7} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 7}>
            底部研究
          </NavItem>
          <NavItem index={5} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 5}>
            美股/港股
          </NavItem>
          <NavItem index={9} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 9}>
            宏观数据
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
              <Link href="/stockdata/zzlt-ttm-lyr">中证流通市盈率</Link>
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
              <Link href="/stockdata/zzlt-pb">中证流通市净率</Link>
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
            <LinkGroup title="主题指数">
              <Link href="/stockdata/index-basic?indexCode=h00121.SH" large>上证医药主题全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=000159.SH" large>上证沪股通指数</Link>
              <Link href="/stockdata/index-basic?indexCode=000998.SH" large>中证TMT产业主题</Link>
              <Link href="/stockdata/index-basic?indexCode=930901.SH" large>中证动漫游戏</Link>
              <Link href="/stockdata/index-basic?indexCode=399997.SZ" large>中证白酒</Link>
              <Link href="/stockdata/index-basic?indexCode=h21081.CSI" large>中证半导全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=921441.CSI" large>中证人工智能50全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=h21081.CSI" large>中证半导全收益</Link>
              <Link href="/stockdata/index-basic?indexCode=930743.CSI" large>中证生物科技主题</Link>
              <Link href="/stockdata/index-basic?indexCode=930742.CSI" large>中证电商</Link>
              <Link href="/stockdata/index-basic?indexCode=931151.CSI" large>中证光伏产业</Link>
              <Link href="/stockdata/index-basic?indexCode=930706.CSI" large>中证水泥</Link>
              <Link href="/stockdata/index-basic?indexCode=000819.SH" large>中证有色金属</Link>
              <Link href="/stockdata/index-basic?indexCode=399417.SZ" large>国证新能源车</Link>
              <Link href="/stockdata/index-basic?indexCode=399440.SZ" large>国证钢铁</Link>
              <Link href="/stockdata/index-basic?indexCode=399438.SZ" large>国证电力</Link>
              <Link href="/stockdata/index-basic?indexCode=399412.SZ" large>国证新能</Link>
              <Link href="/stockdata/index-basic?indexCode=399394.SZ" large>国证医药</Link>
              <Link href="/stockdata/index-basic?indexCode=399365.SZ" large>国证农业</Link>
              <Link href="/stockdata/index-basic?indexCode=399368.SZ" large>国证军工</Link>
            </LinkGroup>
            <LinkGroup title="策略指数">
              <Link href="/stockdata/index-basic?indexCode=399354.SZ">分析师指数</Link>
            </LinkGroup>
            <LinkGroup title="雪球指数">
              <Link href="/stockdata/index-basic?indexCode=930759.CSI">雪球100</Link>
              <Link href="/stockdata/index-basic?indexCode=930760.CSI">雪球智选</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 12}>
            <Tabs>
              <TabList>
                <Tab>一级</Tab>
                <Tab>二级</Tab>
                <Tab>三级</Tab>
              </TabList>
              <TabPanel>
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
              </TabPanel>
              <TabPanel>
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
                <Link href="/stockdata/sw-industry?industryCode=801132.SI">服装家纺</Link>
                <Link href="/stockdata/sw-industry?industryCode=801143.SI">造纸</Link>
                <Link href="/stockdata/sw-industry?industryCode=801141.SI">包装印刷</Link>
                <Link href="/stockdata/sw-industry?industryCode=801142.SI">家用轻工</Link>
                <Link href="/stockdata/sw-industry?industryCode=801144.SI">其他轻工制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=801203.SI">一般零售</Link>
                <Link href="/stockdata/sw-industry?industryCode=801204.SI">专业零售</Link>
                <Link href="/stockdata/sw-industry?industryCode=801205.SI">商业物业经营</Link>
                <Link href="/stockdata/sw-industry?industryCode=801202.SI">贸易</Link>
                <Link href="/stockdata/sw-industry?industryCode=801016.SI">种植业</Link>
                <Link href="/stockdata/sw-industry?industryCode=801015.SI">渔业</Link>
                <Link href="/stockdata/sw-industry?industryCode=801011.SI">林业</Link>
                <Link href="/stockdata/sw-industry?industryCode=801014.SI">饲料</Link>
                <Link href="/stockdata/sw-industry?industryCode=801012.SI">农产品加工</Link>
                <Link href="/stockdata/sw-industry?industryCode=801013.SI">农业综合</Link>
                <Link href="/stockdata/sw-industry?industryCode=801017.SI">畜禽养殖</Link>
                <Link href="/stockdata/sw-industry?industryCode=801018.SI">动物保健</Link>
                <Link href="/stockdata/sw-industry?industryCode=801123.SI">饮料制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=801124.SI">食品加工</Link>
                <Link href="/stockdata/sw-industry?industryCode=801212.SI">景点</Link>
                <Link href="/stockdata/sw-industry?industryCode=801213.SI">酒店</Link>
                <Link href="/stockdata/sw-industry?industryCode=801214.SI">旅游综合</Link>
                <Link href="/stockdata/sw-industry?industryCode=801211.SI">餐饮</Link>
                <Link href="/stockdata/sw-industry?industryCode=801215.SI">其他休闲服务</Link>
                <Link href="/stockdata/sw-industry?industryCode=801151.SI">化学制药</Link>
                <Link href="/stockdata/sw-industry?industryCode=801155.SI">中药</Link>
                <Link href="/stockdata/sw-industry?industryCode=801152.SI">生物制品</Link>
                <Link href="/stockdata/sw-industry?industryCode=801154.SI">医药商业</Link>
                <Link href="/stockdata/sw-industry?industryCode=801153.SI">医疗器械</Link>
                <Link href="/stockdata/sw-industry?industryCode=801156.SI">医疗服务</Link>
                <Link href="/stockdata/sw-industry?industryCode=801161.SI">电力</Link>
                <Link href="/stockdata/sw-industry?industryCode=801164.SI">水务</Link>
                <Link href="/stockdata/sw-industry?industryCode=801163.SI">燃气</Link>
                <Link href="/stockdata/sw-industry?industryCode=801162.SI">环保工程及服务</Link>
                <Link href="/stockdata/sw-industry?industryCode=801171.SI">港口</Link>
                <Link href="/stockdata/sw-industry?industryCode=801175.SI">高速公路</Link>
                <Link href="/stockdata/sw-industry?industryCode=801172.SI">公交</Link>
                <Link href="/stockdata/sw-industry?industryCode=801173.SI">航空运输</Link>
                <Link href="/stockdata/sw-industry?industryCode=801174.SI">机场</Link>
                <Link href="/stockdata/sw-industry?industryCode=801176.SI">航运</Link>
                <Link href="/stockdata/sw-industry?industryCode=801177.SI">铁路运输</Link>
                <Link href="/stockdata/sw-industry?industryCode=801178.SI">物流</Link>
                <Link href="/stockdata/sw-industry?industryCode=801181.SI">房地产开发</Link>
                <Link href="/stockdata/sw-industry?industryCode=801182.SI">园区开发</Link>
                <Link href="/stockdata/sw-industry?industryCode=801081.SI">半导体</Link>
                <Link href="/stockdata/sw-industry?industryCode=801083.SI">元件</Link>
                <Link href="/stockdata/sw-industry?industryCode=801084.SI">光学光电子</Link>
                <Link href="/stockdata/sw-industry?industryCode=801082.SI">其他电子</Link>
                <Link href="/stockdata/sw-industry?industryCode=801085.SI">电子制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=801101.SI">计算机设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=801222.SI">计算机应用</Link>
                <Link href="/stockdata/sw-industry?industryCode=801761.SI">文化传媒</Link>
                <Link href="/stockdata/sw-industry?industryCode=801751.SI">营销传播</Link>
                <Link href="/stockdata/sw-industry?industryCode=801752.SI">互联网传媒</Link>
                <Link href="/stockdata/sw-industry?industryCode=801223.SI">通信运营</Link>
                <Link href="/stockdata/sw-industry?industryCode=801102.SI">通信设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=801192.SI">银行</Link>
                <Link href="/stockdata/sw-industry?industryCode=801193.SI">证券</Link>
                <Link href="/stockdata/sw-industry?industryCode=801194.SI">保险</Link>
                <Link href="/stockdata/sw-industry?industryCode=801191.SI">多元金融</Link>
                <Link href="/stockdata/sw-industry?industryCode=801231.SI">综合</Link>
              </TabPanel>
              <TabPanel>
                <Link href="/stockdata/sw-industry?industryCode=850211.SI">油开采</Link>
                <Link href="/stockdata/sw-industry?industryCode=850221.SI">煤炭开采</Link>
                <Link href="/stockdata/sw-industry?industryCode=850222.SI">焦炭加工</Link>
                <Link href="/stockdata/sw-industry?industryCode=850231.SI">其他采掘</Link>
                <Link href="/stockdata/sw-industry?industryCode=850241.SI">油气钻采服务</Link>
                <Link href="/stockdata/sw-industry?industryCode=850242.SI">其他采掘服务</Link>
                <Link href="/stockdata/sw-industry?industryCode=850311.SI">石油加工</Link>
                <Link href="/stockdata/sw-industry?industryCode=850313.SI">石油贸易</Link>
                <Link href="/stockdata/sw-industry?industryCode=850321.SI">纯碱</Link>
                <Link href="/stockdata/sw-industry?industryCode=850322.SI">氯碱</Link>
                <Link href="/stockdata/sw-industry?industryCode=850323.SI">无机盐</Link>
                <Link href="/stockdata/sw-industry?industryCode=850324.SI">其他化学原料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850331.SI">氮肥</Link>
                <Link href="/stockdata/sw-industry?industryCode=850332.SI">磷肥</Link>
                <Link href="/stockdata/sw-industry?industryCode=850336.SI">钾肥</Link>
                <Link href="/stockdata/sw-industry?industryCode=850381.SI">复合肥</Link>
                <Link href="/stockdata/sw-industry?industryCode=850333.SI">农药</Link>
                <Link href="/stockdata/sw-industry?industryCode=850334.SI">日用化学产品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850335.SI">涂料油漆油墨制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=850337.SI">民爆用品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850338.SI">纺织化学用品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850382.SI">氟化工及制冷剂</Link>
                <Link href="/stockdata/sw-industry?industryCode=850383.SI">磷化工及磷酸盐</Link>
                <Link href="/stockdata/sw-industry?industryCode=850339.SI">其他化学制品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850372.SI">聚氨酯</Link>
                <Link href="/stockdata/sw-industry?industryCode=850373.SI">玻纤</Link>
                <Link href="/stockdata/sw-industry?industryCode=850341.SI">涤纶</Link>
                <Link href="/stockdata/sw-industry?industryCode=850342.SI">维纶</Link>
                <Link href="/stockdata/sw-industry?industryCode=850343.SI">粘胶</Link>
                <Link href="/stockdata/sw-industry?industryCode=850345.SI">氨纶</Link>
                <Link href="/stockdata/sw-industry?industryCode=850344.SI">其他纤维</Link>
                <Link href="/stockdata/sw-industry?industryCode=850352.SI">合成革</Link>
                <Link href="/stockdata/sw-industry?industryCode=850353.SI">改性塑料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850351.SI">其他塑料制品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850361.SI">轮胎</Link>
                <Link href="/stockdata/sw-industry?industryCode=850362.SI">其他橡胶制品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850363.SI">炭黑</Link>
                <Link href="/stockdata/sw-industry?industryCode=850411.SI">普钢</Link>
                <Link href="/stockdata/sw-industry?industryCode=850412.SI">特钢</Link>
                <Link href="/stockdata/sw-industry?industryCode=850551.SI">铝</Link>
                <Link href="/stockdata/sw-industry?industryCode=850552.SI">铜</Link>
                <Link href="/stockdata/sw-industry?industryCode=850553.SI">铅锌</Link>
                <Link href="/stockdata/sw-industry?industryCode=850531.SI">黄金</Link>
                <Link href="/stockdata/sw-industry?industryCode=850541.SI">稀土</Link>
                <Link href="/stockdata/sw-industry?industryCode=850542.SI">钨</Link>
                <Link href="/stockdata/sw-industry?industryCode=850543.SI">锂</Link>
                <Link href="/stockdata/sw-industry?industryCode=850544.SI">其他稀有小金属</Link>
                <Link href="/stockdata/sw-industry?industryCode=850521.SI">金属新材料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850522.SI">磁性材料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850523.SI">非金属新材料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850612.SI">水泥制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=850611.SI">玻璃制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=850615.SI">耐火材料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850616.SI">管材</Link>
                <Link href="/stockdata/sw-industry?industryCode=850614.SI">其他建材</Link>
                <Link href="/stockdata/sw-industry?industryCode=850623.SI">房屋建设</Link>
                <Link href="/stockdata/sw-industry?industryCode=857221.SI">装修装饰</Link>
                <Link href="/stockdata/sw-industry?industryCode=857251.SI">园林工程</Link>
                <Link href="/stockdata/sw-industry?industryCode=857231.SI">城轨建设</Link>
                <Link href="/stockdata/sw-industry?industryCode=857232.SI">路桥施工</Link>
                <Link href="/stockdata/sw-industry?industryCode=857233.SI">水利工程</Link>
                <Link href="/stockdata/sw-industry?industryCode=857234.SI">铁路建设</Link>
                <Link href="/stockdata/sw-industry?industryCode=857235.SI">其他基础建设</Link>
                <Link href="/stockdata/sw-industry?industryCode=857241.SI">钢结构</Link>
                <Link href="/stockdata/sw-industry?industryCode=857242.SI">化学工程</Link>
                <Link href="/stockdata/sw-industry?industryCode=857243.SI">国际工程承包</Link>
                <Link href="/stockdata/sw-industry?industryCode=857244.SI">其他专业工程</Link>
                <Link href="/stockdata/sw-industry?industryCode=850741.SI">电机</Link>
                <Link href="/stockdata/sw-industry?industryCode=857321.SI">电网自动化</Link>
                <Link href="/stockdata/sw-industry?industryCode=857322.SI">工控自动化</Link>
                <Link href="/stockdata/sw-industry?industryCode=857323.SI">计量仪表</Link>
                <Link href="/stockdata/sw-industry?industryCode=857331.SI">综合电力设备商</Link>
                <Link href="/stockdata/sw-industry?industryCode=857332.SI">风电设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857333.SI">光伏设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857334.SI">火电设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857335.SI">储能设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857336.SI">其它电源设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857341.SI">高压设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857342.SI">中压设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857343.SI">低压设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857344.SI">线缆部件及其他</Link>
                <Link href="/stockdata/sw-industry?industryCode=850711.SI">机床工具</Link>
                <Link href="/stockdata/sw-industry?industryCode=850712.SI">机械基础件</Link>
                <Link href="/stockdata/sw-industry?industryCode=850713.SI">磨具磨料</Link>
                <Link href="/stockdata/sw-industry?industryCode=850714.SI">内燃机</Link>
                <Link href="/stockdata/sw-industry?industryCode=850715.SI">制冷空调设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=850716.SI">其它通用机械</Link>
                <Link href="/stockdata/sw-industry?industryCode=850722.SI">工程机械</Link>
                <Link href="/stockdata/sw-industry?industryCode=850724.SI">重型机械</Link>
                <Link href="/stockdata/sw-industry?industryCode=850725.SI">冶金矿采化工设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=850728.SI">楼宇设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=850729.SI">环保设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=850721.SI">纺织服装设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=850723.SI">农用机械</Link>
                <Link href="/stockdata/sw-industry?industryCode=850726.SI">印刷包装机械</Link>
                <Link href="/stockdata/sw-industry?industryCode=850727.SI">其它专用机械</Link>
                <Link href="/stockdata/sw-industry?industryCode=850731.SI">仪器仪表</Link>
                <Link href="/stockdata/sw-industry?industryCode=850751.SI">金属制品</Link>
                <Link href="/stockdata/sw-industry?industryCode=850936.SI">铁路设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857411.SI">航天装备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857421.SI">航空装备</Link>
                <Link href="/stockdata/sw-industry?industryCode=857431.SI">地面兵装</Link>
                <Link href="/stockdata/sw-industry?industryCode=850935.SI">船舶制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=850911.SI">乘用车</Link>
                <Link href="/stockdata/sw-industry?industryCode=850912.SI">商用载货车</Link>
                <Link href="/stockdata/sw-industry?industryCode=850913.SI">商用载客车</Link>
                <Link href="/stockdata/sw-industry?industryCode=850921.SI">汽车零部件</Link>
                <Link href="/stockdata/sw-industry?industryCode=850941.SI">汽车服务</Link>
                <Link href="/stockdata/sw-industry?industryCode=858811.SI">其他交运设备</Link>
                <Link href="/stockdata/sw-industry?industryCode=851111.SI">冰箱</Link>
                <Link href="/stockdata/sw-industry?industryCode=851112.SI">空调</Link>
                <Link href="/stockdata/sw-industry?industryCode=851113.SI">洗衣机</Link>
                <Link href="/stockdata/sw-industry?industryCode=851114.SI">小家电</Link>
                <Link href="/stockdata/sw-industry?industryCode=851115.SI">家电零部件</Link>
                <Link href="/stockdata/sw-industry?industryCode=851121.SI">彩电</Link>
                <Link href="/stockdata/sw-industry?industryCode=851122.SI">其它视听器材</Link>
                <Link href="/stockdata/sw-industry?industryCode=851311.SI">毛纺</Link>
                <Link href="/stockdata/sw-industry?industryCode=851312.SI">棉纺</Link>
                <Link href="/stockdata/sw-industry?industryCode=851313.SI">丝绸</Link>
                <Link href="/stockdata/sw-industry?industryCode=851314.SI">印染</Link>
                <Link href="/stockdata/sw-industry?industryCode=851315.SI">辅料</Link>
                <Link href="/stockdata/sw-industry?industryCode=851316.SI">其他纺织</Link>
                <Link href="/stockdata/sw-industry?industryCode=851322.SI">男装</Link>
                <Link href="/stockdata/sw-industry?industryCode=851323.SI">女装</Link>
                <Link href="/stockdata/sw-industry?industryCode=851324.SI">休闲服装</Link>
                <Link href="/stockdata/sw-industry?industryCode=851325.SI">鞋帽</Link>
                <Link href="/stockdata/sw-industry?industryCode=851326.SI">家纺</Link>
                <Link href="/stockdata/sw-industry?industryCode=851327.SI">其他服装</Link>
                <Link href="/stockdata/sw-industry?industryCode=851411.SI">造纸</Link>
                <Link href="/stockdata/sw-industry?industryCode=851421.SI">包装印刷</Link>
                <Link href="/stockdata/sw-industry?industryCode=851432.SI">家具</Link>
                <Link href="/stockdata/sw-industry?industryCode=851433.SI">其他家用轻工</Link>
                <Link href="/stockdata/sw-industry?industryCode=851434.SI">珠宝首饰</Link>
                <Link href="/stockdata/sw-industry?industryCode=851435.SI">文娱用品</Link>
                <Link href="/stockdata/sw-industry?industryCode=851441.SI">其他轻工制造</Link>
                <Link href="/stockdata/sw-industry?industryCode=852031.SI">百货</Link>
                <Link href="/stockdata/sw-industry?industryCode=852032.SI">超市</Link>
                <Link href="/stockdata/sw-industry?industryCode=852033.SI">多业态零售</Link>
                <Link href="/stockdata/sw-industry?industryCode=852041.SI">专业连锁</Link>
                <Link href="/stockdata/sw-industry?industryCode=852051.SI">一般物业经营</Link>
                <Link href="/stockdata/sw-industry?industryCode=852052.SI">专业市场</Link>
                <Link href="/stockdata/sw-industry?industryCode=852021.SI">贸易</Link>
                <Link href="/stockdata/sw-industry?industryCode=850111.SI">种子生产</Link>
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
            <LinkGroup title="港股">
              <Link href="/stockdata/market/hsi" highlight>恒生指数市盈率</Link>
              <Link href="/stockdata/market/hsf" highlight>恒生金融指数</Link>
              <Link href="/stockdata/market/hsp" highlight>恒生地产指数</Link>
              <Link href="/stockdata/market/hsu" highlight>恒生公共指数</Link>
              <Link href="/stockdata/market/hsci" highlight>恒生工商指数</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 7}>
            <LinkGroup>
              <Link href="/stockdata/below-net-asset-statistics?marketId=1">全部A股 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000300.XSHG" highlight>沪深300 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000016.SH" highlight>上证50 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000905.SH" highlight>中证500 破净股统计</Link>
              <Link href="/stockdata/china-10-year-bond-yield" style={{ width: '250px' }} highlight>股债轮动指标(十年国债倒数与PE)</Link>
              <Link href="/stockdata/market-turn-over-ratio-statistics">换手率占比统计</Link>
              <Link href="/stockdata/marketcap-gdp" highlight>总市值比GDP</Link>
              <Link href="/stockdata/ma-statistics" highlight>5/20/50日均线统计</Link>
              <Link href="/stockdata/kdj-statistics">KDJ指标平均值</Link>
              <Link href="/stockdata/high-low-statistics" large>创新高、新低数量统计</Link>
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
          <NavPanel show={this.state.selectedIndex === 11}>
            <LinkGroup>
              <Link href="/stockdata/fund-position/pos-stock" style={{ width: '200px' }}>股票型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-pingheng" style={{ width: '200px' }}>平衡混合型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-linghuo" style={{ width: '200px' }}>灵活配置型基金仓位走势图</Link>
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
          </NavPanel>
        </NavPanelGroup>
      </div>
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
