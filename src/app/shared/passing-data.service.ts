import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Base } from '../pokemon/interfaces/base';

@Injectable({
  providedIn: 'root',
})
export class PassingDataService {
  private dataSrc = new BehaviorSubject<Base>({ name: '', url: '' });
  $dataChannel = this.dataSrc.asObservable();

  constructor() {}

  enviarData(data: Base) {
    this.dataSrc.next(data);
  }
}
