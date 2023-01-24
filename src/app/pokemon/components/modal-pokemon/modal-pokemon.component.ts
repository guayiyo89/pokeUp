import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../../app/shared/modal.service';
import { PassingDataService } from '../../../../app/shared/passing-data.service';
import { URLS } from '../../../../environments/urls';
import { PokemonSpecie } from '../../interfaces/pokemon-specie.interface';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css'],
})
export class ModalPokemonComponent implements OnInit {
  initialPokeData: any;
  pokemon: any;
  pokemonData: any;
  evolutionData: any;
  imgPokemon: string = '';
  descripcion: string = '';
  private openSubscribe: Subscription | undefined;

  constructor(
    public modalSvc: ModalService,
    private dataSvc: PassingDataService,
    private pokeSvc: PokemonService
  ) {}

  ngOnInit(): void {
    this.openSubscribe = this.dataSvc.$dataChannel.subscribe(
      (data: any) => (this.initialPokeData = data)
    );
    this.getDataPokemon();
  }

  getDataPokemon() {
    this.pokeSvc.getItemData(this.initialPokeData.url).subscribe((data: PokemonSpecie) => {
      this.pokemon = data;
      this.resolveDescription(this.pokemon.flavor_text_entries);
      this.imgPokemon = `${URLS.getImgPokemon}${data.id}.png`;
      console.log(this.imgPokemon)
      this.getMoreData(this.pokemon.id);
      this.getEvolution(this.pokemon.evolution_chain.url)
    });
  }

  getMoreData(id: number) {
    this.pokeSvc.getPokemonData(id).subscribe((data: Pokemon) => {
      this.pokemonData = data;
    })
  }

  getEvolution(url: string) {
    this.pokeSvc.getItemData(url).subscribe((data) => {
      this.evolutionData = data;
    })
  }

  close() {
    this.modalSvc.$modal.emit(false);
  }

  resolveDescription(descriptionArray: any[]) {
    let newArray = descriptionArray.filter((text) =>
      text.language.name.includes('es')
    );
    this.descripcion = newArray[0].flavor_text;
  }

  ngOnDestroy(): void {
    this.openSubscribe?.unsubscribe();
  }
}
