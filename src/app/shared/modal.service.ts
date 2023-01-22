import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Base } from '../pokemon/interfaces/base';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  $modal = new EventEmitter<boolean>();
  $data = new EventEmitter<Base>();

  
}
