import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
`;
const Label = styled.label`
  width: 100%;
  font-weight: 900;
  font-size: 16px;
  display: block;
`;

const FormSelectInput = ({ data, onSelectChange, label = null, ...props }) => {
  const [selectedData, updateSelectedData] = useState("");

  function handleChange(event) {
    updateSelectedData(event.target.value);
    if (onSelectChange) onSelectChange(event.target.value);
  }
  let options = data.map((data) => (
    <option key={data.companyId} value={data.companyId}>
      {data.name}
    </option>
  ));
  return (
    <>
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <Select name="customSearch" onChange={handleChange}>
        <option value="" disabled selected>
          Select your option
        </option>
        {options}
      </Select>
    </>
  );
};
export default FormSelectInput;
