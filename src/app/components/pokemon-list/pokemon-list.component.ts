import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Base } from 'src/app/interfaces/base';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listPokemon: Base[] = [];
  load = false;
  searchPokemon = new FormControl('');
  pageActual: Base[] = [];
  pageSize = 5;
  lastPage = 1;
  currentPage = 1;

  constructor(private pokeSvc: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeSvc.getPokemons1stGen().subscribe((resp) => {
      this.listPokemon = resp.pokemon_species;
      this.lastPage = this.calcularPaginas(this.listPokemon, this.pageSize);
      this.pageActual = this.listPokemon;
      this.load = true;
    });
  }

  showPokemon() {
    this.pageActual = this.listPokemon.filter((specie) =>
      specie.name.includes(this.searchPokemon.value)
    );
  }

  paginate(array: Base[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  calcularPaginas(array: Base[], page_size: number){
    let totalPaginas;
    if(array.length % page_size == 0){
      totalPaginas = array.length / page_size
    } else {
      totalPaginas = Math.trunc(array.length / page_size) + 1;
    }
    return totalPaginas
  }
  
}
