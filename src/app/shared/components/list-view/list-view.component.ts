import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input, Output,
  TemplateRef
} from '@angular/core';
import { ListViewItemDirective } from '../../directives/list-view-item.directive';

export interface IItem {
  id: number;
  label: string;
}

export interface Options {
  itemSize?: number;
}

const defaultOptions = {};

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list-view.component.scss'],
  host: {
    class: 'list-view-host',
  },
  providers: [{ provide: Window, useValue: window }],
})
export class ListViewComponent {
  _options: Options = defaultOptions;

  @Input()
  items: IItem[] = [];

  @Input() set options(options: Options) {
    this._options = { ...defaultOptions, ...options };
  }

  @Output()
  selectionChanged: EventEmitter<IItem> = new EventEmitter<IItem>();

  @ContentChild(ListViewItemDirective, { static: true })
  listViewItemDirective!: ListViewItemDirective;

  selectedItem!: IItem;

  constructor(private _elementRef: ElementRef) {
    // no implementation needed
  }

  selectOption(item: IItem): void {
    this.selectedItem = item;
    this.selectionChanged.emit(item);
  }

  get listViewItemTpl(): TemplateRef<IItem> {
    return this.listViewItemDirective?.tpl;
  }

  get parentHeight(): string {
    return (
      'height:' +
      this._elementRef.nativeElement.parentElement.offsetHeight +
      'px'
    );
  }
}
