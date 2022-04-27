import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DepartmentListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'lecturers', component: DepartmentListComponent },
      { path: 'lecturers/:id', component: DepartmentDetailComponent },
    ]),
    SharedModule,
  ],
})
export class DepartmentModule {}
