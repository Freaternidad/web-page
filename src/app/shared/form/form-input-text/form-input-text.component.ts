import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ef-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputTextComponent),
      multi: true,
    },
  ],
})
export class FormInputTextComponent implements ControlValueAccessor {
  @ViewChild('inputText')
  public inputTextRef!: ElementRef;
  @Input()
  public isInvalid!: boolean;
  @Input() public placeholder: string;
  @Input()
  public readonly!: boolean;
  @Input()
  public maxlength!: number;
  @Input()
  public minlength!: number;
  @Input()
  public max!: number;
  @Input()
  public min!: number;
  @Input()
  public type!: string;
  @Input()
  public autocomplete!: string;
  @Input()
  public currency!: boolean;
  public currentValue: string | number;
  public isDisabled!: boolean;
  public onChange: any;
  public onTouch: any;
  public isFilled: boolean = false;
  private isFocusValue!: boolean;

  get isFocus(): boolean {
    return this.isFocusValue;
  }

  constructor(private cdRef: ChangeDetectorRef) {
    this.placeholder = '';
    this.currentValue = '';
    this.onChange = (_: any) => { };
    this.onTouch = () => { };
  }

  handleFocus(): void {
    this.inputTextRef.nativeElement.focus();
    this.inputTextRef.nativeElement.select();
    this.isFocusValue = true;
    this.cdRef.markForCheck();
    this.onTouch();
  }

  handleBlur(): void {
    this.isFocusValue = false;
  }

  handleChange(event: any): void {
    if (event.target.value) {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
    
    this.currentValue = event.target.value;
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

  writeValue(value: string | number): void {
    this.initializeValue(value);
    this.cdRef.markForCheck();
  }

  private initializeValue(value: string | number): void {
    this.currentValue = value;
    if (value) { this.onTouch(); }
  }

}
