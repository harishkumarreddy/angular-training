import { Component } from '@angular/core';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent {
 counter = 0;

  constructor() { 
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
