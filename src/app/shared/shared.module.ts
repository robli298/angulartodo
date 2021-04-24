import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetDirective } from './directives/let.directive';

/**
 * This modules contains common components/pipes/directives and also exports commonly used Angular modules. This module
 * can be imported by any feature module.
 */
@NgModule({
    declarations: [LetDirective],
    imports: [
        CommonModule
    ],
    exports: [CommonModule]
})
export class SharedModule {

}