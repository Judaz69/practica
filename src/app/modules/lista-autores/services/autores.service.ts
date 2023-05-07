import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autores } from '../interfaces/autor.interface';
import { Observable } from 'rxjs';
import { Obras } from '../interfaces/obras.interface';
import { ObrasRandom } from '../interfaces/obrasRandom.interface';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  apiUrl: string = 'https://poetrydb.org';

  constructor(private http: HttpClient) { }

  listaAutores(): Observable<Autores[]>
  {
    const url = `${this.apiUrl}/author`;

    return this.http.get<Autores[]>(url);
  }

  listaObras(nombre: string): Observable<Obras[]> 
  {
    const url = `${this.apiUrl}/author/${nombre}`;
    return this.http.get<Obras[]>(url);
  }

  listaRandom(): Observable<ObrasRandom[]> 
  {
    const url = `${this.apiUrl}/random/6/author,title`;
    return this.http.get<ObrasRandom[]>(url);
  }

}
