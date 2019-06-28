import { Component, OnInit } from '@angular/core';
import { loadingAnimation } from '../animations/loading.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
  animations: [loadingAnimation]
})
export class LoadingComponent implements OnInit {
  _elements: string[] = ['#ffe5ec', '#ff80ac', '#ff2e63', '#800020','#1a0006'];
  

  constructor() { }

  ngOnInit() {
  }

  set(){
    this._elements = this._elements;

  }
  scheduleNextIteration(){

  }
}
