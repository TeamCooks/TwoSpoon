import { configureStore } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { twoSpoonApi } from 'store/services';

export const store = configureStore({
  reducer: {
    [twoSpoonApi.reducerPath]: twoSpoonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(twoSpoonApi.middleware),
});

export const StoreProvider = (props: { children: ReactNode }) => {
  return <Provider store={store} {...props} />;
};
