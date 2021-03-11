import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../shared/filter.service';
import { UtilsService } from '../../shared/utils.service';

interface Filter {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss'],
})
export class HeaderModalComponent implements OnInit {
  filters: Filter[] = [
    { value: 'name', viewValue: 'Name' },
    { value: 'price', viewValue: 'Price' },
    { value: 'type', viewValue: 'Type' },
  ];
  selectedFilter: string;
  selectedAmountAppearence: number;
  darkMode: boolean;
  constructor(
    private filterService: FilterService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    const LSItem = 'filters';
    this.selectedFilter = this.utilsService.checkPropertyInLS({
      LSItem,
      propName: 'typeFilter',
      defVal: 'name',
    });
    this.selectedAmountAppearence = this.utilsService.checkPropertyInLS({
      LSItem,
      propName: 'amountFilter',
      defVal: 15,
    });
    this.darkMode = this.utilsService.checkPropertyInLS({
      LSItem,
      propName: 'isDarkMode',
      defVal: false,
    });
  }

  onChange({ value }): void {
    this.filterService.changeFilterType(value);
  }

  onAmountChange({ value }): void {
    this.filterService.changeItemAmount(value);
  }

  onToggleChange({ checked }): void {
    this.filterService.changeDarkMode(checked);
  }
}
