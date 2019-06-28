import { TestBed } from '@angular/core/testing';

import { CurrencyConversionsService } from './currency-conversions.service';

describe('CurrencyConversionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyConversionsService = TestBed.get(CurrencyConversionsService);
    expect(service).toBeTruthy();
  });
});
