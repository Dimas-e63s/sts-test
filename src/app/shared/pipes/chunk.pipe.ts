import { Pipe, PipeTransform } from '@angular/core'
import { responseData } from '../../data.service'
import * as chunk from 'lodash.chunk'

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {
  transform(
    value: responseData[],
    chunkDevider: number,
    chunkCount: number
  ): responseData[] {
    return (
      value &&
      chunk(value, chunkDevider)
        .filter((_, idx) => idx <= chunkCount)
        .reduce((acc, next) => acc.concat(next), [])
    )
  }
}
