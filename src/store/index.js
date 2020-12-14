import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import userCompany from "./userCompany";
import company from "./company";
import image from "./Image";
import currentUser from "./currentUser";
import currentCompany from "./currentCompany";
const reducer = combineReducers({
  // here we will be adding reducers
  user,
  userCompany,
  company,
  image,
  currentUser,
  currentCompany,
});
const store = configureStore({
  reducer,
});
export default store;
