import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TasksListWorkspaceComponent } from './components/tasks-list-workspace/tasks-list-workspace.component';
import { TasksWorkspace } from './components/tasks-workspace/tasks-workspace.component';
import { TasksEffects } from './store/tasks.effects';
import { tasksListFeatureKey, tasksListReducer } from './store/tasks.reducer';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
    declarations: [TasksListWorkspaceComponent, TasksWorkspace],
    imports: [
        TasksRoutingModule,
        StoreModule.forFeature(tasksListFeatureKey, tasksListReducer),
        EffectsModule.forFeature([TasksEffects]),
    ]
})
export class TasksModule {

}