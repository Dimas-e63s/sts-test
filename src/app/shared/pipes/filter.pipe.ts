import { Pipe, PipeTransform } from '@angular/core';
import { ResponseData } from '../data.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: ResponseData[],
    brewer: string,
    filter: string
  ): ResponseData[] {
    return (
      value &&
      value
        .filter((item) => item.brewer === brewer)
        .sort((a, b) => (a[filter] > b[filter] ? 1 : -1))
    );
  }
}
