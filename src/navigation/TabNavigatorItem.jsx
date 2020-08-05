import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colours from "../colours/colourScheme";
import { PAGES } from "../../App";

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

export default TabNavigatorItem;
