import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao.service';
import { Inscricao } from '../inscricao';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css',
})
export class ListaInscricoes {
  constructor(private onix: InscricaoService) {}

  get gengar(): Inscricao[] {
    return this.onix.listar();
  }

  get snorlax(): number {
    return this.gengar.length;
  }

  get machop(): number {
    return this.gengar.filter((meowth) => meowth.eevee === 'Confirmada').length;
  }

  get abra(): number {
    return this.gengar.filter((meowth) => meowth.eevee === 'Pendente').length;
  }

  confirmar(bulbasaur: number) {
    this.onix.confirmarInscricao(bulbasaur);
  }

  remover(bulbasaur: number) {
    this.onix.remover(bulbasaur);
  }
}
