import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListWorkspaceComponent } from './containers/tasks-list-workspace/tasks-list-workspace.component';
import { TasksWorkspaceComponent } from './containers/tasks-workspace/tasks-workspace.component';

const routes: Routes = [
    { path: '', component: TasksListWorkspaceComponent, outlet: 'sidebar-outlet' },
    { path: '', component: TasksWorkspaceComponent, outlet: 'workspace-outlet' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
