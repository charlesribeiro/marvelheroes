import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CharacterListItemComponent } from "./character-list-item.component";
import { mockChars } from "../../../utils/marvel-test.utils";
import { By } from "@angular/platform-browser";

describe("CharacterListItemComponent", () => {
  let component: CharacterListItemComponent;
  let fixture: ComponentFixture<CharacterListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterListItemComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListItemComponent);
    component = fixture.componentInstance;
    component.character = mockChars[0];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should show character name`, () => {
    const name = fixture.debugElement.query(
      By.css(".flex > .w-48 > b")
    ).nativeElement;

    expect(name.textContent).toContain("nono");
  });
});
