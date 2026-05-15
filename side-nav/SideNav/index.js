import React, { useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import Nav from "../Nav";
import NavItem from "../NavItem";
import NavPanel from "../NavPanel";
import NavPanelGroup from "../NavPanelGroup";
import Link from "../Link";
import LinkGroup from "../LinkGroup";
import LinkGroupVertical from "../LinkGroupVertical";
import VerticalGroup from "../VerticalGroup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./side-nav.css";

/**
 * 渲染单个链接
 */
const renderLink = (link) => (
  <Link key={link.href || link.label} {...link}>
    {link.label}
  </Link>
);

/**
 * 渲染链接组
 */
const renderLinkGroup = (group, idx) => {
  if (group.vertical) {
    return (
      <VerticalGroup key={`vg-${idx}`}>
        {group.groups.map((g, i) => (
          <LinkGroupVertical key={i} title={g.title}>
            {g.links.map((link) => renderLink(link))}
          </LinkGroupVertical>
        ))}
      </VerticalGroup>
    );
  }

  return (
    <LinkGroup key={group.title || `group-${idx}`} title={group.title}>
      {group.links.map((link) => renderLink(link))}
    </LinkGroup>
  );
};

/**
 * 渲染面板内容
 */
const renderPanelContent = (config) => {
  if (!config) return null;
  return config.map((group, idx) => renderLinkGroup(group, idx));
};

/**
 * 渲染申万行业 TabPanel
 */
const renderSwTabPanel = (data) => (
  <TabPanel>
    {data.map((swItem) => (
      <Link
        key={swItem.industryCode}
        href={`/stockdata/sw-industry-2021?industryCode=${swItem.industryCode}`}
      >
        {swItem.industryName}
      </Link>
    ))}
  </TabPanel>
);

/**
 * SideNav - 侧边导航高级封装组件
 *
 * @param {Array} items - 导航项列表 [{ index, label }]
 * @param {Object} panels - 面板配置 { [index]: { groups: [...] } }
 * @param {Object} verticalGroupConfig - 垂直组配置 { [index]: [...] }
 * @param {Object} swData - 申万行业数据 { level1, level2, level3 }
 * @param {number} hoverDelay - 鼠标悬停延迟（毫秒），默认 200
 * @param {number} defaultActiveIndex - 默认激活索引，默认 -1
 * @param {string} title - 导航标题，默认 "全部分类"
 * @param {Function} onItemHover - 悬停回调 (index)
 * @param {Function} onItemClick - 点击回调 (index)
 * @param {number} swIndustryIndex - 申万行业项的 index，默认 12
 */
const SideNav = ({
  items,
  panels,
  verticalGroupConfig,
  swData,
  hoverDelay,
  defaultActiveIndex,
  title,
  onItemHover,
  onItemClick,
  swIndustryIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  // 清理 timer
  const clearHoverTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      clearHoverTimer();
    };
  }, [clearHoverTimer]);

  // 鼠标进入导航项
  const handleItemEnter = useCallback(
    (_, index) => {
      clearHoverTimer();
      timeoutRef.current = setTimeout(() => {
        setActiveIndex(index);
        if (onItemHover) {
          onItemHover(index);
        }
      }, hoverDelay);
    },
    [hoverDelay, clearHoverTimer, onItemHover]
  );

  // 鼠标离开导航项（不清除 active，保持面板显示）
  const handleItemLeave = useCallback(() => {
    clearHoverTimer();
  }, [clearHoverTimer]);

  // 鼠标离开整个导航容器
  const handleContainerLeave = useCallback(() => {
    clearHoverTimer();
    setActiveIndex(-1);
  }, [clearHoverTimer]);

  // 键盘导航
  const handleKeyDown = useCallback(
    (e, index) => {
      const currentIdx = items.findIndex((item) => item.index === index);
      if (currentIdx === -1) return;

      let nextIdx = currentIdx;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          nextIdx = Math.min(currentIdx + 1, items.length - 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          nextIdx = Math.max(currentIdx - 1, 0);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          setActiveIndex(index);
          if (onItemClick) {
            onItemClick(index);
          }
          return;
        case "Escape":
          e.preventDefault();
          setActiveIndex(-1);
          return;
        default:
          return;
      }

      const nextItem = items[nextIdx];
      if (nextItem) {
        setActiveIndex(nextItem.index);
        // 聚焦到下一个导航项
        const navItems = containerRef.current?.querySelectorAll(".lg-side-nav-item");
        if (navItems && navItems[nextIdx]) {
          navItems[nextIdx].focus();
        }
      }
    },
    [items, onItemClick]
  );

  // 渲染激活的面板
  const renderActivePanel = () => {
    if (activeIndex < 0) return null;

    const activeItem = items.find((item) => item.index === activeIndex);
    if (!activeItem) return null;

    const hasPanel = !!(
      verticalGroupConfig[activeItem.index] ||
      (panels[activeItem.index] && panels[activeItem.index].groups)
    );

    if (!hasPanel && activeItem.index !== swIndustryIndex) return null;

    return (
      <NavPanelGroup show={true}>
        <NavPanel show={true}>
          {activeItem.index === swIndustryIndex && swData ? (
            <Tabs>
              <TabList>
                <Tab>一级</Tab>
                <Tab>二级</Tab>
                <Tab>三级</Tab>
              </TabList>
              {renderSwTabPanel(swData.level1)}
              {renderSwTabPanel(swData.level2)}
              {renderSwTabPanel(swData.level3)}
            </Tabs>
          ) : (
            renderPanelContent(
              verticalGroupConfig[activeItem.index] ||
                (panels[activeItem.index] && panels[activeItem.index].groups)
            )
          )}
        </NavPanel>
      </NavPanelGroup>
    );
  };

  return (
    <div
      className={classNames("lg-side-nav-container")}
      onMouseLeave={handleContainerLeave}
      ref={containerRef}
    >
      <Nav title={title}>
        {items.map((item) => (
          <NavItem
            key={item.index}
            index={item.index}
            onMouseEnter={handleItemEnter}
            onMouseLeave={handleItemLeave}
            onKeyDown={handleKeyDown}
            onClick={() => onItemClick && onItemClick(item.index)}
            highlight={activeIndex === item.index}
            hasPanel={!!(
              verticalGroupConfig[item.index] ||
              (panels[item.index] && panels[item.index].groups) ||
              item.index === swIndustryIndex
            )}
          >
            {item.label}
          </NavItem>
        ))}
      </Nav>
      {renderActivePanel()}
    </div>
  );
};

SideNav.defaultProps = {
  items: [],
  panels: {},
  verticalGroupConfig: {},
  swData: null,
  hoverDelay: 200,
  defaultActiveIndex: -1,
  title: "全部分类",
  onItemHover: null,
  onItemClick: null,
  swIndustryIndex: 12,
};

export default SideNav;
