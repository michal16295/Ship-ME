import React, { useState } from "react";
import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Label = styled.label`
  width: 100%;
  font-weight: 900;
  font-size: 16px;
  display: block;
  padding-bottom: 10px;
`;

const PhoneWrapper = styled.div`
  padding-bottom: 20px;
  flex-grow: 1;
`;
const PhoneFormInput = ({ value, setPhone, label }) => {
  return (
    <PhoneWrapper>
      <Label htmlFor={label}>{label}</Label>
      <PhoneInput
        value={value}
        inputStyle={{ width: "100%" }}
        country={"il"}
        name="phone"
        onChange={setPhone}
      />
    </PhoneWrapper>
  );
};
export default PhoneFormInput;
