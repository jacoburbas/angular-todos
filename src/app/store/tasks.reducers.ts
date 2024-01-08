import { Task } from '../Task';

export interface State {
  taskList: Task[];
}

export const initialState: State = {
  taskList: [],
};

export const getTaskList = (state: State) => state.taskList;
