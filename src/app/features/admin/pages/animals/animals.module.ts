import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent, InputTextComponent, TitleCardComponent } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnimalsComponent,
    AnimalFormComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    FontAwesomeModule,
    BtnComponent,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent,
  ],
})
export class AnimalsModule { }
