import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlTelephoneInputComponent } from './ngx-intl-telephone-input.component';

describe('NgxIntlTelephoneInputComponent', () => {
  let component: NgxIntlTelephoneInputComponent;
  let fixture: ComponentFixture<NgxIntlTelephoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIntlTelephoneInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxIntlTelephoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
