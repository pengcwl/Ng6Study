import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: '主页'},
        children: [
          {path: '', redirectTo: 'student', pathMatch: 'full'},
          {path: 'user', loadChildren: 'src/app/home/user/user.module#UserModule'},
          {path: 'student', loadChildren: 'src/app/home/student/student.module#StudentModule'}
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
