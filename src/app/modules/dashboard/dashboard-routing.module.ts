import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from '../lista-autores/pages/autores/autores.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:'inicio',component: InicioComponent}
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
export class DashboardRoutingModule { }
