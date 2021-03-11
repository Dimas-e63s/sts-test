import { Pipe, PipeTransform } from '@angular/core';
import { ResponseData } from '../data.service';
import * as chunk from 'lodash.chunk';

@Pipe({
  name: 'chunk',
})
export class ChunkPipe implements PipeTransform {
  transform(
    value: ResponseData[],
    chunkDevider: number,
    chunkCount: number
  ): ResponseData[] {
    return (
      value &&
      chunk(value, chunkDevider)
        .filter((_, idx) => idx <= chunkCount)
        .reduce((acc, next) => acc.concat(next), [])
    );
  }
}
