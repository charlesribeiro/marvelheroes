import { createAction, props } from "@ngrx/store";
import { CharData } from "../app/models/characterData.interface";

export const getCharactersAll = createAction(
  "[Marvel API] get characters Action"
);

export const getCharactersMore = createAction(
  "[Marvel API] get characters more Action"
);

export const getCharactersAllSuccess = createAction(
  "[Marvel API] get characters Success Action",
  props<{ entities: CharData[] }>()
);

export const getCharactersAllFail = createAction(
  "[Marvel API] get characters Fail Action",
  props<{ message: string }>()
);

export const getCharacterListBySearch = createAction(
  "[Marvel API] get character by search Action",
  props<{ character: string }>()
);

export const getCharacterListBySearchSuccess = createAction(
  "[Marvel API] get character by search Success Action",
  props<{ entities: CharData[] }>()
);

export const getCharacterListBySearchFail = createAction(
  "[Marvel API] get character by search Fail Action",
  props<{ message: string }>()
);

export const getCharacterById = createAction(
  "[Marvel API] get character by id Action",
  props<{ id: number }>()
);

export const getCharacterByIdSuccess = createAction(
  "[Marvel API] get character by id Success Action",
  props<{ entities: CharData[] }>()
);

export const getCharacterByIdFail = createAction(
  "[Marvel API] get character by id Fail Action",
  props<{ message: string }>()
);
