import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color = 'orange';
    this.element.nativeElement.style.border = '2px solid black';
   }

}
