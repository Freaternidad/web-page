import { Component, ViewEncapsulation, HostListener,Renderer2, Input } from '@angular/core';
import { NavItem } from 'src/app/core/models/nav-item.model';

@Component({
  selector: 'ef-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: {
    'class': 'ef-nav-bar'
  },
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {
  @Input() items!: NavItem[];
  private currentScroll: number =  100;
  public showMenu: boolean = true;

  constructor(
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll') 
  onScroll() {
    const navbar = document.querySelector('.ef-nav-bar') as HTMLElement;
    if (window.scrollY > this.currentScroll) {
      this.renderer.setStyle(navbar, 'opacity', '0');
      this.currentScroll = window.scrollY;
    } else if (window.scrollY < this.currentScroll || window.scrollY < 100) {
      this.renderer.setStyle(navbar, 'opacity', '1');
      this.currentScroll = window.scrollY;
    }
    this.showMenu = false;
  }
}
