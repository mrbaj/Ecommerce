import { TestBed } from '@angular/core/testing';

import { CircleCardService } from './circle-card.service';

describe('CircleCardService', () => {
  let service: CircleCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
