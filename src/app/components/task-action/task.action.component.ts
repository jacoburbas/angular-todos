import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-action',
  templateUrl: './task.action.component.html',
  styleUrls: ['./task.action.component.scss'],
})
export class TaskActionComponent implements OnInit {
  subscription: Subscription;
  taskId: string;

  @Output() onSuccesfulSubmit = new EventEmitter();

  title: string = '';
  text: string = '';
  date: string = '';

  titleError: boolean = false;
  textError: boolean = false;
  dateError: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => ((this.taskId = value), console.log(this.taskId)));
  }

  ngOnInit(): void {}

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

    const newTask: Task = {
      title: this.title,
      text: this.text,
      date: this.date,
    };

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then(() => {
        this.title = '';
        this.text = '';
        this.date = '';
        this.onSuccesfulSubmit.emit();
      });
  }

  FormControl = new FormControl('');
}
