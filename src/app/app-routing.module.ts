import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { TasksListComponent } from './features/tasks/components/tasks-list/tasks-list.component';
import { TasksWorkspace } from './features/tasks/components/tasks-workspace/tasks-workspace.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LayoutComponent
    , children: [
      { path: '', component: TasksListComponent, outlet: 'sidebar-outlet' },
      { path: '', component: TasksWorkspace, outlet: 'workspace-outlet' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
