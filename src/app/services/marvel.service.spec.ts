import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { MarvelService } from "./marvel.service";
import { mockAPI } from "../../utils/marvel-test.utils";

describe("MarvelService", () => {
  let service: MarvelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarvelService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(MarvelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getCharactersAll", () => {
    it("should invoke the getCharacters API", (done) => {
      service.getCharactersAll().subscribe((res) => {
        expect(mockReq.request.method).toBe("GET");
        expect(res).toEqual(mockAPI);
        done();
      });

      const mockReq = httpMock.expectOne((request) =>
        request.url.includes(
          "http://gateway.marvel.com/v1/public/characters?limit=50&ts="
        )
      );
      mockReq.flush(mockAPI);
    });
  });

  describe("getCharacterListBySearch", () => {
    it("should invoke the getCharacterListBySearch API", (done) => {
      service.getCharacterListBySearch("abc").subscribe((res) => {
        expect(mockReq.request.method).toBe("GET");
        expect(res).toEqual(mockAPI);
        done();
      });

      const mockReq = httpMock.expectOne((request) =>
        request.url.includes(
          "http://gateway.marvel.com/v1/public/characters?nameStartsWith=abc"
        )
      );
      mockReq.flush(mockAPI);
    });
  });

  describe("getCharacterById", () => {
    it("should invoke the getCharacter by id API", (done) => {
      service.getCharacterById(123).subscribe((res) => {
        expect(mockReq.request.method).toBe("GET");
        expect(res).toEqual(mockAPI);
        done();
      });

      const mockReq = httpMock.expectOne((request) =>
        request.url.includes(
          "http://gateway.marvel.com/v1/public/characters/123?&ts="
        )
      );
      mockReq.flush(mockAPI);
    });
  });
});
