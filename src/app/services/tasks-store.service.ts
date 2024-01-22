import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTasks } from '../store/tasks.selectors';
import * as TasksActions from '../store/tasks.actions';

@Injectable({
  providedIn: 'root',
})
export class TasksStoreService {
  constructor(private store: Store<any>) {}

  public getTaskList() {
    this.store.dispatch({
      type: TasksActions.GET_TASK_LIST,
    });
    return this.store.select(getTasks);
  }
}
