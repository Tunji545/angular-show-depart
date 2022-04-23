import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DepartmentListComponent } from 'src/departments/department-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, DepartmentListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
