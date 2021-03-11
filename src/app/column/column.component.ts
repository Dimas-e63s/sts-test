import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { responseData } from '../data.service'
import { FilterService } from '../filter.service'
import { ItemModalComponent } from '../item-modal/item-modal.component'
import { FilterPipe } from '../shared/pipes/filter.pipe'
import { UtilsService } from '../shared/utils.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [FilterPipe],
})
export class ColumnComponent implements OnInit, OnDestroy {
  @Input() id: number
  @Input() data: responseData[]
  selectedFilter: string
  chunkCount: number = 0
  chunkDevider: number
  isLoading: boolean = false
  selectedBrewer: string
  filterTypeSubscription: Subscription
  filterAmounSubscription: Subscription

  constructor(
    private filterService: FilterService,
    private utilsService: UtilsService,
    public dialog: MatDialog,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit(): void {
    this.filterTypeSubscription = this.filterService.typeChanged.subscribe(
      (res) => {
        this.selectedFilter = res
      }
    )
    this.filterAmounSubscription = this.filterService.itemsAmount.subscribe(
      (res) => {
        this.chunkDevider = res
      }
    )
    this.selectedBrewer = this.utilsService.checkPropertyInLS(
      'cols',
      this.id,
      ''
    )
    this.selectedFilter = this.utilsService.checkPropertyInLS(
      'filters',
      'typeFilter',
      'name'
    )
    this.chunkDevider = this.utilsService.checkPropertyInLS(
      'filters',
      'amountFilter',
      15
    )
  }

  ngOnDestroy(): void {
    this.filterAmounSubscription.unsubscribe()
    this.filterTypeSubscription.unsubscribe()
  }

  get filteredData(): responseData[] {
    return this.filterPipe.transform(
      this.data,
      this.selectedBrewer,
      this.selectedFilter
    )
  }

  get isAnyMoreItems(): boolean {
    if (this.filteredData) {
      const count = this.chunkCount + 1
      return Math.ceil(this.filteredData.length / this.chunkDevider) > count
    }
  }

  onChange(e): void {
    this.selectedBrewer = e.value
    this.utilsService.storeInLS('cols', this.id, this.selectedBrewer)
  }

  onLoadMore(): void {
    if (this.isAnyMoreItems) {
      this.chunkCount++
    }
  }

  openDialog(item: responseData): void {
    this.dialog.open(ItemModalComponent, {
      data: {
        item,
      },
    })
  }
}
