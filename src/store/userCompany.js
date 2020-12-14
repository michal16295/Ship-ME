import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import paths from "../constants/pathConstants";
import api from "../api/constants";

// Slice
const slice = createSlice({
  name: "userCompany",
  initialState: {
    res: null,
    companies: [],
    users: [],
    loading: true,
    error: "",
    errors: false,
  },
  reducers: {
    loadUserCompaniesSuccess: (state, action) => {
      state.companies = action.payload;
      state.loading = false;
      state.errors = false;
    },
    loadUserCompaniesError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    loadCompanyUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.errors = false;
    },
    loadCompanyUsersError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    addExsitingUserSuccess: (state, action) => {
      state.res = action.payload;
      state.loading = false;
      state.errors = false;
    },
    addExsitingUserError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
  },
});
export default slice.reducer;
// Actions
const {
  loadUserCompaniesSuccess,
  loadUserCompaniesError,
  loadCompanyUsersSuccess,
  loadCompanyUsersError,
  addExsitingUserSuccess,
  addExsitingUserError,
} = slice.actions;

//All the companies of a given user
export const loadUserCompanies = (search) => async (dispatch) => {
  try {
    const res = await http.get(
      `${api.USER_COMPANIES}/?search=${encodeURIComponent(search)}`
    );
    dispatch(loadUserCompaniesSuccess(res.data));
  } catch (e) {
    dispatch(loadUserCompaniesError(e.response.data.error));
    if (e.response.status === 403) window.location = paths.NOT_AUTHORIZE;
  }
};
//All the users of a given company
export const loadCompanyUsers = (id, search) => async (dispatch) => {
  try {
    const res = await http.get(
      `${api.COMPANY_USERS}/${id}/?search=${encodeURIComponent(search)}`
    );
    dispatch(loadCompanyUsersSuccess(res.data));
  } catch (e) {
    dispatch(loadCompanyUsersError(e.response.data.error));
    if (e.response.status === 403) window.location = paths.NOT_AUTHORIZE;
  }
};
export const addExistingUser = (data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.ADD_EXISTING_USER}`, data);
    dispatch(addExsitingUserSuccess(res.data));
    window.location = paths.ACCOUNT;
  } catch (e) {
    dispatch(addExsitingUserError(e.response.data.error));
  }
};
