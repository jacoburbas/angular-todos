import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
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
    private loginservice: LoginService,
    private router: Router
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showTaskAction = value));
  }

  ngOnInit(): void {
    // if (!sessionStorage.getItem('userAccType')) {
    //   this.router.navigate(['/login']);
    // }
    this.loginservice.setUserAccType(sessionStorage.getItem('userAccType'));
  }
}
