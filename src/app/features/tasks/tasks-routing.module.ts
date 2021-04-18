import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksListWorkspaceComponent } from "./components/tasks-list-workspace/tasks-list-workspace.component";
import { TasksWorkspace } from "./components/tasks-workspace/tasks-workspace.component";

const routes: Routes = [
    { path: '', component: TasksListWorkspaceComponent, outlet: 'sidebar-outlet' },
    { path: '', component: TasksWorkspace, outlet: 'workspace-outlet' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }