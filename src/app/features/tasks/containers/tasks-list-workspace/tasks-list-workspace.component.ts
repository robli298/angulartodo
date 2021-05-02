import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaskListModel } from '../../../../core/models/task-list.model';
import { TasksFacade } from '../../tasks.facede';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss']
})
export class TasksListWorkspaceComponent implements OnInit {

  tasksList$?: Observable<TaskListModel[]>;
  selectedListId$?: Observable<number | null>;

  constructor(private _tasksFacade: TasksFacade) { }

  ngOnInit(): void {
    this.tasksList$ = this._tasksFacade.getTasksList().pipe(tap(tasksLists => {
      if (tasksLists && tasksLists[0]) {
        this._tasksFacade.selectTasksList(tasksLists[0].id)
      }
    }));
    this.selectedListId$ = this._tasksFacade.getTasksListSelectedId();
  }

  onAddList(): void {
    console.log('List added')
  }

  onSelectedList(id: number): void {
    this._tasksFacade.selectTasksList(id);
  }
}
