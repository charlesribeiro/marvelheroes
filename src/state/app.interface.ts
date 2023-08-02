import { StoreList } from "../utils/store-utils";
import { CharacterData } from "../app/models/characterData.interface";

export interface IApp {
  charList: StoreList<CharacterData>;
  selectedList: StoreList<CharacterData>;
}

export interface IAppState {
  AppState: IApp;
}
