import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  public names = ['John', 'Paul', 'George', 'Ringo'];
  studentsArray = [
    { name: 'John', age: 20 },
    { name: 'Paul', age: 21 },
    { name: 'George', age: 22 },
    { name: 'Ringo', age: 23 }
  ];

  styles:any = {
    active: {
      color: 'green',
      fontWeight: 'bold'
    },
    inactive: {
      color: 'red',
      fontWeight: 'normal'
    }
  };

  
  constructor() { }

  viewStudent(stuID:number) {
    alert(`Student ID: ${stuID+1}\nStudent Name: ${this.studentsArray[stuID].name}\nStudent Age: ${this.studentsArray[stuID].age}`);
  }

  deleteStudent(stuID:number) {
    this.studentsArray.splice(stuID, 1);
  }

  getClass(stuID:number) {
    if (stuID % 2 == 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  getStyles(styleCode:string) {
    return this.styles[styleCode];
  }
}
