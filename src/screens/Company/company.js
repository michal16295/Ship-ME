import React, { useEffect, useState } from "react";
import FormInput from "../../components/Form/FormInput";
import { Formik, Form } from "formik";
import PhoneFormInput from "../../components/Form/PhoneInput";
import styled from "styled-components";
import FormFooter from "../../components/Form/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { updateCompany, loadCompany } from "../../store/company";
import ImageUpload from "../../components/Form/ImageUpload";

const StyledForm = styled.div`
  width: 30%;
  margin: auto;
  hr {
    background-color: #e3e3e3;
  }
`;
const Heading = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
`;
const SubHeading = styled.div`
  display: flex;
  column-gap: 10px;
`;

const CompanyScreen = ({ match }) => {
  const { loading, company } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState(null);
  const [primaryContactPhone, setContactPhone] = useState(null);

  useEffect(() => {
    dispatch(loadCompany(match.params.id));
  }, []);

  const handleSubmit = (val) => {
    if (phone) val = { ...val, phone };
    if (primaryContactPhone) val = { ...val, primaryContactPhone };
    console.log(val);
    dispatch(updateCompany(company._id, val));
  };
  if (!company) return null;
  return (
    <>
      <Formik
        initialValues={company}
        enableReinitialize={true}
        onSubmit={(val) => handleSubmit(val)}
      >
        <Form>
          <StyledForm>
            <h1>Company</h1>
            <Heading>
              <div style={{ paddingRight: "10px" }}>
                {company && (
                  <ImageUpload
                    model="companies"
                    currentImage={company.avatar}
                    id={company._id}
                  />
                )}
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
            {company && (
              <PhoneFormInput
                value={company.phone}
                label="Company phone"
                setPhone={setPhone}
              />
            )}
            <FormInput label="Company email" name="email" type="email" />
            <FormInput label="Company website" name="website" type="text" />
            <hr />
            <FormInput
              label="Primary contact name"
              name="primaryContactName"
              type="text"
            />
            {company && (
              <PhoneFormInput
                label="Primary contact phone"
                setPhone={setContactPhone}
                value={company.primaryContactPhone}
              />
            )}
            <FormInput
              label="Primary contact job title"
              name="primaryContactJobTitle"
              type="text"
            />
            <hr />
            <ErrorMessage error={error} visible={error !== null} />
          </StyledForm>
          <FormFooter title="Save" type="submit" />
        </Form>
      </Formik>
    </>
  );
};
export default CompanyScreen;
