import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail.component';

@NgModule({
  declarations: [DepartmentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'lecturers', component: DepartmentListComponent },
      { path: 'lecturers/:id', component: DepartmentDetailComponent },
    ]),
  ],
})
export class DepartmentModule {}
