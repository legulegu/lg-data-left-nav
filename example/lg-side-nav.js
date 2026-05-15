/**
 * lg-side-nav - React 侧边导航组件库
 *
 * 为 legulegu.com 定制的侧边导航组件库。
 * 支持低阶组件组合和高级封装两种使用方式。
 *
 * 使用方式 1: 高级封装（推荐）
 *   import { SideNav } from 'lg-side-nav';
 *   <SideNav items={...} panels={...} />
 *
 * 使用方式 2: 低阶组件组合
 *   import { Nav, NavItem, NavPanel, Link } from 'lg-side-nav';
 *   <Nav title="分类">
 *     <NavItem>Item 1</NavItem>
 *   </Nav>
 *
 * 向后兼容: 全局变量 LgSideNav.App 仍然可用
 */

// ===== 低阶组件 =====
export { default as Nav } from "../side-nav/Nav";
export { default as NavItem } from "../side-nav/NavItem";
export { default as NavPanel } from "../side-nav/NavPanel";
export { default as NavPanelGroup } from "../side-nav/NavPanelGroup";
export { default as Link } from "../side-nav/Link";
export { default as LinkGroup } from "../side-nav/LinkGroup";
export { default as LinkGroupVertical } from "../side-nav/LinkGroupVertical";
export { default as VerticalGroup } from "../side-nav/VerticalGroup";

// ===== 高级封装组件 =====
export { default as SideNav } from "../side-nav/SideNav";

// ===== 向后兼容: 保留旧的 App 组件 =====
export { default as App } from "./app";
