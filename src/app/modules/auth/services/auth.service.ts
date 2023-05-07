import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(user: string, password: string)
  {
    if (user === 'admin' && password === 'admin') 
    {
      localStorage.setItem('pass','valido');
      this.router.navigate(['/autores/lista']);
    } 
    else 
    {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Credenciales de usuario incorrectas!'
      });
    }
  }

  logout()
  {
    localStorage.removeItem('pass')
  }

}
