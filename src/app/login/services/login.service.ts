import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';

import {Account} from '../../models';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginUrl = 'assets/json/login-mock.json';
  public subject: Subject<Account> = new Subject<Account>();

  constructor(public http: HttpClient) {}

  public get currentUser(): Observable<Account> {
    return this.subject.asObservable();
  }

  public login(account: Account) {
    return this.http.get(this.loginUrl)
      .pipe(
        map((response: Account) => {
          // const account = response;
          console.log('account object > ' + JSON.stringify(response));

          if (response) {
            localStorage.setItem('currentUser > ', JSON.stringify(response));
            this.subject.next(Object.assign({}, response));
          }
          return response;
        })
      ).subscribe(
        data => {
          console.log('login success >' + data);
        },
        error => {
          console.error(error);
        }
      );
      /*.map((response: Response) => {
        const account = response.json();
        console.log('account object > ' + JSON.stringify(account));

        if (account) {
          localStorage.setItem('currentUser > ', JSON.stringify(account));
          this.subject.next(Object.assign({}, account));
        }
        return response;
      }).subscribe(
        data => {
          console.log('login success >' + data);
        },
        error => {
          console.error(error);
        }
      );*/
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }
}
