import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TasksActions from './tasks.actions';
import { TaskService } from '../services/task.service';

@Injectable()
export class TasksEffects {
  getTaskList$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TasksActions.GET_TASK_LIST),
      switchMap(() => {
        return this.tasksService.getTasks();
      }),
      map((tasks: any) => {
        console.log(tasks);
        return TasksActions.GetTaskListSuccess({ tasks });
      }),
      catchError((err) => {
        return of(TasksActions.GetTaskListFailure({ error: err.message }));
      })
    )
  );

  constructor(private actions$: Actions, private tasksService: TaskService) {}
}
