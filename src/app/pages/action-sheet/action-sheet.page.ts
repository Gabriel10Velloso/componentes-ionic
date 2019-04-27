import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
    actionheet = 'lala';
  constructor(private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {

  }


}
