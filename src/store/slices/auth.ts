import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoading: boolean;
  authUser: null | string;
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: { isLoading: false, authUser: 'hahahah' },
  reducers: {
    loading: (state: AuthState, action: PayloadAction) => ({ ...state, isLoading: action.payload }),
    signIn: (state: AuthState, action: PayloadAction) => ({ authUser: action.payload, isLoading: false }),
    signOut: (state: AuthState) => ({ authUser: null, isLoading: false }),
  },
});

export const { actions, reducer } = AuthSlice;
