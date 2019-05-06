import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    @Input() nome;
    @Input() pais;


    constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  sairComArgumentos() {
    this.modalCtrl.dismiss({
        nome: 'Felipe',
        pais: 'São Paulo 🌝'
    });


  }

  sairSemArgumentos() {
    this.modalCtrl.dismiss();
  }

}
