import { Directive } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor() { }
  getRandomNum() {
    return Math.floor(Math.random() * 100);
  }
}
