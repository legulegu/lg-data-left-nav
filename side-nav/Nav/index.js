import React from "react";
import classNames from "classnames";

import "./nav.scss";

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={classNames("lg-side-nav", this.props.className)}>
        {this.clonedChildren}
      </ul>
    );
  }
}

Nav.defaultProps = {};

export default Nav;
