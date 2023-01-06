import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  constructor(
    private alertController: AlertController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Felicidades',
      message: 'Usuario Registrado!',
      buttons: ['OK!'],
    });

    await alert.present();
  }
}

