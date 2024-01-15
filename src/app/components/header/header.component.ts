import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {}

  onAddTask(): void {
    this.uiService.toggleTaskAction({ id: -1, title: '', text: '', date: '' });
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
