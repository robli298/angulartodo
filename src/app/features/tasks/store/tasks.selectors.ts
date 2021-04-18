import { createFeatureSelector, createSelector } from "@ngrx/store";
import { taskListAdapterSelectors, tasksListFeatureKey, TasksListState } from "./tasks.reducer";

const tasksListSelector = createFeatureSelector<TasksListState>(tasksListFeatureKey);

export const tasksList = createSelector(tasksListSelector, taskListAdapterSelectors.selectAll);