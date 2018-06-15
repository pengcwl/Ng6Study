import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CrudModule } from './shared';
/**import { StudentComponent } from './home/student/student.component';**/

@NgModule({
  declarations: [
    AppComponent  /**,
    StudentComponent*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CrudModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
