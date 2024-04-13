import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalCase'
})
export class CapitalCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.split(' ').map(word => {
      if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return '';
    }).join(' ');
  }
}
