import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {
  hasError = false;
  realMessage = 'This is a real message';
  errMessage = 'OOPS! This is an error message';

  toggleError() {
    /*
      t - t  = t
      t - f  = f
      f - t  = f
      f - f  = t

      !t = f
      !f = t
    */

    this.hasError = !this.hasError; 
    
  }
}
