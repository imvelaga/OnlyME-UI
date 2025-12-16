import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-button-examples',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.css'],
})
export class ButtonExamplesComponent {
  onButtonClick(buttonName: string) {
    console.log(`${buttonName} button clicked!`);
  }
}
