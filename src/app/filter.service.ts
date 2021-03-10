import { Injectable, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class FilterService implements OnInit {
  filterType: string
  loadedAmount: number

  filterTypeChanged = new Subject<string>()

  constructor() {}

  ngOnInit() {}
}
