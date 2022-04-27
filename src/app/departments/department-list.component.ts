import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILecturer } from './lecturers';
import { LecturersService } from './lecturers.service';

@Component({
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Lecturer Biodata';
  errorMessage: string = '';
  sub!: Subscription;
  private _searchText: string = '';
  showImage: boolean = false;
  visible: string = 'hidden';

  constructor(private lecturersService: LecturersService) {}
  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.filteredLecturers = this.performFilter(value);
  }

  filteredLecturers: ILecturer[] = [];
  lecturers: ILecturer[] = [];

  performFilter(filterBy: string): ILecturer[] {
    filterBy = filterBy.toLowerCase();

    return this.lecturers.filter((lecturer: ILecturer) => {
      return (
        lecturer.firstName.toLowerCase().includes(filterBy) ||
        lecturer.lastName.toLowerCase().includes(filterBy) ||
        `${lecturer.firstName.toLowerCase()} ${lecturer.lastName.toLowerCase()}`.includes(
          filterBy
        )
      );
    });
  }
  ngOnInit(): void {
    // this.searchText = 'tunji';
    this.sub = this.lecturersService.getLecturers().subscribe({
      next: (lecturers) => {
        this.lecturers = lecturers;
        this.filteredLecturers = this.lecturers;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
    // this.showImage ? (this.visible = 'visible') : (this.visible = 'hidden');
  }
}
