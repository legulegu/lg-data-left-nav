import React from "react";
import classNames from "classnames";
import "./panel.css";

const Panel = props => {
  return (
    <div className={classNames('lg-side-nav-panel', { "show": props.show })}>
      {props.children}
    </div>
  );
}

export default Panel;