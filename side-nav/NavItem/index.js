import React from "react";
import classNames from "classnames";
import "./nav-item.scss";

const NavItem = props => {

  const handleMouseEnter = e => {
    props.onMouseEnter(e, props.index);
  };

  const handleMouseLeave = e => {
    props.onMouseLeave(e, props.index);
  };

  return (
    <li 
      className={classNames("lg-side-nav-item", { "lg-side-nav-item-light": props.highlight })}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {props.children}
      <span className={classNames("arrow")}></span>
    </li>
  );
};

export default NavItem;
