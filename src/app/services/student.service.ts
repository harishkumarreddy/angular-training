import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  hopst = "http://localhost:8080/students"

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.hopst);
  }

  get(id: any) {
    return this.http.get(`${this.hopst}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.hopst, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${this.hopst}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${this.hopst}/${id}`);
  }
}
