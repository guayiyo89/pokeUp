import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from 'src/environments/urls';
import { Base } from '../interfaces/base';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(public http: HttpClient) {
    this.loadData();
  }

  dataPokemon: Base[] = [];

  saveData(pokedata: Base[]) {
    let data = JSON.stringify(pokedata)
    localStorage.setItem('pokemons', data)
  }

  loadData() {
    if(localStorage.getItem('pokemons')) {
      this.dataPokemon = JSON.parse(localStorage.getItem('pokemons') || '{}')
    }
  }

  getPokemons1stGen(): Observable<any> {
    return this.http.get<any>(URLS.pokemon1stGen);
  }

  getPokemonData(id:number): Observable<any> {
    let url = `${URLS.getPokemonData}/${id}`;
    return this.http.get<any>(url);
  }

  getItemData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
