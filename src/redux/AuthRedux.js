import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authRequest: ["username", "password"],
  logoutRequest: null,
  authSuccess: ["token","userID"],
  authFailure: null
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  token: null,
  userID:null, 
});

/* ------------- Selectors ------------- */

export const AuthSelectors = {
  selectToken: state => state.auth.token
};

/* ------------- Reducers ------------- */

// user login
export const request = (state, { username, password }) =>
  state.merge({ fetching: true,  token: null , userID:null });

  // user logout
export const logout = (state) =>
state.merge({ fetching: null, error:null, token: null , userID:null });


// successful user login
export const success = (state, action) => {
  const { token, userID } = action;
  return state.merge({ fetching: false, error: null, token, userID });
};

// failed to login
export const failure = state =>
  state.merge({ fetching: false, error: true, token: null , userID: null});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.LOGOUT_REQUEST]: logout,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAILURE]: failure
});
