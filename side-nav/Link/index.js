import React from "react";
import classNames from "classnames";
import "./link.scss";

const Link = props => {
  return (
    <a
      href={props.href}
      className={classNames("lg-side-nav-link", { "lg-side-nav-link-large": props.large }, props.className)}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default Link;
