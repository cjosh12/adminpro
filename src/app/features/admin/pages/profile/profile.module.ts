import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { ProfileFormComponent } from './components/profile-form';
import {
  BtnComponent,
  InputTextComponent,
  TitleCardComponent,
} from '@shared/components';

@NgModule({
  declarations: [ProfileComponent, ProfileFormComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TitleCardComponent,
    InputTextComponent,
    BtnComponent,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {}
