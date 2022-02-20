import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ListViewItemDirective } from '../../directives/list-view-item.directive';

export interface IItem {
  id: number;
  label: string;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent {
  @Input()
  items: IItem[] = [];

  @Output()
  selectionChanged: EventEmitter<IItem> = new EventEmitter<IItem>();

  @ContentChild(ListViewItemDirective, { static: true })
  listViewItemDirective!: ListViewItemDirective;

  selectedItem!: IItem;

  constructor() {
    // no implementation needed
  }

  selectOption(item: IItem) {
    this.selectedItem = item;
    this.selectionChanged.emit(item);
  }

  get listViewItemTpl() {
    return this.listViewItemDirective?.tpl;
  }
}
