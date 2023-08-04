import { Component, ViewEncapsulation, HostListener,  Renderer2 } from '@angular/core';

@Component({
  selector: 'ef-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
  host: {
    'class': 'ef-who'
  },
  encapsulation: ViewEncapsulation.None
})
export class WhoComponent {

  public activeSlide: string = 'slide-one';

  constructor(
    private renderer: Renderer2
  ) {
  }

  
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(event: MouseEvent) {
    const container = document.querySelector('.container') as HTMLElement;
    const flags =  document.querySelector('.ef-flags') as HTMLElement;
    const paragraph = document.querySelector('.ef-who-slide-one--info-p');
    const flagsRect = flags.getBoundingClientRect();
    const clientRect = container.getBoundingClientRect();
    const maxWidthScroll = clientRect.width - screen.availWidth / 2;
    if (window.scrollY > screen.availHeight && window.scrollY < maxWidthScroll + 50) {
      this.renderer.setStyle(container, 'position', 'fixed');
      this.renderer.setStyle(container, 'top', '0');
      this.renderer.setStyle(container.parentNode, 'height', `${maxWidthScroll + 50}px`);

      this.renderer.setStyle(container, 'transform', `translateX(${-(window.scrollY-screen.availHeight) }px)`)
    } 

    if (window.scrollY > screen.availHeight && window.scrollY < maxWidthScroll /2) {
      this.renderer.setStyle(flags, 'width', `${flagsRect.width - (window.scrollY-screen.availHeight)/5 }px`)
    }

    if (window.scrollY > maxWidthScroll/2 && window.scrollY < maxWidthScroll) {
      this.renderer.setStyle(flags, 'width', `${flagsRect.width + (window.scrollY-screen.availHeight)/5 }px`)
    }

    if (window.scrollY < maxWidthScroll - 100) {
      this.renderer.addClass(paragraph, 'visible');

    }
    
    if (window.scrollY < screen.availHeight ) {
      this.renderer.setStyle(container, 'position', 'initial');
      this.renderer.removeClass(paragraph, 'visible');

    }

    if (window.scrollY < screen.availHeight) {
      this.renderer.setStyle(flags, 'width', '60%');
    }

    if (window.scrollY > maxWidthScroll + 50 ) {
      this.renderer.setStyle(container, 'position', 'absolute');
      this.renderer.setStyle(container, 'top', `${maxWidthScroll + 50}px`);
    }

    if (window.scrollY > maxWidthScroll) {
      this.renderer.setStyle(flags, 'width', '60%');
    }
  }
  
  public getWords(paragraphs: string[]): string {
    const words = paragraphs.map(paragraph => paragraph.split(' ').map(word => `<span>${word}</span>`).join(' '));
    return words.join('<br/><br/>').toString();
  }
}
