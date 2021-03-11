import { Component, OnInit } from '@angular/core'
import { FilterService } from '../filter.service'
import { UtilsService } from '../shared/utils.service'

interface filter {
  value: string
  viewValue: string
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  filters: filter[] = [
    { value: 'name', viewValue: 'Name' },
    { value: 'price', viewValue: 'Price' },
    { value: 'type', viewValue: 'Type' },
  ]
  selectedFilter: string
  selectedAmountAppearence: number
  darkMode: boolean
  constructor(
    private filterService: FilterService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    const LSItem = 'filters'
    this.selectedFilter = this.utilsService.checkPropertyInLS(
      LSItem,
      'typeFilter',
      'name'
    )
    this.selectedAmountAppearence = this.utilsService.checkPropertyInLS(
      LSItem,
      'amountFilter',
      15
    )
    this.darkMode = this.utilsService.checkPropertyInLS(
      LSItem,
      'isDarkMode',
      false
    )
  }

  onChange({ value }) {
    this.filterService.changeFilterType(value)
  }

  onAmountChange({ value }) {
    this.filterService.changeItemAmount(value)
  }

  onToggleChange({ checked }) {
    this.filterService.changeDarkMode(checked)
  }
}
