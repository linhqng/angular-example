import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filter: string, field: string): any {
    if (filter && value) {
      return value.filter(
        (val: { [x: string]: string }) =>
          val[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
    }
    return value;
  }
}
