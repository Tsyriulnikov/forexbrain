import {CurrenciesList} from "../models/main.models";
import {Action, createReducer} from "@ngrx/store";

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
export function reducer(state: MainFetchState | undefined, action: Action): any {
  return mainFetchReducer(state, action);
}
