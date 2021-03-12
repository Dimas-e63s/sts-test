import { brewersTestData } from '../../testing/fixture';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('should return filtered array for selected brewer and sorted by filter', () => {
    const brewer = 'Molson';
    const filter = 'name';
    const expectedData = brewersTestData
      .filter((item) => item.brewer === brewer)
      .sort((a, b) => (a[filter] > b[filter] ? 1 : -1));
    expect(pipe.transform(brewersTestData, brewer, filter)).toEqual(
      expectedData
    );
  });
});
