import { CanActivateFn } from '@angular/router';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem('role');
  let access = role?.includes('hr') ? true : false;
  return access;
};
