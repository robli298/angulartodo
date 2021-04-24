import { NgZone } from "@angular/core";
import { MonoTypeOperatorFunction, Observable, Observer, Operator, TeardownLogic } from "rxjs";
import { map } from "rxjs/operators";

export class ZoneFreeOperator<T> implements Operator<T, T> {
    constructor(private readonly _zone: NgZone) { }

    call(observer: Observer<T>, source: Observable<T>): TeardownLogic {
        return this._zone.runOutsideAngular(() => source.subscribe(observer));
    }
}

export function zoneFull<T>(zone: NgZone):
    MonoTypeOperatorFunction<T> {
    return map(value => zone.run(() => value));
}

export function zoneFree<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
    return source => source.lift(new ZoneFreeOperator(zone));
}

/*

...
constructor(@Inject(NgZone) zone:NgZone) {
    interval(POLLING_TIME)
        .pipe(
            zoneFree(zone), // leaving NgZone
            filter((_, index) => !(index % 10)), // filtering
            // re-entering zone if stream reached here
            zoneFull(zone)
        ).subscribe(() => {
            this.ticker += 1;
        })
}
...
*/