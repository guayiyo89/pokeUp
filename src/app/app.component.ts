import { Component, OnInit } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { PokemonService } from './pokemon/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokedex-angular';

  constructor(private pokeSvc: PokemonService, public loadingSvc: LoadingService) {}

  ngOnInit() {
    this.loadPokemon();
    this.loadHabitat();
    this.loadRegions();
    this.loadTypes();
  }

  loadPokemon() {
    this.loadingSvc.showLoadingScreen(true)
    this.pokeSvc
      .getPokemons1stGen()
      .subscribe((resp) => this.pokeSvc.saveData(resp.pokemon_species));
  }

  loadHabitat() {
    this.loadingSvc.showLoadingScreen(true)
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
