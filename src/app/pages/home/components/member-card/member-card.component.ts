import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'ef-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  host: {
    'class': 'ef-member-card'
  },
  encapsulation: ViewEncapsulation.None
})
export class MemberCardComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    new Splide( `#card`, {
      direction: 'ttb',
      height   : '420px',
      width: '80%',
      type   : 'loop',
      autoHeight: true,
      autoWidth: true,
      waitForTransition: true,
      perPage: 1,
      perMove: 1,
      autoplay: true,
      interval: 2000,
      speed: -3000,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      pauseOnFocus: false, 
    } ).mount();
    new Splide( `#card2`, {
      direction: 'ttb',
      height   : '420px',
      width: '80%',
      type   : 'loop',
      autoHeight: true,
      autoWidth: true,
      waitForTransition: true,
      perPage: 1,
      perMove: 1,
      autoplay: true,
      interval: 2000,
      speed: -3000,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    } ).mount();
    new Splide( `#card3`, {
      direction: 'ttb',
      height   : '420px',
      width: '80%',
      type   : 'loop',
      autoHeight: true,
      autoWidth: true,
      waitForTransition: true,
      perPage: 1,
      perMove: 1,
      autoplay: true,
      interval: 2000,
      speed: -3000,
      arrows: false,
      pagination: false,
      pauseOnHover: false,
      pauseOnFocus: false,

    } ).mount();
  }
}
