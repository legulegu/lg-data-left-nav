import React from "react";
import classNames from "classnames";
import "./nav-item.css";

/**
 * NavItem - 导航项组件
 * @param {number} index - 项索引
 * @param {boolean} highlight - 是否高亮
 * @param {boolean} hasPanel - 是否有下拉面板（用于 ARIA）
 * @param {Function} onMouseEnter - 鼠标进入回调 (e, index)
 * @param {Function} onMouseLeave - 鼠标离开回调
 * @param {Function} onKeyDown - 键盘事件回调
 * @param {Function} onClick - 点击回调
 * @param {string} className - 额外 CSS 类
 * @param {React.ReactNode} children - 内容
 */
const NavItem = ({
  index,
  highlight,
  hasPanel,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  onClick,
  className,
  children,
}) => {
  const handleMouseEnter = (e) => {
    if (onMouseEnter) {
      onMouseEnter(e, index);
    }
  };

  const handleMouseLeave = (e) => {
    if (onMouseLeave) {
      onMouseLeave(e, index);
    }
  };

  const handleKeyDown = (e) => {
    if (onKeyDown) {
      onKeyDown(e, index);
    }
  };

  return (
    <li
      className={classNames("lg-side-nav-item", {
        "lg-side-nav-item-light": highlight,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      tabIndex={0}
      role="menuitem"
      aria-haspopup={hasPanel ? "true" : undefined}
      aria-expanded={hasPanel ? (highlight ? "true" : "false") : undefined}
    >
      {children}
      <span className={classNames("arrow")}></span>
    </li>
  );
};

NavItem.defaultProps = {
  highlight: false,
  hasPanel: false,
  className: "",
};

export default NavItem;
