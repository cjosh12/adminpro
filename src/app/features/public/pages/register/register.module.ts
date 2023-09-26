import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components';
import { BtnComponent, EyeBtnComponent } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomLabelDirective } from '@shared/directives';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    EyeBtnComponent,
    BtnComponent,
    ReactiveFormsModule,
    CustomLabelDirective,
  ]
})
export class RegisterModule { }
