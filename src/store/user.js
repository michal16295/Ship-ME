import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import paths from "../constants/pathConstants";
import api from "../api/constants";

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    users: [],
    loading: true,
    error: "",
    errors: false,
  },
  reducers: {
    loadUserSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.loggedIn = true;
      state.errors = false;
    },
    loadUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
      state.loggingIn = false;
    },
    loadUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.loggedIn = true;
      state.errors = false;
    },
    loadUsersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
      state.loggingIn = false;
    },
    userUpdateSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.errors = false;
    },
    userUpdateError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    userCreateSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.errors = false;
    },
    userCreateError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    deleteUserSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.errors = false;
    },
    deleteUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    clearUser: (state, action) => {
      state.profile = null;
      state.loading = true;
      state.errors = false;
    },
  },
});
export default slice.reducer;
// Actions
const {
  userUpdateSuccess,
  userUpdateError,
  userCreateSuccess,
  userCreateError,
  loadUserSuccess,
  loadUserError,
  deleteUserSuccess,
  deleteUserError,
  loadUsersError,
  loadUsersSuccess,
  clearUser,
} = slice.actions;

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.UPDATE_USER}/${id}`, data);
    dispatch(userUpdateSuccess(res.data));
    window.location.reload();
  } catch (e) {
    dispatch(userUpdateError());
  }
};
export const createUser = (data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.CREATE_USER}`, data);
    dispatch(userCreateSuccess(res.data));
    window.location = paths.ACCOUNT;
  } catch (e) {
    dispatch(userCreateError(e.response.data.error));
  }
};
export const loadUser = (id) => async (dispatch) => {
  try {
    dispatch(clearUser());
    const res = await http.get(`${api.LOAD_USER}/${id}`);
    dispatch(loadUserSuccess(res.data));
  } catch (e) {
    dispatch(loadUserError(e.response.data.error));
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await http.delete(`${api.DELETE_USER}${id}`);
    dispatch(deleteUserSuccess(res.data));
    window.location.reload();
  } catch (e) {
    dispatch(deleteUserError(e.response.data.error));
  }
};
export const loadUsers = () => async (dispatch) => {
  try {
    const res = await http.get(`${api.LOAD_ALL_USERS}`);
    dispatch(loadUsersSuccess(res.data));
  } catch (e) {
    dispatch(loadUsersError(e.response.data.error));
  }
};
