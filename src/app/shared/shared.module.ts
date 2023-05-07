import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorPipe } from './pipes/paginator.pipe';



@NgModule({
  declarations: [
    PaginatorPipe
  ],
  exports: [
    PaginatorPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
