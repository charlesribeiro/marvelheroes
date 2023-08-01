import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { provideMockStore } from "@ngrx/store/testing";
import { initialAppState as initialState } from "src/state/app.reducer";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, LoginComponent],
      providers: [provideMockStore({ initialState })],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'marvelheroes'`, () => {
    expect(app.title).toEqual("marvelheroes");
  });
});
