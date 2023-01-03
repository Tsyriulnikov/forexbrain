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



}
