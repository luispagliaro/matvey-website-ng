import { TestBed, inject } from '@angular/core/testing';

import { DiscographyService } from './discography.service';

describe('DiscographyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscographyService]
    });
  });

  it('should ...', inject([DiscographyService], (service: DiscographyService) => {
    expect(service).toBeTruthy();
  }));
});
