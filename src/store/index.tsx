import { configureStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { twoSpoonApi } from 'store/services';
import { reducer as authReducer } from './slices/auth';

export const store = configureStore({
  reducer: {
    [twoSpoonApi.reducerPath]: twoSpoonApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(twoSpoonApi.middleware),
});

export const StoreProvider = (props: { children: ReactNode }) => {
  return <Provider store={store} {...props} />;
};

export type RootState = ReturnType<typeof store.getState>;
