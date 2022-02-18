import { Component, EventEmitter, Input, Output } from '@angular/core';


export interface IItem {
    id: number
    label: string
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
})
export class ListViewComponent {
  @Input()
  items: IItem[] = [];

  @Output()
  itemSelected: EventEmitter<IItem> = new EventEmitter<IItem>();

  itemSelectedId!: number;

  constructor() {
    // not implemented yet
  }

  onItemSelected(item: IItem) {
    this.itemSelectedId = item.id;
    this.itemSelected.emit(item);
  }
}
