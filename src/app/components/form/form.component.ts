import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  userForm: FormGroup;
  users:any = new FormArray([]);

  constructor() { 
    // generete a userform
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      isAdmin: new FormControl(false, [])
    });
  }

  formSubmit(e:any) {
    console.log(e);
    console.log(this.user);
  }

  formSubmit2(e:any) {
    console.log(e);
    console.log(this.users);
  }

  addUser() {
    this.users.push(new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      isAdmin: new FormControl(false, [])
    }));
  }
}
