import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/admin').then(m => m.DashboardModule),
      },
      {
        path: 'grafical',
        loadChildren: () => import('@features/admin').then(m => m.GraficalModule),
      },
      {
        path: 'progress',
        loadChildren: () => import('@features/admin').then(m => m.ProgressModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
