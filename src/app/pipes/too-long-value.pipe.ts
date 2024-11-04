import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tooLongValue',
  standalone: true
})
export class TooLongValuePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result = ''
    if (value.length > 15) {
      result = value.slice(0, 20)
      return result += '...';

     } else return value
  }

}
