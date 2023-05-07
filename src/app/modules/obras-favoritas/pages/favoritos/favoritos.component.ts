import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Obras } from 'src/app/modules/lista-autores/interfaces/obras.interface';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html'
})
export class FavoritosComponent implements OnInit {

  favoritos: Obras[] = [];
  page_size: number = 3;
  page_number: number = 1;
  pageSizeOp = [10, 20];
  load: boolean = true;
  color: ThemePalette = 'primary';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarFav();
  }

  listarFav() {
    const data = JSON.parse(localStorage.getItem('favoritos') || '[]');
    this.favoritos = Object.values(data)
    .map((obra : any) => {
      const lineas = obra.lines.slice(0, 3).join("\n");
      return {...obra, lines: lineas};
    });
    this.load = false;
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  borrarFav(data: Obras) {
    const datosfav = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const index = datosfav.findIndex((item: Obras) => item.title === data.title);

    if (index > -1) {
      datosfav.splice(index, 1);
      localStorage.setItem('favoritos', JSON.stringify(datosfav));
      this._snackBar.open('La obra fue quitada de la lista', 'cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
    }

    this.listarFav();
  }

}
