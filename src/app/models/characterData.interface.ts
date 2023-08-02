export interface CharacterListAPI {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharacterData[];
  };
}

export interface CharacterData {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface CharacterError {
  code: string;
  message: string;
}
