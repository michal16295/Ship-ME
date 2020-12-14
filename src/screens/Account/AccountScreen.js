import React from "react";
import Users from "./Users/Users";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const Heading = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-grow: 2;
  padding: 20px;
  flex-direction: column;
  text-align: center;
`;
const H1 = styled.h1`
  top: 50%;
`;
const AccountScreen = (props) => {
  return (
    <Wrapper>
      <Heading>
        <H1>HERE WILL BE SOMETHING</H1>
      </Heading>
      <Users />
    </Wrapper>
  );
};

export default AccountScreen;
