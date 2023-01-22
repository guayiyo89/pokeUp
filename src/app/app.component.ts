import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokedex-angular';

  constructor(private pokeSvc: PokemonService) {}

  ngOnInit() {
    this.loadPokemon();
    this.loadHabitat();
    this.loadRegions();
    this.loadTypes();
  }

  loadPokemon() {
    this.pokeSvc
      .getPokemons1stGen()
      .subscribe((resp) => this.pokeSvc.saveData(resp.pokemon_species));
  }

  loadHabitat() {
    this.pokeSvc
      .getHabitat()
      .subscribe((resp) => this.pokeSvc.saveHabitatData(resp.results));
  }

  loadTypes() {
    this.pokeSvc
      .getTypes()
      .subscribe((resp) => this.pokeSvc.saveTypeData(resp.results));
  }

  loadRegions() {
    this.pokeSvc
      .getRegions()
      .subscribe((resp) => this.pokeSvc.saveRegionData(resp.results));
  }
}
