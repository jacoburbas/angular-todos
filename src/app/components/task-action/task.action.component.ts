import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import { TasksStoreService } from 'src/app/services/tasks-store.service';
@Component({
  selector: 'app-task-action',
  templateUrl: './task.action.component.html',
  styleUrls: ['./task.action.component.scss'],
})
export class TaskActionComponent implements OnInit {
  subscription: Subscription;
  taskToEdit: Task;
  title: string = '';
  text: string = '';
  date: string = '';

  constructor(
    private uiService: UiService,
    private taskService: TaskService,
    private storeService: TasksStoreService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.taskToEdit = value));
  }

  ngOnInit(): void {
    this.taskToEdit = this.uiService.getTaskToEdit();
  }

  onFormSubmit() {
    if (this.taskToEdit.id != -1) {
      const newTask: Task = {
        id: this.taskToEdit.id,
        title: this.title,
        text: this.text,
        date: this.date,
      };

      this.taskService
        .updateTask(newTask)
        .subscribe(() => this.storeService.getTaskList());
      console.log('PUT');
    } else if (this.taskToEdit.id == -1) {
      const newTask: Task = {
        title: this.title,
        text: this.text,
        date: this.date,
      };

      this.taskService
        .postTask(newTask)
        .subscribe(() => this.storeService.getTaskList());
      console.log('POST');
    }
    this.title = '';
    this.text = '';
    this.date = '';
    this.uiService.toggleTaskAction();
  }

  onFormClose() {
    this.uiService.toggleTaskAction();
  }
  FormControl = new FormControl('');
}
