import {
  CharData,
  CharacterListAPI,
  CharacterError,
} from "../app/models/characterData.interface";

export const mockChars: CharData[] = [
  {
    id: 1,
    name: "nono",
    description: "nono",
    thumbnail: { path: "mypath", extension: ".jpg" },
    resourceURI: "nono",
    series: {
      available: 1,
      collectionURI: "nono",
      items: [
        {
          resourceURI: "123",
          name: "mockSeries",
        },
      ],
    },
    events: {
      available: 1,
      collectionURI: "nono",
      items: [
        {
          resourceURI: "123",
          name: "mockEvent",
        },
      ],
    },
  },
];

export const mockAPI: CharacterListAPI = {
  code: 1,
  status: "ok",
  data: {
    offset: 1,
    limit: 1,
    total: 1,
    count: 1,
    results: mockChars,
  },
};

export const mockError: CharacterError = {
  code: "404",
  message: "error test",
};
