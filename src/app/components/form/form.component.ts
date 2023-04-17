import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: null,
    email: null,
    password: null,
    isAdmin: false
  }

  // userForm: FormGroup;
  usersFormArray = this.fb.group({
    users: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { 
    this.addUser();
  }
  get users(): FormArray {
    return this.usersFormArray.get('users') as FormArray;
  }

  formSubmit(e: any) {
    console.log(e);
    console.log(this.user);
  }

  formSubmit2(e: any) {
    console.log(e);
    console.log(this.users);
  }

  addUser() {
    const user = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      isAdmin: [false]
    })
    this.users.push( user );

    console.log(this.users)
  }
}
