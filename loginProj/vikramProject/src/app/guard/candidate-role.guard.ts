import { CanActivateFn } from '@angular/router';

export const candidateRoleGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem('role');
  let access = role?.includes('candidate') ? true : false;
  return access;
};
