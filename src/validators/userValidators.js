import * as Yup from "yup";

export const registerValidation = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your Email"),
  firstName: Yup.string().required("Please enter your First Name"),
  lastName: Yup.string().required("Please enter your Last Name"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});
export const newUserValidation = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your Email"),
  firstName: Yup.string().required("Please enter your First Name"),
  lastName: Yup.string().required("Please enter your Last Name"),
  jobTitle: Yup.string(),
  firstName: Yup.string().required("Please enter your First Name"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});
export const loginValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Your password is too short")
    .required("Please enter your password"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
});
export const updateUserValidation = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your Email"),
  firstName: Yup.string().required("Please enter your First Name"),
  lastName: Yup.string().required("Please enter your Last Name"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),
});
