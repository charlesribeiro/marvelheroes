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

export const getCharacterListBySearch = createAction(
  "[Marvel API] get character by search Action",
  props<{ character: string }>()
);

export const getCharacterListBySearchSuccess = createAction(
  "[Marvel API] get character by search Success Action",
  props<{ selectedList: CharacterData[] }>()
);

export const getCharacterListBySearchFail = createAction(
  "[Mavel API] get character by search Fail Action",
  props<{ errorMessage: string }>()
);

export const getCharacterById = createAction(
  "[Marvel API] get character by id Action",
  props<{ id: number }>()
);

export const getCharacterByIdSuccess = createAction(
  "[Marvel API] get character by id Success Action",
  props<{ selectedList: CharacterData[] }>()
);

export const getCharacterByIdFail = createAction(
  "[Mavel API] get character by id Fail Action",
  props<{ errorMessage: string }>()
);
