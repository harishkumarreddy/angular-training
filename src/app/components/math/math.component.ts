import { Component } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  inputValue: number | null;
  febiNumbers: number[];
  isPrime: boolean;

  showFibinacci: boolean;
  showPrime: boolean;
  showError: boolean;
  errMsg: string;

  constructor(
    private mathService: MathService
  ) {
    this.inputValue = null;
    this.febiNumbers = [];
    this.isPrime = false;
    this.showFibinacci = false;
    this.showPrime = false;
    this.showError = false;
    this.errMsg = 'Enter the value first';
  }

  inputOnchange(e: any): void {
    this.showFibinacci = false;
    this.showPrime = false;
    this.showError = false;

    this.inputValue = e.target.value;
    const input = e.target.value;
    if(input.length === 0){
      this.showError = true;
      this.errMsg = 'Enter the value first';
    }else if(isNaN(parseInt(input))){
      this.showError = true;
      this.errMsg = 'Enter the number only';
    }
  }

  getFabinacci(): void {
    this.showFibinacci = false;
    this.showPrime = false;
    this.showError = false;

    if (this.inputValue !== null) {
      this.showFibinacci = true;
      this.showPrime = false;

      this.febiNumbers = this.mathService.getFebinaccies(this.inputValue);
    }else{
      this.showError = true;
      this.errMsg = 'Enter the value first';
    }
  }

  checkPrime(): void {
    this.showFibinacci = false;
    this.showPrime = false;
    this.showError = false;

    if (this.inputValue !== null) {
      this.showFibinacci = false;
      this.showPrime = true;

      this.isPrime = this.mathService.isPrime(this.inputValue);
    }else{
      this.showError = true;
      this.errMsg = 'Enter the value first';
    }
  }
}
