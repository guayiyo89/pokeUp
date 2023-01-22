import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal.service';
import { PassingDataService } from 'src/app/shared/passing-data.service';
import { Base } from '../../interfaces/base';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listPokemon: Base[] = [];
  results: Base[] = [];
  currentPageResults: Base[] = [];
  searchPokemon = new FormControl('');
  pageSize = 8;
  lastPage = 1;
  currentPage = 1;
  modalSwitch = false

  constructor(private pokeSvc: PokemonService, public modalSvc: ModalService, private dataSvc: PassingDataService) {
  }

  ngOnInit(): void {
    this.loadPokemons();
    this.modalSvc.$modal.subscribe((value) => this.modalSwitch = value);
  }

  loadPokemons() {
      this.listPokemon = this.pokeSvc.dataPokemon;
      this.lastPage = this.calcularPaginas(this.pokeSvc.dataPokemon, this.pageSize);
      this.results = this.listPokemon.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      this.currentPage = 1;
      this.currentPageResults = this.paginate(
        this.results,
        this.pageSize,
        1
      );
  }

  showPokemon() {
    this.results = this.listPokemon.filter((specie) =>
      specie.name.includes(this.searchPokemon.value)
    );
    this.lastPage = this.calcularPaginas(this.results, this.pageSize);
    this.currentPage = 1;
    this.currentPageResults = this.paginate(
      this.results,
      this.pageSize,
      this.currentPage
    );
  }

  paginate(array: Base[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  calcularPaginas(array: Base[], page_size: number) {
    let totalPaginas;
    if (array.length % page_size == 0) {
      totalPaginas = array.length / page_size;
    } else {
      totalPaginas = Math.trunc(array.length / page_size) + 1;
    }
    return totalPaginas;
  }

  nextPage() {
    if (this.currentPage != this.lastPage) {
      this.currentPage++;
      this.currentPageResults = this.paginate(
        this.results,
        this.pageSize,
        this.currentPage
      );
    }
  }

  beforePage() {
    if (this.currentPage != 1) {
      this.currentPage--;
      this.currentPageResults = this.paginate(
        this.results,
        this.pageSize,
        this.currentPage
      );
    }
  }

  showFirstPage() {
    this.currentPageResults = this.paginate(this.results, this.pageSize, 1);
    this.currentPage = 1;
  }

  showLastPage() {
    this.currentPageResults = this.paginate(
      this.results,
      this.pageSize,
      this.lastPage
    );
    this.currentPage = this.lastPage;
  }

  openModal(pokemon: Base) {
    this.dataSvc.enviarData(pokemon)
    this.modalSwitch = true
  }


}
