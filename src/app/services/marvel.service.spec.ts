import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { MarvelService } from "./marvel.service";

describe("MarvelService", () => {
  let service: MarvelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MarvelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getCharactersAll", () => {
    it("should invoke the getCharacters API", (done) => {
      service.getCharactersAll().subscribe(() => {
        expect(mockReq.request.method).toBe("GET");
        done();
      });

      const mockReq = httpMock.expectOne((request) =>
        request.url.includes("/characters?limit=")
      );
      mockReq.flush({});
    });
  });
});
