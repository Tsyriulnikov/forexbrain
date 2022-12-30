import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CurrenciesList} from "../store/models/main.models";

@Injectable({
  providedIn: 'root'
})
export class MainFetchService {

  constructor(private http: HttpClient) {
  }

  getHistoricalCurrenciesList() {
    return this.http.get<CurrenciesList>(`${environment.baseUrl}/historical_currencies_list?api_key=${environment.api_key}`)
  }

}
