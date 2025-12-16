# OnlyME UI Theme - Usage Guide

## Overview

This theme file contains all color variables and utility classes that exactly match the home screen's color palette and styling.

## Color Palette

### Primary Colors

- `--primary-orange: #ff8c00` - Main brand color
- `--primary-orange-light: #ffa500` - Lighter variant
- `--primary-orange-dark: #ff6b00` - Darker variant
- `--primary-orange-hover: #ff7700` - Hover state

### Background Colors

- `--bg-black: #000000` - Pure black
- `--bg-dark-primary: #0a0a0a` - Very dark background
- `--bg-dark-secondary: #1a1a1a` - Secondary dark background
- `--bg-dark-tertiary: #0d1117` - Tertiary dark background

### Text Colors

- `--text-white: #ffffff` - Pure white
- `--text-white-90: rgba(255, 255, 255, 0.9)` - 90% opacity white
- `--text-white-85: rgba(255, 255, 255, 0.85)` - 85% opacity white

## Using CSS Variables

### In CSS Files

```css
.my-component {
  background: var(--bg-secondary-alpha-40);
  color: var(--primary-orange);
  border: 1px solid var(--orange-alpha-30);
  backdrop-filter: var(--glass-blur-heavy);
}
```

### In HTML with Style Binding

```html
<div [style.background]="'var(--bg-secondary-alpha-40)'">Content</div>
```

## Utility Classes

### Glass Morphism Effects

#### Background Glass

```html
<!-- Light glass effect -->
<div class="bg-glass-dark">Content</div>

<!-- Heavy glass effect -->
<div class="bg-glass-darker">Content</div>
```

#### Pre-built Containers

```html
<!-- Standard glass container (like container-header) -->
<div class="container-glass">
  <div style="position: relative; z-index: 1;">Your Content</div>
</div>

<!-- Hero glass container -->
<div class="hero-glass">
  <div style="position: relative; z-index: 1;">Your Content</div>
</div>
```

### Borders

```html
<!-- Standard orange border -->
<div class="border-orange">Content</div>

<!-- Brighter orange border -->
<div class="border-orange-bright">Content</div>
```

### Text Colors

```html
<!-- Primary orange text -->
<h1 class="text-orange">Title</h1>

<!-- Light orange text -->
<p class="text-orange-light">Description</p>

<!-- Glowing orange text (like hero titles) -->
<h1 class="text-glow-orange">Hero Title</h1>

<!-- Light glowing text -->
<p class="text-glow-light">Subtitle</p>
```

### Hover Effects

```html
<!-- Orange hover effect -->
<button class="hover-orange">Hover Me</button>

<!-- Red hover effect (for logout/delete actions) -->
<button class="hover-red">Delete</button>
```

### Buttons

```html
<!-- Glass orange button -->
<button class="btn-glass-orange">Click Me</button>

<!-- Solid orange button -->
<button class="btn-glass-solid">Primary Action</button>
```

### Shadows

```html
<!-- Small glass shadow -->
<div class="shadow-glass-sm">Content</div>

<!-- Large glass shadow -->
<div class="shadow-glass-lg">Content</div>
```

### Gradients

```html
<!-- Radial gradient overlay -->
<div class="gradient-orange-radial">Content</div>

<!-- Linear gradient overlay -->
<div class="gradient-orange-linear">Content</div>

<!-- Orange overlay gradient -->
<div class="gradient-orange-overlay">Content</div>

<!-- Dark overlay gradient -->
<div class="gradient-dark-overlay">Content</div>
```

### Transitions

```html
<!-- Normal transition (0.3s) -->
<div class="transition-all">Content</div>

<!-- Fast transition (0.2s) -->
<div class="transition-fast">Content</div>

<!-- Slow transition (0.5s) -->
<div class="transition-slow">Content</div>
```

## Common Patterns

### Glass Container with Orange Glow

