import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiomesRoutingModule } from './biomes-routing.module';
import { BiomesComponent } from './biomes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  BtnComponent,
  InputTextComponent,
  TitleCardComponent,
} from '@shared/components';
import { ReactiveFormsModule } from '@angular/forms';
import { BiomesFormComponent } from './components/biomes-forms/biomes-form.component';

@NgModule({
  declarations: [BiomesComponent, BiomesFormComponent],
  imports: [
    CommonModule,
    BiomesRoutingModule,
    FontAwesomeModule,
    BtnComponent,
    ReactiveFormsModule,
    InputTextComponent,
    TitleCardComponent,
  ],
})
export class BiomesModule {}
