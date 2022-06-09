import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  map
} from 'rxjs/operators';
import { IItem } from 'src/app/shared/components/list-view/list-view.component';
import { TasksFacade } from '../../tasks.facede';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss'],
})
export class TasksListWorkspaceComponent implements OnInit {
  tasksList$?: Observable<IItem[]>;
  selectedListId$?: Observable<number | null>;

  constructor(private tasksFacade: TasksFacade) {}

  // TODO select the first item as default selection
  ngOnInit(): void {
    this.tasksList$ = this.tasksFacade.getTasksList().pipe(
     map((result) =>
        result.map((item) => {
          return { label: item.name, id: item.id };
        })
      ),
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
