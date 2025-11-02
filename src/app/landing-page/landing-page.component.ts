import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;
  userType: 'creator' | 'fan' = 'creator';

  setUserType(type: 'creator' | 'fan') {
    this.userType = type;
  }

  onLogin() {
    if (this.email && this.password) {
      console.log('Login attempted with:', { 
        email: this.email, 
        password: '***', 
        userType: this.userType 
      });
      // Add your login logic here
      alert(`Login as ${this.userType} functionality will be implemented here!`);
    } else {
      alert('Please fill in both email and password fields.');
    }
  }

  loginWithGoogle() {
    console.log('Google login attempted as:', this.userType);
    alert(`Google login as ${this.userType} will be implemented here!`);
  }

  loginWithApple() {
    console.log('Apple login attempted as:', this.userType);
    alert(`Apple login as ${this.userType} will be implemented here!`);
  }
}
