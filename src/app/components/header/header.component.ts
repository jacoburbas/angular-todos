import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskActionComponent } from '../task-action/task.action.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(TaskActionComponent, {
      data: {
        type: 'add task',
      },
    });
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
