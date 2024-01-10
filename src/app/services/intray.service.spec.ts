import { TestBed } from '@angular/core/testing';

import { IntrayService } from './intray.service';

describe('IntrayService', () => {
  let service: IntrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
