import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 40%;
  padding-top: 20px;
`;
const CancelButton = styled(Link)`
  flex: 50%;
  background: #007991;
  border-radius: 2px;
  flex: 40%;
  color: #4f5b6b;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background: #ffffff;
  border: 1px solid #4f5b6b;
  cursor: pointer;
`;
const CreateButton = styled.button`
  background: #007991;
  border-radius: 2px;
  flex: 60%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
const CreateCancelButton = ({ path }) => {
  return (
    <ButtonsWrapper>
      <CancelButton to={path}>Cancel</CancelButton>
      <CreateButton type="submit">Create</CreateButton>
    </ButtonsWrapper>
  );
};

export default CreateCancelButton;
