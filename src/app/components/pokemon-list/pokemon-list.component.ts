import { Component, OnInit } from '@angular/core';
import { Base } from 'src/app/interfaces/base';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listPokemon: Base[] = [];


  constructor(private pokeSvc: PokemonService) {}

  ngOnInit(): void {}

  getPokemons(){
    this.pokeSvc.getPokemons1stGen().subscribe(
      resp => {
        this.listPokemon = resp.pokemon_species
      }
    )
  }
}
