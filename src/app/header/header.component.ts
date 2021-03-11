import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '22rem',
    })
  }

  ngOnInit(): void {}
}
