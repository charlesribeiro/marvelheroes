import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AppEffects } from "./app.effects";
import { provideMockStore } from "@ngrx/store/testing";
import { provideMockActions } from "@ngrx/effects/testing";

import { initialAppState as initialState } from "../state/app.reducer";
import { Observable, of, throwError } from "rxjs";
import { Action } from "@ngrx/store";
import { cold, hot } from "jasmine-marbles";
import * as fromAppActions from "../state/app.actions";
import { MarvelService } from "../app/services/marvel.service";
import { mockAPI, mockChars, mockError } from "../utils/marvel-test.utils";

describe("AppEffects", () => {
  let actions$: Observable<Action>;
  let effects: AppEffects;
  let marvelService: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
    });
    effects = TestBed.inject<AppEffects>(AppEffects);
    marvelService = TestBed.inject(MarvelService);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  describe("loadCharacters$", () => {
    it("should return success action", () => {
      jest
        .spyOn(marvelService, "getCharactersAll")
        .mockReturnValue(of(mockAPI));
      actions$ = hot("a", { a: fromAppActions.getCharactersAll() });

      const expected$ = cold("b", {
        b: fromAppActions.getCharactersAllSuccess({ charList: mockChars }),
      });
      expect(effects.loadCharactersAll$).toBeObservable(expected$);
    });
  });

  it("should return error action", () => {
    jest
      .spyOn(marvelService, "getCharactersAll")
      .mockReturnValue(throwError(mockError));
    actions$ = hot("a", { a: fromAppActions.getCharactersAll() });

    const expected$ = cold("b", {
      b: fromAppActions.getCharactersAllFail({ message: "error test" }),
    });
    expect(effects.loadCharactersAll$).toBeObservable(expected$);
  });
});
