import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxIntlTelephoneInputModule } from 'ngx-intl-telephone-input'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIntlTelephoneInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
