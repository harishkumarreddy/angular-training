import { Component, Inject } from '@angular/core';
import { IStudent,StudentRaw  } from 'src/app/interfaces/student';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentRaw,
  ) { }

  onNoClick() {
    this.dialogRef.close();
  }

  clearStudent() {
    this.data.data = {
      id: null,
      name: null,
      age: null,
      contact: null,
      email: null,
      address: null
    };
  }

  saveStudent() {
    this.dialogRef.close(this.data.data);
  }
}
