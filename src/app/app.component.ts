import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from './core/constants/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fraternidad';

  constructor(translate: TranslateService) {
    translate.setDefaultLang(LANGUAGES.es);
    translate.use(LANGUAGES.es);
  }
}
