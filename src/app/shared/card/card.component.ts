import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ef-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    'class': 'ef-card',
    '[class.disabled]': 'disabled'
  },
  inputs: ['disabled'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

}
