import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../../Images/logo.png";

const Title = styled.div`
  font-size: 42px;
  color: #222d50;
  font-weight: 600;
`;
const Image = styled.img`
  height: 70px;
`;
const Subtitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-top: 10px;
  padding-bottom: 50px;
`;
const HeadingLogo = styled.div`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;
function Heading({ title, subtitle }) {
  return (
    <div>
      <HeadingLogo>
        <div>
          <Image src={logo} />
        </div>

        <Title>{title}</Title>
      </HeadingLogo>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
}
export default Heading;
