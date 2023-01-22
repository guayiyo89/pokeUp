import { Component, OnInit } from '@angular/core';
import { Base } from '../../interfaces/base';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokepedia',
  templateUrl: './pokepedia.component.html',
  styleUrls: ['./pokepedia.component.css']
})
export class PokepediaComponent implements OnInit {
  habitats: Base[] = []
  regiones: Base[] = []
  tipos: Base[] = []

  constructor(private pokeSvc: PokemonService) { }

  ngOnInit(): void {
    this.tipos = this.pokeSvc.dataTypes;
    this.regiones = this.pokeSvc.dataRegion;
    this.habitats = this.pokeSvc.dataHabitat;
  }

}
