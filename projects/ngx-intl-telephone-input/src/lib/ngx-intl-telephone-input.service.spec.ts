import { TestBed } from '@angular/core/testing';

import { NgxIntlTelephoneInputService } from './ngx-intl-telephone-input.service';

describe('NgxIntlTelephoneInputService', () => {
  let service: NgxIntlTelephoneInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIntlTelephoneInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
