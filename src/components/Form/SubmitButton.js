import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: #007991 !important;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  height: 3rem;
  color: white;
  cursor: pointer;
`;

function SubmitButton({ title, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
}

export default SubmitButton;
