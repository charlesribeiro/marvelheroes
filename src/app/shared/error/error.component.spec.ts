import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GlobalErrorComponent } from "./error.component";

describe("ErrorComponentComponent", () => {
  let component: GlobalErrorComponent;
  let fixture: ComponentFixture<GlobalErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalErrorComponent],
    });
    fixture = TestBed.createComponent(GlobalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
