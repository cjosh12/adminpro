import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficalRoutingModule } from './grafical-routing.module';
import { GraficalComponent } from './grafical.component';


@NgModule({
  declarations: [
    GraficalComponent
  ],
  imports: [
    CommonModule,
    GraficalRoutingModule
  ]
})
export class GraficalModule { }
