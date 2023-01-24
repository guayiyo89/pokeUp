import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loader = new BehaviorSubject<boolean>(false);
  loader$ = this.loader.asObservable();


  showLoadingScreen(val: boolean) {
    this.loader.next(val);
  }

}