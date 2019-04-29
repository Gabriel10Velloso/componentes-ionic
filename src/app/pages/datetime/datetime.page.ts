import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

    dataNaci: Date = new Date();
    custonDate;
    customPickerOptions;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
        buttons: [{
          text: 'Save',
          handler: ( event ) => {
              console.log('Clicked Save!');
              console.log(event);
              console.log(event.day.value);
            }
        }, {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false; // trava o modal abeto após o click
          }
        }]
    };
  }

  alterandoData(event) {
    console.log('ionChange', event);
    console.log('DATA: ', new Date(event.detail.value));
  }

}
