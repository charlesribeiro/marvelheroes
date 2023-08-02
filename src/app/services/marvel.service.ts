import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5";
import { privateKey, publicKey } from ".env/keys";
import { CharacterListAPI } from "../models/characterData.interface";

@Injectable({
  providedIn: "root",
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  private marvelCDN = "http://gateway.marvel.com/v1/public";
  private resultLimit = 50;

  getCharactersAll(): Observable<CharacterListAPI> {
    return this.http.get<CharacterListAPI>(
      `${this.marvelCDN}/characters?limit=${
        this.resultLimit
      }${this.getPayload()}`
    );
  }

  getCharacterListBySearch(inputName: string): Observable<CharacterListAPI> {
    return this.http.get<CharacterListAPI>(
      `${
        this.marvelCDN
      }/characters?nameStartsWith=${inputName}${this.getPayload()}`
    );
  }

  private getCurrentTimestamp(): number {
    return Date.now();
  }

  private getHashedStrings(): string {
    return Md5.hashStr(
      `${this.getCurrentTimestamp()}${privateKey}${publicKey}`
    );
  }

  private getPayload(): string {
    return `&ts=${this.getCurrentTimestamp()}&apikey=${publicKey}&hash=${this.getHashedStrings()}`;
  }
}
