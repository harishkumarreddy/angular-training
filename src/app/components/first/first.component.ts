import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  @Input() message:string = 'Hello World';
  // output property
  @Output() result = new EventEmitter<string>();

  generateoutput(){
    // reverse the message
    const res = this.message.split('').reverse().join('');
    this.result.emit(res);
  }
}
