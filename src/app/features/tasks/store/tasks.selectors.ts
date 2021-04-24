import { createFeatureSelector, createSelector } from "@ngrx/store";
import { taskListAdapterSelectors, tasksListFeatureKey, TasksListState } from "./tasks.reducer";

const tasksListFeatureSelector = createFeatureSelector<TasksListState>(tasksListFeatureKey);

export const tasksListSelectAllSelector = createSelector(tasksListFeatureSelector, taskListAdapterSelectors.selectAll);