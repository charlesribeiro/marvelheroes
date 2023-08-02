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
  });

  beforeEach(() => {
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
        b: fromAppActions.getCharactersAllSuccess({ entities: mockChars }),
      });
      expect(effects.loadCharactersAll$).toBeObservable(expected$);
    });

    it("should return error action", () => {
      jest
        .spyOn(marvelService, "getCharactersAll")
        .mockReturnValue(throwError(() => new Error(mockError.message)));
      actions$ = hot("a", { a: fromAppActions.getCharactersAll() });

      const expected$ = cold("b", {
        b: fromAppActions.getCharactersAllFail({ message: mockError.message }),
      });
      expect(effects.loadCharactersAll$).toBeObservable(expected$);
    });
  });

  describe("loadCharacterBySearch$", () => {
    it("should return success action", () => {
      jest
        .spyOn(marvelService, "getCharacterListBySearch")
        .mockReturnValue(of(mockAPI));
      actions$ = hot("a", {
        a: fromAppActions.getCharacterListBySearch({ character: "abc" }),
      });

      const expected$ = cold("b", {
        b: fromAppActions.getCharacterListBySearchSuccess({
          entities: mockChars,
        }),
      });
      expect(effects.loadCharacterBySearch$).toBeObservable(expected$);
    });

    it("should return error action", () => {
      jest
        .spyOn(marvelService, "getCharacterListBySearch")
        .mockReturnValue(throwError(() => new Error(mockError.message)));
      actions$ = hot("a", {
        a: fromAppActions.getCharacterListBySearch({ character: "error" }),
      });

      const expected$ = cold("b", {
        b: fromAppActions.getCharacterListBySearchFail({
          message: mockError.message,
        }),
      });
      expect(effects.loadCharacterBySearch$).toBeObservable(expected$);
    });
  });

  describe("loadCharacterById$", () => {
    it("should return success action", () => {
      jest
        .spyOn(marvelService, "getCharacterById")
        .mockReturnValue(of(mockAPI));
      actions$ = hot("a", {
        a: fromAppActions.getCharacterById({ id: 123 }),
      });

      const expected$ = cold("b", {
        b: fromAppActions.getCharacterByIdSuccess({
          entities: mockChars,
        }),
      });
      expect(effects.loadCharacterById$).toBeObservable(expected$);
    });

    it("should return error action", () => {
      jest
        .spyOn(marvelService, "getCharacterById")
        .mockReturnValue(throwError(() => new Error(mockError.message)));
      actions$ = hot("a", {
        a: fromAppActions.getCharacterById({ id: 123 }),
      });

      const expected$ = cold("b", {
        b: fromAppActions.getCharacterByIdFail({
          message: mockError.message,
        }),
      });
      expect(effects.loadCharacterById$).toBeObservable(expected$);
    });
  });
});
