import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./NavigationTab.styles";
import Colours from "../colours/colourScheme";

export const PAGES = {
  Home: "home",
  Activity: "activity",
};

const NavigationTab = ({ activePage }) => {
  return (
    <View style={styles.lead}>
      <View style={styles.page}>
        <Text
          style={[
            styles.pageText,
            {
              color:
                activePage === PAGES.Home ? Colours.BlueText : Colours.GrayText,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="home-outline"
            size={24}
            color={
              activePage === PAGES.Home ? Colours.BlueText : Colours.GrayText
            }
          />
          {activePage === PAGES.Home && "Home"}
        </Text>
      </View>
      <View style={styles.page}>
        <Text
          style={[
            styles.pageText,
            {
              color:
                activePage === PAGES.Activity
                  ? Colours.BlueText
                  : Colours.GrayText,
            },
          ]}
        >
          <MaterialCommunityIcons
            name="chart-timeline-variant"
            size={24}
            color={
              activePage === PAGES.Activity
                ? Colours.BlueText
                : Colours.GrayText
            }
          />
          {activePage === PAGES.Activity && "Activity"}
        </Text>
      </View>
      <View style={styles.page}>
        <Text style={styles.pageText}>
          <MaterialCommunityIcons
            name="chart-timeline-variant"
            size={24}
            color={Colours.GrayText}
          />
          {activePage === PAGES.Activity && "Activity"}
        </Text>
      </View>
      <View style={styles.page}>
        <Text style={styles.pageText}>
          <MaterialCommunityIcons
            name="chart-timeline-variant"
            size={24}
            color={Colours.GrayText}
          />
        </Text>
      </View>
    </View>
  );
};

export default NavigationTab;
