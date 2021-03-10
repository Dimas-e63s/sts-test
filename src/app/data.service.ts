import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, tap } from 'rxjs/operators'

export interface responseData {
  abv: string
  attributes: string
  beer_id: number
  brewer: string
  category: string
  country: string
  image_url: string
  name: string
  on_sale: boolean
  price: string | number
  product_id: number
  size: string
  style: string
  type: string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http
      .get<responseData[]>('http://ontariobeerapi.ca/beers/')
      .pipe(
        map((data) =>
          data.map((item) => {
            const itemCopy = { ...item }
            const updatedPrice = item['size']
              .split(' ')
              .reduce((acc, next, idx, arr) => {
                if (idx === 0) {
                  acc /= +next
                }
                if (idx === arr.length - 1) {
                  acc = +((acc / parseInt(next)) * 1000).toFixed(2)
                }
                return acc
              }, +item['price'])
            return { ...item, price: updatedPrice }
          })
        ),
        map((data) =>
          data.sort((a, b) => {
            if (a.brewer > b.brewer) {
              return 1
            }
            return -1
          })
        )
      )
  }
}
