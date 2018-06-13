import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {MenuService} from './menu.service';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy {

    public menuItems: any[];
    protected menuItemsSub: Subscription;
    protected onRouteChange: Subscription;

    constructor(private router: Router, private menuService: MenuService) {}

    public updateMenu(newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    }

    public selectMenuAndNotify(): void {
        if (this.menuItems) {
            this.menuItems = this.menuService.selectMenuItem(this.menuItems);
        }
    }

    public ngOnInit(): void {
        this.onRouteChange = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (this.menuItems) {
                    this.selectMenuAndNotify();
                } else {
                    setTimeout(() => this.selectMenuAndNotify());
                }
            }
        });
        this.menuItemsSub = this.menuService.menuItems.subscribe(this.updateMenu.bind(this));
    }

    public ngOnDestroy(): void {
        this.onRouteChange.unsubscribe();
        this.menuItemsSub.unsubscribe();
    }
}
