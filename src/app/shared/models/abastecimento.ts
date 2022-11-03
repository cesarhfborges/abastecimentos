export class Abastecimento {
  data: Date;
  tipo: 'GASOLINA' | 'ETANOL';
  valorLitro: number;
  litros: number;

  constructor(opts: {
    data: Date;
    tipo: 'GASOLINA' | 'ETANOL';
    valorLitro: number;
    litros: number;
  } | null = null) {
    if (opts) {
      this.data = opts.data;
      this.tipo = opts.tipo;
      this.valorLitro = opts.valorLitro;
      this.litros = opts.litros;
    }
  }

  get total(): number {
    return this.valorLitro * this.litros;
  }
}
