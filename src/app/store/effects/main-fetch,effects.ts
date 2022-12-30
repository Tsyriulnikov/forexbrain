import {Injectable} from "@angular/core";
import {MainFetchService} from "../../services/main-fetch.service";

@Injectable()
export class MainFetchEffects {
  constructor(
    // private actions$: Actions,
    private mainFetchService: MainFetchService
  ) {
  }
}
