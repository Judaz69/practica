import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../dashboard/pages/inicio/inicio.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent,
    children: [
      {path:'lista',component: FavoritosComponent}
    ]
  }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ObrasRoutingModule { }
