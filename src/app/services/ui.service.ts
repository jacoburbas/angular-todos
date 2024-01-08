import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showTaskAction: boolean = false;
  private taskId: number = -1;
  private subject = new Subject<any>();

  constructor() {}

  toggleTaskAction(taskToEdit?: number): void {
    this.showTaskAction = !this.showTaskAction;
    taskToEdit ? (this.taskId = taskToEdit) : '';
    this.subject.next(this.showTaskAction); // switching this up makes one thing work and the other to break
    this.subject.next(this.taskId);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
