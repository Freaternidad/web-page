import { Component, ViewEncapsulation, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'ef-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    'class': 'ef-home'
  },
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{

  

  ngOnInit(): void {
    window.scroll(0,0);
  }

  
  
}
