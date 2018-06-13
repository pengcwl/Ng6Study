import { Routes, RouterModule, Router } from '@angular/router';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './user-info';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        data: {title: '用户管理'},
        children: [
          {path: '', redirectTo: 'userInfo', pathMatch: 'full'},
          {path: 'userInfo', component: UserInfoComponent, data: {title: '用户信息管理'}}
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
