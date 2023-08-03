import { CharData } from "../app/models/characterData.interface";
export interface StoreList<T> {
  entities: T[];
  loading: boolean;
  error: boolean;
}

export const storeListInitialState: StoreList<CharData> = {
  entities: [],
  loading: false,
  error: false,
};
