import { NavLink, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Bell } from "@styled-icons/boxicons-regular/Bell";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
  min-width: 340px;
  max-height: 300px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.390823);
  margin-top: 20px;
  right: 0;
  margin-right: 10px;
  padding-bottom: 5px;
  &:hover {
    display: block;
  }
  z-index: 1;
`;
export const Navbar = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => (props.primary ? "#222E50" : "white")};
  height: 64px;
  max-height: 64px;
  max-width: 100%;
  box-shadow: ${(props) =>
    props.primary ? null : "0px 0px 4px rgba(0, 0, 0, 0.5)"};
`;
export const NavLogo = styled.div`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  position: relative;
  font-size: 32px;
`;
export const Image = styled.img`
  float: left;
  height: 45px;
`;
export const Line = styled.div`
  border-left: 2px solid white;
  height: 50px;
  position: absolute;
  top: 5px;
`;
export const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 25px;
`;

export const RightSection = styled.div`
  float: right;
  padding: 5px;
  &:hover ${Dropdown} {
    display: block;
  }
`;
export const Icon = styled(Bell)`
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #007991;
  }
`;
export const Arrow = styled(ArrowIosDownwardOutline)`
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #007991;
  }
  &:hover ${Dropdown} {
    display: block;
  }
`;
export const Nav = styled(NavLink)`
  display: inline-block;
  color: ${(props) => (props.primary ? "white" : "#232323")};
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1px;
`;
export const LeftSection = styled.div`
  float: left;
  margin-left: 12px;
  margin-top: 17px;
`;
export const DropLink = styled(Link)`
  text-decoration: none;
  color: #232323;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  display: block;
  padding-top: 15px;
  padding-bottom: 5px;
  padding-left: 30px;
  &:hover {
    color: #007991;
  }
`;

export const ImageDrop = styled.div`
  padding-left: 30px;
  padding-top: 20px;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
`;
export const Wrapper = styled.div`
  display: inline-flex;
  grid-template-columns: repeat(2, 100px);
  grid-auto-rows: 70px;
`;
export const FullName = styled.span`
  font-weight: 900;
  display: block;
`;
export const Heading = styled.div`
  margin-top: 25px;
`;
export const DropDownLi = styled.li`
  display: inline-block;
  &:hover ${Dropdown} {
    display: block;
  }
`;
export const Logout = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #232323;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  display: block;
  padding-top: 15px;
  padding-bottom: 5px;
  padding-left: 30px;
  &:hover {
    color: #007991;
  }
`;
