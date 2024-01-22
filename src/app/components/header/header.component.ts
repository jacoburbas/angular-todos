import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  userAccType: String = 'user';
  constructor(
    private uiService: UiService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.userAccType = this.loginService.getUserAccType();
    console.log(this.userAccType);
  }

  onAddTask(): void {
    this.uiService.toggleTaskAction({ id: -1, title: '', text: '', date: '' });
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
