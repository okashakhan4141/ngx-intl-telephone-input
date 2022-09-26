export interface Country {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    areaCodes?: string[];
    htmlId: string;
    flagClass: string;
    placeHolder: string;
}

export interface InputValue {
    phoneNumber: string,
    selectedCountry: string,
    iso2Code: string,
    dialCode: string,
    numberFormat: string,
    isNumberValid: boolean,
}
