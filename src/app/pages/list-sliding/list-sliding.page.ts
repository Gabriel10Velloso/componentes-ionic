import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-list-sliding',
    templateUrl: './list-sliding.page.html',
    styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {
    @ViewChild('lista') lista: IonList;
    usuarios: Observable<any>;

    constructor(private dataService: DataService ,
                public toastCtrl: ToastController) { }

    ngOnInit() {
        this.getUsers();
    }

    async presentToast(message: string) {
        const toast = await this.toastCtrl.create({
          message,
          duration: 2000
        });
        toast.present();
      }

    getUsers() {
       this.usuarios = this.dataService.getUsers();
    }

    favorite(user) {
        this.presentToast('Guardo em Favoritos');
        console.log(user);
        this.lista.closeSlidingItems();
    }

    share(user) {
        this.presentToast('Compartilhado Share');
        console.log(user);
        this.lista.closeSlidingItems();
    }

    deletar(user) {
        this.presentToast('Deletado');
        console.log(user);
        this.lista.closeSlidingItems();
    }

}
