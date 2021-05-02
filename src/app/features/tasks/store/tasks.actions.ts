import { createAction, props } from '@ngrx/store';
import { TaskListModel } from 'src/app/core/models/task-list.model';

export const requestTasksList = createAction('[Task/API] Request Load Task List');
export const loadTasksList = createAction('[Task] Load Tasks List', props<{ tasksList: TaskListModel[] }>());
export const tasksListSelected = createAction('[Task] Select Tasks List', props<{ id: number }>());