import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { TasksListModel } from 'src/app/core/models/tasks-list.model';
import { tasksListSelected, tasksListsLoaded } from './tasks.actions';

export const tasksListFeatureKey = 'tasksLists';

export interface TasksListState extends EntityState<TasksListModel> {
  selectedTasksListId: number | null;
}

export const tasksListAdapter: EntityAdapter<TasksListModel> =
  createEntityAdapter({
    sortComparer: (entity1, entity2) => entity1.index - entity2.index,
  });

export const initialTasksListsState: TasksListState =
  tasksListAdapter.getInitialState({
    selectedTasksListId: null,
  });

export const tasksListReducer = createReducer(
  initialTasksListsState,
  on(tasksListsLoaded, (state, action) =>
    tasksListAdapter.setAll(action.tasksLists, state)
  ),
  on(tasksListSelected, (state, action) => {
    return { ...state, selectedTasksListId: action.id };
  })
);

export const taskListAdapterSelectors = tasksListAdapter.getSelectors();
