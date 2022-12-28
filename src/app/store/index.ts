import {MainFetchState} from "./reducers/main-fetch.reducer";

export interface StateApp {
  mainFetchState: MainFetchState
}

export const reducers: ActionReducerMap<StateApp> = {
  pokemonList: reducer,
}
