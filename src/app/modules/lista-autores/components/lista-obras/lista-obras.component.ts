import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Obras } from '../../interfaces/obras.interface';
import { AutoresService } from '../../services/autores.service';
import { PageEvent } from '@angular/material/paginator';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-lista-obras',
  templateUrl: './lista-obras.component.html'
})
export class ListaObrasComponent implements OnInit {

  obras: Obras[] = [];
  page_size: number = 3;
  page_number: number = 1;
  pageSizeOp = [10, 20];
  load: boolean = true;
  color: ThemePalette = 'primary';

  constructor(@Inject(MAT_DIALOG_DATA) public autor: string, private autorService: AutoresService) { }

  ngOnInit(): void {
    this.listaObras();
  }

  listaObras() {
    console.log(this.autor);
    this.autorService.listaObras(this.autor).subscribe(data => {
      this.obras = data;
      this.load = false;
    })
  }

  favoritos(data: Obras) {
    const datosfav = JSON.parse(localStorage.getItem('favoritos')  || '[]');
    const existe = datosfav.some((obra: Obras) => obra.title === data.title);

    if (datosfav === null) {
      localStorage.setItem('favoritos', JSON.stringify(data));
    }

    if (existe) {
      console.log('ya existe');
    }
    else 
    {
      datosfav.push(data)
      const favNuevo = JSON.stringify(datosfav)
      localStorage.setItem('favoritos', favNuevo);
    }
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;

  }
}
