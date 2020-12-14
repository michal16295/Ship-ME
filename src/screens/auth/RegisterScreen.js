import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerValidation } from "../../validators/userValidators";
import FormInput from "../../components/Form/FormInput";
import Heading from "../../components/Form/Headings";
import SubmitButton from "../../components/Form/SubmitButton";
import GlobalStyle from "../../GlobalStyle";
import { Formik, Form } from "formik";
import { Wrapper, StyledForm, Titles, RegisterNames, SignUp } from "./styles";
import { register } from "../../store/currentUser";
import ErrorMessage from "../../components/Form/ErrorMessage";
import paths from "../../constants/pathConstants";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);

  if (user.loggedIn) {
    window.location = paths.HOMEPAGE;
  }
  return (
    <Wrapper>
      <GlobalStyle primary />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerValidation}
        onSubmit={(val) => dispatch(register(val))}
      >
        <StyledForm>
          <Form>
            <Titles>
              <Heading title="Ship-ME" subtitle="Sign Up" />
            </Titles>
            <RegisterNames>
              <FormInput label="First Name" name="firstName" type="text" />
              <FormInput label="Last Name" name="lastName" type="text" />
            </RegisterNames>

            <FormInput label="Email Address" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <ErrorMessage error={user.error} visible={user.errors} />
            <div>
              <SubmitButton title="Log In" type="submit" />
            </div>
          </Form>
          <SignUp to={paths.LOGIN}>Sign in</SignUp>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

export default RegisterScreen;
