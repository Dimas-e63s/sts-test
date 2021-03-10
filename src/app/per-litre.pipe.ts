import { Pipe, PipeTransform } from '@angular/core'
import { responseData } from './data.service'

@Pipe({
  name: 'perLitre',
})
export class PerLitrePipe implements PipeTransform {
  transform(value: string[], item: string): number {
    return item.split(' ').reduce((acc, next, idx, arr) => {
      if (idx === 0) {
        acc /= +next
      }
      if (idx === arr.length - 1) {
        acc = +((acc / parseInt(next)) * 1000).toFixed(2)
      }
      return acc
    }, +value)
  }
}
