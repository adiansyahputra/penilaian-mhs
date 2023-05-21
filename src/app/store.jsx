import { configureStore } from '@reduxjs/toolkit';
import nilaiReducer from '../slices/nilaiSlice';

export const store = configureStore({
  reducer: {
    nilai: nilaiReducer,
  },
});
