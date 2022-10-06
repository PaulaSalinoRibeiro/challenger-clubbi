export interface IFilm {
  id: string,
  title: string,
  image: string,
  description: string,
  director: string,
  releaseDate: string,
};

export interface IPeople {
  id: string,
  name: string;
  gender: string;
  age: string;
  eyeColor: string,
  hairColor: string,
};

export interface ILocation {
  id: string,
  name: string,
  climate: string,
  terrain: string,
  surfaceWater: string,
};

export interface gibiState {
  filmList: IFilm[],
  peopleList: IPeople[],
  locationList: ILocation[],
  inputSearch: string,
  filtered: any[],
  typeList: 'filmList' | 'peopleList' | 'locationList',
};
