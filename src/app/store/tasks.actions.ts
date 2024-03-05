import { Task, newTask } from '../Task';
import { createAction, props } from '@ngrx/store';

export const GET_TASK_LIST = '[Tasks] get task list',
  GET_TASK_LIST_SUCCESS = '[Tasks] get task list success',
  GET_TASK_LIST_FAILURE = '[Tasks] get task list failure',
  POST_TASK = '[Tasks] post task',
  POST_TASK_SUCCESS = '[Tasks] post task success',
  POST_TASK_FAILURE = '[Tasks] post task failure',
  DELETE_TASK = '[Tasks] delete task',
  DELETE_TASK_SUCCESS = '[Tasks] delete task success',
  DELETE_TASK_FAILURE = '[Tasks] delete task failure',
  EDIT_TASK = '[Tasks] edit task',
  EDIT_TASK_SUCCESS = '[Tasks] edit task success',
  EDIT_TASK_FAILIRE = '[Tasks] edit task failure';

export const GetTaskListSuccess = createAction(
  GET_TASK_LIST_SUCCESS,
  props<{ tasks: Task[] }>()
);
export const GetTaskListFailure = createAction(
  GET_TASK_LIST_FAILURE,
  props<{ error: string }>()
);
export const PostTaskSuccess = createAction(POST_TASK_SUCCESS);
export const PostTaskFailure = createAction(
  POST_TASK_FAILURE,
  props<{ error: string }>()
);
export const DeleteTaskSuccess = createAction(
  DELETE_TASK_SUCCESS,
  props<{ taskToDelete: Task }>()
);
export const DeleteTaskFailure = createAction(
  DELETE_TASK_FAILURE,
  props<{ error: string }>()
);
export const EditTaskSuccess = createAction(
  EDIT_TASK_SUCCESS,
  props<{ taskToEdit: Task }>()
);
export const EditTaskFailure = createAction(
  EDIT_TASK_FAILIRE,
  props<{ error: string }>()
);

export const GetTasks = createAction(GET_TASK_LIST);
export const PostTask = createAction(POST_TASK, props<{ taskToPost: Task }>());
export const DeleteTask = createAction(
  DELETE_TASK,
  props<{ taskToDelete: Task }>()
);
export const EditTask = createAction(EDIT_TASK, props<{ taskToEdit: Task }>());

export type TaskActions =
  | ReturnType<typeof GetTasks>
  | ReturnType<typeof PostTask>
  | ReturnType<typeof DeleteTask>
  | ReturnType<typeof DeleteTaskSuccess>
  | ReturnType<typeof EditTaskSuccess>
  | ReturnType<typeof EditTask>;
