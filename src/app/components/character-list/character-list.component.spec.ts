import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
      imports: [InfiniteScrollModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
