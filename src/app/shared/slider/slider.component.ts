import { AfterViewInit, Component, Input } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

@Component({
  selector: 'ef-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @Input() id!: string;
  @Input() speed: number = 0.6;


  ngAfterViewInit(): void {
    var splide = new Splide( `#${this.id}`, {
      direction: 'ttb',
      height   : '100vh',
      type   : 'loop',
      autoHeight: true,
      autoWidth: true,
      waitForTransition: true,
      perPage: 4,
      perMove: 1,
      focus: 'center',
      autoScroll: {
        speed: this.speed,
      },
    } );
    splide.mount({ AutoScroll });
  }

}
