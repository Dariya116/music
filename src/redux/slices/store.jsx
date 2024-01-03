import { configureStore } from '@reduxjs/toolkit';
import song from './song';
import { favoritesApi } from '../favoritesAPI';
import { registrationApi } from '../registrationAPI';



export const store = configureStore({
  reducer: {
    song,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritesApi.middleware).concat(registrationApi.middleware),
});
