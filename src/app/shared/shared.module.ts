import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormInputTextComponent } from './form/form-input-text/form-input-text.component';
import { FormWrapInputComponent } from './form/form-wrap-input/form-wrap-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSelectDropdownComponent } from './form/form-select-dropdown/form-select-dropdown.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    ButtonComponent,
    FormWrapInputComponent,
    FormInputTextComponent,
    FormSelectDropdownComponent,
    CardComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  exports: [
    ButtonComponent,
    FormInputTextComponent,
    FormSelectDropdownComponent,
    CardComponent,
    SliderComponent
  ]
})
export class SharedModule { }
