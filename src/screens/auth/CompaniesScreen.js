import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../components/Form/Headings";
import SubmitButton from "../../components/Form/SubmitButton";
import GlobalStyle from "../../GlobalStyle";
import FormSelectInput from "../../components/Form/FormSelectInput";
import { Wrapper, StyledForm, Titles } from "./styles";
import ErrorMessage from "../../components/Form/ErrorMessage";
import { loadUserCompanies } from "../../store/userCompany";
import { useHistory } from "react-router-dom";
import { loadInitialCompany } from "../../store/currentCompany";
import paths from "../../constants/pathConstants";

const InitilCompaniesScreen = ({}) => {
  const dispatch = useDispatch();
  const userCompany = useSelector((state) => state.userCompany);
  const { profile } = useSelector((state) => state.currentUser);
  const [selectedData, updateSelectedData] = useState("");
  const history = useHistory();

  useEffect(() => {
    dispatch(loadUserCompanies());
  }, []);
  const onSelectChange = (event) => {
    updateSelectedData(event);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadInitialCompany(selectedData));
    history.push(paths.PROFILE + `/${profile.user._id}`);
  };
  return (
    <Wrapper>
      <GlobalStyle primary />
      <StyledForm>
        <Titles>
          <Heading title="Ship-ME" subtitle="Companies" />
        </Titles>
        <FormSelectInput
          data={userCompany.companies}
          onSelectChange={onSelectChange}
        />
        <ErrorMessage error={userCompany.error} visible={userCompany.errors} />
        <SubmitButton title="Enter" onClick={handleSubmit} />
      </StyledForm>
    </Wrapper>
  );
};
export default InitilCompaniesScreen;
