import {Component} from '@angular/core';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html'
})
export class TopNavComponent {
    public disabled = false;
    public status: {isopen: boolean} = {isopen: false};

    public toggled(open: boolean): void {
        console.log('Dropdown is now > ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
