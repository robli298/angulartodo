import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export class LetContext<T> {
    constructor(private readonly _dir: LetDirective<T>) {
    }

    get ngLet(): T | null {
        return this._dir.ngLet;
    }
}

/**
 * Simple structural directive that works like *ngIf, but handles falsy result. Basically just adds context to the view.
 */
@Directive({
    selector: "[ngLet]"
})
export class LetDirective<T> {
    @Input()
    ngLet: T | null = null;

    constructor(@Inject(ViewContainerRef) private _viewContainerRef: ViewContainerRef, @Inject(TemplateRef) private _templateRef: TemplateRef<LetContext<T>>) {
        this._viewContainerRef.createEmbeddedView(_templateRef, new LetContext<T>(this));
    }
}