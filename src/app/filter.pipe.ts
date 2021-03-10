import { Pipe, PipeTransform } from '@angular/core'
import { responseData } from './data.service'

@Pipe({
  name: 'filter',
  // pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    value: responseData[],
    brewer: string,
    filter: string
  ): responseData[] {
    let result = [...value]
    if (brewer) {
      result = result.filter((item) => item.brewer === brewer)
    }
    if (filter) {
      result = result.sort((a, b) => {
        if (a[filter] > b[filter]) {
          return 1
        }
        return -1
      })
    }
    return result
  }
}
