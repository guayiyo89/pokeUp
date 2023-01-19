import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from 'src/environments/urls';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) { }

getPokemons1stGen(): Observable<any>{
  return this.http.get<any>(URLS.pokemon1stGen);
}
}
