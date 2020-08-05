import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PAGES } from "../../App";

import TabNavigatorItem from "./TabNavigatorItem";
import HomePage from "../pages/HomePage";
import ActivityPage from "../pages/ActivityPage";
import GoalsPage from "../pages/GoalsPage";
import BudgetsPage from "../pages/BudgetsPage";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={PAGES.Home}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabNavigatorItem route={route} focused={focused} />
        ),
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name={PAGES.Home} component={HomePage} />
      <Tab.Screen name={PAGES.Activity} component={ActivityPage} />
      <Tab.Screen name={PAGES.Goals} component={GoalsPage} />
      <Tab.Screen name={PAGES.Budgets} component={BudgetsPage} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
