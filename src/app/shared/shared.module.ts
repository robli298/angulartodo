import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LetDirective } from './directives/let.directive';
import { ListViewItemDirective } from './directives/list-view-item.directive';

/**
 * This modules contains common components/pipes/directives and also exports commonly used Angular modules. This module
 * can be imported by any feature module.
 */
@NgModule({
    declarations: [LetDirective, ListViewComponent, ListViewItemDirective],
    imports: [
        CommonModule
    ],
    exports: [CommonModule, LetDirective, ListViewComponent, ListViewItemDirective]
})
export class SharedModule {

}