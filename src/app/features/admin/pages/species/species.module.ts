import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesFormComponent } from './components/species-form/species-form.component';
import { SpeciesComponent } from './species.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent, InputTextComponent, TitleCardComponent } from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesFormComponent,
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    FontAwesomeModule,
    BtnComponent,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent
  ]
})
export class SpeciesModule { }
