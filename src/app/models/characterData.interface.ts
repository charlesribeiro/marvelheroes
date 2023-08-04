export interface CharacterListAPI {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharData[];
  };
}

export interface CharData {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  series: Series;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface CharacterError {
  code: string;
  message: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
}

export interface SeriesItem {
  resourceURI: string;
  name: string;
}
