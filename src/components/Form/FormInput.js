import React from "react";
import styled from "styled-components";
import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const Label = styled.label`
  width: 100%;
  font-weight: 900;
  font-size: 16px;
  display: block;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 5px 5px;
  box-sizing: border-box;
`;
const SyledInput = styled.div`
  padding-bottom: 20px;
  flex-grow: 1;
`;

function FormInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <SyledInput>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input className="text-input" {...field} {...props} />
      <ErrorMessage error={meta.error} visible={meta.touched && meta.error} />
    </SyledInput>
  );
}
export default FormInput;
