import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// THIRD-PARTY PKGS
import { getAsYouType, getExample } from 'awesome-phonenumber';

// ENUMS
import { CountryISO } from '../data/country-iso.enum';
import { SearchCountryField } from '../data/searchCountryField.enum';
import { PhoneNumberFormat } from '../data/phoneNumberFormat.enum';

// MODELS
import { Country, InputValue } from '../models/country';

// DATA SET
import { countryData } from '../data/allCountries';

// ASSETS
import { dropdownOpen, dropdownClose, flagPlaceholder } from '../assets/base64';

@Component({
  selector: 'intl-telephone-input',
  templateUrl: './ngx-intl-telephone-input.html',
  styleUrls: ['./ngx-intl-telephone-input.css']
})
export class NgxIntlTelephoneInputComponent implements OnInit {

  @Input() cssClass: string = '';
  @Input() preferredCountries: (CountryISO)[] = [];
  @Input() onlyCountries: (CountryISO)[] = [];
  @Input() enableAutoCountrySelect: boolean = true;
  @Input() enablePlaceholder: boolean = true;
  @Input() customPlaceholder: string | null = null;
  @Input() numberFormat: PhoneNumberFormat = PhoneNumberFormat.International;
  @Input() searchCountryFlag: boolean = false;
  @Input() searchCountryField: SearchCountryField = SearchCountryField.All;
  @Input() searchCountryPlaceholder: string = 'Search Country';
  @Input() maxLength: number | null = null;
  @Input() selectFirstCountry: boolean = true;
  @Input() phoneValidation: boolean = true;
  @Input() inputId: string = 'phone';
  @Input() selectedCountryISO: CountryISO | null = null;
  @Input() separateDialCode: boolean = false;
  @Output() onChange: EventEmitter<InputValue> = new EventEmitter<InputValue>();

  public allCountries: (Country)[];
  public selectedCountry: Country;
  public countriesToShow: (Country)[];
  public preferredCountriesList: (Country)[];
  public searchFilter: string;
  public scrollTimeout: any;
  public phoneNumber: any;
  public isFocused: boolean;
  public isInputValid: boolean;
  public isDropdownOpen: boolean = false;

  constructor() {
    this.allCountries = [];
    this.countriesToShow = this.allCountries;
    this.selectedCountry = this.getDefaultCountry();
    this.preferredCountriesList = [];
    this.searchFilter = '';
    this.phoneNumber = null;
    this.isFocused = false;
    this.isInputValid = true;
  }

  ngOnInit(): void {
    this.generateCountryData();
    this.setCountriesToShow();
    this.setPreferredCountries();
    this.setDefaultSelectedCountry();
  }

  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public generateCountryData() {
    var crypto = window.crypto;
    const typedArray = new Uint32Array(1);
    crypto.getRandomValues(typedArray);

    const componentId = typedArray[0];

    const temp: (Country)[] = countryData.map(con => {
      return {
        name: con[1].toString(),
        iso2: con[2].toString(),
        dialCode: con[3].toString(),
        priority: +con[4] || 0,
        areaCodes: (con[5] as string[]) || undefined,
        htmlId: `${componentId}-${con[2].toString()}`,
        flagClass: con[0].toString(),
        placeHolder: '',
      }
    });

    this.allCountries = temp;
    this.countriesToShow = this.allCountries;
  }

  public getDefaultCountry(): Country {
    return {
      "name": "",
      "iso2": "",
      "dialCode": "",
      "priority": 0,
      "htmlId": "",
      "flagClass": flagPlaceholder,
      "placeHolder": "",
    };
  }

  public phoneValueChnaged(event: any) {
    this.formatPhoneNumber();
    this.onChange.emit({
      phoneNumber: this.phoneNumber,
      selectedCountry: this.selectedCountry.name,
      iso2Code: this.selectedCountry.iso2,
      dialCode: this.selectedCountry.dialCode,
      numberFormat: this.numberFormat,
      isNumberValid: this.isInputValid,
    });
  }

  private formatIntelNumber(number: string): string {
    const indexToSplit = number.indexOf(' ') + 1;
    return this.separateDialCode ? number.substring(indexToSplit) : number;
  }

