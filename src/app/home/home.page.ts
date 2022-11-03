import { Component, OnInit } from '@angular/core';
import { Calculadora } from '../shared/models/calculadora';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;

  vantajoso: null | 'ETANOL' | 'GASOLINA' = null;

  // calculadora: Calculadora;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private router: Router,
  ) {
    // this.calculadora = new Calculadora();
  }

  ngOnInit() {
    this.form = this.fb.group({
      etanol: [5, [Validators.required, Validators.min(1)]],
      gasolina: [3, [Validators.required, Validators.min(1)]],
    });
  }

  calcular(): void {
    if (this.form.valid) {
      const res = Calculadora.calcular(this.form.value);
      console.log(res);
      this.vantajoso = res;
      setTimeout(() => {
        (document.getElementById('vantagem') as HTMLElement).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, 100);
    } else {
      this.presentToast('Formulario inválido', 'danger').catch();
    }
  }

  async presentToast(msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
      color
    });
    await toast.present();
  }

  reset(): void {
    this.form.reset();
    this.vantajoso = null;
  }
}
