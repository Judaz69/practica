import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuhtGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
     const valid = localStorage.getItem('pass');

      if (valid === 'valido') 
      {
        return true;
      } 
      else 
      {
        console.log('no puedes pasar');
        this.router.navigate(['/auth/login']);
        return false;
      }
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {

      const valid = localStorage.getItem('pass');

      if (valid === 'valido') 
      {
        return true;
      } 
      else 
      {
        console.log('no puedes pasar');
        this.router.navigate(['/auth/login']);
        return false;
      }
  }
}
