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
        <Nav>
          <NavItem index={1} handleMouseOver={this.handleMouseOver}>
            A股主板市盈率（PE）
          </NavItem>
          <NavItem index={2} handleMouseOver={this.handleMouseOver}>
            A股指数市盈率（PE）
          </NavItem>
          <NavItem index={3} handleMouseOver={this.handleMouseOver}>
            A股主板市净率（PB）
          </NavItem>
          <NavItem index={4} handleMouseOver={this.handleMouseOver}>
            A股指数市净率（PB）
          </NavItem>
          <NavItem index={5} handleMouseOver={this.handleMouseOver}>
            行业数据
          </NavItem>
          <NavItem index={6} handleMouseOver={this.handleMouseOver}>
            美股/港股
          </NavItem>
          <NavItem index={7} handleMouseOver={this.handleMouseOver}>
            技术面分析
          </NavItem>
          <NavItem index={8} handleMouseOver={this.handleMouseOver}>
            研究
          </NavItem>
          <NavItem index={9} handleMouseOver={this.handleMouseOver}>
            基本面数据
          </NavItem>
          <NavItem index={10} handleMouseOver={this.handleMouseOver}>
            宏观数据
          </NavItem>
          <NavItem index={11} handleMouseOver={this.handleMouseOver}>
            情绪指标
          </NavItem>
        </Nav>
        <NavPanelGroup show={this.state.selectedIndex > 0}>
          <NavPanel show={this.state.selectedIndex === 1}>
            <LinkGroup title="优酷">
              <Link href="www.youku.com">电影</Link>
              <Link href="www.youku.com">电视剧</Link>
              <Link href="www.youku.com">美剧</Link>
              <Link href="www.youku.com">电影</Link>
              <Link href="www.youku.com">电视剧</Link>
              <Link href="www.youku.com">美剧</Link>
              <Link href="www.youku.com">电影</Link>
              <Link href="www.youku.com">电视剧</Link>
              <Link href="www.youku.com">美剧</Link>
              <Link href="www.youku.com">电影</Link>
              <Link href="www.youku.com">电视剧</Link>
              <Link href="www.youku.com">美剧</Link>
            </LinkGroup>
            <LinkGroup title="优酷">
              <Link href="www.youku.com">电影</Link>
              <Link href="www.youku.com">电视剧</Link>
              <Link href="www.youku.com">美剧</Link>
            </LinkGroup>
          </NavPanel>
          <NavPanel show={this.state.selectedIndex === 2}>
            <LinkGroup title="优酷">
              <Link href="www.youku.com">电影</Link>
              <Link href="www.youku.com">电视剧</Link>
              <Link href="www.youku.com">美剧</Link>
            </LinkGroup>
          </NavPanel>
        </NavPanelGroup>
      </div>
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
