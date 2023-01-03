import {Injectable} from "@angular/core";
import {MainFetchService} from "../../services/main-fetch.service";
import {createEffect, ofType} from "@ngrx/effects";
import {exhaustMap} from "rxjs";

@Injectable()
export class MainFetchEffects {
  constructor(
    // private actions$: Actions,
    private mainFetchService: MainFetchService
  ) {
  }
  getPokemonList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPokemonList),
      exhaustMap(action =>
        this.mainFetchService.getHistoricalCurrenciesList().pipe(
          map((response) => {
            return getPokemonListSuccess({response})
          }),
          catchError((error: any) => of(getPokemonListFailure(error))))
      )
    )
  );



}
