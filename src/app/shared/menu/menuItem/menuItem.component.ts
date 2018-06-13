import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menuItem.component.html'
})
export class MenuItemComponent {
    @Input() menuItem: any;
}
