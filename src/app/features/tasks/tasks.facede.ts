import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TasksListModel } from 'src/app/core/models/tasks-list.model';
import { tasksListSelected, loadTasksLists } from './store/tasks.actions';
import { TasksListState } from './store/tasks.reducer';
import {
  selectedTasksListId,
  tasksListSelectAllSelector,
} from './store/tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class TasksFacade {
  constructor(private store: Store<TasksListState>) {}

  getTasksList(): Observable<TasksListModel[]> {
    this.store.dispatch(loadTasksLists());
    return this.store.select(tasksListSelectAllSelector).pipe(delay(2000));
  }

  selectTasksList(id: number): void {
    this.store.dispatch(
      tasksListSelected({
        id,
      })
    );
  }

  getTasksListSelectedId(): Observable<number | null> {
    return this.store.select(selectedTasksListId);
  }
}
