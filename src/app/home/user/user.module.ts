import {NgModule} from '@angular/core';

import {CrudModule} from '../../shared';

import {UserComponent} from './user.component';
import {UserInfoComponent} from './user-info';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserInfoComponent
  ],
  imports: [
    CrudModule,
    UserRoutingModule
  ]
})
export class UserModule {}
