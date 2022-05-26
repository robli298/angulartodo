import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { throwIfAlreadyLoaded } from './module-import.guard';

/**
 * This module defines the singleton services, single-instance components, configuration, and exports any third modules needed
 * in AppModule. This module is suppose to import only once in AppModule.
 */
@NgModule({
    declarations: [LayoutComponent],
    imports: [
        RouterModule,
        HttpClientModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
