import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gibiState, IFilm, IPeople, ILocation } from './types';

const initialState: gibiState = {
  filmList: [],
  peopleList: [],
  locationList: [],
  inputSearch: '',
  filtered: [],
  typeList: 'filmList',
};

export const gibiSlice = createSlice({
  name: 'gibi',
  initialState,
  reducers: {
    setFilm: (state, action: PayloadAction<IFilm[]>) => {
      state.filmList = [...action.payload];
    },
    setPeople: (state, action: PayloadAction<IPeople[]>) => {
      state.peopleList = [...action.payload];
    },
   setLocation: (state, action: PayloadAction<ILocation[]>) => {
      state.locationList = [...action.payload];
   },
   setInputSearch: (state, action: PayloadAction<string>) => {
      state.inputSearch = action.payload;
   },
   setFiltered: state => {
     const { typeList, inputSearch } = state;
     if (typeList === 'filmList') {
       state.filmList.filter((film: IFilm) => film.title.includes(inputSearch));
     };

     if (typeList === 'peopleList') {
       state.peopleList.filter((people: IPeople) => people.name.includes(inputSearch));
     };

     if (typeList === 'locationList') {
       state.locationList.filter((location: ILocation) => location.name.includes(inputSearch));
     }
   }
    },
});

export const { setFilm, setPeople, setLocation, setInputSearch } = gibiSlice.actions;

export default gibiSlice.reducer;