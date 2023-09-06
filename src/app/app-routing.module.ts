import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/public').then(m => m.PublicModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@features/admin').then(m => m.AdminModule),
  },
  {
    path: '404',
    loadComponent: () => import('@shared/pages').then(c => c.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
