import { CharacterData } from "src/app/models/characterData.interface";

export interface IApp {
  authenticationMessage: string;
  charList: CharacterData[];
  selectedList: CharacterData[];
}

export interface IAppState {
  AppState: IApp;
}
