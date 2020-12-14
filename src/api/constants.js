const api = {
  //users
  LOGIN: "/users/login",
  REGISTER: "/users/register",
  UPDATE_USER: "/users/update/",
  CREATE_USER: "/users/createUser",
  LOAD_USER: "/users/loadUser",
  DELETE_USER: "/users/delete",
  LOAD_ALL_USERS: "/users/loadAllUsers",
  LOAD_CURRENT_USER: "/users/profile",
  UPDATE_USER: "/users/update",

  //companies
  LOAD_INITIAL_COMPANY: "/companies/loadInitilCompany",
  LOAD_COMPANY: "/companies/loadCompany",
  UPDATE_COMPANY: "/companies/updateCompany",
  CREATE_COMPANY: "/companies/createCompany",
  DELETE_COMPANY: "/companies/deleteCompany",

  //userCompanies
  USER_COMPANIES: "/userCompany/userCompanies",
  COMPANY_USERS: "/userCompany/companieUsers",
  ADD_EXISTING_USER: "/userCompany/addExistingUser",

  //images
  UPLOAD_IMAGE: "uploadimage",
};
export default api;
