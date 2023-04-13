import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  // change the background color of the element
  // to which this directive is applied
  // to red
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }


}
