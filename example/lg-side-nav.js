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
import VerticalGroup from "../side-nav/VerticalGroup";
import LinkGroupVertical from "../side-nav/LinkGroupVertical";


let timeoutIds = []

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseLeaveItem = this.handleMouseLeaveItem.bind(this);
    this.state = {
      level1SwData: [],
      level2SwData: [],
      level3SwData: [],
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

  handleMouseEnter(e, index) {
    const id = setTimeout(() => {
      this.setState({
        selectedIndex: index
      });
    }, 500)
    timeoutIds.push(id)
  }

  handleMouseLeave(e) {
    this.setState({
      selectedIndex: -1
    });
  }

  handleMouseLeaveItem(e) {
    if (timeoutIds.length > 0) {
      timeoutIds.forEach((timeoutId) => {
        clearTimeout(timeoutId)
      })
    }
    timeoutIds = [];
  }

  render() {
    return (
      <div className={classNames('lg-side-nav-container')} onMouseLeave={this.handleMouseLeave}>
        <Nav title="全部分类">
          <NavItem index={1} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 1}>
            A股市盈率
          </NavItem>
          <NavItem index={2} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 2}>
            A股市净率
          </NavItem>
          <NavItem index={12} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 12}>
            申万行业
          </NavItem>
          <NavItem index={13} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 13}>
            规模指数/行业代表
          </NavItem>
          <NavItem index={4} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 4}>
            沪深港通/融资融券
          </NavItem>
          <NavItem index={7} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 7}>
            底部研究
          </NavItem>
          <NavItem index={15} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 15}>
            市场宽度
          </NavItem>
          <NavItem index={16} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 16}>
            景气度/拥挤度研究
          </NavItem>
          <NavItem index={9} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 9}>
            宏观数据
          </NavItem>
          <NavItem index={17} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 17}>
            券商十大金股
          </NavItem>
          <NavItem index={5} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 5}>
            美股/港股
          </NavItem>
          <NavItem index={11} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 11}>
            基金
          </NavItem>
          <NavItem index={14} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeaveItem} highlight={this.state.selectedIndex === 14}>
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
            <VerticalGroup>
              <LinkGroupVertical title="制造业">
                <Link href="/stockdata/index-basic?indexCode=H30531.CSI" >精工制造</Link>
                <Link href="/stockdata/index-basic?indexCode=930599.CSI" >中证高装</Link>
                <Link href="/stockdata/index-basic?indexCode=930820.CSI" >CS高端装</Link>
                <Link href="/stockdata/index-basic?indexCode=399967.SZ" >中证军工</Link>
                <Link href="/stockdata/index-basic?indexCode=399967.SZ" >国证军工</Link>
                <Link href="/stockdata/index-basic?indexCode=399417.SZ" >国证新能源车</Link>
                <Link href="/stockdata/index-basic?indexCode=931151.CSI" >中证光伏产业</Link>
              </LinkGroupVertical>
              <LinkGroupVertical title="医药">
                <Link href="/stockdata/index-basic?indexCode=000991.SH" >全指医药</Link>
                <Link href="/stockdata/index-basic?indexCode=930791.CSI" >CS医药TI</Link>
                <Link href="/stockdata/index-basic?indexCode=000933.SH" >中证医药</Link>
                <Link href="/stockdata/index-basic?indexCode=399394.SZ" >国证医药</Link>
                <Link href="/stockdata/index-basic?indexCode=h00121.SH" >上证医药主题全收益</Link>
                <Link href="/stockdata/index-basic?indexCode=930743.CSI" >中证生物科技主题</Link>
              </LinkGroupVertical>
              <LinkGroupVertical title="消费">
                <Link href="/stockdata/index-basic?indexCode=931139.CSI" >CS消费50</Link>
                <Link href="/stockdata/index-basic?indexCode=000990.SH" >全指消费</Link>
                <Link href="/stockdata/index-basic?indexCode=931068.CSI" >消费龙头</Link>
                <Link href="/stockdata/index-basic?indexCode=000932.SH" >中证消费</Link>
                <Link href="/stockdata/index-basic?indexCode=399997.SZ" >中证白酒</Link>
                <Link href="/stockdata/index-basic?indexCode=399365.SZ" >国证农业</Link>
              </LinkGroupVertical>
              <LinkGroupVertical title="金融">
                <Link href="/stockdata/index-basic?indexCode=000914.SH" >300金融</Link>
                <Link href="/stockdata/index-basic?indexCode=000934.SH" >中证金融</Link>
                <Link href="/stockdata/index-basic?indexCode=000992.SH" >全指金融</Link>
              </LinkGroupVertical>
              <LinkGroupVertical title="资源">
                <Link href="/stockdata/index-basic?indexCode=000944.CSI" >内地资源</Link>
                <Link href="/stockdata/index-basic?indexCode=000805.CSI" >A股资源</Link>
                <Link href="/stockdata/index-basic?indexCode=000979.CSI" >大宗商品</Link>
                <Link href="/stockdata/index-basic?indexCode=399440.SZ" >国证钢铁</Link>
                <Link href="/stockdata/index-basic?indexCode=000820.CSI" >煤炭指数</Link>
                <Link href="/stockdata/index-basic?indexCode=000819.SH" >中证有色金属</Link>
              </LinkGroupVertical>
              <LinkGroupVertical title="科技">
                <Link href="/stockdata/index-basic?indexCode=931186.CSI" >中证科技</Link>
                <Link href="/stockdata/index-basic?indexCode=000998.CSI" >中证TMT</Link>
                <Link href="/stockdata/index-basic?indexCode=000993.SH" >全指信息</Link>
                <Link href="/stockdata/index-basic?indexCode=h21081.CSI" >中证半导全收益</Link>
                <Link href="/stockdata/index-basic?indexCode=921441.CSI" large >中证人工智能50全收益</Link>
              </LinkGroupVertical>
            </VerticalGroup>
            <LinkGroup title="其他主题指数">
              <Link href="/stockdata/index-basic?indexCode=000159.SH">上证沪股通指数</Link>
              <Link href="/stockdata/index-basic?indexCode=930901.SH">中证动漫游戏</Link>
              <Link href="/stockdata/index-basic?indexCode=930742.CSI">中证电商</Link>
              <Link href="/stockdata/index-basic?indexCode=930706.CSI">中证水泥</Link>
              <Link href="/stockdata/index-basic?indexCode=000827.SH">中证环保</Link>
              <Link href="/stockdata/index-basic?indexCode=399989.SZ">中证医疗</Link>
              <Link href="/stockdata/index-basic?indexCode=399971.SZ">中证传媒</Link>
              <Link href="/stockdata/index-basic?indexCode=399812.SZ">养老产业</Link>
              <Link href="/stockdata/index-basic?indexCode=399438.SZ">国证电力</Link>
              <Link href="/stockdata/index-basic?indexCode=399412.SZ">国证新能</Link>
              <Link href="/stockdata/index-basic?indexCode=399354.SZ">分析师指数</Link>
              <Link href="/stockdata/index-basic?indexCode=930759.CSI">雪球100</Link>
              <Link href="/stockdata/index-basic?indexCode=930760.CSI">雪球智选</Link>
              <Link href="/stockdata/index-basic?indexCode=000824.SH">中证国企红利</Link>
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
              <Link href="/stockdata/hu-shen-gang-tong" highlight large>*沪深港通资金流向</Link>
              <Link href="/stockdata/hu-gu-tong" large>沪股通</Link>
              <Link href="/stockdata/shen-gu-tong" large>深股通</Link>
              <Link href="/stockdata/gang-gu-tong-hu" large>港股通（沪）</Link>
              <Link href="/stockdata/gang-gu-tong-shen" large>港股通（深）</Link>
            </LinkGroup>
            <LinkGroup title="融资融券">
              <Link href="/stockdata/margin-trading">*融资融券变动</Link>
              <Link href="/stockdata/rzrqye">*融资融券余额</Link>
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
              <Link href="/stockdata/below-net-asset-statistics?marketId=1" large>全部A股 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000300.XSHG" large>沪深300 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000016.SH" large>上证50 破净股统计</Link>
              <Link href="/stockdata/below-net-asset-statistics?marketId=000905.SH" large>中证500 破净股统计</Link>
              <Link href="/stockdata/market-turn-over-ratio-statistics" large>换手率占比统计</Link>
              <Link href="/stockdata/marketcap-gdp" highlight large>总市值比GDP</Link>
              <Link href="/stockdata/equity-bond-spread" highlight large>股债利差</Link>
              <Link href="/stockdata/ma-statistics" highlight large>5/20/50日均线统计</Link>
              <Link href="/stockdata/kdj-statistics" large>KDJ指标平均值</Link>
              <Link href="/stockdata/high-low-statistics" large>创新高、新低数量统计</Link>
              <Link href="/stockdata/stock-day-limit" large>沪深A股涨停板特征统计</Link>
              <Link href="/stockdata/market-style?indexCode=1" large>恐慌&贪心指标</Link>
              <Link href="/stockdata/a-risk-premium" large highlight>A股风险溢价</Link>
              <Link href="/stockdata/hsi-risk-premium" large highlight>港股风险溢价</Link>
              <Link href="/stockdata/hs300-risk-premium" large>沪深300风险溢价</Link>
              <Link href="/stockdata/hs300-tcjr-risk-premium" large>沪深300(剔除金融)风险溢价</Link>
              <Link href="/stockdata/sz50-risk-premium" large>上证50风险溢价</Link>
              <Link href="/stockdata/market-style-rotation" large>价值vs小盘风格轮动(沪深300vs中证500)</Link>
              <Link href="/stockdata/market-style-rotation-hs300-gz2000" large highlight>价值vs小盘风格轮动(沪深300vs国证2000)</Link>
              <Link href="/stockdata/market-style-rotation/gz2000-divided-by-hs300" large highlight>国证2000/沪深300</Link>
              <Link href="/stockdata/china-10-year-bond-yield" large>股债轮动指标(十年国债倒数与PE)</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 9}>
            <LinkGroup title="央行统计">
              <Link middle href="/stockdata/aggregate-financing-to-the-real-economy-vs-a" >社会融资规模增速</Link>
              <Link middle href="/stockdata/aggregate-financing-to-the-real-economy-vs-m2"  >社会融资规模增速与M2</Link>
              <Link middle href="/stockdata/mid-long-loans" >中长期贷款增速</Link>
              <Link middle href="/stockdata/enterprise-mid-long-loans"  >企业端中长期贷款增速</Link>
              <Link middle href="/stockdata/residents-mid-long-loans">居民端中长期贷款增速</Link>
              <Link middle href="/stockdata/market/hk/dv/hscei">恒生中国企业指数</Link>
              <Link middle href="/stockdata/m1m2">M1M2总量</Link>
              <Link middle href="/stockdata/broadmoney">M1-M2剪刀差</Link>
              <Link middle href="/stockdata/m1m2-mom">M1同比</Link>
              <Link middle href="/stockdata/m2-yoy">M2同比</Link>
              <Link middle href="/stockdata/m2-gdp">M2/GDP</Link>
              <Link middle href="/stockdata/m1-ppi">M1-PPI</Link>
              <Link middle href="/stockdata/m2yoy-gdp">M2同比与名义GDP之差</Link>
              <Link middle href="/stockdata/aggregate-financing-to-the-real-economy-m2">M2与社融剪刀差</Link>
            </LinkGroup>
            <LinkGroup title="经济总量">
              <Link middle href="/stockdata/gdp-yoy-normal-gdp-quarter">中国实际GDP</Link>
              <Link middle href="/stockdata/gdpyoy-vs-m2yoy">中国名义GDP当年累计同比</Link>
              <Link middle href="/stockdata/power-generation">中国发电量</Link>
              <Link middle href="/stockdata/good-transported">货运量</Link>
              <Link middle href="/stockdata/railway-freight-volume">铁路货运量</Link>
              <Link middle href="/stockdata/rscg">社会消费品零售</Link>
              <Link middle href="/stockdata/urban-unemployment-rate">城镇调查失业率</Link>
              <Link middle href="/stockdata/fixed-investments">固定资产投资累计增速</Link>
            </LinkGroup>
            <LinkGroup title="物价">
              <Link href="/stockdata/cpi" middle>CPI同比</Link>
              <Link href="/stockdata/ppi" middle>PPI同比</Link>
              <Link href="/stockdata/ppi-cpi" middle>PPI与CPI之差</Link>
              <Link href="/stockdata/ppi-ppirm" middle>PPI与PPIRM之差</Link>
            </LinkGroup>
            <LinkGroup title="外贸">
              <Link href="/stockdata/customs-import-export-volume" middle>进出口总值同比增长</Link>
              <Link href="/stockdata/customs-export-volume" middle>出口总值同比增长</Link>
              <Link href="/stockdata/customs-import-volume" middle>进口总值同比增长</Link>
              <Link href="/stockdata/customs-dif-volume" middle>进出口差额 累计差额</Link>
            </LinkGroup>
            <LinkGroup title="制造服务">
              <Link href="/stockdata/industrial-enterprise-profit" max>工业企业利润总额累计增长</Link>
              <Link href="/stockdata/industrial-enterprise-stock" max>工业企业产成品存货累计增长</Link>
              <Link href="/stockdata/industrial-enterprise-loss" max>工业亏损企业亏损累计增长</Link>
              <Link href="/stockdata/pmi" middle>中国官方PMI</Link>
              <Link href="/stockdata/cn-pmi-xdd-kc" middle>中国官方PMI-新订单&库存</Link>
              <Link href="/stockdata/cn-pmi-cyryzs" middle>中国官方PMI-从业人员指数</Link>
            </LinkGroup>
            <LinkGroup title="宏观Beta因子">
              <Link href="/stockdata/us-dollar-index-vs-a" middle >美元指数</Link>
              <Link href="/stockdata/rmb-us-dollar-exchange-vs-a" middle >美元人民币中间价</Link>
              <Link href="/stockdata/US-10-year-bond-yield-vs-a" middle>美国国债收益率:10年</Link>
              <Link href="/stockdata/US-real-rate-of-return-vs-a" middle>美国国债实际收益率:10年</Link>
              <Link href="/stockdata/china-bond-tb-ytm-10Y" middle>中国国债到期收益率:10年</Link>
              <Link href="/stockdata/us-dollar-index-vs-gold" middle>现货黄金 vs 美元指数</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 11}>
            <LinkGroup title="基金仓位走势图">
              <Link href="/stockdata/fund-position/pos-stock" style={{ width: '200px' }}>股票型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-pingheng" style={{ width: '200px' }}>平衡混合型基金仓位走势图</Link>
              <Link href="/stockdata/fund-position/pos-linghuo" style={{ width: '200px' }}>灵活配置型基金仓位走势图</Link>
            </LinkGroup>
            <LinkGroup title="排名">
              <Link href="/stockdata/fund-sw-industry-holding?level=1&endDate=20230331" style={{ width: '200px' }}>基金重仓行业排名-申万1级</Link>
              <Link href="/stockdata/fund-sw-industry-holding?level=2&endDate=20230331" style={{ width: '200px' }}>基金重仓行业排名-申万2级</Link>
              <Link href="/stockdata/fund-shareholding-rankings" style={{ width: '200px' }}>基金重仓股排名</Link>
            </LinkGroup>
            <LinkGroup title="仓位">
              <Link href="/stockdata/fund-holding-rate-history?industryCode=主动型基金仓位(Top10)&keys=fund_sw_主动型基金仓位(Top10),hs300" style={{ width: '220px', paddingRight: '20px' }}>主动型基金仓位-披露仓位计算版</Link>
              <Link href="/stockdata/fund-holding-rate-history?industryCode=股票型仓位(Top10)&keys=fund_sw_股票型仓位(Top10),hs300" style={{ width: '200px' }}>股票型仓位-披露仓位计算版</Link>
              <Link href="/stockdata/fund-holding-rate-history?industryCode=混合型仓位(Top10)&keys=fund_sw_混合型仓位(Top10),hs300" style={{ width: '200px' }}>混合型仓位-披露仓位计算版</Link>
              <Link href="/stockdata/fund-holding-rate-history?industryCode=灵活型仓位(Top10)&keys=fund_sw_灵活型仓位(Top10),hs300" style={{ width: '200px' }}>灵活型仓位-披露仓位计算版</Link>
            </LinkGroup>
            <LinkGroup title="基金重仓指数">
              <Link href="/stockdata/index-basic?indexCode=800200.LG" >基金重仓前200名</Link>
              <Link href="/stockdata/index-basic?indexCode=800100.LG" >基金重仓前100名</Link>
              <Link href="/stockdata/index-basic?indexCode=800050.LG" >基金重仓前50名</Link>
              <Link href="/stockdata/index-basic?indexCode=800020.LG" >基金重仓前20名</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 15}>
            <LinkGroup>
              <Link href="/stockdata/sw-market-width" style={{ width: '200px' }}>市场宽度(申万行业1级)</Link>
              <Link href="/stockdata/sw-market-width/sec-level" style={{ width: '200px' }}>市场宽度(申万行业2级)</Link>
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
              <Link href="/stockdata/ashares-congestion" style={{ width: '180px' }}>大盘拥挤度(逃顶利器)</Link>
              <Link href="https://legulegu.com/stockdata/charts/426" style={{ width: '200px' }}>融资买入/成交额(逃顶利器)</Link>
              <Link href="/stockdata/sw-congestion" style={{ width: '200px' }}>行业拥挤度(申万一级)</Link>
              <Link href="/stockdata/sw-congestion/sec-level" style={{ width: '200px' }}>行业拥挤度(申万二级)</Link>
            </LinkGroup>
            <LinkGroup title="小市值">
              <Link href="/stockdata/low-market-cap" style={{ width: '200px' }}>小市值因子拥挤度和因子估值</Link>
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
