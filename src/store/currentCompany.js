import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import globalConstants from "../constants/globalConstants";

// Slice
const slice = createSlice({
  name: "currentCompany",
  initialState: {
    company: null,
    loading: true,
    error: "",
    errors: false,
  },
  reducers: {
    loadCurrentCompanySuccess: (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.errors = false;
    },
    loadCurrentCompanyError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    updateCurrentCompanySuccess: (state, action) => {
      state.company = action.payload;
      state.loading = false;
      state.errors = false;
    },
    updateCurrentCompanyError: (state, action) => {
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
  loadCurrentCompanySuccess,
  loadCurrentCompanyError,
  updateCurrentCompanySuccess,
  updateCurrentCompanyError,
  clearCompany,
} = slice.actions;

export const loadInitialCompany = (id) => async (dispatch) => {
  try {
    const res = await http.get(`/companies/loadInitilCompany/${id}`);
    dispatch(loadCurrentCompanySuccess(res.data.company));
    localStorage.setItem(globalConstants.LOCAL_STR_TOKEN, res.data.jwt);
    window.location.reload();
  } catch (e) {
    dispatch(loadCurrentCompanyError(e.response.data.error));
  }
};
export const loadCurrentCompany = (id) => async (dispatch) => {
  try {
    const res = await http.get(`/companies/loadCompany/${id}`);
    dispatch(loadCurrentCompanySuccess(res.data));
  } catch (e) {
    dispatch(loadCurrentCompanyError(e.response.data.error));
  }
};
export const updateCurrentCompany = (id, data) => async (dispatch) => {
  try {
    const res = await http.post(`/companies/updateCompany/${id}`, data);
    dispatch(updateCurrentCompanySuccess(res.data));
    window.location.reload();
  } catch (e) {
    dispatch(updateCurrentCompanyError(e.response.data.error));
  }
};
