import { configureStore } from '@reduxjs/toolkit';
import song from './song';
import { favoritesApi } from '../favoritesAPI';



export const store = configureStore({
  reducer: {
    song,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(favoritesApi.middleware),
});
