import { configureStore } from '@reduxjs/toolkit';
import song from './song';


export const store = configureStore({
  reducer: {
    song,
  },
});