```html
<div class="container-glass">
  <div style="position: relative; z-index: 1;">
    <h2 class="text-glow-orange">Welcome</h2>
    <p class="text-orange-light">Description text</p>
  </div>
</div>
```

### Hero Section

```html
<div class="hero-glass">
  <div style="position: relative; z-index: 1; text-align: center;">
    <h1 class="text-glow-orange" style="font-size: var(--font-5xl);">Main Title</h1>
    <p class="text-glow-light" style="font-size: var(--font-xl);">Subtitle text</p>
    <button class="btn-glass-solid">Get Started</button>
  </div>
</div>
```

### Card with Hover Effect

```html
<div
  class="container-glass hover-orange transition-all"
  style="padding: var(--spacing-lg); cursor: pointer;"
>
  <h3 class="text-orange">Card Title</h3>
  <p class="text-white-80">Card description</p>
</div>
```

### Custom Styling Examples

#### Using Variables in Component CSS

```css
/* In your component.css file */
.my-custom-section {
  background: var(--bg-secondary-alpha-40);
  backdrop-filter: var(--glass-blur-heavy);
  border: 1px solid var(--orange-alpha-30);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-glass-sm);
}

.my-custom-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-orange-overlay);
  pointer-events: none;
  border-radius: inherit;
}

.my-title {
  color: var(--primary-orange);
  text-shadow: var(--text-shadow-lg);
  font-size: var(--font-3xl);
}

.my-button {
  background: var(--orange-alpha-10);
  border: 1px solid var(--orange-alpha-30);
  color: var(--primary-orange-light);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

.my-button:hover {
  background: var(--dark-orange-alpha-15);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

## Glassmorphism Values

### Blur Levels

- `var(--glass-blur-light)` - blur(10px) - Light blur
- `var(--glass-blur-medium)` - blur(20px) - Medium blur
- `var(--glass-blur-heavy)` - blur(25px) - Heavy blur
- `var(--glass-blur-ultra)` - blur(30px) - Ultra blur

### Border Radius

- `var(--radius-sm)` - 8px
- `var(--radius-md)` - 12px
- `var(--radius-lg)` - 20px
- `var(--radius-xl)` - 24px
- `var(--radius-full)` - 50% (for circles)

### Spacing

- `var(--spacing-xs)` - 0.25rem
- `var(--spacing-sm)` - 0.5rem
- `var(--spacing-md)` - 1rem
- `var(--spacing-lg)` - 1.5rem
- `var(--spacing-xl)` - 2rem
- `var(--spacing-2xl)` - 3rem

### Font Sizes

- `var(--font-xs)` - 0.75rem
- `var(--font-sm)` - 0.875rem
- `var(--font-base)` - 1rem
- `var(--font-lg)` - 1.125rem
- `var(--font-xl)` - 1.25rem
- `var(--font-2xl)` - 1.5rem
- `var(--font-3xl)` - 1.875rem
- `var(--font-4xl)` - 2.25rem
- `var(--font-5xl)` - 3rem

## Z-Index Layers

- `var(--z-base)` - 1 - Base content
- `var(--z-dropdown)` - 10 - Dropdowns
- `var(--z-sticky)` - 100 - Sticky elements
- `var(--z-fixed)` - 1000 - Fixed elements
- `var(--z-modal)` - 1050 - Modals

## Tips

1. **Always use relative positioning with z-index for content inside glass containers** to ensure content appears above the ::before pseudo-elements.

2. **Combine utility classes** for more complex effects:

   ```html
   <div class="container-glass hover-orange transition-all">Content</div>
   ```

3. **Use CSS variables for consistency** across your components instead of hardcoding colors.

4. **Match the home screen exactly** by using the same variable combinations used there:

   - Container-header: `--bg-secondary-alpha-40` + `--glass-blur-heavy`
   - Hero section: `--bg-secondary-alpha-30` + `--glass-blur-ultra`

5. **Create custom combinations** as needed while maintaining the color palette.
