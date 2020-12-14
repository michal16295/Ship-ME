import React, { useState } from "react";
import FormInput from "../../components/Form/FormInput";
import PhoneFormInput from "../../components/Form/PhoneInput";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/Form/ErrorMessage";
import FormSelectInput from "../../components/Form/FormSelectInput";
import { createUser } from "../../store/user";
import { newUser, roles } from "../../config/InitialValues";
import paths from "../../constants/pathConstants";
import CreateCancelButton from "../../components/Form/CreateCancelButton";
import { newUserValidation } from "../../validators/userValidators";
import ExistingUsers from "./ExistingUsers";

const StyledForm = styled.div`
  padding: 50px;
  width: 30%;
  margin: auto;
  hr {
    background-color: #e3e3e3;
  }
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
const PassWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 20px;
`;
const AddUserScreen = ({}) => {
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.user);
  const [error, setError] = useState(null);
  const [role, updateRole] = useState("");
  const [phone, setPhone] = useState(null);

  const onSelectChange = (event) => {
    updateRole(event);
  };

  const handleSubmit = (val) => {
    if (val.password !== val.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!phone) {
      setError("Phone is required");
      return;
    }
    if (role === "") {
      setError("Role is required");
      return;
    }
    val = { ...val, role, phone };
    dispatch(createUser(val));
  };
  return (
    <>
      <Formik
        initialValues={newUser}
        validationSchema={newUserValidation}
        onSubmit={(val) => handleSubmit(val)}
      >
        <StyledForm>
          <Form>
            <h1>New User</h1>
            <Heading>
              <div style={{ paddingRight: "10px" }}>
                <Image src="https://i.imgur.com/A8xSdbG.jpg" />
              </div>
              <div>
                <FormInput label="First Name" name="firstName" type="text" />
                <FormInput label="Last Name" name="lastName" type="text" />
              </div>
            </Heading>
            <FormInput
              label="Job Title (optional)"
              name="jobTitle"
              type="text"
              placeholder="ex. CEO"
            />
            <FormInput label="Email" name="email" type="email" />
            <PhoneFormInput label="Phone" setPhone={setPhone} />
            <FormSelectInput
              label="User type"
              name="role"
              data={roles}
              onSelectChange={onSelectChange}
            />
            <PassWrapper>
              <div style={{ flexGrow: "1" }}>
                <FormInput label="Password" name="password" type="password" />
              </div>
              <div style={{ flexGrow: "1" }}>
                <FormInput
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                />
              </div>
            </PassWrapper>
            <hr />
            <ErrorMessage error={stateUser.error} visible={stateUser.errors} />
            <ErrorMessage error={error} visible={error !== null} />
            <CreateCancelButton path={paths.ACCOUNT} />
          </Form>
          <ExistingUsers />
        </StyledForm>
      </Formik>
    </>
  );
};
export default AddUserScreen;
