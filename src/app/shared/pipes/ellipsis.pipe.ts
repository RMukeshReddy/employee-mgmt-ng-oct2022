import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, endAt?: number): string {
    console.log(value);
    console.log(endAt);
    
    if(endAt) {
      return value.substring(0, endAt) + '...';
    } 
    
    if (value && value.length > 0) {
      return value;
    }
    else {
      return 'Value is empty';
    }
  }
}