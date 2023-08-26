import { createEffect } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { MarvelService } from "../app/services/marvel.service";
import * as fromMarvelActions from "../state/app.actions";
import * as fromMarvelSelectors from "../state/app.selectors";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "./app.interface";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private marvelService: MarvelService,
    private store: Store<IAppState>
  ) { }

  loadCharactersAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMarvelActions.getCharactersAll, fromMarvelActions.getCharactersMore),
      withLatestFrom(this.store.select(fromMarvelSelectors.selectPageSize)),
      mergeMap((([action, pageSize]) =>
        this.marvelService.getCharactersAll().pipe(
          map((list) => list?.data?.results),
          map((entities) =>
            fromMarvelActions.getCharactersAllSuccess({ entities })
          ),
          catchError(({ message }) =>
            of(fromMarvelActions.getCharactersAllFail({ message }))
          )
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
          map((entities) =>
            fromMarvelActions.getCharacterListBySearchSuccess({ entities })
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
          map((entities) =>
            fromMarvelActions.getCharacterByIdSuccess({ entities })
          ),
          catchError(({ message }) =>
            of(fromMarvelActions.getCharacterByIdFail({ message }))
          )
        )
      )
    )
  );
}
