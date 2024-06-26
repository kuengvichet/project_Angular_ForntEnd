import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  // myData={
  //   firstName: '',
  //   lastName:'',
  //   dateOfBirth:'',
  //   class:''
  // };
  studentForm: FormGroup;
  isEditMode = false;
  studentId: number=0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      class: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.studentId;
    if (this.isEditMode) {
      this.fetchStudentDetails();
    }
  }

  fetchStudentDetails(): void {
    this.apiService.getStudentById(this.studentId).subscribe(
      (data) => {
        this.studentForm.patchValue({
          firstName: data.first_name,
          lastName: data.last_name,
          dateOfBirth: data.date_of_birth,
          class: data.class
        });
      },
      (error) => {
        console.error('Error fetching student details: ', error);
      }
    );
  }

  submitForm(): void {
    if (this.isEditMode) {
      this.updateStudent();
    } else {
      this.addStudent();
    }
  }

  addStudent(): void {
    console.log(this.studentForm.value);
    console.log('Http://=====> '+JSON.stringify( this.apiService.addStudent(this.studentForm.value)));
    const formData = this.studentForm.value;
    if (this.studentForm.valid) {
      this.apiService.addStudent(formData).subscribe(() => {
          this.router.navigateByUrl('/students');
        },
        (error) => {
          console.error('Error adding student: ', error);
        }
      );
    }
    // this.apiService.addStudent(this.studentForm.value).subscribe(
    //   response => {
    //     console.log('Student added!', response);
    //     this.router.navigate(['/students']);
    //   },
    //   error => {
    //     console.error('Error adding student:', error);
    //   }
    // );
  }

  updateStudent(): void {
    if (this.studentForm.valid) {
      this.apiService.updateStudent(this.studentId, this.studentForm.value).subscribe((response) => {
          this.router.navigateByUrl('/students');
        },
        (error) => {
          console.error('Error updating student: ', error);
        }
      );
    }
  }

}