import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { TasksApiService } from "src/app/core/services/tasks-api.service";
import { loadTasksList, requestTasksList } from './tasks.actions';

@Injectable()
export class TasksEffects {
    constructor(private actions$: Actions, private tasksApiService: TasksApiService) {}

    loadTasksList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestTasksList),
            switchMap(action =>
                this.tasksApiService.getTaskList().pipe(
                    map(data => loadTasksList({ tasksList: data }))
                ))
        )
    );
}