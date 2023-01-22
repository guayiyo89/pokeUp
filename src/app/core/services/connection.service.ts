import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }

  offline$ = new Subject<boolean>();

  showConnectionError() {
    this.offline$.next(true);
  }

  hideConnectionError() {
    this.offline$.next(false);
  }
}
