import { TestBed } from '@angular/core/testing';

import { DigitalBookServiceService } from './digital-book-service.service';

describe('DigitalBookServiceService', () => {
  let service: DigitalBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
