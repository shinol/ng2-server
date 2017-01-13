import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(time: Date): string {
    if (!time) return '';

    moment.updateLocale('en', {
      calendar: {
        lastWeek: 'dddd',
        lastDay: '[Yesdterday]',
        sameDay: 'LT',
        sameElse: 'L',
      }
    });
    return moment(time).calendar();
  }

}
