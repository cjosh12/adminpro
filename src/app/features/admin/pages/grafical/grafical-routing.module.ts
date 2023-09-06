import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraficalComponent } from './grafical.component';

const routes: Routes = [
  { path: '', component: GraficalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficalRoutingModule { }
