import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import styles from "./TransactionRow.styles";
import Colours from "../../colours/colourScheme";
import TransactionIcon from "../TransactionIcon/TransactionIcon";
import normalize from "../../utils/fontSizeUtils";

const TransactionRow = ({ transaction }) => {
  return (
    <View style={styles.lead}>
      <View style={styles.nameLead}>
        <TransactionIcon
          category={transaction.category}
          colour={Colours.DarkerLightBlue}
        />
        <Text numberOfLines={2} style={styles.name}>
          {transaction.name}
        </Text>
      </View>
      <Text style={styles.amount}>
        -
        <FontAwesome5
          name="dollar-sign"
          size={normalize(14)}
          color={Colours.BrightRed}
        />{" "}
        {transaction.amount}
      </Text>
    </View>
  );
};

export default TransactionRow;
