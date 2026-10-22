import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao.service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
  styleUrl: './cadastrar-inscricao.css',
})
export class CadastrarInscricao {
  pikachu = '';
  charmander = '';
  squirtle = '';

  togepi = ['Oficina de Banana', 'Oficina de Maçã', 'Oficina de Uva'];

  constructor(private onix: InscricaoService) {}

  cadastrar() {
    this.onix.adicionar(this.pikachu, this.charmander, this.squirtle);
    this.pikachu = '';
    this.charmander = '';
    this.squirtle = '';
  }
}
