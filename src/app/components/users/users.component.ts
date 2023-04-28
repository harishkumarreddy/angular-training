import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any = [];
  selectedUser: any = {};
  showuser: boolean = false;
  showedit: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    // function sum(a, b) { 
    //   return a + b;
    // }
    // const sum = (a, b) => { return a + b;}

    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    });
    
  }

  viewUser(id: number) {
    this.userService.getUser(id).subscribe((data)=>{
      this.selectedUser = data;
    });

    this.showuser = true;
  }
  
  editUser(id: number) {
    this.userService.getUser(id).subscribe((data)=>{
      this.selectedUser = data;
    });

    this.showedit = true;
  }
  
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data)=>{
      this.userService.getUsers().subscribe((data)=>{
        this.users = data;
      });
    });
  }

  closeUser() {
    this.showuser = false;
  }
  closeEdit() {
    this.showedit = false;
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser).subscribe((data)=>{
      this.userService.getUsers().subscribe((data)=>{
        this.users = data;
      });
    });
    this.showedit = false;
  }

  onEditSubmit() {
    this.updateUser();
  }

}
