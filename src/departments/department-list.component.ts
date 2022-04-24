import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LecturersService } from './lecturers.service';

@Component({
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Lecturer Biodata';
  lecturers: any[] = [];
  errorMessage: string = '';
  sub!: Subscription;
  constructor(private lecturersService: LecturersService) {}
  ngOnInit(): void {
    this.sub = this.lecturersService.getLecturers().subscribe({
      next: (lecturers) => {
        console.log(this.lecturers);
        this.lecturers = lecturers;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
