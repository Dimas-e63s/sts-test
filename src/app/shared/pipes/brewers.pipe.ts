import { Pipe, PipeTransform } from '@angular/core'
import { responseData } from '../../data.service'

@Pipe({
  name: 'brewers',
})
export class BrewersPipe implements PipeTransform {
  transform(value: responseData[]) {
    return value && new Set(value.map((item) => item.brewer))
  }
}
