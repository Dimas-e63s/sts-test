import { Injectable, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { UtilsService } from './shared/utils.service'

@Injectable({
  providedIn: 'root',
})
export class FilterService implements OnInit {
  typeChanged = new Subject<string>()
  itemsAmount = new Subject<number>()
  isDarkMode = new Subject<boolean>()
  LSItemName: string = 'filters'

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {}

  changeFilterType(value: string): void {
    this.utilsService.storeInLS(this.LSItemName, 'typeFilter', value)
    this.typeChanged.next(value)
  }

  changeItemAmount(value: number): void {
    this.utilsService.storeInLS(this.LSItemName, 'amountFilter', value)
    this.itemsAmount.next(value)
  }

  changeDarkMode(value: boolean): void {
    this.utilsService.storeInLS(this.LSItemName, 'isDarkMode', value)
    this.isDarkMode.next(value)
  }
}
