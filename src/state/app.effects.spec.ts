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
import {
  CharacterData,
  CharacterListAPI,
} from "../app/models/characterData.interface";

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

      expect(effects.loadCharacters$).toBeObservable(expected$);
    });
  });

  it("should return error action", () => {
    const error = "error test";
    jest
      .spyOn(marvelService, "getCharactersAll")
      .mockReturnValue(throwError(error));

    actions$ = hot("a", { a: fromAppActions.getCharactersAll() });
    const expected$ = cold("b", {
      b: fromAppActions.getCharactersAllFail({ errorMessage: "error test" }),
    });

    expect(effects.loadCharacters$).toBeObservable(expected$);
  });
});

const mockChars: CharacterData[] = [
  {
    id: 1,
    name: "nono",
    description: "nono",
    thumbnail: { path: "", extension: "" },
    resourceURI: "nono",
  },
];

const mockAPI: CharacterListAPI = {
  code: 1,
  status: "ok",
  data: {
    offset: 1,
    limit: 1,
    total: 1,
    count: 1,
    results: mockChars,
  },
};
