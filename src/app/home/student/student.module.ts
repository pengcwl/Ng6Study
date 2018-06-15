import {NgModule} from '@angular/core';

import {CrudModule} from '../../shared';

import {StudentComponent} from './student.component';
import {StudentInfoComponent} from './student-info';
import {StudentRoutingModule} from './student-routing.module';

@NgModule({
  declarations: [
    StudentComponent,
    StudentInfoComponent
  ],
  imports: [
    CrudModule,
    StudentRoutingModule
  ]
})
export class StudentModule {}
