import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './pages/autores/autores.component';
import { InicioComponent } from '../dashboard/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent,
    children: [
      {path:'lista',component: AutoresComponent}
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
export class ListaAutoresRoutingModule { }
