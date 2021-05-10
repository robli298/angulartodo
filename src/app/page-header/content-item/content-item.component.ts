import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {
  @Input()
  fn?: () => void;

  constructor(private host: ElementRef) {
    // no implementation needed
  }

  ngOnInit(): void {
    fromEvent(this.element, 'click').subscribe(() => {
      if (this.fn) {
        this.fn()
      }
    });
  }

  get element() { return this.host.nativeElement; }
}
