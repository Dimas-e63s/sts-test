import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseData } from '../../shared/data.service';

interface DialogData {
  item: ResponseData;
}

@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.scss'],
})
export class ColumnModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {}
}
