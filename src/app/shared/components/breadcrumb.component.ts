import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumb',
    template: `<ol class="breadcrumb">
        <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
            <li class="breadcrumb-item" [ngClass]="{active: last}">
                <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
                <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
            </li>
        </ng-template>
    </ol>`
})
export class BreadcrumbComponent implements OnInit {
    breadcrumbs: Array<Object>;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )/*.filter(event => event instanceof NavigationEnd)*/.subscribe(event => {
            this.breadcrumbs = [];
            let currentRoute = this.route.root,
                url = '';

            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');

                        if (routeSnapshot.data.title) {
                            this.breadcrumbs.push({
                                label: routeSnapshot.data,
                                url: url.replace('//', '/')
                            });
                        }
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
}
