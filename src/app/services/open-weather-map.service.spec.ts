import { TestBed } from '@angular/core/testing';

import { OpenWeatherMapService } from './open-weather-map.service';

describe('OpenweathermapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenWeatherMapService = TestBed.get(OpenWeatherMapService);
    expect(service).toBeTruthy();
  });
});
