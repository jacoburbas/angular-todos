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

  constructor(
    private uiService: UiService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onAddTask(): void {
    this.uiService.toggleTaskAction({ id: -1, title: '', text: '', date: '' });
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
