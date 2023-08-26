import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IApp } from "../../../state/app.interface";
import * as appActions from "../../../state/app.actions";
import { Observable } from "rxjs";
import * as fromAppSelectors from "../../../state/app.selectors";
import { CharData } from "../../models/characterData.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loadingAllCharacters$: Observable<boolean>;
  errorAllCharacters$: Observable<boolean>;
  allCharacters$: Observable<CharData[]>;

  list: CharData[] = [];

  constructor(private store: Store<IApp>) { }

  ngOnInit(): void {
    this.store.dispatch(appActions.getCharactersAll());
    this.store.dispatch(
      appActions.getCharacterListBySearch({ character: "Adam Destine" })
    );

    this.loadingAllCharacters$ = this.store.select(
      fromAppSelectors.selectAllCharactersLoading
    );
    this.errorAllCharacters$ = this.store.select(
      fromAppSelectors.selectAllCharactersError
    );
    this.allCharacters$ = this.store.select(
      fromAppSelectors.selectAllCharacters
    );

    this.allCharacters$.subscribe((charList) => (this.list = charList));
  }

  selectedId(id: number) {
    this.store.dispatch(appActions.getCharacterById({ id }));
  }

  scrolled() {
    this.store.dispatch(appActions.getCharactersMore());
  }
}
