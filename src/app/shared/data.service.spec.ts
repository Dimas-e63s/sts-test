import { of } from 'rxjs';
import { DataService } from './data.service';
import { brewersTestData } from '../testing/fixture';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dataService: DataService;
  let utils: UtilsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    dataService = new DataService(httpClientSpy as any, new UtilsService());
  });

  it('should be created', () => {
    expect(DataService).toBeTruthy();
  });

  it('should return expected brewers (HttpClient called once)', () => {
    utils = new UtilsService();

    const transformedBrewers = utils
      .toPricePerLitre(brewersTestData)
      .sort((a, b) => (a.brewer > b.brewer ? 1 : -1));

    httpClientSpy.get.and.returnValue(of(brewersTestData));

    dataService.fetchData().subscribe((brewersRes) => {
      expect(brewersRes).toEqual(transformedBrewers);
    }, fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
