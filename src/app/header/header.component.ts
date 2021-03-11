import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderModalComponent } from './header-modal/header-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(HeaderModalComponent, {
      width: '22rem',
    });
  }

  ngOnInit(): void {}
}
