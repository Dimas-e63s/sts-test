import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { FilterService } from '../filter.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  filters = [
    { value: 'name', viewValue: 'Name' },
    { value: 'price', viewValue: 'Price' },
    { value: 'type', viewValue: 'Type' },
  ]
  selectedFilterChanged = new Subject<string>()
  selectedFilter = this.filters[0].value
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  onChange({ value }) {
    localStorage.setItem('filter', value)
    this.filterService.filterTypeChanged.next(value)
  }
}
