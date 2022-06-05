import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import {
  catchError,
  finalize,
  last,
  map,
  mergeMap,
  take,
  tap,
} from 'rxjs/operators';
import { IItem } from 'src/app/shared/components/list-view/list-view.component';
import { TasksListModel } from '../../../../core/models/tasks-list.model';
import { TasksFacade } from '../../tasks.facede';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss'],
})
export class TasksListWorkspaceComponent implements OnInit {
  tasksList$?: Observable<IItem[] | null>;
  selectedListId$?: Observable<number | null>;

  constructor(private tasksFacade: TasksFacade) {}

  // TODO select the first item as default selection
  ngOnInit(): void {
    this.tasksList$ = this.tasksFacade.getTasksList().pipe(
     /* map((result) =>
        result.map((item) => {
          return { label: item.name, id: item.id };
        })
      ),*/
      map(result => null)
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
