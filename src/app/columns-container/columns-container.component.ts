import { Component, OnInit } from '@angular/core';
import { DataService, ResponseData } from '../shared/data.service';

@Component({
  selector: 'app-columns-container',
  templateUrl: './columns-container.component.html',
  styleUrls: ['./columns-container.component.scss'],
})
export class ColumnsContainerComponent implements OnInit {
  data: ResponseData[];
  error: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      (res) => {
        this.data = res;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
