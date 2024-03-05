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
        return TasksActions.GetTaskListSuccess({ tasks });
      }),
      catchError((err) => {
        return of(TasksActions.GetTaskListFailure({ error: err.message }));
      })
    )
  );

  deleteTask$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TasksActions.DeleteTask),
      switchMap((action) => {
        return this.tasksService.deleteTask(action.taskToDelete).pipe(
          map(() => {
            return TasksActions.DeleteTaskSuccess({
              taskToDelete: action.taskToDelete,
            });
          }),
          catchError((err) => {
            return of(TasksActions.DeleteTaskFailure({ error: err.message }));
          })
        );
      })
    )
  );

  postTask$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TasksActions.POST_TASK),
      switchMap((action) => {
        return this.tasksService.postTask(action.taskToPost);
      }),
      map(() => {
        return TasksActions.PostTaskSuccess();
      }),
      catchError((err) => {
        return of(TasksActions.PostTaskFailure({ error: err.message }));
      })
    )
  );

  postTaskSucccess$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TasksActions.POST_TASK_SUCCESS),
      switchMap(() => {
        return of(TasksActions.GetTasks());
      })
    )
  );

  editTask$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TasksActions.EDIT_TASK),
      switchMap((action) => {
        return this.tasksService.editTask(action.taskToEdit).pipe(
          map(() => {
            return TasksActions.EditTaskSuccess({
              taskToEdit: action.taskToEdit,
            });
          }),
          catchError((err) => {
            return of(TasksActions.EditTaskFailure({ error: err.message }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions<TasksActions.TaskActions>,
    private tasksService: TaskService
  ) {}
}
