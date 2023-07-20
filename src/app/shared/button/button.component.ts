import { Component, EventEmitter,Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ef-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'ef-button',
    '[class.ef-button-disabled]': 'isDisabled'
  },
  inputs: ['isDisabled'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Output() trigger: EventEmitter<void> = new EventEmitter();
}
