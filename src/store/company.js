import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import paths from "../constants/pathConstants";
import api from "../api/constants";

// Slice
const slice = createSlice({
  name: "company",
  initialState: {
    company: null,
    loading: true,
    error: "",
    errors: false,
  },
  reducers: {
    loadCompanySuccess: (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.errors = false;
    },
    loadCompanyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    updateCompanySuccess: (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.errors = false;
    },
    updateCompanyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    createCompanySuccess: (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.errors = false;
    },
    createCompanyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    deleteCompanySuccess: (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.errors = false;
    },
    deleteCompanyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    clearCompany: (state, action) => {
      state.company = null;
      state.loading = true;
      state.errors = false;
    },
  },
});
export default slice.reducer;
// Actions
const {
  loadCompanySuccess,
  loadCompanyError,
  updateCompanySuccess,
  updateCompanyError,
  createCompanyError,
  createCompanySuccess,
  deleteCompanySuccess,
  deleteCompanyError,
  clearCompany,
} = slice.actions;

export const loadCompany = (id) => async (dispatch) => {
  try {
    dispatch(clearCompany());
    const res = await http.get(`${api.LOAD_COMPANY}/${id}`);
    dispatch(loadCompanySuccess(res.data));
  } catch (e) {
    dispatch(loadCompanyError(e.response.data.error));
  }
};
export const updateCompany = (id, data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.UPDATE_COMPANY}/${id}`, data);
    dispatch(updateCompanySuccess(res.data));
    window.location.reload();
  } catch (e) {
    dispatch(updateCompanyError(e.response.data.error));
  }
};
export const createCompany = (data) => async (dispatch) => {
  try {
    const res = await http.post(`${api.CREATE_COMPANY}`, data);
    dispatch(createCompanySuccess(res.data));
    window.location = paths.COMPANIES;
  } catch (e) {
    dispatch(createCompanyError(e.response.data.error));
  }
};
export const deleteCompany = (id) => async (dispatch) => {
  try {
    const res = await http.delete(`${api.DELETE_COMPANY}/${id}`);
    dispatch(deleteCompanySuccess(res.data));
    window.location = paths.COMPANIES;
  } catch (e) {
    dispatch(deleteCompanyError(e.response.data.error));
    if (e.response.status === 403) window.location = paths.NOT_AUTHORIZE;
  }
};
