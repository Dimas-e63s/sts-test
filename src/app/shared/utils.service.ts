import { Injectable } from '@angular/core';

interface LSParametrs {
  LSItem: string;
  propName: string | number;
  defVal?: string | boolean | number;
  value?: string | boolean | number;
}

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  checkPropertyInLS({ LSItem, propName, defVal }: LSParametrs) {
    const filtersState = JSON.parse(localStorage.getItem(LSItem));

    return filtersState && filtersState[propName]
      ? filtersState[propName]
      : defVal;
  }

  storeInLS({ LSItem, propName, value }: LSParametrs): void {
    const previouseState = JSON.parse(localStorage.getItem(LSItem));
    localStorage.setItem(
      LSItem,
      JSON.stringify({ ...previouseState, [propName]: value })
    );
  }
}
