import { createReducer, on } from '@ngrx/store';
import { Name } from '../../core/models/name.model';
import { authUser, logout, setUser } from './auth.actions';

export interface AuthState {
  user: {
    id: number;
    name: Name;
    login: string;
    token: string;
  };
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: {
    id: 0,
    name: {
      first: '',
      last: ''
    },
    login: '',
    token: ''
  },
  isAuthenticated: false
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
      user: {
        id: 0,
        name: {
          first: '',
          last: ''
        },
        login: '',
        token: ''
      },
      isAuthenticated: false
    };
  })
);
