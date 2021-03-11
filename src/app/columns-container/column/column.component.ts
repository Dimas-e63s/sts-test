import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseData } from '../../shared/data.service';
import { FilterService } from '../../shared/filter.service';
import { ColumnModalComponent } from '../column-modal/column-modal.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';
import { UtilsService } from '../../shared/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [FilterPipe],
})
export class ColumnComponent implements OnInit, OnDestroy {
  @Input() id: number;
  @Input() data: ResponseData[];
  selectedFilter: string;
  chunkCount = 0;
  chunkDevider: number;
  isLoading = false;
  selectedBrewer: string;
  filterTypeSubscription: Subscription;
  filterAmounSubscription: Subscription;

  constructor(
    private filterService: FilterService,
    private utilsService: UtilsService,
    public dialog: MatDialog,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit(): void {
    this.filterTypeSubscription = this.filterService.typeChanged.subscribe(
      (res) => {
        this.selectedFilter = res;
      }
    );
    this.filterAmounSubscription = this.filterService.itemsAmount.subscribe(
      (res) => {
        this.chunkDevider = res;
      }
    );
    this.selectedBrewer = this.utilsService.checkPropertyInLS({
      LSItem: 'cols',
      propName: this.id,
      defVal: '',
    });
    this.selectedFilter = this.utilsService.checkPropertyInLS({
      LSItem: 'filters',
      propName: 'typeFilter',
      defVal: 'name',
    });
    this.chunkDevider = this.utilsService.checkPropertyInLS({
      LSItem: 'filters',
      propName: 'amountFilter',
      defVal: 15,
    });
  }

  ngOnDestroy(): void {
    this.filterAmounSubscription.unsubscribe();
    this.filterTypeSubscription.unsubscribe();
  }

  get filteredData(): ResponseData[] {
    return this.filterPipe.transform(
      this.data,
      this.selectedBrewer,
      this.selectedFilter
    );
  }

  get isAnyMoreItems(): boolean {
    if (this.filteredData) {
      const count = this.chunkCount + 1;
      return Math.ceil(this.filteredData.length / this.chunkDevider) > count;
    }
  }

  onChange(e): void {
    this.selectedBrewer = e.value;
    this.utilsService.storeInLS({
      LSItem: 'cols',
      propName: this.id,
      value: this.selectedBrewer,
    });
  }

  onLoadMore(): void {
    if (this.isAnyMoreItems) {
      this.chunkCount++;
    }
  }

  openDialog(item: ResponseData): void {
    this.dialog.open(ColumnModalComponent, {
      data: {
        item,
      },
    });
  }
}
