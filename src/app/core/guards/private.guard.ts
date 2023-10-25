import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '@features/public';

export const privateGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.authStatus() === 'authenticated') 
  return true;

  router.navigateByUrl('/');
  return false;
};