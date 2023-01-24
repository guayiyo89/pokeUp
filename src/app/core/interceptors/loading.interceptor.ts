import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ConnectionService } from '../services/connection.service';
import { ModalService } from 'src/app/shared/modal.service';
import { LoadingService } from '../services/loading.service';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private loadingSvc: LoadingService,
    public modalSvc: ModalService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('cargando...')
    this.loadingSvc.showLoadingScreen(true);

    return next.handle(request).pipe(
      finalize(() => {this.loadingSvc.showLoadingScreen(false), console.log('ah listo!')}),
      catchError((err) => this.handleError(err))
      
    );
  }

  private handleError(err: HttpErrorResponse) {
    this.loadingSvc.showLoadingScreen(false);
    return throwError(err);
  }
}
