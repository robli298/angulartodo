import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksListWorkspaceComponent } from './components/tasks-list-workspace/tasks-list-workspace.component';
import { TasksWorkspace } from './components/tasks-workspace/tasks-workspace.component';

@NgModule({
    declarations: [TasksListWorkspaceComponent, TasksWorkspace],
    imports: [
        RouterModule
    ]
})
export class TasksModule {

}