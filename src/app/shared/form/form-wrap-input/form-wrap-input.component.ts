import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ef-form-wrap-input',
  templateUrl: './form-wrap-input.component.html',
  styleUrls: ['./form-wrap-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ef-form-wrap-input',
  }
})
export class FormWrapInputComponent {
  @Input() public isInvalid!: boolean;
  @Input() public isFocus!: boolean;
  @Input() public isFilled!: boolean;
}
