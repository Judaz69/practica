import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrasRoutingModule } from './obras-routing.module';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    FavoritosComponent
  ],
  exports:[
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    ObrasRoutingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatSnackBarModule
  ]
})
export class  ObrasFavoritasModule { }
