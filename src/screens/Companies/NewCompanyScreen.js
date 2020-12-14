import React, { useEffect, useState } from "react";
import FormInput from "../../components/Form/FormInput";
import { Formik, Form } from "formik";
import styled from "styled-components";
import paths from "../../constants/pathConstants";
import CreateCancelButton from "../../components/Form/CreateCancelButton";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { newCompany } from "../../config/InitialValues";
import { createCompany } from "../../store/company";
import PhoneFormInput from "../../components/Form/PhoneInput";
import { newCompanyValidation } from "../../validators/companyValidators";

const StyledForm = styled.div`
  width: 30%;
  margin: auto;
  hr {
    background-color: #e3e3e3;
  }
  padding: 20px;
`;
const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;
const Heading = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
`;
const SubHeading = styled.div`
  display: flex;
  column-gap: 10px;
`;

const NewCompanyScreen = ({}) => {
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const [phone, setPhone] = useState(null);
  const [primaryContactPhone, setContactPhone] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (val) => {
    if (phone) val = { ...val, phone };
    else {
      setError("Phone is Required");
    }
    if (primaryContactPhone) val = { ...val, primaryContactPhone };
    else {
      setError("Primary contact phone is Required");
    }
    dispatch(createCompany(val));
  };
  if (company.error) setError(company.error);
  return (
    <>
      <Formik
        initialValues={newCompany}
        validationSchema={newCompanyValidation}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <StyledForm>
          <Form>
            <h1>New Company</h1>
            <Heading>
              <div style={{ paddingRight: "10px" }}>
                <Image src="https://i.imgur.com/UeTYxRP.png" />
              </div>
              <div>
                <FormInput label="Company Name" name="name" type="text" />
                <FormInput label="Company Address" name="address" type="text" />
              </div>
            </Heading>
            <SubHeading>
              <div style={{ flexGrow: "1" }}>
                <FormInput label="City" name="city" type="text" />
              </div>
              <div style={{ flexGrow: "1" }}>
                <FormInput label="State" name="state" type="text" />
              </div>
              <div style={{ flexGrow: "1" }}>
                <FormInput label="Zip Code" name="zipCode" type="number" />
              </div>
            </SubHeading>
            <PhoneFormInput label="Company phone" setPhone={setPhone} />
            <FormInput label="Company email" name="email" type="email" />
            <FormInput label="Company website" name="website" type="text" />
            <hr />
            <FormInput
              label="Primary contact name"
              name="primaryContactName"
              type="text"
            />
            <PhoneFormInput
              label="Primary contact phone number"
              setPhone={setContactPhone}
            />
            <FormInput
              label="Primary contact job title"
              name="primaryContactJobTitle"
              type="text"
            />
            <hr />
            <ErrorMessage error={error} visible={error !== ""} />
            <CreateCancelButton path={paths.COMPANIES} />
          </Form>
        </StyledForm>
      </Formik>
    </>
  );
};
export default NewCompanyScreen;
