import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[EFIconButton]',
  standalone: true
})
export class IconButtonDirective {
  private _filled!: boolean;

  @Input()
  set filled(value: boolean) {
    this.setClassFilled(value);
    this._filled = value;
  } 
  get filled(): boolean {
    return this._filled;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
  ) { 
    this._elementRef.nativeElement.classList.add('ef-icon-button');
  }

  private setClassFilled(filled: boolean): void {
    const classList = this._elementRef.nativeElement.classList;
    const element = this._elementRef.nativeElement.tagName?.toLocaleLowerCase();
    classList.remove(`${element}-filled`);
    if (filled) {
      classList.add(`${element}-filled`);
    } 
  }

}
