import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.page.html',
  styleUrls: ['./olvido-contrasena.page.scss'],
})
export class OlvidoContrasenaPage {

  constructor(
    private alertController: AlertController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Si los datos coinciden recibiras tu correo',
      buttons: ['OK!'],
    });

    await alert.present();
  }
}
