import { configureStore } from '@reduxjs/toolkit';
import gibiReducer from './ghibhiSlice';

export const store = configureStore({
  reducer: {
    ghibhi: gibiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
