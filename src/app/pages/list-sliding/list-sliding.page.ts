import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
    selector: 'app-list-sliding',
    templateUrl: './list-sliding.page.html',
    styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {
    @ViewChild('lista') lista: IonList;
    usuarios: Observable<any>;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
       this.usuarios = this.dataService.getUsers();
    }

    favorite(user) {
        console.log(user);
        this.lista.closeSlidingItems();
    }

    share(user) {
        console.log(user);
        this.lista.closeSlidingItems();
    }

    deletar(user) {
        console.log(user);
        this.lista.closeSlidingItems();
    }

}
