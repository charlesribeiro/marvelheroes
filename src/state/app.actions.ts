import { createAction, props } from "@ngrx/store";
import { CharacterData } from "../app/models/characterData.interface";

export const getCharactersAll = createAction(
  "[Marvel API] get characters Action"
);

export const getCharactersAllSuccess = createAction(
  "[Marvel API] get characters Success Action",
  props<{ charList: CharacterData[] }>()
);

export const getCharactersAllFail = createAction(
  "[Mavel API] get characters Fail Action",
  props<{ errorMessage: string }>()
);
