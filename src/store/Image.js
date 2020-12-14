import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import api from "../api/constants";

// Slice
const slice = createSlice({
  name: "image",
  initialState: {
    image: null,
    loading: false,
    error: "",
    errors: false,
  },
  reducers: {
    uploadImageSuccess: (state, action) => {
      state.image = action.payload;
      state.loading = false;
      state.errors = false;
    },
    uploadImageError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
    uploadImageRequest: (state, action) => {
      state.loading = true;
      state.errors = false;
    },
  },
});
export default slice.reducer;
// Actions
const {
  uploadImageSuccess,
  uploadImageError,
  uploadImageRequest,
} = slice.actions;

export const uploadimage = (file, model, id) => async (dispatch) => {
  try {
    dispatch(uploadImageRequest());
    const res = await http.post(`/${model}/${api.UPLOAD_IMAGE}/${id}`, file);
    dispatch(uploadImageSuccess(res.data));
  } catch (e) {
    console.log(e);
    dispatch(uploadImageError(e.response.data.error));
  }
};
