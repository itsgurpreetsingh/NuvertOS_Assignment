import { TestBed } from '@angular/core/testing';

import { DeleteCompoundService } from './delete-compound.service';

describe('DeleteCompoundService', () => {
  let service: DeleteCompoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCompoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
