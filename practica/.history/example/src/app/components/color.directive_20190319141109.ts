import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit() {
    let num = this.elem.nativeElement.innerHTML
      if(num > 50) this.elem.nativeElement.style.color = "green"
      else this.elem.nativeElement.style.color = "red"
  }
  
}
