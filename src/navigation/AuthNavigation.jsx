import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { PAGES } from "../../App";

import GetStartedPage from "../pages/GetStartedPage";
import AuthPage from "../pages/AuthPage";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={PAGES.GetStarted}
      screenOptions={() => ({
        tabBarLabel: () => null,
      })}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={PAGES.GetStarted}
        component={GetStartedPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={PAGES.Auth}
        component={AuthPage}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
