import { TestBed, inject } from '@angular/core/testing';

import { GetDynamictemplatesService } from './get-dynamictemplates.service';

describe('GetDynamictemplatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDynamictemplatesService]
    });
  });

  it('should be created', inject([GetDynamictemplatesService], (service: GetDynamictemplatesService) => {
    expect(service).toBeTruthy();
  }));
});
