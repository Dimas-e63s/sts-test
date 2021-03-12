import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

export interface ResponseData {
  abv: string;
  attributes: string;
  beer_id: number;
  brewer: string;
  category: string;
  country: string;
  image_url: string;
  name: string;
  on_sale: boolean;
  price: string | number;
  product_id: number;
  size: string;
  style: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  fetchData(): Observable<ResponseData[]> {
    return this.http
      .get<ResponseData[]>('http://ontariobeerapi.ca/beers/')
      .pipe(
        map((data) => this.utilsService.toPricePerLitre(data)),
        map((data) => data.sort((a, b) => (a.brewer > b.brewer ? 1 : -1))),
        catchError((errorRes) => throwError(errorRes))
      );
  }
}
