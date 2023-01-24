import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ErrorScreenComponent } from './shared/components/error-screen/error-screen.component';

const routes: Routes = [
  {
    path: 'buscar-pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((module) => module.PokemonModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
