import { TestBed, inject } from '@angular/core/testing';

import { EditcustomerService } from './editcustomer.service';

describe('EditcustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditcustomerService]
    });
  });

  it('should be created', inject([EditcustomerService], (service: EditcustomerService) => {
    expect(service).toBeTruthy();
  }));
});
