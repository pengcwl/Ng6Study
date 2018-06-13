import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {HomeComponent} from './home.component';

import {
  TopNavComponent,
  MenuComponent,
  MenuItemComponent,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
  BreadcrumbComponent,
  MenuService
} from '../shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    TopNavComponent,
    MenuItemComponent,
    MenuComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    HomeRoutingModule
  ]/*,
  providers: [MenuService]*/
})
export class HomeModule { }
