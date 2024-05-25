import { TestBed } from '@angular/core/testing';

import { AddcompoundService } from './addcompound.service';

describe('AddcompoundService', () => {
  let service: AddcompoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcompoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
