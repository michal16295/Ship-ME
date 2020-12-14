import React from "react";
import styled from "styled-components";

const TD = styled.td`
  text-align: left;
  padding-top: 20px;
  line-height: 16px;
  color: #565656;
`;
const BoldTd = styled.td`
  font-weight: 500;
`;

const TableBody = ({ data, columns, renderCell }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((col) => {
            if (col.key === "_id" || col.key === "name") {
              return (
                <BoldTd key={item._id + (col.path || col.key)}>
                  {renderCell(item, col)}
                </BoldTd>
              );
            }
            return (
              <TD key={item._id + (col.path || col.key)}>
                {renderCell(item, col)}
              </TD>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
