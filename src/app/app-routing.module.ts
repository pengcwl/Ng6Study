import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadChildren: 'src/app/login/login.module#LoginModule'},
    {path: 'home', loadChildren: 'src/app/home/home.module#HomeModule'},
    {path: '**', loadChildren: 'src/app/login/login.module#LoginModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
