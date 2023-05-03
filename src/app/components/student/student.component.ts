import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { PopupComponent } from '../popup/popup.component';
import { environment } from 'src/app/environments/environment';
import { StudentModelV2 } from 'src/app/models/student.model';
import { IStudent } from 'src/app/interfaces/student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stuModel: StudentModelV2;
  students: any;
  currentStudent:IStudent | any = {
    id: null,
    name: null,
    age: null,
    contact: null,
    email: null,
    address: null
  };
  currentIndex = -1;
  displayedColumns= [
    'name',
    'age',
    'contact',
    'email',
    'address',
    'actions'
  ]

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog
  ) { 
    this.stuModel = new StudentModelV2(studentService, this.currentStudent);
  }

  ngOnInit(): void {
    console.log(environment);
    this.getAll();
  }

  getAll() {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
        },
        error => {
          console.log(error);
        });

    // this.stuModel.fetchAllStudents()
    // .then((res: any) => {
    //   this.students = res;
    // }).catch((err: any) => {});

  }

  refreshList() {
    this.getAll();
    this.currentStudent = {
      id: null,
      name: '',
      age: null,
      contact: '',
      email: '',
      address: ''
    };
    this.currentIndex = -1;
  }

  saveStudent() {
    // get service status

    this.studentService.create(this.currentStudent)
      .subscribe(
        response => {
          console.log(response);
          this.getAll();
        },
        error => {
          console.log(error);
        });
  }

  newStudent() {
    this.currentStudent = {
      id: null,
      name: '',
      age: null,
      contact: '',
      email: '',
      address: ''
    };
    this.currentIndex = -1;
  }

  getStudent(id: any) {
    this.studentService.getByID(id)
      .subscribe(
        data => {
          this.currentStudent = data.body;
          console.log({
            httpStatus: data.status,
            httpStatusText: data.statusText,
          });
          const dialogRef = this.dialog.open(PopupComponent, {
            data:{
              data: this.currentStudent,
              action: 'view'
            }
          });
        },
        error => {
          console.log(error);
        });
  }

  editStudent(id: any) {
    this.studentService.getByID(id)
      .subscribe(
        data => {
          this.currentStudent = data;
          console.log(data);
          debugger
          const dialogRef = this.dialog.open(PopupComponent, {
            data:{
              data: this.currentStudent,
              action: 'edit'
            }
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
            this.currentStudent = result;
            this.updateStudent(this.currentStudent.id);
          });
        },
        error => {
          console.log(error);
        });
        
  }

  updateStudent(id: any) {
    this.studentService.update(id, this.currentStudent)
      .subscribe(
        response => {
          console.log(response);
          this.getAll();
        },
        error => {
          console.log(error);
        });
  }

  deleteStudent(id: any) {
    this.studentService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.getAll();
        },
        error => {
          console.log(error);
        });
  }

  clearStudent() {
    this.currentStudent = {
      id: null,
      name: '',
      age: null,
      contact: '',
      email: '',
      address: ''
    };
    this.currentIndex = -1;
  }

  viewStudent(id: any) {
    this.getStudent(id);
    const dialogRef = this.dialog.open(PopupComponent, {
      data: this.currentStudent
    });
  }
  
}
