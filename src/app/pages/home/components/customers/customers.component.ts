import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'ef-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  host: {
    'class': 'ef-customers'
  },
  encapsulation: ViewEncapsulation.None
})
export class CustomersComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Splide( `#first`, {
      direction: 'ltr',
      width: '100%',
      type: 'loop',
      waitForTransition: true,
      autoHeight: false,
      autoWidth: false,
      gap: 15,
      pauseOnFocus: false,
      pauseOnHover: false,
      perPage: 7,
      perMove: 1,
      autoplay: true,
      interval: 2000,
      arrows: false,
      pagination: false
    } ).mount();

    new Splide( `#second`, {
      direction: 'rtl',
      width: '100%',
      type: 'loop',
      waitForTransition: true,
      autoHeight: false,
      autoWidth: false,
      gap: 15,
      pauseOnFocus: false,
      pauseOnHover: false,
      perPage: 7,
      perMove: 1,
      autoplay: true,
      interval: 2000,
      arrows: false,
      pagination: false
    } ).mount();
  }

}
