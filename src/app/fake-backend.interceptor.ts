import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    private _tasksJsonPath = 'assets/mock/tasks.json';

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleRequests(req, next);
    }

    private handleRequests(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const { url, method } = req;

        if(url.startsWith('/tasks') && method == 'GET') {
            req = req.clone({
                url: this._tasksJsonPath
            });

            return next.handle(req).pipe(delay(500));
        }

        return next.handle(req);
    }
}