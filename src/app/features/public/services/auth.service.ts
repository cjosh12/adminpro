import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { ApiService, LocalStorageService } from '@core/services';
import { AuthStatus, LoginForm, LoginResponse } from '../models';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //inyecciones
  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);

  //signals privadas
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>('checking');

  //signals publicas
  public CurrentUser = computed(()=>this._currentUser());
  public AuthStatus = computed(()=> this._authStatus());
  
  //metodos
  login(loginForm: LoginForm): Observable<boolean> {
    return this.apiService
      .store<LoginResponse>('auth/login', loginForm)
      .pipe(
        map( ({reply}) => this.setAuthentication(reply)),
        catchError((error) => throwError(() => error.error.message))
      );
  }

  checkAuthStatus() {
    //TODO: Check con el backend
  }

  logout() {
    this.localStorageService.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set('noAuthenticated')
  }

  private setAuthentication(reply: LoginResponse): boolean {
    this._currentUser.set(reply.user);
    this._authStatus.set('authenticated');
    this.localStorageService.setItem('token', reply.token);

    return true
  }
}