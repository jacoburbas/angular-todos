import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as TasksActions from './tasks.actions';
import { TaskService } from '../services/task.service';

@Injectable()
export class TasksEffects {
  getTaskList$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TasksActions.GET_TASK_LIST),
      switchMap(() => {
        this.appLoadingService.setState({
          show: true,
          initiator: TasksActions.GET_TASK_LIST,
        });
        return this.tasksService.getTasks();
      })
    )
  );

  constructor(private actions$: Actions, private tasksService: TaskService) {}
}
