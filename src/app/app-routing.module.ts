import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobremimComponent } from './sobremim/sobremim.component';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConhecimentoComponent } from './conhecimento/conhecimento.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'conhecimento', component: ConhecimentoComponent},
  {path: 'sobremim', component: SobremimComponent},
  {path: 'contato', component: ContatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
