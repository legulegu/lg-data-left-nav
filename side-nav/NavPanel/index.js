import React from "react";
import classNames from "classnames";
import "./panel.scss";

const Panel = props => {
  return (
    <div className={classNames('lg-side-nav-panel')}>
      {props.children}
    </div>
  );
}

export default Panel;