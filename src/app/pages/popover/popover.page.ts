import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

    constructor(public popoverCtrl: PopoverController) {}

  ngOnInit() {
  }

  async mostrarPop(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: ev,
      mode: 'ios', // aqui deixa padronizado a forma como o popouver aparece
      backdropDismiss: false, // não fecha o popouver sem clicar em fechar
    });
    await popover.present();
    // const { data } = await popover.onDidDismiss(); // aqui executa componente filho e depois o pai de forma mais lenta
    const { data } = await popover.onWillDismiss(); // após fechar executa esta opção;
    console.log('Pai ' , data);
  }


}
