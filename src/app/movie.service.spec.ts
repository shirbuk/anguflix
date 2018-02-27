import { TestBed, inject } from '@angular/core/testing';

import { MoviesService } from './movie.service';

describe('MoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesService]
    });
  });

  it('should be created', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
