import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

@Pipe({
  name: 'withLoading',
})
export class WithLoadingPipe implements PipeTransform {
  transform<T>(obj: Observable<T> | undefined): Observable<any> | undefined {
    if (!obj) {
      return;
    }

    return obj.pipe(
      map((value: T) => ({ isLoading: false, value })),
      startWith(
        { isLoading: true },
        catchError((err) => of({ loading: false, err }))
      )
    );
  }
}
