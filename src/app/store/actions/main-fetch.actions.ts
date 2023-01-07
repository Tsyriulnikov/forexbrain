import {createAction, props} from "@ngrx/store";

export const GET_HISTORICAL_CURRENCIES_LIST = '[PokemonList] Get Pokemon List'
export const GET_HISTORICAL_CURRENCIES_LIST_SUCCESS = '[PokemonList] Get Pokemon List Success'
export const GET_HISTORICAL_CURRENCIES_LIST_FAILURE = '[PokemonList] Get Pokemon List Failure'

export const getHistoricalCurrenciesListAction = createAction(
  GET_HISTORICAL_CURRENCIES_LIST,
)
export const getHistoricalCurrenciesListSuccessAction = createAction(
  GET_HISTORICAL_CURRENCIES_LIST_SUCCESS,
  props<{ response: any }>()
)
export const getHistoricalCurrenciesListFailure = createAction(
  GET_HISTORICAL_CURRENCIES_LIST_FAILURE,
  props<any>()
)
