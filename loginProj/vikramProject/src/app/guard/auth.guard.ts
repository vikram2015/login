import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let routes = inject(Router);
  let userAuth = localStorage.getItem('access_token');
  if(!userAuth){
    routes.navigate(['login']);
    return false;
  }
  return true;
};
