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
            A股主板市盈率
          </NavItem>
          <NavItem index={2} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 2}>
            A股指数市盈率
          </NavItem>
          <NavItem index={3} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 3}>
            A股主板市净率
          </NavItem>
          <NavItem index={4} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 4}>
            A股指数市净率
          </NavItem>
          <NavItem index={5} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 5}>
            行业数据
          </NavItem>
          <NavItem index={6} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 6}>
            美股/港股
          </NavItem>
          <NavItem index={7} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 7}>
            技术面分析
          </NavItem>
          <NavItem index={8} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 8}>
            研究
          </NavItem>
          <NavItem index={9} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 9}>
            基本面数据
          </NavItem>
          <NavItem index={10} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 10}>
            宏观数据
          </NavItem>
          <NavItem index={11} handleMouseOver={this.handleMouseOver} highlight={this.state.selectedIndex === 11}>
            情绪指标
          </NavItem>
        </Nav>
        <NavPanelGroup show={this.state.selectedIndex > 0}>
          <NavPanel show={this.state.selectedIndex === 1}>
            <LinkGroup>
              <Link href="/stockdata/market_pe">A股平均市盈率</Link>
              <Link href="/stockdata/shanghaiPE">上证A股市盈率</Link>
              <Link href="/stockdata/shenzhenPE">深圳A股市盈率</Link>
              <Link href="/stockdata/zxbPE">中小板市盈率</Link>
              <Link href="/stockdata/cybPE">创业板市盈率</Link>
              <Link href="/stockdata/a-ttm-lyr" large="true">全部A股等权重市盈率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 2}>
            <LinkGroup>
              <Link href="/stockdata/hs300-ttm-lyr" target="_blank">沪深300市盈率</Link>
              <Link href="/stockdata/sz50-ttm-lyr" target="_blank">上证50市盈率</Link>
              <Link href="/stockdata/sz180-ttm-lyr" target="_blank">上证180市盈率</Link>
              <Link href="/stockdata/sz380-ttm-lyr" target="_blank">上证380市盈率</Link>
              <Link href="/stockdata/zzlt-ttm-lyr" target="_blank">中证流通市盈率</Link>
              <Link href="/stockdata/zz100-ttm-lyr" target="_blank">中证100市盈率</Link>
              <Link href="/stockdata/zz500-ttm-lyr" target="_blank">中证500市盈率</Link>
              <Link href="/stockdata/zz800-ttm-lyr" target="_blank">中证800市盈率</Link>
              <Link href="/stockdata/zz1000-ttm-lyr" target="_blank">中证1000市盈率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 3}>
            <LinkGroup>
              <Link href="/stockdata/market_pb" target="_blank">A股平均市净率</Link>
              <Link href="/stockdata/shanghaiPB" target="_blank">上证A股市净率</Link>
              <Link href="/stockdata/shenzhenPB" target="_blank">深圳A股市净率</Link>
              <Link href="/stockdata/zxbPB" target="_blank">中小板市净率</Link>
              <Link href="/stockdata/cybPB" target="_blank">创业板市净率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 4}>
            <LinkGroup>
              <Link href="/stockdata/hs300-pb" target="_blank">沪深300市净率</Link>
              <Link href="/stockdata/sz50-pb" target="_blank">上证50市净率</Link>
              <Link href="/stockdata/zz180-pb" target="_blank">中证180市净率</Link>
              <Link href="/stockdata/zz380-pb" target="_blank">上证380市净率</Link>
              <Link href="/stockdata/zzlt-pb" target="_blank">中证流通市净率</Link>
              <Link href="/stockdata/zz100-pb" target="_blank">中证100市净率</Link>
              <Link href="/stockdata/zz500-pb" target="_blank">中证500市净率</Link>
              <Link href="/stockdata/zz800-pb" target="_blank">中证800市净率</Link>
              <Link href="/stockdata/zz1000-pb" target="_blank">中证1000市净率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 5}>
            <LinkGroup title="证监会分类">
              <Link href="/stockdata/industry#zjh" large="true">数据总览*</Link>
              <Link href="/stockdata/industry/zjh/A" large="true">农、林、牧、渔业</Link>
              <Link href="/stockdata/industry/zjh/B" large="true">采矿业</Link>
              <Link href="/stockdata/industry/zjh/C" large="true">制造业</Link>
              <Link href="/stockdata/industry/zjh/D" large="true">电力、热力、燃气及水业</Link>
              <Link href="/stockdata/industry/zjh/E" large="true">建筑业</Link>
              <Link href="/stockdata/industry/zjh/F" large="true">批发和零售业</Link>
              <Link href="/stockdata/industry/zjh/G" large="true">交通运输、仓储和邮政业</Link>
              <Link href="/stockdata/industry/zjh/H" large="true">住宿和餐饮业</Link>
              <Link href="/stockdata/industry/zjh/I" large="true">信息传输、软件和信息业</Link>
              <Link href="/stockdata/industry/zjh/J" large="true">金融业</Link>
              <Link href="/stockdata/industry/zjh/K" large="true">房地产业</Link>
              <Link href="/stockdata/industry/zjh/L" large="true">租赁和商务服务业</Link>
              <Link href="/stockdata/industry/zjh/M" large="true">科学研究和技术服务业</Link>
              <Link href="/stockdata/industry/zjh/N" large="true">水利、环境和公共设施</Link>
              <Link href="/stockdata/industry/zjh/O" large="true">居民服务、修理行业</Link>
              <Link href="/stockdata/industry/zjh/P" large="true">教育</Link>
              <Link href="/stockdata/industry/zjh/Q" large="true">卫生和社会工作业</Link>
              <Link href="/stockdata/industry/zjh/R" large="true">文化、体育和娱乐业</Link>
              <Link href="/stockdata/industry/zjh/S" large="true">综合</Link>
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
          <NavPanel show={this.state.selectedIndex === 6}>
            <LinkGroup title="美股">
              <Link href="/stockdata/market/nasdaq">纳斯达克市盈率</Link>
              <Link href="/stockdata/market/dow">道琼斯市盈率</Link>
              <Link href="/stockdata/market/sandp">普标500市盈率</Link>
            </LinkGroup>
            <LinkGroup title="港股">
              <Link href="/stockdata/market/hsi">恒生指数市盈率</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 7}>
            <LinkGroup title="波段分析">
              <Link href="/stockdata/market-analysis-shanghai">上证指数波段分析</Link>
              <Link href="/stockdata/market-analysis-chuangye">创业板波段分析</Link>
              <Link href="/stockdata/market-analysis-average-price">A股平均股价</Link>
            </LinkGroup>
            <LinkGroup title="热度分析">
              <Link href="/stockdata/market-activity">赚钱效应分析</Link>
              <Link href="/stockdata/market-activity-trend">赚钱效应日内趋势</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 8}>
            <LinkGroup>
              <Link href="/stockdata/below-net-asset-statistics">破净股统计</Link>
              <Link href="/stockdata/china-10-year-bond-yield">股债轮动指标</Link>
              <Link href="/stockdata/market-turn-over-ratio-statistics">换手率占比统计</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 9}>
            <LinkGroup>
              <Link href="/stockdata/guxilv">A股股息率统计</Link>
              <Link href="/stockdata/companynum">A股上市公司家数</Link>
              <Link href="/stockdata/shenzhenguben">深圳A股总股本</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 10}>
            <LinkGroup>
              <Link href="/stockdata/pmi">PMI走势</Link>
              <Link href="/stockdata/m1m2">M1M2走势图</Link>
              <Link href="/stockdata/broadmoney">M1-M2剪刀差</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 11}>
            <LinkGroup>
              <Link href="/stockdata/averageposition">仓位数据</Link>
              <Link href="/stockdata/a_shares_new_account">新增开户数</Link>
            </LinkGroup>
          </NavPanel>
        </NavPanelGroup>
      </div>
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