  public formatPhoneNumber() {
    const ayt = getAsYouType(this.selectedCountry.iso2.toUpperCase());
    ayt.reset(this.phoneNumber);
    const res: any = ayt.getPhoneNumber();

    if (this.numberFormat == "INTERNATIONAL") {
      this.phoneNumber = res.g.number.international ? this.formatIntelNumber(res.g.number.international) : this.phoneNumber;
    } else {
      this.phoneNumber = res.g.number.national ? res.g.number.national : this.phoneNumber;
    }

    if (this.numberFormat == "INTERNATIONAL" && this.enableAutoCountrySelect && res.g.regionCode != this.selectedCountry.iso2.toUpperCase()) {
      res.g.regionCode && (this.selectedCountry = this.findCountryByIso2(res.g.regionCode));
    }

    if (!res.g.valid || res.g.regionCode != this.selectedCountry.iso2.toUpperCase()) {
      this.isInputValid = false;
    } else {
      this.isInputValid = true;
    }
  }

  public searchFilterChnaged(event: any) {
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);

    let filtered: Country[];
    if (this.searchCountryField == 'name') {
      filtered = this.countriesToShow.filter(con => con.name.toLowerCase().startsWith(this.searchFilter.toLowerCase()));
    } else if (this.searchCountryField == 'iso2') {
      filtered = this.countriesToShow.filter(con => con.iso2.startsWith(this.searchFilter.toLowerCase()));
    } else if (this.searchCountryField == 'dialCode') {
      filtered = this.countriesToShow.filter(con => con.dialCode.startsWith(this.searchFilter));
    } else {
      filtered = this.countriesToShow.filter(con => con.name.toLowerCase().startsWith(this.searchFilter.toLowerCase()) || con.dialCode.startsWith(this.searchFilter) || con.iso2.startsWith(this.searchFilter.toLowerCase()));
    }

    if (!filtered.length) return;
    this.scrollTimeout = setTimeout(() => {
      const el: any = document.getElementById(filtered[0].htmlId);
      el.scrollIntoView();
    }, 1);
  }

  private findCountryByIso2(iso2: string): Country | any {
    console.log(iso2);
    return this.countriesToShow.find(con => con.iso2 == iso2.toLowerCase());
  }

  public setDefaultSelectedCountry() {
    if (this.selectedCountryISO) {
      this.selectedCountry = this.findCountryByIso2(this.selectedCountryISO);
    }
    else if (this.selectFirstCountry) {
      if (this.preferredCountriesList.length) this.selectedCountry = this.preferredCountriesList[0];
      else this.selectedCountry = this.countriesToShow[0];
    }
    else this.selectedCountry = this.getDefaultCountry();

    this.selectedCountry.placeHolder = this.getPlaceHolder();
  }

  public setCountriesToShow() {
    if (this.onlyCountries.length == 0) return;

    const temp: any = [];
    for (let country of this.onlyCountries) {
      temp.push(this.allCountries.find(con => con.iso2 == country));
    }

    this.countriesToShow = temp;
  }

  public setPreferredCountries() {
    for (let country of this.preferredCountries) {
      const temp = this.countriesToShow.find(con => con.iso2 == country);
      if (temp) this.preferredCountriesList.push(temp);
    }
  }

  public onCountrySelect(country: any) {
    this.selectedCountry = country;
    this.selectedCountry.placeHolder = this.getPlaceHolder();
    this.searchFilter = '';
    this.phoneNumber = '';
    this.isInputValid = true;
    this.isFocused = false;
    this.toggleDropdown();
  }

  private getNumberExample(): string {
    const formatExampleNumber = (number: string): string => {
      const temp = [...number].map(char => char == ' ' ? ' ' : (char == '+' ? '+' : 'X'));
      return temp.join('');
    }

    const exampleNumber = this.numberFormat == "INTERNATIONAL" ? this.formatIntelNumber(getExample(this.selectedCountry.iso2.toUpperCase(), 'mobile').getNumber('international')) : getExample(this.selectedCountry.iso2.toUpperCase(), 'mobile').getNumber('national');
    return formatExampleNumber(exampleNumber);
  }

  public getPlaceHolder(): string {
    if (!this.enablePlaceholder) return '';
    if (this.customPlaceholder) return this.customPlaceholder;
    if (this.selectedCountry.iso2 == '') return '';

    return this.getNumberExample();
  }

  public getDropdownIconPath(): string {
    return this.isDropdownOpen ? dropdownClose : dropdownOpen;
  }

  public onPhoneInputFocus() {
    if (this.isFocused || (this.separateDialCode && this.numberFormat == "INTERNATIONAL") || this.numberFormat == "NATIONAL") return;
    this.phoneNumber = '+' + this.selectedCountry.dialCode + ' ';
    this.isFocused = true;
  }
}
