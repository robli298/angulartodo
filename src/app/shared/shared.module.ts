import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LetDirective } from './directives/let.directive';
import { ListViewItemDirective } from './directives/list-view-item.directive';
import { VirtualScrollViewportDirective } from './directives/virtual-scroll-viewport-patch.directive';
import { WithLoadingPipe } from './pipes/with-loading.pipe';

/**
 * This modules contains common components/pipes/directives and also exports commonly used Angular modules. This module
 * can be imported by any feature module.
 */
@NgModule({
  declarations: [
    LetDirective,
    ListViewComponent,
    ListViewItemDirective,
    VirtualScrollViewportDirective,
    WithLoadingPipe
  ],
  imports: [CommonModule, ScrollingModule],
  exports: [
    CommonModule,
    LetDirective,
    ListViewComponent,
    ListViewItemDirective,
    WithLoadingPipe
  ],
})
export class SharedModule {}
