import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authUser: null | string;
  isLoading: boolean;
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: { authUser: null, isLoading: false } as AuthState,
  reducers: {
    loading: (state: AuthState, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
    signIn: (_, action: PayloadAction<string>) => ({ authUser: action.payload, isLoading: false }),
    signOut: () => ({ authUser: null, isLoading: false }),
  },
});

export const { actions, reducer } = AuthSlice;
