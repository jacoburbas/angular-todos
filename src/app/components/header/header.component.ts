import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  toggleTaskAction(): void {
    this.uiService.toggleTaskAction();
  }
}
