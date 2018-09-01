import { TestBed, inject } from '@angular/core/testing';

import { ImdbApiService } from './imdb-api.service';

describe('ImdbApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImdbApiService]
    });
  });

  it('should be created', inject([ImdbApiService], (service: ImdbApiService) => {
    expect(service).toBeTruthy();
  }));
});
