import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ObrasRandom } from 'src/app/modules/lista-autores/interfaces/obrasRandom.interface';
import { AutoresService } from 'src/app/modules/lista-autores/services/autores.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  obrasAzar: ObrasRandom [] = [];

  constructor(private autoresServicio: AutoresService,
    private http: HttpClient,
    private router: Router,
    private authServices: AuthService){}

  ngOnInit(): void {
    this.obrasRandom();
  }
    
  obrasRandom()
  {
    this.autoresServicio.listaRandom().subscribe(data => {
      this.obrasAzar = data;
    })
  }

  favoritos()
  {
    this.router.navigate(['/favoritos/lista']);
  }

  listaAutores()
  {
    this.router.navigate(['/autores/lista']);
  }

  logOut()
  {
    this.authServices.logout();
    this.router.navigate(['/auth/login']);
  }

}
