import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokepediaComponent } from './components/pokepedia/pokepedia.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/buscar-pokemon',
  },
  {
    path: 'buscar-pokemon',
    component: PokemonListComponent,
    children: [],
  },
  {
    path: 'pokepedia',
    component: PokepediaComponent,
    children: [],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
