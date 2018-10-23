import React from "react";
import classNames from "classnames";
import "./nav-item.scss";

const NavItem = props => {

  const handleMouseOver = e => {
    props.handleMouseOver(e, props.index);
  };

  return (
    <li 
      className={classNames("lg-side-nav-item", { "lg-side-nav-item-light": props.highlight })}
      onMouseOver={handleMouseOver}
    >
      {props.children}
      <span className={classNames("arrow")}></span>
    </li>
  );
};

export default NavItem;
