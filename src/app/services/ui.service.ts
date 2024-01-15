import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../Task';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showTaskAction: boolean = false;
  private taskToEdit: Task = {
    id: -1,
    title: '',
    text: '',
    date: '',
  };
  private subject = new Subject<any>();

  constructor() {}

  toggleTaskAction(taskToEdit?: Task): void {
    taskToEdit ? (this.taskToEdit = taskToEdit) : '';
    this.showTaskAction = !this.showTaskAction;
    this.subject.next(this.showTaskAction);
  }

  getTaskToEdit() {
    console.log(this.taskToEdit);
    return this.taskToEdit;
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
