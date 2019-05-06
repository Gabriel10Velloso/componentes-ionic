import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentagem = 0.05;
  constructor() { }

  ngOnInit() {
  }

  alterarValor( event ) {
      console.log( event );
      this.porcentagem = event.detail.value / 100;
      console.log(this.porcentagem);
  }

}
