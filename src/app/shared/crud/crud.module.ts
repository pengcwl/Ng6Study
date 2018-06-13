import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// import {TranslateModule} from '@ngx-translate/core';

import {ModalModule} from 'ngx-bootstrap';

import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {GrowlModule} from 'primeng/growl';
import {SharedModule} from 'primeng/shared';
import {ConfirmationService} from 'primeng/api';

import {CrudComponent} from './crud.component';
import {CrudService} from './services';
import {DictPipe, DropdownPipe} from './pipes';

@NgModule({
    declarations: [
        DictPipe,
        DropdownPipe,
        CrudComponent
    ],
    imports: [
        // TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
        ButtonModule,
        DataTableModule,
        PanelModule,
        TabViewModule,
        DialogModule,
        ConfirmDialogModule,
        MessagesModule,
        GrowlModule,
        SharedModule,
        ModalModule.forRoot()
    ],
    exports: [
        DictPipe,
        DropdownPipe,
        CrudComponent,
        // TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
        ButtonModule,
        DataTableModule,
        PanelModule,
        TabViewModule,
        DialogModule,
        ConfirmDialogModule,
        MessagesModule,
        GrowlModule,
        SharedModule,
        ModalModule
    ]
})
export class CrudModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: CrudModule,
            providers: [
                CrudService,
                ConfirmationService
            ]
        };
    }

}
