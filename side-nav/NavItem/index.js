import React from "react";
import classNames from "classnames";
import "./nav-item.scss";

const NavItem = props => {
  return (
    <li
      className={classNames(
        "lg-side-nav-item",
        { "lg-nav-item-selected": props.selected },
        props.className
      )}
      onMouseOver={handleMouseOver}
    >
      {props.children}
    </li>
  );
};

export default NavItem;
