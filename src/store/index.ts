import { configureStore } from '@reduxjs/toolkit';
import { twoSpoonApi } from 'store/services';

export const store = configureStore({
  reducer: {
    [twoSpoonApi.reducerPath]: twoSpoonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(twoSpoonApi.middleware),
});
