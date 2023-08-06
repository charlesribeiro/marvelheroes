import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GlobalLoaderComponent } from "./loader.component";

describe("LoaderComponent", () => {
  let component: GlobalLoaderComponent;
  let fixture: ComponentFixture<GlobalLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalLoaderComponent],
    });
    fixture = TestBed.createComponent(GlobalLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
