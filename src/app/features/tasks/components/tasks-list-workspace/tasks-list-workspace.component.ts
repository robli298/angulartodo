import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListModel } from '../../models/task-list.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss']
})
export class TasksListWorkspaceComponent implements OnInit {

  taskListModel$?: Observable<TaskListModel[]>;

  constructor() { }

  ngOnInit(): void {
  }

  addTaskList() {
  }
}
