import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[EFHighlight]',
  standalone: true
})
export class HighlightDirective {
  private percent: number = 15;

  constructor(
    private _elementRef: ElementRef
  ) { }

  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: any) {
    const clientRect = this._elementRef.nativeElement.getBoundingClientRect();
    const percentageX = (event.clientX - clientRect.x) / clientRect.width * 100;
    const percentageY = (event.clientY - clientRect.y) / clientRect.height * 100;
    
    this._elementRef.nativeElement.style.clipPath = "circle("+this.percent+"% at "+percentageX+"% "+percentageY+"% )";
  }

}
