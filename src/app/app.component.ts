import { Component } from '@angular/core';
import { CountryISO, PhoneNumberFormat, SearchCountryField, CustomAsset } from 'ngx-intl-telephone-input';

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
  public customAssets: (CustomAsset)[];

  class = 'flag__pk';

  constructor() {
    this.CountryISO = CountryISO;
    this.PhoneNumberFormat = PhoneNumberFormat;
    this.SearchCountryField = SearchCountryField;
    this.customAssets = [
      {
        country: CountryISO.Pakistan,
        asset: 'https://img.icons8.com/emoji/48/000000/pakistan-emoji.png',
      },
      {
        country: CountryISO.India,
        asset: 'https://img.icons8.com/doodle/48/000000/india.png',
      }
    ];


  }

  public onInputChange(event: any) {
    console.log(event);
  }
}
