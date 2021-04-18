import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskListModel } from '../../../../core/models/task-list.model';
import { requestTasksList } from '../../store/tasks.actions';
import { TasksListState } from '../../store/tasks.reducer';
import { tasksList } from '../../store/tasks.selectors';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list-workspace.component.html',
  styleUrls: ['./tasks-list-workspace.component.scss']
})
export class TasksListWorkspaceComponent implements OnInit {

  taskListModel$?: Observable<TaskListModel[]>;

  constructor(private store: Store<TasksListState>) { }

  ngOnInit(): void {
    this.store.dispatch(requestTasksList());
    this.taskListModel$ = this.store.select(tasksList);

    this.taskListModel$.subscribe(t => console.log(t))
  }

  addTaskList() {
  }
}
