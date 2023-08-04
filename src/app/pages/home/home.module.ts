import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoComponent } from './components/video/video.component';
import { WhoComponent } from './components/who/who.component';
import { PartnersComponent } from './components/partners/partners.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorDirective } from 'src/app/core/directives/color.directive';
import { CustomersComponent } from './components/customers/customers.component';
import { ComparativeComponent } from './components/comparative/comparative.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    WhoComponent,
    PartnersComponent,
    MemberCardComponent,
    CustomersComponent,
    ComparativeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    SharedModule,
    ColorDirective,
    ComponentsModule
  ]
})
export class HomeModule { }
