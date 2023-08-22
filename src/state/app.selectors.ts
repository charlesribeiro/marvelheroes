import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IApp } from "./app.interface";
import { userFeatureKey } from "./app.reducer";

export const selectFeature = createFeatureSelector<IApp>(userFeatureKey);
export const selectAllCharacters = createSelector(
  selectFeature,
  (appState: IApp) => appState.charList.entities
);

export const selectAllCharactersLoading = createSelector(
  selectFeature,
  (appState: IApp) => appState.charList.loading
);

export const selectAllCharactersError = createSelector(
  selectFeature,
  (appState: IApp) => appState.charList.error
);

export const selectSelectedCharacters = createSelector(
  selectFeature,
  (appState: IApp) => appState.selectedList.entities
);

export const selectSelectedCharactersLoading = createSelector(
  selectFeature,
  (appState: IApp) => appState.selectedList.loading
);

export const selectSelectedCharactersError = createSelector(
  selectFeature,
  (appState: IApp) => appState.selectedList.error
);

export const selectPageSize = createSelector(
  selectFeature,
  (appState: IApp) => appState.charList.offset
);
