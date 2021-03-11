import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  checkPropertyInLS(
    LSPropName: string,
    propName: string | number,
    defaultValue: string | boolean | number
  ) {
    const filtersState = JSON.parse(localStorage.getItem(LSPropName))

    return filtersState && filtersState[propName]
      ? filtersState[propName]
      : defaultValue
  }

  storeInLS(
    LSItemName: string,
    name: string | number,
    value: string | boolean | number
  ): void {
    const previouseState = JSON.parse(localStorage.getItem(LSItemName))
    localStorage.setItem(
      LSItemName,
      JSON.stringify({ ...previouseState, [name]: value })
    )
  }
}
