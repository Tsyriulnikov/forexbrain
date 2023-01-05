import {createAction, props} from "@ngrx/store";

export const GET_HISTORICAL_CURRENCIES_LIST = '[PokemonList] Get Pokemon List'
export const GET_HISTORICAL_CURRENCIES_LIST_SUCCESS = '[PokemonList] Get Pokemon List Success'


export const getHistoricalCurrenciesListAction = createAction(
  GET_HISTORICAL_CURRENCIES_LIST,
)
export const getHistoricalCurrenciesListSuccessAction = createAction(
  GET_HISTORICAL_CURRENCIES_LIST_SUCCESS,
  // props<{ response: PokemonResponse }>()
)
