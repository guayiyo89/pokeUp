import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-angular';

  constructor(private pokeSvc: PokemonService) {}

  ngOnInit() {
    this.pokeSvc.getPokemons1stGen().subscribe(
      resp => this.pokeSvc.saveData(resp.pokemon_species)
      )
  }
}
