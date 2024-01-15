import { Task } from '../Task';
import { createAction, props } from '@ngrx/store';

export const GET_TASK_LIST = '[Tasks] get task list',
  GET_TASK_LIST_SUCCESS = '[Tasks] get task list success',
  GET_TASK_LIST_FAILURE = '[Tasks] get task list failure',
  POST_TASK = '[Tasks] post task',
  POST_TASK_SUCCESS = '[Tasks] post task success',
  POST_TASK_FAILURE = '[Tasks] post task failure',
  DELETE_TASK = '[Tasks] delete task',
  DELETE_TASK_SUCCESS = '[Tasks] delete task success',
  DELETE_TASK_FAILURE = '[Tasks] delete task failure';

export const GetTaskListSuccess = createAction(
  GET_TASK_LIST_SUCCESS,
  props<{ tasks: Task[] }>()
);
export const GetTaskListFailure = createAction(
  GET_TASK_LIST_FAILURE,
  props<{ error: string }>()
);

//do I need those vv ?
export const PostTaskSuccess = createAction(
  POST_TASK_SUCCESS,
  props<{ tasks: Task[] }>()
);
export const PostTaskFailure = createAction(
  POST_TASK_FAILURE,
  props<{ error: string }>()
);
export const DeleteTaskSuccess = createAction(
  DELETE_TASK_SUCCESS,
  props<{ tasks: Task[] }>()
);
export const DeleteTaskFailure = createAction(
  DELETE_TASK_FAILURE,
  props<{ error: string }>()
);
export const GetTasks = createAction(GET_TASK_LIST);

//do I need those vv ?
export const PostTask = createAction(POST_TASK);
export const DeleteTask = createAction(DELETE_TASK);
