import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardListComponent } from 'src/app/dashboard/dashboard-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentModule } from './departments/department.module';

@NgModule({
  declarations: [AppComponent, DashboardListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardListComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]),

    DepartmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
