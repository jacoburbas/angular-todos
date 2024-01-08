import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTasks from './tasks.reducers';

export const getTaskState = createFeatureSelector<fromTasks.State>('tasks');
export const getTasks = createSelector(getTaskState, fromTasks.getTaskList);
