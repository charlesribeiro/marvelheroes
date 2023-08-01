import { CharacterData } from "src/app/models/characterData.interface";

export interface IApp {
  username: string;
  password: string;
  authenticationMessage: string;
  characterList: CharacterData[];
}

export interface IAppState {
  AppState: IApp;
}
