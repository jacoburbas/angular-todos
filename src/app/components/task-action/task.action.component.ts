import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Output() onSuccesfulSubmit = new EventEmitter();

  subscription: Subscription;
  taskToEdit: Task;
  title: string = '';
  text: string = '';
  date: string = '';

  titleError: boolean = false;
  textError: boolean = false;
  dateError: boolean = false;
  idError: boolean = false;

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

  onFormSubmit(e?: Event) {
    if (!this.title) {
      this.titleError = true;
      return;
    }
    if (!this.text) {
      this.textError = true;
      return;
    }
    if (!this.date) {
      this.dateError = true;
      return;
    }

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
  }

  onFormClose() {
    this.uiService.toggleTaskAction();
  }
  FormControl = new FormControl('');
}
