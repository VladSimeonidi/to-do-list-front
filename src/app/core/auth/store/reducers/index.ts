import {
  createReducer,
  MetaReducer, on,
} from "@ngrx/store";
import { environment } from "../../../../../environments/environment";
import { AuthActions } from "../action.types";
import { UserModel } from "../../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: UserModel | undefined;
  loading: boolean,
  loaded: boolean,
}

export const initialAuthState: AuthState = {
  user: undefined,
  loading: false,
  loaded: false,
};

// export const reducers: ActionReducerMap<AuthState> = {};


export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.invokelogin, (state, action) => {
    return {
      loading: true,
      loaded: false,
      user: undefined,
    };
  }),
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      user: action.user,
      loaded: true,
      loading: false,
    };
  }),
  on(AuthActions.loginError, (state, action) => {
    return {
      user: undefined,
      loaded: false,
      loading: false,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
      loaded: false,
      loading: false,
    };
  }),
  on(AuthActions.invokeRegister, (state, action) => {
    return {
      loading: true,
      loaded: false,
      user: undefined,
    };
  }),
  on(AuthActions.registerSuccess, (state, action) => {
    return {
      user: undefined,
      loaded: true,
      loading: false,
    };
  }),
  on(AuthActions.registerError, (state, action) => {
    return {
      user: undefined,
      loaded: false,
      loading: false,
    };
  }),
);
