import { Pipe, PipeTransform } from '@angular/core';
import { ResponseData } from '../data.service';

@Pipe({
  name: 'brewers',
})
export class BrewersPipe implements PipeTransform {
  transform(value: ResponseData[]): Set<string> {
    return value && new Set(value.map((item) => item.brewer));
  }
}
