import { Component } from '@angular/core';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-telephone-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-intl-telephone-input';

  public CountryISO: any;
  public PhoneNumberFormat: any;
  public SearchCountryField: any;

  constructor() {
    this.CountryISO = CountryISO;
    this.PhoneNumberFormat = PhoneNumberFormat;
    this.SearchCountryField = SearchCountryField;
  }

  public onInputChange(event: any) {
    console.log(event);
  }
}
