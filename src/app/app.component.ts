import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showTaskAction: Boolean;
  subscription: Subscription;
  userAccType: String;

  constructor(private loginservice: LoginService) {}

  ngOnInit(): void {
    this.loginservice.setUserAccType(sessionStorage.getItem('userAccType'));
  }
}
