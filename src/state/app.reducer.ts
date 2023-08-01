import { createReducer, on, Action } from "@ngrx/store";
import {
  getCharactersAll,
  getCharactersAllSuccess,
  getCharactersAllFail,
} from "./app.actions";
import { IApp } from "./app.interface";

export const userFeatureKey = "AppState";

export const initialAppState: IApp = {
  username: "",
  password: "",
  authenticationMessage: "",
  characterList: [],
};

export const reducer = createReducer(
  initialAppState as IApp,
  on(getCharactersAll, (state) => ({
    ...state,
  })),
  on(getCharactersAllSuccess, (state, { charList }) => ({
    ...state,
    characterList: charList,
  })),
  on(getCharactersAllFail, (state, { errorMessage }) => ({
    ...state,
    authenticationMessage: errorMessage,
  }))
);

export function AppReducer(state: IApp | undefined, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}
