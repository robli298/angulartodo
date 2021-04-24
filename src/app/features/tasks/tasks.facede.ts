import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TaskListModel } from "src/app/core/models/task-list.model";
import { requestTasksList } from "./store/tasks.actions";
import { TasksListState } from "./store/tasks.reducer";
import { tasksListSelectAllSelector } from "./store/tasks.selectors";

@Injectable({
    providedIn: 'root'
})
export class TasksFacade {
    constructor(private store: Store<TasksListState>) {
    }

    getTasksList(): Observable<TaskListModel[]> {
        this.store.dispatch(requestTasksList());
        return this.store.select(tasksListSelectAllSelector);
    }
}