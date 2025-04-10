import { TestBed } from '@angular/core/testing';

import { ContribuidorService } from './contribuidor.service';

describe('ContribuidorService', () => {
  let service: ContribuidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContribuidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
