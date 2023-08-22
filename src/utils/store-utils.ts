import { CharData } from "../app/models/characterData.interface";
export interface StoreList<T> {
  entities: T[];
  loading: boolean;
  error: boolean;
  loadingMore: boolean;
  offset: number;
  pageSize: number;
}

export const storeListInitialState: StoreList<CharData> = {
  entities: [],
  loading: false,
  error: false,
  loadingMore: false,
  offset: 0,
  pageSize: 50
};
