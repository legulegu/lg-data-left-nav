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
            优酷
          </NavItem>
          <NavItem index={2} handleMouseOver={this.handleMouseOver}>
            土豆
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
