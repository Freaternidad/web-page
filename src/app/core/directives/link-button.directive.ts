import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[EFLinkButton]',
  standalone: true
})
export class LinkButtonDirective {

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
  ) { 
    this._elementRef.nativeElement.classList.add('ef-link-button');
  }

}
