import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchStudent(id);
    console.log(id);
  }

  fetchStudent(id: number): void {
    this.apiService.getStudentById(id).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.error('Error fetching student details: ', error);
      }
    );
  }
}
