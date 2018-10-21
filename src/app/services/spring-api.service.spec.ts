import { TestBed } from '@angular/core/testing';

import { SpringApiService } from './spring-api.service';

describe('SpringApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringApiService = TestBed.get(SpringApiService);
    expect(service).toBeTruthy();
  });
});
