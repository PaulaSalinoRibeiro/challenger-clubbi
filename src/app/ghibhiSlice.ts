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

export const ghibhiSlice = createSlice({
  name: 'gibi',
  initialState,
  reducers: {
    setFilm: (state, action: PayloadAction<IFilm[]>) => {
      state.filmList = [...action.payload];
      state.filtered = [ ...action.payload];
    },

    setPeople: (state, action: PayloadAction<IPeople[]>) => {
      state.peopleList = [...action.payload];
      state.filtered = [...action.payload];
    },

   setLocation: (state, action: PayloadAction<ILocation[]>) => {
      state.locationList = [...action.payload];
      state.filtered = [...action.payload];
   },

   setTypeList: (state, action: PayloadAction<'filmList' | 'peopleList' | 'locationList'>) => {
      state.typeList = action.payload;
   },
   
   setFiltered: (state, action: PayloadAction<string>) => {
     if( state.typeList === 'filmList' ) {
       state.filtered = state.filmList
       .filter((film: IFilm) => film.title.toLowerCase().includes(action.payload.toLowerCase()));
     };

     if( state.typeList === 'peopleList' ) {
      state.filtered = state.peopleList
      .filter((people: IPeople) => people.name.toLowerCase().includes(action.payload.toLowerCase()));
     };

     if( state.typeList === 'locationList' ) {
      state.filtered = state.locationList
      .filter((location: ILocation) => location.name.toLowerCase().includes(action.payload.toLowerCase()));
     };
   },
  },
});

export const { setFilm, setPeople, setLocation, setTypeList, setFiltered } = ghibhiSlice.actions;

export default ghibhiSlice.reducer;