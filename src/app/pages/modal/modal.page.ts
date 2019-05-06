import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openMOdal() {
   const modal = await this.modalCtrl.create({
        component: ModalInfoPage,
        componentProps: {
            nome: 'Gabriel',
            pais: 'Brasil'
        }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Retorno modal ' , data );
}

}
