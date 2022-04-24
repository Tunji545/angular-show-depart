import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardListComponent } from 'src/dashboard/dashboard-list.component';
import { DepartmentDetailComponent } from 'src/departments/department-detail.component';
import { DepartmentListComponent } from 'src/departments/department-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, DepartmentListComponent, DashboardListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardListComponent },
      { path: 'lecturers', component: DepartmentListComponent },
      { path: 'lecturers/:id', component: DepartmentDetailComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
