import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training';
  message = 'Hello World';
  myname = 'Harish';

  changeHandle(e:any){
    console.log(e);
    this.message = e.target.value;
  }
}
