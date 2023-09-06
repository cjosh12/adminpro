import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components';
import { BtnComponent, EyeBtnComponent } from '@shared/components';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BtnComponent,
    EyeBtnComponent,
    FontAwesomeModule,
  ]
})
export class LoginModule { }
