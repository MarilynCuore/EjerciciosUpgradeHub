import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {
  _elements: string[] = ['#ffe5ec', '#ff80ac', '#ff2e63', '#800020','#1a0006'];
  elements: string[] = this._elements;

  constructor() { }

  ngOnInit() {
  }

}
