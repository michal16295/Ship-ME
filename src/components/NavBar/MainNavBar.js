import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyle from "../../GlobalStyle";
import logo from "../../Images/logo2.png";
import paths from "../../constants/pathConstants";
import { logout } from "../../store/currentUser";
import { useHistory } from "react-router-dom";
import { loadCurrentCompany } from "../../store/currentCompany";
import {
  Logout,
  Wrapper,
  ImageDrop,
  Heading,
  FullName,
  DropLink,
  DropDownLi,
  Nav,
  Navbar,
  NavLogo,
  Image,
  Avatar,
  Arrow,
  LeftSection,
  RightSection,
  Line,
  Icon,
  Dropdown,
} from "./NavBasStyles";
import { roles } from "../../config/roles";

const MainNavBar = ({}) => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.currentUser);
  const { company } = useSelector((state) => state.currentCompany);
  const history = useHistory();
  const currentPath = history.location.pathname;

  useEffect(() => {
    if (
      currentPath === paths.LOGIN ||
      currentPath === paths.REGISTER ||
      currentPath === paths.WELCOME_COMPANIES
    )
      return null;
    if (profile && profile.user !== undefined) {
      const companyId = profile.companyId;
      dispatch(loadCurrentCompany(companyId));
    }
  }, [loading]);
  const dropdown = (
    <Dropdown>
      <Wrapper>
        <div>
          <ImageDrop>
            {profile && profile.user && <Avatar src={profile.user.avatar} />}
          </ImageDrop>
        </div>
        <Heading>
          {profile && profile.user && (
            <FullName>
              {profile.user.firstName + " " + profile.user.lastName}
            </FullName>
          )}
          {company && <span style={{ fontWeight: "500" }}>{company.name}</span>}
        </Heading>
      </Wrapper>

      {profile && profile.user && (
        <DropLink to={`${paths.PROFILE}/${profile.user._id}`}>Profile</DropLink>
      )}
      {company && (
        <DropLink to={`${paths.COMPANY}/${company._id}`}>Company</DropLink>
      )}
      {profile &&
        profile.role !== roles.superAdmin &&
        profile.role !== roles.user && (
          <DropLink to={paths.ACCOUNT}>Account</DropLink>
        )}
      <hr />
      <DropLink to={paths.COMPANIES}>Companies</DropLink>
      <hr />
      <Logout onClick={() => dispatch(logout())}>Logout</Logout>
    </Dropdown>
  );
  if (
    currentPath === paths.LOGIN ||
    currentPath === paths.REGISTER ||
    currentPath === paths.WELCOME_COMPANIES
  )
    return null;
  else
    return (
      <>
        <GlobalStyle />
        <Navbar primary>
          <NavLogo>
            <Image src={logo} />
            Ship-ME
          </NavLogo>
          <LeftSection>
            <Line></Line>
            <Nav
              primary
              activeStyle={{
                color: "white",
                borderBottom: "solid 3px #007991",
              }}
              to="/shipments"
            >
              Shipments
            </Nav>
            <Nav
              primary
              activeStyle={{
                color: "white",
                borderBottom: "solid 3px #007991",
              }}
              to="/orders"
            >
              Orders
            </Nav>
          </LeftSection>
          <RightSection>
            <Icon size="30" color="white" />
            <DropDownLi>
              <Arrow size="25" color="white" />
              {dropdown}
            </DropDownLi>

            {profile && profile.user && <Avatar src={profile.user.avatar} />}
          </RightSection>
        </Navbar>
      </>
    );
};

export default MainNavBar;
