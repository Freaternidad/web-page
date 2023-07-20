import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWrapInputComponent } from './form-wrap-input.component';

describe('FormWrapInputComponent', () => {
  let component: FormWrapInputComponent;
  let fixture: ComponentFixture<FormWrapInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWrapInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWrapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
