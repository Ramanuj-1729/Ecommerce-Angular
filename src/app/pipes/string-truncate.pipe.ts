import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTruncate'
})
export class StringTruncatePipe implements PipeTransform {

  transform(value: string): string {
    const maxLength = 18;
    
    // Check if the value is longer than maxLength
    if (value.length > maxLength) {
      // Truncate the string and append '...'
      return value.substring(0, maxLength) + '...';
    }
    
    // Return the original value if it's shorter or equal to maxLength
    return value;
  }

}
