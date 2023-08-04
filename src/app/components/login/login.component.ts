import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IApp } from "../../../state/app.interface";
import * as loginActions from "../../../state/app.actions";
import { Observable } from "rxjs";
import * as fromAppSelectors from "../../../state/app.selectors";
import { CharData } from "../../models/characterData.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loadingAllCharacters$: Observable<CharData[]>;

  list: CharData[] = [];

  constructor(private store: Store<IApp>) {}

  ngOnInit(): void {
    this.store.dispatch(loginActions.getCharactersAll());
    this.store.dispatch(
      loginActions.getCharacterListBySearch({ character: "Adam Destine" })
    );
    this.store.dispatch(loginActions.getCharacterById({ id: 1011334 }));

    this.loadingAllCharacters$ = this.store.select(
      fromAppSelectors.selectAllCharacters
    );

    this.loadingAllCharacters$.subscribe((charList) => (this.list = charList));
  }
}
