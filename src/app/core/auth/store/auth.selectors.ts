import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!localStorage.getItem("token"),
);

export const isLoading = createSelector(
  selectAuthState,
  (auth) => auth.loading,
);
