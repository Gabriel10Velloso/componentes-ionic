import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

    personagens = ['LULALA 😭' , 'Dirceu' , 'Corrupção' , 'Jean Wyllys ', 'PT', 'PSOL', '===' , 'Brasil Buraco'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    // console.log(event);
    const itemMove = this.personagens.splice(event.detail.from, 1)[0];
    this.personagens.splice( event.detail.to, 0, itemMove);
    event.detail.complete();
  }

  onClick() {
      console.log(this.personagens);
  }

}
