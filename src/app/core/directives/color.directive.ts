import { Directive, ElementRef, Input} from '@angular/core';
import { CanChangeColor, EFThemePalette } from '../constants/colors';

@Directive({
  selector: '[EFColor]',
  standalone: true
})
export class ColorDirective implements CanChangeColor {
  private _color!: EFThemePalette;

  @Input('EFColor')
  set color(value: EFThemePalette) {
    this.setClassColor(value);
    this._color = value;
  } 
  get color(): EFThemePalette {
    return this._color;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
  ) { }

  private setClassColor(color: EFThemePalette): void {
    const classList = this._elementRef.nativeElement.classList;
    const element = this._elementRef.nativeElement.tagName?.toLocaleLowerCase();
    classList.remove(`${element}-${this._color}`);
    if (color) {
      classList.add(`${element}-${color}`);
    } 
  }

}
