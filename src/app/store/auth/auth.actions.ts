import { createAction, props } from '@ngrx/store';
import { UserEntity } from '../../core/models/user.model';

export const checkUserToken = createAction('[Auth] checkUserToken');

export const authUser = createAction(
  '[Auth] authUser',
  props<{ isAuth: boolean }>()
);

export const setUser = createAction(
  '[Auth] setUserData',
  props<{ user: UserEntity }>()
);

export const logout = createAction('[Auth] logout');

export const login = createAction(
  '[Auth] login',
  props<{ login: string; password: string }>()
);
