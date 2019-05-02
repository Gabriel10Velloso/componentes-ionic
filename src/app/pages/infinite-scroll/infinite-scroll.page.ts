import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.page.html',
    styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    datas: any[] = Array(20);

    constructor() { }

    ngOnInit() {  }

    loadData(carregando) {
        console.log(carregando);
        setTimeout(() => {
            if (this.datas.length > 150) {
                carregando.target.complete();
                this.infiniteScroll.disabled = true;
            }
            const novoArray = Array(20);
            this.datas.push(...novoArray);
            carregando.target.complete();
        }, 1000);
    }

}
