import React from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";
import NavItem from "../side-nav/NavItem";
import NavPanelGroup from "../side-nav/NavPanelGroup";
import Link from "../side-nav/Link";
import NavPanel from "../side-nav/NavPanel";

import classNames from "classnames";

import "./lg-side-nav.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames('lg-side-nav-container')}>
        <Nav>
          <NavItem>
            优酷  
          </NavItem>
          <NavItem>
            土豆  
          </NavItem>
        </Nav>
        <NavPanelGroup>
          <NavPanel>
            <Link href="www.youku.com">电影</Link>
          </NavPanel>
        </NavPanelGroup>
      </div>
    );
  }
}

App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector("#data-center"));
