import React from "react";
import { Text, View, ScrollView } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./AccountsCard.styles";
import Colours from "../../colours/colourScheme";
import normalize from "../../utils/fontSizeUtils";

const AccountsCard = () => {
  return (
    <View style={styles.lead}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.subcard, styles.checking]}>
          <Text style={[styles.name, styles.checkingText]}>
            <AntDesign
              style={{ marginRight: 5 }}
              name="creditcard"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />{" "}
            ING
          </Text>
          <Text style={[styles.amount, styles.checkingAmount]}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />{" "}
            15,728
            <Text style={styles.decimals}>.72</Text>
          </Text>
        </View>
        <View style={[styles.subcard, styles.checking]}>
          <Text style={[styles.name, styles.checkingText]}>
            <AntDesign
              style={{ marginRight: 5 }}
              name="creditcard"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />{" "}
            Raiffeisen
          </Text>
          <Text style={[styles.amount, styles.checkingAmount]}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.LightBlueText}
            />{" "}
            4,982
            <Text style={styles.decimals}>.49</Text>
          </Text>
        </View>
        <View style={[styles.subcard, styles.saving]}>
          <Text style={[styles.name, styles.savingText]}>
            <MaterialCommunityIcons
              style={{ marginRight: 3 }}
              name="bank-outline"
              size={normalize(16)}
              color={Colours.BlueText}
            />{" "}
            Savings
          </Text>
          <Text numberOfLines={2} style={[styles.amount, styles.savingAmount]}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.BlueText}
            />{" "}
            2,827,212
            <Text style={styles.decimals}>.72</Text>
          </Text>
        </View>
        <View style={[styles.subcard, styles.debt, styles.lastSubCard]}>
          <Text style={[styles.name, styles.debtText]}>
            <FontAwesome5
              style={{ marginRight: 5 }}
              name="credit-card"
              size={normalize(16)}
              color={Colours.GrayText}
            />{" "}
            Debt
          </Text>
          <Text style={[styles.amount, styles.debtAmount]}>
            <FontAwesome5
              name="dollar-sign"
              size={normalize(16)}
              color={Colours.GrayText}
            />{" "}
            1,384
            <Text style={styles.decimals}>.18</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountsCard;
