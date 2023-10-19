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
        path: 'animals',
        loadChildren: () => import('@features/admin').then(m => m.AnimalsModule),
      },
      {
        path: 'progress',
        loadChildren: () => import('@features/admin').then(m => m.ProgressModule),
      },
      {
        path: 'user-profile',
        loadChildren: () => import('@features/admin').then(m => m.ProfileModule),
      },
      {
        path: 'species',
        loadChildren: () => import('@features/admin').then(m => m.SpeciesModule),
      },
      {
        path: 'biomes',
        loadChildren: () => import('@features/admin').then(m => m.BiomesModule),
      },
      {
        path: 'diets',
        loadChildren: () => import('@features/admin').then(m => m.DietsModule),
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
