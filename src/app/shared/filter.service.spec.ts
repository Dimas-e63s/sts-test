import { TestBed } from '@angular/core/testing';
import { FilterService } from './filter.service';

describe('UtilsService', () => {
  let filterService: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    filterService = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(filterService).toBeTruthy();
  });

  it('should emit typeChanged value', (done: DoneFn) => {
    filterService = TestBed.inject(FilterService);
    filterService.typeChanged.subscribe((val) => {
      expect(val).toBe('test');
      done();
    });
    filterService.changeFilterType('test');
  });

  it('should emit itemsAmount value', (done: DoneFn) => {
    filterService = TestBed.inject(FilterService);
    filterService.itemsAmount.subscribe((val) => {
      expect(val).toBe(23);
      done();
    });
    filterService.changeItemAmount(23);
  });

  it('should emit isDarkMode value', (done: DoneFn) => {
    filterService = TestBed.inject(FilterService);
    filterService.isDarkMode.subscribe((val) => {
      expect(val).toBe(true);
      done();
    });
    filterService.changeDarkMode(true);
  });
});
