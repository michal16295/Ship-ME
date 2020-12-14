import React from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin: auto;
`;
function FormFooter({ title, type }) {
  return (
    <ButtonWrap>
      <SubmitButton title={title} type={type} />
    </ButtonWrap>
  );
}

export default FormFooter;
