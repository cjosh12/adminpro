import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core';

const routes: Routes = [
    {
      path: 'auth',
      canActivate: [publicGuard],
        loadChildren:() => import('@features/public').then(m => m.PublicModule),
    },
    {
        path: 'dashboard',
        canActivate: [privateGuard],
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
  export class AppRoutingModule {}