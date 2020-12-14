import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import paths from "../constants/pathConstants";
import globalConstants from "../constants/globalConstants";

const jwt = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
// Slice
const slice = createSlice({
  name: "currentUser",
  initialState: {
    profile: null,
    loading: true,
    error: "",
    errors: false,
    loggedIn: jwt ? true : false,
  },
  reducers: {
    loadCurrentUserSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.loggedIn = true;
      state.errors = false;
    },
    loadCurrentUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
      state.loggingIn = false;
    },
    loginSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.loggingIn = true;
      state.errors = false;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.loggingIn = false;
      state.errors = true;
    },
    registerSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.loggingIn = true;
      state.errors = false;
    },
    registerError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
      state.loggingIn = false;
    },
    currentUserUpdateSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.errors = false;
    },
    currentUserUpdateError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    logoutSuccess: (state, action) => {
      state.profile = null;
      state.loggingIn = false;
    },
  },
});
export default slice.reducer;
// Actions
const {
  loginSuccess,
  logoutSuccess,
  loginError,
  registerSuccess,
  registerError,
  loadCurrentUserError,
  loadCurrentUserSuccess,
  currentUserUpdateSuccess,
  currentUserUpdateError,
} = slice.actions;
export const login = (data) => async (dispatch) => {
  try {
    const res = await http.post("/users/login", data);
    dispatch(loginSuccess(res.data));
    localStorage.setItem(globalConstants.LOCAL_STR_TOKEN, res.data.jwt);
    if (res.data.numOfCompanies > 1) window.location = paths.WELCOME_COMPANIES;
    else window.location = paths.PROFILE + `/${res.data.userId}`;
  } catch (e) {
    dispatch(loginError(e.response.data.error));
  }
};
export const register = (data) => async (dispatch) => {
  try {
    const res = await http.post("/users/register", data);
    localStorage.setItem(globalConstants.LOCAL_STR_TOKEN, res.data.jwt);
    dispatch(registerSuccess(res.data));
    window.location = paths.PROFILE + `/${res.data.userId}`;
  } catch (e) {
    dispatch(registerError(e.response.data.error));
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutSuccess());
    setTimeout(() => {
      localStorage.removeItem(globalConstants.LOCAL_STR_TOKEN);
      window.location = paths.LOGIN;
    }, 50);
  } catch (e) {
    return console.error(e.message);
  }
};
export const loadCurrentUser = () => async (dispatch) => {
  try {
    const res = await http.get(`/users/profile`);
    dispatch(loadCurrentUserSuccess(res.data));
  } catch (e) {
    dispatch(loadCurrentUserError(e.response.data.error));
  }
};
export const updateCurrentUser = (data) => async (dispatch) => {
  try {
    const res = await http.post(`/users/update/`, data);
    dispatch(currentUserUpdateSuccess(res.data));
    window.location.reload();
  } catch (e) {
    dispatch(currentUserUpdateError(e.response.data.error));
  }
};
