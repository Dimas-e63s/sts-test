import { Injectable } from '@angular/core';
import { ResponseData } from './data.service';

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

  toPricePerLitre(arr: ResponseData[]): ResponseData[] {
    return arr.map((item) => {
      const itemCopy = { ...item };
      const updatedPrice = itemCopy.size
        .split(' ')
        .reduce((acc, next, idx, arr) => {
          if (idx === 0) {
            acc;
            acc /= +next;
          }
          if (next.includes('ml')) {
            const a = parseInt(next, 10);
            acc = +((acc / parseInt(next, 10)) * 1000).toFixed(2);
          }
          return acc;
        }, +item.price);
      return { ...itemCopy, price: updatedPrice };
    });
  }
}
