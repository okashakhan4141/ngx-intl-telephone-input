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

```
import { NgxIntlTelephoneInputModule } from 'ngx-intl-telephone-input'
```

```
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
```

#### Example

```
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

```
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-telephone-input';
```

## Options

Run `ng generate component component-name --project ngx-intl-telephone-input` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-intl-telephone-input`.

> Note: Don't forget to add `--project ngx-intl-telephone-input` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-intl-telephone-input` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-intl-telephone-input`, go to the dist folder `cd dist/ngx-intl-telephone-input` and run `npm publish`.

## Running unit tests

Run `ng test ngx-intl-telephone-input` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
