import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async presentInput() {

    const input = await this.alertCtrl.create({
      cssClass: 'alertWidth', // alterando tamnho do alert
      header: 'Input',
      subHeader: 'Add nome e e-mail:',
      inputs: [
        {
          name: 'txtNome',
          type: 'text',
          placeholder: 'Nome'
        },
        {
            name: 'txtEmail',
            type: 'email',
            placeholder: 'Email'
          }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtNome;
          }
        }
      ]
    });

    await input.present();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Vamo que Vamo !',
      subHeader: 'Subtitle 🌝',
      message: 'This is an alert message.',
    
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
            text: 'Ok',
            handler: (blah) => {
              console.log('Botão OK');
          }
        }
      ]
    });

    await alert.present();
  }

}
