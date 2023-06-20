import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnChanges {
  @Input() appBorderColor: string = '';
  // eslint-disable-next-line no-unused-vars
  constructor(private el: ElementRef) {}
  ngOnChanges() {
    const currentDate = new Date();
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

    const date = new Date(this.appBorderColor);

    if (date < currentDate && date >= fourteenDaysAgo) {
      this.el.nativeElement.style.boxShadow =
        '0 0 10px 3px rgba(118, 165, 24, 1)';
    } else if (date > currentDate) {
      this.el.nativeElement.style.boxShadow =
        '0 0 10px 3px rgba(26, 133, 163, 1)';
    } else {
      this.el.nativeElement.style.boxShadow = '0 0 10px 3px rgba(0, 0, 0, 0.4)';
    }
  }
}
