import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user: string = '';
  password: string = '';
  pass: boolean = false;

  constructor(private authService: AuthService){}

  login()
  {
    const user = this.user
    const password = this.password

    this.authService.login(user,password);

  }

}
