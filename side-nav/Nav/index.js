import React from "react";
import classNames from "classnames";

import "./nav.css";

const Nav = props => {
  return (
    <ul className={classNames("lg-side-nav", props.className)}>
      <li className={classNames("lg-side-nav-title")}>{props.title}</li>
      {props.children}
    </ul>
  );
}

Nav.defaultProps = {};

export default Nav;
