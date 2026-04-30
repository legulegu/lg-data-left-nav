import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Nav from "../side-nav/Nav";
import NavItem from "../side-nav/NavItem";
import NavPanelGroup from "../side-nav/NavPanelGroup";
import Link from "../side-nav/Link";
import NavPanel from "../side-nav/NavPanel";

import classNames from "classnames";

import "./lg-side-nav.css";
import LinkGroup from "../side-nav/LinkGroup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import getUrl from "./url";
import VerticalGroup from "../side-nav/VerticalGroup";
import LinkGroupVertical from "../side-nav/LinkGroupVertical";
import { navItems, panelConfigs, verticalGroupConfig } from "./navConfig";

function renderLink(link) {
  return (
    <Link key={link.href} {...link}>
      {link.label}
    </Link>
  );
}

function renderLinkGroup(group, idx) {
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
}

function renderPanelContent(config) {
  if (!config) return null;
  return config.map((group, idx) => renderLinkGroup(group, idx));
}

function renderSwTabPanel(data) {
  return (
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
}

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [swData, setSwData] = useState({
    level1: [],
    level2: [],
    level3: [],
  });
  const timeoutRef = useRef(null);

  useEffect(() => {
    window.axios.get(getUrl()).then((response) => {
      if (response.data && response.data.length > 0) {
        setSwData({
          level1: response.data.filter((item) => item.level == 1),
          level2: response.data.filter((item) => item.level == 2),
          level3: response.data.filter((item) => item.level == 3),
        });
      }
    });
  }, []);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = (e, index) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => {
      setSelectedIndex(index);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimer();
    setSelectedIndex(-1);
  };

  const handleMouseLeaveItem = () => {
    clearTimer();
  };

  const renderActivePanel = () => {
    if (selectedIndex <= 0) return null;

    const activeItem = navItems.find((item) => item.index === selectedIndex);
    if (!activeItem) return null;

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
                (panelConfigs[activeItem.index] && panelConfigs[activeItem.index].groups)
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
          >
            {item.label}
          </NavItem>
        ))}
      </Nav>
      {renderActivePanel()}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#data-center"));
