import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { TasksStoreService } from 'src/app/services/tasks-store.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  showTaskAction: boolean;
  taskToEdit: number;
  subscription: Subscription;
  tasks: Task[] = [];

  constructor(
    private TaskService: TaskService,
    private tasksStoreService: TasksStoreService,
    private uiService: UiService
  ) {
    this.subscription = this.TaskService.getTasks().subscribe(
      (tasks) => (this.tasks = tasks)
    );
  }

  getTaskList() {
    this.tasksStoreService
      .getTaskList()
      .subscribe({ next: (tasks: Task[]) => (this.tasks = tasks) });
  }

  toggleTaskAction(taskId?: number): void {
    if (taskId) this.uiService.toggleTaskAction(taskId);
    else this.uiService.toggleTaskAction();
  }

  ngOnInit(): void {
    this.getTaskList();
  }
}
