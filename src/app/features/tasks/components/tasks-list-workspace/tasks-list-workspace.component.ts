import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListModel } from '../../../../core/models/task-list.model';
import { TasksFacade } from '../../tasks.facede';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss']
})
export class TasksListWorkspaceComponent implements OnInit {

  tasksList$?: Observable<TaskListModel[]>;
  selectedListId: number = 1;

  constructor(private tasksFacade: TasksFacade) { }

  ngOnInit(): void {
    this.tasksList$ = this.tasksFacade.getTasksList();
  }

  onAddList(): void {
  }

  onSelectedList(id: number): void {
    this.selectedListId = id;
  }
}
