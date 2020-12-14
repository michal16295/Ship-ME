import React, { useEffect } from "react";
import { Navbar, LeftSection, Nav } from "./NavBasStyles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyle from "../../GlobalStyle";
import paths from "../../constants/pathConstants";
import { roles } from "../../config/roles";

const SubNavBar = () => {
  const { profile } = useSelector((state) => state.currentUser);
  const { company } = useSelector((state) => state.currentCompany);
  const history = useHistory();
  const currentPath = history.location.pathname;
  if (
    currentPath === paths.LOGIN ||
    currentPath === paths.REGISTER ||
    currentPath === paths.WELCOME_COMPANIES
  )
    return null;
  if (!profile || !company) return null;
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <LeftSection>
          <Nav
            activeStyle={{
              color: "#232323",
              borderBottom: "solid 3px #007991",
            }}
            to={`${paths.PROFILE}/${profile.user._id}`}
          >
            Profile
          </Nav>
          {profile.role !== roles.superAdmin && (
            <Nav
              activeStyle={{
                color: "#232323",
                borderBottom: "solid 3px #007991",
              }}
              to={`${paths.COMPANY}/${company._id}`}
            >
              Company
            </Nav>
          )}
          {(profile.role === roles.manager ||
            profile.role === roles.superAdmin) && (
            <Nav
              activeStyle={{
                color: "#232323",
                borderBottom: "solid 3px #007991",
              }}
              to={paths.ACCOUNT}
            >
              Account
            </Nav>
          )}
          <Nav
            activeStyle={{
              color: "#232323",
              borderBottom: "solid 3px #007991",
            }}
            to="/companies"
          >
            Companies
          </Nav>
        </LeftSection>
      </Navbar>
    </>
  );
};

export default SubNavBar;
