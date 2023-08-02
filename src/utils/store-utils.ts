import { CharacterData } from "../app/models/characterData.interface";
export interface StoreList<T> {
  entities: T[];
  loading: boolean;
  error: boolean;
}

export const storeListInitialState: StoreList<CharacterData> = {
  entities: [],
  loading: false,
  error: false,
};
