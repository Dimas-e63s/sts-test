import { Component, OnInit, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DataService, responseData } from '../data.service'
import { FilterService } from '../filter.service'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() id: number
  selectedFilter: string = 'name'
  data: responseData[]
  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    public dialog: MatDialog
  ) {}
  selectedBrewer: string

  ngOnInit() {
    this.dataService.fetchData().subscribe((response) => {
      this.data = response
    })
    this.filterService.filterTypeChanged.subscribe((res) => {
      console.log(res)

      this.selectedFilter = res
    })
    this.selectedBrewer = localStorage.getItem(`col-${this.id}`) ?? ''
    this.selectedFilter = localStorage.getItem('filter') ?? ''
  }
  onChange(e) {
    this.selectedBrewer = e.value
    localStorage.setItem(`col-${this.id}`, e.value)
  }

  openDialog(e) {
    console.log(e)

    const dialogRef = this.dialog.open(ModalComponent)

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
