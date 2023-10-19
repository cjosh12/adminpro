import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietsRoutingModule } from './diets-routing.module';
import { DietsComponent } from './diets.component';


@NgModule({
  declarations: [
    DietsComponent
  ],
  imports: [
    CommonModule,
    DietsRoutingModule
  ]
})
export class DietsModule { }
