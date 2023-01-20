import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    ModalPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
