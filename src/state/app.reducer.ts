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
};

export const reducer = createReducer(
  initialAppState as IApp,
  on(getCharactersAll, (state) => ({
    ...state,
  })),
  on(getCharactersAllSuccess, (state) => ({
    ...state,
    authenticationMessage: "",
  })),
  on(getCharactersAllFail, (state, { message }) => ({
    ...state,
    authenticationMessage: message,
  }))
);

export function AppReducer(state: IApp | undefined, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}
