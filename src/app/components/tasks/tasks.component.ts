import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription, takeUntil } from 'rxjs';
import { TasksStoreService } from 'src/app/services/tasks-store.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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
    private taskService: TaskService,
    private storeService: TasksStoreService,
    private uiService: UiService,
    private router: Router
  ) {}

  onEditTask(taskToEdit?: Task): void {
    this.uiService.toggleTaskAction(taskToEdit);
  }

  onDeleteTask(taskToDelete: Task): void {
    this.taskService
      .deleteTask(taskToDelete)
      .subscribe(() => this.storeService.getTaskList());
  }

  ngOnInit(): void {
    this.storeService
      .getTaskList()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (tasks: Task[]) => {
          this.tasks = tasks;
          console.log('component: ', tasks);
        },
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
