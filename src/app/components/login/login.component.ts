import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  showCredentialsError: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onLoginSubmit() {
    if (
      this.loginService.submitLogin(this.login, this.password) ===
      'admin logged'
    ) {
      this.router.navigate(['/admin']);
    } else if (
      this.loginService.submitLogin(this.login, this.password) === 'user logged'
    ) {
      this.router.navigate(['/dashboard']);
    } else this.showCredentialsError = true;
  }

  FormControl = new FormControl('');
}
