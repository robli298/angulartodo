import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TaskListModel } from "../models/task-list.model";

@Injectable({
    providedIn: 'root'
})
export class TasksApiService {
    constructor(private _http: HttpClient) {
    }

    getTaskList(): Observable<TaskListModel[]> {
        return this._http.get<TaskListModel[]>('/tasks');
    }
}