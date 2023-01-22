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
  dataHabitat: Base[] = [];
  dataTypes: Base[] = [];
  dataRegion: Base[] = [];

  saveData(pokedata: Base[]) {
    let data = JSON.stringify(pokedata);
    localStorage.setItem('pokemons', data);
  }

  saveHabitatData(data: Base[]) {
    let habitats = JSON.stringify(data);
    localStorage.setItem('habitats', habitats);
  }

  saveTypeData(data: Base[]) {
    let types = JSON.stringify(data);
    localStorage.setItem('tipos', types);
  }

  saveRegionData(data: Base[]) {
    let regions = JSON.stringify(data);
    localStorage.setItem('regiones', regions);
  }

  loadData() {
    this.dataPokemon = JSON.parse(localStorage.getItem('pokemons') || '{}');
    this.dataHabitat = JSON.parse(localStorage.getItem('habitats') || '{}');
    this.dataRegion = JSON.parse(localStorage.getItem('regiones') || '{}');
    this.dataTypes = JSON.parse(localStorage.getItem('tipos') || '{}');
  }

  // Endpoints

  getPokemons1stGen(): Observable<any> {
    return this.http.get<any>(URLS.pokemon1stGen);
  }

  getPokemonData(id: number): Observable<any> {
    let url = `${URLS.getPokemonData}/${id}`;
    return this.http.get<any>(url);
  }

  getHabitat(): Observable<any> {
    return this.http.get<any>(URLS.getHabitats);
  }

  getTypes(): Observable<any> {
    return this.http.get<any>(URLS.getTypes);
  }

  getRegions(): Observable<any> {
    return this.http.get<any>(URLS.getRegion);
  }

  getItemData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
