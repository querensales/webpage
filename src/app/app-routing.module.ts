import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobremimComponent } from './sobremim/sobremim.component';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'sobremim', component: SobremimComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'contato', component: ContatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
