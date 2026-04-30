import React from "react";
import classNames from "classnames";
import "./link.css";

const Link = props => {
  const href = props.href;
  const middle = props.middle;
  const large = props.large;
  const max = props.max;
  const highlight = props.highlight;
  const children = props.children;
  const className = props.className;

  const rest = {};
  const linkPropKeys = { href: 1, middle: 1, large: 1, max: 1, highlight: 1, children: 1, className: 1 };
  for (var key in props) {
    if (props.hasOwnProperty(key) && !linkPropKeys[key]) {
      rest[key] = props[key];
    }
  }

  return (
    <a
      href={href}
      className={classNames(
        "lg-side-nav-link",
        {
          "lg-side-nav-link-middle": middle,
          "lg-side-nav-link-large": large,
          "lg-side-nav-link-max": max,
          "lg-side-nav-link-hight-light": highlight,
        },
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
