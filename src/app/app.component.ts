import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
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

  constructor(
    private uiService: UiService,
    private loginservice: LoginService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showTaskAction = value));
  }

  ngOnInit(): void {
    this.loginservice.setUserAccType(sessionStorage.getItem('userAccType'));
  }
}
