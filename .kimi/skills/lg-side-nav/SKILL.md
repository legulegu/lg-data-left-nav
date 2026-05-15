---
name: lg-side-nav
description: Project-specific guidance for the lg-side-nav React component library. Use when working on this codebase to understand project structure, build process, component architecture, and coding conventions. This skill ensures consistent development practices for the legulegu.com side navigation component.
---

# lg-side-nav Project Guide

This is a React 16 side navigation component library for legulegu.com, built with Vite.

## Project Structure

```
side-nav/
├── Link/              # Link component with size variants (middle, large, max, highlight)
├── LinkGroup/         # Horizontal group of links with title
├── LinkGroupVertical/ # Vertical group of links with title
├── Nav/               # Root nav container (<ul>)
├── NavItem/           # Individual nav item with hover events
├── NavPanel/          # Dropdown panel for nav items
├── NavPanelGroup/     # Group within a panel
└── VerticalGroup/     # Vertical layout group

example/
├── index.html         # Demo page
├── lg-side-nav.js     # Component exports
├── navConfig.js       # Navigation data configuration
├── token.js           # API token
└── url.js             # URL helpers
```

## Technology Stack

- **React**: 16.14.0 (functional components, classic JSX runtime)
- **Build Tool**: Vite 6 with custom `jsAsJsx` plugin
- **Styling**: Plain CSS files (one per component)
- **Class Utilities**: classnames 2.2.5
- **Tabs**: react-tabs 3.2.2
- **Output**: UMD bundle (`build/lg-side-nav.js` + `build/lg-side-nav.css`)

## Build Commands

```bash
npm run start    # Start Vite dev server (root: example/)
npm run build    # Build UMD bundle to build/
```

The build also copies outputs to the legulegu.com webapp directory:
- `build/lg-side-nav.js` → `../legulegu.com/src/main/webapp/static/js/lg-side-nav.js`
- `build/lg-side-nav.css` → `../legulegu.com/src/main/webapp/static/css/lg-side-nav.css`

## Vite Configuration Notes

- `root: "example"` — dev server serves from example/
- Custom plugin transforms `.js` files with JSX using `React.createElement`
- `jsxRuntime: "classic"` — uses classic React JSX transform
- Library mode outputs UMD format with name `LgSideNav`

## Component Conventions

### File Structure
Each component lives in its own directory:
```
ComponentName/
├── index.js          # Component implementation
└── component-name.css # Component styles
```

### Naming
- Component directories: PascalCase (`NavPanel`, `LinkGroup`)
- CSS classes: kebab-case with `lg-side-nav` prefix (`lg-side-nav-link`, `lg-side-nav-item`)
- CSS files: kebab-case matching class prefix (`nav-panel.css`, `link-group.css`)

### Props Pattern
- Accept `className` for external styling override
- Use `classNames` for conditional classes
- Spread remaining props to underlying HTML element when appropriate
- Event handlers receive `(event, index)` when index is relevant

### Example Component Template
```js
import React from "react";
import classNames from "classnames";
import "./my-component.css";

const MyComponent = props => {
  return (
    <div className={classNames("lg-side-nav-my-component", props.className)}>
      {props.children}
    </div>
  );
};

export default MyComponent;
```

## Styling Guidelines

- All CSS classes must use the `lg-side-nav-` prefix
- Use CSS custom properties (variables) for colors that may need theming
- Support modifiers: `-light`, `-middle`, `-large`, `-max`, `-hight-light`
- Keep selectors flat; avoid deep nesting

## Data Configuration

Navigation data is defined in `example/navConfig.js`:
- `navItems`: Array of top-level nav items with `index` and `label`
- `panelConfigs`: Object mapping index → panel groups and links
- `verticalGroupConfig`: Object mapping index → vertical group layout

Link objects support:
- `href`: URL
- `label`: Display text
- `highlight`: Visual emphasis
- `large` / `middle` / `max`: Size variant
- `style`: Inline styles object

## Browser Support

- "> 1%"
- "last 2 versions"
- "not ie <= 8"

## Important Notes

- Do NOT introduce TypeScript — this is a plain JavaScript project
- Do NOT introduce new build tools — Vite is the standard
- Do NOT change the UMD output format — it must remain compatible with legulegu.com
- When modifying components, always update the corresponding `.css` file
- Test changes using `npm run start` and open the example page
- The build copies files to a sibling directory; ensure paths remain correct
