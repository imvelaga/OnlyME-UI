import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
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
        userType: this.userType,
      });
      // Navigate to home page
      this.router.navigate(['/home']);
    } else {
      alert('Please fill in both email and password fields.');
    }
  }

  loginWithGoogle() {
    console.log('Google login attempted as:', this.userType);
    // Navigate to home page after Google login
    this.router.navigate(['/home']);
  }

  loginWithFacebook() {
    console.log('Facebook login attempted as:', this.userType);
    // Navigate to home page after Facebook login
    this.router.navigate(['/home']);
  }
}
