import { StoreList } from "../utils/store-utils";
import { CharData } from "../app/models/characterData.interface";

export interface IApp {
  charList: StoreList<CharData>;
  selectedList: StoreList<CharData>;
}

export interface IAppState {
  AppState: IApp;
}
