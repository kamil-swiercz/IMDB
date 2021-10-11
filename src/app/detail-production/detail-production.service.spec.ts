import { TestBed } from '@angular/core/testing';

import { DetailProductionService } from './detail-production.service';

describe('DetailProductionService', () => {
  let service: DetailProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
