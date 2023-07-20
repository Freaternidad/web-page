import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from './core/constants/languages';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fraternidad';
  inputValue: FormControl = new FormControl(null, Validators.required);

  constructor(translate: TranslateService) {
    translate.setDefaultLang(LANGUAGES.es);
    translate.use(LANGUAGES.es);
  }
}
