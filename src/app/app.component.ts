import { Component, OnInit } from '@angular/core'
import { DataService, responseData } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sts-test'
  selectedBrewer: string
  selectedBrewer2: string
  selectedFilter: string
  constructor(private dataService: DataService) {}
  data: responseData[]

  ngOnInit() {
    // this.dataService.fetchData().subscribe((response) => {
    //   this.data = response
    // })
  }

  onChange(e) {
    console.log(e)
  }
}
