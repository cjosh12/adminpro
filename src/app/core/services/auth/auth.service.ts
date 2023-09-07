import { Injectable } from '@angular/core';

import { LoginForm } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sendLogin(loginForm: LoginForm) {
    console.log(loginForm);
  }

}