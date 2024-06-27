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
  viewStudent(id: number): void {
    console.log('Navigating to student with ID:', id); // Debugging line
    // this.route.navigate(['/students', id]);
    this.apiService.getStudentById(id).subscribe(
      (data) => {
        console.log(data);
        this.studentDetail = data;
      },
      (error) => {
        console.error('Error fetching student details: ', error);
      }
    );
  }
  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.apiService.deleteStudent(id).subscribe(
        () => {
          // Remove the deleted student from the students array
          this.students = this.students.filter(student => student.id !== id);
          // Clear the selected student if it was deleted
          if (this.studentDetail && this.studentDetail.id === id) {
            this.studentDetail = null;
          }
        },
        (error) => {
          console.error('Error deleting student: ', error);
        }
      );
    }
  }
}
