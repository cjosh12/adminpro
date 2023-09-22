import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { ApiService, LocalStorageService } from '@core/services';
import { LoginForm, LoginResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);

  private setAuthentication(reply: LoginResponse) {
    this.localStorageService.setItem('token', reply.token);
  }

  sendLogin(loginForm: LoginForm): Observable<any> {
    return this.apiService
      .store<LoginResponse>('auth/login', loginForm)
      .pipe(
        map( ({reply}) => this.setAuthentication(reply)),
        catchError((error) => throwError(() => error.error.message))
      );
  }
}