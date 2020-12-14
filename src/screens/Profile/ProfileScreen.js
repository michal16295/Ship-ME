import React, { useEffect, useState } from "react";
import FormInput from "../../components/Form/FormInput";
import { Formik, Form } from "formik";
import styled from "styled-components";
import FormFooter from "../../components/Form/FormFooter";
import PhoneFormInput from "../../components/Form/PhoneInput";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/user";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { updateUserValidation } from "../../validators/userValidators";
import ImageUpload from "../../components/Form/ImageUpload";
import { loadUser } from "../../store/user";

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
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin: auto;
`;
const ProfileScreen = ({ match }) => {
  const { profile, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState(null);
  const [secondaryPhone, setSecondPhone] = useState(null);

  useEffect(() => {
    if (match.params) {
      dispatch(loadUser(match.params.id));
    }
  }, []);
  const handleUpdate = (val) => {
    if (phone) val = { ...val, phone };
    if (secondaryPhone) val = { ...val, secondaryPhone };
    dispatch(updateUser(profile.user._id, val));
  };
  if (!profile) return null;
  return (
    <>
      <Formik
        initialValues={profile.user}
        enableReinitialize={true}
        validationSchema={updateUserValidation}
        onSubmit={(val) => {
          handleUpdate(val);
        }}
      >
        <Form>
          <StyledForm>
            <h1>Profile</h1>
            <Heading>
              <div style={{ paddingRight: "10px" }}>
                {profile && profile.user && (
                  <ImageUpload
                    model="users"
                    currentImage={profile.user.avatar}
                    id={profile.user._id}
                  />
                )}
              </div>
              <div>
                <FormInput label="First Name" name="firstName" type="text" />
                <FormInput label="Last Name" name="lastName" type="text" />
              </div>
            </Heading>
            <FormInput label="Job Title" name="jobTitle" type="text" />
            <hr />
            {profile.user && (
              <PhoneFormInput
                value={profile.user.phone}
                label="Primary phone number"
                setPhone={setPhone}
              />
            )}

            {profile.user && (
              <PhoneFormInput
                value={profile.user.secondaryPhone}
                label="Secondary phone number"
                setPhone={setSecondPhone}
              />
            )}
            <FormInput
              label="Primary email"
              name="email"
              type="email"
              disabled
            />
            <FormInput
              label="Secondary email"
              name="secondaryEmail"
              type="email"
            />
            <hr />
            <FormInput
              label="Old password"
              name="oldPassword"
              type="password"
              value="demcsdcds"
            />
            <FormInput label="New password" name="password" type="password" />
            <FormInput
              label="Confirm password"
              name="confirmPassword"
              type="password"
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
export default ProfileScreen;
