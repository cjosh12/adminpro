import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';

import { ApiService, LocalStorageService } from '@core/services';
import {
  AuthStatus,
  CheckTokenResponse,
  LoginForm,
  LoginResponse,
  User,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Signals privadas
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>('checking');

  //signal publicas al mundo exterior
  public CurrentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  // Inyecciones
  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);

  // Constructor
  constructor() {
    this.checkAuthStatus().subscribe();
  }

  // Métodos
  login(loginForm: LoginForm): Observable<boolean> {
    return this.apiService.store<LoginResponse>('auth/login', loginForm).pipe(
      map(({ reply }) => this.setAuthentication(reply.user, reply.token)),
      catchError((error) => throwError(() => error.error.message))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const token = this.localStorageService.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.apiService
      .getAll<CheckTokenResponse>('auth/check-token', headers)
      .pipe(
        map(({ reply }) => this.setAuthentication(reply.user, reply.token)),
        catchError(() => {
          this._authStatus.set('noAuthenticated');
          return of(false);
        })
      );
  }

  logout() {
    this.localStorageService.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set('noAuthenticated');
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set('authenticated');
    this.localStorageService.setItem('token', token);

    return true;
  }
}