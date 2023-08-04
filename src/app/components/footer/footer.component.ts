import { Component, ViewEncapsulation, HostListener, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'ef-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    'class': 'ef-footer'
  },
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements AfterViewInit {
 

  ngAfterViewInit(): void {
    const stand = document.getElementById('stand') as HTMLElement;
    if (stand) {
      new Parallax(stand);
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const el = document.getElementById('app');
    const politics = document.getElementById('politics');
    const data = document.getElementById('data');
    const social = document.getElementById('social');
    const info = document.getElementById('info');
    const showPolitics = el && el?.offsetHeight - window.scrollY + 50 < screen.availHeight || false;
    const showDataAndSocial = el && el?.offsetHeight - window.scrollY + 150 < screen.availHeight || false;
    const showInfo = el && el?.offsetHeight - window.scrollY + 350 < screen.availHeight || false;

    this.showElement(showPolitics, politics);
    this.showElement(showDataAndSocial, data);
    this.showElement(showDataAndSocial, social);
    this.showElement(showInfo, info);
  }

 

  getLetters(text: string): string {
    const letters = text.split('');
    return letters.reduce((acc,letter, index) => `${acc}<span #letter${index} class="letter" onmouseenter="letter${index}.style.color='red'">${letter}</span>`, '');
  }

  private showElement(shown: boolean, element: HTMLElement | null): void {
    if (shown) {
      element?.classList.add('visible');
    } else  {
      element?.classList.remove('visible');
    }
  }
}
