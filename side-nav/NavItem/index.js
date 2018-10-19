import React from "react";
import classNames from "classnames";
import "./nav-item.scss";

const NavItem = props => {

  const handleMouseOver = e => {
    props.handleMouseOver(e, props.index);
  };

  return (
    <li 
      className={classNames("lg-side-nav-item", { "lg-nav-item-selected": props.selected })}
      onMouseOver={handleMouseOver}
    >
      {props.children}
    </li>
  );
};

export default NavItem;
