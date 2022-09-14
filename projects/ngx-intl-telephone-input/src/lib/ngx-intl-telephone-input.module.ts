import { NgModule } from '@angular/core';
import { NgxIntlTelephoneInputComponent } from './ngx-intl-telephone-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxIntlTelephoneInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    NgxIntlTelephoneInputComponent
  ]
})
export class NgxIntlTelephoneInputModule { }
