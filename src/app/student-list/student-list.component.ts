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
  editMode = false;
  showForm = false;
  newStudent: any = {};

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
  // getStudentById():void{
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   console.log(id);
  //   console.log(this.route.snapshot.url);
  //   this.apiService.getStudentById(id).subscribe(
  //     (data) => {
  //       this.studentDetail = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching student details: ', error);
  //     }
  //   );
  // }
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

  selectStudent(student: any): void {
    this.studentDetail = { ...student }; // Create a copy to prevent direct modification
    this.editMode = false; // Reset edit mode
  }

  editStudent(student: any): void {
    console.log(student);
    this.selectStudent(student);
    this.editMode = true;
  }

  cancelEdit(): void {
    this.studentDetail = null;
    this.editMode = false;
  }

  cancel(): void {
    this.showForm = false; // Hide the registration form
    this.newStudent = {}; // Clear the new student data
  }

  submitForm(): void {
    if (this.editMode) {
      this.apiService.updateStudent(this.studentDetail.id, this.studentDetail).subscribe(
        () => {
          // Update the UI or fetch students again
          this.fetchStudents();
          this.studentDetail = null;
          this.editMode = false;
        },
        (error) => {
          console.error('Error updating student: ', error);
        }
      );
    } else {
      this.apiService.addStudent(this.newStudent).subscribe(
        () => {
          // Handle success, like refreshing the list or navigating
          this.fetchStudents(); // Example: Refresh student list after add
          this.cancel(); // Hide the form after successful add
        },
        (error) => {
          console.error('Error adding student: ', error);
        }
      );
    }
  }

  showRegistrationForm(): void {
    this.newStudent = {}; // Clear any previous data
    this.showForm = true; // Show the registration form
  }

}
