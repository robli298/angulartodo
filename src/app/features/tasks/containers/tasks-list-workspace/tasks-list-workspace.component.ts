import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IItem } from 'src/app/shared/components/list-view/list-view.component';
import { TaskListModel } from '../../../../core/models/task-list.model';
import { TasksFacade } from '../../tasks.facede';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss'],
})
export class TasksListWorkspaceComponent implements OnInit {
  tasksList$?: Observable<TaskListModel[]>;
  selectedListId$?: Observable<number | null>;

  items: IItem[] = [];

  constructor(private _tasksFacade: TasksFacade) {}

  ngOnInit(): void {
    this.tasksList$ = this._tasksFacade.getTasksList().pipe(
      tap((tasksLists) => {
        if (tasksLists && tasksLists[0]) {
          this._tasksFacade.selectTasksList(tasksLists[0].id);
        }

        this.items = tasksLists.map((task) => {
          return { label: task.name, id: task.id };
        });
      })
    );
    this.selectedListId$ = this._tasksFacade.getTasksListSelectedId();
  }

  onAddList(): void {
    this._tasksFacade.addNewTaskList();
  }

  onSelectedList(id: number): void {
    this._tasksFacade.selectTasksList(id);
  }

  onSelectedTaskList(taskList: IItem) {
    console.log(taskList);
  }
}
