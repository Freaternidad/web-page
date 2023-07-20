import { Directive, ElementRef, Input } from '@angular/core';
import { CanChangeSize, EFSize } from '../constants/sizes';

@Directive({
  selector: '[EFSize]',
  standalone: true
})
export class SizeDirective implements CanChangeSize {
  private _size!: EFSize;

  @Input('EFSize')
  set size(value: EFSize) {
    this.setClassSize(value);
    this._size = value;
  } 
  get size(): EFSize {
    return this._size;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
  ) { }

  private setClassSize(size: EFSize): void {
    const classList = this._elementRef.nativeElement.classList;
    const element = this._elementRef.nativeElement.tagName?.toLocaleLowerCase();
    classList.remove(`${element}-${size}`);
    if (size) {
      classList.add(`${element}-${size}`);
    }
  }

}
