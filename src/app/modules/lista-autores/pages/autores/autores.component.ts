import { Component, OnInit } from '@angular/core';
import { Autores } from '../../interfaces/autor.interface';
import { AutoresService } from '../../services/autores.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ListaObrasComponent } from '../../components/lista-obras/lista-obras.component';
import { ObrasRandom } from '../../interfaces/obrasRandom.interface';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { ThemePalette } from '@angular/material/core';

interface Author {
  author: string;
}

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html'
})
export class AutoresComponent implements OnInit {

  autores: Autores[] = [];
  authors: string[] = [];
  obrasAzar: ObrasRandom [] = [];
  listaFav : string [] = [];
  load: boolean = true;
  color: ThemePalette = 'primary';

  page_size: number = 10;
  page_number: number = 1; 
  pageSizeOp = [10, 20]; 

  constructor(private autoresServicio: AutoresService,
              private http: HttpClient,
              private dialog: MatDialog,
              private router: Router){}

  ngOnInit(): void {
    this.http.get<{authors: string[]}>('https://poetrydb.org/author').subscribe(data => {
      this.authors = data.authors;
      this.load = false;
    }, error => {
      console.error('Se produjo un error al hacer la solicitud HTTP:', error);
    });

  }

  listarObras(data: string)
  {
    const dialogRef = this.dialog.open(ListaObrasComponent, {
      data,
    });
  }

  handlePage(e: PageEvent)
  {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;

  }

  logOut()
  {
    this.router.navigate(['/auth/login']);
  }

  favoritos()
  {
    this.router.navigate(['/favoritos/lista']);
  }
}



