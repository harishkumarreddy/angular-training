import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    // return in reverse order  
    return value.toString().split('').reverse().join('');
  }

}
