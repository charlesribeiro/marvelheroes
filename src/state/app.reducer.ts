import { createReducer, on, Action } from "@ngrx/store";
import {
  getCharactersAll,
  getCharactersAllSuccess,
  getCharactersAllFail,
  getCharacterListBySearch,
  getCharacterListBySearchSuccess,
  getCharacterListBySearchFail,
} from "./app.actions";
import { IApp } from "./app.interface";

export const userFeatureKey = "AppState";

export const initialAppState: IApp = {
  authenticationMessage: "",
  charList: [],
  selectedList: [],
};

export const reducer = createReducer(
  initialAppState as IApp,
  on(getCharactersAll, (state) => ({
    ...state,
  })),
  on(getCharactersAllSuccess, (state, { charList }) => ({
    ...state,
    charList,
  })),
  on(getCharactersAllFail, (state, { message }) => ({
    ...state,
    authenticationMessage: message,
  })),
  on(getCharacterListBySearch, (state) => ({
    ...state,
  })),
  on(getCharacterListBySearchSuccess, (state, { selectedList }) => ({
    ...state,
    selectedList,
  })),
  on(getCharacterListBySearchFail, (state, { message }) => ({
    ...state,
    authenticationMessage: message,
  }))
);

export function AppReducer(state: IApp | undefined, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}
