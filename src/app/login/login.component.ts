import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Account} from '../models/account/account.model';
import {LoginService} from './services';
import {CrudComponent, CrudService} from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent extends CrudComponent {
  public account: Account = new Account();
  public error: Error;

  constructor(
    public router: Router,
    public loginService: LoginService,
    public crudService: CrudService
  ) {
    super(crudService);
  }

  public doLogin(): void {
    this.loginService.login(this.account);
    this.router.navigateByUrl('home');
  }

  public doLogout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('login');
  }
}
