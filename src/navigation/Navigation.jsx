import React from "react";
import PropTypes from "prop-types";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import AuthNavigation from "./AuthNavigation";

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
