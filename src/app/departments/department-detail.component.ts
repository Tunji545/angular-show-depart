import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILecturer } from './lecturers';

@Component({
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent implements OnInit {
  pageTitle: string = 'Project Detail';
  lecturer: ILecturer | undefined;
  lecturers: ILecturer[] = [
    {
      lecturerId: 1,
      firstName: 'Zainab',
      lastName: 'Buhari',
      status: 'Single',
      gender: 'Female',
      faculty: 'Sciences',
      department: 'Politics',
      email: 'zainab@gmail.com',
      phoneNo: '08098765432',
      imageEdit: 'assets/editBtn.png',
      imageDel: 'assets/trash.png',
    },
    {
      lecturerId: 2,
      firstName: 'Ope',
      lastName: 'Shade',
      status: 'Single',
      gender: 'male',
      faculty: 'Sciences',
      department: 'Computer',
      email: 'ope@gmail.com',
      phoneNo: '08098765432',
      imageEdit: 'assets/editBtn.png',
      imageDel: 'assets/trash.png',
    },
    {
      lecturerId: 3,
      firstName: 'Jalallat',
      lastName: 'Elrufai',
      status: 'married',
      gender: 'Female',
      faculty: 'Sciences',
      department: 'Politics',
      email: 'jalallat@gmail.com',
      phoneNo: '08098765432',
      imageEdit: 'assets/editBtn.png',
      imageDel: 'assets/trash.png',
    },
    {
      lecturerId: 4,
      firstName: 'Helen',
      lastName: 'Ayok',
      status: 'Single',
      gender: 'Female',
      faculty: 'fashion',
      department: 'modelling',
      email: 'helen@gmail.com',
      phoneNo: '08098765432',
      imageEdit: 'assets/editBtn.png',
      imageDel: 'assets/trash.png',
    },
    {
      lecturerId: 5,
      firstName: 'Joshua',
      lastName: 'Caleb',
      status: 'Single',
      gender: 'male',
      faculty: 'Religion',
      department: 'CRK',
      email: 'joshua@gmail.com',
      phoneNo: '08098765432',
      imageEdit: 'assets/editBtn.png',
      imageDel: 'assets/trash.png',
    },
    {
      lecturerId: 6,
      firstName: 'Samson',
      lastName: 'Judith',
      status: 'married',
      gender: 'male',
      faculty: 'Science',
      department: 'Social',
      email: 'samson@gmail.com',
      phoneNo: '08098765432',
      imageEdit: 'assets/editBtn.png',
      imageDel: 'assets/trash.png',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;
    this.lecturer = this.lecturers.find((lecturer: ILecturer): boolean => {
      console.log(lecturer.lecturerId);
      return lecturer.lecturerId === id;
    });
    return this.lecturer;
  }
  onBack(): void {
    this.router.navigate(['/lecturers']);
  }
}
