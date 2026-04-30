import React from "react";
import classNames from "classnames";
import "./nav-panel-group.css";

const NavPanelGroup = props => {
  return (
    <div className={ classNames('lg-side-nav-panel-group', {show: props.show})} >
      {props.children}
    </div>
  );
}

export default NavPanelGroup;