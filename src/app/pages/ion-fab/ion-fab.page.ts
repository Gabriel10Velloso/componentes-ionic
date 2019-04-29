import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-fab',
  templateUrl: './ion-fab.page.html',
  styleUrls: ['./ion-fab.page.scss'],
})
export class IonFabPage implements OnInit {
    ativo;
    isSelected= true;
    data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
