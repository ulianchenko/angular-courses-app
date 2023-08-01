import { createReducer, on } from '@ngrx/store';
import { Name } from '../../core/models/name.model';
import { authUser, logout, setError, setUser } from './auth.actions';

export interface AuthState {
  user: {
    id: number;
    name: Name;
    login: string;
    token: string;
  } | null;
  isAuthenticated: boolean;
  errorStr: string;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  errorStr: ''
};

export const authReducer = createReducer(
  initialState,
  on(authUser, (state, action): AuthState => {
    return {
      ...state,
      isAuthenticated: action.isAuth
    };
  }),
  on(setUser, (state, action): AuthState => {
    return {
      ...state,
      user: { ...action.user }
    };
  }),
  on(logout, (): AuthState => {
    return {
      user: null,
      isAuthenticated: false,
      errorStr: ''
    };
  }),
  on(setError, (state, action): AuthState => {
    return {
      ...state,
      errorStr: action.errorStr
    };
  })
);
