import { Action } from "@ngrx/store";
import { AppReducer, initialAppState, reducer } from "./app.reducer";
import * as fromAppActions from "../state/app.actions";
import { mockChars, mockError } from "../utils/marvel-test.utils";

describe("appReducer", () => {
  describe("getCharactersAll", () => {
    it("should return to previous state", () => {
      const action = {} as Action;

      const result = reducer(initialAppState, action);

      expect(result).toBe(initialAppState);
    });

    it("should set loading to true on getCharactersAll", () => {
      const action = fromAppActions.getCharactersAll();

      const result = AppReducer(initialAppState, action);

      expect(result.charList.loading).toBeTruthy();
    });

    it("should set loading to false on getCharactersAllSuccess", () => {
      const action = fromAppActions.getCharactersAllSuccess({
        entities: mockChars,
      });

      const result = AppReducer(initialAppState, action);

      expect(result.charList.error).toBeFalsy();
      expect(result.charList.loading).toBeFalsy();
    });

    it("should set loading to false on getCharactersAllFail", () => {
      const action = fromAppActions.getCharactersAllFail({
        message: mockError.message,
      });

      const result = AppReducer(initialAppState, action);

      expect(result.charList.error).toBeTruthy();
      expect(result.charList.loading).toBeFalsy();
    });
  });
});
