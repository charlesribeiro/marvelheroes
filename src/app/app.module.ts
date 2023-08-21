import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { metaReducers, reducers } from "src/state";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { AppEffects } from "src/state/app.effects";
import { CharacterListItemComponent } from "./components/character-list-item/character-list-item.component";
import { CharacterListComponent } from "./components/character-list/character-list.component";
import { SharedModule } from "./shared/shared.module";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharacterListItemComponent,
    CharacterListComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule,
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
