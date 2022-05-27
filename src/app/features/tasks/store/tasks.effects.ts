import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { TasksApiService } from 'src/app/core/services/tasks-api.service';
import {
  loadTasksLists,
  tasksListsLoaded
} from './tasks.actions';

@Injectable()
export class TasksEffects {
  constructor(
    private actions$: Actions,
    private tasksApiService: TasksApiService
  ) {}

  loadTasksList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasksLists),
      switchMap((_) =>
        this.tasksApiService
          .getTaskList()
          .pipe(map((data) => tasksListsLoaded({ tasksLists: data })))
      )
    )
  );
}
