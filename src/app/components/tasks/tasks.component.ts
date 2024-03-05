import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { Subscription, takeUntil } from 'rxjs';
import { TasksStoreService } from 'src/app/services/tasks-store.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TaskActionComponent } from '../task-action/task.action.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  subscription: Subscription;
  tasks: Task[] = [];

  constructor(
    private storeService: TasksStoreService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog(taskData: Task) {
    this.dialog.open(TaskActionComponent, {
      data: {
        type: 'edit task',
        id: taskData.id,
      },
    });
  }

  onDeleteTask(taskToDelete: Task): void {
    this.storeService.deleteTask(taskToDelete);
  }

  ngOnInit(): void {
    this.storeService
      .getTaskList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (tasks: Task[]) => {
          this.tasks = tasks;
        },
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
