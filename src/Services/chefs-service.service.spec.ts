import { TestBed } from '@angular/core/testing';

import { ChefsServiceService } from './chefs-service.service';

describe('ChefsServiceService', () => {
  let service: ChefsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
