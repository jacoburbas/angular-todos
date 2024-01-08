import { Task } from '../Task';
import { createAction, props } from '@ngrx/store';

export const GET_TASK_LIST = '[Tasks] get data';
const GET_TASK_LIST_SUCCESS = '[Tasks] get task list success',
  GET_TASK_LIST_FAILURE = '[Tasks] get task list failure';

export const GetTaskListSuccess = createAction(
  GET_TASK_LIST_SUCCESS,
  props<{ campaigns: Task[] }>()
);
export const GetTaskListFailure = createAction(
  GET_TASK_LIST_FAILURE,
  props<{ error: string }>()
);
