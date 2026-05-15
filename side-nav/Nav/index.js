import React from "react";
import classNames from "classnames";
import "./nav.css";

/**
 * Nav - 导航根容器
 * @param {string} title - 导航标题
 * @param {string} className - 额外 CSS 类
 * @param {React.ReactNode} children - 导航项列表
 */
const Nav = ({ title, className, children }) => {
  return (
    <ul
      className={classNames("lg-side-nav", className)}
      role="menubar"
      aria-label={title || "导航菜单"}
    >
      {title && (
        <li className={classNames("lg-side-nav-title")} role="presentation">
          {title}
        </li>
      )}
      {children}
    </ul>
  );
};

Nav.defaultProps = {
  title: "",
  className: "",
};

export default Nav;
