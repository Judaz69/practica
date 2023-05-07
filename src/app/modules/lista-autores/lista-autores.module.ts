import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresComponent } from './pages/autores/autores.component';
import { ListaAutoresRoutingModule } from './lista-autores-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ListaObrasComponent } from './components/lista-obras/lista-obras.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AutoresComponent,
    ListaObrasComponent
  ],
  imports: [
    CommonModule,
    ListaAutoresRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class ListaAutoresModule { }
