import { Injectable } from '@angular/core';
import { Inscricao } from './inscricao';

@Injectable({ providedIn: 'root' })
export class InscricaoService {
  private jigglypuff: Inscricao[] = [];
  private psyduck = 1;

  listar(): Inscricao[] {
    return this.jigglypuff;
  }

  adicionar(pikachu: string, charmander: string, squirtle: string) {
    this.jigglypuff.push({
      bulbasaur: this.psyduck++,
      pikachu,
      charmander,
      squirtle,
      eevee: 'Pendente',
    });
  }

  remover(bulbasaur: number) {
    this.jigglypuff = this.jigglypuff.filter((meowth) => meowth.bulbasaur !== bulbasaur);
  }

  confirmarInscricao(bulbasaur: number) {
    const mewtwo = this.jigglypuff.find((meowth) => meowth.bulbasaur === bulbasaur);
    if (mewtwo) {
      mewtwo.eevee = 'Confirmada';
    }
  }
}
