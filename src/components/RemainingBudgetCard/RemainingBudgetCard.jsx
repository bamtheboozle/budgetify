import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import CircularProgress from "./CircularProgress";

import styles from "./RemainingBudgetCard.styles";
import Colours from "../../colours/colourScheme";
import normalize from "../../utils/fontSizeUtils";

const RemainingBudgetCard = () => {
  return (
    <View style={styles.lead}>
      <View style={styles.header}>
        <FontAwesome5
          name="circle-notch"
          size={normalize(30)}
          color={Colours.White}
        />
        <View style={styles.heading}>
          <Text style={styles.text}>Remaining</Text>
          <Text style={styles.subtitle}>current period</Text>
        </View>
      </View>
      <View>
        <CircularProgress
          size={normalize(100)}
          strokeWidth={normalize(14)}
          bgColor={Colours.White}
          pgColor={Colours.DarkerBlue}
          progress={37}
          text="63%"
          textSize={normalize(22)}
          textColor={Colours.White}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.amount}>
          <FontAwesome5
            name="dollar-sign"
            size={normalize(26)}
            color={Colours.White}
          />{" "}
          5,301
          <Text style={styles.decimals}>.28</Text>
        </Text>
      </View>
    </View>
  );
};

export default RemainingBudgetCard;
