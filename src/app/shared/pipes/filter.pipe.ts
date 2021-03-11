import { Pipe, PipeTransform } from '@angular/core'
import { responseData } from '../../data.service'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: responseData[],
    brewer: string,
    filter: string
  ): responseData[] {
    return (
      value &&
      value
        .filter((item) => item.brewer === brewer)
        .sort((a, b) => (a[filter] > b[filter] ? 1 : -1))
    )
  }
}
