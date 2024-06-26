import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  studentDetail: any;

  constructor(private apiService: ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.apiService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students: ', error);
      }
    );
  }
  getStudentById():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    console.log(this.route.snapshot.url);
    this.apiService.getStudentById(id).subscribe(
      (data) => {
        this.studentDetail = data;
      },
      (error) => {
        console.error('Error fetching student details: ', error);
      }
    );
  }
}
