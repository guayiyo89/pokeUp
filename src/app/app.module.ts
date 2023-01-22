import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PokemonModule } from './pokemon/pokemon.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoadingScreenComponent } from './shared/components/loading-screen/loading-screen.component';
import { ErrorScreenComponent } from './shared/components/error-screen/error-screen.component';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { ConnectionComponent } from './core/components/connection/connection.component';
import { ConnectionInterceptor } from './core/interceptors/connection.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingScreenComponent,
    ErrorScreenComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ConnectionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
