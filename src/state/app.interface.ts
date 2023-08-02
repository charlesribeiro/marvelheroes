import { CharacterData } from "../app/models/characterData.interface";

export interface IApp {
  username: string;
  password: string;
  authenticationMessage: string;
  characterList: CharacterData[];
}

export interface IAppState {
  AppState: IApp;
}
