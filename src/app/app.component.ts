import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from './core/constants/languages';
import { NavItem } from './core/models/nav-item.model';
import { NavItems } from './core/constants/navItems';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Fraternidad';
  public navItems: NavItem[] = NavItems

  constructor(translate: TranslateService) {
    translate.setDefaultLang(LANGUAGES.es);
    translate.use(LANGUAGES.es);
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }
}
