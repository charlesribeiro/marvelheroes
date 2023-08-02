import { createEffect } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { MarvelService } from "../app/services/marvel.service";
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

  loadCharactersAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMarvelActions.getCharactersAll),
      mergeMap(() =>
        this.marvelService.getCharactersAll().pipe(
          map((list) => list?.data?.results),
          map((charList) =>
            fromMarvelActions.getCharactersAllSuccess({ charList })
          ),
          catchError(({ message }) =>
            of(fromMarvelActions.getCharactersAllFail({ message }))
          )
        )
      )
    )
  );

  loadCharacterBySearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMarvelActions.getCharacterListBySearch),
      mergeMap(({ character }) =>
        this.marvelService.getCharacterListBySearch(character).pipe(
          map((list) => list?.data?.results),
          map((selectedList) =>
            fromMarvelActions.getCharacterListBySearchSuccess({ selectedList })
          ),
          catchError(({ message }) =>
            of(fromMarvelActions.getCharacterListBySearchFail({ message }))
          )
        )
      )
    )
  );

  loadCharacterById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMarvelActions.getCharacterById),
      mergeMap(({ id }) =>
        this.marvelService.getCharacterById(id).pipe(
          map((list) => list?.data?.results),
          map((selectedList) =>
            fromMarvelActions.getCharacterByIdSuccess({ selectedList })
          ),
          catchError(({ message }) =>
            of(fromMarvelActions.getCharacterByIdFail({ message }))
          )
        )
      )
    )
  );
}
