import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 723px;
  height: 710px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
export const StyledForm = styled.div`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  padding: 100px;
  background-color: white;
`;
export const Titles = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;
export const SignUp = styled(Link)`
  padding-top: 10px;
  text-align: center;
  color: black;
`;
export const RegisterNames = styled.div`
  display: flex;
  column-gap: 10px;
`;
