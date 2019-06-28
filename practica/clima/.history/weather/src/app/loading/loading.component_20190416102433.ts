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
  public elements : string[]

  constructor() { }

  ngOnInit() {
  }

  set(){
    this.elements = this._elements;
  
  }
  scheduleNextIteration(){
    setTimeout(()=>{
      if(this.elements.length == 0) return this.set();
      this.clear()
    },100 * this._elements.length + 300);
  }
  clear(){
    this.elements = [];
  }
}
