# Reusable Button Component - Quick Reference

## Installation

The button component is located at: `src/app/shared/button/button.component.ts`

## Import

```typescript
import { ButtonComponent } from './shared/button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  // ...
})
```

## Basic Usage

```html
<app-button (clicked)="handleClick($event)"> Click Me </app-button>
```

## Props/Inputs

| Property       | Type                                         | Default    | Description                                |
| -------------- | -------------------------------------------- | ---------- | ------------------------------------------ |
| `variant`      | `'glass' \| 'solid' \| 'outline' \| 'ghost'` | `'glass'`  | Button style variant                       |
| `size`         | `'sm' \| 'md' \| 'lg'`                       | `'md'`     | Button size                                |
| `color`        | `'orange' \| 'red' \| 'white'`               | `'orange'` | Button color theme                         |
| `disabled`     | `boolean`                                    | `false`    | Disabled state                             |
| `fullWidth`    | `boolean`                                    | `false`    | Makes button full width                    |
| `icon`         | `string`                                     | `''`       | Bootstrap icon name (without 'bi-' prefix) |
| `iconPosition` | `'left' \| 'right'`                          | `'left'`   | Icon position                              |
| `type`         | `'button' \| 'submit' \| 'reset'`            | `'button'` | HTML button type                           |

## Events

| Event     | Type                  | Description                    |
| --------- | --------------------- | ------------------------------ |
| `clicked` | `EventEmitter<Event>` | Emitted when button is clicked |

## Examples

### Glass Buttons (Default)

```html
<!-- Glass Orange (Default) -->
<app-button>Default Button</app-button>

<!-- Glass Red -->
<app-button variant="glass" color="red">Delete</app-button>

<!-- Glass White -->
<app-button variant="glass" color="white">Cancel</app-button>
```

### Solid Buttons

```html
<!-- Solid Orange -->
<app-button variant="solid">Primary Action</app-button>

<!-- Solid Red -->
<app-button variant="solid" color="red">Danger</app-button>

<!-- Solid White -->
<app-button variant="solid" color="white">Light</app-button>
```

### Outline Buttons

```html
<!-- Outline Orange -->
<app-button variant="outline">Secondary</app-button>

<!-- Outline Red -->
<app-button variant="outline" color="red">Delete</app-button>
```

### Ghost Buttons

```html
<!-- Ghost Orange -->
<app-button variant="ghost">Link Style</app-button>

<!-- Ghost Red -->
<app-button variant="ghost" color="red">Remove</app-button>
```

### Size Variants

```html
<!-- Small -->
<app-button size="sm">Small</app-button>

<!-- Medium (Default) -->
<app-button size="md">Medium</app-button>

<!-- Large -->
<app-button size="lg">Large</app-button>
```

### With Icons

```html
<!-- Icon Left (Default) -->
<app-button icon="house">Home</app-button>

<!-- Icon Right -->
<app-button icon="arrow-right" iconPosition="right">Next</app-button>

<!-- Only Icon (use empty content) -->
<app-button icon="search"></app-button>

<!-- Common Icons -->
<app-button icon="box-arrow-right" color="red">Logout</app-button>
<app-button icon="download" variant="outline">Download</app-button>
<app-button icon="plus" variant="solid">Add New</app-button>
<app-button icon="trash" variant="ghost" color="red">Delete</app-button>
```

### With Event Handling

```html
<app-button variant="solid" icon="save" (clicked)="saveData()"> Save Changes </app-button>
```

```typescript
saveData() {
  console.log('Saving data...');
  // Your save logic here
}
```

### Disabled State

```html
<app-button [disabled]="isLoading">Submit</app-button>

<app-button [disabled]="!isFormValid" variant="solid"> Save </app-button>
```

### Full Width

```html
<app-button [fullWidth]="true" variant="solid"> Full Width Button </app-button>
```

### Form Submit Button

```html
<form (ngSubmit)="onSubmit()">
  <!-- form fields -->

  <app-button type="submit" variant="solid" [fullWidth]="true" [disabled]="!form.valid">
    Submit Form
  </app-button>
</form>
```

## Common Use Cases

### Login/Signup

```html
<app-button variant="solid" size="lg" [fullWidth]="true" type="submit"> Sign In </app-button>
```

### Call to Action

```html
<app-button variant="solid" size="lg" icon="arrow-right" iconPosition="right">
  Get Started
</app-button>
```

### Navigation

```html
<app-button variant="ghost" icon="house" (clicked)="navigateHome()"> Home </app-button>
```

### Danger Actions

```html
<app-button variant="outline" color="red" icon="trash" (clicked)="deleteItem()">
  Delete Item
</app-button>
```

### Download

```html
<app-button variant="glass" icon="download" (clicked)="downloadFile()"> Download PDF </app-button>
```

### Modal Actions

```html
<!-- Modal Footer -->
<div class="modal-footer">
  <app-button variant="ghost" (clicked)="closeModal()"> Cancel </app-button>

  <app-button variant="solid" (clicked)="confirmAction()"> Confirm </app-button>
</div>
```

## Styling with Theme Variables

All buttons automatically use theme colors from `src/styles/theme.css`. The colors are:

- **Orange**: Primary brand color (`--primary-orange`)
- **Red**: Danger/delete actions (`--accent-red`)
- **White**: Alternative light option

## View Live Examples

Navigate to `/buttons` route to see all button variants in action:

```
http://localhost:4200/buttons
```

## Tips

1. **Use `variant="solid"` for primary actions** - Most important actions should use solid buttons
2. **Use `variant="glass"` for secondary actions** - Glass effect matches the app theme
3. **Use `variant="outline"` for tertiary actions** - Outline for less emphasis
4. **Use `variant="ghost"` for links or subtle actions** - Minimal style for navigation
5. **Use `color="red"` for destructive actions** - Delete, remove, logout, etc.
6. **Always add meaningful icons** - Icons improve UX and make buttons more recognizable
7. **Use `[disabled]` with form validation** - Prevent submission when form is invalid

## Browser Compatibility

The button component uses modern CSS features:

- CSS Custom Properties (CSS Variables)
- Backdrop Filter (for glass effect)
- Flexbox
- CSS Transitions

All features are supported in modern browsers.
