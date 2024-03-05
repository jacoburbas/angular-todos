import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTasks } from '../store/tasks.selectors';
import { Task, newTask } from 'src/app/Task';

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

  public deleteTask(taskToDelete: Task) {
    this.store.dispatch({
      type: TasksActions.DELETE_TASK,
      taskToDelete,
    });
    return this.store.select(getTasks);
  }

  public postTask(taskToPost: newTask) {
    this.store.dispatch({
      type: TasksActions.POST_TASK,
      taskToPost,
    });
    return this.store.select(getTasks);
  }

  public editTask(taskToEdit: Task) {
    this.store.dispatch({
      type: TasksActions.EDIT_TASK,
      taskToEdit,
    });
    return this.store.select(getTasks);
  }
}
