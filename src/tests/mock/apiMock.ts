import { IFilm } from '../../app/types';
import { IPeople } from '../../app/types';
import { ILocation } from '../../app/types';

export const filmsMock: IFilm[] = [
  {
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "release_date": "1986",
  }
];

export const peopleMock: IPeople[] = [
  {
    "id": "267649ac-fb1b-11eb-9a03-0242ac130003",
    "name": "Haku",
    "gender": "Male",
    "age": "12",
    "eye_color": "Green",
    "hair_color": "Green",
  }
];

export const locationMock: ILocation[] = [
  {
    "id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
    "name": "Irontown",
    "climate": "Continental",
    "terrain": "Mountain",
    "surface_water": "40",
  }
];