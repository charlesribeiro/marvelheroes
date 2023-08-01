import { createEffect } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { MarvelService } from "src/app/services/marvel.service";
import * as fromMarvelActions from "../state/app.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private marvelService: MarvelService
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMarvelActions.getCharactersAll),
      mergeMap(() =>
        this.marvelService.getCharactersAll().pipe(
          map((list) => list?.data?.results),
          map((charList) =>
            fromMarvelActions.getCharactersAllSuccess({ charList })
          ),
          catchError((errorMessage) =>
            of(fromMarvelActions.getCharactersAllFail({ errorMessage }))
          )
        )
      )
    )
  );
}
