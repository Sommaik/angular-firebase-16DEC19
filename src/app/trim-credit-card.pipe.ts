import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: string, args: string): string {
    const first = value.substr(0, 3);
    const third = value.substr(13, 3);
    let second = '';
    for (let i = 0; i < 10; i++) {
      second += args;
    }
    return first + second + third;
  }

}
