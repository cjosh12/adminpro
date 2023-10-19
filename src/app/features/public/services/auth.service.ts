import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';

import { ApiService, LocalStorageService } from '@core/services';
import { LoginForm, LoginResponse, RegisterForm, User , AuthStatus, CheckTokenResponse, RegisterResponse} from '../models';
import { HttpHeaders } from '@angular/common/http';

//inyecciones
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //inyecciones
  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);
  
  //constructor
  constructor() {
    this.checkAuthStatus().subscribe();
  }

  //signal
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>('checking');

  //signal publicas al mundo exterior
  public CurrentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());  

  
  //Metodos
  login(loginForm: LoginForm): Observable<boolean> {
    return this.apiService
      .store<LoginResponse>('auth/login', loginForm)
      .pipe(
        map( ({reply}) => this.setAuthentication(reply.user, reply.token)),
        catchError((error) => throwError(() => error.error.message))
      );
  }
register(registerForm: RegisterForm) {
    const {confirm_password, ...registerBody}= registerForm;
    return this.apiService
      .store<RegisterResponse>('auth/register', registerBody)
      .pipe(catchError((error) => throwError(() => error.error.message)));
}
  
  checkAuthStatus(): Observable<boolean> {
    const token = this.localStorageService.getItem('token');
    
    if (!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token } `);
    
    return this.apiService.getAll<CheckTokenResponse>('auth/check-token', headers)
      .pipe(
        map(({ reply }) =>this.setAuthentication(reply.user, reply.token)),
        catchError(() => {
          this._authStatus.set('noAuthenticated')
          return of(false);
         })
      )
  }
  
  
  //Methodos privados
  logout()  {
    this.localStorageService.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set('noAuthenticated');
  }
  
  private setAuthentication(user:User, token :string): boolean {
    this._currentUser.set(user);
    this._authStatus.set('authenticated');
    this.localStorageService.setItem('token', token);
    

    return true;
  }
}