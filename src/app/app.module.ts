import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SobremimComponent } from './sobremim/sobremim.component';
import { InicioComponent } from './inicio/inicio.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    SobremimComponent,
    InicioComponent,
    ExperienciaComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
