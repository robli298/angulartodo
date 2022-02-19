import { Directive, TemplateRef } from "@angular/core";
import { IItem } from "../components/list-view/list-view.component";

@Directive({
  selector: '[appListViewItem]',
})
export class ListViewItemDirective {
  constructor(readonly tpl: TemplateRef<IItem>) {
    // no implementation needed
  }
}