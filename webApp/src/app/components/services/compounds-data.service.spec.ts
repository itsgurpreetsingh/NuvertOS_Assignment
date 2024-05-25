import { TestBed } from '@angular/core/testing';

import { CompoundsDataService } from './compounds-data.service';

describe('CompoundsDataService', () => {
  let service: CompoundsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompoundsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
