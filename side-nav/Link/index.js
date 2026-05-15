import React from "react";
import classNames from "classnames";
import "./link.css";

/**
 * Link - 导航链接组件
 * @param {string} href - 链接地址
 * @param {boolean} middle - 中等宽度 (190px)
 * @param {boolean} large - 大宽度 (200px)
 * @param {boolean} max - 最大宽度 (250px)
 * @param {boolean} highlight - 高亮样式（红色文字）
 * @param {string} className - 额外 CSS 类
 * @param {React.ReactNode} children - 链接内容
 * @param {Object} rest - 其他传递给 <a> 标签的属性
 */
const Link = ({
  href,
  middle,
  large,
  max,
  highlight,
  className,
  children,
  ...rest
}) => {
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

Link.defaultProps = {
  href: "#",
  middle: false,
  large: false,
  max: false,
  highlight: false,
  className: "",
};

export default Link;
