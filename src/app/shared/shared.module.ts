import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LetDirective } from './directives/let.directive';
import { ListViewItemDirective } from './directives/list-view-item.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollViewportDirective } from './directives/virtual-scroll-viewport-patch.directive';

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
  ],
  imports: [CommonModule, ScrollingModule],
  exports: [
    CommonModule,
    LetDirective,
    ListViewComponent,
    ListViewItemDirective,
  ],
})
export class SharedModule {}
