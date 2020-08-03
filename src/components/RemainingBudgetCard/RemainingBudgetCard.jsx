import React from "react";
import { Text, View } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

import CircularProgress from "./CircularProgress";

import styles from "./RemainingBudgetCard.styles";
import Colours from "../../colours/colourScheme";

const RemainingBudgetCard = () => {
  return (
    <View style={styles.lead}>
      <View style={styles.header}>
        <FontAwesome5 name="circle-notch" size={30} color={Colours.White} />
        <View style={styles.heading}>
          <Text style={styles.text}>Remaining</Text>
          <Text style={styles.subtitle}>current period</Text>
        </View>
      </View>
      <View>
        <CircularProgress
          size={128}
          strokeWidth={20}
          bgColor={Colours.White}
          pgColor={Colours.DarkerBlue}
          progress={37}
          text="63%"
          textSize={24}
          textColor={Colours.White}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.amount}>
          <Entypo name="credit" size={20} color={Colours.White} />
          5,301
          <Text style={styles.decimals}>.28</Text>
        </Text>
      </View>
    </View>
  );
};

export default RemainingBudgetCard;
