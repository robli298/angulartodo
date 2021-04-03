import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { throwIfAlreadyLoaded } from './module-import.guard';

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        RouterModule
    ],
    exports: [LayoutComponent]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}