import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetDirective } from './directives/let.directive';

@NgModule({
    declarations: [LetDirective],
    imports: [
        CommonModule
    ],
    exports: [CommonModule]
})
export class SharedModule {

}