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
import { storeListInitialState } from "../utils/store-utils";

export const userFeatureKey = "AppState";

export const initialAppState: IApp = {
  charList: storeListInitialState,
  selectedList: storeListInitialState,
};

export const reducer = createReducer(
  initialAppState as IApp,
  on(getCharactersAll, (state) => ({
    ...state,
    charList: {
      ...state.charList,
      loading: true,
      error: false,
    },
  })),
  on(getCharactersAllSuccess, (state, { entities }) => ({
    ...state,
    charList: {
      ...state.charList,
      entities,
      loading: false,
      error: false,
    },
  })),
  on(getCharactersAllFail, (state) => ({
    ...state,
    charList: {
      ...state.charList,
      loading: false,
      error: true,
    },
  })),
  on(getCharacterListBySearch, (state) => ({
    ...state,
    selectedList: {
      ...state.selectedList,
      loading: true,
      error: false,
    },
  })),
  on(getCharacterListBySearchSuccess, (state, { entities }) => ({
    ...state,
    selectedList: {
      ...state.selectedList,
      entities,
      loading: false,
      error: false,
    },
  })),
  on(getCharacterListBySearchFail, (state) => ({
    ...state,
    selectedList: {
      ...state.selectedList,
      loading: false,
      error: true,
    },
  }))
);

export function AppReducer(state: IApp | undefined, action: Action): IApp {
  return reducer(state as IApp, action as Action);
}
