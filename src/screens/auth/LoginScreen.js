import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../components/Form/FormInput";
import Heading from "../../components/Form/Headings";
import SubmitButton from "../../components/Form/SubmitButton";
import GlobalStyle from "../../GlobalStyle";
import { Formik, Form } from "formik";
import { Wrapper, StyledForm, Titles, SignUp } from "./styles";
import { loginValidation } from "../../validators/userValidators";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { login } from "../../store/currentUser";
import paths from "../../constants/pathConstants";

const LoginScreen = ({}) => {
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
          email: "",
          password: "",
        }}
        validationSchema={loginValidation}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        <StyledForm>
          <Form>
            <Titles>
              <Heading title="Ship-ME" subtitle="Sign In" />
            </Titles>
            <FormInput label="Email Address" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            <ErrorMessage error={user.error} visible={user.errors} />
            <SubmitButton title="Log In" type="submit" />
          </Form>
          <SignUp to={paths.REGISTER}>Sign up</SignUp>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
export default LoginScreen;
