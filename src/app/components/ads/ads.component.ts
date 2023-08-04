import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { KeyWords } from 'src/app/core/constants/keyWords';
import Splide from '@splidejs/splide';

@Component({
  selector: 'ef-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  host: {
    'class': 'ef-ads'
  },
  encapsulation: ViewEncapsulation.None
})
export class AdsComponent implements AfterViewInit{
  public keyWordMain!: string;
  public keyWordSide!: string;
  private keyWords: string[] = KeyWords;

  ngAfterViewInit(): void {
    var splide = new Splide( `#ads`, {
      direction: 'ltr',
      width: '100%',
      type: 'loop',
      waitForTransition: true,
      autoHeight: true,
      autoWidth: false,
      focus: 'center',
      padding: '10%',
      gap: 15,
      pauseOnFocus: false,
      pauseOnHover: false,
      perPage: 1,
      perMove: 1,
      autoplay: true,
      interval: 3000,
      arrows: false,
      pagination: false
    } ).mount();

    this.keyWordMain = this.getRandomText();
    this.keyWordSide = this.getRandomText();

    splide.on('active', ($event) => {
      if ($event.slide.nodeName === 'IMG') {

        this.keyWordMain = this.getRandomText();
        this.keyWordSide = this.getRandomText();
      }

    })
  }


  getRandomText(): string {
    const random = Math.floor(Math.random() * this.keyWords.length)
    return this.keyWords[random];
  }
}
