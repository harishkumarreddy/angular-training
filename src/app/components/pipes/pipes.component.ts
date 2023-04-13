import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  today = new Date();
  totalCost = 100.123456789;
  sampleJson = {
    name: 'John',
    age: 30,
    address: {
      street: 'Main Street',
      city: 'New York',
      state: 'NY'
    }
  };
  fullName = 'harishkumar reddy chowkicherla';
  discount= 10;

  
  constructor() { 
    setInterval(() => {
      this.today = new Date();
    } , 1000);
  }
}
