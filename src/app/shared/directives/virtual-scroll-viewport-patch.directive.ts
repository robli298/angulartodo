import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { Directive, Inject, OnDestroy, OnInit, Self } from "@angular/core";
import { fromEvent, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

// temporary solution to solve re-render when the viewport or content size changes
// https://github.com/angular/components/issues/10117

@Directive({
    selector: 'cdk-virtual-scroll-viewport'
})
export class VirtualScrollViewportDirective implements OnInit, OnDestroy {
    protected readonly destroy$ = new Subject();

    constructor(@Self() @Inject(CdkVirtualScrollViewport) private readonly _viewportComponent: CdkVirtualScrollViewport,  @Inject(Window) private _window: any) {
        // not implemented yet
    }

    ngOnInit(): void {
        fromEvent(this._window, 'resize').pipe(debounceTime(10), takeUntil(this.destroy$)).subscribe(() => {
            this._viewportComponent.checkViewportSize()
        })
    }
    ngOnDestroy(): void {
        this.destroy$.next();
		this.destroy$.complete();
    }

}