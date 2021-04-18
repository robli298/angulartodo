import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { TaskListModel } from "src/app/core/models/task-list.model";
import { loadTasksList } from "./tasks.actions";

export const tasksListFeatureKey = 'tasksList';

export interface TasksListState extends EntityState<TaskListModel> { }

export const tasksListAdapter: EntityAdapter<TaskListModel> = createEntityAdapter({
    sortComparer: (entity1, entity2) => entity1.index - entity2.index
});

export const initialTasksListState: TasksListState = tasksListAdapter.getInitialState();

export const tasksListReducer = createReducer(initialTasksListState,
    on(loadTasksList, (state, action) => tasksListAdapter.setAll(action.tasksList, state)));

export const taskListAdapterSelectors =
    tasksListAdapter.getSelectors()
