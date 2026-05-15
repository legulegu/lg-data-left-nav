import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Nav from "../side-nav/Nav";
import NavItem from "../side-nav/NavItem";
import NavPanel from "../side-nav/NavPanel";
import NavPanelGroup from "../side-nav/NavPanelGroup";
import Link from "../side-nav/Link";
import LinkGroup from "../side-nav/LinkGroup";
import VerticalGroup from "../side-nav/VerticalGroup";
import LinkGroupVertical from "../side-nav/LinkGroupVertical";

import { navItems, panelConfigs, verticalGroupConfig } from "./navConfig";
import getUrl from "./url";
import "./lg-side-nav.css";

/* ============================================================
 * 辅助渲染函数
 * ============================================================ */

const renderLink = (link) => (
  <Link key={link.href || link.label} {...link}>
    {link.label}
  </Link>
);

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

const renderPanelContent = (config) => {
  if (!config) return null;
  return config.map((group, idx) => renderLinkGroup(group, idx));
};

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

/* ============================================================
 * App 组件（向后兼容）
 * ============================================================
 *
 * 这是原始的 App 实现，保留了与 legulegu.com 的兼容行为。
 * 如需更好的封装，建议使用新的 SideNav 组件。
 */

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [swData, setSwData] = useState({
    level1: [],
    level2: [],
    level3: [],
  });
  const timeoutRef = useRef(null);
  const isMounted = useRef(false);

  // 挂载标记，防止组件卸载后设置状态
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // 获取申万行业数据
  useEffect(() => {
    const source = window.axios.CancelToken.source();

    window.axios
      .get(getUrl(), { cancelToken: source.token })
      .then((response) => {
        if (
          isMounted.current &&
          response.data &&
          response.data.length > 0
        ) {
          setSwData({
            level1: response.data.filter((item) => item.level == 1),
            level2: response.data.filter((item) => item.level == 2),
            level3: response.data.filter((item) => item.level == 3),
          });
        }
      })
      .catch((err) => {
        if (!window.axios.isCancel(err)) {
          // eslint-disable-next-line no-console
          console.error("Failed to fetch SW industry data:", err);
        }
      });

    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    (_, index) => {
      clearTimer();
      timeoutRef.current = setTimeout(() => {
        setSelectedIndex(index);
      }, 200);
    },
    [clearTimer]
  );

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    setSelectedIndex(-1);
  }, [clearTimer]);

  const handleMouseLeaveItem = useCallback(() => {
    clearTimer();
  }, [clearTimer]);

  const renderActivePanel = () => {
    if (selectedIndex < 0) return null;

    const activeItem = navItems.find((item) => item.index === selectedIndex);
    if (!activeItem) return null;

    const hasContent =
      verticalGroupConfig[activeItem.index] ||
      (panelConfigs[activeItem.index] && panelConfigs[activeItem.index].groups);

    if (!hasContent && activeItem.index !== 12) return null;

    return (
      <NavPanelGroup show={true}>
        <NavPanel show={true}>
          {activeItem.index === 12 ? (
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
                (panelConfigs[activeItem.index] &&
                  panelConfigs[activeItem.index].groups)
            )
          )}
        </NavPanel>
      </NavPanelGroup>
    );
  };

  return (
    <div
      className={classNames("lg-side-nav-container")}
      onMouseLeave={handleMouseLeave}
    >
      <Nav title="全部分类">
        {navItems.map((item) => (
          <NavItem
            key={item.index}
            index={item.index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveItem}
            highlight={selectedIndex === item.index}
            hasPanel={!!(
              verticalGroupConfig[item.index] ||
              (panelConfigs[item.index] && panelConfigs[item.index].groups) ||
              item.index === 12
            )}
          >
            {item.label}
          </NavItem>
        ))}
      </Nav>
      {renderActivePanel()}
    </div>
  );
}

// 向后兼容：直接渲染到 #data-center
if (typeof document !== "undefined") {
  const container = document.querySelector("#data-center");
  if (container) {
    ReactDOM.render(<App />, container);
  }
}

export default App;
