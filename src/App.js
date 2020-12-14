import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import InitilCompaniesScreen from "./screens/auth/CompaniesScreen";
import NotFound from "./components/Errors/NotFound";
import NotAuthorize from "./components/Errors/NotAuthorize";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import { PrivateRoute } from "./components/PrivateRoute";
import paths from "./constants/pathConstants";
import { loadCurrentUser } from "./store/currentUser";
import MainNavBar from "./components/NavBar/MainNavBar";
import SubNavBar from "./components/NavBar/SubNavBar";
import CompanyScreen from "./screens/Company/company";
import { useHistory } from "react-router-dom";
import AccountScreen from "./screens/Account/AccountScreen";
import AddUserScreen from "./screens/Account/AddUserScreen";
import CompaniesScreen from "./screens/Companies/CompaniesScreen";
import NewCompanyScreen from "./screens/Companies/NewCompanyScreen";

const App = ({}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  useEffect(() => {
    if (user.loggedIn) {
      dispatch(loadCurrentUser());
    }
  }, []);
  const privateRoutes = [
    <PrivateRoute
      key="HomePage"
      path={`${paths.PROFILE}/:id`}
      component={ProfileScreen}
    />,
    <PrivateRoute
      key="Company"
      exact
      path={`${paths.COMPANY}/:id`}
      component={CompanyScreen}
    />,
    <PrivateRoute
      key="Account"
      exact
      path={paths.ACCOUNT}
      component={AccountScreen}
    />,
    <PrivateRoute
      key="AddUser"
      exact
      path={paths.ADD_USER}
      component={AddUserScreen}
    />,
    <PrivateRoute
      key="AddUser"
      exact
      path={paths.COMPANIES}
      component={CompaniesScreen}
    />,
    <PrivateRoute
      key="NewCompany"
      exact
      path={paths.NEW_COMPANY}
      component={NewCompanyScreen}
    />,
  ];
  const publicRoutes = [
    <Route key="Login" exact path={paths.LOGIN} component={LoginScreen} />,
    <Route
      key="Register"
      exact
      path={paths.REGISTER}
      component={RegisterScreen}
    />,
    <Route
      key="InitialCompanies"
      exact
      path={paths.WELCOME_COMPANIES}
      component={InitilCompaniesScreen}
    />,
    <Route
      key="NotAuthorize"
      exact
      path={paths.NOT_AUTHORIZE}
      component={NotAuthorize}
    />,
  ];
  return (
    <Router history={history}>
      <MainNavBar />
      <SubNavBar />
      <Switch>
        {privateRoutes}
        {publicRoutes}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
