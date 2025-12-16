import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'glass' | 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'orange' | 'red' | 'white';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'glass';
  @Input() size: ButtonSize = 'md';
  @Input() color: ButtonColor = 'orange';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  getButtonClasses(): string {
    const classes = ['theme-btn'];

    // Variant classes
    classes.push(`btn-${this.variant}`);

    // Size classes
    classes.push(`btn-${this.size}`);

    // Color classes
    classes.push(`btn-${this.color}`);

    // Full width
    if (this.fullWidth) {
      classes.push('btn-full-width');
    }

    // Disabled
    if (this.disabled) {
      classes.push('btn-disabled');
    }

    return classes.join(' ');
  }
}
