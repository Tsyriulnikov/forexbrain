import { TestBed } from '@angular/core/testing';

import { Ml1Service } from './ml1.service';

describe('Ml1Service', () => {
  let service: Ml1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ml1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
