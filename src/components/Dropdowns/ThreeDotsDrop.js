import React from "react";
import styled from "styled-components";
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded";
import { Link } from "react-router-dom";

const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 10px;
  z-index: 1;
  float: right;
`;
const Icon = styled(DotsHorizontalRounded)`
  width: 50px;
  height: 50px;
  padding-right: 20px;
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${Content} {
    display: block;
  }
  margin-right: 20px;
`;

const Nav = styled(Link)`
  padding: 5px;
  display: block;
  text-decoration: none;
  color: #232323;
  &:hover {
    background-color: #f2f2f2;
  }
`;
const Delete = styled.div`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 5px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
const ThreeDotsDrop = ({ path, id, model, onDelete }) => {
  return (
    <Dropdown>
      <Icon />
      <Content>
        <Nav to={`${path}/${id}`}>Edit</Nav>
        <Delete onClick={onDelete}>Delete</Delete>
      </Content>
    </Dropdown>
  );
};

export default ThreeDotsDrop;
