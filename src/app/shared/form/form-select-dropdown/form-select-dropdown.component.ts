import { Component, ElementRef, ViewChild, Input, ChangeDetectorRef, forwardRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionModel } from 'src/app/core/models/select-option.model';

@Component({
  selector: 'ef-form-select-dropdown',
  templateUrl: './form-select-dropdown.component.html',
  styleUrls: ['./form-select-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectDropdownComponent),
      multi: true,
    },
  ],
})
export class FormSelectDropdownComponent implements ControlValueAccessor, OnChanges {
  @ViewChild('inputSelect') public inputSelectRef!: ElementRef;
  @Input() public isInvalid!: boolean;
  @Input() public placeholder: string;
  @Input()
  public readonly: boolean = false;
  @Input()
  public options: SelectOptionModel[] = [];
  public currentValue!: SelectOptionModel;
  public isDisabled: boolean = false;
  public onChange: any;
  public onTouch: any;
  public isFilled: boolean = false;
  public showDropdown: boolean = false;
  private isFocusValue: boolean = false;

  get isFocus(): boolean {
    return this.isFocusValue;
  }

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this.placeholder = '';
    this.onChange = (_: any) => { };
    this.onTouch = () => { };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['options']?.currentValue) {
      this.options = changes?.['options']?.currentValue;
      if (this.currentValue) {
        this.handleChange(this.currentValue)
      }
    }
  }

  handleFocus(): void {
    this.isFocusValue = true;
    this.cdRef.markForCheck();
    this.onTouch();
  }

  handleBlur(): void {
    this.isFocusValue = false;
  }

  handleChange(option: any): void {
    if (option) {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
    this.currentValue = option;
    this.showDropdown = false;
    this.cdRef.markForCheck();
    this.onChange(this.currentValue);
    this.onTouch();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: SelectOptionModel): void {
    this.initializeValue(value);
    this.cdRef.markForCheck();
  }

  toggleOptions(): void {
    this.showDropdown = !this.showDropdown;
    this.cdRef.markForCheck();

  }

  private initializeValue(value: SelectOptionModel): void {
    this.currentValue = value;
    if (value) { this.onTouch(); }
  }

}
