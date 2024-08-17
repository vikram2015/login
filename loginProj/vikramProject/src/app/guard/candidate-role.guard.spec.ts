import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { candidateRoleGuard } from './candidate-role.guard';

describe('candidateRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => candidateRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
