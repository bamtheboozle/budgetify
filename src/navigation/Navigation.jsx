import React from "react";
import PropTypes from "prop-types";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import AuthNavigation from "./AuthNavigation";

export const PAGES = {
  GetStarted: "GetStarted",
  Auth: "Auth",
  Home: "Home",
  Activity: "Activity",
  Goals: "Goals",
  Budgets: "Budgets",
};

const Navigation = ({ isAuthenticated }) => {
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Navigation;
