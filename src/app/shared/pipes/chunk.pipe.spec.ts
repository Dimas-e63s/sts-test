import {} from './brewers.pipe';
import { ChunkPipe } from './chunk.pipe';
import { brewersTestData } from '../../testing/fixture';

describe('ChunkPipe', () => {
  const pipe = new ChunkPipe();
  const chunkDevider = 2;
  let chunkCount = 1;

  it('should return array consisting of 4 first elements', () => {
    expect(pipe.transform(brewersTestData, chunkDevider, chunkCount)).toEqual(
      brewersTestData.slice(0, 4)
    );
  });

  it('should return empty array', () => {
    const brewers = [];
    expect(pipe.transform(brewers, chunkDevider, chunkCount)).toEqual(brewers);
  });
});
