import { TestBed, inject } from '@angular/core/testing';

import { MatcherServiceService } from './matcher-service.service';

describe('MatcherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatcherServiceService]
    });
  });

  it('should be created', inject([MatcherServiceService], (service: MatcherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
