import { TestBed, inject } from '@angular/core/testing';

import { DeletecustomerService } from './deletecustomer.service';

describe('DeletecustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletecustomerService]
    });
  });

  it('should be created', inject([DeletecustomerService], (service: DeletecustomerService) => {
    expect(service).toBeTruthy();
  }));
});
