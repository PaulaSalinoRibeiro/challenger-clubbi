import { configureStore } from '@reduxjs/toolkit';
import gibiReducer from './gibiSlice';

export const store = configureStore({
  reducer: {
    gibi: gibiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
