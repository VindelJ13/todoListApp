import { TestBed } from '@angular/core/testing';

import { SomedayService } from './someday.service';

describe('SomedayService', () => {
  let service: SomedayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomedayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
