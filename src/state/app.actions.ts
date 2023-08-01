import { createAction, props } from "@ngrx/store";

export const getCharactersAll = createAction(
  "[Marvel API] get characters Action"
);

export const getCharactersAllSuccess = createAction(
  "[Marvel API] get characters Success Action"
);

export const getCharactersAllFail = createAction(
  "[Mavel API] get characters Fail Action",
  props<{ message: string }>()
);
