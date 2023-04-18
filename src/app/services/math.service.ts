import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  getFabinacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.getFabinacci(n - 1) + this.getFabinacci(n - 2);
  }

  getFebinaccies(n: number): number[] {
    const febs = [];
    for (let i = 0; i < n; i++) {
      febs.push(this.getFabinacci(i));
    }
    return febs;
  }

  isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      // this.checkIt(n, i);
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  checkIt(n: number, i: number): boolean {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}
