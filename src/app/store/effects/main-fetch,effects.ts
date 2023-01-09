import {Injectable} from "@angular/core";
import {MainFetchService} from "../../services/main-fetch.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {
  getHistoricalCurrenciesListAction, getHistoricalCurrenciesListFailure,
  getHistoricalCurrenciesListSuccessAction,
} from "../actions/main-fetch.actions";

@Injectable()
export class MainFetchEffects {
  constructor(
    private actions$: Actions,
    private mainFetchService: MainFetchService
  ) {
  }
  getHistoricalCurrenciesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHistoricalCurrenciesListAction),
      exhaustMap(action =>
        this.mainFetchService.getHistoricalCurrenciesList().pipe(
          map((response) => {
            return getHistoricalCurrenciesListSuccessAction({response})
          }),
          catchError((error: any) => of(getHistoricalCurrenciesListFailure(error))))
      )
    )
  );

  getPokemonAbility$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPokemonAbility),
      exhaustMap(action =>
        this.pokemonListService.getPokemonAbility(action.urlAbility).pipe(
          map((pokemonAbility) => {
            return getPokemonAbilitySuccess({pokemonAbility})
          }),
          catchError((error: any) => of(getPokemonListFailure(error))))
      )
    )
  );


}
