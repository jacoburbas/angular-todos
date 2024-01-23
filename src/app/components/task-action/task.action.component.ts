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
  task: Task = { title: '', text: '', date: '' };

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
        title: this.task.title,
        text: this.task.text,
        date: this.task.date,
      };

      this.taskService.updateTask(newTask).subscribe(() => {
        this.storeService.getTaskList();
        this.uiService.toggleTaskAction();
      });
    } else if (this.taskToEdit.id == -1) {
      const newTask: Task = this.task;

      this.taskService.postTask(newTask).subscribe(() => {
        this.storeService.getTaskList();
        this.uiService.toggleTaskAction();
      });
    }
    this.task.title = '';
    this.task.text = '';
    this.task.date = '';
  }

  onFormClose() {
    this.uiService.toggleTaskAction();
  }

  FormControl = new FormControl('');
}
