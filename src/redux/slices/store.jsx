import { configureStore } from '@reduxjs/toolkit';
import song from './song';
import dataUser from './dataUser';

export const store = configureStore({
  reducer: {
    song,
    dataUser,
  },
});
