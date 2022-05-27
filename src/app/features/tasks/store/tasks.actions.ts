import { createAction, props } from '@ngrx/store';
import { TasksListModel } from 'src/app/core/models/tasks-list.model';

export const loadTasksLists = createAction(
  '[Task Lists] Load Task List'
);
export const tasksListsLoaded = createAction(
  '[Tasks Effect] Tasks List',
  props<{ tasksLists: TasksListModel[] }>()
);

export const tasksListSelected = createAction(
  '[Task Lists] Select Tasks List',
  props<{ id: number }>()
);
