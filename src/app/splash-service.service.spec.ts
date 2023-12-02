import { TestBed } from '@angular/core/testing';

import { SplashServiceService } from './splash-service.service';

describe('SplashServiceService', () => {
  let service: SplashServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplashServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
