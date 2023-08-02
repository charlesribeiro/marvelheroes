import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IApp } from "../../../state/app.interface";
import * as loginActions from "../../../state/app.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<IApp>) {}

  ngOnInit(): void {
    this.store.dispatch(loginActions.getCharactersAll());
    this.store.dispatch(
      loginActions.getCharacterListBySearch({ character: "Adam Destine" })
    );
    this.store.dispatch(loginActions.getCharacterById({ id: 1011334 }));
  }
}
