import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Home from "./src/pages/Home";
import Activity from "./src/pages/Activity";

import Colours from "./src/colours/colourScheme";
import Goals from "./src/pages/Goals";
import Budgets from "./src/pages/Budgets";

export const PAGES = {
  Home: "Home",
  Activity: "Activity",
  Goals: "Goals",
  Budgets: "Budgets",
};

const Tab = createBottomTabNavigator();

export const generateIconFromRoute = (name) => {
  if (name === PAGES.Home) return "home";
  if (name === PAGES.Activity) return "barschart";
  if (name === PAGES.Goals) return "staro";
  if (name === PAGES.Budgets) return "wallet";
};

const TabNavigatorItem = ({ route, focused }) => {
  const iconName = generateIconFromRoute(route.name);
  return (
    <AntDesign
      name={iconName}
      size={24}
      color={focused ? Colours.BlueText : Colours.GrayText}
    />
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={PAGES.Home}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <TabNavigatorItem route={route} focused={focused} />
            ),
            tabBarLabel: () => null,
          })}
        >
          <Tab.Screen name={PAGES.Home} component={Home} />
          <Tab.Screen name={PAGES.Activity} component={Activity} />
          <Tab.Screen name={PAGES.Goals} component={Goals} />
          <Tab.Screen name={PAGES.Budgets} component={Budgets} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
