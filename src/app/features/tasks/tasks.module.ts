import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksWorkspace } from './components/tasks-workspace/tasks-workspace.component';

@NgModule({
    declarations: [TasksListComponent, TasksWorkspace],
    imports: [
        RouterModule
    ]
})
export class TasksModule {

}