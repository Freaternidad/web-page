import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightDirective } from '../core/directives/highlight.directive';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ColorDirective } from '../core/directives/color.directive';
import { LinkButtonDirective } from '../core/directives/link-button.directive';
import { AdsComponent } from './ads/ads.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    AdsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HighlightDirective,
    SharedModule,
    ColorDirective,
    LinkButtonDirective
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
    AdsComponent
  ]
})
export class ComponentsModule { }
