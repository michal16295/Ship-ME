import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import styled from "styled-components";

const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
`;
const Wrapper = styled.div`
  margin-top: 40px;
`;
const Table = ({ columns, data, renderCell }) => {
  return (
    <Wrapper>
      <TableStyle className="table">
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} renderCell={renderCell} />
      </TableStyle>
    </Wrapper>
  );
};
export default Table;
