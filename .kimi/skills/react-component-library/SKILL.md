---
name: react-component-library
description: React component library development best practices. Use when building, refactoring, or reviewing React components in a shared UI library. Covers component patterns, CSS organization, bundle optimization, accessibility, and testing for library code (not application code). Adapted from popular GitHub agent skills.
source: https://github.com/sickn33/antigravity-awesome-skills (senior-frontend)
---

# React Component Library Development

Best practices for building reusable React components in a library context. This project uses React 16 + JavaScript (not TypeScript) + Vite.

## When to Use

- Building new components in the `side-nav/` directory
- Refactoring existing components for better reusability
- Reviewing component APIs and prop interfaces
- Optimizing bundle size for UMD output
- Ensuring accessibility in navigation components

## Component Patterns

### Functional Components with Default Props

```js
import React from "react";
import classNames from "classnames";
import "./my-component.css";

const MyComponent = props => {
  return (
    <div className={classNames("my-component", props.className)}>
      {props.children}
    </div>
  );
};

MyComponent.defaultProps = {
  className: "",
};

export default MyComponent;
```

### Prop Spread for HTML Attributes

Pass through unknown props to the underlying HTML element:

```js
const Link = props => {
  const { href, children, className, ...rest } = props;
  return (
    <a href={href} className={classNames("link", className)} {...rest}>
      {children}
    </a>
  );
};
```

### Conditional Classes with classnames

Always use the `classnames` package for conditional CSS classes:

```js
className={classNames(
  "base-class",
  {
    "modifier-active": props.active,
    "modifier-large": props.large,
  },
  props.className
)}
```

### Event Handler Patterns

```js
const NavItem = props => {
  const handleMouseEnter = e => {
    if (props.onMouseEnter) {
      props.onMouseEnter(e, props.index);
    }
  };

  return (
    <li onMouseEnter={handleMouseEnter}>
      {props.children}
    </li>
  );
};
```

## CSS Organization

- One `.css` file per component, co-located with the `.js` file
- Use BEM-like naming: `lg-side-nav`, `lg-side-nav-item`, `lg-side-nav-link`
- Avoid global styles; scope all styles to the component
- Use CSS variables for theming when possible

## Component API Design

- Accept `className` prop for external styling
- Accept `children` for composition
- Use explicit boolean props (`highlight`, `large`, `middle`) rather than enum strings when appropriate
- Document props with `defaultProps` or JSDoc comments

## Accessibility Checklist

1. **Semantic HTML**: Use `<nav>`, `<ul>`, `<li>`, `<a>` appropriately
2. **Keyboard Navigation**: All interactive elements must be focusable
3. **ARIA Labels**: Add `aria-label`, `aria-expanded`, `aria-current` for nav items
4. **Color Contrast**: Minimum 4.5:1 for text
5. **Focus Indicators**: Visible focus states for keyboard users

## Bundle Optimization

- Keep dependencies minimal (currently: react, react-dom, classnames, react-tabs)
- UMD build outputs to `build/lg-side-nav.js` and `build/lg-side-nav.css`
- Avoid importing large libraries into individual components
- Use `rollupOptions` in `vite.config.js` for fine-grained control

## Testing Strategy

- Test components in the `example/` page
- Verify both desktop and responsive behavior
- Test hover/click interactions
- Use Playwright for automated UI testing (see webapp-testing skill)

## Code Style

- Use arrow functions for components
- Destructure props at the top when there are many
- Keep components under 100 lines when possible
- Prefer functional components over class components
- Use template literals and modern ES6+ features
