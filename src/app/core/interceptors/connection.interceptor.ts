import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ConnectionService } from '../services/connection.service';
import { ModalService } from 'src/app/shared/modal.service';

@Injectable()
export class ConnectionInterceptor implements HttpInterceptor {
  constructor(private conectionSvc: ConnectionService, public modalSvc: ModalService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    if(!navigator.onLine) {
      this.modalSvc.$modal.emit(false)
      //window.alert('No posees conexion a internet')
      this.conectionSvc.showConnectionError();
    }
    return next.handle(request)
  }
}