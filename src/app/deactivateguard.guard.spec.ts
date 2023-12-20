import { TestBed } from '@angular/core/testing';

import { DeactivateguardGuard } from './deactivateguard.guard';

describe('DeactivateguardGuard', () => {
  let guard: DeactivateguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
