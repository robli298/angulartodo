import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TaskListModel } from "src/app/core/models/task-list.model";
import { requestTasksList, tasksListSelected } from "./store/tasks.actions";
import { TasksListState } from "./store/tasks.reducer";
import { selectedTasksListId, tasksListSelectAllSelector } from "./store/tasks.selectors";

@Injectable({
    providedIn: 'root'
})
export class TasksFacade {
    constructor(private _store: Store<TasksListState>) {
    }

    getTasksList(): Observable<TaskListModel[]> {
        this._store.dispatch(requestTasksList());
        return this._store.select(tasksListSelectAllSelector);
    }

    selectTasksList(id: number) {
        this._store.dispatch(tasksListSelected({
            id: id
        }));
    }

    getTasksListSelectedId(): Observable<number | null> {
        return this._store.select(selectedTasksListId);
    }
}