import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default value, when no data in localStorage exists', () => {
    service = TestBed.inject(UtilsService);
    const result = service.checkPropertyInLS({
      LSItem: 'none',
      propName: 'none',
      defVal: 5,
    });
    expect(result).toBe(5);
  });

  it('should return value stored in localStorage', () => {
    service = TestBed.inject(UtilsService);
    const payload = {
      LSItem: 'test',
      propName: 'default name',
    };
    const value = 'default value';
    service.storeInLS({
      ...payload,
      value,
    });
    const result = service.checkPropertyInLS(payload);
    expect(result).toBe(value);
  });

  it('should store value in localStorage', () => {
    service = TestBed.inject(UtilsService);
    const payload = {
      LSItem: 'test',
      propName: 'default name',
      value: 'default value',
    };
    service.storeInLS(payload);
    const result = service.checkPropertyInLS({ ...payload, value: '' });
    expect(result).toBe(payload.value);
  });
});
