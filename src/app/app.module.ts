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
import { GlobalErrorComponent } from "./shared/error/error.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharacterListItemComponent,
    GlobalErrorComponent,
    LoaderComponent,
    SearchBarComponent,
    CharacterListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
