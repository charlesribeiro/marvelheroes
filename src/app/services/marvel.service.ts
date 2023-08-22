import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5";
import { CharacterListAPI } from "../models/characterData.interface";
import { privateKey, publicKey } from "../../keys";
import { IAppState } from "src/state/app.interface";
import { Store } from "@ngrx/store";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import * as fromAppSelectors from "../../state/app.selectors"

@UntilDestroy()
@Injectable({
  providedIn: "root",
})
export class MarvelService {
  private marvelCDN = "http://gateway.marvel.com/v1/public";
  private resultLimit = 50;
  private offset = 0;

  constructor(private http: HttpClient, private store: Store<IAppState>) {

    this.store
      .select(fromAppSelectors.selectPageSize)
      .pipe(untilDestroyed(this))
      .subscribe((offset) => (this.offset = offset));
  }



  getCharactersAll(): Observable<CharacterListAPI> {
    return this.http.get<CharacterListAPI>(
      `${this.marvelCDN}/characters?limit=${this.resultLimit}&offset=${this.offset
      }${this.getPayload()}`
    );
  }

  getCharacterListBySearch(inputName: string): Observable<CharacterListAPI> {
    return this.http.get<CharacterListAPI>(
      `${this.marvelCDN
      }/characters?nameStartsWith=${inputName}${this.getPayload()}`
    );
  }

  getCharacterById(id: number): Observable<CharacterListAPI> {
    return this.http.get<CharacterListAPI>(
      `${this.marvelCDN}/characters/${id}?${this.getPayload()}`
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
