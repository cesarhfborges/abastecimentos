export class Calculadora {

  constructor() {
  }

  static calcular(opts: {etanol: number; gasolina: number}): 'ETANOL' | 'GASOLINA' {
    const relacaoPreco = opts.gasolina * .7;
    return opts.etanol >= relacaoPreco ? 'GASOLINA' : 'ETANOL';
  }
}
