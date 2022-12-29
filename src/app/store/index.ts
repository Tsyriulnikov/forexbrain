import {mainFetchReducer, MainFetchState} from "./reducers/main-fetch.reducer";
import {ActionReducerMap} from "@ngrx/store";

export interface StateApp {
  mainFetchState: MainFetchState
}

export const reducers: ActionReducerMap<StateApp> = {
  mainFetchState: reducer,
}
