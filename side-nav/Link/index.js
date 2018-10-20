import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import "./link.scss";

const Link = props => {
  return (
    <a
      href={props.href}
      target="_blank"
      className={classNames("lg-side-nav-link", { "lg-side-nav-link-industry": props.industry }, props.className)}
      {...props}
    >
      {props.children}
    </a>
  );
};

export default Link;
