import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  typeChanged = new Subject<string>();
  itemsAmount = new Subject<number>();
  isDarkMode = new Subject<boolean>();
  LSItemName = 'filters';

  constructor(private utilsService: UtilsService) {}

  changeFilterType(value: string): void {
    this.utilsService.storeInLS({
      LSItem: this.LSItemName,
      propName: 'typeFilter',
      value,
    });
    this.typeChanged.next(value);
  }

  changeItemAmount(value: number): void {
    this.utilsService.storeInLS({
      LSItem: this.LSItemName,
      propName: 'amountFilter',
      value,
    });
    this.itemsAmount.next(value);
  }

  changeDarkMode(value: boolean): void {
    this.utilsService.storeInLS({
      LSItem: this.LSItemName,
      propName: 'isDarkMode',
      value,
    });
    this.isDarkMode.next(value);
  }
}
