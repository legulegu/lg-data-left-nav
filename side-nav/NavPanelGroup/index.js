import React from "react";
import classNames from "classnames";
import "./nav-panel-group.scss";

const NavPanelGroup = props => {
  return (
    <div className={ classNames('lg-side-nav-panel-group', {show: props.show})} >
      {props.children}
    </div>
  );
}

export default NavPanelGroup;