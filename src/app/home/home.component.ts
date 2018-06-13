import {Component, OnInit, OnDestroy} from '@angular/core';
import {Routes} from '@angular/router';

import {MenuService, CrudService} from '../shared';
import {PAGES_MENU} from './home.menu';

import 'style-loader!./home.component.scss';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private menuService: MenuService, private crudService: CrudService) { }

  ngOnInit(): void {
    this.menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

  ngOnDestroy(): void {
    this.menuService.menuItems = null;
    this.menuService.currentMenuItem = null;
  }
}
