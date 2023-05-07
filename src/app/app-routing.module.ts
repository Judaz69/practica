import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuhtGuard } from './guards/auht.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('./modules/lista-autores/lista-autores.module').then( m => m.ListaAutoresModule),
    canActivate: [AuhtGuard],
        canLoad: [AuhtGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./modules/obras-favoritas/obras-favoritas.module').then( m => m.ObrasFavoritasModule),
    canActivate: [AuhtGuard],
    canLoad: [AuhtGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule),
    canActivate: [AuhtGuard],
    canLoad: [AuhtGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
