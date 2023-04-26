import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  res: any;

  constructor(
    private http: HttpClient
  ) { }

  get data() {
    return this.res;
  }

  // User CRUD operations
  // get all users
  getUsers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users');
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    //   .subscribe((data) => {
    //     console.log(data);
    //     return data;
    //   });

  }

  // get single user
  getUser(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
  
  // create user
  createUser(user: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

  // update user
  updateUser(user: any) {
    return this.http.put('https://jsonplaceholder.typicode.com/users/' + user.id, user);
  }

  // delete user
  deleteUser(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }

}
