import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface TasksAPIResponseModel {
    id: number,
    name: string,
    index: number,
    tasks: {
        id: string,
        name: string,
        index: number
    }[]
}

@Injectable({
    providedIn: 'root'
})
export class TasksApiService {
    constructor(private _http: HttpClient) {
    }

    getTaskList(): Observable<TasksAPIResponseModel[]> {
        return this._http.get<TasksAPIResponseModel[]>('/tasks');
    }
}