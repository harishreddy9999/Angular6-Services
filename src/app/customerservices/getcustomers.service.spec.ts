import { TestBed, inject } from '@angular/core/testing';

import { GetcustomersService } from './getcustomers.service';

describe('GetcustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcustomersService]
    });
  });

  it('should be created', inject([GetcustomersService], (service: GetcustomersService) => {
    expect(service).toBeTruthy();
  }));
});
