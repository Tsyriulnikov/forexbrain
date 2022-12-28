import {CurrenciesList} from "../models/main.models";
import {createReducer} from "@ngrx/store";

export interface MainFetchState {
  currenciesList:CurrenciesList
  }
const mainFetchInitialState: MainFetchState = {
 currenciesList:{
   available_currencies:[],
   endpoint:''
 }
}
export const mainFetchReducer = createReducer(
  mainFetchInitialState,
)
