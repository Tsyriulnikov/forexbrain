import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FetchMainService {

  constructor(private http: HttpClient) { }
  // https://marketdata.tradermade.com/api/v1/timeseries?currency=EURUSD&api_key=rUypnugWs7xjI1Xw1nVv&start_date=2022-11-19-00:00&end_date=2022-12-19-12:00&format=records&interval=hourly
    getHistoricalCurrenciesList() {
  return this.http.get<any>(`${environment.baseUrl}/historical_currencies_list?`)
}

}
