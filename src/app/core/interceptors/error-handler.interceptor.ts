import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { concatMap, finalize, retryWhen } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  retry = {
    count: 1,
    delay: 1000,
    status: [500],
  };
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> | Observable<any> {
    console.log('Passed through the interceptor in request');
    return next.handle(request).pipe(
      retryWhen((error) =>
        error.pipe(
          concatMap((e, count) => {
            console.log('Passed through the interceptor in response');
            switch (e.status) {
              case 404:
                this.router.navigate(['/404']);
                break;
              case 500:
                window.alert(
                  'Error en el servicio, lamentamos los inconvenientes.'
                );
                break;
            }

            return throwError(e);
          })
        )
      )
    );
  }
}
