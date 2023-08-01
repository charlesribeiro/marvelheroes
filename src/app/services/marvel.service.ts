import { Injectable } from "@angular/core";
import { Observable, pluck } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5";
import { privateKey, publicKey } from ".env/keys";

@Injectable({
  providedIn: "root",
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  private marvelCDN = "http://gateway.marvel.com/v1/public";
  private resultLimit = 50;

  getCharactersAll(): Observable<any> {
    const currentTimestamp = Date.now();
    const hashedStrings = Md5.hashStr(
      `${currentTimestamp}${privateKey}${publicKey}`
    );
    const getCharURL = `${this.marvelCDN}/characters?limit=${this.resultLimit}&ts=${currentTimestamp}&apikey=${publicKey}&hash=${hashedStrings}`;

    return this.http.get<any>(getCharURL).pipe(pluck("data"));
  }
}
