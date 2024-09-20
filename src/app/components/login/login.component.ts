import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPass: boolean = false;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('this.authService.login(this.username, this.password', this.authService.login(this.username, this.password));
    if (this.authService.login(this.username, this.password)) {

      this.router.navigate(['users']); // Navigate to the user list or a default route
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
  togglePassword() {
    this.showPass = !this.showPass;
    const passwordInput: any = document.getElementById('passwordInput');
    const icon: any = document.querySelector('#togglePassword i');

    if (this.showPass) {
      passwordInput.type = 'text';
      icon.classList.remove('bi-eye-fill');
      icon.classList.add('bi-eye-slash');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye-fill');
    }

  }
}