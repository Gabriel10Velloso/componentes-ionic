import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
    nome: string;

    usuario = {
        email: ' ',
        password: ' ',
    };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      console.log('object');
      console.log(this.usuario);
  }

}
