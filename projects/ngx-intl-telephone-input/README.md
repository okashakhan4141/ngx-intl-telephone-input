# International Telephone Input - Angular (ngx-intl-telephone-input)

## About Package

**ngx-intl-telephone-input** is an **_Angular Plugin_** that validates user's input, provides formatting `(both national and international)` of all international countries phone numbers and returns, input value entered along with validation status on every keystroke. It has a dropdown showing information about country flag, name and dial-code. Depending uopn the options selected, adds placeholder according to selected country and formats the input.

(Refer to [OPTIONS](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/README.md#options) Section for more details)

![preview-intl-telephone-input](https://user-images.githubusercontent.com/71649242/190262842-94e5d702-e519-470d-818c-b08172ea8ee5.PNG)

## Dependencies

**ngx-intl-telephone-input** has only one dependency, [awesome-phonenumber](https://www.npmjs.com/package/awesome-phonenumber) v3.3.0 for formatting and validating user's input. You need to add this package as well before using _intl-tel-input_.

## Comparison with other libraries

Although, there are a lot of packages out there but this package has a slight advantange over them. The `first` one being dependencies. The package is inspired by [NgxIntlTelInput](https://www.npmjs.com/package/ngx-intl-tel-input) `(Do check them as well)` that has 2 dependencies but this package has only 1 dependency and that too for formatting and validations.

The `second` one is the way **ngx-intl-telephone-input** formats user input. For example when user inputs any number, the formatter formats the user input based on `NATIONAL OR INTERNATIONAL` (according to selection) and checks the validation of input on evry keystroke and gives feedback to user as well.

> Please refer to [DEMO](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/README.md#demo) section for more insights!

## Supported Phone Formats

This package supports only national and international formats for phone number formatting and validation.

```
NATIONAL -> (0321 1234567)
INTERNATIONAL -> (+92 321 1234567)
```

## Demo

Click [HERE](https://www.loom.com/share/39b2c100af224e7e91aa642c13e0141b) to watch the demo video.

> Note: This Demo video is recorded with specific options. The main idea is to highlight the formatting and validation.

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

(Refer to [OPTIONS](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/README.md#options) Section for more details)

> Note: Don't forget to add [CountryISO](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/country-iso.enum.ts), [SearchCountryField](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/searchCountryField.enum.ts) and [PhoneNumberFormat](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/phoneNumberFormat.enum.ts) enums into your .ts file. Add below line of code to import all of them.

```typescript
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from "ngx-intl-telephone-input";
```

#### Output Sample

`onChange()` will emit such an event on every keystroke.

```json
{
  "phoneNumber": "+92 304 6219062",
  "selectedCountry": "Pakistan (‫پاکستان‬‎)",
  "iso2Code": "pk",
  "dialCode": "92",
  "numberFormat": "INTERNATIONAL",
  "isNumberValid": true
}
```

## Options

| Sr. | Parameters               | Data Type                  | Default Value                     | Description                                                                                                                                  |
| --- | ------------------------ | -------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | cssClass                 | `string`                   | `'' `                             | Custom CSS Class that'll be added to main container.                                                                                         |
| 02  | preferredCountries       | `(CountryISO)[]`           | `[]`                              | List of countries, that will appear at the top saperated by horizental line from all countries.                                              |
| 03  | onlyCountries            | `(CountryISO)[]`           | `[]`                              | List of countries, that will appear in the dropdown. Preferred countries will depends upon this list.                                        |
| 04  | enableAutoCountrySelect  | `boolean`                  | `true`                            | If `true` and `INTERNATIONAL` format is enabled, will detect and will automatically change the selected country according to number entered. |
| 05  | enablePlaceholder        | `boolean`                  | `true`                            | If true, Enables and sets Input placeholder text, according to the country selected.                                                         |
| 06  | customPlaceholder        | `string \| null`           | `null`                            | Custom string to be inserted as a placeholder in phone number Input tag.                                                                     |
| 07  | numberFormat             | `PhoneNumberFormat`        | `PhoneNumberFormat.International` | Enables `NATIONAL` or `INTERNATIONAL` formatting.                                                                                            |
| 08  | searchCountryFlag        | `boolean`                  | `false`                           | Enables search Input for countries in the dropdown.                                                                                          |
| 09  | searchCountryField       | `SearchCountryField`       | `SearchCountryField.All`          | Allows to search country by name, dial-code, iso2 and by all if searchCountryFlag is enabled. Use SearchCountryField enum.                   |
| 10  | searchCountryPlaceholder | `string`                   | `'Search Country'`                | Sets placeholder for search country Input.                                                                                                   |
| 11  | maxLength                | `number \| null`           | `null`                            | Maximum characters allowed in input.                                                                                                         |
| 12  | selectFirstCountry       | `boolean`                  | `true`                            | Selects first country from preferredCountries if it is set. If not then uses main list.                                                      |
| 13  | phoneValidation          | `boolean`                  | `true`                            | Toggle validation on user input. If `true`, will give feedback to user on every keystroke.                                                   |
| 14  | inputId                  | `string`                   | `'phone'`                         | Unique ID for Input tag in html.                                                                                                             |
| 15  | selectedCountryISO       | `CountryISO \| null`       | `null`                            | Set specified country on load.                                                                                                               |
| 16  | separateDialCode         | `boolean`                  | `false`                           | Saperate Dial code from user input and will appear next to country flag.                                                                     |
| 17  | onChange                 | `EventEmitter<InputValue>` | `new EventEmitter<InputValue>`    | Emits input value entered along with validation staus on every keystroke.                                                                    |

> Note: Please refer to [CountryISO](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/country-iso.enum.ts), [SearchCountryField](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/searchCountryField.enum.ts), [PhoneNumberFormat](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/master/projects/ngx-intl-telephone-input/src/data/phoneNumberFormat.enum.ts) and [InputValue](https://github.com/okashakhan4141/ngx-intel-telephone-input/blob/main/projects/ngx-intl-telephone-input/src/models/country.ts) to get more idea.

## Contributions

- Fork repository
- Update ./projects/ngx-intl-telephone-input (Add features/Resolve Bugs)
- Build and test the library
- Update ./src/app component with new functionality
- Update README.md
- Create pull request

## Contact Information

_OKASHA_ **_KHAN_** | _FullStack JavaScript Developer_

- :email: : `okashakhan4141@gmail.com`
- LinkedIn Profile : [https://www.linkedin.com/in/okashakhan4141](https://www.linkedin.com/in/okashakhan4141)
- Github Profile : [https://github.com/okashakhan4141](https://github.com/okashakhan4141)
