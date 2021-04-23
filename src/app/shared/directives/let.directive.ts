import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export class LetContext<T> {
    constructor(private readonly dir: LetDirective<T>) {
    }

    get ngLet(): T | undefined {
        return this.dir.ngLet;
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
    ngLet?: T;

    constructor(@Inject(ViewContainerRef) viewContainerRef: ViewContainerRef, @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>) {
        viewContainerRef.createEmbeddedView(templateRef, new LetContext<T>(this));
    }
}