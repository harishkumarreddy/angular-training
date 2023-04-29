import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any;
  currentStudent:any = {
    id: '',
    name: '',
    age: '',
    contact: '',
    email: '',
    address: ''
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
  ) { }

  ngOnInit(): void {
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
  }

  refreshList() {
    this.getAll();
    this.currentStudent = {
      id: '',
      name: '',
      age: '',
      contact: '',
      email: '',
      address: ''
    };
    this.currentIndex = -1;
  }

  saveStudent() {
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
      id: '',
      name: '',
      age: '',
      contact: '',
      email: '',
      address: ''
    };
    this.currentIndex = -1;
  }

  getStudent(id: any) {
    this.studentService.get(id)
      .subscribe(
        data => {
          this.currentStudent = data;
          console.log(data);
          debugger
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
    this.studentService.get(id)
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
      id: '',
      name: '',
      age: '',
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
