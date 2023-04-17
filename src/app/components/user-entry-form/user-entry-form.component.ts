import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-entry-form',
  templateUrl: './user-entry-form.component.html',
  styleUrls: ['./user-entry-form.component.css']
})
export class UserEntryFormComponent {

  // FormArray is a type of FormGroup
  userFormArray = this.fb.group({
    users: this.fb.array([])
  });

  displayedColumns: string[] = ['name', 'email', 'password', 'isAdmin'];
  userTableData:any = []

  constructor(
    private fb: FormBuilder
  ) {
    this.addUser();
  }

  get users() {
    return this.userFormArray.get('users') as FormArray;
  }
  getusersData(): any[] {
    return this.users.value;
  }

  addUser() {
    const user = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      isAdmin: [false]
    });
    this.users.push(user);
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }

  formSubmit(e: any) {
    this.userTableData = this.getusersData();
  }

  
}
