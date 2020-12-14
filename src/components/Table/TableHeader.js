import React from "react";
import styled from "styled-components";

const Header = styled.thead`
  border-bottom: 1px solid black;
`;
const TH = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: #232323;
`;
const TableHeader = ({ columns }) => {
  return (
    <Header>
      <tr>
        {columns.map((col) => (
          <TH key={col.path || col.key}>{col.label}</TH>
        ))}
      </tr>
    </Header>
  );
};

export default TableHeader;
