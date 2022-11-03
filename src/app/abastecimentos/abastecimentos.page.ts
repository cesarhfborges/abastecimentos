import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Abastecimento } from '../shared/models/abastecimento';

@Component({
  selector: 'app-abastecimentos',
  templateUrl: './abastecimentos.page.html',
  styleUrls: ['./abastecimentos.page.scss'],
})
export class AbastecimentosPage implements OnInit {

  listaAbastecimentos: Abastecimento[];

  constructor() { }

  ngOnInit() {
    this.listaAbastecimentos = Array.from({length: 50}).map((v, i) => new Abastecimento({
        valorLitro: faker.datatype.number({min: 2, max: 5, precision: 2}),
        litros: faker.datatype.number({min: 20, max: 55, precision: 0}),
        data: new Date(),
        tipo: i % 2 === 0 ? 'GASOLINA' : 'ETANOL',
      }));
  }

}
