import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges {

  defaultColor =  'yellow';
  // tslint:disable-next-line: no-input-rename
  @Input('highlight') bgColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }

}
