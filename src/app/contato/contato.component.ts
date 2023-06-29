import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  nome!: string;
  email!: string;
  mensagem!: string;

  enviarMensagem() {

    const dados = {
      nome: this.nome,
      email: this.email,
      mensagem: this.mensagem
    };
  }
}
