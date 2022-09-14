# International Telephone Input - Angular (ngx-intl-telephone-input)

## About Package

**ngx-intl-telephone-input** is an **_Angular Plugin_** that validates user's input, provides formatting `(both national and international)` of all international countries phone numbers and returns, input value entered along with validation status on every keystroke. It has a dropdown showing information about country flag, name and dial-code. Depending uopn the options selected, adds placeholder according to selected country and formats the input.

(Refer to [OPTIONS](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/README.md#options) Section for more details!)

![preview-intl-telephone-input](https://user-images.githubusercontent.com/71649242/190262842-94e5d702-e519-470d-818c-b08172ea8ee5.PNG)

## Dependencies

**ngx-intl-telephone-input** has only one dependency, [awesome-phonenumber](https://www.npmjs.com/package/awesome-phonenumber) v3.3.0 for formatting and validating user's input. You need to add this package as well before using _intl-tel-input_.

`You can check it out as well!`

## Installation

You need to add dependency and install package as follows:

```
npm i awesome-phonenumber@3.3.0
npm i ngx-intl-telephone-input
```

> Note: Don't forget to add `awesome-phonenumber@3.3.0` or else it will not work properly.

## Basic Usage

#### Import

Add `NgxIntlTelephoneInputModule` into your module file:

```typescript
import { NgxIntlTelephoneInputModule } from "ngx-intl-telephone-input";
```

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxIntlTelephoneInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Example

```html
<intl-telephone-input
  [preferredCountries]="[CountryISO.Pakistan, CountryISO.India]"
  [enablePlaceholder]="true"
  [searchCountryFlag]="true"
  [separateDialCode]="false"
  [enableAutoCountrySelect]="true"
  [searchCountryField]="SearchCountryField.All"
  [phoneValidation]="false"
  [numberFormat]="PhoneNumberFormat.International"
  [inputId]="'phone'"
  (onChange)="onInputChange($event)"
>
</intl-telephone-input>
```

(Refer to [OPTIONS](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/README.md#options) Section for more details!)

> Note: Don't forget to add [CountryISO](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/country-iso.enum.ts), [SearchCountryField](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/searchCountryField.enum.ts) and [PhoneNumberFormat](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/phoneNumberFormat.enum.ts) enums into your .ts file. Add below line of code to import all of them.

```typescript
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from "ngx-intl-telephone-input";
```

## Options

## Contact Information

**Okasha Khan** - _FullStack JavaScript Developer_

Email me at `okashakhan4141@gmail.com`

LinkedIn Profile -> [https://www.linkedin.com/in/okashakhan4141](https://www.linkedin.com/in/okashakhan4141)

Github Profile -> [https://github.com/okashakhan4141](https://github.com/okashakhan4141)
