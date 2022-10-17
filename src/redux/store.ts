//@ts-nocheck

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

const reducer = combineReducers({
  [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  player: playerReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
