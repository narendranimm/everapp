import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateTime'
})
export class CustomDateTimePipe implements PipeTransform {

  transform(value: string | number | Date): string {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(value, 'd MMM');
    const formattedTime = datePipe.transform(value, 'h:mm a');

    return `${formattedDate} | ${formattedTime}`;
  }
}