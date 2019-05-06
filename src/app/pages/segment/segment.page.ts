import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
    publisher = '';
  superherois: Observable<any>;

  @ViewChild(IonSegment) segment: IonSegment;

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.segment.value = 'todos';
      this.superherois = this.dataService.getSuperHerois();
  }

  segmentChanged(event) {
      const valorSegmento = event.detail.value;
      console.log(valorSegmento);

      if (valorSegmento === 'todos' ) {
          this.publisher = '';
          return;
      }
      this.publisher = valorSegmento;
  }

}
