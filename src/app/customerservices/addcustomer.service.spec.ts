import { TestBed, inject } from '@angular/core/testing';

import { AddcustomerService } from './addcustomer.service';

describe('AddcustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddcustomerService]
    });
  });

  it('should be created', inject([AddcustomerService], (service: AddcustomerService) => {
    expect(service).toBeTruthy();
  }));
});
