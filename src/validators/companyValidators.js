import * as Yup from "yup";

export const newCompanyValidation = Yup.object().shape({
  name: Yup.string().required("Please enter the Company Name"),
  address: Yup.string().required("Please enter Company Address"),
  city: Yup.string().required("Please enter Company city"),
  state: Yup.string().required("Please enter Company state"),
  zipCode: Yup.string().required("Please enter Company zip code"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter Company email"),
  website: Yup.string().required("Please enter Company website"),
  primaryContactName: Yup.string().required(
    "Please enter Primary contact name"
  ),
  primaryContactJobTitle: Yup.string().required(
    "Please enter Primary contact job title"
  ),
});
