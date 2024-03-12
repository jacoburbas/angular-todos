import * as TasksActions from './tasks.actions';
import { createReducer, on } from '@ngrx/store';

import { Task } from '../Task';

export interface State {
  taskList: Task[];
}

export const initialState: State = {
  taskList: [],
};

export interface Action {
  type: string;
}

export const tasksReducer = createReducer(
  initialState,
  on(TasksActions.GetTaskListSuccess, (state, { tasks }) => {
    return { ...state, taskList: tasks };
  }),
  on(TasksActions.DeleteTaskSuccess, (state, { taskToDelete }) => {
    const rest = state.taskList.filter((e) => e.id !== taskToDelete.id);
    return { ...state, taskList: rest };
  }),
  on(TasksActions.EditTaskSuccess, (state, { taskToEdit }) => {
    const updatedArr = JSON.parse(JSON.stringify(state.taskList)).map(
      (e: Task) => (e.id == taskToEdit.id ? taskToEdit : e)
    );
    return { ...state, taskList: updatedArr };
  })
);

export const reducer = (state: State | undefined, action: Action) => {
  return tasksReducer(state, action);
};

export const getTaskList = (state: State) => {
  return state.taskList;
};
