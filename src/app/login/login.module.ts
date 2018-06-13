/**
 * Created by lifei on 2017/2/24.
 */
import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginService} from './services';

import {CrudModule} from '../shared';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CrudModule,
    LoginRoutingModule
  ]
})
export class LoginModule {

}
