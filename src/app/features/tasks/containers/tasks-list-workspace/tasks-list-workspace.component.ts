import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, finalize, mergeMap, take, tap } from 'rxjs/operators';
import { IItem } from 'src/app/shared/components/list-view/list-view.component';
import { TasksListModel } from '../../../../core/models/tasks-list.model';
import { TasksFacade } from '../../tasks.facede';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss'],
})
export class TasksListWorkspaceComponent implements OnInit {
  tasksList$?: Observable<TasksListModel[]>;
  selectedListId$?: Observable<number | null>;

  items: IItem[] = [];
  isLoading = false;

  // tslint:disable-next-line: variable-name
  constructor(private tasksFacade: TasksFacade) {}

  // TODO select the first item as default selection
  ngOnInit(): void {
    this.isLoading = true;
    this.tasksList$ = this.tasksFacade.getTasksList().pipe(
      tap((tasksLists) => {
        this.items = tasksLists.map((task) => {
          return { label: task.name, id: task.id };
        });
        this.isLoading = false;
      }),
      catchError((e) => {
        this.isLoading = false;
        return throwError(e);
      })
    );

    this.selectedListId$ = this.tasksFacade.getTasksListSelectedId();
  }

  onAddList(): void {
    console.log('Add list');
  }

  onSelectedTaskList(taskList: IItem): void {
    this.tasksFacade.selectTasksList(taskList.id);
  }
}
