import { Routes, RouterModule, Router } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentInfoComponent } from './student-info';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: StudentComponent,
        data: {title: '用户管理'},
        children: [
          {path: '', redirectTo: 'userInfo', pathMatch: 'full'},
          {path: 'userInfo', component: StudentComponent, data: {title: '学生信息管理'}}
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {}
